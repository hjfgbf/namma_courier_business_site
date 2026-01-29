'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const features = [
    {
        id: 0,
        title: 'See real-time rates across couriers',
        description: 'Instantly compare prices from top couriers',
        image: '/image1.png',
    },
    {
        id: 1,
        title: 'Avoid RTOs with smarter decisions',
        description: 'Match the shipping mode based on your customers’ expectations',
        image: '/image2.png',
    },
    {
        id: 2,
        title: 'No more manual estimates',
        description: 'Calculate the accurate rate depending on your parcel’s volumetric weight',
        image: '/image3.png',
    },
    {
        id: 3,
        title: 'Choose the best courier option for every order',
        description: 'Know which courier is the most economical and fastest before booking an order',
        image: '/image4.png',
    },
];

export default function SmarterShippingSection() {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % features.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full bg-white py-10 md:py-14">
            <div className="max-w-[1400px] mx-auto px-5 md:px-8">
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-[28px] md:text-[38px] font-bold text-[#1e3a8a] leading-tight">
                        Built for Sellers Who Want <br />
                        <span className="text-[#f59e0b]">Smarter Shipping</span>
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
