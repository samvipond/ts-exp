import React from 'react'

const RetrieveUsers = ({getUsers}) => {

  return (
    <div className="users">
      <div>
        <button onClick={getUsers} type="button" class="btn btn-success btn-rounded">
          Retrieve Users
        </button>
      </div>
    </div>
  )
}

export default RetrieveUsers
