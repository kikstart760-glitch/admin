import React from 'react'
import "../EnquiryComponent/Enquiry.css"
import {
    FiMail,
    FiPhone,
    FiMessageCircle,
} from 'react-icons/fi'

function Enquiry() {
    const enquiries = [
        {
            name: "Ankit Gupta",
            message: "Package for Maldives",
            time: "10:30 AM",
            type: "mail",
        },
        {
            name: "Simran Kaur",
            message: "Custom honeymoon package",
            time: "09:15 AM",
            type: "phone",
        },
        {
            name: "Rohit Kumar",
            message: "Group booking for 10 people",
            time: "Yesterday",
            type: "mail",
        },
        {
            name: "Pooja Mehta",
            message: "Visa & travel insurance query",
            time: "Yesterday",
            type: "message",
        },
        {
            name: "Neha Joshi",
            message: "Bali trip in July",
            time: "May 22",
            type: "phone",
        },
    ];

    const getIcon = (type) => {
        if (type === "phone") {
            return <FiPhone />;
        }

        if (type === "message") {
            return <FiMessageCircle />;
        }

        return <FiMail />;
    };

  return (
    <div className="recent-enquiries">

      {/* Header */}
      <div className="enquiries-header">
        <h2>Recent Enquiries</h2>

        <button className="enquiries-view-all">
          View All
        </button>
      </div>

      {/* Enquiries */}
      <div className="enquiries-list">

        {enquiries.map((enquiry, index) => (
          <div className="enquiry-item" key={index}>

            {/* Icon */}
            <div
              className={`enquiry-icon ${enquiry.type}`}
            >
              {getIcon(enquiry.type)}
            </div>

            {/* Details */}
            <div className="enquiry-details">
              <h4>{enquiry.name}</h4>
              <p>{enquiry.message}</p>
            </div>

            {/* Time */}
            <div className="enquiry-time">
              {enquiry.time}
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Enquiry
