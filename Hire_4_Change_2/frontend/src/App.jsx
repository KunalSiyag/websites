import React from 'react'
import Navbar from './Components/Navbar/Navbar'

import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AnimatedRoutes from './Components/AnimatedRoutes/AnimatedRoutes';
function App() {
  return (
     <Router>
         <div className='main w-full min-h-screen'>
         <Navbar/>
         <AnimatedRoutes/>
       <Footer/>
     </div>
   </Router>
  )
}

export default App