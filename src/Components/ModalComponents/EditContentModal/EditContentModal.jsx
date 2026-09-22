import React, { useEffect, useState } from "react";
import {
  X,
  Upload,
  Save,
  Image as ImageIcon,
} from "lucide-react";

import "../EditContentModal/EditContentModal.css";

function EditContentModal({
  isOpen,
  section,
  item,
  onClose,
  onSave,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    buttonText: "",
    buttonLink: "",
    image: "",
  });

  // Load current item data
  useEffect(() => {
    if (item) {
      setFormData({
        title: item.title || "",
        description: item.description || "",
        buttonText: item.buttonText || "",
        buttonLink: item.buttonLink || "",
        image: item.image || "",
      });
    }
  }, [item]);

  if (!isOpen || !item || !section) {
    return null;
  }

  // ============================
  // INPUT CHANGE
  // ============================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ============================
  // IMAGE CHANGE
  // ============================

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const previewURL = URL.createObjectURL(file);

    setFormData((prev) => ({
      ...prev,
      image: previewURL,
      imageFile: file,
    }));
  };

  // ============================
  // SAVE
  // ============================

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(section.id, item.id, formData);
  };

  return (
    <div
      className="content-edit-overlay"
      onClick={onClose}
    >
      <div
        className="content-edit-modal"
        onClick={(e) => e.stopPropagation()}
      >

        {/* HEADER */}

        <div className="content-edit-header">
          <div>
            <h2>Edit {section.name}</h2>

            <p>
              Update the currently active content.
            </p>
          </div>

          <button
            type="button"
            className="content-modal-close"
            onClick={onClose}
          >
            <X size={19} />
          </button>
        </div>

        {/* FORM */}

        <form onSubmit={handleSubmit}>

          <div className="content-edit-body">

            {/* TITLE */}

            <div className="content-form-group">
              <label>Title</label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter title"
              />
            </div>

            {/* DESCRIPTION */}

            <div className="content-form-group">
              <label>Subtitle / Description</label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter description"
                rows="4"
              />
            </div>

            {/* BUTTON */}

            <div className="content-form-row">

              <div className="content-form-group">
                <label>Button Text</label>

                <input
                  type="text"
                  name="buttonText"
                  value={formData.buttonText}
                  onChange={handleChange}
                  placeholder="Example: Explore Now"
                />
              </div>

              <div className="content-form-group">
                <label>Button Link</label>

                <input
                  type="text"
                  name="buttonLink"
                  value={formData.buttonLink}
                  onChange={handleChange}
                  placeholder="/destinations"
                />
              </div>

            </div>

            {/* IMAGE */}

            <div className="content-form-group">

              <label>Background Image</label>

              <div className="content-image-upload">

                {formData.image ? (
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="content-image-preview"
                  />
                ) : (
                  <div className="content-no-image">
                    <ImageIcon size={30} />

                    <span>No image selected</span>
                  </div>
                )}

                <label className="content-upload-btn">

                  <Upload size={16} />

                  Change Image

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    hidden
                  />

                </label>

              </div>

            </div>

          </div>

          {/* FOOTER */}

          <div className="content-edit-footer">

            <button
              type="button"
              className="content-cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="content-save-btn"
            >
              <Save size={16} />

              Save Changes
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default EditContentModal;