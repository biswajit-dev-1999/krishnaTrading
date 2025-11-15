import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-300 pt-20 pb-10">
      <Container className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Krishna Trading Co.
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Dealers & Stockists — Safety, Welding, Firefighting, Electrical,
            and Industrial Equipment. Trusted by industries for over 30 years.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-blue-400 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-400 mt-1" />
              <span>
                Machhua Bazar, Near BOB ATM, Infront of LIC Office,
                <br /> Cuttack - 753001, Odisha
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400" /> +91 7506077743
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400" /> salesktc74@gmail.com
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600/20 hover:border-blue-500 transition"
            >
              <Linkedin size={18} className="text-blue-400" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600/20 hover:border-blue-500 transition"
            >
              <Facebook size={18} className="text-blue-400" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600/20 hover:border-blue-500 transition"
            >
              <Instagram size={18} className="text-blue-400" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600/20 hover:border-blue-500 transition"
            >
              <Twitter size={18} className="text-blue-400" />
            </a>
          </div>
        </div>
      </Container>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-14 pt-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-400 font-medium">Krishna Trading Company</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
