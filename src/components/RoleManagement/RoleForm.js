import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RoleForm = () => {
  const [role, setRole] = useState({ title: '', permissions: [] });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => setRole(response.data))
        .catch(error => console.error('Error fetching role:', error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // Edit existing role
      axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, role)
        .then(() => navigate('/roles'))
        .catch(error => console.error('Error updating role:', error));
    } else {
      // Add new role
      axios.post('https://jsonplaceholder.typicode.com/posts', role)
        .then(() => navigate('/roles'))
        .catch(error => console.error('Error creating role:', error));
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Role' : 'Add Role'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Role Title:</label>
          <input
            type="text"
            value={role.title}
            onChange={(e) => setRole({ ...role, title: e.target.value })}
          />
        </div>
        <div>
          <label>Permissions:</label>
          <input
            type="text"
            value={role.permissions}
            onChange={(e) => setRole({ ...role, permissions: e.target.value.split(',') })}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default RoleForm;
