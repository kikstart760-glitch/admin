import React from 'react'
import '../Styles/global.css'
import { Row, Col, Container } from 'react-bootstrap';
import LoginRight from '../Components/LoginRightComponent/LoginRight';
import LoginLeft from '../Components/LoginLeftComponent/LoginLeft';
import logopic from "../assets/logo.png";
import {
  FaShieldAlt,
} from "react-icons/fa";

function AdminLogin() {
  return (
    <div className='login-page'>
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
        <Container>
          <Row>
            <Col md={6}>
              <LoginLeft />
            </Col>
            <Col md={6}>
              <LoginRight />
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default AdminLogin