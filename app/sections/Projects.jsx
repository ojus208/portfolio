import React from 'react'
import Button from '../components/Button'
import { exploremore } from '../asset/icon'
import ProjectCard from '../components/ProjectCard'
import {projectlist} from '../constants'

const Projects = () => {
  return (
    <section>
        <div className='flex justify-between w-full items-center'>
            <h1 className='font-montserrat text-2xl md:text-4xl font-bold '>
                My <span className='text-blue-3'>
                    Work's
                </span>
            </h1>
            <Button label="Explore All" url="Projects" imgURL={exploremore} />
        </div>
        <div>
            {projectlist.map((project, index)=>(
                <ProjectCard project={project} key={index} />
            ))}
        </div>
    </section>
  )
}

export default Projects