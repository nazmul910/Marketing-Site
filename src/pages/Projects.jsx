import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


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

gsap.registerPlugin(ScrollTrigger)

useGSAP(function(){
  gsap.from(".hero",{
    height:"100px",
    stagger:{
      amount:0.4
    },
    scrollTrigger:{
      trigger:".lol",
      start:"top 100%",
      end:"top -150%",
      scrub:true,
    }
  })
})

  return (
    <div className='p-4'>
      <div className='pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9vw] uppercase'>Projets</h2>
        
      </div>
      <div className='-mt-20 lol'>
        {
          projects.map(function(elem){
            return <div className='hero w-full gap-4 flex mb-4  h-175'>
                <ProjectCard key={elem.image1} image1={elem.image1} image2={elem.image2}/>            
              </div>

          })
        }
      </div>
    </div>
  )
}

export default Projects
