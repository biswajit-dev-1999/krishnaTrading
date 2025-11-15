import React from "react";
import clsx from "clsx";

/**
 * @param {Array} categories - List of category names to display
 * @param {String} activeCategory - Currently selected category
 * @param {Function} onSelect - Callback when a category is clicked
 */
const ProductFilter = ({ categories = [], activeCategory, onSelect }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-3 md:gap-5 py-3 border-b border-gray-200 min-w-max">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={clsx(
              "px-4 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap",
              activeCategory === cat
                ? "bg-blue-700 text-white shadow-md"
                : "bg-gray-100 hover:bg-blue-100 text-gray-700"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
