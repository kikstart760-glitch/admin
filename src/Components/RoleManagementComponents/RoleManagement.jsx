import React, { useMemo, useState } from "react";

import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Pencil,
  MoreVertical,
  RefreshCw,
  SlidersHorizontal,
  Folder,
  Users,
  UserRound,
  ShieldCheck,
  Headphones,
  BriefcaseBusiness,
  FileText,
  X,
} from "lucide-react";

import "../RoleManagementComponents/RoleManagement.css";

const rolesData = [
  {
    id: 1,
    name: "Super Admin",
    description: "Full access to all modules and settings",
    users: 3,
    status: "Active",
    permissions: 48,
    category: "Administrator",
    color: "blue",
  },
  {
    id: 2,
    name: "Admin",
    description: "Manage users, content and system settings",
    users: 8,
    status: "Active",
    permissions: 42,
    category: "Administrator",
    color: "purple",
  },
  {
    id: 3,
    name: "Manager",
    description: "Manage bookings, packages and reports",
    users: 15,
    status: "Active",
    permissions: 28,
    category: "Manager",
    color: "orange",
  },
  {
    id: 4,
    name: "Editor",
    description: "Create and edit content (CMS)",
    users: 10,
    status: "Active",
    permissions: 16,
    category: "Editor",
    color: "pink",
  },
  {
    id: 5,
    name: "Travel Agent",
    description: "Create bookings and manage customers",
    users: 45,
    status: "Active",
    permissions: 18,
    category: "Agent",
    color: "cyan",
  },
  {
    id: 6,
    name: "Customer Support",
    description: "Handle customer queries and support",
    users: 25,
    status: "Active",
    permissions: 14,
    category: "Customer Support",
    color: "purple",
  },
  {
    id: 7,
    name: "Accountant",
    description: "View reports and manage payments",
    users: 5,
    status: "Inactive",
    permissions: 12,
    category: "Others",
    color: "gray",
  },
  {
    id: 8,
    name: "Content Manager",
    description: "Manage website content and pages",
    users: 6,
    status: "Active",
    permissions: 22,
    category: "Manager",
    color: "blue",
  },
  {
    id: 9,
    name: "Booking Manager",
    description: "Manage customer bookings",
    users: 12,
    status: "Active",
    permissions: 25,
    category: "Manager",
    color: "orange",
  },
  {
    id: 10,
    name: "Support Agent",
    description: "Handle customer support tickets",
    users: 18,
    status: "Active",
    permissions: 15,
    category: "Customer Support",
    color: "pink",
  },
  {
    id: 11,
    name: "Marketing",
    description: "Manage marketing campaigns",
    users: 4,
    status: "Active",
    permissions: 20,
    category: "Others",
    color: "cyan",
  },
  {
    id: 12,
    name: "Viewer",
    description: "View system information and reports",
    users: 9,
    status: "Inactive",
    permissions: 8,
    category: "Others",
    color: "gray",
  },
];

const categories = [
  {
    name: "All Roles",
    count: 12,
    icon: Folder,
    color: "blue",
  },
  {
    name: "Administrator",
    count: 2,
    icon: Users,
    color: "blue",
  },
  {
    name: "Manager",
    count: 3,
    icon: Users,
    color: "green",
  },
  {
    name: "Editor",
    count: 1,
    icon: FileText,
    color: "orange",
  },
  {
    name: "Agent",
    count: 1,
    icon: BriefcaseBusiness,
    color: "pink",
  },
  {
    name: "Customer Support",
    count: 2,
    icon: Headphones,
    color: "cyan",
  },
  {
    name: "Others",
    count: 3,
    icon: UserRound,
    color: "purple",
  },
];

