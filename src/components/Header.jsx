import React from 'react'

const Header = () => {
  return (
    <div className='h-[15%] flex justify-center'>

        {/* navbar */}
        <div className='w-[50%] flex items-center bg-transparent justify-between px-4 py-2 flex-wrap fixed'>
            <div className='px-4 py-3'>
                <a href="">About Me</a>
            </div>
            <div className=''>
                <a href="">Experience</a>
            </div>
            <div className=''>
                <a href="">Skills</a>
            </div>
            <div className=''>
                <a href="">Projects</a>
            </div>
            <div className=''>
                <button className='bg-yellow-300 rounded-2xl py-2 px-4 text-lg font-bold'>Resume</button>
            </div>
        </div>
    </div>
  )
}

export default Header