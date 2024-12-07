import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddUser.css';

const AddUser = ({ onAddUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in all fields");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
    };

    onAddUser(newUser);

    setName('');
    setEmail('');
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>
        <button type="submit" className="btn">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
