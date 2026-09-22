import React, { useState } from "react";

import EditContentModal from "../EditContentModal/EditContentModal";

import {
  X,
  ChevronDown,
  ChevronRight,
  Pencil,
  Trash2,
  Check,
  Plus,
  Image,
  MapPin,
  Package,
  Star,
  FileText,
} from "lucide-react";

import "../EditPageModal/EditPageModal.css";


// ======================================================
// INITIAL SECTION DATA
// Later this data will come from your backend / MongoDB
// ======================================================

const initialSections = [
  {
    id: 1,
    name: "Hero Section",
    description: "Manage homepage hero banners",
    icon: Image,

    currentItem: {
      id: 101,
      title: "Explore The World",
      description: "Discover amazing destinations with us",
      buttonText: "Explore Now",
      buttonLink: "/destinations",

      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    },

    items: [
      {
        id: 102,
        title: "Summer Adventure",
        description: "Plan your perfect summer vacation",
        buttonText: "View Packages",
        buttonLink: "/packages",

        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
      },

      {
        id: 103,
        title: "Discover Europe",
        description: "Explore beautiful European destinations",
        buttonText: "Explore Europe",
        buttonLink: "/destinations/europe",

        image:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },

  {
    id: 2,
    name: "Popular Destinations",
    description: "Manage featured destinations",
    icon: MapPin,

    currentItem: {
      id: 201,
      title: "Maldives",
      description: "Popular tropical destination",

      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80",
    },

    items: [
      {
        id: 202,
        title: "Bali",
        description: "Beautiful Indonesian destination",

        image:
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
      },

      {
        id: 203,
        title: "Switzerland",
        description: "Mountains, lakes and beautiful landscapes",

        image:
          "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },

  {
    id: 3,
    name: "Travel Packages",
    description: "Manage featured travel packages",
    icon: Package,

    currentItem: {
      id: 301,
      title: "Maldives Holiday",
      description: "5 Days / 4 Nights",

      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    },

    items: [
      {
        id: 302,
        title: "Dubai Package",
        description: "6 Days / 5 Nights",

        image:
          "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
      },

      {
        id: 303,
        title: "Thailand Package",
        description: "7 Days / 6 Nights",

        image:
          "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },

  {
    id: 4,
    name: "Testimonials",
    description: "Manage customer testimonials",
    icon: Star,

    currentItem: {
      id: 401,
      title: "Rahul Sharma",
      description: "Amazing travel experience!",

      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },

    items: [
      {
        id: 402,
        title: "Priya Das",
        description: "Very professional and helpful team.",

        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
      },

      {
        id: 403,
        title: "Amit Roy",
        description: "Everything was perfectly organized.",

        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },

  {
    id: 5,
    name: "Blog Section",
    description: "Manage homepage blog content",
    icon: FileText,

    currentItem: null,

    items: [
      {
        id: 501,
        title: "Top 10 Places To Visit",
        description: "Travel guide for your next vacation",

        image:
          "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80",
      },

      {
        id: 502,
        title: "Best Summer Destinations",
        description: "Explore the best places for summer",

        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
];


function EditPageModal({ isOpen, page, onClose }) {
  // ======================================================
  // ALL HOOKS MUST BE INSIDE THE COMPONENT
  // ======================================================

  const [sections, setSections] = useState(initialSections);

  const [openAccordion, setOpenAccordion] = useState(null);

  // Edit Content Modal

  const [editContentOpen, setEditContentOpen] =
    useState(false);

  const [editingSection, setEditingSection] =
    useState(null);

  const [editingItem, setEditingItem] =
    useState(null);


  // ======================================================
  // CLOSE WHEN PAGE DOESN'T EXIST
  // ======================================================

  if (!isOpen || !page) {
    return null;
  }


  // ======================================================
  // ACCORDION
  // ======================================================

  const toggleAccordion = (sectionId) => {
    setOpenAccordion((current) =>
      current === sectionId
        ? null
        : sectionId
    );
  };


  // ======================================================
  // OPEN EDIT CONTENT MODAL
  // ======================================================

  const handleEdit = (section, item) => {
    setEditingSection(section);

    setEditingItem(item);

    setEditContentOpen(true);
  };


  // ======================================================
  // CLOSE EDIT CONTENT MODAL
  // ======================================================

  const closeEditContentModal = () => {
    setEditContentOpen(false);

    setEditingSection(null);

    setEditingItem(null);
  };


  // ======================================================
  // SAVE EDITED CONTENT
  // ======================================================

  const handleSaveContent = (
    sectionId,
    itemId,
    updatedData
  ) => {
    setSections((previousSections) =>
      previousSections.map((section) => {
        // Wrong section

        if (section.id !== sectionId) {
          return section;
        }


        // Update current item

        if (
          section.currentItem &&
          section.currentItem.id === itemId
        ) {
          return {
            ...section,

            currentItem: {
              ...section.currentItem,

              ...updatedData,
            },
          };
        }


        return section;
      })
    );


    closeEditContentModal();
  };


  // ======================================================
  // SET AVAILABLE ITEM AS CURRENT
  // ======================================================

  const handleSetItem = (sectionId, selectedItem) => {
    setSections((previousSections) =>
      previousSections.map((section) => {
        if (section.id !== sectionId) {
          return section;
        }


        // Save old current item

        const previousCurrent =
          section.currentItem;


        // Remove selected item from available list

        let updatedItems =
          section.items.filter(
            (item) =>
              item.id !== selectedItem.id
          );


        // Put old current item back into list

        if (previousCurrent) {
          updatedItems = [
            previousCurrent,

            ...updatedItems,
          ];
        }


        return {
          ...section,

          currentItem: selectedItem,

          items: updatedItems,
        };
      })
    );
  };


  // ======================================================
  // DELETE AVAILABLE ITEM
  // ======================================================

  const handleDelete = (
    sectionId,
    itemId
  ) => {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this item?"
      );


    if (!confirmDelete) {
      return;
    }


    setSections((previousSections) =>
      previousSections.map((section) => {
        if (section.id !== sectionId) {
          return section;
        }


        return {
          ...section,

          items:
            section.items.filter(
              (item) =>
                item.id !== itemId
            ),
        };
      })
    );
  };


  // ======================================================
  // ADD NEW
  // ======================================================

  const handleAddNew = (section) => {
    console.log(
      "Add new item to:",
      section.name
    );

    // We will connect AddContentModal here later.
  };


  // ======================================================
  // JSX
  // ======================================================

  return (
    <>
      {/* ================================================
          PAGE EDIT MODAL
      ================================================= */}

      <div
        className="edit-page-overlay"
        onClick={onClose}
      >
        <div
          className="edit-page-modal"
          onClick={(event) =>
            event.stopPropagation()
          }
        >

          {/* =========================
              HEADER
          ========================= */}

          <div className="edit-page-header">

            <div>

              <h2>
                Edit {page.title}
              </h2>

              <p>
                Manage page sections and select
                which content appears on the website.
              </p>

            </div>


            <button
              type="button"
              className="edit-page-close"
              onClick={onClose}
            >
              <X size={20} />
            </button>

          </div>


          {/* =========================
              PAGE INFORMATION
          ========================= */}

          <div className="selected-page-info">

            <img
              src={page.image}
              alt={page.title}
            />


            <div className="selected-page-text">

              <h4>
                {page.title}
              </h4>

              <span>
                {page.slug}
              </span>

            </div>


            <div
              className={`page-status ${
                page.status
                  ? "active"
                  : ""
              }`}
            >

              {page.status
                ? "Published"
                : "Draft"}

            </div>

          </div>


          {/* =========================
              ACCORDIONS
          ========================= */}

          <div className="section-accordion-list">

            {sections.map((section) => {

              const Icon =
                section.icon;

              const accordionOpen =
                openAccordion ===
                section.id;


              return (

                <div
                  className={`section-accordion ${
                    accordionOpen
                      ? "expanded"
                      : ""
                  }`}
                  key={section.id}
                >

                  {/* =====================
                      ACCORDION HEADER
                  ===================== */}

                  <button
                    type="button"
                    className="section-accordion-header"
                    onClick={() =>
                      toggleAccordion(
                        section.id
                      )
                    }
                  >

                    <div className="section-left">

                      <div className="section-icon">

                        <Icon size={19} />

                      </div>


                      <div className="section-info">

                        <h4>
                          {section.name}
                        </h4>

                        <p>
                          {
                            section.description
                          }
                        </p>

                      </div>

                    </div>


                    <div className="accordion-arrow">

                      {accordionOpen ? (
                        <ChevronDown
                          size={20}
                        />
                      ) : (
                        <ChevronRight
                          size={20}
                        />
                      )}

                    </div>

                  </button>


                  {/* =====================
                      ACCORDION BODY
                  ===================== */}

                  {accordionOpen && (

                    <div className="accordion-body">

                      {/* ===================
                          CURRENT ITEM TITLE
                      =================== */}

                      <div className="content-section-title">

                        <div>

                          <h5>
                            Currently Set
                          </h5>

                          <p>
                            This item is currently
                            displayed on the website.
                          </p>

                        </div>


                        {section.currentItem && (

                          <span className="current-badge">
                            Active
                          </span>

                        )}

                      </div>


                      {/* ===================
                          CURRENT ITEM
                      =================== */}

                      {section.currentItem ? (

                        <div className="current-content-card">

                          <img
                            src={
                              section
                                .currentItem
                                .image
                            }
                            alt={
                              section
                                .currentItem
                                .title
                            }
                          />


                          <div className="content-details">

                            <h4>
                              {
                                section
                                  .currentItem
                                  .title
                              }
                            </h4>

                            <p>
                              {
                                section
                                  .currentItem
                                  .description
                              }
                            </p>

                          </div>


                          {/* EDIT CURRENT ITEM */}

                          <button
                            type="button"
                            className="content-edit-btn"
                            onClick={() =>
                              handleEdit(
                                section,
                                section.currentItem
                              )
                            }
                          >

                            <Pencil size={15} />

                            Edit

                          </button>

                        </div>

                      ) : (

                        <div className="no-current-item">

                          No item is currently set.

                        </div>

                      )}


                      {/* ===================
                          AVAILABLE HEADER
                      =================== */}

                      <div className="available-header">

                        <div>

                          <h5>
                            Available Items
                          </h5>

                          <p>
                            Items that are not
                            currently displayed.
                          </p>

                        </div>


                        <button
                          type="button"
                          className="add-content-btn"
                          onClick={() =>
                            handleAddNew(
                              section
                            )
                          }
                        >

                          <Plus size={15} />

                          Add New

                        </button>

                      </div>


                      {/* ===================
                          AVAILABLE LIST
                      =================== */}

                      <div className="available-list">

                        {section.items.length >
                        0 ? (

                          section.items.map(
                            (item) => (

                              <div
                                className="available-item"
                                key={item.id}
                              >

                                <img
                                  src={
                                    item.image
                                  }
                                  alt={
                                    item.title
                                  }
                                />


                                <div className="content-details">

                                  <h4>
                                    {
                                      item.title
                                    }
                                  </h4>

                                  <p>
                                    {
                                      item.description
                                    }
                                  </p>

                                </div>


                                <div className="available-actions">

                                  {/* SET */}

                                  <button
                                    type="button"
                                    className="set-item-btn"
                                    onClick={() =>
                                      handleSetItem(
                                        section.id,
                                        item
                                      )
                                    }
                                  >

                                    <Check
                                      size={15}
                                    />

                                    Set

                                  </button>


                                  {/* DELETE */}

                                  <button
                                    type="button"
                                    className="delete-item-btn"
                                    title="Delete"
                                    onClick={() =>
                                      handleDelete(
                                        section.id,
                                        item.id
                                      )
                                    }
                                  >

                                    <Trash2
                                      size={16}
                                    />

                                  </button>

                                </div>

                              </div>

                            )
                          )

                        ) : (

                          <div className="empty-list">

                            No other items
                            available.

                          </div>

                        )}

                      </div>

                    </div>

                  )}

                </div>

              );

            })}

          </div>

        </div>
      </div>


      {/* ================================================
          EDIT CURRENT CONTENT MODAL
      ================================================= */}

      <EditContentModal
        isOpen={editContentOpen}
        section={editingSection}
        item={editingItem}
        onClose={
          closeEditContentModal
        }
        onSave={
          handleSaveContent
        }
      />

    </>
  );
}

export default EditPageModal;