import React from 'react'
import '../LoginComponent/LoginComponent.css'
import logo from '../../assets/logo.png'

function LoginComponent() {
  return (
    <div className='behind-page'>
      <div className="back">
        <div className="overlay-content">
          <div className="left-section">
            <div className="logo-img">
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <div className="right-section">
            <div className="login-form">
              <h2>Admin Login</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent