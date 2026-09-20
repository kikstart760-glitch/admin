import React, { useState } from "react";
import {
  FileText,
  Image,
  Gem,
  MapPin,
  BriefcaseBusiness,
  Star,
  Mail,
  Plus,
  Pencil,
  MoreVertical,
  GripVertical,
  Copy,
  EyeOff,
  Trash2,
  X,
  Square
} from "lucide-react";

import "../SectionStructureComponent/SectionStructure.css";

const initialSections = [
  {
    id: 1,
    title: "Hero Section",
    description: "Main banner with search form",
    icon: Image,
    visible: true
  },
  {
    id: 2,
    title: "Features Section",
    description: "Why choose us",
    icon: Gem,
    visible: true
  },
  {
    id: 3,
    title: "Popular Destinations",
    description: "Top travel destinations",
    icon: MapPin,
    visible: true
  },
  {
    id: 4,
    title: "Top Packages",
    description: "Featured travel packages",
    icon: BriefcaseBusiness,
    visible: true
  },
  {
    id: 5,
    title: "Testimonials",
    description: "Customer reviews and feedback",
    icon: Star,
    visible: true
  },
  {
    id: 6,
    title: "Newsletter",
    description: "Newsletter subscription",
    icon: Mail,
    visible: true
  }
];

const SectionStructure = () => {
  const [sections, setSections] = useState(initialSections);

  const [draggedId, setDraggedId] = useState(null);

  const [openMenu, setOpenMenu] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [modalType, setModalType] = useState("add");

  const [editingSection, setEditingSection] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  // =========================
  // OPEN ADD MODAL
  // =========================

  const handleAddSection = () => {
    setModalType("add");

    setFormData({
      title: "",
      description: ""
    });

    setEditingSection(null);

    setShowModal(true);
  };

  // =========================
  // OPEN EDIT MODAL
  // =========================

  const handleEdit = (section) => {
    setModalType("edit");

    setEditingSection(section);

    setFormData({
      title: section.title,
      description: section.description
    });

    setShowModal(true);

    setOpenMenu(null);
  };

  // =========================
  // SAVE SECTION
  // =========================

  const handleSave = () => {
    if (!formData.title.trim()) {
      return;
    }

    if (modalType === "add") {
      const newSection = {
        id: Date.now(),
        title: formData.title,
        description:
          formData.description || "New website section",
        icon: Square,
        visible: true
      };

      setSections((prev) => [...prev, newSection]);
    } else {
      setSections((prev) =>
        prev.map((section) =>
          section.id === editingSection.id
            ? {
                ...section,
                title: formData.title,
                description: formData.description
              }
            : section
        )
      );
    }

    setShowModal(false);
  };

  // =========================
  // VISIBILITY
  // =========================

  const toggleVisibility = (id) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === id
          ? {
              ...section,
              visible: !section.visible
            }
          : section
      )
    );
  };

  // =========================
  // DELETE
  // =========================

  const handleDelete = (id) => {
    setSections((prev) =>
      prev.filter((section) => section.id !== id)
    );

    setOpenMenu(null);
  };

  // =========================
  // DUPLICATE
  // =========================

  const handleDuplicate = (section) => {
    const newSection = {
      ...section,
      id: Date.now(),
      title: `${section.title} Copy`
    };

    setSections((prev) => [...prev, newSection]);

    setOpenMenu(null);
  };

  // =========================
  // DRAG START
  // =========================

  const handleDragStart = (id) => {
    setDraggedId(id);
  };

  // =========================
  // DRAG OVER
  // =========================

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // =========================
  // DROP
  // =========================

  const handleDrop = (targetId) => {
    if (!draggedId || draggedId === targetId) {
      return;
    }

    const currentSections = [...sections];

    const draggedIndex = currentSections.findIndex(
      (section) => section.id === draggedId
    );

    const targetIndex = currentSections.findIndex(
      (section) => section.id === targetId
    );

    const draggedSection = currentSections[draggedIndex];

    currentSections.splice(draggedIndex, 1);

    currentSections.splice(
      targetIndex,
      0,
      draggedSection
    );

    setSections(currentSections);

    setDraggedId(null);
  };

  return (
    <div className="section-page">

      {/* =========================
          HEADER
      ========================= */}

      <div className="section-header">

        <div className="section-header-left">

          <div className="section-header-icon">
            <FileText size={29} strokeWidth={2.2} />
          </div>

          <div>
            <h1>Section Structure</h1>

            <p>
              Drag and drop to reorder sections on the home page
            </p>
          </div>

        </div>

        <button
          className="add-section-btn"
          onClick={handleAddSection}
        >
          <Plus size={21} />

          <span>
            Add New Section
          </span>
        </button>

      </div>


      {/* =========================
          SECTION LIST
      ========================= */}

      <div className="sections-list">

        {sections.map((section, index) => {

          const Icon = section.icon;

          return (
            <div
              key={section.id}
              className={`section-card ${
                index === 0 ? "first-card" : ""
              } ${
                draggedId === section.id
                  ? "dragging"
                  : ""
              }`}
              draggable
              onDragStart={() =>
                handleDragStart(section.id)
              }
              onDragOver={handleDragOver}
              onDrop={() =>
                handleDrop(section.id)
              }
            >

              {/* DRAG HANDLE */}

              <div className="drag-handle">
                <GripVertical
                  size={22}
                  strokeWidth={2.2}
                />
              </div>


              {/* ICON */}

              <div className="section-icon">
                <Icon
                  size={25}
                  strokeWidth={2}
                />
              </div>


              {/* CONTENT */}

              <div className="section-info">

                <h3>
                  {section.title}
                </h3>

                <p>
                  {section.description}
                </p>

              </div>


              {/* STATUS */}

              <div className="section-status">

                <button
                  className={`status-btn ${
                    !section.visible
                      ? "hidden"
                      : ""
                  }`}
                  onClick={() =>
                    toggleVisibility(section.id)
                  }
                >
                  {section.visible
                    ? "Visible"
                    : "Hidden"}
                </button>

              </div>


              {/* ACTIONS */}

              <div className="section-actions">

                <button
                  className="edit-btn"
                  onClick={() =>
                    handleEdit(section)
                  }
                >
                  <Pencil size={17} />

                  <span>
                    Edit
                  </span>
                </button>


                {/* MORE MENU */}

                <div className="more-wrapper">

                  <button
                    className="more-btn"
                    onClick={(e) => {
                      e.stopPropagation();

                      setOpenMenu(
                        openMenu === section.id
                          ? null
                          : section.id
                      );
                    }}
                  >
                    <MoreVertical size={21} />
                  </button>


                  {openMenu === section.id && (

                    <div className="action-menu">

                      <button
                        onClick={() =>
                          handleDuplicate(section)
                        }
                      >
                        <Copy size={15} />

                        Duplicate
                      </button>


                      <button
                        onClick={() => {
                          toggleVisibility(
                            section.id
                          );

                          setOpenMenu(null);
                        }}
                      >
                        <EyeOff size={15} />

                        {section.visible
                          ? "Hide Section"
                          : "Show Section"}
                      </button>


                      <button
                        className="delete-option"
                        onClick={() =>
                          handleDelete(section.id)
                        }
                      >
                        <Trash2 size={15} />

                        Delete
                      </button>

                    </div>

                  )}

                </div>

              </div>

            </div>
          );
        })}

      </div>


      {/* =========================
          MODAL
      ========================= */}

      {showModal && (

        <div
          className="modal-overlay"
          onClick={() =>
            setShowModal(false)
          }
        >

          <div
            className="section-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* MODAL HEADER */}

            <div className="modal-header">

              <h2>
                {modalType === "add"
                  ? "Add New Section"
                  : "Edit Section"}
              </h2>

              <button
                className="modal-close"
                onClick={() =>
                  setShowModal(false)
                }
              >
                <X size={19} />
              </button>

            </div>


            {/* MODAL BODY */}

            <div className="modal-body">

              <div className="form-group">

                <label>
                  Section Name
                </label>

                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value
                    })
                  }
                  placeholder="Enter section name"
                />

              </div>


              <div className="form-group">

                <label>
                  Description
                </label>

                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description:
                        e.target.value
                    })
                  }
                  placeholder="Enter section description"
                />

              </div>

            </div>


            {/* MODAL FOOTER */}

            <div className="modal-footer">

              <button
                className="cancel-btn"
                onClick={() =>
                  setShowModal(false)
                }
              >
                Cancel
              </button>

              <button
                className="save-btn"
                onClick={handleSave}
              >
                {modalType === "add"
                  ? "Add Section"
                  : "Save Changes"}
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default SectionStructure;