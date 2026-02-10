const CoreOperationsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
          alt="Construction Operations"
          className="rounded-3xl shadow-xl"
        />

        <div>
          <h2 className="text-3xl font-semibold text-[#0F2A44] mb-6">
            Core Operational Activities
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>• Oil & gas pipeline construction and rehabilitation</li>
            <li>• Trenching, excavation, and earthworks</li>
            <li>• Utility installation and infrastructure development</li>
            <li>• Concrete foundations, slabs, and structural works</li>
            <li>• Site development and access roads</li>
            <li>• Testing, commissioning, and handover</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default CoreOperationsSection;
