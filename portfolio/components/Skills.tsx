import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '../typings'

type Props = {
	skills: SkillType[]
}

function Skills({ skills }: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{ opacity: 1 }}
			transition={{
				duration: 1.5,
			}}
			className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
		>
			<h3 className='section_header'>Skills</h3>

			<h3 className='section_header tracking-[3px] text-sm top-36'>
				Hover over a skill for currency profficiency
			</h3>

			<div className='grid grid-cols-4 md:grid-cols-6 gap-5'>
				{skills.slice(0, skills.length / 2).map((s) => (
					<Skill skill={s} key={s._id} />
				))}
				{skills.slice(skills.length / 2, skills.length).map((s) => (
					<Skill skill={s} key={s._id} directionLeft />
				))}
			</div>
		</motion.div>
	)
}

export default Skills
