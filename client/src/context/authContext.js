import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, _setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const setCurrentUser = (response) => {
    const { name } = response;
    const user = { name };
    localStorage.setItem("user", JSON.stringify(user));
    _setCurrentUser(user);
  };

  const login = async (inputs) => {
    const API = "http://localhost:3333/api/auth/login";
    try {
      const res = await axios.post(API, inputs, {
        withCredentials: true,
      });

      console.log("Server response:", res); // Log the server response

      if (res.status === 200) {
        setCurrentUser(res.data);
        console.log("Server response data:", res.data);
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
        "http://localhost:3333/api/auth/logout",
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
