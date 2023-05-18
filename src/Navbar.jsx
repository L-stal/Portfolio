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

export default Navbar;
