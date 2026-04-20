import React, { useRef } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom';


const Stairs = () => {
const stairParentRef = useRef(null);
const currentpath = useLocation().pathname

  useGSAP(function() {

    const tl = gsap.timeline();


    tl.to(stairParentRef.current,{
      display:"block"
    })

    tl.from(".stair",{
      height:0,
      stagger:{
        amount:-0.25,
        
      }
    })

    tl.to(".stair",{
      y:"100%",
      stagger:{
        amount:-0.25
      }
    })

    tl.to(stairParentRef.current,{
      display:"none"
    })

    tl.to(".stair",{
      y:"0%",
    })
  },[currentpath])
  return (
    <div>
        <div ref={stairParentRef } className=' h-screen w-full fixed top-0 z-10'>
        <div className='h-full w-full flex '>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>      
      </div>
    </div>
  )
}

export default Stairs
