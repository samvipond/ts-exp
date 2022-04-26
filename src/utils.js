import { useState } from 'react';

const useUserUtils = () => {
  const doStuff = () => {
    console.log('im doin stuff!')
    return true
  }
  const API_URL = 'http://localhost:8099'
  const [users, setUsers] = useState([])
  const [filterYa, setFilterYa] = useState({ min: 0, max: 100 })
  const ageGroups = ['kids', 'adults', 'seniors']
  // const { min, max } = filter

  const filter = filterYa

  const setFilter = (theVal) => {
    console.log('here we are literally settings the filter?@!?', theVal)
    setFilterYa(theVal)
  }

  const getUsers = async ({ min, max }) => {

    console.log('filter as per here', filter)

    const [kidsResponse, adultsResponse, seniorsResponse] = await Promise.all(
      ageGroups.map((a) => (fetch(`${API_URL}/users/${a}`))))

    const [{ data: kids }, { data: adults }, seniors] = await Promise.all([
      kidsResponse.json(),
      adultsResponse.json(),
      seniorsResponse.json(),
    ])

    const people = [...kids, ...adults, ...seniors]
    const filtered = people.filter(({age}) => min <= age && age <= max)
    console.log(people)
    console.log(filtered)
    console.log(min)
    console.log(max)

    setUsers(filtered)

  }

  return {
    users,
    setUsers,
    filter,
    setFilter,
    API_URL,
    getUsers,
    doStuff,
  }
}

export default useUserUtils
