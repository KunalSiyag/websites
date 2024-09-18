import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-speed='-.05' className="-mt-2 w-fullrounded-t-3xl bg-[#cdea68] z-[999] text-black font-['Neue_Montreal']">
        <div className="header pl-20 pt-20">
        <p className=" font-medium w-[70%] text-[3vw]">Ochi is a strategic presentation agency for forward-thinking businesses that need to <u>raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</u></p>
        </div>
        <div className="mid border-t-[1px] border-b-[1px] pb-16 border-zinc-500 font-normal text-xl text-zinc-800 flex justify-around pt-10 mt-12">
            <div className="pleft"><p>What you can expect:</p></div>
            <div className="pmid w-[19%] flex flex-col gap-10">
            <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
            <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
            <div className="pright flex flex-col mt-24">
                <span className="mb-5">S:</span>
                <a className="underline">Instagram</a>
                <a className="underline">Behance</a>
                <a className="underline">Facebook</a>
                <a className="underline">Linkedin</a>
            </div>
        </div>
        <div className="foot flex justify-between mx-10">
            <div className="lefttext">
                 <h1 className="text-[4vw]">Our approach:</h1>
                 <div className ='button flex justify-around items-center w-52 h-[3.3vw] rounded-full bg-[#222121] text-xl text-white'>READ MORE<span className='w-3 h-3 rounded-full bg-white'></span></div>
            </div>
            <div className="rightimg w-[45vw] h-[35vw] rounded-2xl mt-8 mb-12 bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')] bg-cover">
            </div>
        </div>

    </div>
  )
}

export default About