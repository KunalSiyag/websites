import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-[60vh] pt-10 border-t-2 border-zinc-600 flex flex-row gap-5 pb-10 px-10'>
        <div className="rightdiv  text-[#cdea68] relative w-1/2 bg-[#004d43] rounded-xl">
        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl  font-semibold'>Ochi</h1>
        <div className='copyright absolute border-[#cdea68] top-[85%] ml-7 border-[1px] rounded-3xl text-xl px-2 py-2'><h1>@2019-2022</h1></div>
        </div>
        <div className="leftdivs w-1/2 flex gap-5">
            <div className="relative first w-1/2 bg-[#212121] rounded-xl ">
            <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"/>
            <div className='copyright absolute top-[85%] ml-7 border-[1px] rounded-3xl text-xl px-2 py-2'><h1>RATING 5.0 ON CLUTCH</h1></div>

            </div>
            <div className="relative second w-1/2 bg-[#212121] rounded-xl"><
                img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"/>
                <div className='copyright absolute top-[85%] ml-7 border-[1px] rounded-3xl text-xl px-2 py-2'><h1>BUSINESS BOOTCAMP ALUMNI</h1></div>

                </div>
        </div>
    </div>
  )
}

export default Cards