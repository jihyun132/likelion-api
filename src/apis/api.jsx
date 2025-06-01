import axios from "axios";

/**기본 axios 객체(Access Token 미포함) */
const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
