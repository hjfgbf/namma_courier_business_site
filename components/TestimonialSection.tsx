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
            text: 'What sets உங்கள் Thoothuvan apart is their commitment to being a "messenger" first. They treat every parcel like it’s their own. The transition was smooth, and their support is always just a call away.',
            name: 'Arun Kumar',
            company: 'K9 Vitality'
        },
        {
            logo: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-5531.png.webp',
            text: 'We needed a logistics partner that understands the speed of modern eCommerce. உங்கள் Thoothuvan delivered exactly that. Their platform is intuitive, and the automated tracking has saved us hours of manual work.',
            name: 'Karthik Raja',
            company: 'Alpino Foods Pvt. Ltd.'
        },
        {
            logo: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-5541.png.webp',
            text: 'Finally, a shipping partner that doesn’t hide behind a ticketing system. With உங்கள் Thoothuvan, we have a real partner helping us reduce RTOs and scale our reach across every pin code.',
            name: 'Senthil Nathan',
            company: 'Sparkup.in'
        },
        {
            logo: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-5551.png.webp',
            text: 'The delivery speed is impressive, but it’s the transparency that won us over. No hidden fees or weight surprises. உங்கள் Thoothuvan has made our shipping process completely stress-free.',
            name: 'Priyanka M.',
            company: 'Clapjoy'
        },
        {
            logo: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-5561.png.webp',
            text: 'Choosing உங்கள் Thoothuvan was the best decision for our expansion. Their smart routing ensures our products reach customers via the fastest possible path, keeping our ratings high.',
            name: 'Vijay Ram',
            company: 'Candor Foods'
        },
        {
            logo: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/gudgum.png.webp',
            text: 'Efficient, reliable, and incredibly supportive. As a growing brand, we needed someone who grows with us. உங்கள் Thoothuvan provides the premium service we were looking for at great rates.',
            name: 'M. Selvam',
            company: 'GudGum'
        },
        {
            logo: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/peach.png.webp',
            text: 'The level of care shown by the உங்கள் Thoothuvan team is unmatched. From pickup to delivery, the communication is proactive, ensuring both we and our customers are always in the loop.',
            name: 'Bharat Govindan',
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
                    <h2 className="text-[28px] md:text-[38px] font-bold mb-3 leading-tight">
                        Built for Your Growth, Backed by Commitment
                    </h2>
                    <p className="text-[15.5px] md:text-[17px] font-semibold tracking-wide leading-snug">
                        We are on a mission to redefine logistics in Tamil Nadu. <br className="hidden md:block" />
                        See the standards we promise to every partner.
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
