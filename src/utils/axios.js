import axios from "axios";
import router from "../router";
import authHelper from "./authHelper";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    Authorization: `Bearer ${authHelper.getToken()}`
  }
});

axiosInstance.interceptors.response.use(
  response => response,
  err => {
    if (err.request.status === 500) {
      router.push("/500");
      return Promise.reject(err);
    }
  }
);

const unauthenticatedAxiosInstance = axios.create({
  // baseURL: `${process.env.BASE_URL}api/` || "http://localhost:3000/"
  baseURL: "http://localhost:3000/api/v1"
});

unauthenticatedAxiosInstance.interceptors.response.use(
  response => response,
  err => {
    if (err.request.status === 500) {
      router.push("/500");
      return Promise.reject(err);
    }
  }
);

export { axiosInstance, unauthenticatedAxiosInstance };
