import React from 'react'
import UserCom from './User'


const RetrieveUsers = ({getUsers, filter, users}) => {

  const handleGetUsers = () => {
    console.log('handle get users!, filter = ', filter)
    getUsers(filter)
  }

  return (
    <div>
      <h2>Users</h2>
      <div>
        <button type="button" onClick={handleGetUsers}>Retrieve Users</button>
      </div>
      {users.map((user) => (
        <UserCom key={user.email} {...user} />
      ))}
    </div>
  )
}

export default RetrieveUsers
