import React from "react";

const Call = () => {
  return (
    <div className="bg-yellow-400 py-10 px-4 md:px-20 flex flex-col md:flex-row justify-between items-center rounded-lg">
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
          Begin your trade, your way with us today.
        </h2>
        <p className="text-base text-blue-900">
          <a href="#" className="underline font-medium">
            Contact us
          </a>{" "}
          today to discuss your learning needs and style so we can deliver a course that best meets your needs.
        </p>
      </div>
      <div className="flex space-x-4">
        <a
          href="#"
          className="bg-blue-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-800 transition"
        >
          READ OUR FAQs ➤
        </a>
        <a
          href="#"
          className="bg-red-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-red-500 transition"
        >
          CONTACT US ➤
        </a>
      </div>
    </div>
  );
};

export default Call;
