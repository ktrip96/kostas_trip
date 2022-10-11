import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5]
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className='section_header'>Projects</h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar
    scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80">
            {projects.map((project, i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                    initial={{
                        y:-300,
                        opacity:0
                    }}
                    transition={{duration:1.2}}
                    whileInView={{opacity:1, y:0}}
                    src="" alt="" />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>
                                Case Study {i + 1} of {projects.length}:
                            </span>{" "}
                            UPS Clone
                        </h4>

                        <p className="text-lg text-center md:text-left">
                        This is a dummy decriptionThis is a dummy decriptionThis is a dummy decriptionThis is a dummy decription
                        This is a dummy decriptionThis is a dummy decriptionThis is a dummy decriptionThis is a dummy decription
                        This is a dummy decription
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