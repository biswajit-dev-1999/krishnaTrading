import React from "react";

const Badge = ({ children, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-800",
    orange: "bg-orange-100 text-orange-800",
    gray: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${colors[color]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
