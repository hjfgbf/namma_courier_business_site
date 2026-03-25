'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const features = [
    {
        id: 0,
        title: 'Instant Multi-Carrier Comparison',
        description: 'View real-time rates from the industry’s top-tier couriers side-by-side.',
        image: '/image1.png',
    },
    {
        id: 1,
        title: 'Optimize Deliveries, Reduce RTOs',
        description: 'Make data-backed decisions on shipping modes to ensure high success rates.',
        image: '/image2.png',
    },
    {
        id: 2,
        title: 'Automated Volumetric Precision',
        description: 'Eliminate manual errors with automated calculations based on parcel dimensions.',
        image: '/image3.png',
    },
    {
        id: 3,
        title: 'Best-Fit Carrier Selection',
        description: 'Instantly identify the most economical and fastest shipping route for every pin code.',
        image: '/image4.png',
    },
]

export default function SmarterShippingSection() {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % features.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full bg-white py-10 md:py-14">
            <div className="max-w-[1400px] mx-auto px-5 md:px-8">
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-[28px] md:text-[38px] font-bold text-[#1e3a8a] leading-tight">
                        Logistics Solutions Built for <br />
                        <span className="text-[#f59e0b]">Operational Excellence</span>
                    </h2>
                </div>

                <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-0">
                    <div className="w-full md:w-1/2 relative h-[320px] md:h-[460px]">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${activeTab === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                    }`}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full md:w-[500px] flex flex-col gap-6 md:gap-8 pl-0 md:pl-16">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer transition-colors duration-300 group`}
                                onClick={() => setActiveTab(index)}
                            >
                                <h3 className={`text-[19px] md:text-[22px] leading-snug font-bold mb-2 transition-colors duration-300 ${activeTab === index
                                    ? 'text-[#1e3a8a]'
                                    : 'text-[#5a6b8c] group-hover:text-[#1e3a8a]'
                                    }`}>
                                    {feature.title}
                                </h3>
                                <p className={`text-[15px] md:text-[17px] leading-snug  transition-colors duration-300 ${activeTab === index
                                    ? 'text-[#1e3a8a] font-medium'
                                    : 'text-[#94a3b8] group-hover:text-[#1e3a8a]'
                                    }`}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="text-center mt-9 md:mt-16">
                    <button className="bg-[#f59e0b] text-white text-[14px] md:text-[16px] font-bold px-6 py-2 rounded-full hover:bg-[#1e3a8a] transition-colors cursor-pointer">
                        Start Now
                    </button>
                </div>

            </div>
        </section>
    );
}


// 'use client';
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// const features = [
//     {
//         id: 0,
//         title: 'Instant Multi-Carrier Comparison',
//         description: 'View real-time rates from the industry\u2019s top-tier couriers side-by-side.',
//         image: '/image1.png',
//     },
//     {
//         id: 1,
//         title: 'Optimize Deliveries, Reduce RTOs',
//         description: 'Make data-backed decisions on shipping modes to ensure high success rates.',
//         image: '/image2.png',
//     },
//     {
//         id: 2,
//         title: 'Automated Volumetric Precision',
//         description: 'Eliminate manual errors with automated calculations based on parcel dimensions.',
//         image: '/image3.png',
//     },
//     {
//         id: 3,
//         title: 'Best-Fit Carrier Selection',
//         description: 'Instantly identify the most economical and fastest shipping route for every pin code.',
//         image: '/image4.png',
//     },
// ];

// const CYCLE_DURATION = 5000;

// export default function SmarterShippingSection() {
//     const [activeTab, setActiveTab] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveTab((prev) => (prev + 1) % features.length);
//         }, CYCLE_DURATION);
//         return () => clearInterval(interval);
//     }, []); // eslint-disable-line react-hooks/exhaustive-deps

//     return (
//         <section className="w-full bg-white py-10 md:py-14">
//             <div className="max-w-[1400px] mx-auto px-5 md:px-8">

//                 {/* Heading */}
//                 <div className="text-center mb-10 md:mb-12">
//                     <h2 className="text-[28px] md:text-[38px] font-bold text-[#1e3a8a] leading-tight">
//                         Logistics Solutions Built for <br />
//                         <span className="text-[#f59e0b]">Operational Excellence</span>
//                     </h2>
//                 </div>

//                 {/* ── Showcase Card ── */}
//                 <div className="rounded-[20px] overflow-hidden border border-gray-200 shadow-2xl">

