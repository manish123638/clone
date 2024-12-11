import React from "react";

const industries = [
  { title: "Building and Construction", icon: "👷‍♂️" }, // Replace with actual icons if needed
  { title: "Automotive", icon: "🚗" },
  { title: "Electrotechnology", icon: "🔌" },
  { title: "Engineering", icon: "📐" },
  { title: "Plumbing", icon: "🚰" },
  { title: "Hospitality", icon: "🍴" },
  { title: "Business & WHS", icon: "🏢" },
];

const IndustryRow = () => {
  return (
    <div className="bg-white py-8">
      <h2 className="text-2xl font-semibold text-blue-900 text-center mb-6">
        Choose Your Industry
      </h2>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow w-40"
          >
            <div className="text-blue-900 text-4xl mb-4">{industry.icon}</div>
            <h3 className="text-lg font-medium text-blue-900 text-center">
              {industry.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryRow;
