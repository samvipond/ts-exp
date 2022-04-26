import { useState } from 'react';

const useUserUtils = () => {
  const API_URL = 'http://localhost:8099'
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState({ min: 0, max: 100 })
  const [allUsers, setAllUsers] = useState([])
  const ageGroups = ['kids', 'adults', 'seniors']
  const { min, max } = filter

  const filterUsers = (people, minAge, maxAge) => {
    const filtered = people.filter(({age}) => minAge <= age && age <= maxAge)
    setUsers(filtered)
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
