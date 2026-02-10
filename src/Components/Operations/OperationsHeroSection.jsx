import { useEffect, useState } from "react";
import img from "../../assets/Images/AlSowah.webp";
import img2 from "../../assets/Images/Ruwais_Refinery.webp";
import img3 from "../../assets/Images/service1.webp";

const images = [img, img2, img3];

/* ---------------- LOADER COMPONENT ---------------- */
const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-800 rounded-full animate-spin" />
        <p className="text-sm text-gray-600">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

/* ---------------- HERO SECTION ---------------- */
const OperationsHeroSection = () => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  /* Simulated page loading */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  /* Auto slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  if (loading) return <Loader />;

  return (
    <section className="relative overflow-hidden bg-[#071B2E] text-white py-36">

      {/* BACKGROUND LIGHT */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[700px] h-[700px]
                        bg-gradient-to-tr from-blue-600/25 to-cyan-400/20
                        rotate-12 blur-[160px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px]
                        bg-blue-500/20 blur-[140px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* TEXT */}
        <div>
          <span className="uppercase tracking-[0.35em] text-xs text-blue-300 mb-6 inline-block">
            Operational Excellence
          </span>

          <h1 className="text-6xl md:text-7xl font-semibold leading-tight mb-8">
            Our Operations
          </h1>

          <p className="text-white/80 text-lg leading-relaxed max-w-xl mb-8">
            Iron Line Contracting delivers complex construction and pipeline
            operations through disciplined execution, strong governance, and an
            uncompromising commitment to safety and quality.
          </p>

          <div className="w-24 h-[3px] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
        </div>

        {/* IMAGE CAROUSEL */}
        <div className="relative hidden md:block">
          <div className="absolute -inset-6 rounded-[40px]
                  bg-gradient-to-tr from-blue-600/30 to-cyan-400/20
                  blur-2xl"></div>

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
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OperationsHeroSection;
