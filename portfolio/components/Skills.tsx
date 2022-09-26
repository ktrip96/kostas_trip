import React from 'react'
import {motion} from "framer-motion"
import Skill from './Skill'


type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{ opacity:1}}
    transition={{
        duration:1.5
    }}
    className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        <h3 className="section_header">Skills</h3>

        <h3 className="section_header tracking-[3px] text-sm top-36">Hover over a skill for currency profficiency</h3>

        <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        </div>
    </motion.div>
  )
}

export default Skills