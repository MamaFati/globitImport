import "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/IMG-20250308-WA0016-removebg-preview.png";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const LogoImg = () => {
  return <img src={logo} className="h-12 w-auto md:h-32" alt="Logo" />;
};
const ContactUs = () => {
  return (
    <div className="text-center md:text-left">
      <h3 className="text-lg font-bold mb-2">Contact Info</h3>
      <p className="text-sm mb-2">
        <a
          href="https://www.google.com/maps/search/?api=1&query=15th+Sun+Street+Ring+Road+Accra+Ghana"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          Accra: 15th Sun Street, Ring Road
        </a>
      </p>
      <p className="text-sm mb-2">
        <a
          href="https://www.google.com/maps/search/?api=1&query=WR3+Vole+Street+Tanoso+Topre+Kumasi+Ghana"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          Kumasi: WR3 Vole Street, Tanoso - Topre
        </a>
      </p>
      <p className="text-sm mb-2">
        <a
          href="https://www.google.com/maps/search/?api=1&query=广州市白云区白云湖街道夏花二路961号"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          China warehouse 仓库地址： 广东省广州市白云区白云湖街道
          夏花二路961号恒河沙617仓 :Globit 18665713153
        </a>
      </p>
      <p className="text-sm mb-2">
        <a href="tel:+233 55 119 3503" className="hover:text-gray-400">
          P: +233 55 119 3503
        </a>{" "}
        |
        {/* <a href="tel:+233544347239" className="hover:text-gray-400">
          +233 544 347 239
        </a> */}
      </p>
    </div>
  );
};

const QuickLinks = () => {
  return (
    <div className="text-center">
      <h3 className="text-lg font-bold mb-2">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          {/* <Link to="/" className="text-sm hover:text-gray-400">
            Home
          </Link> */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-gray-500  font-bold" : "text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-gray-500  font-bold" : "text-white"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-gray-500  font-bold" : "text-white"
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-gray-500 font-bold" : "text-white"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const SocialLinks = () => {
  const socialIcons = [
    {
      icon: <FaFacebook size={24} />,
      link: "https://www.facebook.com/share/1Bcbv4oah6/",
    },
    { icon: <FaTwitter size={24} />, link: "#" },
    {
      icon: <FaInstagram size={24} />,
      link: "https://www.instagram.com/globit_imports/",
    },
    { icon: <FaLinkedin size={24} />, link: "#" },
  ];

  return (
    <div className="text-center md:text-right">
      <h3 className="text-lg font-bold mb-4">Follow Us</h3>
      <div className="flex justify-center md:justify-end space-x-4">
        {socialIcons.map(({ icon, link }, index) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            href={link}
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-2">
          <LogoImg />
          <ContactUs />
          <QuickLinks />
          <SocialLinks />
        </div>
        <div className="border-t border-white mt-2 pt-4 text-center">
          <p className="text-sm">© 2025 Globit Import. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
