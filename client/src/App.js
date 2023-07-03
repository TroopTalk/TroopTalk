import { BrowserRouter as Router, Route, Routes, Outlet, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Friends, Home, Login, Profile, Register, Messages } from "./pages/export.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LeftBar, RightBar } from "./components/export.js";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import React, { useContext, useEffect } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import "./style.scss";

// ErrorFallback component to display an error message or fallback UI
const ErrorFallback = ({ error }) => {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
    </div>
  );
};

function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <React.Fragment>
        <Navbar />
        <QueryClientProvider client={queryClient}>
          <div className={`theme-${darkMode ? "light" : "dark"}`}>
            <div style={{ display: "flex" }}>
              <LeftBar />
              <div style={{ flex: 6 }}>
                <Outlet />
              </div>
              <RightBar />
            </div>
          </div>
        </QueryClientProvider>
      </React.Fragment>
    );
  };

  const ProtectedRoute = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
      if (!currentUser) {
        navigate("/login");
      }
    }, [currentUser, navigate]);

    return currentUser ? children : null;
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path=""
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }>
            <Route path="/" element={<Home />} />
            <Route path="messages/:id" element={<Messages />} />
            <Route path="profile/:id" element={<Profile />} />
            <Route path="friends" element={<Friends />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
