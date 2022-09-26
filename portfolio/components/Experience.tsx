import React from 'react'
import {motion} from "framer-motion"
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    whileInView={{ opacity:1}}
    transition={{
        duration:1.5
    }}
     className='h-screen relative flex overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly
    mx-auto items-center'>
        <h3 className="section_header">Experience</h3>

    <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
    <ExperienceCard/>
    <ExperienceCard/>
    <ExperienceCard/>
    <ExperienceCard/>
    </div>

    </motion.div>
  )
}