import React from "react";
import logo from "../../assets/logo.png"
import LocomotiveScroll from "locomotive-scroll";
const Footer = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <footer data-scroll data-scroll-speed="-.1" className="bg-white w-full pt-10">
      <div className=" w-full h-full mx-auto px-6 lg:px-28">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          
          <div className="flex flex-col lg:w-1/3 mb-8 lg:mb-0">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Logo" className="w-100 h-10 mr-2" />
              <span className="text-2xl font-bold text-gray-800">Hire4Change</span>
            </div>
            <p className="text-gray-500">
            Hire4Change is a platform connecting freelancers with impactful projects to drive positive social and economic change.
            </p>
          </div>

          <div className="flex flex-wrap justify-between lg:justify-start w-full lg:w-2/3 mb-8 lg:mb-0">
            <div className="flex flex-col w-1/2 lg:w-1/5 mb-4 lg:mb-0">
              <h3 className="text-gray-800 font-bold mb-2">Product</h3>
              <ul>
                <li className="text-gray-500 mb-1">Features</li>
                <li className="text-gray-500 mb-1">Pricing</li>
                <li className="text-gray-500 mb-1">Case studies</li>
                <li className="text-gray-500 mb-1">Reviews</li>
                <li className="text-gray-500">Updates</li>
              </ul>
            </div>

            <div className="flex flex-col w-1/2 lg:w-1/5 mb-4 lg:mb-0">
              <h3 className="text-gray-800 font-bold mb-2">Company</h3>
              <ul>
                <li className="text-gray-500 mb-1">About</li>
                <li className="text-gray-500 mb-1">Contact us</li>
                <li className="text-gray-500 mb-1">Careers</li>
                <li className="text-gray-500 mb-1">Culture</li>
                <li className="text-gray-500">Blog</li>
              </ul>
            </div>

            <div className="flex flex-col w-1/2 lg:w-1/5 mb-4 lg:mb-0">
              <h3 className="text-gray-800 font-bold mb-2">Support</h3>
              <ul>
                <li className="text-gray-500 mb-1">Getting started</li>
                <li className="text-gray-500 mb-1">Help center</li>
                <li className="text-gray-500 mb-1">Server status</li>
                <li className="text-gray-500 mb-1">Report a bug</li>
                <li className="text-gray-500">Chat support</li>
              </ul>
            </div>

            <div className="flex flex-col w-1/2 lg:w-1/5 mb-4 lg:mb-0">
              <h3 className="text-gray-800 font-bold mb-2">Downloads</h3>
              <ul>
                <li className="text-gray-500 mb-1">iOS</li>
                <li className="text-gray-500 mb-1">Android</li>
                <li className="text-gray-500 mb-1">Mac</li>
                <li className="text-gray-500 mb-1">Windows</li>
                <li className="text-gray-500">Chrome</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:w-1/3 items-start">
            <h3 className="text-gray-800 font-bold mb-2">Subscribe to our newsletter</h3>
            <p className="text-gray-500 mb-4">
            Stay updated to the latest freelancing opportunities, platform updates, and tips to boost your career!
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-100 p-2 rounded-l-lg focus:outline-none w-64"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 flex justify-between items-center">
          <p className="text-gray-500 text-sm">
            Copyright © 2024 Hire4Change | All Rights Reserved
          </p>
          <div className="flex space-x-4 text-gray-500">
            <a href="#facebook" className="hover:text-gray-700">F</a>
            <a href="#twitter" className="hover:text-gray-700">T</a>
            <a href="#instagram" className="hover:text-gray-700">I</a>
            <a href="#linkedin" className="hover:text-gray-700">L</a>
            <a href="#youtube" className="hover:text-gray-700">Y</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
