import Image from "next/image"
import Link from "next/link"
import { copyright, instagram, facebook, linkedin, github } from "../asset/icon"


const Footer = () => {
  return (
    <div className="p-10 bg-black flex justify-between gap-16 flex-wrap">
      <h1 className="font-palanquin font-bold text-2xl text-white">
        Ojus <span className="text-blue-3">Soni</span>
      </h1>
      <span className="flex justify-center items-center gap-3">
        <Image src={copyright} alt="copyright icon" width={24} height={24}  />
        <p className="info-text">All Right Reserved</p>
      </span>
      <ul className="flex justify-center items-center gap-5">
        <Link href="#">
        <Image src={facebook} width={24} height={24} alt="facebook logo" />
        </Link>
        <Link href="#">
        <Image src={instagram} width={24} height={24} alt="instagram logo" />
        </Link>
        <Link href="#">
        <Image src={linkedin} width={24} height={24} alt="linkedin logo" />
        </Link>
        <Link href="#">
        <Image src={github} width={24} height={24} alt="github logo" />
        </Link>
      </ul>
    </div>
  )
}

export default Footer