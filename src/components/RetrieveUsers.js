import React from 'react'

const RetrieveUsers = ({ getUsers }) => (
  <div className="users">
    <div>
      <button onClick={getUsers} type="button" className="btn btn-success btn-rounded">
        Retrieve Users
      </button>
    </div>
  </div>
)

export default RetrieveUsers
