import { useState } from 'react'
import Cards from './components/Cards/Cards'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Marquees from './components/Marquee/Marquees'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Projects from './components/projects/Projects'
import Stripes from './components/stripes/Stripes'
import LocomotiveScroll from 'locomotive-scroll';
import { useMotionValue } from 'motion/react'


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const moveCustomMouse = (e)=>{
    x.set(e.clientX)
    y.set(e.clientY)
  }

  return (
    <>
    <Cursor x={x} y={y}/>
    <main data-scroll-container className='min-h-screen bg-[var(--dark)] text-white w-full select-none' onMouseMove={moveCustomMouse}>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Projects/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </main>
    </>
  )
}

export default App