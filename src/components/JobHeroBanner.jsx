"use client";

import React from "react";
import { Button, Chip } from "@heroui/react";

export default function JobHeroBanner() {
  return (
    <section className="relative min-h-[650px] w-full bg-[#09090B] text-white flex flex-col items-center justify-center px-4 overflow-hidden">
      
      {/* Top Radial Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Top Feature Badge Container with Glow Lines */}
        <div className="relative w-full flex items-center justify-center mb-8">
          {/* Background Line */}
          <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent max-w-xl mx-auto pointer-events-none" />
          
          {/* The Central Pill Badge Box */}
          <div className="relative z-10 inline-flex items-center gap-2.5 bg-[#121214] border border-zinc-800/60 rounded-full px-4 py-1.5 shadow-2xl shadow-black/50 backdrop-blur-md">
            <span className="text-sm select-none">💼</span>
            <div className="flex items-center gap-1.5 text-[11px] font-medium tracking-wider">
              <span className="font-mono text-zinc-100 font-bold text-xs">50,000+</span>
              <span className="text-zinc-500 uppercase tracking-widest text-[10px]">NEW JOBS THIS MONTH</span>
            </div>
          </div>
        </div>

        {/* Main Heading with a soft gradient */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 max-w-3xl bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
          Find Your Dream Job Today
        </h1>

        {/* ─── NEW: Heading এর নিচের গ্লোয়িং লাইন ─── */}
        <div className="relative w-full flex items-center justify-center mb-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent w-full max-w-md pointer-events-none" />
        </div>

        {/* Subtitle */}
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
          HireLoop connects top talent with world-class companies. Browse thousands of 
          curated opportunities and land your next role — faster.
        </p>

        {/* Custom Clean Search Bar Box */}
        <div className="w-full max-w-3xl bg-[#121214]/80 border border-zinc-800 rounded-2xl p-2.5 flex flex-col md:flex-row items-center gap-3 shadow-2xl backdrop-blur-xl">
          
          {/* Job Title Input */}
          <div className="relative flex items-center w-full group border-b border-zinc-800/50 md:border-b-0 pb-2 md:pb-0">
            <svg className="absolute left-2 w-5 h-5 text-zinc-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent pl-9 pr-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none"
            />
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-indigo-500 transition-all duration-300 group-focus-within:w-full" />
          </div>

          {/* Vertical Divider line for Desktop */}
          <div className="hidden md:block h-8 w-[1px] bg-zinc-800 shrink-0" />

          {/* Location Input */}
          <div className="relative flex items-center w-full group pb-2 md:pb-0">
            <svg className="absolute left-2 w-5 h-5 text-zinc-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent pl-9 pr-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none"
            />
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-indigo-500 transition-all duration-300 group-focus-within:w-full" />
          </div>

          {/* Search Button */}
          <Button 
            isIconOnly
            color="primary"
            className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-500 px-6 rounded-xl h-12 min-w-12 text-white shadow-lg shadow-indigo-600/20 transition-transform active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </Button>
        </div>

        {/* HeroUI Chip Tags for Trending */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <span className="text-xs text-zinc-500 font-medium">Trending Position</span>
          
          <Chip variant="flat" className="bg-[#1C1C1F] text-zinc-300 border border-zinc-800 hover:bg-zinc-800 cursor-pointer transition-colors">
            Product Designer
          </Chip>
          <Chip variant="flat" className="bg-[#1C1C1F] text-zinc-300 border border-zinc-800 hover:bg-zinc-800 cursor-pointer transition-colors">
            AI Engineering
          </Chip>
          <Chip variant="flat" className="bg-[#1C1C1F] text-zinc-300 border border-zinc-800 hover:bg-zinc-800 cursor-pointer transition-colors">
            Dev-ops Engineer
          </Chip>
        </div>

      </div>
    </section>
  );
}