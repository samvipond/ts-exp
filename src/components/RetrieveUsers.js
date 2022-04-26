import React from 'react'

const RetrieveUsers = ({getUsers}) => {

  return (
    <div>
      <h2>Users</h2>
      <div>
        <button type="button" onClick={getUsers}>Retrieve Users</button>
      </div>
    </div>
  )
}

export default RetrieveUsers
