import React, { useState } from 'react';
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import yash_res_spring from '../assets/resumes/yash_res_spring.pdf';
import yash_resume_android from '../assets/resumes/yash_resume_android.pdf';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const toggleResumeOpen = () => {
    setIsResumeOpen(!isResumeOpen);
  };

  return (
    <header className="fixed top-0 w-full h-[10vh] z-10 bg-black bg-opacity-80 text-white shadow-lg">
      <div className="flex items-center justify-between h-full px-6 md:px-12">
        {/* Logo or Branding */}
        <h1 className="text-xl font-bold">MyPortfolio</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center font-normal space-x-8">
            <li><a href="#about-me" className="text-lg underline hover:text-yellow-300">About Me</a></li>
            <li><a href="#experience" className="text-lg underline hover:text-yellow-300">Work-Experience</a></li>
            <li><a href="#skills" className="text-lg underline hover:text-yellow-300">Skills</a></li>
            <li><a href="#projects" className="text-lg underline hover:text-yellow-300">Projects</a></li>
            <li>
            <div className="relative">
              {/* Dropdown Button */}
              <button
                onClick={toggleResumeOpen}
                className="flex items-center justify-center bg-yellow-300 py-2 px-4 rounded-full hover:bg-yellow-400 transition-all"
              >
                <p className="text-black font-raleway font-extrabold">Resume</p>
                <FaArrowRight style={{ color: 'black' }} className="ml-2" />
              </button>

              {/* Dropdown Menu */}
              {isResumeOpen && (
                <ul className="absolute text-center bg-white border rounded-lg shadow-md mt-2 w-full">
                  <li>
                    <a
                      href={yash_resume_android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 px-4 text-black hover:bg-yellow-200"
                    >
                      Android
                    </a>
                  </li>
                  <li>
                    <a
                      href={yash_res_spring}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 px-4 text-black hover:bg-yellow-200"
                    >
                      Backend
                    </a>
                  </li>
                </ul>
              )}
            </div>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-[10vh] left-0 w-full bg-black bg-opacity-80 text-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center font-normal space-y-6 py-6">
            <li><a href="#about-me" onClick={toggleMenu} className="text-lg underline hover:text-yellow-300">About Me</a></li>
            <li><a href="#experience" onClick={toggleMenu} className="text-lg underline hover:text-yellow-300">Work-Experience</a></li>
            <li><a href="#skills" onClick={toggleMenu} className="text-lg underline hover:text-yellow-300">Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu} className="text-lg underline hover:text-yellow-300">Projects</a></li>
            <li>
              <a
                href={yash_resume_android}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-yellow-300 text-black py-2 px-4 rounded-full hover:bg-yellow-400 transition-all"
              >
                Resume <FaArrowRight className="ml-2" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;