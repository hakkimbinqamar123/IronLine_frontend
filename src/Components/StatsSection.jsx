import React from 'react'

const StatsSection = () => {
    return (
        <section className="relative -mt-16 z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-gray-50 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3">

                    {[
                        { value: "40+", title: "Years of Experience", subtitle: "Decades of Industry Expertise" },
                        { value: "5", title: "Countries of Operation", subtitle: "Presence Across Africa" },
                        { value: "10+", title: "Major Projects", subtitle: "Energy & Infrastructure Initiatives" },
                    ].map((stat, index) => (
                        <div key={index} className="px-8 py-6 flex my-8 items-start gap-6">
                            <h3 className="text-4xl font-bold text-[#173E73]">
                                {stat.value}
                            </h3>
                            <div>
                                <p className="text-sm font-semibold">{stat.title}</p>
                                <p className="text-sm text-gray-500 mt-1">{stat.subtitle}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default StatsSection;
