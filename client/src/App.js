import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import { Friends, Home, Login, Profile, Register, Messages } from "./pages/export.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LeftBar, Navbar, RightBar } from "./components/export.js";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { useContext } from "react";
import "./style.scss";

function App() {
  const { currentUser } = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: "flex" }}>
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/messages/:id",
          element: <Messages />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/friends",
          element: <Friends />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
