import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import pic from '../assets/yash_pic.jpg'

const LandingPage = () => {
  return (
    <section
      id="about"
      className="h-[85vh] flex flex-col items-center justify-center text-center"
    >
      <div className="flex flex-col items-center py-2 px-4">
        {/* Profile Icon */}
        <div className="h-40 w-40 p-2 rounded-full flex items-center justify-center animate-bounce">
          {/* <FaUserAlt size={64} className="text-black" /> */}
          <img className='rounded-full h-full w-full' src={pic} alt="" />
        </div>
        {/* About Me Content */}
        <h4 className='my-2 font-bold text-xl'>Hi I'm Yash</h4>
        <h2 className="mt-6 text-4xl font-bold">Building Android Apps</h2>
        <p className="mt-4 text-lg font-normal">
          An Android Developer and UI Designer with experience in Backend API Development.
        </p>
        {/* CTA Button */}
        <a href="https://www.linkedin.com/in/yash-singh-a73bb220b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="mt-6 px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-yellow-300">
          <p className='text-black font-semibold'>Connect With Me</p>
        </a>
      </div>
      {/* <div className='h-1 w-[100vh] bottom-full bg-gray-400'></div> */}
    </section>
  );
};

export default LandingPage;