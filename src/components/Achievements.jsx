import React from 'react'
import { sectionWrapper } from '../sectionWrapper/sectionWrapper'
import CodeOFiesta from "../assets/c.jpg"
const Achievements = () => {
  return (
    <div className='w-full  '>
      <div className='flex  justify-center items-center'>
        <div className='relative'>
        <img className='' src={CodeOFiesta} alt="codeofiesta" />
        <div className='absolute inset-0 z-10 bg-gray-50 text-black font-semibold text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-1000'>🥇Got first prize in Code-O-Fiesta organized by Department of AIDS and CSE DS Vidyavardhini's College of Engineering and Technology, Vasai, Maharashtra</div>
        </div>
        
      </div>
    </div>
  )
}

export default Achievements