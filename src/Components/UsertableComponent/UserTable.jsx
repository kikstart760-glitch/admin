import React, { useMemo, useState } from "react";
import "../UsertableComponent/UserTable.css";

import {
  Search,
  SlidersHorizontal,
  RefreshCw,
  Eye,
  Pencil,
  MoreVertical,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 202-555-0124",
    role: "Customer",
    status: "Active",
    verified: true,
    joined: "May 12, 2024",
    lastActive: "2 mins ago",
    activeType: "active",
    avatar:
      "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 202-555-0145",
    role: "Customer",
    status: "Active",
    verified: true,
    joined: "May 11, 2024",
    lastActive: "15 mins ago",
    activeType: "active",
    avatar:
      "https://i.pravatar.cc/100?img=47",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "+1 202-555-0189",
    role: "Agent",
    status: "Active",
    verified: true,
    joined: "May 10, 2024",
    lastActive: "1 hour ago",
    activeType: "active",
    avatar:
      "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "+1 202-555-0167",
    role: "Editor",
    status: "Inactive",
    verified: false,
    joined: "May 8, 2024",
    lastActive: "3 days ago",
    activeType: "inactive",
    avatar:
      "https://i.pravatar.cc/100?img=44",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@example.com",
    phone: "+1 202-555-0190",
    role: "Customer",
    status: "Blocked",
    verified: true,
    joined: "May 6, 2024",
    lastActive: "1 week ago",
    activeType: "blocked",
    avatar:
      "https://i.pravatar.cc/100?img=13",
  },
  {
    id: 6,
    name: "Jessica Taylor",
    email: "jessica.taylor@example.com",
    phone: "+1 202-555-0133",
    role: "Agent",
    status: "Active",
    verified: true,
    joined: "May 5, 2024",
    lastActive: "5 mins ago",
    activeType: "active",
    avatar:
      "https://i.pravatar.cc/100?img=48",
  },
  {
    id: 7,
    name: "Daniel Martinez",
    email: "daniel.martinez@example.com",
    phone: "+1 202-555-0178",
    role: "Customer",
    status: "Inactive",
    verified: false,
    joined: "May 3, 2024",
    lastActive: "2 weeks ago",
    activeType: "inactive",
    avatar:
      "https://i.pravatar.cc/100?img=14",
  },
];

