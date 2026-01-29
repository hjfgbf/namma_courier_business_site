'use client';

import React from 'react';
import Image from 'next/image';

export default function ShippingPowerSection() {
    return (
        <section className="bg-white w-full py-10 md:pt-20 md:pb-14">
            <div className="max-w-[1400px] mx-auto px-5 md:px-8">
                <div className="bg-gradient-to-br from-[#e8f0fe] to-[#f0f4ff] rounded-[20px] overflow-hidden relative min-h-[180px] md:min-h-[240px] flex items-center">
                    <div className="flex flex-col md:flex-row items-center w-full px-0 md:px-16 pt-8 md:py-0">
                        {/* Left Content */}
                        <div className="w-full md:w-1/2 z-10 text-start md:text-center md:text-left mb-8 md:mb-0">
                            <h2 className="text-[28px] md:text-[38px] font-bold leading-tight mb-4 px-5 md:px-0">
                                <span className="text-[#f59e0b] block">Power Your Shipping</span>
                                <span className="text-[#1e3a8a] block">with the Best in the Business</span>
                            </h2>
                            <p className="text-[#1e3a8a] text-[14px] md:text-[16px] font-medium leading-snug mb-6 max-w-[420px] text-start px-5 md:px-0">
                                Access 25+ courier partners. Assign, track, and manage shipments with zero guesswork and maximum control.
                            </p>
                            <div className="flex justify-start px-5 md:px-0">
                                <button className="bg-[#f59e0b] text-white text-[14px] md:text-[16px] font-semibold px-6 py-2 rounded-full hover:bg-[#1e3a8a] transition-colors shadow-md cursor-pointer whitespace-nowrap">
                                    Get Started Now
                                </button>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
                            <div className="relative w-full max-w-[600px]">
                                <Image
                                    src="/box.png"
                                    alt="Shipping Logistics"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-contain object-right md:object-right-bottom"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
