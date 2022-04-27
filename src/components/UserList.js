import React from 'react'
import User from './User'

const UserList = ({users}) => (
  <div className="user-list">
    <div className="user-list-header">
      <div className="user-name">
        Name
      </div>
      <div>
        Age
      </div>
    </div>
    {users.length ? (
      users.map(user => <User key={user.email} {...user} />)
    ) : null}
  </div>
)

export default UserList
