import { Link } from "react-router-dom";
import img from "../../assets/Images/service5.webp";
import img2 from "../../assets/Images/team_leadership.webp"; // replace with other images
import img3 from "../../assets/Images/service1.webp";
import { useEffect, useState } from "react";

const images = [img, img2, img3];
const AboutHeroSection = () => {
  const [index, setIndex] = useState(0);
  
    // Auto slide
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 3500);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <section className="relative bg-gradient-to-r from-[#0B243A] to-[#0F2A44] text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* Text Content */}
        <div>
          <div className="absolute inset-0">
            <div className="absolute -top-32 -left-32 w-[700px] h-[700px]
                        bg-gradient-to-tr from-blue-600/25 to-cyan-400/20
                        rotate-12 blur-[160px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px]
                        bg-blue-500/20 blur-[140px] rounded-full"></div>
          </div>
          <span className="uppercase tracking-[0.35em] text-xs text-blue-300 mb-6 inline-block">
            About Us
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Built Strong. Built to Last.
          </h1>

          <p className="text-white/90 text-lg leading-relaxed">
            Iron Line Contracting is a trusted construction provider specializing
            in oil &amp; gas pipeline construction and comprehensive civil and
            infrastructure services. Built on precision, safety, and integrity,
            we deliver dependable results for industrial, commercial, and
            energy-sector clients.
          </p>

          <p className="text-white/80 text-base leading-relaxed mt-5">
            Our experienced crews, modern equipment, and project-proven
            leadership allow us to execute complex projects safely, efficiently,
            and to the highest standards — from pipeline construction and utility
            installation to full-scale civil and infrastructure delivery.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-8">
            <Link
              to="/contacts"
              className="px-6 py-3 rounded-lg bg-white text-[#0F2A44] text-sm font-medium hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>

            <Link
              to="/subsidiary"
              className="px-6 py-3 rounded-lg border border-white/40 text-sm font-medium hover:bg-white/10 transition"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative hidden md:block">
                  <div className="absolute -inset-6 rounded-[40px]
                          bg-gradient-to-tr from-blue-600/30 to-cyan-400/20
                          blur-2xl"></div>
        
                  {/* FIXED SIZE IMAGE CONTAINER */}
                  <div className="relative w-full h-[420px] overflow-hidden rounded-[32px]
                          shadow-[0_40px_90px_rgba(0,0,0,0.55)]">
        
                    <img
                      src={images[index]}
                      alt="Operations"
                      className="w-full h-full object-cover transition-all duration-700"
                    />
        
                  </div>
        
                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, i) => (
                      <span
                        key={i}
                        className={`w-2.5 h-2.5 rounded-full transition ${i === index ? "bg-white" : "bg-white/40"
                          }`}
                      />
                    ))}
                  </div>
                </div>
        

      </div>
    </section>
  );
};

export default AboutHeroSection;
