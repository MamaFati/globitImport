import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { IoClose, IoMenu, IoLogoTiktok } from "react-icons/io5";
import logo from "../assets/IMG-20250308-WA0016-removebg-preview.png";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us", hasDropdown: true },
  { path: "/services", label: "Services", hasDropdown: true },
  { path: "/contact", label: "Contact Us" },
  { path: "/news", label: "News & Resources" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setExpandedIndex(null);
  };

  const toggleDropdown = (index) =>
    setExpandedIndex(expandedIndex === index ? null : index);

  const navLinkClasses = ({ isActive }) =>
    `block py-2 px-1 lg:px-4 md:px-4 text-lg font-medium transition-colors ${
      isActive ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-500"
    }`;

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 font-serif">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center" onClick={closeMenu}>
          <img src={logo} className="h-16 w-auto md:h-16" alt="Logo" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={navLinkClasses}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              navigate("/appointment");
            }}
            className="py-2 px-6 text-white bg-blue-500 rounded-md hover:text-grey transition"
          >
            Get Started
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <IoMenu size={30} />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-50  bg-opacity-50 flex justify-end z-50">
          {/* Sliding Panel */}
          <div
            className={`bg-gray-100 text-gray-700 flex flex-col items-center justify-center w-[80%] h-full transition-transform duration-500 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="absolute top-5 right-5 p-2 rounded-full border border-gray-700"
            >
              <IoClose size={30} />
            </button>

            {/* Menu Items */}
            <ul className="space-y-6 text-center text-xl font-medium">
              {navItems.map((item, index) => (
                <li key={item.path}>
                  <div
                    className="flex items-center justify-center gap-2 cursor-pointer"
                    onClick={() =>
                      item.hasDropdown ? toggleDropdown(index) : closeMenu()
                    }
                  >
                    <NavLink
                      to={item.path}
                      className="hover:text-blue-500"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </NavLink>
                  </div>
                </li>
              ))}

              {/* Call to Action */}
              <li>
                <button
                  onClick={() => {
                    closeMenu();
                    navigate("/appointment");
                  }}
                  className="py-2 px-6 text-white bg-blue-500 rounded-md mt-4"
                >
                  Get Started
                </button>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-10 text-lg text-gray-700">
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
              <FaYoutube />
              <IoLogoTiktok />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
