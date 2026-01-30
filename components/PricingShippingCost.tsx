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
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[28px] md:text-[38px] font-bold text-[#1e3a8a] leading-tight">
                        Looking to <span className="text-[#f59e0b]">Maximize Your Logistics <br className="hidden md:block" /> Savings</span> Effortlessly?
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
