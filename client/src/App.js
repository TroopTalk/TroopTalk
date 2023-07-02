import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Friends, Home, Login, Profile, Register, Messages } from "./pages/export.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LeftBar, RightBar } from "./components/export.js";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import React, { useContext, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
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

  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "", // Render Home component at the root path ("/")
          element: (
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Home />
            </ErrorBoundary>
          ),
        },
        {
          path: "messages/:id",
          element: (
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Messages />
            </ErrorBoundary>
          ), // Render Messages component for "/messages/:id" path
        },
        {
          path: "profile/:id",
          element: (
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Profile />
            </ErrorBoundary>
          ), // Render Profile component for "/profile/:id" path
        },
        {
          path: "friends",
          element: (
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Friends />
            </ErrorBoundary>
          ), // Render Friends component for "/friends" path
        },
      ],
    },
    {
      path: "/login",
      element: (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Login />
        </ErrorBoundary>
      ), // Render Login component for "/login" path
    },
    {
      path: "/register",
      element: (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Register />
        </ErrorBoundary>
      ), // Render Register component for "/register" path
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
