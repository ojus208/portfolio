
import SkillElement from "./SkillElement"



const SkillCard = ({title, skills}) => {
  return (
    <section className=" min-w-[300px] bg-white shadow-lg  rounded-[20px] pb-10 ">
        <h2 className="bg-blue-3 font-montserrat text-white font-bold text-2xl rounded-tr-[20px] rounded-tl-[20px] px-5 py-5 ">
            {title}
        </h2>
        <div className="flex flex-wrap justify-around items-center gap-5 mt-10">
            {
                skills.map((skill, index)=>(
                    <SkillElement name={skill.name} iconURL={skill.iconURL} key={index} />
                ))
            }
        </div>
    </section>
  )
}

export default SkillCard