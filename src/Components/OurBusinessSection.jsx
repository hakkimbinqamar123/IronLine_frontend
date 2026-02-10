import { useEffect, useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";

import service1 from "../assets/Images/service1.webp";
import service2 from "../assets/Images/service2.webp";
import service3 from "../assets/Images/service3.webp";
import service5 from "../assets/Images/service5.webp";

const businesses = [
  {
    title: "Oil & Gas Pipeline Construction",
    subtitle: "Exploration & Production",
    image: service1,
  },
  {
    title: "Excavation & Earthworks",
    subtitle: "Renewable & Thermal Energy",
    image: service2,
  },
  {
    title: "Civil Construction",
    subtitle: "Construction & Logistics",
    image: service3,
  },
  {
    title: "General Contracting",
    subtitle: "Solar & Wind Solutions",
    image: service5,
  },
];

const BusinessesSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <section className="bg-[#EEF4FF] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-blue-800">
            Our Services
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Diverse Operations Across the Energy and Infrastructure Sectors
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {businesses.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow
                         hover:shadow-2xl transition-all duration-300
                         hover:-translate-y-2 overflow-hidden"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-cover
                             transition-transform duration-500
                             group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4 bg-[#173E73] text-white transition-colors duration-300
                              group-hover:bg-[#0F2A44]">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-xs text-blue-200 mt-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
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
            View All Services
            <span className="text-sm">›</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BusinessesSection;
