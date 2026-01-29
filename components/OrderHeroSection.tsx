"use client";

import React, { useState } from "react";

export default function OrderHeroSection() {
    const [trackingType, setTrackingType] = useState<"awb" | "orderId">("awb");

    return (
        <section className="relative w-full pt-10 pb-12 md:py-16 bg-gradient-to-br from-[#e8eef7] via-[#f5f7fa] to-[#fef3e8] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-5 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-10 md:gap-0">
                    <div className="w-full lg:w-[500px] text-center md:text-left">
                        <h1 className="text-[30px] md:text-[50px] font-bold leading-tight mb-5">
                            <span className="text-[#f59e0b]">Stay on Top </span>
                            <span className="text-[#1e3a8a]">of Your Delivery</span>
                        </h1>
                        <p className="text-[#1e3a8a] text-[15.5px] md:text-[17.5px] font-semibold max-w-[500px]">
                            Track your order's status effortlessly with the NimbusPost tracking tool.
                        </p>
                    </div>

                    <div className="w-full lg:w-[610px]">
                        <div className="bg-white rounded-[12px] shadow-[0_0_20px_rgba(0,0,0,0.2)] py-4 px-5 md:px-6">
                            <h3 className="text-[#1e3a8a] text-[17px] md:text-[18px] font-bold mb-5">Track Your Order</h3>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="mb-4">
                                    <label className="block text-[#1e3a8a] text-[15px] md:text-[16px] font-medium mb-2">
                                        Airway Bill Number (AWB) <span className="text-[#1e3a8a]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Airway Bill Number"
                                        className="w-full px-2.5 py-1.5 rounded-[8px] border border-[#1e3a8a] focus:outline-none focus:border-[#1e3a8a] text-gray-800 text-[14px] md:text-[15px]"
                                    />
                                </div>

                                <button className="bg-[#f59e0b] text-white font-bold text-[14px] md:text-[16px] px-8 py-2 rounded-full hover:bg-[#1e3a8a] transition-colors cursor-pointer">
                                    Track Now
                                </button>
                            </form>

                            <div className="mt-8 pt-4 border-t border-[#1e3a8a]/30">
                                <h4 className="text-[#1e3a8a] text-[14.5px] font-semibold mb-1">Need Your Order Details?</h4>
                                <p className="text-[#1e3a8a] text-[12.5px] leading-snug md:leading-normal">
                                    Your AWB tracking number was sent to you via SMS upon order confirmation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