function RoleManagement() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [module, setModule] = useState("All Modules");
  const [selectedCategory, setSelectedCategory] =
    useState("All Roles");

  const [currentPage, setCurrentPage] = useState(1);
  const [openMenu, setOpenMenu] = useState(null);

  const rolesPerPage = 7;

  /* ==========================
     FILTER ROLES
  ========================== */

  const filteredRoles = useMemo(() => {
    return rolesData.filter((role) => {
      const searchText = search.trim().toLowerCase();

      const matchesSearch =
        role.name.toLowerCase().includes(searchText) ||
        role.description.toLowerCase().includes(searchText);

      const matchesStatus =
        status === "All Status" || role.status === status;

      const matchesCategory =
        selectedCategory === "All Roles" ||
        role.category === selectedCategory;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesCategory
      );
    });
  }, [search, status, selectedCategory]);

  /* ==========================
     PAGINATION
  ========================== */

  const totalPages = Math.max(
    1,
    Math.ceil(filteredRoles.length / rolesPerPage)
  );

  const startIndex =
    (currentPage - 1) * rolesPerPage;

  const displayedRoles = filteredRoles.slice(
    startIndex,
    startIndex + rolesPerPage
  );

  /* ==========================
     CATEGORY
  ========================== */

  const handleCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setOpenMenu(null);
  };

  /* ==========================
     REFRESH
  ========================== */

  const handleRefresh = () => {
    setSearch("");
    setStatus("All Status");
    setModule("All Modules");
    setSelectedCategory("All Roles");
    setCurrentPage(1);
    setOpenMenu(null);
  };

  return (
    <div className="role-page">

      {/* =====================
          SIDEBAR
      ====================== */}

      <aside className="role-sidebar">

        <div className="category-card">

          <h3>Role Categories</h3>

          <div className="category-list">

            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  type="button"
                  key={category.name}
                  className={`category-item ${
                    selectedCategory === category.name
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleCategory(category.name)
                  }
                >
                  <div className="category-left">

                    <span
                      className={`category-icon ${category.color}`}
                    >
                      <Icon size={17} />
                    </span>

                    <span>
                      {category.name}
                    </span>

                  </div>

                  <span className="category-count">
                    {category.count}
                  </span>

                </button>
              );
            })}

          </div>

        </div>

        {/* TIP */}

        <div className="tip-card">

          <div className="tip-icon">
            <ShieldCheck size={20} />
          </div>

          <div>

            <h4>Tip</h4>

            <p>
              Roles define what users can do in the
              system. Assign permissions to control
              access.
            </p>

          </div>

        </div>

      </aside>

      {/* =====================
          MAIN
      ====================== */}

      <main className="role-content">

        {/* =====================
            FILTER BAR
        ====================== */}

        <div className="filter-bar">

          {/* SEARCH */}

          <div className="search-box">

            <Search size={19} />

            <input
              type="text"
              placeholder="Search roles..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />

            {search && (
              <button
                type="button"
                className="clear-search"
                onClick={() => {
                  setSearch("");
                  setCurrentPage(1);
                }}
              >
                <X size={15} />
              </button>
            )}

          </div>

          {/* STATUS */}

          <div className="select-box">

            <select
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <ChevronDown size={16} />

          </div>

          {/* MODULE */}

          <div className="select-box">

            <select
              value={module}
              onChange={(e) =>
                setModule(e.target.value)
              }
            >
              <option>All Modules</option>
              <option>Users</option>
              <option>Bookings</option>
              <option>CMS</option>
              <option>Reports</option>
              <option>Payments</option>
            </select>

            <ChevronDown size={16} />

          </div>

          {/* FILTER */}

          <button
            type="button"
            className="filter-button"
          >
            <SlidersHorizontal size={17} />
            <span>Filters</span>
          </button>

          {/* REFRESH */}

          <button
            type="button"
            className="refresh-button"
            title="Reset filters"
            onClick={handleRefresh}
          >
            <RefreshCw size={18} />
          </button>

        </div>

        {/* =====================
            TABLE
        ====================== */}

        <div className="role-table-wrapper">

          <table className="role-table">

            <thead>
              <tr>
                <th>Role Name</th>
                <th>Description</th>
                <th>Users</th>
                <th>Status</th>
                <th>Permissions</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {displayedRoles.map((role) => (

                <tr key={role.id}>

                  {/* ROLE NAME */}

                  <td>

                    <div className="role-name">

                      <span
                        className={`role-avatar ${role.color}`}
                      >
                        <ShieldCheck size={18} />
                      </span>

                      <strong>
                        {role.name}
                      </strong>

                    </div>

                  </td>

                  {/* DESCRIPTION */}

                  <td>

                    <span className="description">
                      {role.description}
                    </span>

                  </td>

                  {/* USERS */}

                  <td className="users-column">

                    <strong>
                      {role.users}
                    </strong>

                  </td>

                  {/* STATUS */}

                  <td>

                    <span
                      className={`status ${
                        role.status === "Active"
                          ? "active"
                          : "inactive"
                      }`}
                    >
                      <span className="status-dot" />

                      {role.status}

                    </span>

                  </td>

                  {/* PERMISSIONS */}

                  <td>

                    <strong className="permission">

                      {role.permissions === 48
                        ? "All (100%)"
                        : `${
                            role.permissions
                          } / 48 (${Math.round(
                            (role.permissions / 48) *
                              100
                          )}%)`}

                    </strong>

                  </td>

                  {/* ACTIONS */}

                  <td>

                    <div className="actions">

                      <button
                        type="button"
                        className="action-btn"
                        title="View"
                        onClick={() =>
                          console.log(
                            "View:",
                            role
                          )
                        }
                      >
                        <Eye size={17} />
                      </button>

                      <button
                        type="button"
                        className="action-btn"
                        title="Edit"
                        onClick={() =>
                          console.log(
                            "Edit:",
                            role
                          )
                        }
                      >
                        <Pencil size={17} />
                      </button>

                      <div className="more-wrapper">

                        <button
                          type="button"
                          className="action-btn"
                          title="More"
                          onClick={() =>
                            setOpenMenu(
                              openMenu === role.id
                                ? null
                                : role.id
                            )
                          }
                        >
                          <MoreVertical size={18} />
                        </button>

                        {openMenu === role.id && (

                          <div className="more-menu">

                            <button type="button">
                              Duplicate
                            </button>

                            <button type="button">
                              Permissions
                            </button>

                            <button
                              type="button"
                              className="danger"
                            >
                              Delete
                            </button>

                          </div>

                        )}

                      </div>

                    </div>

                  </td>

                </tr>

              ))}

              {/* NO RESULT */}

              {displayedRoles.length === 0 && (

                <tr>

                  <td colSpan={6}>

                    <div className="no-results">
                      No roles found
                    </div>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

        {/* =====================
            PAGINATION
        ====================== */}

        <div className="pagination">

          <span className="showing">

            Showing{" "}

            {filteredRoles.length === 0
              ? 0
              : startIndex + 1}{" "}

            to{" "}

            {Math.min(
              startIndex + rolesPerPage,
              filteredRoles.length
            )}{" "}

            of {filteredRoles.length} roles

          </span>

          <div className="pagination-buttons">

            <button
              type="button"
              className="page-nav"
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage((page) =>
                  Math.max(1, page - 1)
                )
              }
            >
              <ChevronLeft size={16} />
              Prev
            </button>

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (

              <button
                type="button"
                key={page}
                className={`page-number ${
                  currentPage === page
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setCurrentPage(page)
                }
              >
                {page}
              </button>

            ))}

            <button
              type="button"
              className="page-nav"
              disabled={
                currentPage === totalPages
              }
              onClick={() =>
                setCurrentPage((page) =>
                  Math.min(
                    totalPages,
                    page + 1
                  )
                )
              }
            >
              Next
              <ChevronRight size={16} />
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default RoleManagement;