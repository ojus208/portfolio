import Image from 'next/image'
import React from 'react'

import {cpp,
  django,
  expressjs,
  flask,
  java,
  javascript,
  python,
  mongodb,
  nodejs,
  react,
  restapi,
  } from "../asset/icon";

const SkillElement = ({name, iconURL}) => {
  const icons = {
    'django':django,
    'cpp':cpp,
    'expressjs':expressjs,
    'flask':flask,
    'java':java,
    'javascript':javascript,
    'python':python,
    'mongodb':mongodb,
    'nodejs':nodejs,
    'reactjs':react,
    'restapi':restapi
  }
  return (
    <div className='p-3 rounded-md bg-white shadow-lg flex flex-col justify-center items-center hover:shadow-none duration-500'>
        <Image src={icons[iconURL]} alt={(name) + ' icon'} />
        <span className='font-palanquin font-bold text-sm'>
            {name}
        </span>
    </div>
  )
}

export default SkillElement