import React from "react";
import "../css/about.css";
import aboutBackgroundImg from "../assets/images/triangle bg.png"

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-title">
        ABOUT <span>AUGUSTINE</span>
      </div>
      <div className="about-content">
      I am a front-end developer for the past 3 years creating responsive websites using web technologies. Started my programming journey with pure HTML and CSS, growing to use different web frameworks to both make current websites and also utilize the best solutions developed over time. Figma is my go-to design software to not only do the web designs but also use it to build pixel-perfect, desktop-first/mobile-first responsive websites.  <br /> <br />

Recently, I have been working with React Js, Redux, Typescript, and Vanilla Js. I love working with React Js because of its freedom of coding patterns, multiple dependencies, and using Js to do the logic. I also prefer using Jest for the unit/integration tests, and Cypress for the end-to-end testing. Working on both to better approach TDD to reduce site breaks, and improve my code structure and refactoring patterns. 
      </div>
      {/* <div className="about-background-img">
            <img src={aboutBackgroundImg} alt="triangle bg" />
        </div> */}
    </div>
  );
};

export default About;
