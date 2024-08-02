import { useState, useEffect } from "react";
import "../styles/MobileMenu.css";

const MoblieMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [buttonColor, setButtonColor] = useState("black");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 10;
      const pageHeight = window.innerHeight;
      const currentPage = Math.floor(scrollPosition / pageHeight);

      if (currentPage % 2 === 0) {
        setButtonColor("black");
      } else {
        setButtonColor("white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="footer">
      <button className={`menu ${buttonColor}`} onClick={toggleMenu}>
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
