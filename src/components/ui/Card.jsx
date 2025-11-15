import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md hover:shadow-lg border border-gray-100 transition duration-300 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
