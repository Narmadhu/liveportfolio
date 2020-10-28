import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div id="home">
        <div className="font" data-aos="fade-right">
          <h3>Hi !</h3>
          <h3> I am Naveen </h3>
          <h1>Web developer</h1>
        </div>
        <img src="/img/naveen.jpg" alt="" data-aos="fade-left" />
      </div>
    </div>
  );
}

export default Home;
