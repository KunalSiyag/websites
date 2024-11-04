import React from 'react'
import { GooglePlayButton,AppStoreButton } from "react-mobile-app-button";
import phoneImg from '../../assets/app.png'
import phoneImg2 from '../../assets/app2.png'
import appStores from '../../assets/app_stores.png'
function AppInvite() {
  return (
    <div data-scroll data-scroll-speed="0.2" className='w-full flex gap-10 mb-10 pb-10 pt-28 px-20 items-center bg-gradient-to-b from-blue-500 to-blue-900'>
        <div className="phoneImg w-1/2 flex justify-center"><img style={{width:'800px',marginBottom:'-40px'}} src={phoneImg2}></img></div>
        <div className="txt w-1/2 flex gap-10 flex-col justify-center text-center">
            <h1 className=' text-[30px] text-white leading-none tracking-tight'>Finding your job shall be one tap away!</h1>
            <h1 className='tracking-tighter text-[120px] font-extrabold leading-none text-white'>COMING SOON!</h1>
            {/* <div className="button flex gap-10 align-middle justify-center">
                <GooglePlayButton
                url=" " 
               theme={"dark"}
               width="10vw"
               height="3vw"
               className={"custom-style"}
      />
      <AppStoreButton
        url=""
         width="10vw"
               height="3vw"
        theme={"dark"}
        className={"custom-style"}
      /></div> */}
        <img src={appStores}/>
            
        </div>
    </div>
  )
}

export default AppInvite
