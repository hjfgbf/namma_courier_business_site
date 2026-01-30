'use client';

import React, { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';

const faqData = [
    {
        id: 1,
        question: "1. How many courier partners can I access through உங்கள் Thoothuvan?",
        answer: "We offer integration with over 25+ top national and regional courier partners, giving you the power to choose based on location, cost, and delivery speed."
    },
    {
        id: 2,
        question: "2. Can I choose a different courier for every order?",
        answer: "Absolutely. Our platform gives you total flexibility to assign specific couriers for each shipment to optimize performance and reduce costs."
    },
    {
        id: 3,
        question: "3. How does having multiple courier options benefit my business?",
        answer: "It ensures better serviceability across India, competitive rates, faster delivery times, and eliminates the risk of 'non-serviceable' pin code issues."
    },
    {
        id: 4,
        question: "4. Can I send cash-on-delivery (COD) orders through your platform?",
        answer: "Yes, we support COD shipping across our entire network, and you can track your remittances and cash flow directly from your dashboard."
    },
    {
        id: 5,
        question: "5. How is the best courier selected for an order?",
        answer: "Our smart AI allocation engine follows the priority rules you set, automatically assigning the most suitable courier for every unique destination."
    },
    {
        id: 6,
        question: "6. Can I track all shipments in one place?",
        answer: "Yes. Our unified dashboard consolidates tracking data from all courier partners into one real-time view for you and your customers."
    },
    {
        id: 7,
        question: "7. What happens if a courier is not available for a specific pin code?",
        answer: "உங்கள் Thoothuvan automatically suggests only the partners who service that specific area, saving you the time of manual checking."
    },
    {
        id: 8,
        question: "8. How are courier charges calculated?",
        answer: "Charges are based on real-time rate cards, package weight, dimensions, and distance. You can use our Rate Calculator to see estimates before you ship."
    },
    {
        id: 9,
        question: "9. Is there support for return and exchange shipments?",
        answer: "Yes, we handle full reverse logistics, including doorstep quality checks for returns and exchanges across major pin codes."
    },
    {
        id: 10,
        question: "10. Can I integrate your courier solution with my online store?",
        answer: "Definitely. We provide seamless integration with major eCommerce platforms like Shopify, WooCommerce, and various marketplaces to sync your orders automatically."
    }
];

export default function FAQSection() {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="bg-white w-full pt-6 pb-6 md:pb-14">
            <div className="max-w-[1400px] mx-auto px-5 md:px-8">
                <div className="bg-gradient-to-br from-[#e8f0fe] to-[#f0f4ff] rounded-[16px] px-6 pt-8 pb-4 md:pt-14 md:pb-7">
                    <h2 className="text-[28px] md:text-[38px] font-bold text-[#1e3a8a] text-center mb-2 md:mb-8 leading-tight md:leading-normal">
                        Frequently Asked Questions
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
