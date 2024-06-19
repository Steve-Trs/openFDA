import "../styles/MobileMenu.css";
import { NavLink } from "react-router-dom";

export default function MobileMenu({ isOpen, onLinkClick }) {
  const MobileNavLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Contact Us", link: "/contact" },
    { title: "F.A.Q.", link: "/faq" },
  ];
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <ul className="mobile-nav-list">
          {MobileNavLinks.map((link, index) => (
            <li key={index} onClick={onLinkClick}>
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  isActive ? "mobile-nav-link active" : "mobile-nav-link"
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
