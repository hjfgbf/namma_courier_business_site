import React from 'react';
import Image from 'next/image';

const features = [
    {
        id: 1,
        title: "Unbeatable Shipping Rates",
        description: "Maximize your margins with our pre-negotiated rates. As your growth partner, we offer shipping starting as low as ₹19/500gm*, giving you more room to scale.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-2147233794.png"
    },
    {
        id: 2,
        title: "Multi-Hub Pickups",
        description: "Add multiple pickup locations effortlessly. Speed up your fulfillment by picking up from the location closest to your inventory or supply source.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-21472337941.png"
    },
    {
        id: 3,
        title: "Lightning-Fast COD Payouts",
        description: "Don't let your capital get stuck. Get your COD remittances in as fast as 24 hours, so you can reinvest in your business without the wait.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-21472337942.png"
    },
    {
        id: 4,
        title: "Smart Weight Protection",
        description: "Stop worrying about weight disputes. Lock in your dimensions upfront to ensure you are charged exactly what you expect, with no hidden surprises.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-21472337943.png"
    },
    {
        id: 5,
        title: "Transit Insurance Cover",
        description: "Your peace of mind matters. Protect your shipments against loss or damage with coverage up to ₹2500, because your messenger always has your back.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-21472337944.png"
    },
    {
        id: 6,
        title: "Intelligent RTO Reduction",
        description: "Slash returns using our smart verification tools. Block high-risk pin codes and automate NDR follow-ups to ensure your orders reach their destination.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-2147233794-1.png"
    },
    {
        id: 7,
        title: "Quality-Checked Returns",
        description: "Simplify reverse logistics. Our seamless return process includes quality checks, ensuring you only restock items that meet your standards.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-21472337946.png"
    },
    {
        id: 8,
        title: "100% Billing Transparency",
        description: "No hidden fees, ever. Access a consolidated view of all your shipping costs and weights to keep your business finances crystal clear.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-21472337947.png"
    },
    {
        id: 9,
        title: "Personal Account Managers",
        description: "You're not just a ticket number. Get a dedicated shipping expert to help you optimize operations and resolve any courier hurdles instantly.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2026/01/Frame-21472337948.png"
    },
    {
        id: 10,
        title: "Hyper-Responsive Support",
        description: "Real people, real solutions. Our 3-tier proactive support team is always ready to ensure your shipping flow remains uninterrupted.",
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
                        உங்கள் Thoothuvan provides a powerhouse of features designed to eliminate friction, minimize losses, and fuel your brand’s growth across every corner of the country.
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
