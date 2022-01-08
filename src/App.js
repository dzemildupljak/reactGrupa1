import React, { useEffect, useState } from "react";
import "./App.css";
import User from "./components/User";

function App() {
  const [users, setUsers] = useState([
    {
      id: 30,
      name: "sysadmin",
      email: "sysadmin@mail.com",
      username: "sysadmin",
      role: "sysadmin",
      is_active: true,
    },
    {
      id: 3,
      name: "imran",
      email: "imranmidovic@gmail.com",
      username: "imran",
      role: "user",
      is_active: true,
    },
    {
      id: 31,
      name: "Faris Bektašević",
      email: "bektasevicfaris@gmail.com",
      username: "faris",
      role: "undefined",
      is_active: true,
    },
    {
      id: 26,
      name: "fdslfkdl;ksa",
      email: "lfdksflkdsl@email.com",
      username: "dfksldksl;",
      role: "undefined",
      is_active: true,
    },
    {
      id: 27,
      name: "Denan",
      email: "dz@gamil.com",
      username: "dz",
      role: "undefined",
      is_active: true,
    },
    {
      id: 28,
      name: "neko",
      email: "neko@email.com",
      username: "neko",
      role: "undefined",
      is_active: true,
    },
    {
      id: 29,
      name: "Sejo",
      email: "s@gmail.com",
      username: "seka",
      role: "undefined",
      is_active: true,
    },
  ]);

  const removeUser = (uId) => {
    setUsers(
      users.filter((u) => {
        if (u.id !== uId) {
          return u;
        }
      })
    );
  };

  return (
    <div className="container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Active</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => {
            return <User key={u.id} usr={u} rmUser={removeUser} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
