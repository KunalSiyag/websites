import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* ABOUT US */}
        <div>
          <h3 className="font-bold mb-3  text-[1.5vw]">ABOUT US</h3>
          <ul className="space-y-2">
            <li><a href="#" className="opacity-75 font-bold hover:underline">Overview</a></li>
            <li><a href="#" className="opacity-75 font-bold hover:underline">Milestones</a></li>
            <li><a href="#" className="opacity-75 font-bold hover:underline">Mission & Vision</a></li>
            <li><a href="#" className="opacity-75 font-bold hover:underline">Financial</a></li>
            <li><a href="#" className="opacity-75 font-bold hover:underline">Board of Directors</a></li>
            <li><a href="#" className="opacity-75 font-bold hover:underline">Board Level Committee</a></li>
          </ul>
        </div>
        {/* INVESTORS */}
        <div>
          <h3 className="font-bold mb-3  text-[1.5vw]">INVESTORS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="font-bold opacity-75 hover:underline">Policies</a></li>
            <li><a href="#" className="font-bold opacity-75 hover:underline">Shareholding Pattern</a></li>
            <li><a href="#" className="font-bold opacity-75 hover:underline">Abridged Prospectus</a></li>
            <li><a href="#" className="font-bold opacity-75 hover:underline">Advertisements</a></li>
            <li><a href="#" className="font-bold opacity-75 hover:underline">RHP</a></li>
            <li><a href="#" className="font-bold opacity-75 hover:underline">DRHP</a></li>
          </ul>
        </div>
        {/* QUALITY */}
        <div>
          <h3 className="font-bold mb-3  text-[1.5vw]">QUALITY</h3>
          <ul className="space-y-2">
            <li><a href="#" className="font-bold opacity-75 hover:underline">Quality Policy</a></li>
            <li><a href="#" className="font-bold opacity-75 hover:underline">Approvals and Certifications</a></li>
          </ul>
          <h3 className="font-bold mt-4 text-[1.5vw] mb-3">CLIENTS</h3>
          <h3 className="font-bold mt-4 text-[1.5vw] mb-3">CONTACT US</h3>
        </div>
        {/* MANUFACTURING PROCESS / PRODUCTS */}
        <div>
          <h3 className="font-bold mb-3 text-nowrap text-[1.5vw]">MANUFACTURING PROCESS</h3>
          <h3 className="font-bold mt-4 mb-3">PRODUCTS</h3>
          <div className="mt-4 opacity-75 font-bold">
            <p>REGD. OFFICE:</p>
            <p>3, Guru Himmat Bldg., Dr. Mascarenhas Road, Mazgaon, Mumbai - 400010.</p>
            <p className="mt-2">📞 022 23732656 / 66570979</p>
            <p>📧 <a href="mailto:sales@paramountforge.org" className="hover:underline">sales@paramountforge.org</a></p>
            <p>CIN No: U24109MH2023PLC402307</p>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-s">
        <p>Copyright © 2024. PARAMOUNT SPECIALITY FORGINGS LIMITED. All rights reserved</p>
        <p>Designed & Developed by <a href="http://www.graficali.com" className="hover:underline">Kunal Siyag</a></p>
      </div>
    </div>
  );
};

export default Footer;
