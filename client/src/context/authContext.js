import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const login = async (inputs) => {
    const API = process.env.REACT_APP_AUTH_LOGIN_API;
    const res = await axios.post(API, inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data);
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

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>;
};
