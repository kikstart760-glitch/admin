import React, { useState } from "react";
import {
  CreditCard,
  ArrowRight,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "../RecentPayments/RecentPayments.css";

function RecentPayments() {
  const paymentData = [
    {
      id: 1,
      date: "Sep 25, 2026",
      customer: "Acme Corp",
      plan: "Standard Plan",
      amount: "₹2,499.00",
      status: "Paid",
    },
    {
      id: 2,
      date: "Sep 24, 2026",
      customer: "Travel Experts",
      plan: "Pro Plan",
      amount: "₹4,999.00",
      status: "Paid",
    },
    {
      id: 3,
      date: "Sep 23, 2026",
      customer: "World Travels",
      plan: "Standard Plan",
      amount: "₹2,499.00",
      status: "Pending",
    },
    {
      id: 4,
      date: "Sep 22, 2026",
      customer: "Solo Traveler",
      plan: "Free Plan",
      amount: "₹0.00",
      status: "Paid",
    },
    {
      id: 5,
      date: "Sep 21, 2026",
      customer: "Global Tours",
      plan: "Enterprise Plan",
      amount: "₹9,999.00",
      status: "Paid",
    },
    {
      id: 6,
      date: "Sep 20, 2026",
      customer: "Dream Holidays",
      plan: "Pro Plan",
      amount: "₹4,999.00",
      status: "Pending",
    },
    {
      id: 7,
      date: "Sep 19, 2026",
      customer: "Skyline Travels",
      plan: "Standard Plan",
      amount: "₹2,499.00",
      status: "Paid",
    },
    {
      id: 8,
      date: "Sep 18, 2026",
      customer: "Holiday Hub",
      plan: "Pro Plan",
      amount: "₹4,999.00",
      status: "Failed",
    },
    {
      id: 9,
      date: "Sep 17, 2026",
      customer: "Explore India",
      plan: "Standard Plan",
      amount: "₹2,499.00",
      status: "Paid",
    },
    {
      id: 10,
      date: "Sep 16, 2026",
      customer: "Tour Point",
      plan: "Free Plan",
      amount: "₹0.00",
      status: "Paid",
    },
    {
      id: 11,
      date: "Sep 15, 2026",
      customer: "Happy Journey",
      plan: "Pro Plan",
      amount: "₹4,999.00",
      status: "Paid",
    },
    {
      id: 12,
      date: "Sep 14, 2026",
      customer: "Trip Makers",
      plan: "Standard Plan",
      amount: "₹2,499.00",
      status: "Pending",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const itemsPerPage = 4;

  const totalPages = Math.ceil(paymentData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visiblePayments = showAll
    ? paymentData
    : paymentData.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleViewAll = () => {
    setShowAll((previous) => !previous);
    setCurrentPage(1);
  };

  const handleDownloadInvoice = (payment) => {
    console.log("Download invoice:", payment);

    // Connect your backend invoice API here.
    // Example:
    // window.open(`/api/v1/invoices/${payment.id}`, "_blank");
  };

  return (
    <section className="payment-history-panel">

      {/* =========================
          HEADER
      ========================= */}

      <div className="payment-history-top">

        <div className="payment-history-title">

          <div className="payment-history-symbol">
            <CreditCard size={20} />
          </div>

          <div>
            <h2>Recent Payments</h2>
            <p>Latest subscription payment transactions</p>
          </div>

        </div>

        <button
          className="payment-history-viewall"
          onClick={handleViewAll}
        >
          {showAll ? "Show Less" : "View All"}

          <ArrowRight
            size={15}
            className={showAll ? "payment-view-arrow-active" : ""}
          />
        </button>

      </div>


      {/* =========================
          TABLE
      ========================= */}

      <div className="payment-history-table-box">

        <table className="payment-history-table">

          <thead>
            <tr>
              <th>Date</th>
              <th>User / Agency</th>
              <th>Plan</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Invoice</th>
            </tr>
          </thead>

          <tbody>

            {visiblePayments.map((payment) => (
              <tr key={payment.id}>

                {/* DATE */}

                <td>
                  <span className="payment-date-text">
                    {payment.date}
                  </span>
                </td>


                {/* USER */}

                <td>
                  <span className="payment-customer-text">
                    {payment.customer}
                  </span>
                </td>


                {/* PLAN */}

                <td>
                  <span className="payment-plan-text">
                    {payment.plan}
                  </span>
                </td>


                {/* AMOUNT */}

                <td>
                  <strong className="payment-amount-text">
                    {payment.amount}
                  </strong>
                </td>


                {/* STATUS */}

                <td>

                  <span
                    className={`payment-state-label ${payment.status.toLowerCase()}`}
                  >
                    <span className="payment-state-dot"></span>

                    {payment.status}
                  </span>

                </td>


                {/* INVOICE */}

                <td>

                  <button
                    className="payment-invoice-download"
                    onClick={() =>
                      handleDownloadInvoice(payment)
                    }
                  >
                    <Download size={15} />

                    Download
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>


      {/* =========================
          FOOTER
      ========================= */}

      {!showAll && (
        <div className="payment-history-footer">

          <p className="payment-history-count">
            Showing{" "}
            <strong>
              {startIndex + 1}
            </strong>{" "}
            to{" "}
            <strong>
              {Math.min(endIndex, paymentData.length)}
            </strong>{" "}
            of{" "}
            <strong>{paymentData.length}</strong>{" "}
            entries
          </p>


          {/* PAGINATION */}

          <div className="payment-history-pagination">

            <button
              className="payment-page-arrow"
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={17} />
            </button>


            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (

              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`payment-page-number ${
                  currentPage === page
                    ? "payment-page-selected"
                    : ""
                }`}
              >
                {page}
              </button>

            ))}


            <button
              className="payment-page-arrow"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={17} />
            </button>

          </div>

        </div>
      )}

    </section>
  );
}

export default RecentPayments;