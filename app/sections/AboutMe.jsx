import Image from 'next/image'
import { aboutme } from '../asset/images'
import Link from "next/link"
import {facebook, instagram, linkedin, github, resume, message} from '../asset/icon'


const AboutMe = () => {
    return (
        <section className='flex justify-between md:flex-row flex-col items-center gap-10 bg-white shadow-xl rounded-[20px] p-10 '>
            <div className='w-full md:w-fit flex flex-col items-center justify-center'>
            <div>
            <h1 className='text-4xl font-montserrat font-bold md:hidden block w-full text-start'>
                    About <span className='text-blue-3'>Me</span>
                </h1>
            </div>
                <Image src={aboutme} alt='about me image' className='flex-1 flex justify-center items-center max-w-xl  ' />

            </div>
            <div className='flex-1 flex flex-col gap-2 p-5'>
                <h1 className='text-4xl font-montserrat font-bold text-start hidden md:block'>
                    About <span className='text-blue-3'>Me</span>
                </h1>
                <p className=' text-slate-gray text-xl font-montserrat leading-normal'>
                    Welcome to my portfolio! I'm <span>Ojus Soni</span>, a <span>Developer</span> with a passion for developing amazing WEBAPPS. With 2+ years of personal project experience in the field, I've had the privilege of working on a diverse range of projects, from simple websites to complex webapps.
                </p>
                <p className=' text-slate-gray text-xl font-montserrat leading-normal'>
                What drives me is the opportunity to turn ideas into tangible results. I thrive on solving complex problems, creating beautiful UI, complex backend structure, scalable python code, . My approach is a blend of creativity, attention to detail, and a commitment to delivering excellence, fostering collaboration, or pushing boundaries.
                </p>
                <div className='mt-10 flex flex-col justify-center items-start'>
                    <h3 className='text-2xl font-montserrat font-bold'>Feel free for <span className='text-blue-3'>reach me</span> out <span className='text-blue-3'>@</span></h3>
                <ul className='flex gap-2 mt-2 '>
                    <li>
                        <Link href="#">
                            <Image src={facebook} alt="facebook logo image" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src={instagram} alt="facebook logo image" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src={linkedin} alt="facebook logo image" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src={github} alt="facebook logo image" />
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </section>
    )
}

export default AboutMe