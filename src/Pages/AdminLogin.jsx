import React from 'react'
import '../Styles/global.css'
import LoginRight from '../Components/LoginRightComponent/LoginRight';
import LoginLeft from '../Components/LoginLeftComponent/LoginLeft';
import logopic from "../assets/logo.png";
import {
  FaShieldAlt,
} from "react-icons/fa";

function AdminLogin() {
  return (
    <div className="login-page">
      <div className="logo-container">
        <div className="logo-box">
          <img src={logopic} alt="" />
        </div>
        <div className="security-box">
          <FaShieldAlt />
          <div>
            <h6>Secure & Reliable</h6>
            <small>Your data is safe with us</small>
          </div>
        </div>
      </div>
      <div className="left-side">
        <LoginLeft />
      </div>
      <div className="right-side">
        <LoginRight />
      </div>
    </div>
  );
}

export default AdminLogin