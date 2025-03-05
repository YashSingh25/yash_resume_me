import React from 'react'
import './App.css'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import AboutMe from './components/AboutMe'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import AndroidProjects from './components/AndroidProjects'
import SpringBootProjects from './components/SpringBootProjects'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-gradient-to-br from-gray-900 via-black to-gray-800 font-raleway min-h-screen' >
      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-[10vh]">
        <LandingPage />
        <AboutMe />
        <WorkExperience />
        <Skills />

        <div id='projects' className='pt-[15vh]'>
        <AndroidProjects />
        <SpringBootProjects />
        </div>
        <Footer />
        {/* <Experience />
        <Skills />
        <Projects />
        <Resume /> */}
      </main>
    </div>
  )
}

export default App
