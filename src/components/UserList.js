import React from 'react'

import User from './User'
import sort from '../assets/sort-arrows.svg'


const UserList = ({ users, setReverseName, setReverseAge }) => {
  return (
    <div className="user-list">
      {users.length ? (
        <>
          <div className="user-list-header">
            <div className="user-name">
              Name
              <img src={sort} alt="sort name" onClick={setReverseName} />
            </div>
            <div className="user-age">
              Age
              <img src={sort} alt="sort age" onClick={setReverseAge} />
            </div>
          </div>
          <div className="users">
            {users.map(user => <User key={user.email} {...user} />)}
          </div>
        </>
      ) : null}
    </div>
  )
}

export default UserList
