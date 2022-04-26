import React from 'react'
import UserCom from './User'


const RetrieveUsers = ({users, getUsers}) => {

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
