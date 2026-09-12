import React from 'react'
import "../UserCardComponent/UserCard.css"

import {
  Users,
  UserCheck,
  UserX,
  UserRoundX,
  Plus,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

function UserCard() {
    const stats = [
        {
            title: "Total Users",
            value: "1,248",
            change: "12.5%",
            text: "from last month",
            type: "up",
            icon: Users,
            iconClass: "blue",
        },
        {
            title: "Active Users",
            value: "1,032",
            change: "8.3%",
            text: "from last month",
            type: "up",
            icon: UserCheck,
            iconClass: "green",
        },
        {
            title: "Inactive Users",
            value: "146",
            change: "3.2%",
            text: "from last month",
            type: "down",
            icon: UserX,
            iconClass: "orange",
        },
        {
            title: "Blocked Users",
            value: "70",
            change: "2.1%",
            text: "from last month",
            type: "down",
            icon: UserRoundX,
            iconClass: "purple",
        },
    ];
  return (
   <div className="user-card-container">
         <div className="user-control">

      {/* Header */}
      <div className="page-header">

        <div className="page-title-section">
          <h1>User Control</h1>

          <div className="breadcrumb">
            <span>Dashboard</span>
            <span className="breadcrumb-arrow">›</span>
            <span>User Control</span>
          </div>
        </div>

        <div className="header-actions">

          <button className="add-user-btn">
            <Plus size={19} strokeWidth={2} />
            <span>Add New User</span>
          </button>

        </div>
      </div>

      {/* Statistics Cards */}
      <div className="stats-grid">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="stat-card" key={index}>

              <div className={`stat-icon ${item.iconClass}`}>
                <Icon size={28} strokeWidth={1.8} />
              </div>

              <div className="stat-content">

                <div className="stat-title">
                  {item.title}
                </div>

                <div className="stat-value">
                  {item.value}
                </div>

                <div
                  className={`stat-change ${
                    item.type === "up" ? "positive" : "negative"
                  }`}
                >
                  {item.type === "up" ? (
                    <ArrowUp size={14} strokeWidth={2.5} />
                  ) : (
                    <ArrowDown size={14} strokeWidth={2.5} />
                  )}

                  <span>{item.change}</span>
                  <span className="change-text">{item.text}</span>
                </div>

              </div>
            </div>
          );
        })}

      </div>

    </div>
    </div> 
  )
}

export default UserCard
