import React from 'react'
import {motion} from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    projects:Project[]
}

function Projects({projects}: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className='section_header'>Projects</h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar
    scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80">
            {projects.map((project, i) => (
                <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                    initial={{
                        y:-300,
                        opacity:0
                    }}
                    transition={{duration:1.2}}
                    whileInView={{opacity:1, y:0}}
                    src={urlFor(project?.image).url()} alt="" 
                    className="w-[400px]"/>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl text-center'>
                        <a className='md:text-4xl text-xl  font-semibold text-center' href={project.linkToBuild} target="_blank" rel="noreferrer noopener">
                            <span className='underline decoration-[#F7AB0A]/50'>
                                Case Study {i + 1} of {projects.length}:
                            </span>{" "}
                            {project.title}
                        </a>

                        <div className='flex items-center space-x-2 justify-center'>
                        {project.technologies.map((tech) => (
                            <img 
                            className='h-10 w-10'
                            key={tech._id}
                            src={urlFor(tech.image).url()}
                            alt=""/>
        
                        ))}
                        </div>

                        <p className="md:text-lg text-sm text-center w-[500px] md:text-left ">
                       {project.summary}
                        </p>
                    </div>
                </div>
            ))}

        </div>
        
        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"/>
        </div>  
  )
}

export default Projects