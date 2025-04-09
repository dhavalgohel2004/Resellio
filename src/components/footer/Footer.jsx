import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/dhaval 2 final-01.png";

const Footer = () => {
  return (
    <footer className="bg-[#342056] text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div>
            <img src={Logo} alt="Resellio Logo" className="w-[150px] mb-4" />
            <p className="font-outfit text-sm leading-6 text-gray-300">
              A platform to buy and sell second-hand products effortlessly.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-outfit font-medium text-lg mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><Link className="hover:text-[#639CD9] font-outfit text-base" to="/">Home</Link></li>
              <li><Link className="hover:text-[#639CD9] font-outfit text-base" to="/products">Products</Link></li>
              <li><Link className="hover:text-[#639CD9] font-outfit text-base" to="/about">About</Link></li>
              <li><Link className="hover:text-[#639CD9] font-outfit text-base" to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit font-medium text-lg mb-4">Contact Us</h4>
            <p className="font-outfit text-gray-300 text-sm">
              <a href="mailto:sell@resellio.com" className="hover:text-[#639CD9] text-base">sell@resellio.com</a>
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-outfit font-medium text-lg mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#639CD9] flex items-center gap-2 font-outfit text-base">
                  <FontAwesomeIcon icon={faFacebookF} />
                  <span>Resellio</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#639CD9] flex items-center gap-2 font-outfit text-base">
                  <FontAwesomeIcon icon={faTwitter} />
                  <span>Tweet At Resellio</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#639CD9] flex items-center gap-2 font-outfit text-base">
                  <FontAwesomeIcon icon={faInstagram} />
                  <span>Resellio</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#639CD9] flex items-center gap-2 font-outfit text-base">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                  <span>Connect With Resellio</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-10 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Resellio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;
