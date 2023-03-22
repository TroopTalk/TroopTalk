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
    const res = await axios.post(API, inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
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
