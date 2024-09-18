import React, { useEffect } from 'react';
import video from '../Assets/cover.mp4';
import gsap from 'gsap';

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Cursor animation handlers
    const handleMouseMove = (event) => {
      gsap.to('.cursor', { 
        x: event.clientX, 
        y: event.clientY, 
        opacity: 1 
      });
    };

    const handleMouseEnter = () => {
      gsap.to('.cursor', { 
        scale: 1, 
        opacity: 1, 
        duration: 0.3 
      });
    };

    const handleMouseLeave = () => {
      gsap.to('.cursor', { 
        scale: 0, 
        opacity: 0, 
        duration: 0.3 
      });
    };

    tl.from('#loader h1', {
      opacity: 0,
      x:20,
      stagger:0.05,
      duration:0.5
    })
    .to('#loader h1', {
      opacity: 1,
      x: -10 ,
      stagger: 0.05,
      duration: 0.8
    })
    .to('#loader', {
      opacity: 0,
      duration: 0.5
    })
    .to('#loader', {
      display: 'none'
    })
    .from('.heading', {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1
    });

    // Add event listeners for the cursor
    const mainElement = document.querySelector('.main');
    if (mainElement) {
      mainElement.addEventListener('mousemove', handleMouseMove);
      mainElement.addEventListener('mouseenter', handleMouseEnter);
      mainElement.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup event listeners on unmount
    return () => {
      if (mainElement) {
        mainElement.removeEventListener('mousemove', handleMouseMove);
        mainElement.removeEventListener('mouseenter', handleMouseEnter);
        mainElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div>
      <div id="loader" className="fixed top-0 text-white text-[2vw] w-full h-full bg-black z-[99] flex justify-center gap-2 items-center">
        <h1>Tomorrow's</h1>
        <h1>Brand,</h1>
        <h1>Today</h1>
      </div>
      
      <div data-scroll data-scroll-speed='-0.5' className='main w-full h-screen relative'>
        <div className="fixed cursor w-36 h-36 rounded-full bg-orange-400 flex justify-center items-center opacity-0 scale-0">
          <h1 className='font-rejouice absolute text-2xl text-white'>Play Reel</h1>
        </div>

        <div className="videocontainer h-full w-full bg-black">
          <video width="100%" height="100%" autoPlay loop muted src={video}></video>
        </div>

        <div className="absolute bottom-0 left-0 w-full flex justify-center items-center z-10">
          {"rejouice".split('').map((item, index) => (
            <span key={index} className='inline-block heading text-[27vw] font-rejouice leading-[15vw] px-1 text-white'>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
