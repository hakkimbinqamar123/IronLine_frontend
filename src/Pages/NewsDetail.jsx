import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import { toast } from "react-toastify";
import EditNewsModal from "../Components/News/EditNewsModal";

const API_URL = import.meta.env.VITE_API_URL;

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [news, setNews] = useState(null);

  const isAuthenticated = !!localStorage.getItem("token");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/news/${id}`);
        setNews(res.data);
      } catch (error) {
        toast.error("Failed to load news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  const handleLike = async () => {
    if (!isAuthenticated) {
      toast.info("Please login to like this article");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${API_URL}/api/news/${id}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setNews((prev) => ({
        ...prev,
        likes: res.data.likes
      }));
      setLiked(true);
    } catch {
      toast.error("Failed to like article");
    }
  };

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />

      <main className="bg-[#0F2A44] text-white">

        {/* ================= HERO ================= */}
        <section className="relative min-h-[65vh] flex items-end">
          <img
            src={
              news.images?.length
                ? `${API_URL}/uploads/news/${news.images[0]}`
                : "https://images.unsplash.com/photo-1581092334651-ddf26d9d9f3a"
            }
            alt={news.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

          <div className="relative max-w-6xl mx-auto px-6 pb-24 w-full">
            <div className="max-w-3xl">
              <span className="inline-block mb-4 uppercase tracking-widest text-xs text-white/70">
                {news.category}
              </span>

              <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
                {news.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
                <span>
                  {new Date(news.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })}
                </span>
                <span>•</span>
                <span>{news.views} views</span>
                <span>•</span>
                {isAuthenticated && (
                  <button
                    onClick={() => setIsEditOpen(true)}
                    className="hover:underline"
                  >
                    ✏️ Edit Article
                  </button>
                )}

              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="bg-white text-[#0F2A44]">
          <div className="relative max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-16">

            {/* ================= EDITORIAL RAIL ================= */}
            <aside className="lg:col-span-3">
              <div className="sticky top-32 space-y-8">

                <div className="border-l-2 border-gray-200 pl-6">
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                    Engagement
                  </p>

                  <button
                    onClick={handleLike}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border
                    ${liked
                        ? "bg-red-50 text-red-600 border-red-200"
                        : "bg-gray-50 text-gray-600 border-gray-200"
                      }
                    hover:shadow transition`}
                  >
                    <span>❤️ Likes</span>
                    <span className="font-medium">{news.likes}</span>
                  </button>
                </div>

                <div className="border-l-2 border-gray-200 pl-6">
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                    Reach
                  </p>
                  <p className="text-sm text-gray-600">
                    {news.views} readers viewed this intelligence briefing
                  </p>
                </div>

              </div>
            </aside>

            {/* ================= MAIN CONTENT ================= */}
            <div className="lg:col-span-9">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                {news.description}
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
      <EditNewsModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        news={news}
        onUpdated={() => window.location.reload()}
      />

    </>
  );
};

export default NewsDetail;
