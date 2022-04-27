import React from 'react'

import User from './User'
import sort from '../assets/sort-arrows.svg'


const UserList = ({ users, setReverseName, setReverseAge }) => {
  return (
    <div className="user-list">
      <div className="user-list-header">
        <div className="user-name">
          Name
          <img src={sort} alt="sort name" onClick={setReverseName} />
        </div>
        <div>
          Age
          <img src={sort} alt="sort age" onClick={setReverseAge} />
        </div>
      </div>
      {users.length ? (
        users.map(user => <User key={user.email} {...user} />)
      ) : null}
    </div>
  )
}

export default UserList
