import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const RoleManagement = ({ roles, onUpdateRoles }) => {
  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState([]);

  const handleAddRole = () => {
    if (roleName) {
      const newRole = {
        id: Date.now(),
        name: roleName,
        permissions,
      };
      onUpdateRoles([...roles, newRole]);
      setRoleName('');
      setPermissions([]);
    }
  };

  const togglePermission = (permission) => {
    setPermissions((prev) =>
      prev.includes(permission) ? prev.filter((perm) => perm !== permission) : [...prev, permission]
    );
  };

  return (
    <div className="role-management">
      <h2>Manage Roles</h2>
      <div className="form-group">
        <label>Role Name</label>
        <input
          type="text"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          placeholder="Enter role name"
          required
        />
      </div>
      <div className="permissions">
        <label>Permissions</label>
        <div className="permission-list">
          {['Read', 'Write', 'Delete'].map((permission) => (
            <label key={permission}>
              <input
                type="checkbox"
                checked={permissions.includes(permission)}
                onChange={() => togglePermission(permission)}
              />
              {permission}
            </label>
          ))}
        </div>
      </div>
      <button className="btn" onClick={handleAddRole}>Add Role</button>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            {role.name} - {role.permissions.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Add PropTypes validation here
RoleManagement.propTypes = {
  roles: PropTypes.array.isRequired,
  onUpdateRoles: PropTypes.func.isRequired
};

export default RoleManagement;
