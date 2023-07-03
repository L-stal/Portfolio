import Navbar from "./Navbar";
import CV from "./pages/CV.jsx";
import Contact from "./pages/Contact.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
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
                    Looking for
                    <br /> an internship.{" "}
                  </p>
                </div>
                <div className="shimmer">
                  <p>
                    ./Leo Stålenhag
                    <br />
                    .NET FULL STACK
                  </p>
                </div>
              </div>
              <Portfolio />
              <CV />
              <Contact />
            </div>
            <div className="footer">
              <button className="menu" onClick={toggleDropdown}>
                ^MENU^
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
            <Route path="/Portfolio" element={<Portfolio />} />
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
