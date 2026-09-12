import React from "react";
import "../AdduserModal/AdduserModal.css";
import Modal from "react-bootstrap/Modal";

import {
  UserRound,
  ShieldCheck,
  Activity,
  BriefcaseBusiness,
  CalendarDays,
  CircleDot,
  Pencil,
  X,
  UserRoundPen,
  UserCog,
  Ban,
  Trash2,
  FileText,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

function AdduserModal(props) {
  return (
    <Modal {...props} size="xl" centered className="user-details-modal">
      <div className="user-modal">
        {/* LEFT SIDEBAR */}
        <div className="user-sidebar-content">
          <div className="profile-section">
            <div className="profile-image">
              <img src="https://i.pravatar.cc/150?img=12" alt="John Smith" />
            </div>

            <div className="active-badge">
              <span></span> Active
            </div>

            <h2>John Smith</h2>
            <p>john.smith@example.com</p>

            <div className="phone">
              <Phone size={14} />
              <span>+1 202-555-0124</span>
            </div>
          </div>

          <div className="sidebar-menus">
            <div className="menu-items current">
              <UserRound size={17} strokeWidth={2} />
              Overview
            </div>

            <div className="menu-items">
              <ShieldCheck size={17} strokeWidth={2} />
              Roles & Permissions
            </div>

            <div className="menu-items">
              <Activity size={17} strokeWidth={2} />
              Activity Log
            </div>
          </div>

          <div className="role-card">
            <div className="role-icon">
              <BriefcaseBusiness size={16} />
            </div>
            <div>
              <strong>Customer</strong>
              <small>User Role</small>
            </div>
          </div>

          <div className="sidebar-info">
            <div className="info-row">
              <span className="info-icon">
                <CalendarDays size={17} />
              </span>
              <div>
                <small>Joined</small>
                <strong>May 12, 2024</strong>
              </div>
            </div>

            <div className="info-row">
              <span className="info-icon green">
                <CircleDot size={17} />
              </span>
              <div>
                <small>Last Active</small>
                <strong>● 2 mins ago</strong>
              </div>
            </div>
          </div>

          <button className="edit-user-btn">
            <UserRoundPen size={16} />
            Edit User
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="user-content">
          {/* HEADER */}
          <div className="content-header">
            <div className="tabs">
              <button className="tab current">User Details</button>

              <button className="tab">Activity</button>

              <button className="tab">Permissions</button>
            </div>

            <button className="close-btn" onClick={props.onHide}>
              <X size={20} />
            </button>
          </div>

          {/* PERSONAL INFORMATION */}
          <section className="details-section">
            <h3>
              <span className="section-icon">
                <UserRound size={18} />
              </span>
              Personal Information
            </h3>

            <div className="details-grid">
              <div className="detail">
                <label>Full Name</label>
                <p>John Smith</p>
              </div>

              <div className="detail">
                <label>Email Address</label>
                <p className="detail-with-icon">
                  <Mail size={14} />
                  john.smith@example.com
                </p>
              </div>

              <div className="detail">
                <label>Phone Number</label>
                <p>+1 202-555-0124</p>
              </div>

              <div className="detail">
                <label>Location</label>
                <p className="detail-with-icon">
                  <MapPin size={14} />
                  New York, USA
                </p>
              </div>
            </div>
          </section>

          {/* ACCOUNT INFORMATION */}
          <section className="details-section">
            <h3>
              <span className="section-icon">
                <UserCog size={18} />
              </span>
              Account Information
            </h3>

            <div className="details-grid">
              <div className="detail">
                <label>Status</label>
                <p>
                  <span className="status-pill">Active</span>
                </p>
              </div>

              <div className="detail">
                <label>Role</label>
                <p>
                  <span className="role-pill">Customer</span>
                </p>
              </div>

              <div className="detail">
                <label>Joined On</label>
                <p> May 12, 2024</p>
              </div>

              <div className="detail">
                <label>Last Active</label>
                <p className="last-active">● 2 mins ago</p>
              </div>
            </div>
          </section>

          {/* NOTES */}
          <section className="notes-section">
            <h3>
              <span className="section-icon">
                <FileText size={18} />
              </span>
              Notes
            </h3>

            <div className="notes-box">
              <div>
                <strong>—</strong>
                <p>No additional notes available.</p>
              </div>

              <button className="note-edit">✎</button>
            </div>
          </section>

          {/* FOOTER */}
          <div className="modal-footer-actions">
            <button
              className="user-action-btn close-action"
              onClick={props.onHide}
            >
              Cancel
            </button>

            <button className="user-action-btn change-role">
              <UserCog size={14} />
              Update Role
            </button>

            <button className="user-action-btn block-user">
              <Ban size={14} />
              Suspend User
            </button>

            <button className="user-action-btn delete-user">
              <Trash2 size={14} />
              Remove User
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default AdduserModal;