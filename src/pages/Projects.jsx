import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'

function Projects() {
  return (
    <div className='p-4'>
      <div className='pt-[45vh]'>
        <h2 className='font-[font2] text-[9vw] uppercase'>Projets</h2>
      </div>
      <div className='-mt-20'>
        <ProjectCard/>
      </div>
    </div>
  )
}

export default Projects
