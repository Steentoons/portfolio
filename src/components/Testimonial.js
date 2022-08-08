import React from "react";
import "../css/testimonial.css";
import avatarImg1 from "../assets/images/avatars/paul njoroge.png";
import avatarImg2 from "../assets/images/avatars/brian ngetich.png";

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
            Throughout the project, Augustine supported me and exceeded my expectations in every way. Our experience was personal and friendly. His ability to identify and present key requirements in an imaginative and creative way gave me confidence in him. Augustine understood our client's website needs better than we did. He complimented our vision perfectly so I would definitely recommend him highly enough. Without a doubt one of the most talented programmers out there. I always go back to Augustine. Smart, reliable, and professional. You won't be disappointed.
            </div>
            <div className="testimonial-div-element-person">
              <div className="testimonial-div-element-person-name">
                PAUL NJOROGE
              </div>
              <div className="testimonial-div-element-person-title">
                LETSHEGO HOLDINGS LTD
              </div>
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
              It takes patience to learn something new, but it takes monumental
              effort to keep on trying despite numerous failures, Augustine has
              demonstrated both of the above, having been there to watch him
              grow his skills has been one of the little pleasures of my life.
              He is an excellent employee and an even better friend who has
              demonstrated what sheer willpower is. Moreover, he has
              consistently shown a willingness to learn and has continuously
              delivered on his task in a timely manner, I couldn't ask for a
              better friend.
            </div>
            <div className="testimonial-div-element-person">
              <div className="testimonial-div-element-person-name">
                BRIAN NGETICH
              </div>
              <div className="testimonial-div-element-person-title">
                SKILLCAT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
