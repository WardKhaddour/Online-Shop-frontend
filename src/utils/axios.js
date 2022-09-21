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

export { unauthenticatedAxiosInstance };
