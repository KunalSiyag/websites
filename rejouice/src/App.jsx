import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Description from './Components/Description';
import Work from './Components/Work';
import Description2 from './Components/Description2';
import Circle from './Components/Circle';
import Description3 from './Components/Description3';
import GetinTouch from './Components/GetinTouch';
import Footer from './Components/Footer';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-[#faf8f3]'>
      <Navbar/>
      <Hero/>
      <Description/>
      <Work/>
      <Description2/>
      <Circle/>
      <Description3/>
      <GetinTouch/>
      <Footer/>
    </div>
  )
}

export default App