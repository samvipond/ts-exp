import React, {useState} from 'react';

interface IProps {
  url: string
}

// type Results = {
//   data: Array<{}>;
// };

// type Response = {
//   data: Results;
// };

interface Name {
  firstName: string,
  lastName: string,
}

interface User {
  name: Name,
  age: number,
  country: string,
  email: string,
}

const RetrieveUsers = ({url}: IProps) => {

  const [users, setUsers] = useState([])

  const getUsers = async () => {
    console.log('getUsers!', url);
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
      {users.map((user:User) => (
        <div>
          <span>{user.name.firstName}</span>
          <span>&nbsp;{user.name.lastName}</span>
        </div>
      ))}
    </div>
  )
}

export default RetrieveUsers
