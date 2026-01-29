import React from 'react';
import Image from 'next/image';

const features = [
    {
        id: 1,
        title: "Lowest Shipping Rates",
        description: "Pay less with our pre-negotiated shipping rates for better margins, more room for discounts, and happier customers. Start shipping for as low as ₹19/500gm*.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-2147233794.png"
    },
    {
        id: 2,
        title: "Multiple Pickup Locations",
        description: "Easily add multiple pickup locations to speed up shipments. Reduce delays and get products out faster by picking up from the closest spot.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-21472337941.png"
    },
    {
        id: 3,
        title: "Faster COD Payouts",
        description: "Get your COD payouts in as fast as one day. Forget chasing payments and unlock working capital at the earliest to move your business smoothly.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-21472337942.png"
    },
    {
        id: 4,
        title: "Weight Freezing Protection",
        description: "Lock in deadweight and dimensions upfront to ensure couriers charge as per your preset specifications, and avoid mismatches, overcharges, or disputes.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-21472337943.png"
    },
    {
        id: 5,
        title: "Insurance Cover",
        description: "Get security coverage up to ₹2500 to protect your shipments against loss or damage and save on unexpected costs because we've got your back, always.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-21472337944.png"
    },
    {
        id: 6,
        title: "Reduce RTO Smartly",
        description: "Confirm COD orders and addresses upfront. Block high-RTO pin codes, enable automated NDR follow-ups, and use smart allocation to slash returns and ensure successful deliveries.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-2147233794-1.png"
    },
    {
        id: 7,
        title: "Easy Reverse Pickup with QC",
        description: "Simplify returns with seamless reverse pickups and quality checks. Save time, reduce costs, and restock only what meets your standards.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-21472337946.png"
    },
    {
        id: 8,
        title: "Transparent Billing & Weight Details",
        description: "View complete billing and shipment weight info in one place. Catch mismatches early, avoid hidden charges, and keep your shipping costs fully in check.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-21472337947.png"
    },
    {
        id: 9,
        title: "Dedicated Account Manager",
        description: "Get your personal shipping guide. Resolve courier issues faster, optimize operations, and boost delivery success with expert support every day.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-21472337948.png"
    },
    {
        id: 10,
        title: "Proactive Support",
        description: "Reach our customer success team for quick resolutions from real people. Our 3-tier support ensures smooth shipping and uninterrupted business.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-2147233795.png"
    }
];

export default function FeaturesGrid() {
    return (
        <section className="w-full bg-white pt-16 pb-8 md:pt-20 md:pb-10 px-5 md:px-10">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-[28px] md:text-[38px] font-bold mb-6 md:mb-3 leading-tight md:leading-normal">
                        <span className="text-[#f59e0b]">Logistics Advantages </span>
                        <span className="text-[#1e3a8a]">Your Business Deserves</span>
                    </h2>
                    <p className="text-[#1e3a8a] text[14px] md:text-[16.5px] tracking-wide font-semibold max-w-[900px] mx-auto leading-relaxed">
                        Boost your delivery performance and delight customers with powerful tools built to reduce friction, minimize losses, and improve every step of your shipping flow.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-4 mb-12 md:mb-14">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-gradient-to-br from-[#e8f0fe] to-[#f0f4ff] rounded-[16px] px-3 py-4 md:p-6 flex flex-col items-start transition-shadow duration-300"
                        >
                            <div className="w-18 h-18 mb-2 md:mb-4 relative">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>

                            <h3 className="text-[#1e3a8a] text-[20px] md:text-[22px] font-bold mb-3 md:mb-5 leading-tight">
                                {feature.title}
                            </h3>

                            <p className="text-[#1e3a8a] text-[14px] md:text-[16px] leading-normal mb-2 md:mb-10">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button className="bg-[#f59e0b] text-white text-[14px] md:text-[16px] font-bold px-8 md:px-6 py-2 rounded-full hover:bg-[#1e3a8a] transition-colors cursor-pointer">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
}
