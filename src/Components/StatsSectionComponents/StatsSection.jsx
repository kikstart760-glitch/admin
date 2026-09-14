import React from "react";
import {
  Plus,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

import "../StatsSectionComponents/StatsSection.css";

function StatsSection({
  title = "User Control",
  breadcrumb = ["Dashboard", "User Control"],
  buttonText = "Add New User",
  onButtonClick,
  stats = [],
}) {
  return (
    <div className="stats-section">

      {/* Header */}
      <div className="section-header">

        <div className="section-title-area">
          <h1>{title}</h1>

          <div className="breadcrumb">
            {breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                <span>{item}</span>

                {index < breadcrumb.length - 1 && (
                  <span className="breadcrumb-arrow">›</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Action Button */}
        {buttonText && (
          <div className="section-actions">
            <button
              className="primary-action-btn"
              onClick={onButtonClick}
            >
              <Plus size={19} strokeWidth={2} />
              <span>{buttonText}</span>
            </button>
          </div>
        )}

      </div>

      {/* Statistics */}
      <div className="stats-grid">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="stat-card" key={index}>

              <div className={`stat-icon ${item.iconClass || "blue"}`}>
                <Icon size={28} strokeWidth={1.8} />
              </div>

              <div className="stat-content">

                <div className="stat-title">
                  {item.title}
                </div>

                <div className="stat-value">
                  {item.value}
                </div>

                {item.change && (
                  <div
                    className={`stat-change ${
                      item.type === "up"
                        ? "positive"
                        : "negative"
                    }`}
                  >

                    {item.type === "up" ? (
                      <ArrowUp
                        size={14}
                        strokeWidth={2.5}
                      />
                    ) : (
                      <ArrowDown
                        size={14}
                        strokeWidth={2.5}
                      />
                    )}

                    <span>{item.change}</span>

                    {item.text && (
                      <span className="change-text">
                        {item.text}
                      </span>
                    )}

                  </div>
                )}

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default StatsSection;