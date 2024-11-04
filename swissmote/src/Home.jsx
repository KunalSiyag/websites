import React from 'react'

const Home = () => {
  return (
    <div className='main w-full min-h-screen bg-[#111010] text-white'>
      <nav className='w-full fixed flex justify-between items-center bg-[#101010] px-20'>
        <div className="logo">
          <img src='https://cdn.prod.website-files.com/63c83f9e1e6f274bae72db81/642e01bb9bff16f4a6aa50f0_Swissmote%20Logo%20White.png' className='w-28 h-28'></img>
        </div>
        <div className="links flex gap-10 text-lg font-semibold items-center">
          <a href="">About Us</a>
          <a href="">Team Swissmote</a>
          <a href="">FAQ</a>
          <a href="">Recruitment Options</a>
          <div className="wrapper flex items-center">
            <img src="https://cdn.prod.website-files.com/63c83f9e1e6f274bae72db81/66b1ab7a2a3c6881b166c52f_download.svg" className="h-14" alt="" />
            <div className='bg-[#C0282D] h-14 items-center flex w-36 justify-center gap-4'>
              <h1 className='font-medium'>Hire Now</h1>
              <img src="https://cdn.prod.website-files.com/63c83f9e1e6f274bae72db81/63c83f9f1e6f270c1e72dba5_Vector.svg"></img>
            </div>
            <img src="https://cdn.prod.website-files.com/63c83f9e1e6f274bae72db81/66b1ab7a121fb50870bc6c53_download%20(1).svg" className="h-14" alt="" />
          </div>
        </div>
      </nav>
      <div className="hero w-full h-screen bg-[#111010] px-20 flex justify-between items-center">
        <div className="left w-1/2">
          <h1 className='text-6xl font-semibold tracking-tighter leading-none'>Hire Remote<br/> Superstars</h1>
          <h1 className='text-6xl font-semibold tracking-tighter leading-none text-red-600'>Experience Their Work Before You Hire</h1>
          <p className='text-lg'>We source thousands of candidates, have them complete your 'test project,' and deliver only the top talent, ready to join your team.</p>
          <div className="wrapper mt-10 flex items-center">
            <img src="https://cdn.prod.website-files.com/63c83f9e1e6f274bae72db81/66b1ab7a2a3c6881b166c52f_download.svg" className="h-14" alt="" />
            <div className='bg-[#C0282D] h-14 items-center flex w-36 justify-center gap-4'>
              <h1 className='font-medium'>Hire Now</h1>
              <img src="https://cdn.prod.website-files.com/63c83f9e1e6f274bae72db81/63c83f9f1e6f270c1e72dba5_Vector.svg"></img>
            </div>
            <img src="https://cdn.prod.website-files.com/63c83f9e1e6f274bae72db81/66b1ab7a121fb50870bc6c53_download%20(1).svg" className="h-14" alt="" />
          </div>
        </div>
        <div className="right w-1/3">
          <img src="https://cdn.prod.website-files.com/63c83f9e1e6f274bae72db81/66c86f7f56218fa6267285a8_swissmote%20hero%20img.webp" alt="" />
        </div>
      </div>
      <div className="howitworks px-20">
        <div className="heading flex justify-center text-[6vw] font-bold"><h1>Imagine...</h1></div>
        <div className="slider"></div>
        <div className="foot">
          <div className='flex items-end'>
            <div>
              <h1 className='text-6xl w-88 text-nowrap mr-10 font-semibold'>How it Works</h1>
            </div>
            <div className='line h-2 w-full bg-black'></div>
          </div>
         <div className="flex gap-20"> 
          <div className='mt-10'>
            <img src="https://cdn.prod.website-files.com/63c83f9e1e6f274bae72db81/63c83f9f1e6f270be172dbb4_Group%20268.svg"></img>
            <div className="heading text-[5vw] font-bold">01</div>
            <div className="para text-[0.98vw]"><strong>Tell us what you are hiring for </strong>by jumping on a call with us, sending us a quick video, or providing us with a job description.</div>
          </div>
          <div className='mt-10'>
            <img src="https://cdn.prod.website-files.com/63c83f9e1e6f274bae72db81/63c83f9f1e6f27039372dbb3_Group%20314.svg"></img>
            <div className="heading text-[5vw] font-bold">02</div>
            <div className="para text-[0.98vw]"><strong>We create a "mini challenge"</strong> for candidates to complete. The top 1% of candidates complete high quality submissions, ensuring great talent.</div>
          </div>
          <div className='mt-10'>
            <img src="https://cdn.prod.website-files.com/63c83f9e1e6f274bae72db81/63c83f9f1e6f2762c172dbb2_Group%20315.svg"></img>
            <div className="heading text-[5vw] font-bold">03</div>
            <div className="para text-[0.98vw]"><strong>We send you the best candidates</strong> for final approval and then get the contracts signed so your company can flourish!</div>
          </div>
          </div>
        </div>
      </div>
      <div className="process mt-20 w-full px-20 bg-black">
        <div className='pt-20 heading flex justify-center items-center flex-col text-6xl font-bold leading-none tracking-tighter'>
          <p className='text-center flex flex-col mb-1'>
            <span>Our process finds you</span>
          <span className='text-red-700'>the top 1% of candidates</span>
          <span> ‍with minimal effort </span>
           </p>     
           <span>           
            <img src="https://cdn.prod.website-files.com/63c83f9e1e6f274bae72db81/66b2053069029512d7bf188f_download%20(8).svg" alt="" />
           </span>    
          </div>
          <div className="body">
            <div className="top flex gap-32 items-center">     
              <div className="left w-1/2"><img src="https://cdn.prod.website-files.com/63c83f9e1e6f274bae72db81/66c5ea04ae88ada56ccdfbe6_benefits%20ex%20graphic%201-min.png" alt="" /></div>
            <div className="right w-1/2">
                   <strong className='text-xl'>We source top talent from around the globe to find the perfect fit for your needs.</strong>
                   <p className='text-lg pb-10 border-b-2 border-gray-200'>By automating outreach on global recruitment platforms, we cast a wide net to ensure we uncover the best, undiscovered talent for you.</p>

</div></div>
<div className="mid flex gap-32 items-center">     
            <div className="left w-1/2">
                   <strong className='text-xl'>Let us handle the complexities while you focus on what matters most.</strong>
                   <p className='text-lg pb-10 border-b-2 border-gray-200'>Skip the hassle of sorting through thousands of applicants. Our streamlined process delivers the top 1% of talent directly to you. Take the next step and find your perfect match effortlessly.

</p>

</div>
<div className="right w-1/2"><img src="https://cdn.prod.website-files.com/63c83f9e1e6f274bae72db81/66c5ea0437e345182fad5313_Benefits%20ex%20garphic%202-min.png" alt="" /></div>
</div>

       
          </div>
      </div>
    </div>
  )
}

export default Home