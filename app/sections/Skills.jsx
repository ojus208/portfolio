'use client'
import SkillCard from '../components/SkillCard'
import { useState, useEffect } from 'react'


const Skills = () => {
  const [skillset, setSkillset] = useState()

    useEffect(() => {
      const getskills = async()=>{
        let res = await fetch('http://localhost:3000/api/skills',{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        let data = await res.json();
        console.log(data.allPosts)
        setSkillset(data.allPosts)
  
      }
      getskills();
    })
    
  
  

  return (
    <section className='flex flex-col justify-between gap-16 items-start w-full'>
            <h1 className='text-4xl font-montserrat font-bold'>
                My <span className='text-blue-3'>Skill's</span>
            </h1>
        <div className='flex justify-center items-center gap-10 flex-wrap '>
        {
           skillset? skillset.map((skill, index)=>(
                <SkillCard title={skill.title} skills={skill.skills} key={index} />
            )) : ""
        }
        </div>
    </section>
  )
}

export default Skills