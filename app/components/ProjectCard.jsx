"use client" 
import { useState } from "react"
import Image from "next/image"
import { githubsvg ,livelink } from "../asset/icon"
import SkillElement from "./SkillElement"

const ProjectCard = ({project}) => {
    const [img, setimg] = useState(project.images[0])
  return (
    <section className="md:flex-row flex-col flex justify-between items-center gap-16 rounded-[20px] p-5 shadow-xl bg-white mt-10">
        <div className="flex-1 min-w-[300px] max-w-[500px] flex-col flex items-center justify-center gap-5">
            <Image src={img} alt="image" className="sm:w-full" />
            <div className="flex justify-center items-center gap-5">
                {project.images.map((image , index)=>(
                    <div key={index}>
                        <Image src={image} alt={'project image' +(index)} className="sm:w-24 w-20" onClick={()=>{setimg(image)}}/>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex-1 flex px-3 flex-col justify-center items-start gap-3">
            <h1 className="font-montserrat text-2xl font-bold ">
                {project.name}
            </h1>
            <p className="info-text">
                {project.description}
            </p>
            <div>
                <h3 className="font-montserrat font-bold text-lg">Technology Used In Project</h3>
                <ul className="flex gap-5 items-start justify-center">
                    {project.techstack.map((tech, index)=>(
                        <li key={index}>
                        <SkillElement name={tech.name} iconURL={tech.iconURL} />
                    </li>
                    ))}
                </ul>
            </div>
            {project.Livelink? <div>
                <h2 className="flex items-center justify-start gap-2 "><Image src={livelink} width={25} height={25} alt="internet icon" /> Live Project : <a href={project.Livelink}>{project.Livelink}</a></h2>
            </div> : ""}
            {project.gitlink? <div>
                <h2 className="flex items-center justify-start gap-2"><Image src={githubsvg} width={25} height={25} alt="github icon" /> Github Link : <a href={project.gitlink}>{project.gitlink}</a></h2>
            </div> : ""}
        </div>
    </section>
  )
}

export default ProjectCard