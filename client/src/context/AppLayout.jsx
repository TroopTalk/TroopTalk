import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LeftBar, Navbar, RightBar } from "../components/export";
import { Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { DarkModeContext } from "./darkModeContext";

const AppLayout = () => {
  const { darkMode } = useContext(DarkModeContext);
  const queryClient = new QueryClient();

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

export default AppLayout;
