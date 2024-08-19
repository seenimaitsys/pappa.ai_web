import axios from "axios";
// import { store } from "../redux/store"; // Ensure this path is correct to your Redux store

const https = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API, // Update to your correct base URL
  timeout: 50000,
});

// https.interceptors.request.use(
//   function (config) {
//     // Get the current state from the store
//     const state = store.getState();
//     const token = state.loginReducer.token || {};
//     if (token) {
//       config.headers.Authorization = "Bearer " + token;
//     }

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );
// https.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     if (error.response) {
//       const status = error.response.status;
//       if (status === 403) {
//         // Handle 403 error
//         console.error("Access denied. Redirecting to login.");
//         // You can redirect to a login page or show a message here
//         // window.location.href = "/login"; // Redirect to login page or any other action
//       } else if (status === 404) {
//         console.error("No data available.");
//       } else if (status === 500) {
//         console.error("Internal server error.");
//       } else {
//         console.error("An unexpected error occurred.");
//       }
//     } else {
//       console.error("Network error or request setup issue.");
//     }
//     return Promise.reject(error);
//   }
// );

export default https;
