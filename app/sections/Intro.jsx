
import Image from "next/image"
import {dev2} from '../asset/images'
import Button from "../components/Button"
import { resume, message } from "../asset/icon"


const Intro = () => {

  return (
    <section className="flex justify-between m-auto items-center flex-wrap-reverse gap-10">
        <div className="flex flex-col justify-center items-center md:items-start flex-1">
            <div className="font-montserrat sm:text-8xl text-4xl font-bold gap-2 flex flex-col items-center md:items-start">
            <h1 className="hidden md:block text-blue-3">Hello,</h1>
            <h1>I'm OJUS <span className="text-blue-3">SONI</span>
            </h1>
            <h1>a Developer</h1>
            </div>
            <p className="info-text text-sm mt-5 md:text-start text-center">
              My hobby is develope seamless webiste and python programms 
            </p>
            <p className="info-text text-sm md:text-start text-center">Check out <a href="#" className="text-de">My Projects</a></p>
            <div className="flex justify-start items-center gap-5 mt-5">
                <Button imgURL={resume} label='Resume' url='/assets/pdf/resume.pdf'/>
                <Button imgURL={message} label='Send Me Text' url='/#contact-me' />
            </div>
            
        </div>
        <div className="w-full md:w-fit text-center flex flex-1 flex-col gap-5">
            <h1 className="font-montserrat text-8xl font-bold md:hidden block text-center text-blue-3">Hello !</h1>     
        <div className="bg-intro-img">
        <Image src={dev2} alt="developer image" className="flex justify-center items-center w-full max-w-2xl flex-1 z-10" />
        </div>

        </div>
    </section>
  )
}

export default Intro