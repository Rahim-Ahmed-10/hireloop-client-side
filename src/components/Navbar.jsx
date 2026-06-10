'use client';
import React, { useState } from 'react';

const Navbar = () => {
    // ভিডিওর মতো স্টেটের নাম পরিবর্তন করে 'isMenuOpen' করা হলো
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    
    const navLinks = [
        { label: 'Browse Jobs', href: '/jobs' },
        { label: 'Company', href: '/company' },
        { label: 'Pricing', href: '/pricing' }
    ];

    return (
        <nav className="w-full bg-[#111111] px-4 py-4 sm:px-6 md:px-12">
            {/* মেইন বার */}
            <div className="max-w-7xl mx-auto bg-[#1a1a1a] rounded-2xl border border-neutral-850 px-6 py-3.5 flex items-center justify-between shadow-xl">
                
                {/* 🎯 লোগো এরিয়া */}
                <div className="flex items-center font-sans text-2xl font-extrabold tracking-tight select-none">
                    <span className="text-[#008aff]">Hire</span>
                    <span className="text-[#ff6a00]">L</span>
                    
                    {/* লুপ কন্টেইনার (পরপর দুটি 'o' যা মিলে লুপ তৈরি করে) */}
                    <div className="flex items-center -mx-[1px]">
                        {/* প্রথম নীল 'o' (Left loop) */}
                        <span className="w-[18px] h-[18px] rounded-full border-3 border-[#008aff] border-r-transparent -rotate-45 relative after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-[#008aff] after:rounded-full after:-right-[1px] after:top-[1px]"></span>
                        
                        {/* দ্বিতীয় কমলা 'o' (Right loop) */}
                        <span className="w-[18px] h-[18px] rounded-full border-3 border-[#ff6a00] border-l-transparent -rotate-45 -ml-[5px] relative before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:bg-[#ff6a00] before:rounded-full before:-left-[1px] before:bottom-[1px]"></span>
                    </div>
                    
                    <span className="text-[#ff6a00]">p</span>
                </div>

                {/* ডেক্সটপ মেনু (link.label দিয়ে রেন্ডার করা হয়েছে) */}
                <div className="hidden md:flex items-center gap-6">
                    <ul className="flex items-center gap-8 text-neutral-400 text-sm font-medium">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a href={link.href} className="hover:text-white transition-colors duration-200">{link.label}</a>
                            </li>
                        ))}
                    </ul>

                    {/* ডিভাইডার */}
                    <span className="h-5 w-[1px] bg-neutral-800 mx-2" aria-hidden="true"></span>

                    {/* বোতামসমূহ */}
                    <div className="flex items-center gap-6 text-sm font-medium">
                        <a href="#sign-in" className="text-[#6366f1] hover:text-[#4f46e5] transition-colors">Sign In</a>
                        <a href="#get-started" className="bg-[#5c59f0] hover:bg-[#4a47e6] text-white px-5 py-2.5 rounded-xl font-semibold transition-all">
                            Get Started
                        </a>
                    </div>
                </div>

                {/* মোবাইল মেনু বাটন (isMenuOpen স্টেট দিয়ে চালিত) */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    type="button"
                    className="md:hidden flex flex-col gap-1.5 justify-center items-center w-8 h-8 cursor-pointer focus:outline-none"
                >
                    <span className={`h-0.5 w-6 bg-white rounded transition-transform duration-350 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`h-0.5 w-6 bg-white rounded transition-opacity duration-250 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`h-0.5 w-6 bg-white rounded transition-transform duration-350 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* মোবাইল ড্রপডাউন মেনু */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 max-w-7xl mx-auto ${isMenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <div className="bg-[#1a1a1a] border border-neutral-850 rounded-2xl p-6 flex flex-col gap-4 text-center">
                    <ul className="flex flex-col gap-4 text-neutral-400 text-base font-medium">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a href={link.href} onClick={() => setIsMenuOpen(false)} className="hover:text-white block py-1">{link.label}</a>
                            </li>
                        ))}
                    </ul>
                    
                    <span className="w-full h-[1px] bg-neutral-850 my-1" aria-hidden="true"></span>
                    
                    <div className="flex flex-col gap-4 text-base font-medium">
                        <a href="#sign-in" onClick={() => setIsOpen(false)} className="text-[#6366f1] hover:text-[#4f46e5] py-1">Sign In</a>
                        <a href="#get-started" onClick={() => setIsOpen(false)} className="bg-[#5c59f0] hover:bg-[#4a47e6] text-white py-3 rounded-xl font-semibold block">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;