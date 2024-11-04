import React from 'react'
import Hero from '../Components/LandingPage/Hero'
import Invite from '../Components/LandingPage/Invite'
import Review from '../Components/LandingPage/Review'
import AppInvite from '../Components/LandingPage/AppInvite'
import LocomotiveScroll from 'locomotive-scroll'
import { motion } from 'framer-motion';


function LandingPage() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <motion.div 
    className='main w-full min-h-screen'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition: {duration: 0.5}}}
    >
      <Hero/>
      <Invite/>
      <Review/>
      <AppInvite/>
    </motion.div>
  )
}

export default LandingPage;