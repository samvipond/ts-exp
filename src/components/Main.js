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
      <h2 className="title">Users</h2>
      <div className="left main">
      <AgeFilter {...userUtils} />
      <RetrieveUsers {...userUtils} />
      </div>
      <div className="right main">
      <Search {...userUtils} />
      <UserList {...userUtils} />
      </div>
      </div>
    </MainWrapper>
  )
}

export default Main
