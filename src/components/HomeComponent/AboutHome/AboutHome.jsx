import React from "react";
import AboutOne from "../../../assets/Home/AboutAugmnetImage1.png";
import AboutTwo from "../../../assets/Home/AboutAugmnetImage2.png";
import "./AboutHome.css"; // Optional: add styles here
import Button from "../../../common/Button/Button";
import "../../../index.css"
const AboutHome = () => {
  return (
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-lg-6" >
        <div className="row d-flex justify-content-center align-items-center">
          <div className=" image-container" style={{width:'550px'}}>
            <div className="about-image-main about-image-left">
              <img
                src={AboutOne}
                height="auto"
                width="100%"
                alt="About One"
              />
            </div>
            <div className="about-image-main about-image-right">
              <img
                src={AboutTwo}
                height="auto"
                width="100%"
                className="img-fluid"
                alt="About Two"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-3 ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12">
            <div className="row mb-3 mb-lg-5">
              <div className="col-12 text-center text-lg-start ">
                <h1 className="text_primary">About Augmented</h1>
              </div>
            </div>
            <div className="row mb-3 mb-lg-5">
              <div className="col-12 text-center text-lg-start">
                <p className="text_paragraph">
                  We are a specialized software company at the forefront of
                  augmented reality (AR) technology, With a passion for
                  innovation and a deep understanding of the power of AR, we are
                  dedicated to creating exceptional digital{" "}
                </p>
              </div>
            </div>
            <div className="row d-flex justify-content-start">
                <div className="col-lg-6 text-center text-lg-start">
                <Button name="Read More" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
