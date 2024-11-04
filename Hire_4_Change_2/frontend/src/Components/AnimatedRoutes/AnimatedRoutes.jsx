import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import { AnimatePresence } from 'framer-motion';
import Profile from '../../pages/Profile/Profile';
import Gigs from '../../pages/Gigs/Gigs';
import Gig from '../../pages/gig/Gig'; // Import the Gig component
import Messages from '../../pages/Messages/Messages';
import NewGig from '../NewGig/NewGig'
import MyGigs from '../MyGigs/MyGigs'
const AnimatedRoutes = () => {
    const location = useLocation();
    
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<Gigs />} />
		<Route path ="/add" element={<NewGig />} />
		<Route path ="/mygigs" element={<MyGigs />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/search/:id" element={<Gig />} /> {/* Ensure the correct path for Gig */}
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
