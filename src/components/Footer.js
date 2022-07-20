import React from "react";
import "../css/footer.css";
import socialsImg1 from "../assets/images/socials/email.png";
import socialsImg2 from "../assets/images/socials/linkedin.png";
import socialsImg3 from "../assets/images/socials/dribbble.png";
import socialsImg4 from "../assets/images/socials/github.png";
import socialsImg5 from "../assets/images/socials/frontend mentor.png";

const Footer = () => {
  return (
    <div id="contacts" className="footer-container">
      <img
        onClick={() => {
          window.open("mailto:kirumbaaugustinewambugu@gmail.com?subject=subject&body=body");
        }}
        src={socialsImg1}
        alt="email"
      />
      <img
        onClick={() => {
          window.open("https://www.linkedin.com/in/steen-toons/");
        }}
        src={socialsImg2}
        alt="linked in"
      />
      <img
        onClick={() => {
          window.open("https://dribbble.com/Steentoons");
        }}
        src={socialsImg3}
        alt="dribbble"
      />
      <img
        onClick={() => {
          window.open("https://github.com/Steentoons");
        }}
        src={socialsImg4}
        alt="github"
      />
      <img
        onClick={() => {
          window.open("https://www.frontendmentor.io/profile/Steentoons");
        }}
        src={socialsImg5}
        alt="frontend mentor"
      />
    </div>
  );
};

export default Footer;
