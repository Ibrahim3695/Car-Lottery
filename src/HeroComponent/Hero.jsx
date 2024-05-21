import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Hero = () => {
  return (
    <div className='w-full bg-slate-0 h-[70vh] flex justify-between items-center px-[3.5rem]' >

      <article className='w-[30%] h-[80%]  '>

        <h1 className='font-bold text-[50px] font-rajdhani pt-12' leading-0>Could you be our
          <samp className='font-rajdhani text-[#FF2E63]'> next winner?</samp></h1>
        <button className='w-[36%] h-[11%] bg-[#346CD9] text-red-50 rounded-md mt-8'>Enter now</button>
      </article>

      <article className='w-[60%] h-[90%] flex justify-between items-center'>
        <Slide direction='right' damping={0.6}>
          <img src={"./car.png"} alt="" />

        </Slide>
      </article>

    </div>
  )
}

export default Hero