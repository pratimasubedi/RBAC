// src/api/api.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';  // Fake API URL

// Users API
export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const createUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users`, userData);
  return response.data;
};

export const updateUser = async (userId, userData) => {
  const response = await axios.put(`${API_URL}/users/${userId}`, userData);
  return response.data;
};

export const deleteUser = async (userId) => {
  await axios.delete(`${API_URL}/users/${userId}`);
};

// Roles API (using a mock approach since JSONPlaceholder doesn't have roles)
export const getRoles = async () => {
  // Simulating roles fetching (we assume roles are predefined)
  const roles = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'User' },
    { id: 3, name: 'Guest' },
  ];
  return roles;
};

export const createRole = async (roleData) => {
  // Simulating role creation
  const newRole = { id: Math.random(), ...roleData };
  return newRole;
};

export const assignRoleToUser = async (userId, roleName) => {
  // Simulate assigning a role to a user
  return { userId, role: roleName };
};
