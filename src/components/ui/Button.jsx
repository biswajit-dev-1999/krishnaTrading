import React from "react";
import clsx from "clsx";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-blue-700 text-white hover:bg-orange-600 focus:ring-blue-500",
    outline:
      "border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-blue-500",
    light:
      "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-300",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
