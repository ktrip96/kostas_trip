import React from 'react'
import {motion} from "framer-motion"
import { Skill } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    directionLeft?:boolean
    skill:Skill

}

function Skill({directionLeft, skill}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
        initial={{
            x:directionLeft? -100 : 100,
        }}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        src={urlFor(skill.image).url()}
        className="rounded-full border border-gray-500 object-contain w-10 h-10 md:w-20 md:h-20
        xl:w-26 xl:h-26 filter group-hover:grayscale transition duration-300 ease-in-out "/>

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        group-hover:bg-white  rounded-full z-0 w-18 h-18 md:w-20 md:h-20
        xl:w-26 xl:h-26 ">
            <div className='flex items-center justify-center h-full'>
                <p className="text-base font-bold text-black opacity-100">{skill.title}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill