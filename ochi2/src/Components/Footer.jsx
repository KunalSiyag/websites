import React from 'react'

const Footer = () => {
  return (
    <div data-scroll data-scroll-speed='-.07' className='pt-10 w-full flex justify-between px-16 pb-10'>
        <div className="left">     
            <h1 className="capitalize leading-none tracking-tighter text-8xl font-bold">EYE-<br/>OPENING</h1>
        </div>
        <div className="right pr-24">
        <h1 className="capitalize leading-none tracking-tighter text-8xl font-bold">PRESENTATIONS</h1>
        <div className="Info flex flex-row justify-between items-center">
            <div className="left flex flex-col gap-10">
            <span className='text-3xl'>S:</span>
                <div className='links flex flex-col'>
                {["Instagram","Behance","Facebook","Linkedin"].map((item,index)=>
                    <a href="#" className="underline text-xl">{item}</a>)
                    }
                </div>
                <span className='text-3xl'>L:</span>
                <div className='links flex flex-col'>
                {["202-1965 W 4th Ave","Vancouver, Canada","30 Chukarina St","Lviv, Ukraine"].map((item,index)=>
                    <a href="#" className={`underline text-xl ${index===2 && "mt-5"}`}>{item}</a>)
                    }
                </div>
                <span className='text-3xl'>E:</span>
                <div className='links flex flex-col'>
                {["hello@ochi.design"].map((item,index)=>
                    <a href="#" className="underline text-xl">{item}</a>)
                    }
                </div>
            </div>
            <div className="right flex flex-col gap-3">
                <span className='text-3xl'>M:</span>
                <div className='links flex flex-col'>
                {["Home","Services","Our work","About us","Insights","Contact us"].map((item,index)=>
                    <a href="#" className="underline text-xl">{item}</a>)
                    }
                </div>
                
            </div>
        </div>

        </div>
    </div>
  )
}

export default Footer