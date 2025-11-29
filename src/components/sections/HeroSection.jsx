import React, { useState, useEffect } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; 

const slides = [
  {
    id: 1,
    image: "/port.jpg",
    title: "Reliable Industrial & Safety Equipment Suppliers",
    subtitle:
      "Dealers & Stockists for Safety, Welding, Electrical, Hardware, and Industrial Materials.",
  },
  {
    id: 2,
    image: "/plant.jpg",
    title: "Your Trusted Partner in Industrial Excellence",
    subtitle:
      "We provide high-quality tools and equipment built for durability and performance.",
  },
  {
    id: 3,
    image: "/road.jpg",
    title: "Delivering Quality Since 2009",
    subtitle:
      "Serving industries with precision-engineered safety and industrial solutions.",
  },
  {
    id: 4,
    image: "/building.jpg",
    title: "Complete Range of Industrial Products",
    subtitle:
      "From protective gear to heavy machinery — everything under one roof.",
  },
  // {
  //   id: 5,
  //   image: "/24.png",
  //   title: "Innovative Solutions for Every Industry",
  //   subtitle:
  //     "Modern products designed for safety, productivity, and performance.",
  // },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden text-white bg-black">
    <AnimatePresence mode="wait">
      <motion.div
        key={slides[current].id}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        {/* Use a background div for more reliable responsive cover on mobile */}
        <div
          aria-hidden="true"
          className="w-full h-full bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />

        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>
    </AnimatePresence>
  

      <Container className="relative z-10 flex flex-col items-center md:items-start justify-center h-full text-center md:text-left px-6">
        <motion.h1
          key={slides[current].title}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg"
        >
          {slides[current].title}
        </motion.h1>

        <motion.p
          key={slides[current].subtitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl"
        >
          {slides[current].subtitle}
        </motion.p>

       <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
  className="flex gap-4 justify-center md:justify-start"
>
  <Link
    to="/products"
    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
  >
    Explore Products
  </Link>

  <Link
    to="/contact"
    className="border border-white hover:bg-white hover:text-black text-white font-medium py-2 px-4 rounded-lg transition"
  >
    Contact Us
  </Link>
</motion.div>
       {/* Navigation Dots */}
<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
  {slides.map((_, i) => (
    <button
      key={i}
      onClick={() => setCurrent(i)}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        i === current
          ? "bg-white scale-125 shadow-md"
          : "bg-gray-400/70 hover:bg-white/80"
      }`}
    ></button>
  ))}
</div>

      </Container>
    </section>
  );
};

export default HeroSection;