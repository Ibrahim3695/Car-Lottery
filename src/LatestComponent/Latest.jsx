import React from 'react'
import Card from '../components/Card'
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal'

import car1 from "../assets/images/car1.png";
import car2 from "../assets/images/car2.png";
import car3 from "../assets/images/car3.png";
import car4 from "../assets/images/car4.png";

const Latest = () => {
    return (
        <div className='w-full h-max px-[3.5rem] '>
            <Slide direction='left'>
                <p className='text-[35px] font-rajdhani font-bold pb-9'>Latest Competitions</p>
            </Slide>

            <article className='grid grid-cols-4 gap-[3rem]'>
                <Fade cascade damping={0.3}>
                    <Card img={car1} number={"2020 Audi S5 Coupe"} newp={"$19.99"} oldp={"$54.68"} tickect={"3290 tickets remaining"} />
                    <Card img={car2} number={"2016 Ford Mustang GT"} newp={"$7.99"} oldp={"$9.68"} tickect={"3290 tickets remaining"} />
                    <Card img={car3} number={"2020 Bugatti Chiron"} newp={"$4888.99"} oldp={"$1.68"} tickect={"4014  tickets remaining"} />
                    <Card img={car4} number={"2019 Porsche 911 Carrera"} newp={"$1.99"} oldp={"$2.68"} tickect={"484  tickets remaining"} />

                </Fade>
            </article>
        </div>
    )
}

export default Latest