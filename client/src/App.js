import { BrowserRouter as Router, Route, Routes, Outlet, useNavigate } from "react-router-dom";
import { Friends, Home, Login, Profile, Register, Messages } from "./pages/export.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LeftBar, RightBar } from "./components/export.js";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import React, { useContext, useEffect } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import "./style.scss";

// ErrorBoundary component to catch and handle errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong</h2>
          <p>An error occurred while rendering this page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <React.Fragment>
        <Navbar />
        <QueryClientProvider client={queryClient}>
          <div className={`theme-${darkMode ? "dark" : "light"}`}>
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
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            path=""
            element={
              <ProtectedRoute>
                <ErrorBoundary>
                  <Layout />
                </ErrorBoundary>
              </ProtectedRoute>
            }>
            <Route path="/" component={Home} />
            <Route path="messages/:id" component={Messages} />
            <Route path="profile/:id" component={Profile} />
            <Route path="friends" component={Friends} />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
