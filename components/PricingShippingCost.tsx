'use client';

import React from 'react';
import { Scaling, Banknote, MessageSquareText, PackageOpen, MapPin, ClipboardCheck } from 'lucide-react';

const features = [
    {
        title: 'Measure Accurately to Avoid Volumetric Surprises',
        description: 'Couriers charge shipping rates based on whichever is higher — the actual or volumetric weight. Use proper tools to measure your package and avoid penalties.',
        icon: Scaling,
    },
    {
        title: 'Optimize Your Packaging',
        description: 'Avoid oversized boxes for small items. Compact packaging = lower shipping costs + better volumetric efficiency.',
        icon: PackageOpen,
    },
    {
        title: 'Compare Prepaid vs COD Carefully',
        description: 'COD orders come with higher RTO risks and extra fees. Encourage prepaid orders with discounts or limited-time offers.',
        icon: Banknote,
    },
    {
        title: 'Analyze Zone-Wise Delivery Performance',
        description: 'Use data to pick couriers that perform well in specific zones. Because better delivery success = fewer returns.',
        icon: MapPin,
    },
    {
        title: 'Avoid RTOs with Proactive Communication',
        description: 'Use SMS/WhatsApp updates, NDR (Non-Delivery Report) follow-ups, and address verification tools to reduce returns.',
        icon: MessageSquareText,
    },
    {
        title: 'Use Auto Order Confirmation to Reduce RTO',
        description: 'Let us help you verify COD orders before shipping so you avoid fake orders, reduce cancellations, and cut down on costly returns.',
        icon: ClipboardCheck,
    },
];

export default function PricingShippingCost() {
    return (
        <section className="w-full bg-white py-14 md:py-20">
            <div className="max-w-[1400px] mx-auto px-5 md:px-[90px]">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[28px] md:text-[38px] font-bold text-[#1e3a8a] leading-tight">
                        Want to <span className="text-[#f59e0b]">Lower Your Shipping <br className="hidden md:block" /> Costs</span> Even More?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20 max-w-[1200px] mx-auto mb-12 md:mb-16">
                    {features.map((feature, index) => (
                        <div key={index} className="flex gap-5 items-start">
                            <div className="flex-shrink-0 relative flex items-center justify-center text-[#1e3a8a]">
                                <feature.icon size={32} className="text-[#1e3a8a] md:w-8 md:h-8 w-6 h-6" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-[#1e3a8a] text-[18px] font-bold mb-3 leading-snug">
                                    {feature.title}
                                </h3>
                                <p className="text-[#1e3a8a] text-[14px] md:text-[16px] leading-snug">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button className="bg-[#f59e0b] text-white text-[14px] md:text-[16px] font-bold px-6 py-2 rounded-full hover:bg-[#1e3a8a] transition-colors cursor-pointer">
                        Start Shipping
                    </button>
                </div>
            </div>
        </section>
    );
}
