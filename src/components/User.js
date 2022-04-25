import React from 'react'




const User = ({name, age, country, email }) => {
  const nice = true
  return (
    <div>
      <span>{name.firstName}</span>
      <span>&nbsp;{name.lastName}</span>
    </div>
  )

}

export default User
