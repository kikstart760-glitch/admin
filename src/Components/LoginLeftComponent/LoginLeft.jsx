import React from 'react'
import '../LoginLeftComponent/LoginLeft.css'
import logopic from "../../assets/logo.png";
import {
  FaShieldAlt,
} from "react-icons/fa";

function LoginLeft() {
  return (
      <div className="logo-container">
          <div className="logo-box">
              <img src={logopic} alt="" />
          </div>
          <div className="hero">
              <h1>
                  Explore.
                  <br />
                  Manage.
                  <br />
                  <span>Grow.</span>
              </h1>

              <p>
                  Manage bookings, travelers, destinations
                  <br />
                  and grow your travel business with ease.
              </p>
          </div>
          <div className="security-box">
              <FaShieldAlt />
              <div>
                  <h6>Secure & Reliable</h6>
                  <small>Your data is safe with us</small>
              </div>
          </div>
      </div>
  )
}

export default LoginLeft
