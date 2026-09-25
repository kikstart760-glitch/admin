import React, { useMemo, useState } from "react";

import {
  Search,
  LayoutDashboard,
  FilePenLine,
  Users,
  Crown,
  ShieldCheck,
  UserRoundCog,
  Eye,
  FileText,
  Pencil,
  Trash2,
  Settings,
  ChevronRight,
  ChevronDown,
  SlidersHorizontal,
  Check,
  X,
  Minus,
  RotateCcw,
  Save,
  CircleCheck,
  KeyRound,
  Plus,
} from "lucide-react";

import "../PermissionManagement/PermissionManagementComponent.css";

/* =========================================================
   MODULES
========================================================= */

const modules = [
  {
    id: "dashboard",
    name: "Dashboard",
    description: "Dashboard and analytics access",
    icon: LayoutDashboard,
    color: "blue",
  },
  {
    id: "cms",
    name: "CMS",
    description: "Manage content and pages",
    icon: FilePenLine,
    color: "green",
  },
  {
    id: "subscription",
    name: "Subscription",
    description: "Manage subscription plans",
    icon: Crown,
    color: "orange",
  },
  {
    id: "users",
    name: "User Control",
    description: "User management and control",
    icon: Users,
    color: "blue",
  },
  {
    id: "roles",
    name: "Role Management",
    description: "Manage roles and user access",
    icon: UserRoundCog,
    color: "purple",
  },
  {
    id: "permissions",
    name: "Permissions",
    description: "Manage role permissions",
    icon: KeyRound,
    color: "indigo",
  },
];

/* =========================================================
   ROLES
========================================================= */

const roles = [
  {
    id: "superAdmin",
    name: "Super Admin",
    icon: Crown,
    color: "purple",
  },
  {
    id: "admin",
    name: "Admin",
    icon: ShieldCheck,
    color: "blue",
  },
  {
    id: "editor",
    name: "Editor",
    icon: Pencil,
    color: "green",
  },
  {
    id: "agent",
    name: "Agent",
    icon: UserRoundCog,
    color: "orange",
  },
  {
    id: "viewer",
    name: "Viewer",
    icon: Eye,
    color: "purple",
  },
  {
    id: "custom",
    name: "Custom Role",
    icon: Plus,
    color: "cyan",
  },
];

/* =========================================================
   INITIAL DATA
========================================================= */

