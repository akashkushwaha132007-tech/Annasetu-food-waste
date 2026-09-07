import { apiRequest } from "./api";

// Add food
export const addFood = async (foodData) => {
  return await apiRequest("/food/add", {
    method: "POST",
    body: JSON.stringify(foodData),
  });
};

// Get all food
export const getFood = async () => {
  return await apiRequest("/food/");
};

// Get food by ID
export const getFoodById = async (foodId) => {
  return await apiRequest(`/food/${foodId}`);
};

// Accept food
export const acceptFood = async (foodId) => {
  return await apiRequest(`/food/accept/${foodId}`, {
    method: "PUT",
  });
};

// Deliver food
export const deliverFood = async (foodId) => {
  return await apiRequest(`/food/deliver/${foodId}`, {
    method: "PUT",
  });
};

// Delete food
export const deleteFood = async (foodId) => {
  return await apiRequest(`/food/delete/${foodId}`, {
    method: "DELETE",
  });
};