import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/IMG-20250308-WA0016-removebg-preview.png";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Function to set active link styles
  const navLinkClasses = ({ isActive }) =>
    `block py-2 px-4 text-lg font-medium transition-colors ${
      isActive ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-500"
    }`;

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 font-serif">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center" onClick={closeMenu}>
          <img src={logo} className="h-12 w-auto md:h-16" alt="Logo" />
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <div
          className={`absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-white 
          md:flex md:items-center md:space-x-8 transition-all duration-300 ease-in-out 
          ${isOpen ? "block" : "hidden"} md:block`}
        >
          <ul className="flex flex-col md:flex-row text-center md:text-left">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={navLinkClasses}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  closeMenu();
                  navigate("/appointment");
                }}
                className="py-2 px-6 text-white bg-blue-500 rounded-md hover:text-grey transition"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
