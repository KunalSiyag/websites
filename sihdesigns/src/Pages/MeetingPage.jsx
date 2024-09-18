import React from 'react';

const MeetingPage = () => {
  return (
  <div className="relative -z-[100] w-full h-screen bg-[#2F2E3E] overflow-hidden">
       <div className="background">
        <div className="absolute -z-10 -bottom-[7vw] -left-[3vw] circle w-[20vw] h-[20vw] rounded-full bg-[#F4B840]"></div>
        <div className="absolute -z-10 left-1/3 -top-[5vw] circle w-[15vw] h-[15vw] rounded-full bg-[#60D3D8]"></div>
        <div className="absolute -z-10 -right-[4vw] -top-[4vw] circle w-[11vw] h-[11vw] rounded-full border-[2px] border-zinc-500"></div>
       </div>
       <div className="main z-50 w-full h-full flex justify-center items-center">
            <div className='w-3/4 h-[80vh] bg-[#19161F] rounded-2xl container'>
            <div className="top w-3/4 fixed text-white text-1xl flex justify-between items-center px-10 pt-10">
                <div className="lefttop flex gap-48 items-center ">
                <div className='logo-txt text-3xl'>Regs</div>
                <div className="links flex gap-10">
                    <a href="">About</a><a href="">Academy</a><a href="">Features</a>
                </div>
                </div>
                <div className="righttop">
                <div className="signin bg-yellow-500 px-4 py-2 rounded-full rounded-br-none">Sign In</div>
                </div>
            </div>
            <div className="w-full h-full bottom flex">
                <div className="body text-white w-1/2 pt-60 px-40  flex flex-col justify-center items-center">
                    <div className=" relative para">
                    <div className="absolute pointimg -z-5 w-36 h-36 -left-24 -top-24 border-2 opacity-60">
                    </div>
                        <h1 className='text-4xl font-semibold'>Great Meetings Are <br/> Just The Beginning</h1>
                        <p className='opacity-75 mt-5'>We help your team build great meeting habits through collaborative agendas and easy-to-schedule meetings.</p>
                    </div>
                    <div className="button font-semibold mt-10 flex gap-10">  
                               <div className="w-32 h-16 justify-center flex items-center bg-[#3F93FB] px-4 py-2 rounded-full rounded-br-none">Start Today!</div>
                               <div className="w-32 h-16  flex items-center justify-center bg-[#2B2937] px-4 py-2 rounded-full rounded-br-none">Registration</div>
                    </div>
                    <div className="googlemeet pt-32 pr-32 flex justify-center items-center gap-2">
                        <div className="circle w-20 h-20 rounded-full bg-[#2B2937]"></div>
                        <h1 className='opacity-75'>Join on <br/>Google Meets</h1>
                    </div>
                </div>
                <div className="w-1/2 h-full flex gap-10">
                <div className="left flex flex-col gap-10">
                <div className="item1 w-40 h-[20vw] rounded-full bg-green-500"></div>
                <div className="item2 w-40 h-[20vw] rounded-full bg-green-500"></div>
                </div>
                <div className="mid flex flex-col gap-10"> 
                    <div className="item3 w-36 h-[20vw] rounded-full bg-green-500"></div>
                <div className="item4 w-40 h-[20vw] rounded-full bg-green-500"></div>
                <div className="item5 w-40 h-[20vw] rounded-full bg-green-500"></div>
                </div>
               <div className="right flex flex-col gap-10">
               <div className="item6 w-40 h-[20vw] rounded-full bg-green-500"></div>
               <div className="item7 w-40 h-[20vw] rounded-full bg-green-500"></div>
               </div>
                
                </div>
            </div>
            </div>
       </div>
  </div>
)}

export default MeetingPage;
