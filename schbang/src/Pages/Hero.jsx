import React from 'react'
import horizontal_sprial from '../Assets/649531f111407d44a30fb06a_download1.png'
import { motion } from 'framer-motion'
function Hero() {
  return (
    <div className='mt-16'>
        <div className="heading px-20">
        <h1 className='text-6xl font-bold'>Your Creative, Media & Technology Transformation <br/>Partner</h1>
        <h3 className='text-xl mt-10 font-semibold opacity-85'>We're a team of 1000+ Specialists delivering award-winning work for 300+ brands worldwide, 8 years and counting!</h3>
        <div className="rotating-horizontal w-full  text-nowrap overflow-hidden flex gap-10">
        <div className="group mt-10 flex items-center gap-5 ">
        <motion.h1 
  initial={{ x: 0 }} 
  animate={{ x: "30vw" }} 
  transition={{ duration: 15, ease: "easeInOut",repeat: Infinity,  repeatType: "loop"  }} 
  className='text-3xl font-extrabold leading-none tracking-tight text-white drop-shadow-[0_1px_2px_rgba(1,1,1,1)]'
>
  IT's TIME TO CREATE A SCHBANG
</motion.h1>

<motion.img  
  initial={{ x: 0, rotate: 0 }} 
  animate={{ x: "30vw" }} 
  transition={{ duration: 15, ease: "easeInOut",repeat: Infinity,  repeatType: "loop"  }} 
  src={horizontal_sprial} 
  className='w-8 h-8' 
  alt="" 
/>

</div>
        <div className="group mt-10 flex items-center gap-5 ">
        <motion.h1 
  initial={{ x: 0 }} 
  animate={{ x: "30vw" }} 
  transition={{ duration: 15, ease: "easeInOut",repeat: Infinity,  repeatType: "loop"  }} 
  className='text-3xl font-extrabold leading-none tracking-tight text-white drop-shadow-[0_1px_2px_rgba(1,1,1,1)]'
>
  IT's TIME TO CREATE A SCHBANG
</motion.h1>

<motion.img  
  initial={{ x: 0, rotate: 0 }} 
  animate={{ x: "30vw" }} 
  transition={{ duration: 15, ease: "easeInOut",repeat: Infinity,  repeatType: "loop"  }} 
  src={horizontal_sprial} 
  className='w-8 h-8' 
  alt="" 
/>

</div>
        <div className="group mt-10 flex items-center gap-5 ">
        <motion.h1 
  initial={{ x: 0 }} 
  animate={{ x: "30vw" }} 
  transition={{ duration: 15, ease: "easeInOut",repeat: Infinity,  repeatType: "loop"  }} 
  className='text-3xl font-extrabold leading-none tracking-tight text-white drop-shadow-[0_1px_2px_rgba(1,1,1,1)]'
>
  IT's TIME TO CREATE A SCHBANG
</motion.h1>

<motion.img  
  initial={{ x: 0, rotate: 0 }} 
  animate={{ x: "30vw" }} 
  transition={{ duration: 15, ease: "easeInOut",repeat: Infinity,  repeatType: "loop"  }} 
  src={horizontal_sprial} 
  className='w-8 h-8' 
  alt="" 
/>

</div>
        <div className="group mt-10 flex items-center gap-5 ">
        <motion.h1 
  initial={{ x: 0 }} 
  animate={{ x: "30vw" }} 
  transition={{ duration: 15, ease: "easeInOut",repeat: Infinity,  repeatType: "loop"  }} 
  className='text-3xl font-extrabold leading-none tracking-tight text-white drop-shadow-[0_1px_2px_rgba(1,1,1,1)]'
>
  IT's TIME TO CREATE A SCHBANG
</motion.h1>

<motion.img  
  initial={{ x: 0, rotate: 0 }} 
  animate={{ x: "30vw" }} 
  transition={{ duration: 15, ease: "easeInOut",repeat: Infinity,  repeatType: "loop"  }} 
  src={horizontal_sprial} 
  className='w-8 h-8' 
  alt="" 
/>

</div>
        <div className="group mt-10 flex items-center gap-5 ">
        <motion.h1 
  initial={{ x: 0 }} 
  animate={{ x: "30vw" }} 
  transition={{ duration: 15, ease: "easeInOut",repeat: Infinity,  repeatType: "loop"  }} 
  className='text-3xl font-extrabold leading-none tracking-tight text-white drop-shadow-[0_1px_2px_rgba(1,1,1,1)]'
>
  IT's TIME TO CREATE A SCHBANG
</motion.h1>

<motion.img  
  initial={{ x: 0, rotate: 0 }} 
  animate={{ x: "30vw" }} 
  transition={{ duration: 15, ease: "easeInOut",repeat: Infinity,  repeatType: "loop"  }} 
  src={horizontal_sprial} 
  className='w-8 h-8' 
  alt="" 
/>

</div>

           </div>
        </div>
    </div>
  )
}

export default Hero