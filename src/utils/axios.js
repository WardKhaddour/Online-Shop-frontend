import axios from "axios";
import router from "../router";
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

unauthenticatedAxiosInstance.get("/api/getcsrftoken").then(
  response => {
    unauthenticatedAxiosInstance.defaults.headers.common["X-CSRF-TOKEN"] =
      response.data.csrfToken;
  },
  err => {
    console.log(err);
  }
);

unauthenticatedAxiosInstance.interceptors.response.use(
  response => response,
  err => {
    if (err.request.status === 500) {
      router.push("/500");
      return Promise.reject(err);
    }
  }
);

export { unauthenticatedAxiosInstance };
