'use client';

import React from 'react';
import Image from 'next/image';

const couriers = [
    {
        name: 'Blitz',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-492-1024x386.png.webp',
        description: 'Supercharge your brand with Blitz’s specialized same-day and next-day delivery. Reach customers across 27,000+ pin codes with speed that builds instant brand trust and high customer retention.'
    },
    {
        name: 'Blue Dart',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-493-1024x386.png.webp',
        description: 'Leverage the gold standard of logistics. Through உங்கள் Thoothuvan, access Blue Dart’s premium express network covering 19,100+ pin codes with real-time tracking that never fails.'
    },
    {
        name: 'Delhivery',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-494-1024x386.png.webp',
        description: 'Our integration with Delhivery opens doors to 18,700 pin codes. Benefit from specialized doorstep quality checks on reverse pickups and a robust infrastructure for seamless heavy-goods shipping.'
    },
    {
        name: 'DTDC',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-495-1024x386.png.webp',
        description: 'Dependability meets reach. DTDC brings one of India’s most expansive logistics networks with 570+ facilities, offering a smooth delivery flow for businesses that prioritize reliability above all else.'
    },
    {
        name: 'Ekart',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-496-1024x386.png.webp',
        description: 'Utilize the power of India’s largest consumer supply chain. Ekart’s express network handles everything from COD to prepaid with stress-free efficiency across 15,000+ locations.'
    },
    {
        name: 'AllcargoGATI',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/gati-1.png.webp',
        description: 'The ultimate partner for bulk shipping. Gati handles high-volume demands with a 30-ton daily capacity and 100% delivery coverage, making it perfect for scaling eCommerce brands.'
    },
    {
        name: 'Pikndel',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Pickndel-1024x386.png.webp',
        description: 'Win on convenience with ultra-fast options. Whether it’s one-hour, same-day, or next-day delivery, Pikndel ensures your local customers never have to wait for their orders.'
    },
    {
        name: 'Professional Couriers',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Professional-Couriers-1024x386.png.webp',
        description: 'Affordability meets massive scale. Ship documents or high-value cargo across 70,000+ locations with a trusted name that balances cost-effectiveness with consistent performance.'
    },
    {
        name: 'Shadowfax',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Shadowfax-2-1024x386.png.webp',
        description: 'The preferred choice for modern eCommerce. Shadowfax provides high-speed hyperlocal and nationwide reach, making it the go-to partner for fast-moving D2C brands.'
    },
    {
        name: 'Shree Maruti',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Shreemaruti-1024x386.png.webp',
        description: 'With over 40 years of logistics heritage, Shree Maruti provides rock-solid delivery to 5400+ locations. Tap into their traditional strength with our modern tech integration.'
    },
    {
        name: 'Trackon',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Trackon-1-1024x386.png.webp',
        description: 'Experience the Prime Track service for urgent shipments. From risk cover to efficient reverse pickups, Trackon is built to keep your business moving at a steady pace.'
    },
    {
        name: 'XpressBees',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Xpressbees-1024x386.png.webp',
        description: 'Built for speed and high volume. Join 35,000+ businesses using XpressBees for reliable nationwide shipping, covering 19,000+ pin codes with a massive fleet.'
    }
];

export default function CourierIntegrations() {
    return (
        <section className="w-full bg-white py-10 md:py-20">
            <div className="max-w-[1400px] mx-auto px-4 md:px-20">
                <h2 className="text-[28px] md:text-[38px] font-bold text-center mb-10 md:mb-14">
                    <span className="text-[#1e3a8a]">Courier </span>
                    <span className="text-[#f59e0b]">Integrations</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                    {couriers.map((courier, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-[#e8f0fe] to-[#f0f4ff] p-6 h-auto md:min-h-[400px] rounded-[16px] border border-[#eef2f6] transition-all duration-300 flex flex-col items-start"
                        >
                            <div className="w-full h-14 md:h-16 relative mb-4">
                                <Image
                                    src={courier.image}
                                    alt={courier.name}
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                            <h3 className="text-[#1e3a8a] text-[24px] md:text-[28px] font-bold mb-3">{courier.name}</h3>
                            <p className="text-[#1e3a8a] text-[14px] md:text-[15.5px] leading-normal">
                                {courier.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="bg-gradient-to-br from-[#e8f0fe] to-[#f0f4ff] p-6 h-auto md:min-h-[400px] rounded-[16px] border border-transparent transition-all duration-300 flex flex-col items-start">
                        <div className="w-[150px] h-[50px] md:h-[60px] relative mb-6">
                            <Image
                                src="https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-499-1024x386.png.webp"
                                alt="Elastic Run"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <h3 className="text-[#1e3a8a] text-[24px] md:text-[28px] font-bold mb-3">Elastic Run</h3>
                        <p className="text-[#1e3a8a] text-[14px] md:text-[15.5px] leading-normal">
                            Scale without limits. With a massive deep-reach network across the heart of India, Elastic Run handles high-capacity shipping needs with unparalleled stability.
                        </p>
                    </div>

                    <div className="lg:col-span-2 relative overflow-hidden rounded-[16px] bg-gradient-to-br from-[#0f2557] via-[#1e3a8a] to-[#2563eb] min-h-[400px] flex flex-col gap-10 md:gap-0 md:flex-row items-start md:items-center pt-6 md:py-6 px-6">
                        <div className="relative w-full h-[320px] md:absolute md:inset-0 md:h-full z-0 order-2 md:order-none">
                            <div className="absolute right-0 top-0 w-full md:w-[50%] h-full ">
                                <Image
                                    src="/human.png"
                                    alt="Person with laptop"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </div>

                        <div className="relative z-10 w-full md:w-[50%] px-1 md:px-3 order-1 md:order-none">
                            <h3 className="text-white text-[24px] md:text-[28px] font-bold leading-tight mb-5">
                                Optimize Your <br /> Shipping Costs
                            </h3>
                            <p className="text-white text-[14px] md:text-[15.5px] mb-5 max-w-[450px]">
                                Don't guess which courier is the cheapest. Use our intelligent rate calculator to compare real-time prices and choose the best fit for your budget.
                            </p>
                            <button className="bg-[#f59e0b] text-white px-6 py-2 rounded-full text-[14px] md:text-[16px] font-bold hover:bg-white hover:text-[#1e3a8a] transition-all duration-300 cursor-pointer">
                                Calculate Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
