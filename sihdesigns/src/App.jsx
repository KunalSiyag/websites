import React, { useState } from 'react';
import MeetingPage from './Pages/MeetingPage';
import Jobster
 from './Pages/Jobster';
const App = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  const handleDivClick = (page) => {
    setSelectedPage(page);
  };

  switch(selectedPage){
    case 'meeting':
      return <MeetingPage />;
    case 'jobster':
      return <Jobster/>;
  }


  return (
    <div className='w-full flex flex-wrap gap-10 justify-center items-center min-h-screen bg-black text-white text-2xl'>
      <div 
        onClick={() => handleDivClick('meeting')} 
        className="w-[20vw] h-[20vw] rounded-xl bg-red-500 cursor-pointer flex justify-center items-center">
        Meeting Page
      </div>
      <div
          onClick={() => handleDivClick('jobster')}  
          className="w-[20vw] h-[20vw] rounded-2xl bg-pink-500 flex justify-center items-center">
          Jobster
      </div>
      <div className="w-[20vw] h-[20vw] rounded-2xl bg-blue-500 flex justify-center items-center"></div>
      <div className="w-[20vw] h-[20vw] rounded-2xl bg-green-500 flex justify-center items-center"></div>
      <div className="w-[20vw] h-[20vw] rounded-2xl bg-yellow-500 flex justify-center items-center"></div>
      <div className="w-[20vw] h-[20vw] rounded-2xl bg-zinc-500 flex justify-center items-center"></div>
    </div>
  );
};

export default App;
