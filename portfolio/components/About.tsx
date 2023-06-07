import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
	pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{ opacity: 1 }}
			transition={{
				duration: 1.5,
			}}
			className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center '
		>
			<h3 className='section_header'>About</h3>
			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{
					duration: 1.2,
				}}
				src={urlFor(pageInfo?.profilePic).url()}
				className=' mb-2 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-56 md:h-64 xl:w-96 xl:h-96   '
			/>
			<div className='space-y-10 px-0 md:px-10  '>
				<h4 className='text-xl md:text-4xl font-semibold'>
					<span className='underline decoration-[#F7AB0A]/50'>Hello, my name is Kostas!</span>
				</h4>
				<p
					dangerouslySetInnerHTML={{ __html: pageInfo?.backgroundInformation }}
					className=' text-lg md:text-2xl text-gray-200'
				></p>
			</div>
		</motion.div>
	)
}
