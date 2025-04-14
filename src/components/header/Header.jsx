import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/dhaval 2 final-01.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    if (isOpen) {
      nav.style.maxHeight = nav.scrollHeight + "px";
    } else {
      nav.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <nav className="custom-sticky-header fixed w-full z-50 top-0 start-0 bg-[#000]">
      <div className="custom-container flex flex-wrap items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-[100px] object-cover object-center" alt="Resellio Logo" />
        </Link>

        {/* Login & Hamburger */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            to="/login"
            className="custom-animated-btn font-outfit text-white font-medium px-7 py-2.5"
          >
            Login
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M1 1L16 13M1 13L16 1' : 'M1 1h15M1 7h15M1 13h15'}
              />
            </svg>
          </button>
        </div>

        {/* Animated Nav Menu */}
        <div
          ref={navRef}
          className="overflow-hidden transition-all duration-500 ease-in-out md:!max-h-fit w-full md:flex md:w-auto md:order-1"
          style={{ maxHeight: isOpen ? "1000px" : "0px" }} // maxHeight dynamically controlled
        >
          <ul className="flex flex-col mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0">
            {[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
            ].map((item, index) => (
              <li key={index} className="content-center">
                <Link
                  to={item.to}
                  className="block py-3 px-3 text-white border-b border-gray-600 md:border-b-0 rounded header-links md:p-0 text-center hover:font-normal font-normal
                            relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                            after:bg-[#639CD9] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
