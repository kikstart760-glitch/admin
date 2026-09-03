import React from "react";
import "../DashcardComponent/Dashcard.css";

import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { HiCurrencyRupee } from "react-icons/hi2";
import { MdPeopleAlt } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

function Dashcard() {
  const cardData = [
    {
      icon: <BsFillSuitcaseLgFill />,
      title: "Bookings",
      value: "120",
      growth: "12%",
      color: "blue",
      bottom1: "24",
      bottomText1: "Pending",
      bottom2: "96",
      bottomText2: "Completed",
    },
    {
      icon: <HiCurrencyRupee />,
      title: "Revenue",
      value: "₹50,000",
      growth: "18%",
      color: "green",
      bottom1: "₹30,000",
      bottomText1: "This month",
      bottom2: "₹20,000",
      bottomText2: "Last month",
    },
    {
      icon: <MdPeopleAlt />,
      title: "Users",
      value: "300",
      growth: "8%",
      color: "purple",
      bottom1: "280",
      bottomText1: "Active Users",
      bottom2: "20",
      bottomText2: "New Users",
    },
    {
      icon: <FaGift />,
      title: "Offers",
      value: "10",
      growth: "5%",
      color: "orange",
      bottom1: "5",
      bottomText1: "Active",
      bottom2: "5",
      bottomText2: "Expired",
    },
  ];

  return (
      <div className="dashcard">
          {cardData.map((card, index) => (
              <div className={`carddash ${card.color}`} key={index}>

                  {/* Top */}
                  <div className="card-top">
                      <div className="card-icon">
                          {card.icon}
                      </div>
                      {/* Details */}
                      <div className="card-details">
                          <h3>{card.title}</h3>
                          <h2>{card.value}</h2>
                      </div>
                      

                  </div>
                    {/* Growth */}
                    <div className="card-growth">
                        <div className="growth">
                          <span>
                              <FaArrowUp /> {card.growth}
                          </span>
                            <p>vs last month</p>
                        </div>
                    </div>


                  {/* Bottom Stats */}
                  <div className="card-bottom">
                      <div>
                          <strong>{card.bottom1}</strong>
                          <small>{card.bottomText1}</small>
                      </div>

                      <div className="divider"></div>

                      <div>
                          <strong>{card.bottom2}</strong>
                          <small>{card.bottomText2}</small>
                      </div>
                  </div>

              </div>
          ))}
      </div>
  );
}

export default Dashcard;