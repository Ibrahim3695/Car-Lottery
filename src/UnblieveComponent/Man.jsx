import React from 'react'
import man1 from "../assets/images/man1.png"

const Rounnd = ({color}) => {
  return (
    <div className='w-[15px] h-[15px] rounded-[50%]' style={{background:color}}></div>
  )
}

const Man = () => {
  return (
    <div className='w-full h-[50vh] bg-slate-400 flex mt-[4rem]'>
      <article className='w-[50%] h-[100%] bg-[#E7EDFA] flex justify-center items-center flex-col'>
        <p className='text-center px-[7.9rem] text-[20px] font-semibold'>"Unbelievable this is a dream come true, no way would I ever think I would own a car like this. What great blokes. Thank you very much! 5 star from me!!!"</p>

        <p className='text-[20px] pt-9'>Danny Churchman</p>

        <section className='flex gap-2 mt-9'>
          <Rounnd color={"#FF2E63"}/>
          <Rounnd color={"#FF787C"}/>
          <Rounnd color={"#FFAFB1"}/>
        </section>
      </article>

      <article className='w-[50%] h-[100%] bg-blue'>
        <img src={man1} alt="" className='w-full h-full' />
      </article>
    </div>
  )
}

export default Man