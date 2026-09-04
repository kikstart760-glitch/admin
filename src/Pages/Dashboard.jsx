import React from 'react'
import Dashcard from '../Components/DashcardComponent/Dashcard'
import ChartComponent from '../Components/ChartComponent/ChartComponent'
import RoundComponent from '../Components/RoundChartComponent/RoundComponent'
import { Container,Row,Col } from 'react-bootstrap'
import Booking from '../Components/BookingComponent/Booking'
import Enquiry from '../Components/EnquiryComponent/Enquiry'

function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
        <Dashcard/>
      <div className='chart-container'>
        <Container>
          <Row>
            <Col md={8}>
              <ChartComponent/>
            </Col>
            <Col md={4}>
              <RoundComponent/>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='booking-container'>
        <Container>
          <Row>
            <Col md={8}>
              <Booking/>
            </Col>
            <Col md={4}>
              <Enquiry/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Dashboard
