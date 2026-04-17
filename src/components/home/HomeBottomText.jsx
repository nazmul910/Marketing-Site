import React from 'react'
import { Link } from 'react-router-dom'

function HomeBottomText() {
  return (
    <div className='font-[font2] flex items-center text-white justify-center gap-2 '>
      <Link className='text-[6.5vw] leading-[6vw] border-2 border-white flex justify-center items-center rounded-full px-10  pt-5 uppercase'>Projects</Link>
      <Link  className='text-[6.5vw] leading-[6vw] border-2 border-white flex justify-center items-center rounded-full px-10 pt-5 uppercase'>Agency</Link>   
    </div>
  )
}

export default HomeBottomText
