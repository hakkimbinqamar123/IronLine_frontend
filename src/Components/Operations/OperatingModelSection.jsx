const OperatingModelSection = () => {
  return (
    <section className="py-24 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-[#0F2A44]">
            How We Operate
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Our operating model is designed around safety, precision, and accountability
            across every phase of execution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-[#0F2A44] mb-4">
              🛡️ Safety & Compliance
            </h3>
            <p className="text-sm text-gray-600">
              Strict adherence to HSE standards, regulatory compliance, and
              environmental controls across all operational activities.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-[#0F2A44] mb-4">
              ⚙️ Execution Excellence
            </h3>
            <p className="text-sm text-gray-600">
              Proven field execution supported by planning, scheduling,
              logistics coordination, and quality assurance.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-[#0F2A44] mb-4">
              📊 Governance & Control
            </h3>
            <p className="text-sm text-gray-600">
              Transparent reporting, cost control, and risk management
              aligned with EPC-level governance frameworks.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OperatingModelSection;
