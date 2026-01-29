'use client';

import React from 'react';
import { Scale, ClipboardList, LayoutDashboard, MapPin, Truck, Wallet } from 'lucide-react';

const impactFeatures = [
    {
        title: 'Dead Weight of the Package',
        icon: Scale,
    },
    {
        title: 'Shipping Plan',
        icon: ClipboardList,
    },
    {
        title: 'Dimensions of the Package',
        icon: LayoutDashboard,
    },
    {
        title: 'Shipping Mode',
        icon: Truck,
    },
    {
        title: 'Pickup & Delivery Area Distance',
        icon: MapPin,
    },
    {
        title: 'Payment Mode',
        icon: Wallet,
    },
];

export default function PricingImpactSection() {
    return (
        <section className="w-full bg-gradient-to-br from-[#0f2557] via-[#1e3a8a] to-[#2563eb] py-10 md:py-[70px] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-5 md:px-8">
                <div className="flex flex-col md:flex-row items-center text-center md:text-start gap-10 md:gap-0">
                    <div className="w-full md:w-[575px]">
                        <h2 className="w-full md:w-[70%] text-[28px] md:text-[38px] font-bold text-white leading-tight mb-5">
                            Factor In Everything that Impacts Your Bottom Line
                        </h2>
                        <p className="text-white text-[15px] md:text-[17px] font-semibold leading-relaxed max-w-[550px] ">
                            Shipping costs aren’t just about the distance. Leverage our rate calculator to get a complete cost breakdown — so you know precisely what you’re paying for before shipping an order.
                        </p>
                    </div>

                    <div className="w-full md:w-[625px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-5 md:gap-y-4">
                            {impactFeatures.map((feature, index) => (
                                <div key={index} className="bg-white rounded-[12px] py-4 px-3 flex items-center gap-4 shadow-lg hover:shadow-xl transition-shadow cursor-default group">
                                    <div className="flex-shrink-0 relative flex items-center justify-center text-[#f59e0b] transition-colors duration-300">
                                        <feature.icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[#1e3a8a] text-[14px] md:text-[15px] font-medium leading-tight">
                                        {feature.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
