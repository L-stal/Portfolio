import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../styles/Navbar.css"; // Ensure you import your CSS file

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const menu = document.querySelector(".navbar");
      const scrollPosition = window.scrollY + 300;
      const pageHeight = window.innerHeight;
      const currentPage = Math.floor(scrollPosition / pageHeight);

      if (currentPage % 2 === 0) {
        menu.classList.remove("white");
        menu.classList.add("black");
      } else {
        menu.classList.remove("black");
        menu.classList.add("white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="/pages/CV">CV</Link>
      <Link to="/">PORTFOLIO</Link>
      <Link to="/Contact">CONTACT</Link>
    </nav>
  );
};

export default Navbar;
