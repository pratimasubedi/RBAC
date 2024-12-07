import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRole = ({ onAddRole }) => {
  const [name, setName] = useState('');
  const [permissions, setPermissions] = useState([]);
  const navigate = useNavigate();

  const handlePermissionChange = (e) => {
    const value = e.target.value;
    setPermissions(prev => 
      prev.includes(value) 
        ? prev.filter(permission => permission !== value) 
        : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRole = {
      id: Date.now(),
      name,
      permissions,
    };

    onAddRole(newRole);

    setName('');
    setPermissions([]);
    
    navigate('/roles');
  };

  return (
    <div>
      <h2>Add Role</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Role Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Permissions:</label>
          <div>
            <input 
              type="checkbox" 
              value="Read" 
              checked={permissions.includes('Read')}
              onChange={handlePermissionChange} 
            />
            <label>Read</label>
          </div>
          <div>
            <input 
              type="checkbox" 
              value="Write" 
              checked={permissions.includes('Write')}
              onChange={handlePermissionChange} 
            />
            <label>Write</label>
          </div>
          <div>
            <input 
              type="checkbox" 
              value="Delete" 
              checked={permissions.includes('Delete')}
              onChange={handlePermissionChange} 
            />
            <label>Delete</label>
          </div>
        </div>
        <button type="submit">Add Role</button>
      </form>
    </div>
  );
};

export default AddRole;
