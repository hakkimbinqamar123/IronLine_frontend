import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden shadow-md
                 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="h-52 w-full object-cover
                     transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <span
          className={`text-xs uppercase tracking-wide font-semibold ${article.categoryColor}`}
        >
          {article.category}
        </span>

        <h3
          className="mt-2 text-lg font-semibold text-gray-800
                     group-hover:text-[#173E73] transition"
        >
          {article.title}
        </h3>

        {/* DESCRIPTION CLAMPED TO 3 LINES */}
        <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
          {article.description}
        </p>

        <Link
          to={`/news/${article.slug}`}
          className="inline-flex items-center gap-2 mt-4
                     text-sm font-medium text-[#173E73]"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
