import React from "react";
import personImage1 from './images/1st.png'; 
import personImage2 from './images/2nd.png'; 
import personImage3 from './images/3rd.png'; 
import personImage4 from './images/4th.png'; 
import personImage5 from './images/5th.png'; 
import backgroundImage from './images/background.jpg'; 

const CardGrid = () => {
  const cards = [
    {
      title: "Apprenticeship & Traineeships",
      subtitle: "User Choice Program",
      backgroundImage: backgroundImage,
      personImage: personImage1,
      button: "Find Out More",
    },
    {
      title: "Skills Assessment",
      subtitle: "Trade Recognition Australia",
      backgroundImage: backgroundImage,
      personImage: personImage2, 
      button: "Find Out More",
    },
    {
      title: "VET in School Programs",
      subtitle: "",
      backgroundImage: backgroundImage,
      personImage: personImage3, 
      button: "Find Out More",
    },
    {
      title: "Specialised Industry Short Courses",
      subtitle: "",
      backgroundImage: backgroundImage,
      personImage: personImage4, 
      button: "Find Out More",
    },
    {
      title: "Pre-Employment Programs",
      subtitle: "",
      backgroundImage: backgroundImage,
      personImage: personImage5, 
      button: "Find Out More",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="grid grid-cols-1 gap-6 px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cards.slice(0, 2).map((card, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-lg overflow-hidden text-white"
              style={{
                backgroundImage: `url(${card.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "320px", 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-4xl font-bold text-yellow-400">
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <p className="text-2xl mt-2 text-white">{card.subtitle}</p>
                  )}
                </div>
                <button className="self-start bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600">
                  {card.button}
                </button>
              </div>
              <img
                src={card.personImage}
                alt="Person"
                className="absolute bottom-0 right-0 w-48 h-auto"
              />
            </div>
          ))}
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.slice(2).map((card, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-lg overflow-hidden text-white"
              style={{
                backgroundImage: `url(${card.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "250px", 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-between p-4">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400">
                    {card.title}
                  </h3>
                </div>
                <button className="self-start bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600">
                  {card.button}
                </button>
              </div>
              <img
                src={card.personImage}
                alt="Person"
                className="absolute bottom-0 right-0 w-30 h-auto" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
