import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-speed='.2' className='w-full py-10 bg-[#004D43] rounded-t-3xl overflow-hidden'>
        <div className="text border-t-2 border-b-2 font-['Founders_Grotesk'] font-semibold border-zinc-500 text-[17vw] flex ml-10 whitespace-nowrap">
           <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration:20}} className='-mt-10 -mb-20'>WE ARE ORCHI</motion.h1>
           <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration:20}} className='-mt-10 -mb-20'>WE ARE ORCHI</motion.h1>
        </div>
    </div>
  )
}

export default Marquee