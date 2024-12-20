import React from "react";
import HeroSection from "../components/HomeComponent/HeroSection/HeroSection";
import "../index.css";
import AboutHome from "../components/HomeComponent/AboutHome/AboutHome";
import ServicesHome from "../components/HomeComponent/ServicesHome/ServicesHome";
const Home = () => {
  return (
    <>
      <div className="row Container">
        <div className="col-12">
          <div className="row">
            <div className="col-12" style={{}}>
              <HeroSection />
            </div>
          </div>
          <div className="row " style={{marginTop:"100px"}}>
            <div className="col-12 ">
               <AboutHome/>
            </div>
          </div>
          <div className="row " style={{marginTop:"100px"}}>
            <div className="col-12 ">
               <ServicesHome/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
