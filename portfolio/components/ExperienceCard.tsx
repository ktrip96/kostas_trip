import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 
    cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img 
         initial={{
            x:-100,
            opacity:0
        }}
        whileInView={{x:0, opacity:1}}
        transition={{
            duration:1.2
        }} className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQFSULrBGoRv_w/profile-displayphoto-shrink_200_200/0/1662323193638?e=1669248000&v=beta&t=8S-o91qrgRRvoMGVq4M3FZkNimLwsEYqIaabnb9ettY"
        alt=""/>


        <div className="px-0 md:px-10 ">
            <h4 className="text-4xl font-light">Full Stack Engineer</h4>
            <p className="font-bold text-2xl mt-1"> PAPAFAM</p>
            <div className="flex space-x-2 my-2">
                <img className="h-10 w-10 rounded-full" src="" alt=""/>
            </div>
            <p className='uppercase py-5 text-gray-300'>Started- work ... - Ended ...</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Summary </li>
            <li>Summary </li>
            <li>Summary </li>
            <li>Summary </li>
            </ul>
        </div>
    </article>
  )
}