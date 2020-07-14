import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about">
      <div className="center">
        <h1>Who am I ?</h1>
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
          <h2>Angular</h2>
        </div>
        <div className="box">
          <h2>Java</h2>
        </div>
        <div className="box">
          <h2>React</h2>
        </div>
        <div className="box">
          <h2>Node</h2>
        </div>
      </div>
    </div>
  );
}
export default About;
