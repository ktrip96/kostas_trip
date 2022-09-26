import React from "react"
import {motion} from 'framer-motion'

type Props = {}


function BackgroundCircles({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity:0
        }}
        animate={{
            scale:[1,2,2,3,1],
            opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
            borderRadius:["20%","20%","50%","80%","20%"]
        }}
        transition={{
            duration:2.5
        }}
    className="relative flex justify-center items-center">
        <div className='border border-[#4285F4] rounded-full h-[200px] w-[200px] mt-52  absolute  opacity-30'/>
        <div className='border border-[#DB4437] rounded-full h-[300px] w-[300px] mt-52  absolute opacity-30 ' />
        <div className='border border-[#F4B400] rounded-full h-[500px] w-[500px] mt-52  absolute opacity-30 ' />
        <div className=' rounded-full border border-[#1DB954]  h-[650px] w-[650px] mt-52  absolute opacity-30 animate-pulse'/>
    </motion.div>
  )

}

export default BackgroundCircles