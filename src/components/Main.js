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
      <div className="left">
      <RetrieveUsers {...userUtils} />
      <AgeFilter {...userUtils} />
      </div>
      <Search {...userUtils} />
      <UserList {...userUtils} />

    </MainWrapper>
  )
}

export default Main
