import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6 md:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
        <div className="lg:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
            ATTC (Australian Trade Training College) is proudly part of IntoWork Australia.
          </h2>
          <p className="text-base text-gray-700 mb-4">
            Our college has helped students into fulfilling and sustainable careers since 2006. Our nationally recognised qualifications, led by expert trainers, give you the key to unlock your future across a range of industries including Automotive, Business, Work Health and Safety (WHS), Cookery & Hospitality, Construction, Carpentry & Joinery, Electrotechnology, Engineering and Plumbing. 
            <a href="#" className="text-orange-500 underline">Read more</a>
          </p>
        </div>
        <div className="flex justify-center lg:justify-end items-center lg:w-1/2">
          <img width={308} height={45 }
            src="https://attc.org.au/wp-content/uploads/2024/06/IntoWork_logo_black-1.svg"
            alt="IntoWork Logo"
            
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between border-t border-gray-300 pt-8">
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <img
            src="https://attc.org.au/wp-content/uploads/2022/12/Australian-Trade-Training-College-ATTC-Logo.svg"
            alt="ATTC Logo"
            className="mb-4 h-10"
          />
          <div className="flex justify-between mb-4 bg-white p-4 rounded-lg">
            <div className="text-center">
              <p className="font-semibold text-orange-500">GENERAL ENQUIRIES</p>
              <p className="font-bold text-blue-900 text-lg">07 3414 5999</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-orange-500">SKILLS ASSESSMENT</p>
              <p className="font-bold text-blue-900 text-lg">1300 017 199</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">OUR LOCATIONS</h3>
            <ul className="text-gray-700 space-y-2">
              <li>📍 36 Kremzow Road Brendale QLD 4500</li>
              <li>📍 17 Armada Pl Banyo QLD 4014</li>
              <li>📍 1-5 Nestor Drive Meadowbrook QLD 4131</li>
              <li>📍 56 Duhig Street Toowoomba QLD 4350</li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <h3 className="font-bold text-gray-800 mb-2">Quick Links</h3>
          <ul className="text-gray-700 space-y-2">
            <li>➤ Short Courses</li>
            <li>➤ Certificate I & II</li>
            <li>➤ Certificate III</li>
            <li>➤ Certificate IV & Diploma</li>
            <li>➤ Programs</li>
            <li>➤ Certificate Verification</li>
            <li>➤ Payment Options</li>
          </ul>
        </div>
        <div className="lg:w-1/3">
          <ul className="text-gray-700 space-y-2">
            <li>➤ Contact</li>
            <li>➤ News</li>
            <li>➤ About</li>
            <li>➤ Student Handbook</li>
            <li>➤ Policies & Procedures</li>
            <li>➤ IntoWork Privacy Policy</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-900 text-lg">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-900 text-lg">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-blue-900 text-lg">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-red-600 text-white py-4 mt-8">
        <p className="text-xs text-left pl-4">
          Copyright © 2024 Australian Trade Training College. All Rights Reserved RTO 31399 | ABN 53 139 076 636
        </p>
      </div>
    </footer>
  );
};

export default Footer;
