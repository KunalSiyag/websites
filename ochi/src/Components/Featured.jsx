import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {
    const [hoverIndex, setHoverIndex] = useState(null);

    const handleMouseEnter = (index) => setHoverIndex(index);
    const handleMouseLeave = () => setHoverIndex(null);

    const projects = [
        {
            title: "CARDBOARD SPACESHIP",
            img: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
        },
        {
            title: "AH2 & MATT HORN",
            img: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
        }
    ];

    return (
        <div data-scroll data-scroll-speed='-.07' className='w-full py-20'>
            <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">  
                <h1 className='text-7xl -mb-8'>Featured Projects</h1> 
            </div>
            <div className="px-20">
                <div className="cards w-full flex gap-10 mt-10">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            className="cardcontainer relative w-1/2 h-[75vh]"
                        >
                            <motion.h1
                                className={`absolute ${index===1? "right-full top-1/2 translate-x-1/2 -translate-y-1/2": "left-full top-1/2 -translate-x-1/2 -translate-y-1/2"}  z-[9] leading-none tracking-tighter text-[5vw] whitespace-nowrap`}
                                initial={{ opacity: 0 }}
                                animate={hoverIndex === index ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {project.title}
                            </motion.h1>
                            <div className="card w-full h-full rounded-xl overflow-hidden">
                                <img className='w-full h-full bg-cover' src={project.img} alt={project.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Featured
