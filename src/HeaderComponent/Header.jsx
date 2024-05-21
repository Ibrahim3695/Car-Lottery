import React from 'react';

const Header = () => {
  return (
    <div className='w-full bg-[white] h-[70px] flex justify-between px-[3.6rem] items-center'>
      <h1 className='text-[30px] font-rajdhani font-bold'>LOGO<span className='text-[#FF2E63]'>AUTO</span></h1>

      <ul className='hidden lg:flex text-sm gap-7 font-rajdhani font-semibold'>
        <li>Latest Competitions</li>
        <li>Entry Lists</li>
        <li>Live Draws</li>
        <li>Winners</li>
        <li>Gift Cards</li>
        <li>How it Works</li>
      </ul>
      
      <article className='flex  gap-4 w-[15%] h-[100%] justify-between items-center '>
        <p className='text-[#FF2E63] font-semibold cursor-pointer' >Login</p>
        <button className='w-[68%] h-[62%] bg-[#FF2E63] text-red-50 rounded-md '>Register</button>
      </article>
    </div>
  )
}

export default Header