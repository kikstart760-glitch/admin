import React from "react";
import "../PermissionCardComponents/PermissionCard.css";

import {
  KeyRound,
  ShieldCheck,
  ShieldX,
  LockKeyhole,
} from "lucide-react";
import StatsSection from "../StatsSectionComponents/StatsSection";

function PermissionCard() {

  const permissionStats = [
    {
      title: "Total Permissions",
      value: "86",
      change: "12.4%",
      text: "from last month",
      type: "up",
      icon: KeyRound,
      iconClass: "blue",
    },
    {
      title: "Active Permissions",
      value: "72",
      change: "8.6%",
      text: "from last month",
      type: "up",
      icon: ShieldCheck,
      iconClass: "green",
    },
    {
      title: "Inactive Permissions",
      value: "10",
      change: "3.2%",
      text: "from last month",
      type: "down",
      icon: ShieldX,
      iconClass: "orange",
    },
    {
      title: "Restricted Permissions",
      value: "4",
      change: "2.1%",
      text: "from last month",
      type: "down",
      icon: LockKeyhole,
      iconClass: "purple",
    },
  ];

  const handleAddPermission = () => {
    console.log("Add Permission clicked");
  };

  return (
    <StatsSection
      title="Permission Management"
      breadcrumb={[
        "Dashboard",
        "Permission Management",
      ]}
      buttonText="Add New Permission"
      onButtonClick={handleAddPermission}
      stats={permissionStats}
    />
  );
}

export default PermissionCard;