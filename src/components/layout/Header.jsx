import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import logo from "/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white/80 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <Container className="flex items-center justify-between py-2 md:py-3">
        {/* Logo + Company name */}
        <Link
          to="/"
          className="flex items-center gap-2 md:gap-3 hover:opacity-90 transition max-w-[70%] md:max-w-[55%]"
        >
          <img
            src={logo}
            alt="Krishna Trading Company"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 object-contain drop-shadow-sm"
          />

          <span
            className="
              text-[11px]     /* very small on phones */
              sm:text-xs
              md:text-sm      /* keep small on tablets */
              lg:text-base
              xl:text-lg
              font-semibold
              text-gray-800
              whitespace-nowrap
              leading-none
            "
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            KRISHNA TRADING COMPANY
          </span>
        </Link>

        {/* Desktop / Tablet nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs md:text-sm font-medium uppercase tracking-wide ${
                  isActive
                    ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                    : "text-gray-700 hover:text-orange-600 transition"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="https://portal.krishnatrade.in/index.php/sessions/login"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 md:ml-4"
          >
            <Button
              variant="primary"
              className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold cursor-pointer"
            >
              Login
            </Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-800 hover:text-orange-600 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <Container className="flex flex-col py-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium ${
                    isActive ? "text-orange-600" : "text-gray-700"
                  } hover:text-orange-600 transition`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button
              variant="primary"
              className="mt-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full w-fit px-5 py-2 text-sm font-semibold"
            >
              Login
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
