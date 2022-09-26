import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'

type Props = {}

export default function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-let md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className='section_header'>Contact</h3>

        <div>
            <h4 className="text-4xl font-semibold text-center">
                I have got just what you need.{" "}
                <span className="decoration-[#f7ab0a]/50 underline"> Let's Talk</span>

            </h4>

        <div className='space-y-10'>
            <div className="flex items-center space-x-5 justify-center">
                <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
                <p className='text-2xl'>+306980508235</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
                <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
                <p className='text-2xl'>ktrip96@gmail.com</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
                <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
                <p className='text-2xl'>Athens, Galatsi </p>
            </div>
        </div>

        <form className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className="flex space-x-2">
                <input placeholder='Name'  className="contactInput" type="text" />
                <input placeholder='Email'  className="contactInput" type="email" />
            </div>

            <input placeholder='Subject'  className="contactInput" type="text"/>

            <textarea placeholder='Message' className="contactInput" />
            <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
            >Submit</button>


        </form>


        </div>
    </div>
  )
}