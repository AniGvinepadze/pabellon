import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fresh-adminjs-ilqo.onrender.com",
  // baseURL: "http://localhost:3001",
});
