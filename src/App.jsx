import React, { useState } from "react";
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
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    is_active: false,
  });
  const [addEdit, setAddEdit] = useState(1);

  const removeUser = (uId) => {
    setUsers(
      users.filter((u) => {
        if (u.id !== uId) {
          return u;
        }
      })
    );
  };
  const fillForm = (uId) => {
    let editedUser = {};
    users.forEach((u) => {
      if (uId === u.id) {
        editedUser = u;
      }
    });
    setUser(editedUser);
    setAddEdit(2);
  };

  const greatesId = () => {
    let maxid = users[0].id;
    users.forEach((u) => {
      if (u.id > maxid) {
        maxid = u.id;
      }
    });
    return maxid;
  };

  const saveEditedUser = (uId) => {
    setUsers((prevState) => {
      return prevState.map((u) => {
        if (uId === u.id) {
          return user;
        } else {
          return u;
        }
      });
    });
    setUser({
      name: "",
      username: "",
      email: "",
      is_active: false,
    });
    setAddEdit(1);
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setUser((prevState) => {
      if (e.target.name === "is_active") {
        return {
          ...prevState,
          [e.target.name]: !user.is_active,
        };
      } else {
        return {
          ...prevState,
          [e.target.name]: e.target.value,
        };
      }
    });
  };

  const addNewUser = () => {
    setUsers([...users, { id: greatesId() + 1, ...user }]);
    setUser({
      name: "",
      username: "",
      email: "",
      is_active: false,
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        <input
          type="checkbox"
          name="is_active"
          checked={user.is_active}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        {addEdit === 1 && <button onClick={addNewUser}>Add user</button>}
        {addEdit === 2 && (
          <button
            onClick={() => {
              saveEditedUser(user.id);
            }}
          >
            Save
          </button>
        )}
      </div>
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
            return (
              <User key={u.id} usr={u} rmUser={removeUser} editUsr={fillForm} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
