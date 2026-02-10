import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import service1 from "../assets/Images/service1.webp"
import service2 from "../assets/Images/service2.webp"
import service3 from "../assets/Images/service3.webp"
import service4 from "../assets/Images/service4.webp"
import service5 from "../assets/Images/service5.webp"
import service6 from "../assets/Images/service6.webp"

const services = [
  {
    title: "Oil & Gas Pipeline Construction",
    image: service1,
    description:
      "Iron Line Contracting specializes in full-scope pipeline construction delivering safe, durable, and precision-engineered pipeline systems.",
    items: [
      "Right-of-way clearing and preparation",
      "Trenching and excavation",
      "Pipe stringing, bending, welding & coating",
      "Lowering-in and backfilling",
      "Tie-ins and integrity digs",
      "Hydrotesting & commissioning",
      "Repairs, maintenance & integrity upgrades",
    ],
  },
  {
    title: "Civil Construction",
    image: service3,
    description:
      "Industrial and commercial infrastructure development including site preparation and engineered civil works.",
    items: [
      "Access roads construction",
      "Drainage systems",
      "Culverts & site development",
      "Industrial infrastructure works",
    ],
  },
  {
    title: "Excavation & Earthworks",
    image: service2,
    description:
      "Large-scale excavation and earthmoving operations executed using modern machinery and experienced operators.",
    items: [
      "Trenching & grading",
      "Earthmoving operations",
      "Site cuts & preparation",
      "Detailed excavation works",
    ],
  },
  {
    title: "Utility Installation",
    image: service4,
    description:
      "Underground utility installation built to strict engineering and regulatory standards.",
    items: [
      "Water pipeline installation",
      "Sewer systems",
      "Stormwater systems",
      "Electrical utility installation",
    ],
  },
  {
    title: "Concrete & Structural Works",
    image: service5,
    description:
      "High-precision reinforced concrete and structural works supporting industrial and infrastructure projects.",
    items: [
      "Foundations & slabs",
      "Equipment pads",
      "Retaining structures",
      "Reinforced concrete works",
    ],
  },
  {
    title: "General Contracting",
    image: service6,
    description:
      "End-to-end project management delivering coordinated execution from planning to completion.",
    items: [
      "Project planning & scheduling",
      "Construction coordination",
      "Execution management",
      "Turnkey project delivery",
    ],
  },
];

const Services = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071B2E] text-white py-28">

  {/* Ambient glow background */}
  <div className="absolute -top-32 -left-32 w-[600px] h-[600px]
                  bg-gradient-to-tr from-blue-600/25 to-cyan-400/20
                  blur-[140px] rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-[450px] h-[450px]
                  bg-blue-500/20 blur-[120px] rounded-full"></div>

  <div className="relative max-w-6xl mx-auto px-6 text-center">

    {/* Floating label */}
    <span className="inline-block mb-5 px-4 py-1.5 text-xs tracking-[0.35em]
                     uppercase rounded-full bg-white/10 border border-white/20
                     text-blue-200">
      What We Deliver
    </span>

    {/* Heading */}
    <h1 className="text-5xl md:text-6xl font-semibold mb-6">
      Our Services
    </h1>

    {/* Accent line */}
    <div className="w-24 h-[3px] mx-auto mb-6 rounded-full
                    bg-gradient-to-r from-blue-400 to-cyan-400"></div>

    {/* Description */}
    <p className="max-w-3xl mx-auto text-white/80 text-lg leading-relaxed">
      Delivering integrated engineering, construction, and infrastructure
      services through disciplined execution, safety leadership, and
      technical excellence.
    </p>

  </div>
</section>


      {/* SERVICES SECTIONS */}
      <div className="bg-white">
        {services.map((service, index) => (
          <section
            key={index}
            className={`py-24 ${index % 2 === 0 ? "bg-white" : "bg-[#F5F8FC]"
              }`}
          >
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

              {/* IMAGE */}
              <div
                className={`group overflow-hidden rounded-3xl ${index % 2 !== 0 ? "md:order-2" : ""
                  }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-3xl shadow-xl
               transition-transform duration-500 ease-out
               group-hover:scale-110 group-hover:shadow-2xl"
                />
              </div>

              {/* CONTENT */}
              <div className={index % 2 !== 0 ? "md:order-1" : ""}>
                <h2 className="text-3xl font-semibold text-[#0F2A44] mb-6">
                  {service.title}
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 text-gray-600">
                  {service.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Services;
