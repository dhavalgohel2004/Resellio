import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/dhaval 2 final-01.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="custom-sticky-header fixed w-full z-50 top-0 start-0">
      <div className="custom-container flex flex-wrap items-center justify-between px-3">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-[100px] object-cover object-center" alt="Resellio Logo" />
        </Link>

        {/* Login Button & Hamburger */}
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
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg 
              md:hidden dark:text-gray-400"
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

        {/* Navigation */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? 'block' : 'hidden'
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col py-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0">
            <li className='content-center'>
              <Link
                to="/"
                className="block py-2 px-3 text-white rounded header-links md:p-0 text-center hover:font-normal font-normal
                           relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                          after:bg-[#639CD9] after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </Link>
            </li>
            <li className='content-center'>
              <Link
                to="/about"
                className="block py-2 px-3 text-white rounded header-links md:p-0 hover:font-normal text-center
                           relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                          after:bg-[#639CD9] after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </Link>
            </li>
            <li className='content-center'>
              <Link
                to="/products"
                className="block py-2 px-3 text-white rounded header-links md:p-0 hover:font-normal text-center
                          relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                          after:bg-[#639CD9] after:transition-all after:duration-300 hover:after:w-full"
              >
                Products
              </Link>
            </li>
            <li className='content-center'>
              <Link
                to="/contact"
                className="block py-2 px-3 text-white rounded header-links md:p-0 hover:font-normal text-center
                          relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                          after:bg-[#639CD9] after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
