import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import CardGrid from "./CardGrid";
import IndustryGrid from "./Industries";
import PopularCourses from "./Courses";
import CourseOptions from "./Courseoptions";

function App() {
  return (
    <div>
      <Header />
      <Navbar/>
      <CardGrid/>
      <IndustryGrid/>
      <PopularCourses/>
      <CourseOptions/>
    </div>
  );
}

export default App;
