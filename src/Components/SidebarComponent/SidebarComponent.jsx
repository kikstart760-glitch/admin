import React from 'react'
import "../SidebarComponent/SidebarComponent.css"
import {
  FaTachometerAlt,
  FaFileAlt,
  FaUsers,
  FaUserShield,
  FaKey,
  FaSignOutAlt,
  FaCrown
} from "react-icons/fa";
import logopic from "../../assets/logo2.png";

function SidebarComponent({ collapsed }) {
  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div>
        <h2 className="logo"><img src={logopic} alt="Logo" /></h2>

        <p className="section-title">MAIN</p>
        <div className="menu-item active">
          <FaTachometerAlt /> <span>Dashboard</span>
        </div>

        <p className="section-title">CONTENT</p>
        <div className="menu-item">
          <FaFileAlt /> <span>CMS</span>
        </div>
        <div className="menu-item">
          <FaCrown /> <span>Subscription</span>
        </div>

        <p className="section-title">USERS</p>
        <div className="menu-item">
          <FaUsers /> <span>User Control</span>
        </div>
        <div className="menu-item">
          <FaUserShield /> <span>Role Management</span>
        </div>
        <div className="menu-item">
          <FaKey /> <span>Permissions</span>
        </div>
        <p className="section-title">SETTINGS</p>
        <div className="menu-item logout">
          <FaSignOutAlt /> <span>Logout</span>
        </div>
      </div>
    </div>
  )
}

export default SidebarComponent
