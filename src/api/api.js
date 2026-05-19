import axios from "axios";

const baseURL = "https://march-node.onrender.com";

export const publicInstance = axios.create({ baseURL });

export const privateInstance = axios.create({ baseURL });

privateInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Berear ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
