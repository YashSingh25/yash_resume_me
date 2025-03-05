import React from 'react'
import { AboutMeContent } from './Utils'

const AboutMe = () => {
  return (
    <section id="about-me" className='h-[85vh] flex flex-col items-center justify-center text-center'>

      <div className="flex flex-col items-center py-2 px-4">
        <h1 className='py-2 px-4 m-4 font-bold text-5xl md:text-6xl'>About Me</h1>

          <p 
            style={{ whiteSpace: "pre-wrap" }}
            className='font-normal text-lg'
            >
              Hi there, this is <b>Yash</b> and I'm a <b>Native Android</b> and <b>Full-Stack Web Developer</b>.
              <br />
              I'm also a <b>UI Designer</b> and I love to design beautiful and user-friendly interfaces.
              <br />
              I'm a <b>self-taught developer</b> and I love to learn new things and explore new technologies.
              <br />
              <br />
              I'm from <b>Lucknow</b> and currently a <b>Final Year Computer Science and Engineering Student</b> with a CGPA of 7/10

          </p>
        </div>
    </section>
  )
}

export default AboutMe