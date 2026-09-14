import React from 'react'
import "../RoleCardComponents/RoleCard.css"
import StatsSection from "../StatsSectionComponents/StatsSection";
import {
  ShieldCheck,
  Shield,
  ShieldAlert,
  UserCog,
} from "lucide-react";

function RoleCard() {

    const roleStats = [
    {
      title: "Total Roles",
      value: "24",
      change: "6.5%",
      text: "from last month",
      type: "up",
      icon: ShieldCheck,
      iconClass: "blue",
    },
    {
      title: "Active Roles",
      value: "18",
      change: "4.2%",
      text: "from last month",
      type: "up",
      icon: Shield,
      iconClass: "green",
    },
    {
      title: "Inactive Roles",
      value: "4",
      change: "2.1%",
      text: "from last month",
      type: "down",
      icon: ShieldAlert,
      iconClass: "orange",
    },
    {
      title: "Admin Roles",
      value: "2",
      change: "1.5%",
      text: "from last month",
      type: "up",
      icon: UserCog,
      iconClass: "purple",
    },
  ];

    const handleAddRole = () => {
    // Logic to open the Add Role modal
    console.log("Add role clicked");
  }
  
  return (
    <StatsSection
      title="Role Management"
      breadcrumb={[
        "Dashboard",
        "Role Management",
      ]}
      buttonText="Add New Role"
      onButtonClick={handleAddRole}
      stats={roleStats}
    />
  )
}

export default RoleCard