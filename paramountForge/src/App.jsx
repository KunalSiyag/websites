import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Page/Home'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='w-full min-h-screen'>
         <Navbar/>
         <Home/>
         <Footer/>
    </div>
  )
}

export default App