import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserManagement/UserList';
import AddUser from './components/UserManagement/AddUser';
import UserForm from './components/UserManagement/UserForm';
import RoleManagement from './components/RoleManagement/RoleManagement';
import './styles/App.css'; // Global styles

function App() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  // Load data from localStorage
  useEffect(() => {
    const { users, roles } = loadData();
    setUsers(users);
    setRoles(roles);
  }, []);

  // Handle adding a new user
  const addUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    saveData(updatedUsers, roles);
  };

  // Handle updating roles
  const updateRoles = (newRoles) => {
    setRoles(newRoles);
    saveData(users, newRoles);
  };

  return (
    <Router>
      <div className="container">
        <h1>RBAC User Management</h1>
        <Routes>
          <Route path="/" element={<UserList users={users} setUsers={setUsers} />} />
          <Route path="/users/add" element={<AddUser onAddUser={addUser} />} />
          <Route path="/users/edit/:id" element={<UserForm users={users} onAddUser={addUser} />} />
          <Route path="/roles" element={<RoleManagement roles={roles} onUpdateRoles={updateRoles} />} />
        </Routes>
      </div>
    </Router>
  );
}

// Helper functions for managing localStorage
const saveData = (users, roles) => {
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('roles', JSON.stringify(roles));
};

const loadData = () => {
  const storedUsers = localStorage.getItem('users');
  const storedRoles = localStorage.getItem('roles');
  return {
    users: storedUsers ? JSON.parse(storedUsers) : [],
    roles: storedRoles ? JSON.parse(storedRoles) : [],
  };
};

export default App;
