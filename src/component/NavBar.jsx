import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../component/SearchBar";
import BurgerMenu from "../component/BurgerMenu";
import MobileMenu from "./MobileMenu";
import "../styles/NavBar.css";
import MedicationIcon from "@mui/icons-material/Medication";
export default function NavBar() {
  const NavLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Contact Us", link: "/contact" },
    { title: "F.A.Q.", link: "/faq" },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleMobileMenuLinkClick = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <nav>
        <div className="brand">
          <MedicationIcon style={{ fontSize: 40, marginRight: 10 }} />
          <span className="brand-name">Brand-Name</span>
        </div>
        <div className="navlinks">
          {NavLinks.map((link, index) => (
            <NavLink
              to={link.link}
              key={index}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>
        <div className="search-tool">
          <SearchBar />
        </div>

        <BurgerMenu onClick={toggleNav} isOpen={isNavOpen} />
        <MobileMenu
          isOpen={isNavOpen}
          onLinkClick={handleMobileMenuLinkClick}
        />
      </nav>
    </>
  );
}
