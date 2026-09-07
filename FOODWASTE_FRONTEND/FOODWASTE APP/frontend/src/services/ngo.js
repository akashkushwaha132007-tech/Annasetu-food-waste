import { apiRequest } from "./api";

// Get all NGOs
export const getNGOs = async () => {
  return await apiRequest("/ngo/");
};

// Get NGO by ID
export const getNGOById = async (ngoId) => {
  return await apiRequest(`/ngo/${ngoId}`);
};

// Register NGO
export const registerNGO = async (ngoData) => {
  return await apiRequest("/ngo/register", {
    method: "POST",
    body: JSON.stringify(ngoData),
  });
};

// Update NGO
export const updateNGO = async (ngoId, ngoData) => {
  return await apiRequest(`/ngo/update/${ngoId}`, {
    method: "PUT",
    body: JSON.stringify(ngoData),
  });
};

// Delete NGO
export const deleteNGO = async (ngoId) => {
  return await apiRequest(`/ngo/delete/${ngoId}`, {
    method: "DELETE",
  });
};