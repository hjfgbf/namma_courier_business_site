'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function GrowingBrandSection() {
    const brandSlides = [
        {
            logo: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-5521.png.webp',
            text: 'The best part of partnering with NimbusPost is that their responsive team provides great support. It feels like I’m dealing with real people instead of just raising tickets and escalations online. A huge shoutout to the team for their continued support.',
            name: 'Aman Patial',
            company: 'K9 Vitality'
        },
        {
            logo: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-5531.png.webp',
            text: 'NimbusPost has helped us automate supply chain management and provides real-time access to analytics. Their support benefits are exceptional and facilitate a seamless communication flow.',
            name: 'Hiren Sheta',
            company: 'Alpino Foods Pvt. Ltd.'
        },
        {
            logo: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-5541.png.webp',
            text: 'NimbusPost has been a game-changer for our brand. Fewer weight disputes, faster deliveries, and lower RTOs have boosted customer trust. Their support team and KAM are always helpful. Love their can-do attitude. Excited to grow with them!',
            name: 'Chintan Jani',
            company: 'Sparkup.in'
        },
        {
            logo: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-5551.png.webp',
            text: 'With NimbusPost, our RTO percentage is at an all-time low, and our customers are super happy with the delivery speed. They’re the most ideal shipping partner.',
            name: 'Neha Aggarwal',
            company: 'Clapjoy'
        },
        {
            logo: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-5561.png.webp',
            text: 'NimbusPost’s advanced analytics and smart pricing have helped us improve and penetrate our online eCommerce business.',
            name: 'Shreesh Gawdi',
            company: 'Candor Foods'
        },
        {
            logo: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/gudgum.png.webp',
            text: 'Great consumer support. One of the best shipping aggregators in India. The rates are very competitive as well. The dashboard UI is very simple.',
            name: 'M. Shashi',
            company: 'GudGum'
        },
        {
            logo: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/peach.png.webp',
            text: 'Excellent communication and services. Everything is smooth. Issues get resolved quick without any complications like in any other aggregators. Have suggested NimbusPost to other business owners as well.',
            name: 'Ankit',
            company: 'Peachy House'
        }
    ];

    return (
        <section className="bg-gradient-to-br from-[#e8eef7] via-[#f5f7fa] to-[#fef3e8] w-full pt-12 pb-16 md:py-20 text-[#1e3a8a] relative elementor-section">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-[28px] md:text-[38px] font-bold mb-3 md:mb-5 leading-tight">
                        <span className='text-[#f59e0b]'>Trusted</span> by Growing Brands
                    </h2>
                    <p className="text-[15.5px] md:text-[17px] font-semibold tracking-wide leading-normal">
                        See how eCommerce sellers simplified shipping operations and delivered better <br className="hidden md:block" />
                        with our trusted courier partner network.
                    </p>
                </div>

                <div className="w-full relative">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        pagination={{
                            clickable: true,
                            el: '.has-testimonial-pagination',
                            type: 'bullets',
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        className="w-full"
                    >
                        {brandSlides.map((slide, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <div className="bg-white text-black p-6 rounded-xl h-full min-h-[320px] md:min-h-[400px] flex flex-col items-start border-none transition-transform duration-300">
                                    <div className="mb-5 md:mb-6 bg-gray-100 rounded-lg w-[160px] h-[44px] md:h-[60px] relative flex items-center justify-center">
                                        <Image
                                            src={slide.logo}
                                            alt={slide.company}
                                            width={140}
                                            height={50}
                                            className="object-contain w-full h-auto"
                                        />
                                    </div>

                                    <div className="flex-grow ">
                                        <p className="text-[14px] md:text-[15px] leading-[24px] text-[#1e3a8a] font-medium">
                                            {slide.text}
                                        </p>
                                    </div>

                                    <div className="mt-auto w-full">
                                        <h3 className="text-[16px] md:text-[18px] font-bold text-[#1e3a8a] mb-0">
                                            {slide.name || 'Client Name'}
                                        </h3>
                                        <p className="text-[13px] md:text-[14px] text-[#1e3a8a] opacity-80 uppercase tracking-wide font-semibold">
                                            {slide.company}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="has-testimonial-pagination flex justify-center gap-2 mt-8 md:mt-12"></div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes progress-fill {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }

                /* Pagination Bullets for both sliders */
                .swiper-pagination-bullet {
                    width: 36px !important;
                    height: 6px !important;
                    border-radius: 4px !important;
                    background: #DDDFE1 !important;
                    opacity: 1 !important;
                    transition: background 0.3s ease;
                    margin: 0 4px !important;
                    position: relative;
                    overflow: hidden;
                    display: inline-block;
                }

                .swiper-pagination-bullet-active {
                    background: #DDDFE1 !important;
                }

                .swiper-pagination-bullet-active::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 0%;
                    background-color: #1e3a8a;
                    border-radius: 4px;
                    animation: progress-fill 5000ms linear forwards;
                }
            `}</style>
        </section>
    );
}
