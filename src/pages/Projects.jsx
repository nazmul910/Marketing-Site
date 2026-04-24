import React from 'react'

function Projects() {
  return (
    <div className='p-4'>
      <div className='bg-red-50 pt-[45vh]'>
        <h2 className='font-[font2] text-[9vw] uppercase'>Projets</h2>
      </div>
      <div>
        <div className='w-full gap-4 flex mb-4  h-175 bg-amber-400 -mt-20'>
          <div className='w-1/2 h-full bg-green-900'></div>
          <div className='w-1/2 h-full bg-blue-900'></div>
        </div>
         <div className='w-full gap-4 flex mb-4  h-175 bg-amber-400 '>
          <div className='w-1/2 h-full bg-green-900'></div>
          <div className='w-1/2 h-full bg-blue-900'></div>
        </div>
      </div>
    </div>
  )
}

export default Projects
