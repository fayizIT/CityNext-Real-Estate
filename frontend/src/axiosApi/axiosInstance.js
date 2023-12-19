import axios from "axios";

export const usersApi = axios.create({
  baseURL: "http://localhost:8000/api/", // Change this to your local API endpoint
});
