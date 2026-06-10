'use client';
import React from 'react';
// @gravity-ui/icons থেকে প্রয়োজনীয় আইকনগুলো ইম্পোর্ট করা হলো
import { LogoFacebook, LogoLinkedin, LogoGithub } from '@gravity-ui/icons';

const Footer = () => {
    return (
        <footer className="w-full bg-[#090909] text-neutral-400 font-sans pt-16 pb-8 px-6 md:px-12 border-t border-neutral-900">
            <div className="max-w-7xl mx-auto">
                
                {/* 📌 মেইন কন্টেন্ট গ্রিড সেকশন */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 pb-12 border-b border-neutral-900">
                    
                    {/* বামদিকের লোগো ও বর্ণনা */}
                    <div className="md:col-span-5 flex flex-col gap-4">
                        {/* 🎯 লোগো */}
                        <div className="flex items-center font-sans text-2xl font-extrabold tracking-tight select-none">
                            <span className="text-[#008aff]">hire</span>
                            <span className="text-[#ff6a00]">l</span>
                            <div className="flex items-center -mx-[1px]">
                                <span className="w-[18px] h-[18px] rounded-full border-3 border-[#008aff] border-r-transparent -rotate-45 relative after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-[#008aff] after:rounded-full after:-right-[1px] after:top-[1px]"></span>
                                <span className="w-[18px] h-[18px] rounded-full border-3 border-[#ff6a00] border-l-transparent -rotate-45 -ml-[5px] relative before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:bg-[#ff6a00] before:rounded-full before:-left-[1px] before:bottom-[1px]"></span>
                            </div>
                            <span className="text-[#ff6a00]">p</span>
                        </div>
                        <p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
                            The AI-native career platform. Built for people who take their work seriously.
                        </p>
                    </div>

                    {/* 🛠️ ডানদিকের লিংক ক্যাটাগরিগুলো */}
                    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        
                        {/* সেকশন ১: Product */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[#3b37ff] text-sm font-semibold tracking-wider uppercase">Product</h4>
                            <ul className="flex flex-col gap-3 text-sm">
                                <li><a href="/jobs" className="hover:text-white transition-colors duration-200">Job discovery</a></li>
                                <li><a href="/worker-ai" className="hover:text-white transition-colors duration-200">Worker AI</a></li>
                                <li><a href="/companies" className="hover:text-white transition-colors duration-200">Companies</a></li>
                                <li><a href="/salary-data" className="hover:text-white transition-colors duration-200">Salary data</a></li>
                            </ul>
                        </div>

                        {/* সেকশন ২: Navigations */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[#3b37ff] text-sm font-semibold tracking-wider uppercase">Navigations</h4>
                            <ul className="flex flex-col gap-3 text-sm">
                                <li><a href="/help" className="hover:text-white transition-colors duration-200">Help center</a></li>
                                <li><a href="/library" className="hover:text-white transition-colors duration-200">Career library</a></li>
                                <li><a href="/contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
                            </ul>
                        </div>

                        {/* সেকশন ৩: Resources */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[#3b37ff] text-sm font-semibold tracking-wider uppercase">Resources</h4>
                            <ul className="flex flex-col gap-3 text-sm">
                                <li><a href="/guideline" className="hover:text-white transition-colors duration-200">Brand Guideline</a></li>
                                <li><a href="/newsroom" className="hover:text-white transition-colors duration-200">Newsroom</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* 📌 নিচের কপিরাইট এবং সোশ্যাল সেকশন */}
                <div className="pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
                    
                    {/* সোশ্যাল মিডিয়া আইকনসমূহ (Gravity UI Icons ব্যবহার করে) */}
                    <div className="flex items-center gap-3">
                        {/* Facebook */}
                        <a href="#facebook" className="w-9 h-9 bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center rounded-xl transition-colors text-neutral-400 hover:text-white" aria-label="Facebook">
                            <LogoFacebook width={18} height={18} />
                        </a>
                        
                     {/* GitHub (ডার্ক ব্যাকগ্রাউন্ড থিম) */}
<a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center rounded-xl transition-colors text-neutral-400 hover:text-white" aria-label="GitHub">
    <LogoGithub width={18} height={18} />
</a>
                        
                        {/* LinkedIn */}
                        <a href="#linkedin" className="w-9 h-9 bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center rounded-xl transition-colors text-neutral-400 hover:text-white" aria-label="LinkedIn">
                            <LogoLinkedin width={18} height={18} />
                        </a>
                    </div>

                    {/* কপিরাইট এবং টার্মস টেক্সট */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-neutral-600 text-center sm:text-left">
                        <p>Copyright 2024 — Programming Hero</p>
                        <span className="hidden sm:inline text-neutral-800">|</span>
                        <p className="hover:text-neutral-500 cursor-pointer transition-colors">Terms & Policy - Privacy Guideline</p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;