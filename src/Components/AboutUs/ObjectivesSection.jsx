const ObjectivesSection = () => {
  return (
    <section className="py-24 bg-[#0F2A44] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Our Objectives
          </h2>
          <p className="text-white/70 text-sm md:text-base">
            Driving operational excellence through safety, quality, innovation,
            and long-term partnerships across every project we deliver.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Mission */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition">
            <h4 className="text-lg font-semibold mb-4">Mission</h4>
            <p className="text-white/80 leading-relaxed text-sm">
              To deliver safe, high-quality pipeline and construction services
              built on trust, precision, and long-term reliability.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition">
            <h4 className="text-lg font-semibold mb-4">Vision</h4>
            <p className="text-white/80 leading-relaxed text-sm">
              To be a leading construction partner in the energy and
              infrastructure sectors, recognized for exceptional workmanship,
              strong safety culture, and dependable results.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition">
            <h4 className="text-lg font-semibold mb-4">Values</h4>
            <p className="text-white/80 leading-relaxed text-sm">
              Integrity • Quality • Safety • Accountability • Innovation •
              Teamwork
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
