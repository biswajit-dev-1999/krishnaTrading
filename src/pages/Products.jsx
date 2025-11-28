import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

import { categories } from "../data/categories";
import { safetyEquipment } from "../data/products/safetyEquipment";
import { weldingAccessories } from "../data/products/weldingAccessories";
import { liftingEquipment } from "../data/products/liftingEquipment";
import { fireFighting } from "../data/products/fireFighting";
import { powerTools } from "../data/products/powerTools";
import { handTools } from "../data/products/handTools";
import { electrical } from "../data/products/electrical";
import { hardware } from "../data/products/hardware";
import { industrialMaterial } from "../data/products/industrialMaterial";
import { soilTesting } from "../data/products/soilTesting";
import { surveyEquipment } from "../data/products/surveyEquipment";

const dataMap = {
  safety: safetyEquipment,
  welding: weldingAccessories,
  lifting: liftingEquipment,
  "fire-fighting": fireFighting,
  "power-tools": powerTools,
  "hand-tools": handTools,
  electrical,
  hardware,
  "industrial-material": industrialMaterial,
  "soil-testing": soilTesting,
  "surveying-equipment": surveyEquipment,
};

const Products = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get("category");

  const [activeCategory, setActiveCategory] = useState(
    initialCategory || categories[0].slug
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const activeProducts = dataMap[activeCategory] || [];

  // Sync category when URL changes
  useEffect(() => {
    const categoryFromUrl = new URLSearchParams(location.search).get("category");
    if (categoryFromUrl && categoryFromUrl !== activeCategory) {
      setActiveCategory(categoryFromUrl);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.search]);

  return (
    <main className="flex flex-col md:flex-row bg-gray-50 min-h-screen mt-6 relative">

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between bg-white p-4 shadow">
        <h2 className="text-lg font-semibold text-gray-800">Products</h2>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md border border-gray-300 text-gray-700"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${menuOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 fixed md:static top-0 left-0 z-30 bg-white border-r
        border-gray-200 p-4 w-3/4 sm:w-2/5 md:w-1/5 h-full md:h-screen
        overflow-y-auto transition-transform duration-300 ease-in-out`}
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800 hidden md:block">
          Categories
        </h2>

        {/* Mobile Close */}
        <div className="flex justify-between items-center mb-3 md:hidden">
          <h2 className="text-lg font-semibold text-gray-800">Categories</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-500 text-sm px-2 py-1 border rounded-md"
          >
            Close
          </button>
        </div>

        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => {
                  setActiveCategory(cat.slug);
                  setMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md transition ${
                  activeCategory === cat.slug
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
        />
      )}

      {/* Product Display */}
      <section className="flex-1 p-4 sm:p-6 overflow-y-auto max-h-screen">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            {categories.find((c) => c.slug === activeCategory)?.name ||
              "Products"}
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            {categories.find((c) => c.slug === activeCategory)?.description}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activeProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-md transition flex flex-col"
            >
              {/* 🔥 Uniform Image Container */}
              <div className="w-full h-48 bg-white rounded-md mb-3 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 flex-grow">{item.description}</p>

              <Link
                to="/contact"
                className="mt-4 self-start bg-blue-600 hover:bg-blue-700 text-white
                text-sm font-medium py-2 px-4 rounded-lg transition"
              >
                Contact Us
              </Link>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {activeProducts.length === 0 && (
          <p className="text-gray-500 text-center mt-10">
            No products available in this category.
          </p>
        )}
      </section>
    </main>
  );
};

export default Products;