const UserTable = () => {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All Roles");
  const [status, setStatus] = useState("All Status");
  const [verified, setVerified] = useState("All Verified");
  const [page, setPage] = useState(1);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        user.name.toLowerCase().includes(searchText) ||
        user.email.toLowerCase().includes(searchText) ||
        user.phone.toLowerCase().includes(searchText);

      const matchesRole =
        role === "All Roles" || user.role === role;

      const matchesStatus =
        status === "All Status" || user.status === status;

      const matchesVerified =
        verified === "All Verified" ||
        (verified === "Verified" && user.verified) ||
        (verified === "Not Verified" && !user.verified);

      return (
        matchesSearch &&
        matchesRole &&
        matchesStatus &&
        matchesVerified
      );
    });
  }, [search, role, status, verified]);

  const clearFilters = () => {
    setSearch("");
    setRole("All Roles");
    setStatus("All Status");
    setVerified("All Verified");
    setPage(1);
  };

  return (
    <div className="user-table-container">

      {/* ================= FILTER BAR ================= */}

      <div className="filter-bar">

        {/* Search */}
        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search by name, email or phone..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        {/* Role */}
        <div className="select-wrapper">
          <select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              setPage(1);
            }}
          >
            <option>All Roles</option>
            <option>Customer</option>
            <option>Agent</option>
            <option>Editor</option>
          </select>

          <ChevronDown size={16} />
        </div>

        {/* Status */}
        <div className="select-wrapper">
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setPage(1);
            }}
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Blocked</option>
          </select>

          <ChevronDown size={16} />
        </div>

        {/* Verified */}
        <div className="select-wrapper">
          <select
            value={verified}
            onChange={(e) => {
              setVerified(e.target.value);
              setPage(1);
            }}
          >
            <option>All Verified</option>
            <option>Verified</option>
            <option>Not Verified</option>
          </select>

          <ChevronDown size={16} />
        </div>

        <div className="filter-spacer" />

        {/* Filters button */}
        <button className="filter-btn">
          <SlidersHorizontal size={17} />
          <span>Filters</span>
        </button>

        {/* Refresh */}
        <button
          className="refresh-btn"
          onClick={clearFilters}
          title="Reset filters"
        >
          <RefreshCw size={17} />
        </button>

      </div>

      {/* ================= TABLE ================= */}

      <div className="table-wrapper">

        <table className="users-table">

          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Verified</th>
              <th>Joined</th>
              <th>Last Active</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredUsers.map((user) => (
              <tr key={user.id}>

                {/* USER */}
                <td>
                  <div className="user-info">

                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="user-avatar"
                    />

                    <div className="user-details">

                      <div className="user-name">
                        {user.name}
                      </div>

                      <div className="user-email">
                        {user.email}
                      </div>

                      <div className="user-phone">
                        {user.phone}
                      </div>

                    </div>

                  </div>
                </td>

                {/* ROLE */}
                <td>
                  <span
                    className={`role-badge ${user.role.toLowerCase()}`}
                  >
                    {user.role}
                  </span>
                </td>

                {/* STATUS */}
                <td>
                  <span
                    className={`status-badge ${user.status.toLowerCase()}`}
                  >
                    {user.status}
                  </span>
                </td>

                {/* VERIFIED */}
                <td>
                  <div
                    className={`verified-icon ${
                      user.verified ? "yes" : "no"
                    }`}
                  >
                    {user.verified ? (
                      <CheckCircle2 size={19} />
                    ) : (
                      <XCircle size={19} />
                    )}
                  </div>
                </td>

                {/* JOINED */}
                <td>
                  <span className="joined-date">
                    {user.joined}
                  </span>
                </td>

                {/* LAST ACTIVE */}
                <td>
                  <div className="last-active">

                    <span
                      className={`active-dot ${user.activeType}`}
                    />

                    <span>
                      {user.lastActive}
                    </span>

                  </div>
                </td>

                {/* ACTIONS */}
                <td>
                  <div className="row-actions">

                    <button
                      className="icon-btn"
                      title="View user"
                    >
                      <Eye size={17} />
                    </button>

                    <button
                      className="icon-btn"
                      title="Edit user"
                    >
                      <Pencil size={17} />
                    </button>

                    <button
                      className="icon-btn"
                      title="More options"
                    >
                      <MoreVertical size={18} />
                    </button>

                  </div>
                </td>

              </tr>
            ))}

            {filteredUsers.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="no-users"
                >
                  No users found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

      {/* ================= FOOTER ================= */}

      <div className="table-footer">

        <div className="showing-text">
          Showing 1 to {filteredUsers.length} of 1,248 users
        </div>

        <div className="pagination">

          <button
            className="pagination-btn previous"
            disabled={page === 1}
            onClick={() =>
              setPage((prev) => Math.max(1, prev - 1))
            }
          >
            <ChevronLeft size={16} />
            <span>Prev</span>
          </button>

          <button
            className={`pagination-number ${
              page === 1 ? "active" : ""
            }`}
            onClick={() => setPage(1)}
          >
            1
          </button>

          <button
            className={`pagination-number ${
              page === 2 ? "active" : ""
            }`}
            onClick={() => setPage(2)}
          >
            2
          </button>

          <button
            className={`pagination-number ${
              page === 3 ? "active" : ""
            }`}
            onClick={() => setPage(3)}
          >
            3
          </button>

          <button className="pagination-number">
            ...
          </button>

          <button
            className={`pagination-number ${
              page === 125 ? "active" : ""
            }`}
            onClick={() => setPage(125)}
          >
            125
          </button>

          <button
            className="pagination-btn next"
            onClick={() =>
              setPage((prev) => Math.min(125, prev + 1))
            }
          >
            <ChevronRight size={16} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default UserTable;