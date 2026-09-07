import { apiRequest } from "./api";

export const getDashboard = async () => {
  return await apiRequest("/dashboard/");
};