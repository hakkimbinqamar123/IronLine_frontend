import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

const API_URL = import.meta.env.VITE_API_URL;

const ArticlesSection = () => {
  const [articles, setArticles] = useState([]);

  const fetchTopArticles = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/news`);

      // take top 3 news
      const topThree = res.data.slice(0, 3).map((item) => ({
        id: item._id,
        category: item.category || "News",
        categoryColor: "text-blue-600",
        title: item.title,
        description: item.description,
        image:
          item.images?.length
            ? `${API_URL}/uploads/news/${item.images[0]}`
            : "https://images.unsplash.com/photo-1581092334651-ddf26d9d9f3a",
        slug: item._id,
      }));

      setArticles(topThree);
    } catch (error) {
      console.error("Failed to load top articles:", error);
    }
  };

  useEffect(() => {
    fetchTopArticles();
  }, []);

  return (
    <section className="bg-[#EEF4FF] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-[#173E73]">
              Top Articles
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl">
              Insights, updates, and thought leadership from Iron Line.
            </p>
          </div>

          <a
            href="/news"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-[#173E73] hover:underline"
          >
            View all articles →
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ArticlesSection;
