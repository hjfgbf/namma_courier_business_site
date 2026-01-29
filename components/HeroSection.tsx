'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const slides = [
    {
        title: (
            <>
                <span className="text-[#1e3a8a]">உங்கள் Thoothuvan <br /> </span>
                <span className="text-[#f59e0b]">The New Era of Delivery</span>
            </>
        ),
        description: "Your local partner for global growth. We bring reliability, speed, and a personal touch to every shipment.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Hero-banner-ing-1-1-1024x836-1.webp",
        badge: (
            <>
                <span className="text-[#1e3a8a]">Trustworthy </span>
                <span className="text-[#f59e0b]">Logistics Partner</span>
            </>
        ),
        buttonText: "Join Us Today",
        link: "/"
    },
    {
        title: (
            <>
                <span className="text-[#1e3a8a]">Seamless B2C Shipping </span>
                <span className="text-[#f59e0b]">From Your Door to Theirs</span>
            </>
        ),
        description: "Deliver to every corner of India. Affordable rates and real-time tracking that keeps your customers happy.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/02.webp",
        badge: (
            <>
                <span className="text-[#1e3a8a]">Pan-India </span>
                <span className="text-[#f59e0b]">Doorstep Delivery</span>
            </>
        ),
        buttonText: "Start Shipping",
        link: "/"
    },
    {
        title: (
            <>
                <span className="text-[#1e3a8a]">Smart B2B Logistics </span>
                <span className="text-[#f59e0b]">Heavy Cargo, Light Prices</span>
            </>
        ),
        description: "Moving bulk? We handle your heavy cargo with the care it deserves and the efficiency your business needs.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/03.webp",
        badge: (
            <>
                <span className="text-[#1e3a8a]">Optimized </span>
                <span className="text-[#f59e0b]">Bulk Freight</span>
            </>
        ),
        buttonText: "Get a Quote",
        link: "#"
    },
    {
        title: (
            <>
                <span className="text-[#1e3a8a]">Fulfillment Centers </span>
                <span className="text-[#f59e0b]">Built to Scale You</span>
            </>
        ),
        description: "We don't just store, we manage. Focus on your product while your Thoothuvan handles the rest.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/04.webp",
        badge: (
            <>
                <span className="text-[#1e3a8a]">Expert </span>
                <span className="text-[#f59e0b]">Warehousing</span>
            </>
        ),
        buttonText: "Learn More",
        link: "/"
    },
    {
        title: (
            <>
                <span className="text-[#1e3a8a]">Beyond Just Shipping </span>
                <span className="text-[#f59e0b]">Smart Business Tools</span>
            </>
        ),
        description: "Unlock advanced tracking, NDR management, and analytics tailored for the modern Indian entrepreneur.",
        image: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/05.webp",
        badge: (
            <>
                <span className="text-[#1e3a8a]">Grow with </span>
                <span className="text-[#f59e0b]">Thoothuvan</span>
            </>
        ),
        buttonText: "Explore Features",
        link: "/"
    }
];

export default function HeroSection() {
    return (
        <section className="w-full bg-gradient-to-br from-[#e8eef7] via-[#f5f7fa] to-[#fef3e8] relative group">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                    bulletClass: 'custom-bullet',
                    bulletActiveClass: 'custom-bullet-active',
                    renderBullet: function (index, className) {
                        return `<span class="${className}"></span>`;
                    },
                }}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="max-w-[1400px] mx-auto h-full flex flex-col md:flex-row items-stretch pt-10 md:pt-20 pb-0 px-4 md:px-8">
                            <div className="w-full md:max-w-[650px] flex flex-col justify-center text-left z-10 mb-14 md:mb-40">
                                <h1 className="text-[32px] md:text-[50px] font-bold leading-[1.15] mb-6 text-center md:text-start">
                                    {slide.title}
                                </h1>
                                <p className="text-[#1e3a8a] text-[16px] text-center md:text-start md:text-[18px] font-medium leading-snug mb-6 max-w-[550px]">
                                    {slide.description}
                                </p>

                                {slide.badge && (
                                    <div className="bg-white rounded-[8px] px-6 py-2 inline-block w-fit mb-6 md:mb-8 mx-auto md:mx-0">
                                        <h4 className="text-[17px] md:text-[19px] font-medium">
                                            {slide.badge}
                                        </h4>
                                    </div>
                                )}

                                <div className='mx-auto md:mx-0'>
                                    <a
                                        href={slide.link}
                                        className="inline-block bg-[#f59e0b] hover:bg-[#1e3a8a] text-white text-[14px] md:text-[16px] font-bold px-6 py-2 rounded-full transition-colors shadow-sm"
                                    >
                                        {slide.buttonText}
                                    </a>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
                                <div className="relative w-full max-w-[600px]">
                                    <Image
                                        src={slide.image}
                                        alt="Hero Slide"
                                        width={600}
                                        height={600}
                                        className="w-full h-full object-contain object-bottom md:object-right-bottom"
                                        priority={index === 0}
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex absolute bottom-6 md:bottom-10 z-20 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:pl-8 gap-[10px]">
                <button className="custom-prev flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors text-[#1e3a8a] cursor-pointer">
                    <ArrowLeft size={18} />
                </button>
                <div className="custom-pagination flex items-center gap-2"></div>
                <button className="custom-next flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors text-[#1e3a8a] cursor-pointer">
                    <ArrowRight size={18} />
                </button>
            </div>

            <style jsx global>{`
                .custom-pagination .custom-bullet {
                    width: 40px;
                    height: 4px;
                    background: #d1d5db;
                    border-radius: 2px;
                    display: inline-block;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s;
                }
                .custom-pagination .custom-bullet-active {
                   background: #d1d5db;
                   width: 50px;
                }
                .custom-pagination .custom-bullet-active::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 0;
                    background: #f59e0b;
                    border-radius: 2px;
                    animation: progress 5s linear forwards;
                }
                @keyframes progress {
                    from { width: 0; }
                    to { width: 100%; }
                }
            `}</style>
        </section>
    );
}
