import { Link } from "react-router-dom";

const SubsidiariesCTASection = () => {
  return (
    <section className="py-28 bg-[#0F2A44] text-white text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">
          Building Long-Term Value Across Every Sector
        </h2>

        <p className="text-white/80 max-w-3xl mx-auto mb-10">
          Our subsidiaries operate under a shared commitment to safety,
          operational excellence, and disciplined growth — delivering
          results that endure.
        </p>

        <Link
          to="/contacts"
          className="inline-block bg-white text-[#0F2A44] px-10 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Contact the Group
        </Link>
      </div>
    </section>
  );
};

export default SubsidiariesCTASection;
