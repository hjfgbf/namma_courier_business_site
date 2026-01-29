'use client';

import React, { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';

const faqData = [
    {
        id: 1,
        question: "1. How are these shipping rates calculated?",
        answer: "The calculation for shipping rates is based on factors like package weight, dimensions, destination, courier partner, and service type (standard, express, etc.)."
    },
    {
        id: 2,
        question: "2. Will I see all the courier options?",
        answer: "Yes, you’ll see real-time rates from all our partnered courier services available. This allows you to compare prices and delivery times and, accordingly, choose what works best for your order."
    },
    {
        id: 3,
        question: "3. Is this rate final, or will it change later?",
        answer: "The rate shown is an accurate estimate based on the details you provide. However, final charges may vary if the actual weight or dimensions differ from what was entered. Always measure your package correctly to avoid adjustments."
    },
    {
        id: 4,
        question: "4. Do rates differ for COD and prepaid orders?",
        answer: "Yes. COD shipments may have an additional fee. The calculator will reflect updated rates based on the payment mode you choose."
    },
    {
        id: 5,
        question: "5. Can I ship at the shown rates without booking immediately?",
        answer: "Yes, you can check rates anytime without booking right away. Rates are shown in real time and may change based on courier updates."
    },
    {
        id: 6,
        question: "6. What happens if my package exceeds the entered weight or dimensions?",
        answer: "If the actual weight or size is more than what was entered, couriers may apply additional charges. Always measure accurately to avoid surprises."
    },
    {
        id: 7,
        question: "7. Can I calculate shipping rates for anywhere in India?",
        answer: "Yes, our calculator supports all serviceable pin codes across India through our courier partners."
    },
    {
        id: 8,
        question: "8. Is there a minimum shipping volume to use the calculator?",
        answer: "No minimum shipment required. Whether you’re shipping one order or hundreds, our platform is built for flexibility."
    },
    {
        id: 9,
        question: "9. How can I reduce my shipping costs further?",
        answer: "Using optimal packaging, minimizing RTOs, and choosing the right courier based on your product category and zone can help reduce costs."
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
