import React from "react";
import logo from './images/logo.jpg';

const Header = () => {
  return (
    <header>
     
      <div className="bg-red-600 text-white text-center py-2 text-sm font-light">
        Begin your trade, your way with us today.
      </div>

     
      <div className="bg-white flex flex-col md:flex-row justify-between items-center px-6 py-4 shadow-md">
        
        <div className="flex items-center space-x-2">
          <img
            src={logo }
            alt="Australian Trade Training College"
            className="h-12"
          />
          <span className="text-xl font-bold text-gray-800">
            Australian <span className="text-orange-500">Trade</span> Training College
          </span>
        </div>

       
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-800 text-sm">
         
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-orange-500">📞 GENERAL ENQUIRIES</span>
            <span>07 3414 5999</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-orange-500">📞 SKILLS ASSESSMENT</span>
            <span>1300 017 199</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
