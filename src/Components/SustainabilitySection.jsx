import sustainabilityImg from "../../src/assets/Images/sustainability.webp";

const differentiators = [
  "Strong pipeline construction experience",
  "Safety-first culture",
  "Skilled trades & certified operators",
  "Modern, well-maintained equipment",
  "Transparent communication and reporting",
  "On-time, on-budget delivery",
];

const SustainabilitySection = () => {
  return (
    <section className="bg-[#EEF4FF] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-stretch">

            {/* LEFT CONTENT */}
            <div className="p-12 flex flex-col justify-center">

              <h3 className="text-3xl font-semibold text-[#173E73] mb-3">
                Key Differentiators & Safety Commitment
              </h3>

              <p className="text-gray-600 mb-8">
                Our operational strength is built on execution excellence,
                skilled workforce capability, and an uncompromising commitment
                to safety across every project environment.
              </p>

              {/* DIFFERENTIATORS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {differentiators.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl
                               bg-[#F5F8FC] hover:bg-[#E8F0FF]
                               transition shadow-sm"
                  >
                    <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#173E73]"></span>
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              {/* SAFETY COMMITMENT */}
              <div className="border-l-4 border-[#173E73] pl-5">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong>Safety Commitment:</strong> Iron Line Contracting
                  maintains strict safety procedures, environmental controls,
                  and regulatory compliance across all pipeline and construction
                  operations, ensuring workforce protection and sustainable
                  project execution.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <img
                src={sustainabilityImg}
                alt="Sustainability"
                className="w-full h-full object-cover"
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#173E73]/40 to-transparent"></div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SustainabilitySection;
