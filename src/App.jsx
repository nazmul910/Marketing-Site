import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import { useGSAP } from '@gsap/react'

function App() {

  useGSAP(function() {
    
  })

  return (
    <div className='text-white'>
      <div className='h-screen w-full flex fixed top-0 z-10'>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-white'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-white'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
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
