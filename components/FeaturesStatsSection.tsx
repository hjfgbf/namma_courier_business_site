'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Box, Smile, CreditCard } from 'lucide-react';

const FeaturesStatsSection = () => {
    const logos = [
        { name: 'WooCommerce', src: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-281.png.webp' },
        { name: 'Shopify', src: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Shopify-hscroll.png.webp' },
        { name: 'Magento', src: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-286.png.webp' },
        { name: 'Amazon', src: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-282.png.webp' },
        { name: 'EasyEcom', src: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Easyecom-hscroll.png.webp' },
    ];

    const stats = [
        {
            icon: <Box className="w-10 h-10 text-white" />,
            value: "29,000+",
            label: "Pin Codes Covered"
        },
        {
            icon: <Smile className="w-10 h-10 text-white" />,
            value: "24/7",
            label: "Dedicated Support"
        },
        {
            icon: <CreditCard className="w-10 h-10 text-white" />,
            value: "Fastest",
            label: "COD Remittance"
        }
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2557] via-[#1e3a8a] to-[#2563eb] pt-12 md:pt-20 pb-0 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center pl-0 md:pl-14">

                    {/* Top Left */}
                    <div className="flex justify-center items-center px-6 md:px-0">
                        <div className="relative">
                            <Image
                                src="/circle.png"
                                alt="Feature Overview"
                                width={460}
                                height={460}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Top Right */}
                    <div className="flex flex-col space-y-6 mt-2 md:mt-16">
                        <div className="space-y-4">
                            <h2 className="text-[28px] md:text-[38px] font-bold text-white leading-tight">
                                Sell Everywhere,<br />Ship from One Place
                            </h2>
                            <p className="text-white leading-snug text-[14.5px] md:text-[16.5px] max-w-[440px]">
                                Connect your favorite store and manage all your orders from a single, powerful dashboard. Less manual work, more growth.
                            </p>
                        </div>

                        <div className="w-full overflow-hidden relative group -mt-3">
                            <div className="flex animate-marquee w-max">
                                <div className="flex">
                                    {logos.map((logo, index) => (
                                        <div key={`set1-${index}`} className="flex-shrink-0 w-[90] md:w-28 h-28 flex items-center justify-center transition-transform">
                                            <Image
                                                src={logo.src}
                                                alt={logo.name}
                                                width={64}
                                                height={64}
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex">
                                    {logos.map((logo, index) => (
                                        <div key={`set2-${index}`} className="flex-shrink-0 w-[90px] md:w-28 h-28 flex items-center justify-center transition-transform">
                                            <Image
                                                src={logo.src}
                                                alt={logo.name}
                                                width={64}
                                                height={64}
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button className="-mt-4 bg-[#f59e0b] flex mx-auto md:mx-0 text-white text-[14px] md:text-base font-bold px-6 py-2 rounded-full w-fit hover:bg-white hover:text-[#1e3a8a] transition-all transform cursor-pointer">
                            Know More
                        </button>
                    </div>

                    <div className="flex flex-col space-y-5 md:space-y-6 pl-0 md:pl-16 mt-20 md:mt-0">
                        <h2 className="text-[28px] md:text-[38px] tracking-wide font-bold text-white leading-tight">
                            Turning Capabilities<br />into Possibilities
                        </h2>

                        <div className="flex items-center space-x-6">
                            <div className="relative w-60 h-16 md:h-14">
                                <Image
                                    src="/rating.png"
                                    alt="Client Ratings"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </div>

                        <button className="mt-1 md:mt-2 bg-[#f59e0b] mx-auto md:mx-0 text-white text-[14px] md:text-base font-bold px-6 py-2 rounded-full w-fit hover:bg-white hover:text-[#1e3a8a] transition-all transform cursor-pointer">
                            Get Started
                        </button>
                    </div>

                    <div className="flex justify-center items-end pr-0 md:pr-36 min-h-[400px] md:min-h-[500px] relative overflow-visible">
                        <div className="relative w-full flex flex-col items-center h-full justify-end">
                            <div className="z-30 w-[90%] mb-[-42px] cursor-grab active:cursor-grabbing">
                                <Swiper
                                    direction="horizontal"
                                    modules={[Autoplay]}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    className="h-[200px] max-w-[200px] md:h-[260px] md:max-w-[260px] rounded-[10px] bg-[#1e3a8a] overflow-hidden border border-white/10"
                                >
                                    {stats.map((stat, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="bg-[#1e3a8a] p-6 md:p-8 rounded-[10px] border-0 h-full flex flex-col justify-center items-start space-y-2">
                                                <div className="mb-2 scale-95 md:scale-105 origin-left">
                                                    {stat.icon}
                                                </div>
                                                <h3 className="text-[24px] md:text-[30px] font-bold text-white leading-tight">
                                                    <span className="text-white block">{stat.value}</span>
                                                    <span className="text-white text-[22px] md:text-[28px] font-medium">{stat.label}</span>
                                                </h3>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            <div className="relative w-[260px] md:w-[320px] h-[220px] md:h-[250px] flex flex-col items-center">
                                {/* Top Face */}
                                <div
                                    className="absolute top-0 w-full h-[80px] bg-[#1e2a6a] z-20"
                                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                                ></div>

                                {/* Left Face */}
                                <div
                                    className="absolute top-[40px] left-0 w-[50.5%] h-full bg-[#1e3a8a] z-10"
                                    style={{ clipPath: 'polygon(0 0, 100% 40px, 100% 100%, 0 100%)' }}
                                ></div>

                                {/* Right Face */}
                                <div
                                    className="absolute top-[40px] right-0 w-[50.5%] h-full bg-[#1e3a6a] z-10"
                                    style={{ clipPath: 'polygon(0 40px, 100% 0, 100% 100%, 0 100%)' }}
                                ></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                
                .pillar-top {
                    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
                }

                .pillar-left {
                    clip-path: polygon(0 50px, 100% 100px, 100% 100%, 0 100%);
                }

                .pillar-right {
                    clip-path: polygon(0 100px, 100% 50px, 100% 100%, 0 100%);
                }
            `}</style>
        </section>
    );
};

export default FeaturesStatsSection;