const initialSections = [
  {
    id: "dashboard",
    name: "Dashboard",
    permissions: [
      {
        id: "view-dashboard",
        label: "View Dashboard",
        icon: Eye,
        values: {
          superAdmin: "granted",
          admin: "granted",
          editor: "granted",
          agent: "granted",
          viewer: "granted",
          custom: "unset",
        },
      },
      {
        id: "manage-dashboard",
        label: "Manage Dashboard",
        icon: Settings,
        values: {
          superAdmin: "granted",
          admin: "granted",
          editor: "granted",
          agent: "partial",
          viewer: "denied",
          custom: "unset",
        },
      },
      {
        id: "view-reports",
        label: "View Reports",
        icon: FileText,
        values: {
          superAdmin: "granted",
          admin: "granted",
          editor: "partial",
          agent: "denied",
          viewer: "denied",
          custom: "unset",
        },
      },
      {
        id: "export-reports",
        label: "Export Reports",
        icon: FileText,
        values: {
          superAdmin: "granted",
          admin: "granted",
          editor: "partial",
          agent: "denied",
          viewer: "denied",
          custom: "unset",
        },
      },
    ],
  },

  {
    id: "cms",
    name: "CMS",
    permissions: [
      {
        id: "view-content",
        label: "View Content",
        icon: Eye,
        values: {
          superAdmin: "granted",
          admin: "granted",
          editor: "granted",
          agent: "partial",
          viewer: "denied",
          custom: "unset",
        },
      },
      {
        id: "create-content",
        label: "Create Content",
        icon: FileText,
        values: {
          superAdmin: "granted",
          admin: "granted",
          editor: "partial",
          agent: "denied",
          viewer: "denied",
          custom: "unset",
        },
      },
      {
        id: "edit-content",
        label: "Edit Content",
        icon: Pencil,
        values: {
          superAdmin: "granted",
          admin: "partial",
          editor: "partial",
          agent: "denied",
          viewer: "denied",
          custom: "unset",
        },
      },
      {
        id: "delete-content",
        label: "Delete Content",
        icon: Trash2,
        values: {
          superAdmin: "granted",
          admin: "partial",
          editor: "denied",
          agent: "denied",
          viewer: "denied",
          custom: "unset",
        },
      },
    ],
  },

  {
    id: "subscription",
    name: "Subscription",
    permissions: [
      {
        id: "view-subscriptions",
        label: "View Subscriptions",
        icon: Eye,
        values: {
          superAdmin: "granted",
          admin: "granted",
          editor: "granted",
          agent: "partial",
          viewer: "denied",
          custom: "unset",
        },
      },
      {
        id: "create-subscription",
        label: "Create Subscription",
        icon: FileText,
        values: {
          superAdmin: "granted",
          admin: "granted",
          editor: "partial",
          agent: "denied",
          viewer: "denied",
          custom: "unset",
        },
      },
      {
        id: "edit-subscription",
        label: "Edit Subscription",
        icon: Pencil,
        values: {
          superAdmin: "granted",
          admin: "granted",
          editor: "partial",
          agent: "denied",
          viewer: "denied",
          custom: "unset",
        },
      },
      {
        id: "delete-subscription",
        label: "Delete Subscription",
        icon: Trash2,
        values: {
          superAdmin: "granted",
          admin: "partial",
          editor: "denied",
          agent: "denied",
          viewer: "denied",
          custom: "unset",
        },
      },
    ],
  },

  {
    id: "users",
    name: "User Control",
    permissions: [
      {
        id: "view-users",
        label: "View Users",
        icon: Eye,
        values: {
          superAdmin: "granted",
          admin: "granted",
          editor: "partial",
          agent: "partial",
          viewer: "denied",
          custom: "unset",
        },
      },
      {
        id: "create-user",
        label: "Create User",
        icon: Users,
        values: {
          superAdmin: "granted",
          admin: "granted",
          editor: "denied",
          agent: "denied",
          viewer: "denied",
          custom: "unset",
        },
      },
      {
        id: "edit-user",
        label: "Edit User",
        icon: Pencil,
        values: {
          superAdmin: "granted",
          admin: "granted",
          editor: "partial",
          agent: "denied",
          viewer: "denied",
          custom: "unset",
        },
      },
      {
        id: "delete-user",
        label: "Delete User",
        icon: Trash2,
        values: {
          superAdmin: "granted",
          admin: "partial",
          editor: "denied",
          agent: "denied",
          viewer: "denied",
          custom: "unset",
        },
      },
    ],
  },

  {
    id: "roles",
    name: "Role Management",
    permissions: [
      {
        id: "view-roles",
        label: "View Roles",
        icon: Eye,
        values: {
          superAdmin: "granted",
          admin: "granted",
          editor: "partial",
          agent: "denied",
          viewer: "denied",
          custom: "unset",
        },
      },
      {
        id: "create-role",
        label: "Create Role",
        icon: UserRoundCog,
        values: {
          superAdmin: "granted",
          admin: "granted",
          editor: "denied",
          agent: "denied",
          viewer: "denied",
          custom: "unset",
        },
      },
      {
        id: "edit-role",
        label: "Edit Role",
        icon: Pencil,
        values: {
          superAdmin: "granted",
          admin: "granted",
          editor: "denied",
          agent: "denied",
          viewer: "denied",
          custom: "unset",
        },
      },
      {
        id: "delete-role",
        label: "Delete Role",
        icon: Trash2,
        values: {
          superAdmin: "granted",
          admin: "partial",
          editor: "denied",
          agent: "denied",
          viewer: "denied",
          custom: "unset",
        },
      },
    ],
  },

  {
    id: "permissions",
    name: "Permissions",
    permissions: [
      {
        id: "view-permissions",
        label: "View Permissions",
        icon: Eye,
        values: {
          superAdmin: "granted",
          admin: "granted",
          editor: "denied",
          agent: "denied",
          viewer: "denied",
          custom: "unset",
        },
      },
      {
        id: "manage-permissions",
        label: "Manage Permissions",
        icon: ShieldCheck,
        values: {
          superAdmin: "granted",
          admin: "partial",
          editor: "denied",
          agent: "denied",
          viewer: "denied",
          custom: "unset",
        },
      },
    ],
  },
];

