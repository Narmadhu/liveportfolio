import React from "react";
import Nav from "./page/Nav";
import Home from "./page/Home";
import About from "./page/About";
import Experience from "./page/Experience";
import Work from "./page/Work";
import Contact from "./page/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
