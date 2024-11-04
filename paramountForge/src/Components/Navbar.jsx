import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setMenuVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setMenuVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className={`w-full z-10 fixed justify-between flex items-center px-[10vw] bg-white transition-transform duration-300 ${menuVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="logo">
                <img src={logo} alt="company logo" />
            </div>
            <div className="links flex gap-10 text-[1vw] font-semibold">
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Investors</a>
                <a href="">Manufacturing Process</a>
                <a href="">Products</a>
                <a href="">Quality</a>
                <a href="">Clients</a>
                <a href="">Contact Us</a>
            </div>
        </div>
    );
}

export default Navbar;
