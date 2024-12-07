import React from 'react';
import { Link } from 'react-router-dom';

const RoleList = ({ roles, setRoles }) => {
  const handleDeleteRole = (id) => {
    const updatedRoles = roles.filter(role => role.id !== id);
    setRoles(updatedRoles);  // Update state
    localStorage.setItem('roles', JSON.stringify(updatedRoles));  // Update localStorage
  };

  return (
    <div>
      <h2>Role List</h2>
      <Link to="/roles/add">
        <button>Add Role</button>
      </Link>
      <ul>
        {roles.map(role => (
          <li key={role.id}>
            {role.name} ({role.permissions.join(', ')})
            <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleList;
