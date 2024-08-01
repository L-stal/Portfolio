import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="CV">CV</NavLink>
      <NavLink to="/">PORTFOLIO</NavLink>
      <NavLink to="Movies">CONTACT</NavLink>
    </nav>
  );
};
window.addEventListener("scroll", function () {
  var menu = document.querySelector(".menu");
  var scrollPosition = window.scrollY + 300;
  var pageHeight = window.innerHeight;
  var currentPage = Math.floor(scrollPosition / pageHeight);

  if (currentPage % 2 === 0) {
    menu.classList.remove("white");
    menu.classList.add("black");
  } else {
    menu.classList.remove("black");
    menu.classList.add("white");
  }
});

export default Navbar;
