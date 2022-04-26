import { useState } from 'react';

const useUserUtils = () => {
  const API_URL = 'http://localhost:8099'
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState({ min: 0, max: 100 })
  const [allUsers, setAllUsers] = useState([])
  const ageGroups = ['kids', 'adults', 'seniors']
  const { min, max } = filter

  const sortUsers = (people, nameDir = 'asc', ageDir = 'desc') => {
    return people.sort((a, b)=> {
      if (a.name.lastName === b.name.lastName){
        return a.age > b.age ? -1 : 1
      } else {
        return a.name.lastName < b.name.lastName ? -1 : 1
      }
    })
  }

  const filterUsers = (people, minAge, maxAge) => {
    const filtered = people.filter(({age}) => minAge <= age && age <= maxAge)
    const sorted = sortUsers(filtered)
    setUsers(sorted)
  }

  const handleUpdateFilter = (value) => {
    setFilter(value)
    const { min: minAge, max: maxAge } = value
    if (allUsers.length) {
      filterUsers(allUsers, minAge, maxAge)
    }
  }

  const getUsers = async () => {
    const [kidsResponse, adultsResponse, seniorsResponse] = await Promise.all(
      ageGroups.map((a) => (fetch(`${API_URL}/users/${a}`))))

    const [{ data: kids }, { data: adults }, seniors] = await Promise.all([
      kidsResponse.json(),
      adultsResponse.json(),
      seniorsResponse.json(),
    ])

    const people = [...kids, ...adults, ...seniors]
    people.forEach((p) => {
      p.fullName = `${p.firstName} ${p.lastName}`
    })
    setAllUsers(people)
    filterUsers(people, min, max)

  }

  return {
    users,
    setUsers,
    filter,
    setFilter: handleUpdateFilter,
    getUsers,
    filterUsers,
  }
}

export default useUserUtils
