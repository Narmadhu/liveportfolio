import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about">
      <div className="center title">
        <h2>Who am I ?</h2>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem
          atque accusantium, enim aspernatur nobis magnam qui, ullam nesciunt
          quis possimus beatae, quisquam quos. Sed ratione optio consectetur
          nihil eos! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquam ipsum perspiciatis ea ipsam laborum provident veritatis
          suscipit impedit dolorem, repellendus neque mollitia ut minus
          repudiandae magni corporis in voluptatum modi?
        </h5>
      </div>
      <div className="grid">
        <div className="box">
          <h3>Angular</h3>
        </div>
        <div className="box">
          <h3>Java</h3>
        </div>
        <div className="box">
          <h3>React</h3>
        </div>
        <div className="box">
          <h3>Node</h3>
        </div>
      </div>
    </div>
  );
}
export default About;
