import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";

const API_URL = import.meta.env.VITE_API_URL;

const NewsSection = () => {
  const [newsList, setNewsList] = useState([]);

  const fetchLatestNews = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/news`);

      // take LAST 3 news
      const latestThree = res.data
        .slice(-3)
        .reverse()
        .map((item) => ({
          id: item._id,
          title: item.title,
          date: new Date(item.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          image:
            item.images?.length
              ? `${API_URL}/uploads/news/${item.images[0]}`
              : "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
          slug: item._id,
        }));

      setNewsList(latestThree);
    } catch (error) {
      console.error("Failed to load news:", error);
    }
  };

  useEffect(() => {
    fetchLatestNews();
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[#173E73]">
            Latest News
          </h2>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsList.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        {/* Button */}
        <div className="mt-8 text-center">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 bg-[#173E73]
                       hover:bg-white hover:text-[#173E73] text-white px-5 py-2
                       rounded text-xs font-medium"
          >
            View All News
            <span className="text-sm">›</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default NewsSection;
