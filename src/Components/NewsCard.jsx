import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <Link to={`/news/${news.slug}`}>
      <div
        className="bg-white rounded-lg shadow
                   hover:shadow-lg transition overflow-hidden"
      >
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-44 object-cover"
        />

        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-800 mb-1">
            {news.title}
          </h3>
          <p className="text-xs text-gray-500">
            {news.date}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
