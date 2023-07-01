import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, _setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const setCurrentUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    _setCurrentUser(user);
  };

  const login = async (inputs) => {
    const API = process.env.REACT_APP_AUTH_LOGIN_API;
    try {
      const res = await axios.post(API, inputs, {
        withCredentials: true,
      });
  
      console.log("Server response:", res); // Add this line to log the server response
  
      if (res.status === 200) {
        setCurrentUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        console.log("Logged in successfully");
      } else {
        // Handle error messages returned by the server
        console.log("Error during login:", res.data);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:3301/api/auth/logout",
        {},
        {
          withCredentials: true,
        },
      );
    } catch (err) {
      console.log(err);
    }
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  return <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>;
};
