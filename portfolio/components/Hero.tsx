import Link from "next/link"
import {Cursor, useTypewriter} from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words:[
            "Hi, my name is Kostas",
            "I love React JS",
            "I love Node JS"
    ],
    loop:true,
    delaySpeed:2000
    })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles/>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFSULrBGoRv_w/profile-displayphoto-shrink_200_200/0/1662323193638?e=1669248000&v=beta&t=8S-o91qrgRRvoMGVq4M3FZkNimLwsEYqIaabnb9ettY" 
        alt="profile_picture" className="relative rounded-full h-32  w-32 mx-auto object-cover"/>
        <div className="z-20">

        <h2 className="text-sm text-gray-500 pb-2 tracking-[15px] mb-2">Software Engineer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A"/>
        </h1>

        <div className="pt-5">
        <Link href="#about"><button className='heroButton'>About</button></Link>
        <Link href="#experience"><button className='heroButton'>Experience</button></Link>
        <Link href="#skills"><button className='heroButton'>Skills</button></Link>
        <Link href="#projects"><button className='heroButton'>Projects</button></Link>
        </div>
        </div>

    </div>
  )
}

export default Hero