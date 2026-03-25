'use client';

import React from 'react';
import Image from 'next/image';

const steps = [
    {
        id: '01',
        title: 'Define Your Route',
        description: 'Simply enter the origin and destination pin codes to establish your delivery zone.',
        image: '/Step-1.png',
        alt: 'Enter Area Pincode',
    },
    {
        id: '02',
        title: 'Input Gross Weight',
        description: 'Provide the actual weight of your shipment to start the rate calculation process.',
        image: '/step-2.png',
        alt: 'Package Weight',
    },
    {
        id: '03',
        title: 'Calculate Volumetric Data',
        description: 'Enter dimensions (L x W x H) to ensure you get the most accurate, penalty-free quote.',
        image: '/step-3.png',
        alt: 'Package Dimensions',
    },
];

export default function PricingShippingRate() {
    return (
        <section className="w-full bg-white py-10 md:py-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-5 md:px-10">

                {/* Section heading */}
                <div className="text-center mb-14">
                    <h2 className="text-[28px] md:text-[38px] font-bold text-[#1e3a8a] leading-tight mb-2">
                        Instant Shipping Quotes in <span className="text-[#f59e0b]">3 Simple Steps</span>
                    </h2>
                    <p className="text-[#1e3a8a] text-[15.5px] md:text-[17.5px] font-semibold max-w-[1200px] mx-auto">
                        Input your shipment metrics and compare real-time rates across multiple top-tier carriers instantly.
                    </p>
                </div>

                {/* ── Desktop: Vertical Alternating Timeline ── */}
                <div className="hidden md:block relative max-w-[860px] mx-auto">

                    {/* Dashed vertical center line */}
                    <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] border-l-2 border-dashed border-gray-300 z-0" />

                    {steps.map((step, index) => {
                        const cardOnRight = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`relative z-10 flex items-center w-full mb-16 last:mb-0 ${cardOnRight ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                {/* Number side */}
                                <div className={`flex-1 flex ${cardOnRight ? 'justify-end pr-14' : 'justify-start pl-14'}`}>
                                    <span
                                        className="text-[100px] font-black leading-none select-none"
                                        style={{
                                            WebkitTextStroke: '2.5px #1e3a8a',
                                            color: 'transparent',
                                            opacity: 0.9,
                                        }}
                                    >
                                        {step.id}
                                    </span>
                                </div>

                                {/* Center icon circle */}
                                <div className="flex-shrink-0 w-[62px] h-[62px] rounded-full bg-[#1e3a8a] flex items-center justify-center z-10 shadow-xl ring-[5px] ring-white">
                                    <Image
                                        src={step.image}
                                        alt={step.alt}
                                        width={32}
                                        height={32}
                                        className="w-8 h-8 object-contain brightness-0 invert"
                                    />
                                </div>

                                {/* Card side */}
                                <div className={`flex-1 flex ${cardOnRight ? 'justify-start pl-14' : 'justify-end pr-14'}`}>
                                    <div className="bg-white rounded-[14px] shadow-lg border border-gray-100 p-6 w-full max-w-[280px]">
                                        <h3 className="text-[#1e3a8a] font-bold text-[18px] mb-2 leading-snug">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-500 text-[14.5px] leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile */}
                <div className="flex md:hidden flex-col gap-8 relative pl-4">
                    <div className="absolute left-[40px] top-0 bottom-0 w-[2px] border-l-2 border-dashed border-gray-300 z-0" />
                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex items-center gap-5">
                            {/* Icon circle */}
                            <div className="flex-shrink-0 w-[52px] h-[52px] rounded-full bg-[#1e3a8a] flex items-center justify-center shadow-lg ring-4 ring-white">
                                <Image
                                    src={step.image}
                                    alt={step.alt}
                                    width={26}
                                    height={26}
                                    className="w-6 h-6 object-contain brightness-0 invert"
                                />
                            </div>
                            {/* Card */}
                            <div className="bg-white rounded-[14px] shadow-lg border border-gray-100 p-5 flex-1">
                                <p className="text-[#f59e0b] font-bold text-[11px] mb-1 tracking-widest uppercase">Step {step.id}</p>
                                <h3 className="text-[#1e3a8a] font-bold text-[17px] mb-1.5 leading-snug">{step.title}</h3>
                                <p className="text-gray-500 text-[14px] leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA button */}
                <div className="text-center mt-10 md:mt-16">
                    <button className="bg-[#f59e0b] text-white text-[14px] md:text-[16px] font-bold px-6 py-2 rounded-full hover:bg-[#1e3a8a] transition-colors cursor-pointer">
                        Start Free
                    </button>
                </div>

            </div>
        </section>
    );
}
