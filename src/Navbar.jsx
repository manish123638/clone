import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 flex justify-between items-center px-8 py-4 text-white">
      <div className="flex gap-8">
        <div className="relative group">
          <button className="flex items-center gap-1">
            Courses <span>▼</span>
          </button>
          <div className="absolute hidden group-hover:block bg-white text-blue-900 shadow-lg mt-2 rounded">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-blue-100">Course 1</li>
              <li className="px-4 py-2 hover:bg-blue-100">Course 2</li>
            </ul>
          </div>
        </div>
        <div className="relative group">
          <button className="flex items-center gap-1">
            Programs <span>▼</span>
          </button>
          <div className="absolute hidden group-hover:block bg-white text-blue-900 shadow-lg mt-2 rounded">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-blue-100">Program 1</li>
              <li className="px-4 py-2 hover:bg-blue-100">Program 2</li>
            </ul>
          </div>
        </div>
        <div className="relative group">
          <button className="flex items-center gap-1">
            Student Info <span>▼</span>
          </button>
          <div className="absolute hidden group-hover:block bg-white text-blue-900 shadow-lg mt-2 rounded">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-blue-100">Info 1</li>
              <li className="px-4 py-2 hover:bg-blue-100">Info 2</li>
            </ul>
          </div>
        </div>
        <button>Skills Assessments</button>
        <div className="relative group">
          <button className="flex items-center gap-1">
            About <span>▼</span>
          </button>
          <div className="absolute hidden group-hover:block bg-white text-blue-900 shadow-lg mt-2 rounded">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-blue-100">About Us</li>
              <li className="px-4 py-2 hover:bg-blue-100">Our Team</li>
            </ul>
          </div>
        </div>
        <button>Contact Us</button>
      </div>
      <div className="flex items-center bg-white text-red-900 rounded-full px-4 py-2 shadow-lg">
        <span className="mr-2">🔍</span>
        <input
          type="text"
          placeholder="Find a course..."
          className="focus:outline-none placeholder-blue-700 bg-transparent"
        />
      </div>
    </nav>
  );
};

export default Navbar;
