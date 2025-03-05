import React from 'react'
import { WorkExperienceData } from './Utils'

const WorkExperience = () => {

  return (
    <section id='experience' className='pt-[15vh] h-full flex flex-col items-center justify-center text-center'>
      <div className="flex flex-col items-center py-2 px-4">
        <h1 className='font-bold text-4xl md:text-5xl'>Work Experience</h1>
        <p className='font-medium mt-4 mb-2'>As a Final year student I've completed two Android Development Internships</p>

        {WorkExperienceData.map((experience) => (
            <>
            <div key={experience.id} className="m-4 md:py-2 md:px-4  md:flex items-center justify-center bg-transparent">

{/* Div For Date */}
<div className='border-2 mt-2 md:mt-0 border-yellow-200 py-1 md:px-4 md:py-2 mr-2 rounded-full'> 
 <h4 className='font-bold '>{experience.duration}</h4>
</div>

<div className=' flex flex-col items-start px-5 py-2'>
 <h1 className='font-bold text-lg md:text-2xl'>{experience.company} - <span className='font-bold underline'>{experience.role}</span></h1>
 <ul className='list-disc font-normal text-start mt-2'>
   {experience.description.map(function(item, idx){

     if(idx === 0){
       return (
         <li key={idx}>
           <b><u>Tech Stack:</u> </b>
           {item}
       </li>
       )
     }

     return (
       <li key={idx}>{item}</li>
     )
   })}
 </ul>
 <hr />
</div>





 {/* ------------------------ */}

{/* Role and Company */}
{/* <div className="flex justify-between items-center">
 <h3 className="text-2xl font-semibold">
   {experience.company} - {experience.role}
 </h3>
 <span className="text-gray-400">{experience.duration}</span>
</div> */}

{/* Description */}
{/* <ul className="list-disc pl-6 text-gray-300 space-y-2">
 {experience.description.map((item, index) => (
   <li key={index}>{item}</li>
 ))}
</ul> */}
</div>
<hr className=' w-full bg-yellow-400' />
            </>
          ))}       

      </div>
    </section>
  )
}

export default WorkExperience