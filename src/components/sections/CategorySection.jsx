import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { categories } from "../../data/categories";
import { motion } from "framer-motion";

const CategorySection = () => {
  return (
    <section
      id="categories"
      className="relative py-28 bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 text-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 left-10 w-80 h-80 bg-blue-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <SectionTitle
          title="Explore Our Product Categories"
          subtitle="From safety to heavy-duty — discover the full spectrum of industrial excellence."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 justify-items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              className="relative group bg-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-md text-center hover:scale-105 hover:shadow-2xl transition-all duration-500 overflow-hidden w-full max-w-[340px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
             <motion.div
  initial={{ y: 0 }}
  whileHover={{ y: -10 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="relative mx-auto w-24 h-24 mb-6 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg overflow-hidden"
>
  <img
    src={cat.image}
    alt={cat.name}
    className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
  />
</motion.div>


              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition">
                {cat.name}
              </h3>
              <p className="text-gray-300 text-sm mb-6">{cat.description}</p>

              {/* ✅ Use Link for SPA navigation */}
              <Link
                to={`/products?category=${cat.slug}`}
                className="inline-block text-sm font-medium text-blue-400 hover:text-white transition duration-300 px-3 py-2 border border-transparent hover:border-white rounded-md z-10 relative"
              >
                View Products →
              </Link>

              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default CategorySection;
