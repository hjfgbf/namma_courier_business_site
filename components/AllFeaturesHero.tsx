'use client';

import React from 'react';
import Image from 'next/image';

export default function AllFeaturesHero() {
    return (
        <section className="w-full bg-gradient-to-br from-[#e8eef7] via-[#f5f7fa] to-[#fef3e8] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-3 md:px-10 py-10 md:pt-14 md:pb-20">
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-12">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 z-10">
                        <h1 className="text-[30px] xl:text-[50px] text-center md:text-left font-bold leading-[1.25] md:leading-[1.2] mb-6">
                            <span className="text-[#1e3a8a]">Your Customers Expect More. </span>
                            <span className="text-[#f59e0b]">Let's Help You Deliver It.</span>
                        </h1>
                        <p className="text-[#1e3a8a] text-[15.5px] xl:text-[17px] text-center md:text-left font-semibold leading-normal mb-6 max-w-[550px]">
                            Unlock powerful features that turn every delivery into a win for you and your customers.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <button className="mt-1 md:mt-0 bg-[#f59e0b] text-white text-[14px] xl:text-[16px] font-bold px-6 py-2 rounded-full hover:bg-[#1e3a8a] transition-colors shadow-md cursor-pointer">
                                Try for FREE
                            </button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
                        <div className="relative w-full max-w-[800px] h-auto">
                            <Image
                                src="/feature.png"
                                alt="Features Hero"
                                width={600}
                                height={600}
                                className="w-full h-full object-contain object-center"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
