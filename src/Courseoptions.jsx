import React from "react";

const CourseOptions = () => {
  const courses = [
    {
      title: "Apprenticeship & Traineeship",
      description:
        "Our Apprenticeship and Traineeship programs, completed under the User Choice program, allow you to work on the job while studying. These programs serve as the entry-level qualification required for employment in various industry sectors.",
      link: "#",
      image: "https://attc.org.au/wp-content/uploads/2024/06/Apprenticeship-Traineeship-Thumb.jpg" 
    },
    {
      title: "Skills Assessment",
      description:
        "A Skills Assessment is a crucial step in determining the recognition of your overseas skills and trade qualifications in Australia, ensuring that you possess the necessary skills and experience to work at the trade level in your occupation within the country.",
      link: "#",
      image: "https://attc.org.au/wp-content/uploads/2024/06/Skills-Assessment-Thumb.jpg" 
    },
    {
      title: "VET in School",
      description:
        "Vocational Education and Training in Schools (VETiS) is for senior school students wanting to begin a trade career while still in high school. Gain practical experience, increase your employment prospects and get ahead of the crowd – all before graduation.",
      link: "#",
      image: "https://attc.org.au/wp-content/uploads/2024/06/VET-in-School-Thumb.jpg" 
    },
    {
      title: "Short Courses",
      description:
        "Short courses enrich your skillset and can provide specialised skills for your industry. We offer specialised industry short courses in Automotive, Business and WHS, Construction, Carpentry and Joinery, Cookery and Hospitality, Electrotechnology, Engineering and Plumbing.",
      link: "#",
      image: "https://attc.org.au/wp-content/uploads/2024/06/Short-Courses-Thumb.jpg" 
    },
    {
      title: "Pre-Employment Programs",
      description:
        "The Certificate 3 Guarantee Program provides a QLD Government subsidy for selected qualifications, allowing eligible Queenslanders to obtain their first post-school certificate III level qualification under the Vocational Education and Training Investment Plan.",
      link: "#",
      image: "https://attc.org.au/wp-content/uploads/2024/06/Pre-Employment-Thumb.jpg" 
    },
    {
      title: "Student Information",
      description:
        "We offer a wide range of benefits to support your learning journey. Our online training portals provide convenient access to course materials, while our detailed course duration information helps you plan your studies effectively.",
      link: "#",
      image: "https://via.placeholder.com/150" 
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Course Options</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow relative ${
              index === 5 ? "bg-blue-800 text-white" : "bg-white"
            }`}
            style={index === 5 ? { backgroundImage: 'url(https://attc.org.au/wp-content/uploads/2024/06/Student-Information-Background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
          >
            {index !== 5 && (
              <img
                src={course.image}
                alt={course.title}
                className="w-16 h-16 rounded-full mb-4 mx-auto"
              />
            )}
            <h3 className="text-xl font-semibold mb-4 text-center">{course.title}</h3>
            <p className="text-sm mb-6 text-center">{course.description}</p>
            <a
              href={course.link}
              className={`inline-block px-4 py-2 text-sm font-medium rounded ${
                index === 5
                  ? "bg-white text-blue-800 hover:bg-gray-100"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
            >
              Find Out More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseOptions;
