'use client';

import React, { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';

const faqData = [
    {
        id: 1,
        question: "1. How many courier partners can I access through NimbusPost?",
        answer: "We offer integration with 25+ national and regional courier partners, allowing you to choose the most suitable option based on location, cost, and delivery speed."
    },
    {
        id: 2,
        question: "2. Can I choose a different courier for every order?",
        answer: "Yes, you can. The platform allows you to assign different couriers for each shipment, giving you the flexibility to optimize cost and performance."
    },
    {
        id: 3,
        question: "3. How does having multiple courier options benefit my business?",
        answer: "Access to multiple couriers means better serviceability, competitive shipping rates, faster delivery options, and a lower risk of delays or non-serviceable pin codes."
    },
    {
        id: 4,
        question: "4. Can I send cash-on-delivery (COD) orders through your platform?",
        answer: "Yes, we support COD shipping across a wide serviceable network, and you can track remittances directly from your dashboard."
    },
    {
        id: 5,
        question: "5. How is the best courier selected for an order?",
        answer: "Our automated courier allocation engine follows the rules and priorities you set. It smartly assigns the most suitable courier based on your preferences."
    },
    {
        id: 6,
        question: "6. Can I track all shipments in one place?",
        answer: "Yes. Our unified dashboard lets you track all your shipments in real time, regardless of the courier partner."
    },
    {
        id: 7,
        question: "7. What happens if a courier is not available for a specific pin code?",
        answer: "Our system automatically filters and suggests only those courier partners who service the destination pin code, so you never waste time checking availability manually."
    },
    {
        id: 8,
        question: "8. How are courier charges calculated?",
        answer: "Shipping charges are based on origin-destination pin codes, package deadweight and dimensions, and the selected courier’s rate card. You can view estimated costs before confirming the shipment."
    },
    {
        id: 9,
        question: "9. Is there support for return and exchange shipments?",
        answer: "Yes, we offer pickup and delivery support for returns and exchanges, including reverse logistics across major pin codes."
    },
    {
        id: 10,
        question: "10. Can I integrate your courier solution with my online store?",
        answer: "Absolutely. We support integrations with major eCommerce platforms and marketplaces, allowing you to sync orders and streamline fulfillment."
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
