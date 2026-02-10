const CoreBusinessesSection = () => {
  return (
    <section className="py-24 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-[#0F2A44]">
            Our Core Businesses
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Diversified operations across energy, infrastructure, investment,
            and telecommunications.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Infrastructure */}
          <div className="group bg-gradient-to-br from-white to-blue-50
                          rounded-3xl p-10 shadow-md hover:shadow-xl
                          transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700
                              flex items-center justify-center text-xl font-bold">
                🏗️
              </div>
              <h3 className="text-lg font-semibold text-[#0F2A44]">
                Infrastructure & Engineering
              </h3>
            </div>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Costain (West Africa) Plc</li>
              <li>• ABB Electrical Systems (Nigeria)</li>
              <li>• Agbara Shoreline Power IPP</li>
              <li>• Power sector expansion</li>
            </ul>
          </div>

          {/* Energy */}
          <div className="group bg-gradient-to-br from-white to-green-50
                          rounded-3xl p-10 shadow-md hover:shadow-xl
                          transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700
                              flex items-center justify-center text-xl font-bold">
                ⚡
              </div>
              <h3 className="text-lg font-semibold text-[#0F2A44]">
                Energy
              </h3>
            </div>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>• NERC grid-connected license</li>
              <li>• Captive power plant rollout</li>
              <li>• 17% Schlumberger stake</li>
              <li>• 100MW plant in Uganda</li>
            </ul>
          </div>

          {/* Investment */}
          <div className="group bg-gradient-to-br from-white to-purple-50
                          rounded-3xl p-10 shadow-md hover:shadow-xl
                          transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700
                              flex items-center justify-center text-xl font-bold">
                💼
              </div>
              <h3 className="text-lg font-semibold text-[#0F2A44]">
                Investment & Trading
              </h3>
            </div>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Shoreline Capital Management</li>
              <li>• $300M co-investment fund</li>
              <li>• Biomass renewable trading</li>
              <li>• Palm kernel & cottonseed exports</li>
            </ul>
          </div>

          {/* Telecommunications */}
          <div className="group bg-gradient-to-br from-white to-indigo-50
                          rounded-3xl p-10 shadow-md hover:shadow-xl
                          transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700
                              flex items-center justify-center text-xl font-bold">
                📡
              </div>
              <h3 className="text-lg font-semibold text-[#0F2A44]">
                Telecommunications
              </h3>
            </div>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>• MTN & Visafone</li>
              <li>• Motorola & Ericsson</li>
              <li>• SSA telecom investments</li>
              <li>• Global banking partnerships</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreBusinessesSection;
