import React from 'react'

const User = ({ name, age, email }) => (
  <div className="user-details">
    <input type="checkbox" id={email} name={email}></input>
    <div className="user-name">
      <span>{name.firstName} </span>
      <span>{name.lastName} </span>
    </div>
    <div className="user-age">
      {age}
    </div>
  </div>
)

export default User
