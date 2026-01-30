'use client';

import React from 'react';
import Image from 'next/image';

export default function GreatRatesSection() {
    return (
        <section className="bg-white w-full py-10 md:pt-20 md:pb-14">
            <div className="max-w-[1400px] mx-auto px-5 md:px-8">
                <div className="bg-gradient-to-br from-[#e8f0fe] to-[#f0f4ff] rounded-[20px] overflow-hidden relative min-h-[180px] md:min-h-[240px] flex items-center">
                    <div className="flex flex-col md:flex-row items-center w-full px-0 md:px-16 pt-8 md:py-0">
                        {/* Left Content */}
                        <div className="w-full md:w-1/2 z-10 text-start md:text-center md:text-left mb-6 md:mb-0">
                            <h2 className="text-[28px] md:text-[38px] font-bold leading-tight mb-5 px-5 md:px-0 max-w-[500px]">
                                <span className="text-[#1e3a8a]">Competitive Rates </span>
                                <span className="text-[#f59e0b]">Are Just the Foundation</span>
                            </h2>
                            <p className="text-[#1e3a8a] text-[14px] md:text-[16px] font-medium leading-snug mb-5 max-w-[500px] text-start px-5 md:px-0">
                                Beyond savings, unlock a premium suite of NDR management, automated tracking, and smart analytics designed to scale your brand.
                            </p>
                            <div className="flex justify-start px-5 md:px-0">
                                <button className="bg-[#f59e0b] text-white text-[14px] md:text-[16px] font-semibold px-6 py-2 rounded-full hover:bg-[#1e3a8a] transition-colors shadow-md cursor-pointer whitespace-nowrap">
                                    Sign Up Now
                                </button>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
                            <div className="relative w-full max-w-[600px]">
                                <Image
                                    src="/revenue.png"
                                    alt="Revenue"
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
