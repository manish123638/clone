import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import CardGrid from "./CardGrid";
import IndustryGrid from "./Industries";
import PopularCourses from "./Courses";
import CourseOptions from "./Courseoptions";
import Call from "./Call";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar/>
      <CardGrid/>
      <IndustryGrid/>
      <PopularCourses/>
      <CourseOptions/>
      <Call/>
      <Footer/>
    </div>
  );
}

export default App;
