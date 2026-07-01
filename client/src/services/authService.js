import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const registerUser = (userData) => {
  return API.post("/auth/register", userData);
};

export const loginUser = (userData) => {
  return API.post("/auth/login", userData);
};

export const logoutUser = () => {
  return API.post("/auth/logout");
};

export const getCurrentUser = () => {
  return API.get("/auth/me");
};

export default API;