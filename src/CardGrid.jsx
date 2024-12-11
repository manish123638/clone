import React from "react";
import backgroundImage from './images/background.jpg';

const CardGrid = () => {
  const cards = [
    {
      title: "Apprenticeship & Traineeships",
      subtitle: "User Choice Program",
      backgroundImage: "/path-to-uploaded-image1.jpg", 
      image: "/path-to-uploaded-image1.jpg", 
      button: "Find Out More",
    },
    {
      title: "Skills Assessment",
      subtitle: "Trade Recognition Australia",
      backgroundImage: "/path-to-uploaded-image2.jpg",
      image: "/path-to-uploaded-image2.jpg",
      button: "Find Out More",
    },
    {
      title: "VET in School Programs",
      subtitle: "",
      backgroundImage: "/path-to-uploaded-image3.jpg",
      image: "/path-to-uploaded-image3.jpg",
      button: "Find Out More",
    },
    {
      title: "Specialised Industry Short Courses",
      subtitle: "",
      backgroundImage: "/path-to-uploaded-image4.jpg",
      image: "/path-to-uploaded-image4.jpg",
      button: "Find Out More",
    },
    {
      title: "Pre-Employment Programs",
      subtitle: "",
      backgroundImage: "/path-to-uploaded-image5.jpg",
      image: "/path-to-uploaded-image5.jpg",
      button: "Find Out More",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg overflow-hidden relative ${
              index === 0 ? "bg-blue-900 text-white" : "text-white"
            }`}
            style={{
              backgroundImage: `url(${card.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {index === 0 && (
              <div className="absolute bottom-4 right-4">
                <img
                  src={card.image}
                  alt="Hero"
                  className="w-20 md:w-32 rounded-lg"
                />
              </div>
            )}
            <div className="bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-yellow-400">
                  {card.title}
                </h3>
                {card.subtitle && (
                  <p className="text-sm mt-2">{card.subtitle}</p>
                )}
              </div>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-orange-600">
                {card.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
          <img
            src="https://via.placeholder.com/150"
            alt="IntoWork Logo"
            className="h-12"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between border-t border-gray-300 pt-8">
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <img
            src="https://via.placeholder.com/150"
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

export { CardGrid };
