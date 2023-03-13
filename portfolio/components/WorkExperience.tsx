import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
	experiences: Experience[]
}

export default function WorkExperience({ experiences }: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{ opacity: 1 }}
			transition={{
				duration: 1.5,
			}}
			className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly
    mx-auto items-center'
		>
			<h3 className='section_header'>Experience</h3>

			<div
				className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar
    scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'
			>
				{experiences.map((item) => (
					<ExperienceCard key={item._id} experience={item} />
				))}
			</div>
		</motion.div>
	)
}
