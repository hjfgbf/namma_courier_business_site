'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const baseLogosRow1 = [
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Ekart-1.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-167-1.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-3371.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-166.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-337.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-165.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Professional.png.webp',
];

const baseLogosRow2 = [
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-3361.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Elastic-Run.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-339.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-168.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Delhivery-1.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Ekart-1.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-3371.png.webp',
];

const logosRow1 = Array(6).fill(baseLogosRow1).flat();
const logosRow2 = Array(6).fill(baseLogosRow2).flat().reverse();

export default function CourierPartnersSection() {
    return (
        <section className="w-full pt-10 pb-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-[#e8eef7] via-[#f5f7fa] to-[#fef3e8]">
            <div className="max-w-[1400px] mx-auto px-4 text-center mb-11 relative z-10">
                <h2 className="text-[28px] md:text-[38px] font-bold leading-tight md:mb-2">
                    <span className="text-[#f59e0b]">உங்கள் Thoothuvan Connects You</span> <br className="hidden md:block" />
                    <span className="text-[#1e3a8a]">To India’s Top 25+ Couriers</span>
                </h2>
            </div>

            {/* Swiper Row 1 */}
            <div className="w-full mb-7 md:mb-8 relative z-10">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={14}
                    slidesPerView={3}
                    loop={true}
                    speed={12000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    allowTouchMove={false}
                    breakpoints={{
                        640: { slidesPerView: 3, spaceBetween: 20 },
                        768: { slidesPerView: 5, spaceBetween: 40 },
                        1024: { slidesPerView: 7, spaceBetween: 40 },
                    }}
                    className="w-full linear-swiper px-4"
                >
                    {logosRow1.map((url, index) => (
                        <SwiperSlide key={index} className="!w-auto flex justify-center">
                            <div className="bg-white rounded-[6px] border-none shadow-none p-0 w-[160px] h-[50px] md:h-[60px] flex items-center justify-center">
                                <Image
                                    src={url}
                                    alt="Courier Partner"
                                    width={150}
                                    height={60}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Swiper Row 2 */}
            <div className="w-full mb-12 md:mb-16 relative z-10">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={14}
                    slidesPerView={3}
                    loop={true}
                    speed={12000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                        reverseDirection: true,
                    }}
                    allowTouchMove={false}
                    breakpoints={{
                        640: { slidesPerView: 3, spaceBetween: 20 },
                        768: { slidesPerView: 5, spaceBetween: 40 },
                        1024: { slidesPerView: 7, spaceBetween: 40 },
                    }}
                    className="w-full linear-swiper px-4"
                >
                    {logosRow2.map((url, index) => (
                        <SwiperSlide key={index} className="!w-auto flex justify-center">
                            <div className="bg-white rounded-[6px] border-none shadow-none p-0 w-[160px] h-[50px] md:h-[60px] flex items-center justify-center">
                                <Image
                                    src={url}
                                    alt="Courier Partner"
                                    width={150}
                                    height={60}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="text-center relative z-10">
                <a
                    href="/"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#f59e0b] text-white text-[14px] md:text-base font-bold px-6 py-2 rounded-full hover:bg-[#1e3a8a] transition-colors shadow-sm"
                >
                    Know More
                </a>
            </div>

            <style jsx global>{`
                .linear-swiper .swiper-wrapper {
                    transition-timing-function: linear !important;
                    -webkit-transition-timing-function: linear !important;
                }
             `}</style>
        </section>
    );
}
