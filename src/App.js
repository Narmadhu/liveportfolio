import React from "react";
import Nav from "./page/Nav";
import Home from "./page/Home";
import Work from "./page/Work";
import About from "./page/About";
import Contact from "./page/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;
