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
              <div className="name">
                <div className="shimmer">
                  <p>./Leo Stålenhag</p>
                </div>
              </div>
              <Portfolio />
              <CV />
              <Contact />
            </div>
            <div className="footer">
              <p>^MENU^</p>
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

export default App;
