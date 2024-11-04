import React from 'react'

function Invite() {
  return (
    <div data-scroll data-scroll-speed="0.6" className='w-full mb-10 bg-orange-400 px-20 overflow-hidden'>
        <div className="top pt-20 flex gap-10">
            <div className="Employer rounded-3xl p-20 flex flex-col justify-center gap-10 items-start w-1/2 bg-white">
            <h1 className='text-6xl font-bold'>Employers</h1>
            <h3 className='text-xl'>Find professionals from around <br/>the world and across all skills.</h3>
            <div className="postJob w-[15vw] h-[3vw] flex items-center justify-center bg-black rounded-full text-white text-2xl">Post jobs for free</div>
            </div>
            <div className="Employer rounded-3xl p-20 flex flex-col justify-center gap-10 items-start w-1/2 bg-white">
            <h1 className='text-6xl font-bold'>Candidates</h1>
            <h3 className='text-xl'>Build your professional profile,<br/>find new job opportunities.</h3>
            <div className="postJob w-[15vw] h-[3vw] flex items-center justify-center bg-black rounded-full text-white text-2xl">Upload your CV</div>
            </div>
    
        </div>
        <div className="bottom flex flex-col items-center justify-center mt-28 bg-orange-400">
        <h1 className="text-6xl font-semibold mb-10">Job-ing Made Easy</h1>

<div className="flex flex-row items-center justify-center gap-24 w-full">
  
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-white border-[1px] border-black rounded-full flex items-center justify-center mb-4">
      <span className="text-2xl font-bold]">1</span>
    </div>
    <h2 className="text-lg font-semibold mb-2">Sign Up</h2>
    <p className="text-[0.8vw]">Join Hiring 4 Change in a few clicks and <br/> don't disappoint your parents for once.</p>
  </div>

  <div className="hidden md:block w-25 h-0.5 bg-black"></div>

  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-white  border-[1px] border-black  rounded-full flex items-center justify-center mb-4">
      <span className="text-2xl font-bold">2</span>
    </div>
    <h2 className="text-lg font-semibold mb-2">Apply</h2>
    <p className="text-[0.8vw]">Join Hiring 4 Change in a few clicks and <br/> don't disappoint your parents for once.</p>
  </div>

  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-white  border-[1px] border-black  rounded-full flex items-center justify-center mb-4">
      <span className="text-2xl font-bold">3</span>
    </div>
    <h2 className="text-lg font-semibold mb-2">Start Job</h2>
    <p className="text-[0.8bw]">Join Hiring 4 Change in a few clicks and <br/> don't disappoint your parents for once.</p>
  </div>
</div>            
        </div>
        
        
    </div>
  )
}

export default Invite