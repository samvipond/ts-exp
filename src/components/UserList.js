import React from 'react'
import User from './User'

const UserList = ({users}) => (
  <div className="user-list">
    {users.length ? (
      users.map(user => <User key={user.email} {...user} />)
    ) : null}
  </div>
)

export default UserList
