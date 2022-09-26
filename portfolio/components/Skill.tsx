import React from 'react'
import {motion} from "framer-motion"

type Props = {
    directionLeft?:boolean
}

function Skill({directionLeft}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
        initial={{
            x:directionLeft? -200 : 200,
        }}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        src="https://media-exp1.licdn.com/dms/image/C4D03AQFSULrBGoRv_w/profile-displayphoto-shrink_200_200/0/1662323193638?e=1669248000&v=beta&t=8S-o91qrgRRvoMGVq4M3FZkNimLwsEYqIaabnb9ettY"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28
        xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out "/>

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        group-hover:bg-white  rounded-full z-0 w-24 h-24 md:w-28 md:h-28
        xl:w-32 xl:h-32 ">
            <div className='flex items-center justify-center h-full'>
                <p className="text-base font-bold text-black opacity-100">React JS</p>
            </div>
        </div>
    </div>
  )
}

export default Skill