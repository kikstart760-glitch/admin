import React, { useState } from "react";
import {
  BadgeCheck,
  Check,
  Settings,
  X,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";

import "../SubscriptionPlans/SubscriptionPlans.css";

function SubscriptionPlans() {
  const [showManager, setShowManager] = useState(false);

  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Free Plan",
      price: "0",
      period: "/ month",
      description: "Perfect for new travelers exploring the world.",
      features: [
        "Up to 5 bookings",
        "Basic features",
        "Email support",
      ],
      theme: "blue",
      buttonText: "View Details",
      popular: false,
    },
    {
      id: 2,
      name: "Standard Plan",
      price: "2499",
      period: "/ month",
      description: "Ideal for frequent travelers and small agencies.",
      features: [
        "Up to 25 bookings",
        "Advanced features",
        "Priority support",
      ],
      theme: "primary",
      buttonText: "View Details",
      popular: true,
    },
    {
      id: 3,
      name: "Pro Plan",
      price: "4999",
      period: "/ month",
      description: "For travel businesses and growing agencies.",
      features: [
        "Up to 100 bookings",
        "All features included",
        "24/7 support",
      ],
      theme: "purple",
      buttonText: "View Details",
      popular: false,
    },
    {
      id: 4,
      name: "Enterprise Plan",
      price: "Custom Pricing",
      period: "",
      description: "Tailored solutions for large organizations.",
      features: [
        "Unlimited bookings",
        "Full features",
        "Dedicated manager",
      ],
      theme: "green",
      buttonText: "Contact Sales",
      popular: false,
    },
  ]);

  const [editingPlan, setEditingPlan] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    features: "",
    buttonText: "View Details",
    popular: false,
  });

  // ==============================
  // OPEN EDIT
  // ==============================
  const handleEdit = (plan) => {
    setEditingPlan(plan);

    setFormData({
      name: plan.name,
      price: plan.price,
      description: plan.description,
      features: plan.features.join(", "),
      buttonText: plan.buttonText,
      popular: plan.popular,
    });
  };

  // ==============================
  // FORM CHANGE
  // ==============================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ==============================
  // SAVE EDIT
  // ==============================
  const handleSave = (e) => {
    e.preventDefault();

    setPlans((prev) =>
      prev.map((plan) =>
        plan.id === editingPlan.id
          ? {
              ...plan,
              name: formData.name,
              price: formData.price,
              description: formData.description,
              features: formData.features
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean),
              buttonText: formData.buttonText,
              popular: formData.popular,
            }
          : plan
      )
    );

    setEditingPlan(null);
  };

  // ==============================
  // DELETE
  // ==============================
  const handleDelete = (id) => {
    setPlans((prev) => prev.filter((plan) => plan.id !== id));
  };

  return (
    <>
      <section className="travel-subscription-shell">

        {/* ================= HEADER ================= */}

        <div className="travel-subscription-heading">

          <div className="travel-subscription-title-area">
            <div className="travel-subscription-title-icon">
              <BadgeCheck size={22} />
            </div>

            <div>
              <h2>Subscription Plans</h2>

              <p>
                Create and manage your subscription plans for different
                travel needs.
              </p>
            </div>
          </div>

          <button
            className="travel-subscription-manage-button"
            onClick={() => setShowManager(true)}
          >
            <Settings size={18} />
            Manage Plans
          </button>

        </div>

        {/* ================= PLAN GRID ================= */}

        <div className="travel-subscription-grid">

          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`travel-subscription-card ${plan.theme}`}
            >

              {plan.popular && (
                <span className="travel-subscription-popular">
                  Most Popular
                </span>
              )}

              {/* IMAGE */}

              <div className="travel-subscription-cover">
                <img
                  src={`https://picsum.photos/500/200?random=${plan.id}`}
                  alt={plan.name}
                />
              </div>

              {/* CONTENT */}

              <div className="travel-subscription-content">

                <h3>{plan.name}</h3>

                {plan.price === "Custom Pricing" ? (
                  <div className="travel-subscription-custom-price">
                    Custom Pricing
                  </div>
                ) : (
                  <div className="travel-subscription-price-row">

                    <span className="travel-subscription-currency">
                      ₹
                    </span>

                    <span className="travel-subscription-price">
                      {Number(plan.price).toLocaleString("en-IN")}
                    </span>

                    <span className="travel-subscription-period">
                      {plan.period}
                    </span>

                  </div>
                )}

                <p className="travel-subscription-description">
                  {plan.description}
                </p>

                <div className="travel-subscription-feature-list">

                  {plan.features.map((feature, index) => (
                    <div
                      className="travel-subscription-feature"
                      key={index}
                    >
                      <Check size={17} />
                      <span>{feature}</span>
                    </div>
                  ))}

                </div>

                <button
                  className={`travel-subscription-action ${plan.theme}`}
                >
                  {plan.buttonText}
                </button>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* =================================================
          MANAGE PLANS MODAL
      ================================================= */}

      {showManager && (
        <div className="travel-plan-manager-backdrop">

          <div className="travel-plan-manager-window">

            {/* HEADER */}

            <div className="travel-plan-manager-topbar">

              <div>
                <h2>Manage Subscription Plans</h2>
                <p>
                  Edit, update or remove your subscription plans.
                </p>
              </div>

              <button
                className="travel-plan-manager-close"
                onClick={() => {
                  setShowManager(false);
                  setEditingPlan(null);
                }}
              >
                <X size={22} />
              </button>

            </div>

            {/* PLAN LIST */}

            {!editingPlan && (
              <div className="travel-plan-manager-body">

                <div className="travel-plan-manager-toolbar">

                  <h3>Available Plans</h3>

                  <button className="travel-plan-manager-add">
                    <Plus size={17} />
                    Add Plan
                  </button>

                </div>

                <div className="travel-plan-manager-list">

                  {plans.map((plan) => (
                    <div
                      className="travel-plan-manager-item"
                      key={plan.id}
                    >

                      <div className="travel-plan-manager-plan-info">

                        <div
                          className={`travel-plan-manager-plan-icon ${plan.theme}`}
                        >
                          <BadgeCheck size={19} />
                        </div>

                        <div>
                          <h4>{plan.name}</h4>

                          <p>
                            {plan.price === "Custom Pricing"
                              ? "Custom Pricing"
                              : `₹${Number(
                                  plan.price
                                ).toLocaleString("en-IN")} / month`}
                          </p>
                        </div>

                      </div>

                      <div className="travel-plan-manager-controls">

                        {plan.popular && (
                          <span className="travel-plan-manager-popular">
                            Popular
                          </span>
                        )}

                        <button
                          className="travel-plan-manager-edit"
                          onClick={() => handleEdit(plan)}
                        >
                          <Pencil size={16} />
                          Edit
                        </button>

                        <button
                          className="travel-plan-manager-delete"
                          onClick={() => handleDelete(plan.id)}
                        >
                          <Trash2 size={16} />
                        </button>

                      </div>

                    </div>
                  ))}

                </div>
              </div>
            )}

            {/* =================================================
                EDIT FORM
            ================================================= */}

            {editingPlan && (
              <form
                className="travel-plan-editor"
                onSubmit={handleSave}
              >

                <div className="travel-plan-editor-heading">
                  <h3>Edit Plan</h3>
                  <p>Update your subscription plan information.</p>
                </div>

                <div className="travel-plan-editor-grid">

                  <div className="travel-plan-editor-field">
                    <label>Plan Name</label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="travel-plan-editor-field">
                    <label>Monthly Price (₹)</label>

                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      required
                    />
                  </div>

                </div>

                <div className="travel-plan-editor-field">
                  <label>Description</label>

                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                  />
                </div>

                <div className="travel-plan-editor-field">
                  <label>Features</label>

                  <textarea
                    name="features"
                    value={formData.features}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Separate features using commas"
                  />

                  <small>
                    Separate each feature using a comma.
                  </small>
                </div>

                <div className="travel-plan-editor-field">
                  <label>Button Text</label>

                  <input
                    type="text"
                    name="buttonText"
                    value={formData.buttonText}
                    onChange={handleChange}
                  />
                </div>

                <label className="travel-plan-editor-checkbox">

                  <input
                    type="checkbox"
                    name="popular"
                    checked={formData.popular}
                    onChange={handleChange}
                  />

                  <span>Mark as Most Popular</span>

                </label>

                <div className="travel-plan-editor-actions">

                  <button
                    type="button"
                    className="travel-plan-editor-cancel"
                    onClick={() => setEditingPlan(null)}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="travel-plan-editor-save"
                  >
                    Save Changes
                  </button>

                </div>

              </form>
            )}

          </div>
        </div>
      )}
    </>
  );
}

export default SubscriptionPlans;