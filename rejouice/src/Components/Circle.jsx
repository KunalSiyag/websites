import React from 'react'

const Circle = () => {
  return (
    <div data-scroll data-scroll-speed='0.5' className='pt-36 bg-[#faf8f3] flex justify-center items-center '>
        <div className="circle relative w-[36vw] rounded-full h-[36vw] bg-gradient-to-r from-indigo-500 via-orange-500 to-transparent border-white bg- border-2">
            <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-4xl text-white'><span className='text-[5vw]'>2 seats </span> <br/>available for 2024</h1>
        </div>
    </div>
  )
}

export default Circle