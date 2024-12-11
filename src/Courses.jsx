import React from "react";
import course1 from './images/course1.png';
import course2 from './images/course2.png';
import course3 from './images/course3.png';
import course4 from './images/course4.png';
import shorts1 from './images/shorts1.png';
import shorts2 from './images/shorts2.png';
import shorts3 from './images/shorts3.png';
import shorts4 from './images/shorts4.png';

const courses = [
  {
    type: "SHORT",
    title: "Licence to Erect, Alter and Dismantle Scaffolding Basic Level",
    description:
      "The Basic Scaffolding course provides students with the skills and knowledge necessary to safely erect, alter, and dismantle scaffolding in...",
    src: shorts1,
  },
  {
    type: "SHORT",
    title: "Health and Safety Representative",
    description:
      "This non-accredited training is approved by Workplace Health and Safety Queensland for delivery by ATTC for WHS Representatives through the...",
    src: shorts2,
  },
  {
    type: "SHORT",
    title: "Licence to operate a slewing mobile crane (up to 60 tonnes)",
    description:
      "This course or unit of competency often referred to in industries as a C6 crane ticket, includes the theoretical and...",
    src: shorts3,
  },
  {
    type: "SHORT",
    title: "Licence to perform dogging",
    description:
      "This course will give you the necessary skills and knowledge to undertake the duties of a dogman. You will learn...",
    src: shorts4,
  },
  {
    type: "CERTIFICATE",
    title: "Certificate II in Construction Pathways",
    description:
      "The Certificate II in Construction Pathways has been designed to cover essential WHS requirements, while allowing the students to...",
    src: course1,
  },
  {
    type: "CERTIFICATE",
    title: "Certificate IV in Building and Construction",
    description:
      "The Certificate IV in Building and Construction reflects the role of builders, site managers, and managers of small to...",
    src: course2,
  },
  {
    type: "CERTIFICATE",
    title: "Certificate II in Cookery",
    description:
      "The Certificate II in Cookery reflects the role of individuals working in kitchens who use a defined and limited...",
    src: course3,
  },
  {
    type: "CERTIFICATE",
    title: "Certificate IV in Project Management Practice",
    description:
      "The Certificate IV in Project Management Practice is a qualification aimed to provide the training and skills required for...",
    src: course4,
  },
];

const PopularCourses = () => {
  return (
    <div className="bg-white py-12 px-6">
      
      <h2 className="text-2xl font-semibold text-blue-900 text-center mb-6">
        Popular Courses
      </h2>
      <div className="border-t-2 border-dotted border-blue-100 mb-6"></div>

     
      <div className="relative overflow-hidden">
        <div className="animate-scroll flex gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={course.src}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <span
                  className={`${
                    course.type === "SHORT"
                      ? "bg-yellow-400"
                      : "bg-green-400"
                  } text-xs font-semibold px-2 py-1 rounded text-white`}
                >
                  {course.type}
                </span>
                <h3 className="text-blue-900 font-bold text-lg mt-3">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {course.description}
                </p>
                <button className="text-orange-500 font-semibold mt-4 inline-flex items-center">
                  VIEW COURSE
                  <span className="ml-2">&#8250;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
