import React from 'react'
import logo from '../Assets/64804f295294d986354397af_logo animation1 updated1.gif'
function Nav() {
  return (
    <div className='w-full flex justify-between items-center px-16 pt-5'>
        <div className="logo-text">
        <img src={logo} className='w-[20vw] h-10'/>
        </div>
        <div className="links flex items-center gap-20 text-1xl font-semibold">
            <a href="">Work</a>
            <a href="">Solutions</a>
            <a href="">About</a>
            <a href="">Resources</a>
            <a href="">Careers</a>
            <a href="" className='text-white flex justify-center items-center h-14 px-10 bg-black rounded-full'>Contact Us</a>
        </div>
    </div>
  )
}

export default Nav