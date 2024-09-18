import React from 'react';
import vid1 from '../Assets/Website-homepage-Work-01_1.mp4';
import vid2 from '../Assets/Website-homepage-Work-02_1.mp4';
import vid3 from '../Assets/Website-homepage-Work-03_1.mp4';

const Work = () => {

  const handleMouseEnter = (e) => {
    e.target.play();
  };

  const handleMouseLeave = (e) => {
    e.target.pause();
    e.target.currentTime = 0; // Optional: Reset video to start
  };

  return (
    <div data-scroll data-scroll-speed='-.2' className='w-full px-10 bg-[#faf8f3] pt-80'>
      <div className="w-full flex justify-between text-4xl font-nb-internal mb-3">
        <h1>Transforming visions into brands.</h1>
        <h1>See the work</h1>
      </div>
      <div className="video flex gap-10">
        <div className="left w-1/3 h-[80vh]">
          <video
            loop
            muted
            className="w-full h-full object-cover"
            src={vid1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div> 
        <div className="mid w-1/3 h-[80vh]">
          <video
            loop
            muted
            className="w-full h-full object-cover"
            src={vid2}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="right w-1/3 h-[80vh] object-cover">
          <video
            loop
            muted
            className="w-full h-full"
            src={vid3}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
