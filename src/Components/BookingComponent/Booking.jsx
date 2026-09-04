import React from 'react'
import "../BookingComponent/Booking.css"
import {
    FaEllipsisV,
    FaUser,
} from "react-icons/fa";

function Booking() {
    const bookings = [
  {
    id: "#BK1256",
    customer: "Rahul Sharma",
    destination: "Bali, Indonesia",
    date: "May 24, 2025",
    amount: "₹45,000",
    status: "Confirmed",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: "#BK1255",
    customer: "Priya Verma",
    destination: "Paris, France",
    date: "May 24, 2025",
    amount: "₹75,000",
    status: "Pending",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: "#BK1254",
    customer: "Amit Singh",
    destination: "Dubai, UAE",
    date: "May 23, 2025",
    amount: "₹55,000",
    status: "Confirmed",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: "#BK1253",
    customer: "Neha Kapoor",
    destination: "Maldives",
    date: "May 23, 2025",
    amount: "₹60,000",
    status: "Cancelled",
    avatar: "https://i.pravatar.cc/100?img=44",
  },
  {
    id: "#BK1252",
    customer: "Vikram Patel",
    destination: "Switzerland",
    date: "May 22, 2025",
    amount: "₹90,000",
    status: "Confirmed",
    avatar: "https://i.pravatar.cc/100?img=13",
  },
];
  return (
      <div className="recent-booking">
          {/* Header */}
          <div className="recent-booking-header">
              <h2>Recent Bookings</h2>

              <button className="view-all">
                  View All
              </button>
          </div>

          {/* Table */}
          <div className="booking-table-wrapper">
              <table className="booking-table">

                  <thead>
                      <tr>
                          <th>Booking ID</th>
                          <th>Customer</th>
                          <th>Destination</th>
                          <th>Date</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th></th>
                      </tr>
                  </thead>

                  <tbody>
                      {bookings.map((booking) => (
                          <tr key={booking.id}>

                              {/* Booking ID */}
                              <td className="booking-id">
                                  {booking.id}
                              </td>

                              {/* Customer */}
                              <td>
                                  <div className="customer">
                                      <img
                                          src={booking.avatar}
                                          alt={booking.customer}
                                          onError={(e) => {
                                              e.target.style.display = "none";
                                              e.target.nextSibling.style.display = "flex";
                                          }}
                                      />

                                      <div className="avatar-fallback">
                                          <FaUser />
                                      </div>

                                      <span>{booking.customer}</span>
                                  </div>
                              </td>

                              {/* Destination */}
                              <td className="destination">
                                  {booking.destination}
                              </td>

                              {/* Date */}
                              <td className="booking-date">
                                  {booking.date}
                              </td>

                              {/* Amount */}
                              <td className="amount">
                                  {booking.amount}
                              </td>

                              {/* Status */}
                              <td>
                                  <span
                                      className={`status ${booking.status.toLowerCase()}`}
                                  >
                                      {booking.status}
                                  </span>
                              </td>

                              {/* More */}
                              <td className="more">
                                  <button className="more-btn">
                                      <FaEllipsisV />
                                  </button>
                              </td>

                          </tr>
                      ))}
                  </tbody>

              </table>
          </div>
      </div>
  )
}

export default Booking
