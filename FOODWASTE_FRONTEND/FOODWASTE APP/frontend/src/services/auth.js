import { apiRequest } from "./api";

// Register
export const registerUser = async (username, email, password) => {
  return await apiRequest("/users/register", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
};

// Login
export const loginUser = async (email, password) => {
  return await apiRequest("/users/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

// Get all users
export const getUsers = async () => {
  return await apiRequest("/users/");
};

// Get user by ID
export const getUserById = async (userId) => {
  return await apiRequest(`/users/${userId}`);
};