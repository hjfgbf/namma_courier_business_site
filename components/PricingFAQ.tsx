'use client';

import React, { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';

const faqData = [
    {
        id: 1,
        question: "How are the shipping rates calculated on your platform?",
        answer: "Our engine calculates rates in real-time based on the origin/destination pin codes, dead weight, volumetric dimensions, and the specific service level (Express vs. Standard) offered by our courier partners."
    },
    {
        id: 2,
        question: "Will I get to see all available courier options?",
        answer: "Absolutely. We provide a transparent side-by-side comparison of all eligible courier partners, allowing you to filter by the cheapest rates, fastest delivery times, or best performance ratings."
    },
    {
        id: 3,
        question: "Is the rate shown final, or can it change later?",
        answer: "The quote is an accurate reflection of the data entered. However, couriers perform a 'Weight Audit' upon pickup. If the actual weight or dimensions differ from your input, price adjustments may occur. We recommend using precise measuring tools to avoid discrepancies."
    },
    {
        id: 4,
        question: "Are there different rates for COD vs. Prepaid orders?",
        answer: "Yes. While base shipping rates remain similar, COD orders involve additional 'COD Collection Fees' and higher risk management costs. Our calculator factor these in automatically when you select the payment mode."
    },
    {
        id: 5,
        question: "Can I check rates without an immediate booking?",
        answer: "Yes, you are free to use our calculator for logistics planning anytime. Please note that courier companies update their base rates periodically, so quotes are live and subject to market changes."
    },
    {
        id: 6,
        question: "What happens if my package exceeds the declared weight?",
        answer: "In cases of weight mismatch, the courier will bill the difference as a 'Weight Discrepancy.' உங்கள் Thoothuvan provides a dedicated dashboard to help you manage and dispute these audits if necessary."
    },
    {
        id: 7,
        question: "Does the calculator cover all of India?",
        answer: "Yes, our network covers over 27,000+ pin codes across India, including metropolitan hubs, Tier-2/3 cities, and remote regional areas."
    },
    {
        id: 8,
        question: "Is there a minimum monthly shipment volume required?",
        answer: "None at all. Whether you are a startup shipping your first package or a global brand moving thousands, you get access to the same competitive commercial rates."
    },
    {
        id: 9,
        question: "How can I further optimize my shipping expenses?",
        answer: "We recommend optimizing your box sizes to reduce volumetric weight, encouraging prepaid orders to lower COD fees, and using our 'Zone-Wise' analysis to pick the most efficient carrier for specific routes."
    },
];

export default function PricingFAQ() {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="bg-white w-full pt-2 md:pt-6 pb-1 md:pb-0">
            <div className="max-w-[1400px] mx-auto px-5 md:px-8">
                <div className="bg-gradient-to-br from-[#e8f0fe] to-[#f0f4ff] rounded-[16px] px-6 pt-8 pb-4 md:pt-14 md:pb-7">
                    <h2 className="text-[28px] md:text-[38px] font-bold text-[#1e3a8a] text-center mb-2 md:mb-8 leading-tight md:leading-normal">
                        <span className='text-[#f59e0b]'>Got Questions?</span> We’ve Got You Covered
                    </h2>

                    <div className="w-full max-w-[1100px] mx-auto">
                        {faqData.map((item) => (
                            <div key={item.id} className="border-b border-gray-300 last:border-none">
                                <button
                                    onClick={() => toggleAccordion(item.id)}
                                    className="w-full flex items-center justify-between py-5 md:py-6.5 text-left focus:outline-none group"
                                >
                                    <span className="text-[#1e3a8a] text-[15.5px] md:text-[17.5px] font-medium tracking-wide transition-colors duration-300">
                                        {item.question}
                                    </span>
                                    <span className="text-[#1e3a8a] text-xl ml-4">
                                        {openId === item.id ? <HiMinus /> : <HiPlus />}
                                    </span>
                                </button>
                                <div
                                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${openId === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="pb-5">
                                            <p className="text-[#1e3a8a] text-[14px] md:text-[16px] font-medium leading-snug mb-2 md:mb-3.5 md:w-[95%]">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
