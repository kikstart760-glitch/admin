import React, { useState } from "react";
import Navbar from "../Components/NavbarComponent/NavbarComponent";
import Sidebar from "../Components/SidebarComponent/SidebarComponent";
import "../Layout/Layout.css";

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className="layout">

      <Sidebar collapsed={collapsed} />

      <div className={`main ${collapsed ? "expanded" : ""}`}>

        <Navbar
          toggleSidebar={toggleSidebar}
          collapsed={collapsed}
        />

        <div className="content">
          {children}
        </div>

      </div>

    </div>
  );
};

export default Layout;