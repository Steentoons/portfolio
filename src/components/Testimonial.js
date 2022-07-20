import React from "react";
import "../css/testimonial.css";
import avatarImg1 from "../assets/images/avatars/paul njoroge.png"
import avatarImg2 from "../assets/images/avatars/brian ngetich.png"

const Testimonial = () => {
  return (
    <div id="testimonial" className="testimonial-container">
      <div className="testimonial-title">TESTIMONIALS</div>
      <div className="testimonial-wrapper">
        <div className="testimonial-div">
          <div className="testimonial-div-shadow"></div>
          <div className="testimonial-div-element">
            <div className="testimonial-div-element-avatar">
                <img src={avatarImg1} alt="Paul Njoroge" />
            </div>
            <div className="testimonial-div-element-content">
            about running this application with administrator rights! about running this application with administrator rights! about running this application with administrator rights! about running this application with administrator rights! about running this application with administrator rights! about running this application with administrator about running this application with me
            </div>
            <div className="testimonial-div-element-person">
            <div className="testimonial-div-element-person-name">PAUL NJOROGE</div>
            <div className="testimonial-div-element-person-title">LETSHEGO HOLDINGS LTD</div>
            </div>
          </div>
        </div>
        <div className="testimonial-div">
          <div className="testimonial-div-shadow"></div>
          <div className="testimonial-div-element">
            <div className="testimonial-div-element-avatar">
                <img src={avatarImg2} alt="Paul Njoroge" />
            </div>
            <div className="testimonial-div-element-content">
            about running this application with administrator rights! about running this application with administrator rights! about running this application with administrator rights! about running this application with administrator rights! about running this application with administrator rights! about running this application with administrator about running this application with me
            </div>
            <div className="testimonial-div-element-person">
            <div className="testimonial-div-element-person-name">BRIAN NGETICH</div>
            <div className="testimonial-div-element-person-title">SKILLCAT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
