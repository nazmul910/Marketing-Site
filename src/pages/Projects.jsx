import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'


function Projects() {

  const projects = [{
    image1: "/public/project1.png",
    image2: "/public/project2.png",
  },{
    image1: "/public/project3.png",
    image2: "/public/project4.png",
  },
  {
    image1: "/public/project5.png",
    image2: "/public/project6.png",
  },
  
  {
    image1: "/public/project7.png",
    image2: "/public/project8.png",
  },

]

  return (
    <div className='p-4'>
      <div className='pt-[45vh]'>
        <h2 className='font-[font2] text-[9vw] uppercase'>Projets</h2>
        
      </div>
      <div className='-mt-20'>
        {
          projects.map(function(elem){
            return<ProjectCard key={elem.image1} image1={elem.image1} image2={elem.image2}/>
          })
        }
      </div>
    </div>
  )
}

export default Projects
