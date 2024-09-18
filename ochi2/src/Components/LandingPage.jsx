import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed='-1.5' className=' w-full h-screen pt-1'>
        <div className='textstructure mt-56 px-20'>
            {['We Create','Eye Opening','Presentations'].map((item,index)=>{
                return  (
                    <div className="masker">
                        <div className="w-fit flex items-center">
                   {index===1 && (< motion.div initial={{width:0}} animate={{width: "8vw"}} transform={{ease:[0.68, -0.6, 0.32, 1.6],duration:1}} className="w-[8vw] h-[5vw] mr-4 bg-red-600 rounded-lg"></motion.div>)}
                <h1 className="uppercase text-[6vw] leading-[4.8vw] tracking-tighter font-semibold font-['Founders_Grotesk']">{item}</h1>
                </div>
                </div>
                )
            })}
           
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-36 flex justify-between items-center py-5 px-20">
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
                <p className='font-light text-2xl tracking-tight leading-none text-white'>{item}</p>
            ))}
            <div className='start flex items-center gap-2'>
            <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-xl uppercase'>Start the project</div>
            <div className='w-12 h-12 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
                <span className='rotate-[45deg]'>
                <FaArrowUpLong/>
                </span>
                </div>
        </div>
        </div>
        <div className='footer h-36 flex justify-center items-end'>
            <h1 className='text-zinc-400 text-2xl' >Scroll down</h1>
        </div>
  </div>
  )
}

export default LandingPage