'use client';

import React, { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';

const faqData = [
    {
        id: 1,
        question: "1. Where can I find the AWB number or order ID to track my order?",
        answer: "Your AWB number was sent to you via SMS upon order confirmation."
    },
    {
        id: 2,
        question: "2. Why isn't my tracking number working?",
        answer: "Tracking details may take up to 24 hours to update after the shipment is processed—please allow some time and check again. Additionally, ensure the tracking number was generated via NimbusPost, as numbers issued by other service providers may not be traceable through our system."
    },
    {
        id: 3,
        question: "3. What do I do if my order is delayed?",
        answer: "Please reach out to the merchant you’ve purchased the product from."
    },
    {
        id: 4,
        question: "4.  My package says delivered, but I haven't received it. What should I do?",
        answer: "Please check with neighbors or other household members who might have received the package on your behalf. If you still can’t find it, please contact the merchant you purchased the product from."
    },
    {
        id: 5,
        question: "5. Why is my package delayed?",
        answer: "Your package may get delayed due to unforeseen circumstances or reasons like incorrect delivery address, high order volumes, unexpected transit delays, missed delivery attempts, etc."
    },
    {
        id: 6,
        question: "6. How can I return my order?",
        answer: "You may place a return request directly from the seller’s website if your order is eligible for return. For more information, you may contact the merchant via email or call."
    },
    {
        id: 7,
        question: "7. My shipment has been returned/cancelled. What should I do?",
        answer: "Please get in touch with the merchant with whom the order was placed for further details on return or order cancellation. You may visit their website to raise your concerns via email or call."
    },
];

export default function OrderFAQ() {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="bg-white w-full py-5 md:py-10">
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
