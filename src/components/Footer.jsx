import React from "react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa"; // For GitHub and LinkedIn
import { FaHandPointLeft } from "react-icons/fa6";
import { GiClick } from "react-icons/gi";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si"; // For LeetCode and GeeksforGeeks

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] py-10 px-4 mt-2 text-white">
      <div className="">
        {/* Email */}
        <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=code.yash25@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center text-blue-500 underline">
              <p className="text-sm font-medium text-blue-400 hover:scale-105">code.yash25@gmail.com</p>
              <FaHandPointLeft className="ml-2 animate-ping" />
            </div>
          </a>

        {/* Icons */}
        <div className="flex justify-center space-x-6 text-xl mt-3">
          {/* GitHub */}
          <a
            href="https://github.com/YashSingh25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yash-singh-a73bb220b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/hustleryash25/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode />
          </a>
          {/* GeeksforGeeks */}
          <a
            href="https://www.geeksforgeeks.org/user/hustler0lb3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGeeksforgeeks />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;