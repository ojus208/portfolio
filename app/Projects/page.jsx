import Image from 'next/image'
import React from 'react'
import { workpng } from '../asset/images' 

import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'
import {projectlist} from '../constants'

export const metadata = {
  title:"Projects | Ojus Soni",
  description:"Projects Page of my portfolio"
}


const Page = ({searchParams}) => {
  const projectTech = searchParams.tech
  return (
    <section className='padding flex flex-col gap-16'>
    <div className='flex flex-wrap justify-between items-start gap-16 bg-white shadow-xl rounded-[20px] p-5'>
        <div className='flex-1 flex flex-col justify-between items-center gap-10'>
          <h1 className='font-montserrat text-4xl font-bold w-full'>
            My <span className='text-blue-3'>Work</span>
          </h1>
          <Image src={workpng} className='max-w-[500px] m-auto w-fit' alt='working bg image' />
        </div>
        <div className='flex-1 flex flex-col justify-between items-center gap-10 min-w-[300px] '>
          <p className='text-center font-montserrat leading-normal text-xl text-slate-gray md:text-start'>
            I have done some amazing projects on various technologies you can see all of my projets on this page and see its deployed version by clicking on live project link or see all of my project code by clicking github link on respective project
          </p>
          <div className='flex-1 w-full flex flex-col justify-between items-start gap-5'>
            <h2 className='font-montserrat text-lg font-bold'>
              you can see project related to technologies by clicking these button's
            </h2>
            <ul className='flex flex-wrap justify-start gap-2 items-center'>
              <Link href="?tech=Python" className='px-2 py-1 font-bold bg-blue-3 rounded-[10px] m-3 font-palanquin text-white border-2 border-blue-3 hover:bg-white hover:text-blue-3 duration-200'>
                All
              </Link>
              <Link href="?tech=Javascript" className='px-2 py-1 font-bold bg-blue-3 rounded-[10px] m-3 font-palanquin text-white border-2 border-blue-3 hover:bg-white hover:text-blue-3 duration-200'>
                JavaScript
              </Link>
              <Link href="?tech=Full-stack" className='px-2 py-1 font-bold bg-blue-3 rounded-[10px] m-3 font-palanquin text-white border-2 border-blue-3 hover:bg-white hover:text-blue-3 duration-200'>
                Full-Stack
              </Link>
              <Link href="?tech=Front-end" className='px-2 py-1 font-bold bg-blue-3 rounded-[10px] m-3 font-palanquin text-white border-2 border-blue-3 hover:bg-white hover:text-blue-3 duration-200'>
                Front-End
              </Link>
              <Link href="?tech=Back-end" className='px-2 py-1 font-bold bg-blue-3 rounded-[10px] m-3 font-palanquin text-white border-2 border-blue-3 hover:bg-white hover:text-blue-3 duration-200'>
                Back-End
              </Link>
            </ul>
          </div>
        </div>
    </div>
    <div>
            {projectlist.map((project, index)=>(
                <ProjectCard project={project} key={index} />
            ))}
        </div>

    </section>
  )
}

export default Page