import React from 'react'

function App() {
  return (
    <div className='w-full min-h-screen bg-black text-white -z-[99]'>
      <div className="hero page1 pt-56 flex flex-col justify-center items-center gap-48 -z-[99]">
        <div className="heading flex flex-col justify-center items-center">
        <h1 className='text-6xl font-bold uppercase text-center relative flex flex-col justify-center items-center'><div className='-top-24 -left-24 absolute border-4 border-zinc-500 box w-32 h-32'></div> <h1 className='z-[1]'>Empower Your Freelance Journey with <br/> <span>Smart Work <h1 className='inline-block px-3 py-1 pb-2 bg-red-600 rounded-full'>and</h1> Future Security</span></h1></h1>
        <h3 className='opacity-75 mt-3 text-xl'>Find projects, track your progress, and secure your earnings with our integrated pension and certification systems</h3>
        <div className="buttons flex gap-10">
        <div className="sign flex items-center justify-center px-4 py-2 mt-3 font-semibold bg-yellow-400 rounded-full rounded-bl-none text-2xl uppercase">Start</div>
        <div className="find flex items-center justify-center px-5 py-2 mt-3 font-semibold bg-zinc-400 rounded-full text-2xl rounded-br-none uppercase">Find</div>
      </div>
      </div>
      
      <div className='w-full border-t-2 border-zinc-400 border-dotted border-b-2  pb-20 pt-20 text-4xl flex justify-center items-center'> 
       <p className='w-2/3 text-right font-bold leading-none tracking-tighter'>
        "Seamlessly manage your freelance career with real-time project tracking, an automatic savings system, and a behavior certification that proves your professionalism. Join the freelance platform built for your success."
       </p> 
      </div>
      </div>
      <div className="page2 w-full pt-32 px-20">
        <div className="heading"><h1>Features</h1></div>
        <div className="flex gap-10"><div className="left w-1/2 h-[70vh] bg-zinc-600">

</div>
<div className="right w-1/2 h-[70vh] overflow-scroll overflow-x-hidden">
         <section className='flex h-[70vh] flex-col justify-center px-10 border-t-2 border-zinc-200'>
          <h1 className=' text-4xl font-bold uppercase'>Real-Time Project Tracking with Map Integration</h1>
          <h3 className='text-xl'>Manage Projects Like a Pro</h3>
          <p className='mt-10 text-3xl w-2/3 text-right ml-60'>Track your projects visually on a map and manage tasks with ease. Our intuitive map integration lets you monitor every step of your freelance work, ensuring nothing falls through the cracks.</p>
          </section>
         <section className='flex h-[70vh] flex-col justify-center px-10 border-t-2 border-zinc-200'>
          <h1 className=' text-4xl font-bold uppercase'>Secure Your Future with Automatic Savings</h1>
          <h3 className='text-xl'>Earn & Save with Every Project</h3>
          <p className='mt-10 text-3xl w-2/3 text-right ml-60'>Our built-in National Pension System automatically deducts a portion of your earnings toward a Systematic Investment Plan (SIP). So, while you work, you’re also saving for the future.</p>
          </section>
         <section className='flex h-[70vh] flex-col justify-center px-10 border-t-2 border-zinc-200'>
          <h1 className=' text-4xl font-bold uppercase'>Build Trust with Behavioral Certification</h1>
          <h3 className='text-xl'>Earn a Behavioral Certificate and stand out to clients.</h3>
          <p className='mt-10 text-3xl w-2/3 text-right ml-60'>Earn a certificate that highlights your reliability and professionalism based on real data. This ensures clients know they’re working with someone they can trust.</p>
          </section>
       
</div></div>
              
      </div>
    </div>
  )
}

export default App