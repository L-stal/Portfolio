import { useState } from "react";
import "../styles/MobileMenu.css";

const MoblieMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="footer">
      <button className="menu" onClick={toggleMenu}>
        MENU
      </button>
      <ul className={`dropdown-content ${isMenuOpen ? "show" : ""}`}>
        <li>
          <a href="#home" onClick={toggleMenu}>
            HOME
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={toggleMenu}>
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#cv" onClick={toggleMenu}>
            CV
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MoblieMenu;
