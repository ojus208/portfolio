import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Button = ({imgURL, label, fill, url}) => {
  return (
    <Link className='flex gap-1 text-white font-palanquin font-bold text-xl bg-blue-3 p-2 rounded-[10px] justify-center items-center hover:text-blue-3 hover:bg-white border-2 border-blue-2 transition-colors' href={url? url:label}>
      {label}
      <Image src={imgURL} alt={label} height={30} />
    </Link>
  )
}

export default Button