import React from 'react';
import { androidProjects } from './Utils';
import { FaArrowRight, FaGithub, FaGlobe } from "react-icons/fa";

const AndroidProjects = () => {
  return (
    <section id="android-projects" className='h-full p-10 pb-14 flex flex-col items-center justify-center text-center'>
        <div className="text-center">
        <h2 className="text-4xl font-bold">Android Projects</h2>
        <p className="text-gray-400 font-medium mt-3">
          Check out some of my personal Android Projects
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {androidProjects.map((project) => (
          <div
            key={project.id}
            className="relative group rounded-lg overflow-hidden shadow-lg"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300">
              {/* Top-right Icons */}
              <div className="absolute top-4 right-4 flex space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400"
                >
                  <FaGithub size={24} />
                </a>
                {/* <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400"
                >
                  <FaGlobe size={24} />
                </a> */}
              </div>
              {/* Bottom-left Text */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">{project.name}</h3>
                <p className="text-sm font-normal">{project.techStack}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* See More Button */}
      <div className="text-center font-medium mt-8">
          <a
                href="https://github.com/YashSingh25?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-yellow-300 text-black py-2 px-8 rounded-full hover:bg-yellow-400 transition-all"
              >
                See More <FaArrowRight style={{color: 'black'}} className="ml-2" />
              </a>
      </div>
    </section>
  )
}

export default AndroidProjects