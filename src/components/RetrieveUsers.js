import React, { useState } from 'react';

import useUserUtils from '../utils.js'
import UserCom from './User'


// interface IProps {
//   url: string,
//   test: Function,
// }

// type Results = {
//   data: Array<{}>;
// };

// type Response = {
//   data: Results;
// };

// interface Name {
//   firstName: string,
//   lastName: string,
// }

// interface User {
//   name: Name,
//   age: number,
//   country: string,
//   email: string,
// }

// interface UserUtils {
//   filter: Function,
//   setFilter: Function,
// }

// {url}: IProps

const RetrieveUsers = ({url, test}) => {

  // const [users, setUsers] = useState([])
  const { filter, setFilter, doStuff, users, setUsers, getUsers } = useUserUtils()

  const getUsers123 = async () => {
    console.log('getUsers!', url);
    test()
    // console.log(useUserUtils.doStuff)
    doStuff()
    // const response = await fetch(`${url}/users/kids`)
    // console.log(response);

    fetch(`${url}/users/kids`)
      .then((res) => res.json())
      .then((json) => {
        console.log('cool', json.data)
        setUsers(json.data)
      })

  }

  const cool = true
  return (
    <div>
      <h2>Users</h2>
      <div>
        <button type="button" onClick={getUsers}>Retrieve Users</button>
      </div>
      {/* test */}
      {users.map((user) => (
        <UserCom key={user.email} {...user} />
      ))}
    </div>
  )
}

export default RetrieveUsers
