import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: process.env.BASE_URL + "api/",
//   headers: {
//     Authorization: `Bearer ${authHelper.getAccessToken()}`
//   }
// });
const unauthenticatedAxiosInstance = axios.create({
  // baseURL: `${process.env.BASE_URL}api/` || "http://localhost:3000/"
  baseURL: "http://localhost:3000/"
});

unauthenticatedAxiosInstance.interceptors.request.use(
  config => {
    console.log("Main interceptor success");
    config.withCredentials = true;
    return config;
  },
  err => {
    // Do something with request error
    console.log("Main interceptor error");
    return Promise.reject(err);
  }
);

export { unauthenticatedAxiosInstance };
