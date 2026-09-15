import React from "react";

import {
  FileText,
  CheckCircle,
  FileEdit,
  Archive,
} from "lucide-react";

import StatsSection from "../StatsSectionComponents/StatsSection";
import "../CMSCardComponents/CMSCard.css";

function CMSCard() {

  const cmsStats = [
    {
      title: "Total Pages",
      value: "128",
      change: "12.5%",
      text: "from last month",
      type: "up",
      icon: FileText,
      iconClass: "blue",
    },
    {
      title: "Published Pages",
      value: "96",
      change: "8.3%",
      text: "from last month",
      type: "up",
      icon: CheckCircle,
      iconClass: "green",
    },
    {
      title: "Draft Pages",
      value: "24",
      change: "3.2%",
      text: "from last month",
      type: "down",
      icon: FileEdit,
      iconClass: "orange",
    },
    {
      title: "Archived Pages",
      value: "8",
      change: "2.1%",
      text: "from last month",
      type: "down",
      icon: Archive,
      iconClass: "purple",
    },
  ];

  const handleAddPage = () => {
    console.log("Add CMS Page clicked");
  };

  return (
    <StatsSection
      title="CMS Management"
      breadcrumb={[
        "Dashboard",
        "CMS Management",
      ]}
      buttonText="Create New Page"
      onButtonClick={handleAddPage}
      stats={cmsStats}
    />
  );
}

export default CMSCard;