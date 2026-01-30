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
                <div className="text-center mb-14">
                    <h2 className="text-[28px] md:text-[38px] font-bold text-[#1e3a8a] leading-tight mb-2">
                        Instant Shipping Quotes in <span className="text-[#f59e0b]">3 Simple Steps</span>
                    </h2>
                    <p className="text-[#1e3a8a] text-[15.5px] md:text-[17.5px] font-semibold max-w-[1200px] mx-auto">
                        Input your shipment metrics and compare real-time rates across multiple top-tier carriers instantly.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-20 md:gap-0 md:justify-between items-stretch relative">
                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 w-full md:w-auto mx-auto md:mx-0 pt-10">
                            <div className="absolute top-0 left-0 bg-[#f0f4fa] text-[#f59e0b] font-bold pt-2 pb-10 pl-3 pr-10 rounded-t-[12px] z-0 text-[17px]">
                                Step {step.id}
                            </div>

                            <div className="relative z-10 w-full md:w-[300px] h-full bg-gradient-to-br from-[#0f2557] via-[#1e3a8a] to-[#2563eb] rounded-[16px] p-5 pb-6 flex flex-col items-center text-start duration-300">
                                <div className="relative w-full h-auto mb-6">
                                    <Image
                                        src={step.image}
                                        alt={step.alt}
                                        width={600}
                                        height={600}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>

                                <div className="mt-auto">
                                    <h3 className="text-white text-[16.5px] md:text-[18px] font-bold mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-white text-[14px] md:text-[16px] leading-snug">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10 md:mt-16">
                    <button className="bg-[#f59e0b] text-white text-[14px] md:text-[16px] font-bold px-6 py-2 rounded-full hover:bg-[#1e3a8a] transition-colors cursor-pointer">
                        Start Free
                    </button>
                </div>
            </div>
        </section>
    );
}
