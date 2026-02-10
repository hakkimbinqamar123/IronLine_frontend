import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import about_us_section from "../assets/Images/about_us_section.webp"

const AboutSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (replace with real API later)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div className="relative group">
            <img
              src={about_us_section}
              alt="About Iron Line"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg
                         transition-transform duration-500 group-hover:scale-[1.03]"
            />

            {/* Floating Badge */}
            <div
              className="absolute bottom-6 left-6 bg-white/90 backdrop-blur
                         px-5 py-3 rounded-xl shadow text-sm font-semibold text-[#173E73]"
            >
              40+ Years of Experience
            </div>
          </div>

          {/* CONTENT */}
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-[#0F2A44]">
              About Us
            </span>

            <h2 className="text-3xl font-semibold text-[#173E73] mt-3">
              Powering Sustainable Energy & Infrastructure Across Africa
            </h2>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Iron Line Contracting is a trusted construction provider specializing in oil & gas
              pipeline construction and comprehensive civil and infrastructure services. Built on precision, safety, and
              integrity, we deliver dependable results for industrial, commercial, and energy-sector clients.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Our experienced crews, modern equipment, and commitment to quality allow us to perform complex
              projects safely, efficiently, and to the highest standards.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div>
                <h4 className="text-2xl font-bold text-[#173E73]">5+</h4>
                <p className="text-sm text-gray-500">Countries</p>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-[#173E73]">10+</h4>
                <p className="text-sm text-gray-500">Major Projects</p>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-[#173E73]">40+</h4>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 mt-10 bg-[#173E73]
                         hover:bg-white hover:text-[#173E73] text-white px-6 py-3 rounded-lg
                         text-sm font-medium transition"
            >
              Learn More →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
