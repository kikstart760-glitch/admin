import { React , useState }  from 'react'
import '../LoginRightComponent/LoginRight.css'
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaArrowRight,
  FaSuitcase,
} from "react-icons/fa";

function LoginRight() {

    const [showPassword, setShowPassword] = useState(false);


  return (
      <div className="login-card">
          <div className="icon-box">
              <FaSuitcase />
          </div>

          <h2>Welcome Back!</h2>

          <p>Sign in to your Escape admin account</p>

          <label>Email Address</label>

          <div className="input-box">
              <FaEnvelope />

              <input type="email" placeholder="admin@escape.com" />
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
              <a href="/">Forgot Password?</a>
          </div>

          <button className="login-btn">
              <FaArrowRight />
              Sign In
          </button>
      </div>
  )
}

export default LoginRight
