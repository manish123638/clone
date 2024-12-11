import React from "react";
import backgroundImage from './images/background.jpg';
const CardGrid = () => {
  const cards = [
    {
      title: "Apprenticeship & Traineeships",
      subtitle: "User Choice Program",
      backgroundImage: {backgroundImage}, // Background image
      image: "C:/Users/Manish1/Desktop/Intern/clone3/clone/src/images/1st.png", // Side hero image
      button: "Find Out More",
    },
    {
      title: "Skills Assessment",
      subtitle: "Trade Recognition Australia",
      backgroundImage: "C:/Users/Manish1/Desktop/Intern/clone3/clone/src/images/background.jpg",
      image: "/path-to-image2.jpg",
      button: "Find Out More",
    },
    {
      title: "VET in School Programs",
      subtitle: "",
      backgroundImage: "C:/Users/Manish1/Desktop/Intern/clone3/clone/src/images/background.jpg",
      image: "/path-to-image3.jpg",
      button: "Find Out More",
    },
    {
      title: "Specialised Industry Short Courses",
      subtitle: "",
      backgroundImage: "C:/Users/Manish1/Desktop/Intern/clone3/clone/src/images/background.jpg",
      image: "/path-to-image4.jpg",
      button: "Find Out More",
    },
    {
      title: "Pre-Employment Programs",
      subtitle: "",
      backgroundImage: "C:/Users/Manish1/Desktop/Intern/clone3/clone/src/images/background.jpg",
      image: "/path-to-image5.jpg",
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
              backgroundImage: index === 0
                            ? `url(${card.backgroundImage})`
              : `url(${card.image})`,
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

export default CardGrid;