'use client';

import React from 'react';
import { Scaling, Banknote, MessageSquareText, PackageOpen, MapPin, ClipboardCheck } from 'lucide-react';

const features = [
    {
        title: 'Master Volumetric Calculations',
        description: 'Couriers charge based on the higher value between actual and volumetric weight. Precise measurements help you avoid unexpected weight discrepancies and penalties.',
        icon: Scaling,
    },
    {
        title: 'Optimize Packaging Geometry',
        description: 'Large boxes for small items inflate your costs. Slim down your packaging to maximize volumetric efficiency and lower your per-parcel spend.',
        icon: PackageOpen,
    },
    {
        title: 'Strategize Payment Methods',
        description: 'COD orders carry higher RTO risks and processing fees. Use உங்கள் Thoothuvan to incentivize prepaid orders through targeted customer discounts.',
        icon: Banknote,
    },
    {
        title: 'Zone-Specific Carrier Routing',
        description: 'Not all couriers are equal in every city. Align your orders with carriers that demonstrate the highest delivery success rates in specific geographic zones.',
        icon: MapPin,
    },
    {
        title: 'Proactive NDR Management',
        description: 'Reduce RTOs by using our automated WhatsApp and SMS updates. Real-time communication ensures customers are ready for their delivery.',
        icon: MessageSquareText,
    },
    {
        title: 'Automated Order Verification',
        description: 'Filter out high-risk COD orders before they ship. Our verification tools help you confirm intent, reducing costly returns and fake orders.',
        icon: ClipboardCheck,
    },
];

export default function PricingShippingCost() {
    return (
        <section className="w-full bg-white py-14 md:py-20">
            <div className="max-w-[1400px] mx-auto px-5 md:px-[90px]">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-[28px] md:text-[38px] font-bold text-[#1e3a8a] leading-tight">
                        Looking to <span className="text-[#f59e0b]">Maximize Your Logistics <br className="hidden md:block" /> Savings</span> Effortlessly?
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-12 md:gap-y-14 max-w-[1100px] mx-auto mb-12 md:mb-16">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="mb-5 flex items-center justify-center">
                                <feature.icon
                                    size={60}
                                    className="text-[#1e3a8a]"
                                    strokeWidth={1}
                                />
                            </div>
                            <h3 className="text-[#1e3a8a] text-[17px] md:text-[18px] font-bold mb-2 md:mb-3 leading-snug">
                                {feature.title}
                            </h3>
                            <p className="text-[#1e3a8a] text-[14px] md:text-[15px] leading-relaxed max-w-[300px] md:max-w-[260px]">
                                {feature.description}
                            </p>
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
