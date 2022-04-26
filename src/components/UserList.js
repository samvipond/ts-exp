import React from 'react'
import User from './User'

const UserList = ({users}) => users.length ? (
  users.map(user => <User key={user.email} {...user} />)
) : null

export default UserList
