const SubsidiariesHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#071B2E] text-white py-36">

      {/* Ambient lighting */}
      <div className="absolute -top-32 -left-32 w-[650px] h-[650px]
                      bg-gradient-to-tr from-blue-600/25 to-cyan-400/20
                      blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px]
                      bg-blue-500/20 blur-[130px] rounded-full"></div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* TEXT */}
        <div>
          <span className="uppercase tracking-[0.35em] text-xs text-blue-300 mb-6 inline-block">
            Group Companies
          </span>

          <h1 className="text-6xl md:text-7xl font-semibold leading-tight mb-8">
            Our Subsidiaries
          </h1>

          <p className="text-white/80 text-lg leading-relaxed max-w-xl mb-8">
            A diversified portfolio of operating companies delivering long-term
            value across energy, infrastructure, investment,
            telecommunications, and contracting.
          </p>

          <div className="w-24 h-[3px] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
        </div>

        {/* FLOATING METRIC CARD */}
        <div className="hidden md:flex justify-end">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px]
                            bg-gradient-to-tr from-blue-600/30 to-cyan-400/20
                            blur-2xl"></div>

            <div className="relative w-80 h-80 rounded-[32px]
                            bg-white/10 backdrop-blur-md
                            border border-white/20
                            flex flex-col items-center justify-center
                            shadow-[0_30px_80px_rgba(0,0,0,0.45)]">

              <p className="text-6xl font-semibold">5+</p>
              <p className="text-sm uppercase tracking-widest text-white/70 mt-3">
                Core Sectors
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SubsidiariesHeroSection;
