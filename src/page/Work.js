import React from "react";
import "./Work.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Work() {
  return (
    <div id="work">
      <div className="center title">
        <h2>Work</h2>
        <h5>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores
          nulla esse debitis officiis quaerat. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </h5>
      </div>
      <div className="container grid-3">
        <div data-aos="fade-up">
          <a href="/img/people.jpg" target="_blank">
            <img className="work-img" src="/img/people.jpg" alt="" />
          </a>
          <div className="work-name">
            <a href="/img/people.jpg" target="_blank">
              <span>Learn more</span>
            </a>
          </div>
        </div>
        <div data-aos="fade-up">
          <a href="/img/people.jpg" target="_blank">
            <img className="work-img" src="/img/people.jpg" alt="" />
          </a>
          <div className="work-name">
            <a href="/img/people.jpg" target="_blank">
              <span>Learn more</span>
            </a>
          </div>
        </div>
        <div data-aos="fade-up">
          <a href="/img/people.jpg" target="_blank">
            <img className="work-img" src="/img/people.jpg" alt="" />
          </a>
          <div className="work-name">
            <a href="/img/people.jpg" target="_blank">
              <span>Learn more</span>
            </a>
          </div>
        </div>
        <div data-aos="fade-up">
          <a href="/img/people.jpg" target="_blank">
            <img className="work-img" src="/img/people.jpg" alt="" />
          </a>
          <div className="work-name">
            <a href="/img/people.jpg" target="_blank">
              <span>Learn more</span>
            </a>
          </div>
        </div>
        <div data-aos="fade-up">
          <a href="/img/people.jpg" target="_blank">
            <img className="work-img" src="/img/people.jpg" alt="" />
          </a>
          <div className="work-name">
            <a href="/img/people.jpg" target="_blank">
              <span>Learn more</span>
            </a>
          </div>
        </div>
        <div data-aos="fade-up">
          <a href="/img/people.jpg" target="_blank">
            <img className="work-img" src="/img/people.jpg" alt="" />
          </a>
          <div className="work-name">
            <a href="/img/people.jpg" target="_blank">
              <span>Learn more</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Work;
