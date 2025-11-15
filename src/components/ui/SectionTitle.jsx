import React from "react";

const SectionTitle = ({ title, subtitle, align = "center", theme = "dark" }) => {
  // Choose text colors based on the theme
  const isDark = theme === "dark";

  return (
    <div
      className={`text-${align} mb-10`}
    >
      <h2
        className={`text-3xl md:text-4xl font-bold ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-sm md:text-base mt-3 max-w-2xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
