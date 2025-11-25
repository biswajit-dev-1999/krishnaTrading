import React from "react";
import Container from "../ui/Container";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white overflow-hidden"
    >
      {/* Animated glowing background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-700/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-sky-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-5 text-white"
        >
          Let’s Connect and Build Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-gray-300 text-lg mb-10"
        >
          Partner with{" "}
          <span className="text-blue-400 font-semibold">
            Krishna Trading Company
          </span>{" "}
          — your trusted source for industrial, safety, and project materials.
          Reach out today to discuss your requirements or request a quotation.
        </motion.p>

        {/* ✅ Contact Buttons (Working Gmail & Phone Dial) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mt-8"
        >
          {/* 📞 Call Button */}
          <a
            href="tel:+919776977650"
            className="border border-blue-400 text-blue-300 hover:bg-blue-600/20 hover:text-white transition-all duration-300 flex items-center px-5 py-3 rounded-lg"
          >
            <Phone className="mr-2 h-5 w-5 text-blue-400" /> +91 9776977650
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=salesktc74@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white border-0 transition-all duration-300 flex items-center px-5 py-3 rounded-lg"
          >
            <Mail className="mr-2 h-5 w-5 text-white" /> salesktc74@gmail.com
          </a>
        </motion.div>

        {/* Address Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 inline-flex flex-col items-center text-gray-300 shadow-lg hover:shadow-blue-600/20 transition-all duration-500"
        >
          <MapPin className="h-6 w-6 text-blue-400 mb-3" />
          <p className="text-base font-medium">
            Machhua Bazar, Near maa durga temple, Infront of LIC Office, Cuttack – 753001, Odisha
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Open: Mon - Sat, 9:00 AM – 7:00 PM
          </p>
        </motion.div>

        {/* Decorative divider line */}
        <div className="mt-20 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

        {/* Footer note */}
        <p className="text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} Krishna Trading Company. All Rights
          Reserved.
        </p>
      </Container>
    </section>
  );
};

export default ContactSection;
