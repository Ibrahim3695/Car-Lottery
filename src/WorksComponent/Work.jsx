import React from 'react'
import { Bounce, Slide } from 'react-awesome-reveal'
import WorkCard from '../components/WorkCard'
import red1 from "../assets/images/red1.png"
import red2 from "../assets/images/red2.png"
import red3 from "../assets/images/red3.png"
import red4 from "../assets/images/red4.png"
import { IoIosArrowRoundForward } from 'react-icons/io'

const Work = () => {
    return (
        <div className='w-full h-max px-[3.5rem] '>
            <Bounce>
                <p className='text-[35px] font-rajdhani font-bold pb-9 text-center mt-[6rem]'>How it works</p>
            </Bounce>

            <article className='grid grid-cols-4 gap-[3rem]'>

                <Slide >
                    <WorkCard arrow={IoIosArrowRoundForward} icon={red1} write={"Choose a competition and how many entries you would like"} />
                    <WorkCard icon={red2} write={"Answer the qualifying question (be sure to answer correctly!) and complete payment"} />
                    <WorkCard icon={red3} write={"Tickets for all correct answers are entered into the draw, streamed LIVE on Facebook using Google’s random number generator"} />
                    <WorkCard icon={red4} write={"If you win, we may try to contact you whilst live on Facebook, so be prepared!"} />

                </Slide>
            </article>
        </div>
    )
}

export default Work