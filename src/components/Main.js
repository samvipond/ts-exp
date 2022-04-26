import React from 'react'

import Header from './Header'
import RetrieveUsers from './RetrieveUsers'
import AgeFilter from './AgeFilter'
import Search from './Search'
import UserList from './UserList'
import MainWrapper from './Wrapper'
import useUserUtils from '../utils'

const Main = () => {
  const userUtils = useUserUtils()
  return (
    <MainWrapper>
      <Header />
      <div className="content">
      <div className="left">
      <h2>Users</h2>
      <AgeFilter {...userUtils} />
      <RetrieveUsers {...userUtils} />
      </div>
      <div className="right">
      <Search {...userUtils} />
      <UserList {...userUtils} />
      </div>
      </div>
    </MainWrapper>
  )
}

export default Main
