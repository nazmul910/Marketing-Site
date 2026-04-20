import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function App() {

  const stairParentRef = useRef(null);

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
  })

  return (
    <div className='text-white'>

      <div ref={stairParentRef } className=' h-screen w-full fixed top-0 z-10'>
        <div className='h-full w-full flex '>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>      
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agency' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
