'use client';

import React from 'react';
import Image from 'next/image';

const couriers = [
    {
        name: 'Blitz',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-492-1024x386.png.webp',
        description: 'Supercharge your eCommerce brand with Blitz’s same-day and next-day delivery. Delight your customers across 27,000+ pin codes with fast deliveries, reduce RTOs, and foster better retention and brand trust.'
    },
    {
        name: 'Blue Dart',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-493-1024x386.png.webp',
        description: 'Ship with Blue Dart courier via NimbusPost to deliver across 19,100+ pin codes across India. Enjoy smooth pickups, express delivery for time-sensitive orders, and real-time tracking that your customers can count on.'
    },
    {
        name: 'Delhivery',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-494-1024x386.png.webp',
        description: 'With NimbusPost and Delhivery courier integration, you can ship to 18,700 pin codes with ease. Get doorstep QC on reverse pickups, smooth delivery, and live tracking to keep your customers in the loop.'
    },
    {
        name: 'DTDC',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-495-1024x386.png.webp',
        description: 'Backed by decades of experience, DTDC courier brings the most dependable logistics networks in India, along with strong infrastructure with 570+ operating facilities and a smooth delivery flow. Perfect for businesses that need reach, speed, and reliability in one place.'
    },
    {
        name: 'Ekart',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-496-1024x386.png.webp',
        description: 'Move your orders faster with Ekart’s strong express network across 15,000 pin codes. From COD to prepaid, surface to air, Ekart courier keeps your shipments moving and your operations stress-free. Plus, track everything in real time to stay in control.'
    },
    {
        name: 'AllcargoGATI',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/gati-1.png.webp',
        description: 'Known for its strength in bulk shipping, AllcargoGati handles high-volume orders with ease. With 100% delivery coverage across India, surface and express delivery, and 30-ton daily capacity, it’s built to meet big demands effortlessly for scaling brands like yours.'
    },
    {
        name: 'Pikndel',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Pickndel-1024x386.png.webp',
        description: 'Pikndel lets you deliver in one hour, the same day, or the next day. With its lightning-fast eCommerce delivery options, you can ship in record time to win on both convenience and customer satisfaction.'
    },
    {
        name: 'Professional Couriers',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Professional-Couriers-1024x386.png.webp',
        description: 'Professional Couriers blends affordability with dependable service. Ship documents, high-value goods, or urgent cargo across 70,000+ locations with full tracking and support, minus the stress.'
    },
    {
        name: 'Shadowfax',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Shadowfax-2-1024x386.png.webp',
        description: 'Shadowfax brings you high-speed delivery with vast reach. Whether you need same-day, next-day, or hyperlocal delivery, ship with Shadowfax, a partner trusted by India’s top eCommerce brands.'
    },
    {
        name: 'Shree Maruti',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Shreemaruti-1024x386.png.webp',
        description: 'Backed by over 40 years of logistics experience, Shree Maruti courier brings reliable delivery to 5400+ locations. Tap into their wide reach and on-time delivery strength to simplify your eCommerce shipping.'
    },
    {
        name: 'Trackon',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Trackon-1-1024x386.png.webp',
        description: 'Trackon courier brings two decades of delivery experience with Prime Track service for faster deliveries. From express cargo and COD to reverse pickups and risk cover, it’s built to keep your orders moving and your customers happy.'
    },
    {
        name: 'XpressBees',
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Xpressbees-1024x386.png.webp',
        description: 'XpressBees is built for high-volume, fast-moving brands. Over 35,000 businesses count on it for quick and reliable shipping. Reach 19000+ pin codes across India with same-day, next-day delivery.'
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
                            With over 1.5 million shipments a day and deep reach across India, Elastic Run is designed to handle your growing shipping needs without breaking a sweat.
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
                                Not Sure Which <br /> is Economical?
                            </h3>
                            <p className="text-white text-[14px] md:text-[15.5px] mb-5 max-w-[450px]">
                                Try our rate calculator to compare courier rates in seconds and ship at the best rates.
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
