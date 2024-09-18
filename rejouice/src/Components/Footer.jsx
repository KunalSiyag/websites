import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Footer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // GSAP animation for "rejouice" letters
    gsap.fromTo(
        '.footerheading',
        { opacity: 0, y: 50 }, // Start below the screen (y: 300px)
        { 
          opacity: 1, 
          y: 0, // End at the normal position (y: 0)
          stagger: 0.3, // Animate letters one after another
          duration: 2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.footerheading',
            start: 'top 80%', // Start animation when the top hits 80% of the viewport
            end: 'top 20%',   // End when the top hits 20% of the viewport
            toggleActions: 'play reset play reset' // Play only once when entering
          }
        }
      );
    }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div data-scroll data-scroll-speed='-0.1' className="pt-10 overall relative font-nb-internal w-full bg-[#0e0e0e] text-white">
      <div className="top px-10 flex justify-between opacity-70">
        <div className="first flex flex-col">
          <h1 className='text-4xl'>Relax. We've got you.</h1>
          <div className='w-36 h-16 mt-10 flex justify-center items-center border-zinc-300 font-semibold border-2 rounded-full'>Take a Seat</div>
        </div>
        <div className="second text-2xl flex flex-row gap-10">
          <div className="left flex flex-col">
            <a href="">Home</a><a href="">Work</a><a href="">About</a><a href="">Services & Models</a> <a href="">Contact</a>
          </div>
          <div className="right flex flex-col">
            <a href="">X</a><a href="">Instagram</a><a href="">LinkedIn</a>
          </div>
        </div>
      </div>

    
      <div className="mid pt-48 px-10 flex justify-between opacity-70 align-bottom text-xl">
        <div className="first">
          <h1>San Diego—California<br />Paris—France</h1>
        </div>
        <div className="second flex gap-10">
          <h1>biz@rejouice.com</h1>
          <h1>©2023 legal</h1>
        </div>
      </div>

      <div className="bottom px-10">  
        {"rejouice".split('').map((item, index) => (
          <span key={index} className='footerheading text-[23vw] font-rejouice leading-none px-5 z-10'>
            {item}
          </span>
        ))}     
      </div>
    </div>
  );
};

export default Footer;
