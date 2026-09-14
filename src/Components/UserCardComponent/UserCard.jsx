import React from "react";
import {
  Users,
  UserCheck,
  UserX,
  UserRoundX,
} from "lucide-react";
import "../StatsSectionComponents/StatsSection.css";
import StatsSection from "../StatsSectionComponents/StatsSection";
import AdduserModal from "../ModalComponents/AdduserModal/AdduserModal";

function UserCard() {

  const userStats = [
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

  const [modalShow, setModalShow] = React.useState(false);
  
  const handleAddUser = () => {
    setModalShow(true);
  };

  return (
    <>
    <StatsSection
      title="User Control"
      breadcrumb={[
        "Dashboard",
        "User Control",
      ]}
      buttonText="Add New User"
      onButtonClick={handleAddUser}
      stats={userStats}
    />
    <AdduserModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
    </>
  );
}

export default UserCard;