import { useState } from 'react';

const useUserUtils = () => {
  const API_URL = 'http://localhost:8099'
  const ageGroups = ['kids', 'adults', 'seniors']

  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState({ min: 0, max: 100 })
  const [allUsers, setAllUsers] = useState([])
  const [search, setSearch] = useState('')
  const [reverseName, setReverseName] = useState(false)
  const [reverseAge, setReverseAge] = useState(false)
  const [sortBy, setSortBy] = useState('name')

  const { min, max } = filter

  // Toggle name sort direction
  const toggleReverseName = () => {
    const val = sortBy === 'age' ? false : !reverseName
    sortUsers(users, val, false, 'name')
    setSortBy('name')
    setReverseName(val)
  }

  // Toggle age sort direction
  const toggleReverseAge = () => {
    const val = sortBy === 'name' ? false : !reverseAge
    sortUsers(users, false, val, 'age')
    setSortBy('age')
    setReverseAge(val)
  }

  const sortByName = ({people, leftName, rightName,leftAge, rightAge}) => {
    return people.sort((a, b)=> {
      if (a.name.lastName === b.name.lastName){
        return a.age > b.age ? leftAge : rightAge
      } else {
        return a.name.lastName < b.name.lastName ? leftName : rightName
      }
    })
  }

  const sortByAge = ({people, leftName, rightName,leftAge, rightAge}) => {
    return people.sort((a, b)=> {
      if (a.age === b.age){
        return a.name.lastName < b.name.lastName ? leftName : rightName
      } else {
        return a.age > b.age ? leftAge : rightAge
      }
    })
  }

  // Sort by firstName + lastName asc + age descending (default)
  const sortUsers = (people, nameReverse = false, ageReverse = false, sortByFirst = 'name') => {
    const defaultSort = [-1, 1]
    const [leftName, rightName] = nameReverse ? defaultSort.reverse() : defaultSort
    const [leftAge, rightAge] = ageReverse ? defaultSort.reverse() : defaultSort
    const sortInfo = { people, leftName, rightName,leftAge, rightAge }

    if (sortByFirst === 'name') {
      return sortByName(sortInfo)
    } else {
      return sortByAge(sortInfo)
    }
  }

  // Filter user list by search by name results
  const searchUsers = (term, users) => {
    return users.filter(({name}) => {
      const options = [name.firstName, name.lastName, `${name.firstName} ${name.lastName}`]
      return options.some((o) => o.toLowerCase().includes(term.trim()))
    })
  }

  const filterUsers = (people, minAge, maxAge) => {
    const filtered = people.filter(({age}) => minAge <= age && age <= maxAge)
    const sorted = sortUsers(filtered, reverseName, reverseAge, sortBy)
    setUsers(sorted)
  }

  // Filter users by age
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

  // Search users by name
  const handleSearch = (term) => {
    setSearch(term)
    let matches = allUsers
    if (term) {
      matches = searchUsers(term, allUsers)
    }
    const { min: minAge, max: maxAge } = filter
    filterUsers(matches, minAge, maxAge)
  }

  // Click Retrieve Users
  const getUsers = async () => {
    setSearch('')
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
    setReverseName: toggleReverseName,
    setReverseAge: toggleReverseAge,
  }
}

export default useUserUtils
