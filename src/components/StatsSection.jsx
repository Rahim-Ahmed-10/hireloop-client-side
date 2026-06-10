'use client';
import React from 'react';
// HeroUI v3.x অনুযায়ী শুধুমাত্র Card ইম্পোর্ট করা হলো
import { Card } from '@heroui/react';
// Gravity UI Icons থেকে আইকনসমূহ
import { Briefcase, Layers, Magnifier, Star } from '@gravity-ui/icons';

const StatsSection = () => {
    const statsData = [
        {
            id: 1,
            count: '50K',
            label: 'ACTIVE JOBS',
            icon: <Briefcase className="w-5 h-5 text-neutral-400" />
        },
        {
            id: 2,
            count: '12K',
            label: 'COMPANIES',
            icon: <Layers className="w-5 h-5 text-neutral-400" />
        },
        {
            id: 3,
            count: '2M',
            label: 'JOB SEEKERS',
            icon: <Magnifier className="w-5 h-5 text-neutral-400" />
        },
        {
            id: 4,
            count: '97%',
            label: 'SATISFACTION RATE',
            icon: <Star className="w-5 h-5 text-neutral-400" />
        }
    ];

    return (
        <section className="relative overflow-hidden bg-black pt-32 py-8 text-white">
            
            {/* 🌌 1. Background Globe (ভিডিওর গাইডলাইন অনুযায়ী) */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-screen pointer-events-none select-none z-0"
                style={{ backgroundImage: "url('/images/globe.png')" }}
            />

            {/* 🖤 2. Dark Overlay (কন্টেন্ট ফুটিয়ে তোলার জন্য) */}
            <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />

            {/* 🔮 3. Glow Effect (গ্লোবের উপরের পারফেক্ট ব্লু-পার্পল নিয়ন লাইট আভা) */}
            <div className="absolute left-1/2 top-0 h-[350px] w-[600px] md:w-[900px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[130px] pointer-events-none z-0" />

            {/* 📌 মেইন কন্টেন্ট কন্টেইনার */}
            <div className="relative max-w-6xl mx-auto z-10 flex flex-col items-center text-center px-6">
                
                {/* প্রধান শিরোনাম */}
                <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight max-w-3xl mb-12 text-neutral-200">
                    Assisting over <span className="text-white font-extrabold">15,000 job seekers</span> find their dream positions.
                </h2>

                {/* 📊 ৪ কলামের স্ট্যাটস গ্রিড লেআউট */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {statsData.map((stat) => (
                        <Card 
                            key={stat.id} 
                            className="bg-[#090909]/60 backdrop-blur-md border border-neutral-900/90 rounded-2xl p-6 text-left transition-all duration-300 hover:border-neutral-800 hover:scale-[1.02] shadow-2xl"
                        >
                            <div className="flex flex-col justify-between gap-12">
                                {/* আইকন কন্টেইনার */}
                                <div className="p-2.5 w-fit bg-neutral-900/90 rounded-xl border border-neutral-800/40 flex items-center justify-center">
                                    {stat.icon}
                                </div>
                                
                                {/* সংখ্যা এবং লেবেল গ্রুপ */}
                                <div className="flex flex-col gap-1.5">
                                    <h3 className="text-4xl font-bold tracking-tight text-white font-sans">
                                        {stat.count}
                                    </h3>
                                    <p className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default StatsSection;