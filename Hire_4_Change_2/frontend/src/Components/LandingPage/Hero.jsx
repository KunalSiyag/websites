import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import indiaMap from '../../assets/indian_map.png'
import { Navigate, useNavigate } from 'react-router-dom'
import '../../assets/assets.css';
import './LandingPage.css';
import './Hero.css';
import { color } from 'framer-motion';

function Hero() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/search?query=${encodeURIComponent(search.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div data-scroll data-scroll-speed="0.2" className='w-full flex justify-between px-20 border-zinc-400'>
      <div className="indiamap absolute w-[58vw] left-[3vw] -top-25 -z-[1] opacity-20">
        <img className="w-full h-full " src={indiaMap} alt="India Map" />
      </div>
      <div className="w-1/2 h-screen flex flex-col justify-center items-center">
        <h1 className='text-[5vw] font-bold leading-[5.5vw] tracking-tighter'>Find your <br/><span style={{ color: '#ff6000' }}>new job</span> with us</h1>
        <div className="relative">
          <input 
            placeholder='Search for a Job' 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className='text-left pl-14 text-2xl mt-3 border-[1px] w-[32vw] h-[3vw] rounded-full'
          />
          <MagnifyingGlassIcon 
            className="absolute left-[28vw] top-[2vw] transform -translate-y-1/2 w-10 h-10 text-gray-500 cursor-pointer" 
            onClick={handleSearch} 
          />
        </div>
         <div className="stats">
          <div className="stat">
            <h2>55%</h2>
            <p>Find it difficult to connect</p>
          </div>
          <div className="line">
            <span></span>
    </div>
          <div className="stat flex">
            <h2>43% </h2>
            <p>Employees in bluecollar sectors</p>
          </div>
          <div className="line">
            <span></span>
          </div>
          <div className="stat">
            <h2>60%</h2>
            <p>Shelters Overcrowded</p>
          </div>
         </div>
        </div>
        <div className="w-1/2 pl-[3vw] flex flex-row gap-60 h-full images">
        <div className="relative">
            <div className="absolute top-[10vw] wrapper -z-[1] flex flex-col gap-10 ">
                <div className='freelancer-container' id='freelancer-1'></div>
                <div className='freelancer-container' id='freelancer-2'></div>
            </div>
        </div>
        <div className="relative">
        <div className="absolute -top-[5vw] wrapper -z-[1] flex flex-col gap-10 ">
                <div className='freelancer-container' id='freelancer-3'></div>
                <div className='freelancer-container' id='freelancer-4'></div>
                </div>
        </div>
    
        <div className="relative">
        <div className="absolute top-[4vw] wrapper -z-[1] flex flex-col gap-10 ">

                <div className='freelancer-container' id='freelancer-5'></div>
                <div className='freelancer-container' id='freelancer-6'></div>
                </div>
        </div>
        </div>  
    </div>
  )
}

export default Hero
