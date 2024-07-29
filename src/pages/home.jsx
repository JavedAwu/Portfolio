import React from "react";
import { ProjectList } from "../constant/data";
import { Link } from "react-router-dom";
import AllProjects from "../components/allprojects";
import AboutMe from "../components/aboutme";
import Experience from "../components/experience";

const Home = () => {
  return (
    <>
    <AboutMe/>
    <Experience/>
      <AllProjects/>
    </>
  );
};



export default Home;
