import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { motion } from "framer-motion";
import { Shield, Wrench, Zap, Flame } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-6 h-6 text-white-600" />,
    title: "Safety & Welding Equipment",
    desc: "High-grade certified safety and welding products ensuring reliability and compliance.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-white-600" />,
    title: "Industrial Hardware",
    desc: "Durable and precision-engineered lifting tools, hardware, and accessories.",
  },
  {
    icon: <Zap className="w-6 h-6 text-white-600" />,
    title: "Electrical & Power Tools",
    desc: "Power-efficient, performance-driven tools trusted by top industries.",
  },
  {
    icon: <Flame className="w-6 h-6 text-white-600" />,
    title: "Fire & Safety Gear",
    desc: "Complete range of firefighting and emergency safety equipment.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-br from-gray-900 via-blue-900/80 to-gray-800 text-white overflow-hidden"
    >
      {/* Floating background orbs for cinematic glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-10 w-64 h-64 bg-blue-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <SectionTitle
          title="Who We Are"
          subtitle="Delivering Quality, Safety & Innovation for Over 30 Years"
        />

        <div className="grid md:grid-cols-2 gap-16 mt-14 items-center">
          {/* Left Image / Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/8.png"
                alt="Modern Industrial Facility"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 left-6 bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20">
              <p className="text-4xl font-bold text-white">30+</p>
              <p className="text-sm text-gray-300">Years of Industrial Expertise</p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6 leading-tight">
              Building Trust Through Quality Industrial Solutions
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              At <span className="font-semibold text-blue-400">Krishna Trading Company</span>, 
              we are more than suppliers — we are partners in your progress. 
              With decades of expertise in industrial, safety, and electrical materials, 
              we empower industries to operate smarter, safer, and stronger. 
              Our focus on innovation and client satisfaction drives everything we do.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm hover:bg-white/20 transition"
                >
                  <div className="p-2 bg-white/10 rounded-lg">{f.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white">{f.title}</h4>
                    <p className="text-sm text-gray-300 mt-1">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-lg font-semibold shadow-lg"
              >
                Contact Us Today
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
