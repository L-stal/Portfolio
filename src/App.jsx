import { useState } from "react";
import CV from "./pages/CV.jsx";
import Contact from "./pages/Contact.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ScrollIndicator from "./components/ScrollIndicator";
import Navbar from "./components/Navbar";
import MoblieMenu from "./components/MobileMenu.jsx";

function App() {
  return (
    <div className="body">
      <div className="background">
        <BrowserRouter>
          <Navbar />
          <MoblieMenu />
          <ScrollIndicator />
          <div className="main">
            <section id="Home">
              <Home />
            </section>
            <section id="Portfolio">
              <Portfolio />
            </section>
            <section id="Cv">
              <CV />
            </section>
            <section id="Contact">
              <Contact />
            </section>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
