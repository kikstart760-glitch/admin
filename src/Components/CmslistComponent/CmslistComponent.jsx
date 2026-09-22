import React, { useState } from "react";
import {
  Pencil,
  Eye,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "../CmslistComponent/CmslistComponent.css";

import EditPageModal from "../ModalComponents/EditPageModal/EditPageModal";

function CmslistComponent() {
  // =========================
  // CMS DATA
  // =========================

  const [pages, setPages] = useState([
    {
      id: 1,
      title: "Home Page",
      description: "Main landing page of the website",
      type: "Page",
      slug: "/home",
      status: true,
      date: "May 12, 2024",
      author: "John Admin",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=120&q=80",
    },

    {
      id: 2,
      title: "About Page",
      description: "Learn more about our company",
      type: "Page",
      slug: "/about",
      status: true,
      date: "May 10, 2024",
      author: "Sarah Khan",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=120&q=80",
    },

    {
      id: 3,
      title: "Book Consultation Page",
      description: "Explore popular travel destinations",
      type: "Page",
      slug: "/destinations",
      status: true,
      date: "May 8, 2024",
      author: "Alex Carter",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=120&q=80",
    },

    {
      id: 4,
      title: "Destination page",
      description: "Our best travel packages",
      type: "Page",
      slug: "/packages",
      status: true,
      date: "May 6, 2024",
      author: "Emily Davis",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=120&q=80",
    },

    {
      id: 5,
      title: "Company Info",
      description: "Latest travel tips and guides",
      type: "Blog",
      slug: "/blog",
      status: true,
      date: "May 4, 2024",
      author: "Michael Brown",
      image:
        "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=120&q=80",
    },

    {
      id: 6,
      title: "Blog",
      description: "Get in touch with us",
      type: "Page",
      slug: "/contact",
      status: true,
      date: "May 2, 2024",
      author: "Lisa White",
      image:
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=120&q=80",
    },

    {
      id: 7,
      title: "Terms & Conditions",
      description: "Terms and conditions of use",
      type: "Page",
      slug: "/terms",
      status: false,
      date: "Apr 28, 2024",
      author: "David Wilson",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=120&q=80",
    },

    {
      id: 8,
      title: "Privacy Policy",
      description: "How we protect your data",
      type: "Page",
      slug: "/privacy",
      status: true,
      date: "Apr 25, 2024",
      author: "Emma Taylor",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=120&q=80",
    },
  ]);

  // =========================
  // SELECTED ROWS
  // =========================

  const [selected, setSelected] = useState([]);

  // =========================
  // TOGGLE STATUS
  // =========================

  const toggleStatus = (id) => {
    setPages((prevPages) =>
      prevPages.map((page) =>
        page.id === id
          ? {
              ...page,
              status: !page.status,
            }
          : page
      )
    );
  };

  // =========================
  // SELECT SINGLE ROW
  // =========================

  const toggleSelect = (id) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  // =========================
  // SELECT ALL
  // =========================

  const toggleAll = () => {
    if (selected.length === pages.length) {
      setSelected([]);
    } else {
      setSelected(pages.map((page) => page.id));
    }
  };

  // =========================
  // ACTIONS
  // =========================

  const handleView = (page) => {
    console.log("View Page:", page);
  };

  const handleMore = (page) => {
    console.log("More Actions:", page);
  };

  // =========================
  // COMPONENT
  // =========================

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const handleEdit = (page) => {
    setSelectedPage(page);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setSelectedPage(null);
  };

  const handleSectionEdit = (page, section) => {
    console.log("EDIT SECTION");
    console.log("Page:", page.title);
    console.log("Section:", section.name);

    // Later:
    // navigate(`/admin/cms/${page.id}/${section.id}/edit`);
  };

  const handleSectionList = (page, section) => {
    console.log("LIST SECTION");
    console.log("Page:", page.title);
    console.log("Section:", section.name);

    // Later:
    // navigate(`/admin/cms/${page.id}/${section.id}`);
  };

  return (
    <div className="cms-container">
      <EditPageModal 
        isOpen={editModalOpen}
        page={selectedPage}
        onClose={closeEditModal}
        onEdit={handleSectionEdit}
        onList={handleSectionList}
      />

      <div className="cms-table-wrapper">

        {/* =========================
            TABLE
        ========================= */}

        <table className="cms-table">

          {/* TABLE HEADER */}

          <thead>
            <tr>

              {/* SELECT ALL */}

              <th className="checkbox-column">
                <input
                  type="checkbox"
                  checked={
                    selected.length === pages.length &&
                    pages.length > 0
                  }
                  onChange={toggleAll}
                />
              </th>

              {/* NUMBER */}

              <th className="number-column">
                #
              </th>

              {/* TITLE */}

              <th className="title-column">
                Title
              </th>

              {/* TYPE */}

              <th className="type-column">
                Type
              </th>

              {/* SLUG */}

              <th className="slug-column">
                Slug
              </th>

              {/* STATUS */}

              <th className="status-column">
                Status
              </th>

              {/* UPDATED */}

              <th className="updated-column">
                Last Updated
              </th>

              {/* ACTIONS */}

              <th className="actions-column">
                Actions
              </th>

            </tr>
          </thead>

          {/* TABLE BODY */}

          <tbody>

            {pages.map((page) => (
              <tr key={page.id}>

                {/* CHECKBOX */}

                <td>
                  <input
                    type="checkbox"
                    checked={selected.includes(page.id)}
                    onChange={() => toggleSelect(page.id)}
                  />
                </td>

                {/* NUMBER */}

                <td className="number-cell">
                  {page.id}
                </td>

                {/* TITLE */}

                <td>

                  <div className="title-wrapper">

                    <img
                      src={page.image}
                      alt={page.title}
                      className="cms-image"
                    />

                    <div className="title-content">

                      <div className="cms-title">
                        {page.title}
                      </div>

                      <div className="cms-description">
                        {page.description}
                      </div>

                    </div>

                  </div>

                </td>

                {/* TYPE */}

                <td>

                  <span
                    className={`type-badge ${
                      page.type.toLowerCase()
                    }`}
                  >
                    {page.type}
                  </span>

                </td>

                {/* SLUG */}

                <td>

                  <span className="slug">
                    {page.slug}
                  </span>

                </td>

                {/* STATUS */}

                <td>

                  <div className="status-wrapper">

                    <button
                      type="button"
                      className={`status-switch ${
                        page.status ? "active" : ""
                      }`}
                      onClick={() =>
                        toggleStatus(page.id)
                      }
                    >
                      <span></span>
                    </button>

                    <span
                      className={
                        page.status
                          ? "published"
                          : "draft"
                      }
                    >
                      {page.status
                        ? "Published"
                        : "Draft"}
                    </span>

                  </div>

                </td>

                {/* LAST UPDATED */}

                <td>

                  <div className="updated-date">
                    {page.date}
                  </div>

                  <div className="updated-author">
                    by {page.author}
                  </div>

                </td>

                {/* ACTIONS */}

                <td>

                  <div className="actions">

                    {/* EDIT */}

                    <button
                      type="button"
                      className="action-btn"
                      onClick={() =>
                        handleEdit(page)
                      }
                      title="Edit"
                    >
                      <Pencil size={18} />
                    </button>

                    {/* VIEW */}

                    <button
                      type="button"
                      className="action-btn"
                      onClick={() =>
                        handleView(page)
                      }
                      title="View"
                    >
                      <Eye size={19} />
                    </button>

                    {/* MORE */}

                    <button
                      type="button"
                      className="action-btn"
                      onClick={() =>
                        handleMore(page)
                      }
                      title="More"
                    >
                      <MoreVertical size={19} />
                    </button>

                  </div>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

        {/* =========================
            FOOTER
        ========================= */}

        <div className="cms-footer">

          {/* ENTRY TEXT */}

          <div className="entries">

            Showing 1 to {pages.length} of{" "}
            {pages.length} entries

          </div>

          {/* PAGINATION */}

          <div className="pagination">

            {/* PREVIOUS */}

            <button
              type="button"
              className="page-btn"
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>

            {/* CURRENT PAGE */}

            <button
              type="button"
              className="page-number active"
            >
              1
            </button>

            {/* NEXT */}

            <button
              type="button"
              className="page-btn"
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CmslistComponent;