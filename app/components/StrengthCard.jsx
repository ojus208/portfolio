import Image from 'next/image'
import React from 'react'
import { facebook } from '../asset/icon'

const StrengthCard = ({title, desc}) => {
  return (
     
      <div className="flex-1 sm:w-[350px] min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
        <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{title}</h3>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
         {desc}
        </p>
        </div>
  )
}

export default StrengthCard