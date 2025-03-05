import React from 'react'
import { skillsData } from './Utils'

const Skills = () => {
  
  return (
    <section id="skills" className='pt-[15vh] h-full p-6 md:p-10 pb-14 flex flex-col items-center justify-center text-center'>

    <div className="container mx-auto px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>
        <p className="text-center text-gray-400 font-medium mb-10">
          These are the Languages, tools and frameworks I'm familiar with.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="bg-white text-black rounded-lg shadow-md flex flex-col items-center justify-center py-6 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-4"
              />
              <p className="font-bold text-xl text-black">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Skills