'use client';

import React from 'react';
import Image from 'next/image';
import { Calculator, IndianRupee } from 'lucide-react';

export default function PricingCalculatorSection() {
    return (
        <section className="w-full bg-white pt-14 pb-8 md:pt-16 md:pb-10 flex justify-center">
            <div className="max-w-[1000px] w-full mx-4 md:mx-auto bg-gradient-to-br from-[#0f2557] via-[#1e3a8a] to-[#2563eb] rounded-[16px] px-6 py-8 md:p-10 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                <div className="hidden md:flex w-full md:w-[35%] relative h-[300px] md:h-[375px] rounded-[16px] overflow-hidden">
                    <Image
                        src="/person.png"
                        alt="Shipping Calculator"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="w-full md:w-[60%] text-white">
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                            <div className="flex-1 flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[16px] font-medium">Pick-up Area Pin Code*</label>
                                    <input
                                        type="text"
                                        placeholder="Enter 6-Digit Code"
                                        className="bg-transparent border border-white text-[14px] rounded-[8px] px-4 py-[10px] placeholder-white/40 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[16px] font-medium">Weight*</label>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="text"
                                            placeholder="Enter Package Weight"
                                            className="w-full bg-transparent border border-white text-[14px] rounded-[8px] px-4 py-[10px] placeholder-white/40 focus:outline-none transition-colors"
                                        />
                                        <span className="text-white text-[16px]">kg</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="text-[16px] font-medium">Payment Mode*</label>
                                    <div className="flex items-center gap-6">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="payment" defaultChecked className="w-5 h-5 accent-[#4A90E2]" />
                                            <span className="text-[16px] font-medium">Prepaid</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="payment" className="w-5 h-5 accent-[#4A90E2]" />
                                            <span className="text-[16px] font-medium whitespace-nowrap">Cash on Delivery</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[16px] font-medium">Delivery Area Pin Code*</label>
                                    <input
                                        type="text"
                                        placeholder="Enter 6-Digit Code"
                                        className="bg-transparent border border-white text-[14px] rounded-[8px] px-4 py-[10px] placeholder-white/40 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[16px] font-medium">Package Dimensions (Optional)</label>
                                    <div className="flex items-center gap-3 text-white/60">
                                        <input type="text" placeholder="L" className="w-full bg-transparent border border-white text-center rounded-[8px] px-[10px] py-[10px] text-[14px] placeholder-white/40 focus:outline-none" />
                                        <span className="text-white">X</span>
                                        <input type="text" placeholder="W" className="w-full bg-transparent border border-white text-center rounded-[8px] px-[10px] py-[10px] text-[14px] placeholder-white/40 focus:outline-none" />
                                        <span className="text-white">X</span>
                                        <input type="text" placeholder="H" className="w-full bg-transparent border border-white text-center rounded-[8px] px-[10px] py-[10px] text-[14px] placeholder-white/40 focus:outline-none" />
                                        <span className="text-[14px] font-medium text-white">CM</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[16px] font-medium">Shipment Value</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">₹</span>
                                        <input
                                            type="number"
                                            placeholder="2000"
                                            className="w-full bg-transparent border border-white text-[14px] rounded-[8px] px-4 py-[10px] pl-8 placeholder-white/40 focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mt-4">
                            <button type="button" className="bg-[#f59e0b] hover:bg-white hover:text-[#1e3a8a] text-white font-bold py-2.5 md:py-3 px-6 md:px-8 rounded-full transition-all duration-300 cursor-pointer text-[14px] md:text-[16px]">
                                Calculate Now
                            </button>
                            <button type="button" className="border border-white text-white font-medium py-2.5 md:py-3 px-6 md:px-8 rounded-full transition-colors cursor-pointer text-[14px] md:text-[16px]">
                                Reset
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
}
