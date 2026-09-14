import React from "react";

import {
  CreditCard,
  CheckCircle,
  Clock3,
  IndianRupee,
} from "lucide-react";

import "../SubscriptionCardComponents/SubscriptionCard.css";
import StatsSection from "../StatsSectionComponents/StatsSection";

function SubscriptionCard() {

  const subscriptionStats = [
    {
      title: "Total Subscriptions",
      value: "1,248",
      change: "12.5%",
      text: "from last month",
      type: "up",
      icon: CreditCard,
      iconClass: "blue",
    },
    {
      title: "Active Subscriptions",
      value: "986",
      change: "8.3%",
      text: "from last month",
      type: "up",
      icon: CheckCircle,
      iconClass: "green",
    },
    {
      title: "Pending Subscriptions",
      value: "182",
      change: "4.2%",
      text: "from last month",
      type: "up",
      icon: Clock3,
      iconClass: "orange",
    },
    {
      title: "Total Revenue",
      value: "1,24,000",
      change: "18.5%",
      text: "from last month",
      type: "up",
      icon: IndianRupee,
      iconClass: "purple",
    },
  ];

  const handleAddSubscription = () => {
    console.log("Add Subscription clicked");
  };

  return (
    <StatsSection
      title="Subscription Management"
      breadcrumb={[
        "Dashboard",
        "Subscription Management",
      ]}
      buttonText="Add New Subscription"
      onButtonClick={handleAddSubscription}
      stats={subscriptionStats}
    />
  );
}

export default SubscriptionCard;