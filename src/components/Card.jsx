import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'


const Card = ({img,number,newp,oldp,tickect}) => {
    return (
        <div className='w-[270px] h-[315px] transition-shadow shadow-lg duration-50 rounded-lg relative'>
            <article className='w-[100%] h-[57%] bg-slate-0 '><img src={img} alt="" className='w-full h-full' /></article>

            <article className='p-5'>
                <p className='font-bold text-[20px] font-rajdhani'>{number}</p>
                <p className='font-bold text-[30px] text-[#FF2E63]'>{newp}<span className=' line-through font-thin text-[20px] text-[#999999]'>{oldp}</span></p>
                <p className='text-[16px]'>{tickect}</p>
            </article>

            <aside className='w-[40px] h-[40px] bg-[#346CD9] absolute bottom-0 right-0 rounded-tl-lg rounded-br-lg flex justify-center items-center text-white cursor-pointer'>
                <FaArrowRightLong />
            </aside>
        </div>
    )
}

export default Card