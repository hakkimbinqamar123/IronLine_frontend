import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddNewsModal = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
  });

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in to add news.");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("category", formData.category);
      data.append("description", formData.description);

      images.forEach((file) => {
        data.append("images", file); // backend expects "images"
      });

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/news`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // ❌ do NOT set Content-Type manually
          },
        }
      );

      toast.success("News published successfully");

      // Reset form
      setFormData({
        title: "",
        category: "",
        description: "",
      });
      setImages([]);

      onSuccess?.();
      onClose();
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
        "Failed to publish news. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-xl p-8 shadow-2xl">
        <h2 className="text-2xl font-semibold text-[#0F2A44] mb-6">
          Add News
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
          />

          {/* Category */}
          <input
            type="text"
            name="category"
            placeholder="Category (e.g. Operations, Energy)"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
          />

          {/* Description */}
          <textarea
            rows="4"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
          />

          {/* Images */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Images
            </label>

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0
                         file:text-sm file:font-medium
                         file:bg-gray-100 file:text-gray-700
                         hover:file:bg-gray-200"
            />

            {images.length > 0 && (
              <p className="text-xs text-gray-500 mt-1">
                {images.length} image(s) selected
              </p>
            )}

            {images.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-3">
                {images.map((file, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="h-20 w-20 object-cover rounded-lg border"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2 text-sm rounded-lg bg-[#0F2A44] text-white
                         hover:bg-[#173E73] disabled:opacity-60"
            >
              {loading ? "Publishing..." : "Publish"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewsModal;
