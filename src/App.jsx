import { useState } from "react";
import CV from "./pages/CV.jsx";
import Contact from "./pages/Contact.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="background">
        <BrowserRouter>
          <div className="main">
            <div className="body">
              <div className="name" id="home">
                <div className="status">
                  <p>
                    STATUS:
                    <br />
                    Open to work
                    <br /> Hobby Projects
                  </p>
                </div>
                <div className="shimmer">
                  <p>
                    Leo Stålenhag
                    <br />
                    .NET FULLSTACK
                  </p>
                  <br />
                  ASP.NET | EF | SQL | C# | React | JS/TS
                  <br />
                  and more.
                </div>
              </div>
              <Portfolio />
              <CV />
              <Contact />
            </div>
            <div className="footer">
              <button className="menu" onClick={toggleDropdown}>
                MENU
              </button>
              <ul className="dropdown-content" id="dropdown">
                <li>
                  <a className="home" href="#home" onClick={toggleDropdown}>
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    className="project"
                    href="#portfolio"
                    onClick={toggleDropdown}
                  >
                    PROJECTS
                  </a>
                </li>
                <li>
                  <a className="cv" href="#cv" onClick={toggleDropdown}>
                    CV
                  </a>
                </li>
                <li>
                  <a
                    className="contact"
                    href="#contact"
                    onClick={toggleDropdown}
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/CV" element={<CV />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdown");
  dropdownContent.classList.toggle("show");
}

export default App;
