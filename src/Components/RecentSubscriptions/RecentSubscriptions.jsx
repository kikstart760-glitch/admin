import React, { useState } from "react";
import {
  Crown,
  MoreVertical,
  ArrowRight,
  ShoppingBag,
  X,
  Mail,
  CalendarDays,
  CreditCard,
} from "lucide-react";

import "../RecentSubscriptions/RecentSubscriptions.css";

function RecentSubscriptions() {
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const recentPurchaseData = [
    {
      id: 1,
      plan: "Standard Plan",
      customer: "Acme Corp",
      email: "acme@example.com",
      status: "Active",
      billingDate: "Oct 20, 2026",
      price: "₹2,499",
      color: "blue",
    },
    {
      id: 2,
      plan: "Pro Plan",
      customer: "Travel Experts",
      email: "travel@example.com",
      status: "Active",
      billingDate: "Oct 15, 2026",
      price: "₹4,999",
      color: "purple",
    },
    {
      id: 3,
      plan: "Standard Plan",
      customer: "World Travels",
      email: "world@example.com",
      status: "Active",
      billingDate: "Oct 22, 2026",
      price: "₹2,499",
      color: "blue",
    },
    {
      id: 4,
      plan: "Free Plan",
      customer: "Solo Traveler",
      email: "solo@example.com",
      status: "Trial",
      billingDate: "Oct 28, 2026",
      price: "₹0",
      color: "blue",
    },
    {
      id: 5,
      plan: "Enterprise Plan",
      customer: "Global Tours",
      email: "global@example.com",
      status: "Active",
      billingDate: "Nov 10, 2026",
      price: "Custom",
      color: "green",
    },
    {
      id: 6,
      plan: "Pro Plan",
      customer: "Holiday Hub",
      email: "holiday@example.com",
      status: "Active",
      billingDate: "Nov 14, 2026",
      price: "₹4,999",
      color: "purple",
    },
    {
      id: 7,
      plan: "Standard Plan",
      customer: "Explore India",
      email: "explore@example.com",
      status: "Expired",
      billingDate: "Sep 30, 2026",
      price: "₹2,499",
      color: "blue",
    },
  ];

  const displayedSubscriptions = showAll
    ? recentPurchaseData
    : recentPurchaseData.slice(0, 5);

  return (
    <>
      <section className="recent-purchase-box">

        {/* Header */}

        <div className="recent-purchase-header">

          <div className="recent-purchase-heading">

            <div className="recent-purchase-heading-icon">
              <ShoppingBag size={20} />
            </div>

            <div>
              <h2>Recent Subscriptions</h2>
              <p>Recently purchased subscription plans</p>
            </div>

          </div>

          <button
            className="recent-purchase-view-button"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show Less" : "View All"}

            <ArrowRight
              size={15}
              className={showAll ? "recent-arrow-rotate" : ""}
            />
          </button>

        </div>


        {/* Table */}

        <div className="recent-purchase-table-wrap">

          <table className="recent-purchase-table">

            <thead>
              <tr>
                <th>Plan</th>
                <th>User / Agency</th>
                <th>Status</th>
                <th>Next Billing Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {displayedSubscriptions.map((item) => (
                <tr key={item.id}>

                  {/* PLAN */}

                  <td>

                    <div className="recent-plan-info">

                      <div
                        className={`recent-plan-crown ${item.color}`}
                      >
                        <Crown size={17} />
                      </div>

                      <span>{item.plan}</span>

                    </div>

                  </td>


                  {/* CUSTOMER */}

                  <td>
                    <span className="recent-customer-name">
                      {item.customer}
                    </span>
                  </td>


                  {/* STATUS */}

                  <td>

                    <span
                      className={`recent-status-chip ${item.status.toLowerCase()}`}
                    >
                      <span className="recent-status-dot"></span>

                      {item.status}
                    </span>

                  </td>


                  {/* BILLING */}

                  <td>
                    <span className="recent-billing-date">
                      {item.billingDate}
                    </span>
                  </td>


                  {/* ACTION */}

                  <td>

                    <button
                      className="recent-row-action"
                      onClick={() => setSelectedSubscription(item)}
                    >
                      <MoreVertical size={18} />
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </section>


      {/* ==========================================
          DETAILS MODAL
      ========================================== */}

      {selectedSubscription && (

        <div className="recent-detail-overlay">

          <div className="recent-detail-modal">

            <div className="recent-detail-modal-header">

              <div>
                <h2>Subscription Details</h2>
                <p>View purchased subscription information.</p>
              </div>

              <button
                className="recent-detail-close"
                onClick={() => setSelectedSubscription(null)}
              >
                <X size={20} />
              </button>

            </div>


            <div className="recent-detail-content">

              {/* PLAN */}

              <div className="recent-detail-plan">

                <div
                  className={`recent-detail-plan-icon ${selectedSubscription.color}`}
                >
                  <Crown size={22} />
                </div>

                <div>
                  <span>Purchased Plan</span>
                  <h3>{selectedSubscription.plan}</h3>
                </div>

                <strong>
                  {selectedSubscription.price}
                </strong>

              </div>


              {/* USER */}

              <div className="recent-detail-item">

                <div className="recent-detail-item-icon">
                  <Mail size={18} />
                </div>

                <div>
                  <span>User / Agency</span>
                  <strong>
                    {selectedSubscription.customer}
                  </strong>
                  <small>
                    {selectedSubscription.email}
                  </small>
                </div>

              </div>


              {/* BILLING */}

              <div className="recent-detail-item">

                <div className="recent-detail-item-icon">
                  <CalendarDays size={18} />
                </div>

                <div>
                  <span>Next Billing Date</span>
                  <strong>
                    {selectedSubscription.billingDate}
                  </strong>
                </div>

              </div>


              {/* STATUS */}

              <div className="recent-detail-item">

                <div className="recent-detail-item-icon">
                  <CreditCard size={18} />
                </div>

                <div>
                  <span>Subscription Status</span>

                  <span
                    className={`recent-status-chip ${selectedSubscription.status.toLowerCase()}`}
                  >
                    <span className="recent-status-dot"></span>

                    {selectedSubscription.status}
                  </span>

                </div>

              </div>

            </div>


            <div className="recent-detail-footer">

              <button
                onClick={() => setSelectedSubscription(null)}
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}
    </>
  );
}

export default RecentSubscriptions;