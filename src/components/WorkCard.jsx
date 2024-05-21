import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoIosArrowRoundForward } from 'react-icons/io'

const WorkCard = ({ icon, write, arrow }) => {
  return (
    <div className=' w-[260px] h-[215px] duration-50 rounded-lg relative flex items-center text-center bg-slate-0
    ' >
      <section className='flex flex-col items-center text-center'>
        <img src={icon} alt="" className='text-center justify-center  items-center bg-slate-0' />
        <p className='pt-8 p bg-slate-0'>{write}</p>
      </section>

      <article className='bg-blue-0 mb-[4.7rem] bg-blue-0 w-[20%] h-[20%] absolute flex justify-center  items-center right-[-38px]'>
        <IoIosArrowRoundForward size={"50px"}/>
      </article>
    </div>
  )
}

export default WorkCard