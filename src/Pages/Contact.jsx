import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading (replace with API call later)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />

      <div className="bg-[#0F2A44] text-white">

        {/* ================= HERO ================= */}
        <section className="relative bg-gradient-to-br from-[#0B243A] via-[#0F2A44] to-[#173E73] py-48">
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <span className="uppercase tracking-widest text-xs text-white/70 mb-4 inline-block">
                Get in Touch
              </span>

              <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
                Let’s Discuss Your Project
              </h1>

              <p className="text-white/90 text-lg leading-relaxed max-w-xl">
                Whether you’re planning a pipeline development, infrastructure project,
                or strategic partnership, Iron Line Contracting is ready to engage
                with disciplined execution and long-term commitment.
              </p>
            </div>

            {/* Right Accent */}
            <div className="hidden md:flex justify-end">
              <div className="w-80 h-80 rounded-full bg-white/10 backdrop-blur border border-white/20 flex flex-col items-center justify-center text-center">
                <p className="text-4xl font-semibold">24/7</p>
                <p className="uppercase tracking-widest text-xs text-white/70 mt-2">
                  Operational Support
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ================= CONTACT GRID ================= */}
        <section className="bg-white text-[#0F2A44] py-28">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20">

            {/* ================= INFO ================= */}
            <div className="lg:col-span-5 space-y-12">

              <div>
                <h2 className="text-3xl font-semibold mb-4">
                  Corporate Office
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Iron Line Contracting operates with a strong governance framework
                  and centralized coordination to support regional and international projects.
                </p>
              </div>

              <div className="space-y-6">

                <div>
                  <p className="uppercase tracking-widest text-xs text-gray-400 mb-1">
                    Address
                  </p>
                  <p className="text-gray-700">
                    TOWER 1, FLOOR 3 <br />
                    AL DANA, ABU DHABI <br />
                    UNITED ARAB EMIRATES
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-widest text-xs text-gray-400 mb-1">
                    Email
                  </p>
                  <p className="text-gray-700">
                    info@ironlinecontracting.com
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-widest text-xs text-gray-400 mb-1">
                    Phone
                  </p>
                  <p className="text-gray-700">
                    +971 XX XXX XXXX
                  </p>
                </div>

              </div>

              <div className="border-t pt-8">
                <p className="text-sm text-gray-500">
                  Our teams respond promptly to project inquiries,
                  tender discussions, and strategic collaboration requests.
                </p>
              </div>

            </div>

            {/* ================= FORM ================= */}
            <div className="lg:col-span-7">
              <div className="bg-[#F5F8FC] rounded-3xl p-10 shadow-xl">

                <h3 className="text-2xl font-semibold mb-6">
                  Send an Enquiry
                </h3>

                <form className="space-y-6">

                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#0F2A44]"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#0F2A44]"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Company / Organization"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#0F2A44]"
                  />

                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-600 focus:outline-none focus:border-[#0F2A44]"
                  >
                    <option>Project Enquiry</option>
                    <option>Pipeline Construction</option>
                    <option>Infrastructure & Civil Works</option>
                    <option>Strategic Partnership</option>
                    <option>General Enquiry</option>
                  </select>

                  <textarea
                    rows={5}
                    placeholder="Briefly describe your requirement"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm resize-none focus:outline-none focus:border-[#0F2A44]"
                  />

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#0F2A44]
                               text-white px-8 py-3 rounded-lg text-sm font-medium
                               hover:bg-[#173E73] transition"
                  >
                    Submit Enquiry →
                  </button>

                </form>
              </div>
            </div>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default Contact;