//                     {/* Tab bar */}
//                     <div className="grid grid-cols-2 md:grid-cols-4 bg-[#f8fafc] border-b border-gray-200">
//                         {features.map((feature, index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => setActiveTab(index)}
//                                 className={`relative py-4 px-5 text-left transition-all duration-300 border-r border-gray-200 last:border-r-0 focus:outline-none
//                                     ${activeTab === index ? 'bg-white' : 'hover:bg-gray-50'}`}
//                             >
//                                 <span className={`text-[10px] font-bold tracking-[3px] uppercase block mb-1 transition-colors duration-300
//                                     ${activeTab === index ? 'text-[#f59e0b]' : 'text-gray-400'}`}>
//                                     {String(index + 1).padStart(2, '0')}
//                                 </span>
//                                 <span className={`text-[12px] md:text-[13px] font-semibold leading-snug block transition-colors duration-300
//                                     ${activeTab === index ? 'text-[#1e3a8a]' : 'text-gray-400'}`}>
//                                     {feature.title}
//                                 </span>
//                                 {/* Active amber bottom line */}
//                                 {activeTab === index && (
//                                     <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#f59e0b] rounded-t-full" />
//                                 )}
//                             </button>
//                         ))}
//                     </div>

//                     {/* Content panels */}
//                     <div className="flex flex-col md:flex-row min-h-[400px] md:min-h-[440px]">

//                         {/* Left — dark content panel */}
//                         <div className="w-full md:w-[45%] bg-gradient-to-br from-[#0f2557] via-[#1e3a8a] to-[#2563eb] px-8 py-10 md:px-14 md:py-14 relative overflow-hidden flex flex-col justify-between">

//                             {/* Giant watermark number */}
//                             <span
//                                 className="absolute -bottom-6 -right-4 text-[180px] font-black leading-none select-none pointer-events-none"
//                                 style={{ color: 'rgba(255,255,255,0.04)' }}
//                             >
//                                 {String(activeTab + 1).padStart(2, '0')}
//                             </span>

//                             {/* Content */}
//                             <div className="relative z-10">
//                                 <span className="inline-flex items-center gap-2 text-[#f59e0b] text-[11px] font-bold tracking-[4px] uppercase mb-7 border border-[#f59e0b]/40 px-3 py-1 rounded-full w-fit">
//                                     Feature {String(activeTab + 1).padStart(2, '0')}
//                                 </span>
//                                 <h3
//                                     key={`title-${activeTab}`}
//                                     className="text-white text-[24px] md:text-[30px] font-bold leading-snug mb-5 animate-fadeSlideUp"
//                                 >
//                                     {features[activeTab].title}
//                                 </h3>
//                                 <p
//                                     key={`desc-${activeTab}`}
//                                     className="text-blue-200 text-[15px] md:text-[16px] leading-relaxed max-w-[380px] animate-fadeSlideUp"
//                                 >
//                                     {features[activeTab].description}
//                                 </p>
//                             </div>

//                             {/* Segmented progress bars */}
//                             <div className="relative z-10 mt-10 flex gap-2">
//                                 {features.map((_, i) => (
//                                     <button
//                                         key={i}
//                                         onClick={() => setActiveTab(i)}
//                                         className="flex-1 h-[3px] bg-white/20 rounded-full overflow-hidden focus:outline-none cursor-pointer"
//                                         aria-label={`Go to feature ${i + 1}`}
//                                     >
//                                         {i < activeTab && (
//                                             <div className="h-full w-full bg-[#f59e0b] rounded-full" />
//                                         )}
//                                         {i === activeTab && (
//                                             <div
//                                                 key={`bar-${activeTab}`}
//                                                 className="h-full bg-[#f59e0b] rounded-full"
//                                                 style={{ animation: `fillProgress ${CYCLE_DURATION}ms linear forwards` }}
//                                             />
//                                         )}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Right — image panel */}
//                         <div className="w-full md:w-[55%] bg-white flex items-center justify-center p-8 md:p-12">
//                             <div className="relative w-full max-w-[400px] h-[260px] md:h-[340px]">
//                                 {features.map((feature, index) => (
//                                     <div
//                                         key={index}
//                                         className={`absolute inset-0 transition-all duration-700 ease-out
//                                             ${activeTab === index
//                                                 ? 'opacity-100 translate-y-0'
//                                                 : 'opacity-0 translate-y-5 pointer-events-none'
//                                             }`}
//                                     >
//                                         <Image
//                                             src={feature.image}
//                                             alt={feature.title}
//                                             fill
//                                             className="object-contain"
//                                         />
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//                 {/* CTA */}
//                 <div className="text-center mt-9 md:mt-16">
//                     <button className="bg-[#f59e0b] text-white text-[14px] md:text-[16px] font-bold px-6 py-2 rounded-full hover:bg-[#1e3a8a] transition-colors cursor-pointer">
//                         Start Now
//                     </button>
//                 </div>

//             </div>

//             <style jsx global>{`
//                 @keyframes fillProgress {
//                     from { width: 0%; }
//                     to   { width: 100%; }
//                 }
//                 @keyframes fadeSlideUp {
//                     from { opacity: 0; transform: translateY(12px); }
//                     to   { opacity: 1; transform: translateY(0); }
//                 }
//                 .animate-fadeSlideUp {
//                     animation: fadeSlideUp 0.45s ease-out both;
//                 }
//             `}</style>
//         </section>
//     );
// }
