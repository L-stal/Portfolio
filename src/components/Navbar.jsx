import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Ensure you import your CSS file

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const menu = document.querySelector(".navbar");
      const scrollPosition = window.scrollY + 10;
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
      <a href="#home">./Home/</a>
      <a href="#portfolio">./PORTFOLIO/</a>
      <a href="#cv">./CV/</a>
      <a href="#contact">./CONTACT/</a>
    </nav>
  );
};

export default Navbar;
