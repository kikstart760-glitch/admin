import React from 'react'
import "../SidebarComponent/SidebarComponent.css"
import { useNavigate } from 'react-router-dom'
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

  const navigate = useNavigate();

  const isActive = (path) => {
    return window.location.pathname === path ? "active" : "";
  }
  
  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div>
        <h2 className="logo"><img src={logopic} alt="Logo" /></h2>

        <p className="section-title">MAIN</p>
        <div className={`menu-item ${isActive('/')}`} onClick={() => navigate('/')}>
          <FaTachometerAlt /> <span>Dashboard</span>
        </div>

        <p className="section-title">CONTENT</p>
        <div className={`menu-item ${isActive('/cms')}`} onClick={() => navigate('/cms')}>
          <FaFileAlt /> <span>CMS</span> 
        </div>
        <div className={`menu-item ${isActive('/subscription')}`} onClick={() => navigate('/subscription')}>
          <FaCrown /> <span>Subscription</span>
        </div>

        <p className="section-title">USERS</p>
        <div className={`menu-item ${isActive('/users')}`} onClick={() => navigate('/users')}>
          <FaUsers /> <span>User Control</span>
        </div>
        <div className={`menu-item ${isActive('/roles')}`} onClick={() => navigate('/roles')}>
          <FaUserShield /> <span>Role Management</span>
        </div>
        <div className={`menu-item ${isActive('/permissions')}`} onClick={() => navigate('/permissions')}>
          <FaKey /> <span>Permissions</span>
        </div>
      </div>
        <div className="menu-item logout">
          <FaSignOutAlt /> <span>Logout</span>
        </div>
    </div>
  )
}

export default SidebarComponent
