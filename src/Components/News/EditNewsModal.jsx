import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

const EditNewsModal = ({ isOpen, onClose, news, onUpdated }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (news) {
      setFormData({
        title: news.title,
        category: news.category,
        description: news.description
      });
    }
  }, [news]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `${API_URL}/api/news/${news._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      toast.success("News updated successfully");
      onUpdated();
      onClose();
    } catch {
      toast.error("Failed to update news");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl w-full max-w-xl p-8 shadow-2xl">
        <h2 className="text-2xl font-semibold text-[#0F2A44] mb-6">
          Edit News
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
          />

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
          />

          <textarea
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
          />

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm rounded-lg border border-gray-300 text-gray-600"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2 text-sm rounded-lg bg-[#0F2A44] text-white disabled:opacity-60"
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditNewsModal;
