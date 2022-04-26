import React, { useState } from 'react';

import useUserUtils from '../utils.js'
import UserCom from './User'


const RetrieveUsers = ({url, test}) => {

  const { filter, setFilter, doStuff, users, setUsers, getUsers } = useUserUtils()
  return (
    <div>
      <h2>Users</h2>
      <div>
        <button type="button" onClick={getUsers}>Retrieve Users</button>
      </div>
      {users.map((user) => (
        <UserCom key={user.email} {...user} />
      ))}
    </div>
  )
}

export default RetrieveUsers
