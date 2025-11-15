import React from "react";
import { Card } from "../ui/Card";

/**
 * @param {Array} products - Array of product objects [{id, name, image, description}]
 * @param {Number} columns - Number of columns on large screens (default 4)
 */
const ProductGrid = ({ products = [], columns = 4 }) => {
  if (!products.length) {
    return (
      <p className="text-center text-gray-500 py-10">
        No products available in this category.
      </p>
    );
  }

  return (
    <div
      className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-${columns} mt-10`}
    >
      {products.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ProductGrid;
