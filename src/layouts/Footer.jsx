import React from "react";
import Logo from "../common/Logo/Logo";
import "../index.css";

import LogoImg from "../assets/Home/Logo.png";
import ContactLogoleft1 from "../assets/Home/ContactLogoleft1.png";
import ContactLogoleft2 from "../assets/Home/ContactLogoleft2.png";
import ContactLogoleft3 from "../assets/Home/ContactLogoleft3.png";
import ContactLogoright1 from "../assets/Home/ContactLogoRight1.png";
import ContactLogoright2 from "../assets/Home/ContactLogoRight2.png";
import ContactLogoright3 from "../assets/Home/ContactLogoRight3.png";
const Footer = () => {
  return (
    <div className="row Container " style={{}}>
      <div className=" col-md-4">
        <div className="row">
          <div className="col-12">
            <img src={LogoImg} />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 text_paragraph_seventh">
            <p>
              A the core of our company is a passion for the transformative
              power of augmented reality (AR) and virtual reality (VR).
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-auto">
            <Logo logo={ContactLogoleft1} />
          </div>
          <div className="col-auto">
            <Logo logo={ContactLogoleft2} />
          </div>
          <div className="col-auto">
            <Logo logo={ContactLogoleft3} />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-6">
            <p className=" text_paragraph_eighth ">Company</p>
            <p className=" text_paragraph_tenth">About Us</p>
            <p className=" text_paragraph_tenth">Services</p>
            <p className=" text_paragraph_tenth">Products</p>
            <p className=" text_paragraph_tenth">Contact US</p>
            <p className=" text_paragraph_tenth">Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="row">
          <div className="col-12">
            <p className="text-start text_paragraph_eighth ">Contact Us</p>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-auto">
                    <Logo logo={ContactLogoright1} />
                  </div>
                  <div className="col-auto">
                    <p className="text_paragraph_ninth">
                      augmentedsol@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-2">
                <div className="row">
                  <div className="col-auto">
                    <Logo logo={ContactLogoright2} />
                  </div>
                  <div className="col-auto">
                    <p className="text_paragraph_ninth">+92 308 4846218</p>
                  </div>
                </div>
              </div>
              <div className="col-12  mt-2">
                <div className="row">
                  <div className="col-auto">
                    <Logo logo={ContactLogoright3} />
                  </div>
                  <div className="col-auto">
                    <p className="text_paragraph_ninth">
                      337 G Block Rehmanpura Muslim Town Lahore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
