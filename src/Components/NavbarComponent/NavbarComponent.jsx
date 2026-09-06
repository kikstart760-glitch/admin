import React from "react";
import "../NavbarComponent/NavbarComponent.css";

import {
  FaBell,
  FaSearch,
  FaBars,
  FaEnvelope
} from "react-icons/fa";

function NavbarComponent({ toggleSidebar, collapsed }) {

  return (
    <div className={`navbar ${collapsed ? "collapsed-navbar" : ""}`}>

      {/* LEFT SECTION */}
      <div className="nav-left">

        <FaBars
          className="menu-icon"
          onClick={toggleSidebar}
        />

        <div className="search-box">
          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search anything..."
          />
        </div>

      </div>

      {/* RIGHT SECTION */}
      <div className="nav-right">

        <div className="icon">
          <FaBell />
        </div>

        <div className="icon">
          <FaEnvelope />
          <span className="badge">3</span>
        </div>

        <div className="profile">

          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
          />

          <div className="profile-info">
            <p className="name">John Admin</p>
            <span className="role">Super Admin</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default NavbarComponent;