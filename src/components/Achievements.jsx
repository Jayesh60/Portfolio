import React from 'react'
import { sectionWrapper } from '../sectionWrapper/sectionWrapper'
import CodeOFiesta from "../assets/c.jpg"
const Achievements = () => {
  return (
    <div className='w-full  bg-red-100'>
      <div className='flex relative justify-center items-center'>
        <img className='' src={CodeOFiesta} alt="codeofiesta" />
        <div className='absolute inset-0 z-10 bg-gray-50 text-black text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-1000'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit itaque doloribus porro blanditiis dolorem, aut consequatur ea tenetur, obcaecati, necessitatibus officia! Excepturi molestias doloribus labore odio eius, eligendi eos recusandae provident earum quaerat molestiae numquam illum cumque suscipit natus tempore id voluptatum quibusdam sapiente rerum, illo culpa architecto a. Mollitia.</div>
      </div>
    </div>
  )
}

export default Achievements