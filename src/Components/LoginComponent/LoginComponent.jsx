import React, { useState } from "react";
import "./LoginComponent.css";

import {
  FaPaperPlane,
  FaEnvelope,
  FaLock,
  FaEye,
  FaShieldAlt,
  FaArrowRight,
  FaSuitcase,
} from "react-icons/fa";

import logo from "../../assets/logo.png";
import bg from "../../assets/ChatGPT Image Aug 7, 2026, 09_30_51 PM.png";

function LoginComponent() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-wrapper" style={{ backgroundImage: `url(${bg})` }}>
        <div className="overlay">
          {/* LEFT */}

          <div className="left-side">
            <div className="logo">
              <img src={logo} alt="" />
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

          {/* RIGHT */}

          <div className="right-side">
            <div className="right-glow"></div>

            <div className="login-card">
              <div className="icon-box">
                <FaSuitcase />
              </div>

              <h2>Welcome Back!</h2>

              <p>Sign in to your TravelGo admin account</p>

              <label>Email Address</label>

              <div className="input-box">
                <FaEnvelope />

                <input type="email" placeholder="admin@travelgo.com" />
              </div>

              <label>Password</label>

              <div className="input-box">
                <FaLock />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />

                <FaEye
                  className="eye"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>

              <div className="remember">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>

                <a href="/">Forgot Password?</a>
              </div>

              <button className="login-btn">
                <FaArrowRight />
                Sign In
              </button>

              <div className="divider">
                <span>OR</span>
              </div>

              <button className="google-btn">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt=""
                />
                Sign in with Google
              </button>

              <div className="ssl">
                <FaShieldAlt />
                Secured with 256-bit SSL encryption
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
