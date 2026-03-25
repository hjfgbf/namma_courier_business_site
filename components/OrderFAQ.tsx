'use client';

import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const faqData = [
    {
        id: 1,
        question: "Where can I find the AWB number or Order ID to track my shipment?",
        answer: "Your Airway Bill (AWB) number is a unique 10-15 digit code sent to your registered mobile number and email immediately after the seller confirms your order. You can also find it in the 'My Orders' section of the website where you made the purchase."
    },
    {
        id: 2,
        question: "Why isn't my tracking number showing any updates?",
        answer: "Tracking data usually takes 12-24 hours to sync once the label is generated. If you've just received your ID, please check back after a few hours. Note: ensure you are using a valid tracking ID issued via the உங்கள் Thoothuvan network for accurate real-time results."
    },
    {
        id: 3,
        question: "What should I do if my order delivery is delayed?",
        answer: "Delays can occur due to weather, high seasonal volumes, or transit hub congestion. If your order is past its Expected Delivery Date (EDD), we recommend contacting the merchant/seller directly, as they can initiate an official inquiry with our logistics team on your behalf."
    },
    {
        id: 4,
        question: "The status shows 'Delivered,' but I haven't received my package.",
        answer: "Please check with your building security, reception, or neighbors first. If the package is still missing, contact the merchant immediately. We maintain digital Proof of Delivery (POD) for every shipment which can be used to verify the recipient's signature or location."
    },
    {
        id: 5,
        question: "Why has my package been marked as 'Returned to Origin' (RTO)?",
        answer: "An RTO happens if the delivery agent made multiple failed attempts, the address was incomplete, or the customer was unreachable. Once a package is marked RTO, it is sent back to the seller. You will need to contact the seller to arrange a re-shipment."
    },
    {
        id: 6,
        question: "How can I change my delivery address mid-transit?",
        answer: "For security reasons, address changes are only permitted before the first delivery attempt. Please contact the seller’s customer support to request a 'Re-routing' or address correction in our system."
    }
];

export default function OrderFAQ() {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="bg-white w-full py-5 md:py-10">
            <div className="max-w-[1400px] mx-auto">
                <div className="bg-gradient-to-br from-[#e8f0fe] to-[#f0f4ff] rounded-[16px] px-5 md:px-8 pt-8 pb-10 md:pt-14 md:pb-16">
                    <h2 className="text-[28px] md:text-[38px] font-bold text-[#1e3a8a] text-center mb-6 md:mb-8 leading-tight md:leading-normal">
                        Frequently Asked Questions
                    </h2>

                    <div className="w-full max-w-[1100px] mx-auto space-y-5 md:space-y-6">
                        {faqData.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleAccordion(item.id)}
                                    className="w-full flex items-center justify-between px-5 md:px-8 py-5 md:py-7 text-left focus:outline-none group"
                                >
                                    <span className="text-[#1e3a8a] text-[15.5px] md:text-[17.5px] font-semibold tracking-wide transition-colors duration-300">
                                        {item.question}
                                    </span>
                                    <HiChevronDown
                                        className={`text-[#1e3a8a] text-2xl transition-transform duration-300 ${openId === item.id ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <div
                                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${openId === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 md:px-8 pb-5">
                                            <p className="text-[#1e3a8a] text-[14.5px] md:text-[16.5px] font-medium leading-normal mb-2 md:mb-3.5 md:w-[95%]">
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
