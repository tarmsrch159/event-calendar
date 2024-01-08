// AuthService.js
import axios from "../api/axios";
import { Navigate } from "react-router-dom";

const AuthService = {
  login: async (username, password) => {
    const response = await axios.post(`/login_admin`, { username, password });
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      window.location = "/";
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("token");
  },

  isAuthenticated: () => {
    return !!localStorage.getItem("token");
  },

  // verifyToken: async () => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     // Verify the token on the client side by making a request to the server-side endpoint
  //     const response = await axios.post("/verify_token", token);
  //     return response.data.isValid;
  //   } catch (error) {
  //     console.error("Error verifying token:", error);
  //     return false;
  //   }
  // },
};

export default AuthService;
