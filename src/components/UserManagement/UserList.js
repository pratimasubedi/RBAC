import React from 'react';
import { Link } from 'react-router-dom';
import './UserList.css';

const UserList = ({ users, setUsers }) => {
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = users.filter(user => user.id !== id);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  return (
    <div className="user-list">
      <h2>User List</h2>
      <div className="actions">
        <Link to="/users/add">
          <button className="btn">Add User</button>
        </Link>
        <Link to="/roles">
          <button className="btn">Manage Roles</button>
        </Link>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>{user.name} ({user.email})</div>
            <div>
              <Link to={`/users/edit/${user.id}`}>
                <button className="btn">Edit</button>
              </Link>
              <button className="btn btn-delete" onClick={() => handleDelete(user.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
