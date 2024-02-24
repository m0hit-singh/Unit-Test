import React, { useEffect, useState } from "react";

type TUsers = {
  id: number;
  email: string;
  username: string;
  phone: string;
};
export const UsersList = () => {
  const [users, setUsers] = useState<TUsers[]>([]);

  useEffect(() => {
    async function getUsers() {
      fetch("https://fakestoreapi.com/users")
        .then((res) => res.json())
        .then((json) => setUsers(json))
        .catch(error => console.log(error))
    }

    getUsers();
  }, []);
  return (
    <table cellPadding={2}>
      <thead>
        <th>id</th>
        <th>User Name</th>
        <th>Email</th>
        <th>Phone No.</th>
      </thead>
      <tbody>
        {users &&
          users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
