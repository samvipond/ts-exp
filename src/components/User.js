import React from 'react'




const User = ({name, age, country, email }) => {
  const nice = true
  return (
    <div>
      <div>
        <span>{name.firstName} </span>
        <span>{name.lastName} </span>
        <span>{age}</span>
      </div>
    </div>
  )
}

export default User
