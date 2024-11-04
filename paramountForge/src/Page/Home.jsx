import React from 'react'
import heavy from '../assets/heavy.jpg'
import forging from '../assets/forge.jpg'
import Hero from '../assets/Hero.mp4'
import chemicalEnergy from '../assets/chemical-energy.jpg'
import fertilizerIndustry from '../assets/fertilizer-industry.jpg'
import nuclearPower from '../assets/nuclear-power.jpg'

const Home = () => {
  return (
    <div className='w-full'>
        <div className='section1 h-screen relative flex justify-center items-center'>
            <div className='w-full h-screen'>           
                <video width="100%" height="100%" className='rounded-b-3xl' autoPlay loop muted src={Hero}></video>
            </div>
           <h1 className='text-[9vw] absolute bottom-0 right-0 border-b-8 leading-none tracking-tighter mr-10 border-zinc-600 text-zinc-300 font-bold'>Passion For Excellence</h1>
        </div>
        <div className="section2 mt-[22vw]  flex flex-col gap-[2.5vw] px-[10vw] justify-center items-center">
            <div className='wrapper flex gap-[2.5vw]'>
            <div>       
                {['PARAMOUNT','SPECIALITY','FORGINGS','LIMITED'].map((item,index)=>{
                               return <h1 className='text-[6vw] leading-none tracking-tighter font-extrabold'>{item} </h1>
                  })
                }
            </div>
            <div>
                <h5 className='text-[1vw] leading-none tracking-tighter opacity-70 font-bold'>Has achieved 60 years of continued success</h5>
                <p className='w-[40vw] leading-[2.4vw] tracking-tighter mt-4 text-[1.9vw] text-semibold'>in manufacturing excellent quality <img src={forging} className='w-[5vw] h-[3vw] rounded-full inline-block' alt="" /> that meet stringent requirements of Oil & Gas, Nuclear, Petrochemicals and other <img src={heavy} className='w-[5vw] h-[3vw] rounded-full inline-block' alt="" /> Engineering Industries.<br/>The primary aim of the company is <strong>'Excellence'</strong> achieved over a period of years through Zeal and Qualified culture inculcated in its management and workforce.</p>
            </div>
            </div>
            <div className="mt-[5vw] button w-[10vw] h-[3vw] bg-zinc-400 hover:bg-zinc-600 cursor-pointer relative rounded-full"><h1 className='text-[1vw] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Read More</h1></div>
        </div>
        <div className="section3 px-[10vw] mt-[10vw] flex flex-col gap-10">
            <div className='border-b-4 border-zinc-600'>            
                <h1 className='text-[5vw] font-semibold'>MARKETS & PRODUCTS</h1>
            </div>
            <div className='flex my-[2vw] gap-[2vw] justify-between items-center'>
            <div className='img'>
                <img src={chemicalEnergy}></img>
            </div>
            <div className="markets flex gap-[1.5vw] text-[1.3vw] font-medium leading-none tracking-tighter">
                <div> 
                    {["Petrochemicals","Chemicals and Fertilizers","Thermal / Wind / Nuclear Power"].map((item,index)=>{
                        return <h1>{item}</h1>
                    })}
                </div>
                <div> 
                    {["General & Heavy Engineering","Pressure Vessels / Heat Exchanges","Pipeline"].map((item,index)=>{
                        return <h1>{item}</h1>
                    })}
                </div>
                <div></div></div>
            </div>
            <div className='products'>

            </div>
        </div>
    </div>
  )
}

export default Home