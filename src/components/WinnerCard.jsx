import React from 'react'

const WinnerCard = ({img,writeup,date}) => {
    return (
        <div className='w-[270px] h-[300px] transition-shadow shadow-lg duration-50 rounded-lg relative mt-10'>
            <article className='w-[100%] h-[70%] bg-slate-0 '><img src={img} alt="" className='w-full h-full' /></article>

            <article className='p-5'>
                <p className='text-[20px] font-bold font-rajdhani'>{writeup}</p>
                <p className='text-[16px]'>{date}</p>
            </article>
        </div>
    )
}

export default WinnerCard