/* =========================================================
   STATUS ICON
========================================================= */

function PermissionStatusIcon({ status }) {
  if (status === "granted") {
    return (
      <span className="pm-status-icon pm-status-granted">
        <Check size={12} strokeWidth={3} />
      </span>
    );
  }

  if (status === "denied") {
    return (
      <span className="pm-status-icon pm-status-denied">
        <X size={12} strokeWidth={3} />
      </span>
    );
  }

  if (status === "partial") {
    return (
      <span className="pm-status-icon pm-status-partial">
        <Minus size={12} strokeWidth={3} />
      </span>
    );
  }

  return (
    <span className="pm-status-icon pm-status-unset">
      <Minus size={12} strokeWidth={3} />
    </span>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

function PermissionManagementComponent() {
  const [moduleSearch, setModuleSearch] = useState("");
  const [permissionSearch, setPermissionSearch] = useState("");

  const [selectedModule, setSelectedModule] =
    useState("dashboard");

  const [sections, setSections] =
    useState(initialSections);

  const [collapsedSections, setCollapsedSections] =
    useState({});

  const [permissionModal, setPermissionModal] = useState({
    open: false,
    sectionId: "",
    permissionId: "",
    permissionName: "",
    roleId: "",
    roleName: "",
  });

  const [selectedStatus, setSelectedStatus] =
    useState("granted");

  const [showSuccess, setShowSuccess] =
    useState(false);

  /* =========================================================
     MODULE SEARCH
  ========================================================= */

  const filteredModules = useMemo(() => {
    return modules.filter((module) =>
      module.name
        .toLowerCase()
        .includes(moduleSearch.toLowerCase())
    );
  }, [moduleSearch]);

  /* =========================================================
     PERMISSION SEARCH
  ========================================================= */

  const visibleSections = useMemo(() => {
    const search =
      permissionSearch.trim().toLowerCase();

    if (!search) {
      return sections;
    }

    return sections
      .filter(
        (section) =>
          section.name
            .toLowerCase()
            .includes(search) ||
          section.permissions.some((permission) =>
            permission.label
              .toLowerCase()
              .includes(search)
          )
      )
      .map((section) => {
        if (
          section.name
            .toLowerCase()
            .includes(search)
        ) {
          return section;
        }

        return {
          ...section,

          permissions: section.permissions.filter(
            (permission) =>
              permission.label
                .toLowerCase()
                .includes(search)
          ),
        };
      });
  }, [sections, permissionSearch]);

  /* =========================================================
     MODULE CLICK
  ========================================================= */

  const handleModuleClick = (moduleId) => {
    setSelectedModule(moduleId);

    const element = document.getElementById(
      `pm-section-${moduleId}`
    );

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  /* =========================================================
     COLLAPSE
  ========================================================= */

  const toggleSection = (sectionId) => {
    setCollapsedSections((previous) => ({
      ...previous,
      [sectionId]: !previous[sectionId],
    }));
  };

  /* =========================================================
     OPEN MODAL
  ========================================================= */

  const openPermissionModal = (
    section,
    permission,
    role
  ) => {
    setPermissionModal({
      open: true,
      sectionId: section.id,
      permissionId: permission.id,
      permissionName: permission.label,
      roleId: role.id,
      roleName: role.name,
    });

    setSelectedStatus(
      permission.values[role.id]
    );
  };

  /* =========================================================
     CLOSE MODAL
  ========================================================= */

  const closePermissionModal = () => {
    setPermissionModal({
      open: false,
      sectionId: "",
      permissionId: "",
      permissionName: "",
      roleId: "",
      roleName: "",
    });
  };

  /* =========================================================
     SAVE SINGLE PERMISSION
  ========================================================= */

  const saveSelectedPermission = () => {
    setSections((previousSections) =>
      previousSections.map((section) => {
        if (
          section.id !==
          permissionModal.sectionId
        ) {
          return section;
        }

        return {
          ...section,

          permissions: section.permissions.map(
            (permission) => {
              if (
                permission.id !==
                permissionModal.permissionId
              ) {
                return permission;
              }

              return {
                ...permission,

                values: {
                  ...permission.values,

                  [permissionModal.roleId]:
                    selectedStatus,
                },
              };
            }
          ),
        };
      })
    );

    closePermissionModal();
  };

  /* =========================================================
     GRANT ALL
  ========================================================= */

  const grantAllPermissions = () => {
    setSections((previousSections) =>
      previousSections.map((section) => ({
        ...section,

        permissions: section.permissions.map(
          (permission) => ({
            ...permission,

            values: Object.keys(
              permission.values
            ).reduce((result, roleId) => {
              result[roleId] = "granted";

              return result;
            }, {}),
          })
        ),
      }))
    );
  };

  /* =========================================================
     DENY ALL
  ========================================================= */

  const denyAllPermissions = () => {
    setSections((previousSections) =>
      previousSections.map((section) => ({
        ...section,

        permissions: section.permissions.map(
          (permission) => ({
            ...permission,

            values: Object.keys(
              permission.values
            ).reduce((result, roleId) => {
              result[roleId] = "denied";

              return result;
            }, {}),
          })
        ),
      }))
    );
  };

  /* =========================================================
     RESET
  ========================================================= */

  const resetPermissions = () => {
    setSections(initialSections);

    setCollapsedSections({});
  };

  /* =========================================================
     CANCEL
  ========================================================= */

  const handleCancel = () => {
    setSections(initialSections);

    setPermissionSearch("");

    setModuleSearch("");

    setSelectedModule("dashboard");

    setCollapsedSections({});
  };

  /* =========================================================
     SAVE CHANGES
  ========================================================= */

  const handleSave = () => {
    console.log(
      "Permissions:",
      sections
    );

    /*
      API EXAMPLE:

      await axios.put(
        "/api/v1/admin/permissions",
        {
          permissions: sections
        }
      );
    */

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="permission-management">

      <div className="permission-management-layout">

        {/* =====================================================
            LEFT
        ===================================================== */}

        <aside className="permission-modules-panel">

          {/* ================= MODULES ================= */}

          <div className="permission-left-block">

            <h3 className="permission-panel-title">
              Modules
            </h3>

            <div className="permission-search-box">

              <Search size={17} />

              <input
                type="text"
                placeholder="Search modules..."
                value={moduleSearch}
                onChange={(event) =>
                  setModuleSearch(
                    event.target.value
                  )
                }
              />

            </div>

            <div className="permission-module-list">

              {filteredModules.map((module) => {
                const ModuleIcon = module.icon;

                return (
                  <button
                    key={module.id}
                    type="button"
                    className={`permission-module-item ${
                      selectedModule === module.id
                        ? "permission-module-active"
                        : ""
                    }`}
                    onClick={() =>
                      handleModuleClick(module.id)
                    }
                  >

                    <span
                      className={`permission-module-icon permission-color-${module.color}`}
                    >
                      <ModuleIcon size={20} />
                    </span>

                    <span className="permission-module-info">

                      <strong>
                        {module.name}
                      </strong>

                      <small>
                        {module.description}
                      </small>

                    </span>

                    <ChevronRight
                      size={18}
                      className="permission-module-arrow"
                    />

                  </button>
                );
              })}

            </div>

          </div>

          {/* =====================================================
              PERMISSION LEGEND
          ===================================================== */}

          <div className="permission-left-section">

            <h3 className="permission-panel-title">
              Permission Legend
            </h3>

            <div className="permission-legend-list">

              {/* GRANTED */}

              <div className="permission-legend-item">

                <span className="permission-legend-circle legend-granted">
                  <Check
                    size={17}
                    strokeWidth={3}
                  />
                </span>

                <div className="permission-legend-content">

                  <strong>
                    Granted
                  </strong>

                  <small>
                    Full access allowed
                  </small>

                </div>

              </div>

              {/* DENIED */}

              <div className="permission-legend-item">

                <span className="permission-legend-circle legend-denied">
                  <X
                    size={17}
                    strokeWidth={3}
                  />
                </span>

                <div className="permission-legend-content">

                  <strong>
                    Denied
                  </strong>

                  <small>
                    Access restricted
                  </small>

                </div>

              </div>

              {/* PARTIAL */}

              <div className="permission-legend-item">

                <span className="permission-legend-circle legend-partial">
                  <Minus
                    size={17}
                    strokeWidth={3}
                  />
                </span>

                <div className="permission-legend-content">

                  <strong>
                    Partial Access
                  </strong>

                  <small>
                    Limited access
                  </small>

                </div>

              </div>

              {/* NOT SET */}

              <div className="permission-legend-item">

                <span className="permission-legend-circle legend-unset">
                  <Minus
                    size={17}
                    strokeWidth={3}
                  />
                </span>

                <div className="permission-legend-content">

                  <strong>
                    Not Set
                  </strong>

                  <small>
                    Not configured
                  </small>

                </div>

              </div>

            </div>

          </div>

          {/* =====================================================
              BULK ACTIONS
          ===================================================== */}

          <div className="permission-left-section">

            <h3 className="permission-panel-title">
              Bulk Actions
            </h3>

            <div className="permission-bulk-list">

              <button
                type="button"
                className="permission-bulk-button bulk-grant-button"
                onClick={grantAllPermissions}
              >

                <span className="permission-bulk-button-icon">
                  <CircleCheck size={19} />
                </span>

                <span className="permission-bulk-button-text">

                  <strong>
                    Grant All Permissions
                  </strong>

                  <small>
                    Give access to all permissions
                  </small>

                </span>

                <ChevronRight size={15} />

              </button>

              <button
                type="button"
                className="permission-bulk-button bulk-deny-button"
                onClick={denyAllPermissions}
              >

                <span className="permission-bulk-button-icon">
                  <X size={19} />
                </span>

                <span className="permission-bulk-button-text">

                  <strong>
                    Deny All Permissions
                  </strong>

                  <small>
                    Revoke all permissions
                  </small>

                </span>

                <ChevronRight size={15} />

              </button>

              <button
                type="button"
                className="permission-bulk-button bulk-reset-button"
                onClick={resetPermissions}
              >

                <span className="permission-bulk-button-icon">
                  <RotateCcw size={19} />
                </span>

                <span className="permission-bulk-button-text">

                  <strong>
                    Reset to Default
                  </strong>

                  <small>
                    Restore default permissions
                  </small>

                </span>

                <ChevronRight size={15} />

              </button>

            </div>

          </div>

        </aside>

        {/* =====================================================
            MATRIX
        ===================================================== */}

        <main className="permission-matrix-panel">

          <div className="permission-matrix-header">

            <h3 className="permission-panel-title">
              Permissions Matrix
            </h3>

            <div className="permission-matrix-tools">

              <div className="permission-search-box permission-search-input">

                <Search size={17} />

                <input
                  type="text"
                  placeholder="Search permissions..."
                  value={permissionSearch}
                  onChange={(event) =>
                    setPermissionSearch(
                      event.target.value
                    )
                  }
                />

              </div>

              <button
                type="button"
                className="permission-filter-btn"
              >
                <SlidersHorizontal size={18} />
              </button>

            </div>

          </div>

          {/* =====================================================
              TABLE
          ===================================================== */}

          <div className="permission-table-wrapper">

            <table className="permission-matrix-table">

              <thead>

                <tr>

                  <th className="permission-action-column">
                    Actions / Permissions
                  </th>

                  {roles.map((role) => {
                    const RoleIcon = role.icon;

                    return (
                      <th key={role.id}>

                        <div className="permission-role-header">

                          <span
                            className={`permission-role-icon permission-color-${role.color}`}
                          >
                            <RoleIcon size={21} />
                          </span>

                          <span className="permission-role-name">
                            {role.name}
                          </span>

                        </div>

                      </th>
                    );
                  })}

                </tr>

              </thead>

              <tbody>

                {visibleSections.map((section) => (

                  <React.Fragment key={section.id}>

                    {/* ================= SECTION ================= */}

                    <tr
                      id={`pm-section-${section.id}`}
                      className="permission-section-row"
                      onClick={() =>
                        toggleSection(section.id)
                      }
                    >

                      <td colSpan={roles.length + 1}>

                        <div className="permission-group-header">

                          {collapsedSections[
                            section.id
                          ] ? (
                            <ChevronRight size={17} />
                          ) : (
                            <ChevronDown size={17} />
                          )}

                          <span>
                            {section.name}
                          </span>

                        </div>

                      </td>

                    </tr>

                    {/* ================= ROW ================= */}

                    {!collapsedSections[section.id] &&
                      section.permissions.map(
                        (permission) => {
                          const PermissionIcon =
                            permission.icon;

                          return (
                            <tr
                              key={permission.id}
                              className="permission-data-row"
                            >

                              <td className="permission-action-name">

                                <PermissionIcon size={16} />

                                <span>
                                  {permission.label}
                                </span>

                              </td>

                              {roles.map((role) => (

                                <td
                                  key={role.id}
                                  className="permission-status-cell"
                                >

                                  <button
                                    type="button"
                                    className="pm-editable-permission"
                                    onClick={() =>
                                      openPermissionModal(
                                        section,
                                        permission,
                                        role
                                      )
                                    }
                                  >

                                    {/* NORMAL ICON */}

                                    <span className="pm-current-icon">

                                      <PermissionStatusIcon
                                        status={
                                          permission.values[
                                            role.id
                                          ]
                                        }
                                      />

                                    </span>

                                    {/* HOVER PENCIL */}

                                    <span className="pm-hover-edit-icon">

                                      <Pencil size={15} />

                                    </span>

                                    {/* TOOLTIP */}

                                    <span className="pm-edit-tooltip">
                                      Click to change permission
                                    </span>

                                  </button>

                                </td>

                              ))}

                            </tr>
                          );
                        }
                      )}

              </React.Fragment>

                ))}

              </tbody>

            </table>

          </div>

        </main>

      </div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="permission-management-footer">

        <div className="permission-footer-info">

          <span>
            Last updated: May 12, 2024
          </span>

          <span>
            10:30 AM
          </span>

          <button
            type="button"
            className="permission-refresh-btn"
            onClick={resetPermissions}
          >
            <RotateCcw size={15} />
            Refresh
          </button>

        </div>

        <div className="permission-footer-actions">

          <button
            type="button"
            className="permission-cancel-btn"
            onClick={handleCancel}
          >
            Cancel
          </button>

          <button
            type="button"
            className="permission-save-btn"
            onClick={handleSave}
          >
            <Save size={17} />

            Save Changes
          </button>

        </div>

      </div>

      {/* =====================================================
          PERMISSION MODAL
      ===================================================== */}

      {permissionModal.open && (

        <div
          className="pm-modal-overlay"
          onMouseDown={closePermissionModal}
        >

          <div
            className="pm-permission-modal"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >

            {/* ================= HEADER ================= */}

            <div className="pm-modal-header">

              <div>

                <h3>
                  {permissionModal.permissionName}
                  {" - "}
                  {permissionModal.roleName} Role
                </h3>

                <p>
                  Select the permission status for this role.
                </p>

              </div>

              <button
                type="button"
                className="pm-modal-close"
                onClick={closePermissionModal}
              >
                <X size={19} />
              </button>

            </div>

            {/* =================================================
                OPTIONS
            ================================================= */}

            <div className="pm-modal-options">

              {/* GRANTED */}

              <button
                type="button"
                className={`pm-modal-option ${
                  selectedStatus === "granted"
                    ? "pm-modal-option-active option-granted"
                    : ""
                }`}
                onClick={() =>
                  setSelectedStatus("granted")
                }
              >

                <span className="pm-modal-option-icon modal-granted-icon">
                  <Check size={20} />
                </span>

                <strong>
                  Granted
                </strong>

                <small>
                  Full access
                </small>

                <span className="pm-modal-radio">

                  {selectedStatus ===
                    "granted" && (
                    <Check
                      size={10}
                      strokeWidth={3}
                    />
                  )}

                </span>

              </button>

              {/* DENIED */}

              <button
                type="button"
                className={`pm-modal-option ${
                  selectedStatus === "denied"
                    ? "pm-modal-option-active option-denied"
                    : ""
                }`}
                onClick={() =>
                  setSelectedStatus("denied")
                }
              >

                <span className="pm-modal-option-icon modal-denied-icon">
                  <X size={20} />
                </span>

                <strong>
                  Denied
                </strong>

                <small>
                  Access restricted
                </small>

                <span className="pm-modal-radio">

                  {selectedStatus ===
                    "denied" && (
                    <Check
                      size={10}
                      strokeWidth={3}
                    />
                  )}

                </span>

              </button>

              {/* PARTIAL */}

              <button
                type="button"
                className={`pm-modal-option ${
                  selectedStatus === "partial"
                    ? "pm-modal-option-active option-partial"
                    : ""
                }`}
                onClick={() =>
                  setSelectedStatus("partial")
                }
              >

                <span className="pm-modal-option-icon modal-partial-icon">
                  <Minus size={20} />
                </span>

                <strong>
                  Partial
                </strong>

                <small>
                  Limited access
                </small>

                <span className="pm-modal-radio">

                  {selectedStatus ===
                    "partial" && (
                    <Check
                      size={10}
                      strokeWidth={3}
                    />
                  )}

                </span>

              </button>

              {/* NOT SET */}

              <button
                type="button"
                className={`pm-modal-option ${
                  selectedStatus === "unset"
                    ? "pm-modal-option-active option-unset"
                    : ""
                }`}
                onClick={() =>
                  setSelectedStatus("unset")
                }
              >

                <span className="pm-modal-option-icon modal-unset-icon">
                  <Minus size={20} />
                </span>

                <strong>
                  Not Set
                </strong>

                <small>
                  Not configured
                </small>

                <span className="pm-modal-radio">

                  {selectedStatus ===
                    "unset" && (
                    <Check
                      size={10}
                      strokeWidth={3}
                    />
                  )}

                </span>

              </button>

            </div>

            {/* =================================================
                ACTIONS
            ================================================= */}

            <div className="pm-modal-actions">

              <button
                type="button"
                className="pm-modal-cancel"
                onClick={closePermissionModal}
              >
                Cancel
              </button>

              <button
                type="button"
                className="pm-modal-save"
                onClick={saveSelectedPermission}
              >
                Save
              </button>

            </div>

          </div>

        </div>

      )}

      {/* =====================================================
          SUCCESS TOAST
      ===================================================== */}

      {showSuccess && (

        <div className="permission-success-toast">

          <span className="permission-success-icon">
            <Check size={18} />
          </span>

          <div>

            <strong>
              Permissions updated successfully!
            </strong>

            <p>
              The role permissions have been saved.
            </p>

          </div>

          <button
            type="button"
            onClick={() =>
              setShowSuccess(false)
            }
          >
            <X size={15} />
          </button>

        </div>

      )}

    </div>
  );
}

export default PermissionManagementComponent;