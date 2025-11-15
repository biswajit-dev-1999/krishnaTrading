import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { motion } from "framer-motion";

const partners = [
  { name: "Safety Projects Pvt. Ltd.", logo: "/10.jpeg" },
  { name: "Bombay Hardware", logo: "/11.jpeg" },
  { name: "Jain Safeweld", logo: "/12.jpeg" },
  { name: "Malacom India", logo: "/13.jpeg" },
  { name: "Karam Safety", logo: "/14.jpeg" },
  { name: "3M Industrial", logo: "/15.jpeg" },
  { name: "Havells India", logo: "/16.jpeg" },
  { name: "Bosch Tools", logo: "/17.jpeg" },
];

const PartnerSection = () => {
  return (
    <section
      id="partners"
      className="relative py-28 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Subtle moving light glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <SectionTitle
          title="Our Trusted Partners"
          subtitle="Powering industrial success with reliable global brands"
          theme="dark"
        />

        {/* Partner Grid (Uniform Sizing + Hover Glow) */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 mt-16 justify-items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {partners.map((p, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-[200px] h-[140px] flex flex-col items-center justify-center text-center shadow-lg hover:shadow-blue-500/30 transition-all duration-500"
            >
              {/* Glow border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>

              <img
                src={p.logo}
                alt={p.name}
                className="max-h-[60px] object-contain  transition-all duration-500"
              />
              <p className="mt-3 text-sm text-gray-300 font-medium">{p.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative bottom gradient line */}
        <div className="mt-20 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </Container>
    </section>
  );
};

export default PartnerSection;
