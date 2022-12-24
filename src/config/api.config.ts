import axios from "axios";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

const token = localStorage.getItem("token");
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND,
  timeout: 1000,
  headers: {
    authorization: `Bearer ${token}`,
  },
});

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger

    return response;
  },
  function (error) {
    toast.error(error.response.data.message);

    if (error.response.status === 401 || error.response.status === 403) {
      // localStorage.removeItem("token");
      // localStorage.removeItem("userId");
      redirect("/login");
    }
    return Promise.reject(error);
  }
);

export { api };
