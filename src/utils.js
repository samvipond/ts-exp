import { useState } from 'react';

const useUserUtils = () => {
  const API_URL = 'http://localhost:8099'
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState({ min: 0, max: 100 })
  const ageGroups = ['kids', 'adults', 'seniors']
  const { min, max } = filter

  const getUsers = async () => {
    const [kidsResponse, adultsResponse, seniorsResponse] = await Promise.all(
      ageGroups.map((a) => (fetch(`${API_URL}/users/${a}`))))

    const [{ data: kids }, { data: adults }, seniors] = await Promise.all([
      kidsResponse.json(),
      adultsResponse.json(),
      seniorsResponse.json(),
    ])

    const people = [...kids, ...adults, ...seniors]
    const filtered = people.filter(({age}) => min <= age && age <= max)
    setUsers(filtered)

  }

  return {
    users,
    setUsers,
    filter,
    setFilter,
    getUsers,
  }
}

export default useUserUtils
