import React from "react";
import "./Experience.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 100,
  duration: 1000,
});

function Experience() {
  return (
    <div id="experience">
      <div className="center title">
        <h2>Experience</h2>
      </div>

      <div className="experience-total">
        <ul>
          <li>
            <span></span>
            <div className="experience-work" data-aos="fade-left">
              <div>HTML</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                quia officiis blanditiiset quae sapiente expedit
              </div>
            </div>
            <div className="date">
              <span>1.2.86</span>
              <span>2.4.87</span>
            </div>
          </li>
          <li>
            <span></span>
            <div className="experience-work" data-aos="fade-right">
              <div>CSS</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                quia officiis blanditiis et quae sapiente expedit.
              </div>
            </div>
            <div className="date">
              <span>1.2.86</span>
              <span>2.4.87</span>
            </div>
          </li>
          <li>
            <span></span>
            <div className="experience-work" data-aos="fade-left">
              <div>JavaScript</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                quia officiis blanditiis et quae sapiente expedit.
              </div>
            </div>
            <div className="date">
              <span>1.2.86</span>
              <span>2.4.87</span>
            </div>
          </li>
          <li>
            <span></span>
            <div className="experience-work" data-aos="fade-right">
              <div>Angular</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                quia officiis blanditiis et quae sapiente expedit.
              </div>
            </div>
            <div className="date">
              <span>1.2.86</span>
              <span>2.4.87</span>
            </div>
          </li>
          <li>
            <span></span>
            <div className="experience-work" data-aos="fade-left">
              <div>Java</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                quia officiis blanditiis et quae sapiente expedit.
              </div>
            </div>
            <div className="date">
              <span>1.2.86</span>
              <span>2.4.87</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Experience;
