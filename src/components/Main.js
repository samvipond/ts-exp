import React from 'react'

import RetrieveUsers from './RetrieveUsers'
import AgeFilter from './AgeFilter'
import UserList from './UserList'
import useUserUtils from '../utils'

const Main = () => {
  const userUtils = useUserUtils()
  return (
    <div className="App">
      <h1>Planned Test</h1>
      <RetrieveUsers {...userUtils} />
      <AgeFilter {...userUtils} />
      <UserList {...userUtils} />
    </div>
  )
}

export default Main
