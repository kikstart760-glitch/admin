import React from 'react'
import '../Styles/global.css'
import LoginRight from '../Components/LoginRightComponent/LoginRight';
import LoginLeft from '../Components/LoginLeftComponent/LoginLeft';

function AdminLogin() {
  return (
    <div className="login-page">
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