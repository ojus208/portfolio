"use client"
import Image from "next/image"
import Link from "next/link"
import { hamburger, cross } from "../asset/icon"
import { useState } from "react"
import { usePathname } from 'next/navigation';


const Nav = () => {
    const pathname = usePathname()
    const [opennav, setopennav] = useState(false)
    const handlenav =  ()=>{
        setopennav(!opennav)
    }
  return (
    <header className="flex justify-center items-center w-full ">
        <nav className="flex-1 flex justify-between px-5 py-5 items-center md:flex-row flex-col">
            <div className="flex flex-row justify-between items-center w-full md:w-fit">
            <h1 className="text-3xl font-bold font-montserrat ">Ojus <span className="text-blue-3">Soni</span></h1>
            <button className="outline-none border-2 border-blue-3 rounded-md p-1 bg-blue-5 flex sm:hidden" onClick={handlenav}>
                <Image src={opennav? cross:hamburger} alt="hamburger menu img" width={25} />
            </button>
            </div>
            <ul className={"md:flex  justify-center items-center gap-5 font-palanquin font-bold text-slate-500 text-xl md:flex-row flex-col duration-1000 " + (opennav? "flex ":"hidden")}>
                <li className={pathname=="/"? " text-blue-3" : "" + 'hover:text-blue-3'} >
                    <Link href="/">Home</Link>
                </li >
                <li className={pathname=='/Projects'? " text-blue-3" : "" + 'hover:text-blue-3'}>
                    <Link href="/Projects">Projects</Link>
                </li>
                <li className={pathname=='/Resume'? " text-blue-3" : "" + 'hover:text-blue-3'} >
                    <Link href="/assets/pdf/resume.pdf">Resume</Link>
                </li>
                <li className={pathname=='/#contact-me'? " text-blue-3" : "" + 'hover:text-blue-3'} >
                    <Link href="/#contact-me">Contact Me</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav