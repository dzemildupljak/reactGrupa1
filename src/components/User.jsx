import React from "react";

const User = ({ usr, rmUser, editUsr }) => {
  return (
    <tr>
      <td>{usr.id}</td>
      <td>{usr.name}</td>
      <td>{usr.username}</td>
      <td>{usr.email}</td>
      <td>{usr.is_active ? "active" : "inactive"}</td>
      <td>
        <button
          onClick={() => {
            rmUser(usr.id);
          }}
        >
          Remove
        </button>
        <button
          onClick={() => {
            editUsr(usr.id);
          }}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default User;
