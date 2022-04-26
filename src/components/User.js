import React from 'react'




const User = ({name, age, country, email }) => {
  const nice = true
  return (
    <div>
      <div>
        <span style={{ width: '200px', display: 'inline-block'}}>{name.firstName} </span>
        <span style={{ width: '200px', display: 'inline-block'}}>{name.lastName} </span>
        <span>{age}</span>
      </div>
    </div>
  )
}

export default User
