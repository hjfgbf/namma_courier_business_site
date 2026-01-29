'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaPlay } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialSection() {
    const videoSlides = [
        {
            thumbnail: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/haritu-thumbnail-1.webp',
            videoUrl: 'https://www.youtube.com/watch?v=j_Ux5Lubsc4',
            alt: 'Haritu Thumbnail',
            title: 'HOW CONTROLLING RTO TURNED THEIR BRAND AROUND',
            brand: 'HARITU'
        },
        {
            thumbnail: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Sparkup-thumbnaill-1.webp',
            videoUrl: 'https://www.youtube.com/watch?v=zGIA-4X0YHo',
            alt: 'Sparkup Thumbnail',
            title: 'HOW CONTROLLING RTO TURNED THEIR BRAND AROUND',
            brand: 'SPARKUP'
        }
    ];

    const testimonialSlides = [
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

    const handlePlayVideo = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <section className="w-full pt-12 pb-16 md:py-20 text-white relative elementor-section bg-gradient-to-br from-[#0f2557] via-[#1e3a8a] to-[#2563eb]">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[28px] md:text-[38px] font-bold mb-3 md:mb-2 leading-tight">
                        Don’t Take Our Word for It — Take Theirs
                    </h2>
                    <p className="text-[15.5px] md:text-[17px] font-semibold tracking-wide leading-snug">
                        Watch what happens when eCommerce logistics <br className="hidden md:block" />
                        turns into a growth advantage
                    </p>
                </div>

                <div className="mb-16 md:mb-24">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            el: '.has-video-pagination',
                            type: 'bullets',
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        className="w-full max-w-[1100px] mx-auto rounded-[16px] overflow-hidden shadow-2xl relative"
                    >
                        {videoSlides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="relative aspect-[2.7/1] w-full bg-black group cursor-pointer overflow-hidden rounded-[16px]"
                                    onClick={() => handlePlayVideo(slide.videoUrl)}
                                >
                                    <Image
                                        src={slide.thumbnail}
                                        alt={slide.alt}
                                        fill
                                        className="object-cover opacity-90"
                                        priority={index === 0}
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#f59e0b] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                            <FaPlay className="text-white text-2xl md:text-3xl ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="has-video-pagination flex justify-center gap-2 mt-8 md:mt-10"></div>
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
                        {testimonialSlides.map((slide, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <div className="bg-white text-black p-6 rounded-xl h-full min-h-[320px] md:min-h-[400px] flex flex-col items-start border-none shadow-lg transition-transform duration-300">
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
                    background: rgba(255, 255, 255, 0.3) !important;
                    opacity: 1 !important;
                    transition: background 0.3s ease;
                    margin: 0 4px !important;
                    position: relative;
                    overflow: hidden;
                    display: inline-block;
                }

                .swiper-pagination-bullet-active {
                    background: rgba(255, 255, 255, 0.5) !important;
                }

                .swiper-pagination-bullet-active::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 0%;
                    background-color: #f59e0b;
                    border-radius: 4px;
                    animation: progress-fill 5000ms linear forwards;
                }
            `}</style>
        </section>
    );
}
