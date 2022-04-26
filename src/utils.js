import { useState } from 'react';

const useUserUtils = () => {
  const API_URL = 'http://localhost:8099'
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState({ min: 0, max: 100 })
  const [allUsers, setAllUsers] = useState([])
  const [search, setSearch] = useState('')
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

  const searchUsers = (term, users) => {
    return users.filter(({name}) => {
      const options = [name.firstName, name.lastName, `${name.firstName} ${name.lastName}`]
      return options.some((o) => o.toLowerCase().includes(term.trim()))
    })
  }

  const filterUsers = (people, minAge, maxAge) => {
    console.log('yes filterUsers!', people)
    const filtered = people.filter(({age}) => minAge <= age && age <= maxAge)
    const sorted = sortUsers(filtered)
    setUsers(sorted)
  }

  const handleUpdateFilter = (value) => {
    setFilter(value)
    const { min: minAge, max: maxAge } = value
    if (search) {
      const searched = searchUsers(search, allUsers)
      filterUsers(searched, minAge, maxAge)
      return
    }
    if (allUsers.length) {
      filterUsers(allUsers, minAge, maxAge)
    }
  }

  const handleSearch = (term) => {
    setSearch(term)
    let matches = allUsers
    if (term) {
      matches = searchUsers(term, allUsers)
    }
    const { min: minAge, max: maxAge } = filter
    filterUsers(matches, minAge, maxAge)
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
    search,
    setSearch: handleSearch,
  }
}

export default useUserUtils
