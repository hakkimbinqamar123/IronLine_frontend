import team from "../../assets/Images/team_leadership.webp"

const StrategySection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <img
          src={team}
          alt="Infrastructure"
          className="rounded-3xl shadow-xl hover:scale-[1.02] transition duration-500"
        />

        {/* Content */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0F2A44] mb-6">
            What Sets the Team Apart
          </h2>

          <ul className="space-y-3 text-gray-600 leading-relaxed mb-6 list-disc pl-5">
            <li>Proven delivery of mega-projects from FEED through commissioning</li>
            <li>Deep experience with NOCs and government stakeholders</li>
            <li>Strong track record in brownfield execution, fast-track EPC, and complex logistics</li>
            <li>Leadership across engineering, construction, commissioning, HSE, and commercial governance</li>
          </ul>

          <p className="text-gray-600 leading-relaxed">
            This depth of experience allows the team to rapidly mobilize,
            manage risk, and deliver certainty on large-scale EPC programs —
            even in the most demanding operating environments.
          </p>
        </div>

      </div>
    </section>
  );
};

export default StrategySection;
