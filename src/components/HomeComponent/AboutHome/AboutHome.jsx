import React from "react";
import AboutOne from "../../../assets/Home/AboutAugmnetImage1.png";
import AboutTwo from "../../../assets/Home/AboutAugmnetImage2.png";
import "./AboutHome.css"; // Optional: add styles here
import Button from "../../../common/Button/Button";
import "../../../index.css";

const AboutHome = () => {
  return (
    <div className="row PaddingContainer d-flex justify-content-center align-items-center ">
      <div className="col-lg-6 " style={{height:'auto'}} >
        <div className="row d-flex justify-content-center align-items-center" >
          <div className=" image-container" style={{width:'600px'}}>
            <div className="about-image-main about-image-left">
              <img
                src={AboutOne}
                height="auto"
                className="img-fluid"
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
            <div className="row MarginBottomText1">
              <div className="col-12 text-center text-lg-start ">
                <h1 className="heading_primary">About Augmented</h1>
              </div>
            </div>
            <div className="row MarginBottomText1">
              <div className="col-12 text-center text-lg-start">
                <p className="text_primary">
                  We are a specialized software company at the forefront of
                  augmented reality (AR) technology, With a passion for
                  innovation and a deep understanding of the power of AR, we are
                  dedicated to creating exceptional digital{" "}
                </p>
              </div>
            </div>
            <div className="row  d-flex justify-content-center justify-content-lg-start" style={{}}>
                <div className="col-3 col-lg-3 text-center text-lg-start" style={{minWidth:'250px'}}>
                <Button name="Read More" Height="75px" FontStylte='heading_fifth_1' />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
