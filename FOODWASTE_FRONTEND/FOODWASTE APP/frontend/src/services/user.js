import { apiRequest } from "./api";

// Get user by ID
export const getUserById = async (userId) => {
  return await apiRequest(`/users/${userId}`);
};