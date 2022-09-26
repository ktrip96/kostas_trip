import React from 'react'
import { SocialIcon } from "react-social-icons"
import {motion} from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5 '>
        <motion.div 
        initial={{
            x:-500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1.5
        }}
        className="flex flex-row items-center">
            {/* Social Icons */}
            <SocialIcon url="https://github.com/ktrip96"  fgColor="gray" bgColor="transparent"/>
            <SocialIcon url="https://www.instagram.com/_ktrip_/"  fgColor="gray" bgColor="transparent"/>
            <SocialIcon url="https://www.facebook.com/konstantinos.tripalitakis/"  fgColor="gray" bgColor="transparent"/>
            <SocialIcon url="https://www.linkedin.com/in/kostas-tripalitakis-75159b1aa/"  fgColor="gray" bgColor="transparent"/>

        </motion.div>

        <motion.div
         initial={{
            x:500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1.5
        }}
         className="flex flex-row items-center text-gray-300 cursor-pointer">
            <SocialIcon 
            className="cursor-pointer"
            network='email'
            fgColor='gray'
            bgColor='transparent'/>
        
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
        </motion.div>
        
    </header>
  )
}