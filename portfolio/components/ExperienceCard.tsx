import React from 'react'
import {motion} from "framer-motion"
import { Experience } from '../typings'
import { urlFor } from '../sanity'


type Props = 
 {
    experience:  Experience
}

export default function ExperienceCard({experience}: Props) {
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
        }} className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center"
        src={urlFor(experience.companyImage).url()}
        alt="company image"/>


        <div className="px-0 md:px-10 ">
            <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
            <p className="font-bold text-2xl mt-1"> {experience.company}</p>
            <div className="flex space-x-2 my-2">
                {experience.technologies.map((tech) =>                 <img className="h-12 w-12 rounded-full object-contain" src={urlFor(tech.image).url()} alt=""/>
)}
            </div>
            <p className='uppercase py-5 text-gray-300'>
                {new Date(experience.dateStarted).toDateString()} - {" "}
                {experience.isCurrentlyWorkingHere?"Present": new Date(experience.dateEnded).toDateString()}
            </p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
                {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}