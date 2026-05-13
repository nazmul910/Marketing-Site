import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


function Projects() {

  const projects = [{
    image1: "/project1.png",
    title1:"Prendre les devants",
    year1:"2025",
    des1:"Description du projet 1",
    image2: "/project2.png",
    title2:"Title 2",
    year2:"2025",
    des2:"Description du projet 2",
  },{
    image1: "/project3.png",
    title1:"Title 3",
    year1:"2025",
    des1:"Description du projet 3",
    image2: "/project4.png",
    title2:"Title 4",
    year2:"2025",
    des2:"Description du projet 4",
  },
  {
    image1: "/project5.png",
    title1:"Title 5",
    year1:"2025",
    des1:"Description du projet 5",
    image2: "/project6.png",
    title2:"Title 6",
    year2:"2025",
    des2:"Description du projet 6",
  },
  
  {
    image1: "/project7.png",
    title1:"Title 7",
    year1:"2025",
    des1:"Description du projet 7",
    image2: "/project8.png",
    title2:"Title 8",
    year2:"2025",
    des2:"Description du projet 8",
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
      <div className='pt-[50vh] lg:pt-[40vh] xl:pt-[45vh]'>
        <h2 className='font-[font2] text-[11vw] md:text-[12vw] lg:text-[9vw] uppercase'>Projets</h2>
        
      </div>
      <div className='-mt-10 lg:-mt-8 xl:-mt-20 lol'>
        {
          projects.map(function(elem){
            return <div className='hero w-full gap-4 grid lg:flex mb-4 h-175  lg:h-175'>
                <ProjectCard 
                  key={elem.image1} 
                  image1={elem.image1} 
                  image2={elem.image2}
                  title1={elem.title1}
                  year1={elem.year1}
                  des1={elem.des1}
                  title2={elem.title2}
                  year2={elem.year2}
                  des2={elem.des2}
                />            
              </div>

          })
        }
      </div>
    </div>
  )
}

export default Projects
