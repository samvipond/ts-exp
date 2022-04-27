import React from 'react'

const User = ({name, age, country, email }) => (
  <div className="user-details">
    <div className="user-name">
      <span>{name.firstName} </span>
      <span>{name.lastName} </span>
    </div>
    <div>
      {age}
    </div>
  </div>
)

export default User
