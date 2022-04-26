import { useState } from 'react';

const useUserUtils = () => {
  const doStuff = () => {
    console.log('im doin stuff!')
    return true
  }
  const API_URL = 'http://localhost:8099'
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState({ min: 0, max: 100 })

  const getUsers = async () => {
    console.log('getUsers [utils]!', API_URL);
    const response = await fetch(`${API_URL}/users/kids`)
    const {data} = await response.json()
    console.log(data);
    setUsers(data)

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
