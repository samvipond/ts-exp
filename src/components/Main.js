import React from 'react'

import RetrieveUsers from './RetrieveUsers.js'
import AgeFilter from './AgeFilter.js'
import useUserUtils from '../utils.js'

const Main = () => {
  const userUtils = useUserUtils()
  return (
    <div className="App">
      <h1>Planned Test</h1>
      <RetrieveUsers {...userUtils} />
      <AgeFilter {...userUtils} />
    </div>
  )
}

export default Main
