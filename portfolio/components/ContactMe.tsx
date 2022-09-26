import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import {useForm, SubmitHandler} from "react-hook-form"

type Props = {}
type Inputs = {
    name:string, 
    email:string, 
    subject:string, 
    message:string
}


export default function ContactMe({}: Props) {
    const {register, handleSubmit} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href=`mailto:ktrip96@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.
        ${formData.message} (${formData.email})`
    }
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

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className="flex space-x-2">
                <input {...register('name')} placeholder='Name'  className="contactInput" type="text" />
                <input {...register('email')}  placeholder='Email'  className="contactInput" type="email" />
            </div>

            <input {...register('subject')}  placeholder='Subject'  className="contactInput" type="text"/>

            <textarea  {...register('message')} placeholder='Message' className="contactInput" />
            <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
            >Submit</button>


        </form>


        </div>
    </div>
  )
}