import React from 'react'
import { Slide } from 'react-awesome-reveal'
import WinnerCard from '../components/WinnerCard'
import man2 from "../assets/images/man2.png"
import man3 from "../assets/images/man3.png"
import man4 from "../assets/images/man4.png"
import man5 from "../assets/images/man5.png"

const Winner = () => {
    return (
        <div className='w-full h-max px-[3.5rem] '>
            <Slide
                direction='left'>
                <p className='text-[35px] font-rajdhani font-bold pt-[6rem]'>Latest Winners</p>
            </Slide>

            <article className='grid grid-cols-4 gap-[3rem]'>
                <Slide direction='right'>
                    <WinnerCard img={man2} writeup={"Ferrari 458"} date={"12 November 2020"} />
                    <WinnerCard img={man3} writeup={"Aquila Gullwing"} date={"9 November 2020"} />
                    <WinnerCard img={man4} writeup={"2020 Audi S5 Coupe"} date={"5 November 2020"} />
                    <WinnerCard img={man5} writeup={"Ferrari Purosangue SUV"} date={"25 September 2020"} />
                </Slide>

            </article>
        </div>
    )
}

export default Winner