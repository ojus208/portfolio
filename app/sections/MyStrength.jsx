import React from 'react'
import StrengthCard from '../components/StrengthCard'
import { mystrengths } from '../constants'

const MyStrength = () => {
  return (
    <section className='flex flex-col gap-16 justify-center items-start'>
      <h1 className='font-palanquin text-4xl font-bold'>
        My <span className='text-blue-3'>Strength's</span>
      </h1>
      <div className='flex w-full gap-16 items-start justify-between flex-wrap'>
        {mystrengths.map((e, index)=>(
          <StrengthCard title={e.title} desc={e.desc} key={index}/>
        ))}
      </div>
    </section>
  )
}

export default MyStrength