import {Cursor, useTypewriter} from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words:[
            "Hi, my name is Kostas",
            "I love coffee",
            "I love to code"
    ],
    loop:true,
    delaySpeed:2000
    })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles/>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFSULrBGoRv_w/profile-displayphoto-shrink_200_200/0/1662323193638?e=1669248000&v=beta&t=8S-o91qrgRRvoMGVq4M3FZkNimLwsEYqIaabnb9ettY" alt="" className="relative rounded-full h-32 w-32 mx-auto object-cover"/>
        <h2 className="text-5xl lg:text-6xl font-semibold px-10">Software Engineer</h2>
        <h1>
        
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A"/>
        </h1>

    </div>
  )
}

export default Hero