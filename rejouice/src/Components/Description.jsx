import React from 'react'

const Description = () => {
  return (
    <div data-scroll data-scroll-speed='0.2' className='w-full pt-16 px-10 bg-[#faf8f3] font-nb-internal'>
        <div className="head w-[95%] flex justify-between text-4xl opacity-80 border-b-2 pb-4 border-zinc-600">
            <h1>Tomorrow's Brands, Today<sup>TM</sup></h1>
            <h1>Paris / San Diego</h1>
        </div>
        <div className="para w-[90%] ml-12">
            <p className="text-[4vw] leading-none tracking-tight ">&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  We are a venture firm and digital agency. Our mission is to transform founders' visions into remarkable brands. Choose traditional compensation or an equity offset through our Venture Model - your vision, your decision.</p>
        </div>
        <div className="agency pt-96 flex flex-col justify-center items-center">
            <h3 className='text-2xl opacity-80 mb-5'>Agency & Venture<span className='ml-1 rounded-full opacity-100 bg-black text-white text-sm p-3'>Models</span></h3>
            <h1 className='text-6xl w-[40vw] text-center leading-none'>Explore Our services<br/> and engagement models</h1>
        </div>
    </div>
  )
}

export default Description