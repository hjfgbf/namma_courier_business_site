'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const cards = [
    {
        id: 'd2c',
        category: 'For D2C Brands',
        description: 'Take your brand from local to national with automated shipping.',
        features: ['AI-Based Courier Selection', 'Custom Branded Tracking'],
        tags: ['Easy API', 'Return Management', 'Same-Day Delivery', 'Pan-India Reach'],
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/D2CBrand_img.webp',
        isHero: true,
    },
    {
        id: 'social',
        category: 'For Social Sellers',
        description: 'Focus on your content, let us handle the doorstep deliveries.',
        features: ['WhatsApp Order Updates', 'Easy COD Management'],
        tags: ['No Min. Order', 'Quick Pickup', 'Instagram Ready'],
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/D2CBrand_img.webp',
    },
    {
        id: 'enterprise',
        category: 'For Large Retailers',
        description: 'Robust logistics to support your high-volume operations.',
        features: ['Unified Shipping Dashboard', 'Bulk Order Processing'],
        tags: ['Multi-location Pickup', 'Dedicated Support', 'Postpaid Options'],
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/D2CBrand_img.webp',
    },
    {
        id: 'resellers',
        category: 'For Online Resellers',
        description: 'Simple, budget-friendly shipping to maximize your profits.',
        features: ['Lowest Shipping Rates', 'Instant NDR Resolution'],
        tags: ['Flat Rates', 'Early COD Payout', 'Simple Label Print'],
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/D2CBrand_img.webp',
    },
    {
        id: 'offline',
        category: 'For Local Shops',
        description: 'Move your local shop online and start delivering across India.',
        features: ['User-Friendly App', 'Hand-held Onboarding'],
        tags: ['Store-to-Door', 'Inventory Sync', 'Local Support'],
        image: 'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/D2CBrand_img.webp',
    },
];

export default function BusinessScaleSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'start' },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
    );
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    React.useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <section className="w-full py-10 md:pt-20 md:pb-12 bg-[#f8fafc] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-3 md:px-8">

                <div className="text-start md:text-center mb-6 md:mb-12">
                    <h2 className="text-[28px] md:text-[38px] font-bold leading-tight md:leading-normal pl-3 md:pl-0">
                        <span className="text-[#1e3a8a]">Your Trusted Messenger, </span>
                        <span className="text-[#f59e0b]">For Every Scale</span>
                    </h2>
                </div>

                {/* Mobile view*/}
                <div className="block md:hidden">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {cards.map((card) => (
                                <div key={card.id} className="flex-[0_0_90%] min-w-0 pl-3 pr-3">
                                    <div className="bg-gradient-to-br from-[#e8f0fe] to-[#f0f4ff] rounded-[12px] p-6 min-h-[500px] flex flex-col relative overflow-hidden group hover:bg-[#1e3a8a] transition-all duration-500">
                                        <div className="z-10 relative flex-1 flex flex-col">
                                            <h3 className="text-[22px] font-bold mb-2 text-[#1e3a8a] group-hover:text-white transition-colors">
                                                <span className="text-[#1e3a8a] group-hover:text-white">For </span>
                                                <span className="text-[#f59e0b] group-hover:text-white">{card.category.split('For ')[1]}</span>
                                            </h3>
                                            <p className="text-[15px] text-[#1e3a8a] group-hover:text-white mb-4 leading-snug transition-colors">
                                                {card.description}
                                            </p>

                                            <div className="space-y-1.5 mb-4">
                                                {card.features.map((f, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-[14px] font-medium text-[#1e3a8a] group-hover:text-white transition-colors">
                                                        <CheckCircle className="w-4 h-4 text-[#1e3a8a] group-hover:text-yellow-200 transition-colors" />
                                                        {f}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {card.tags.map((t, i) => (
                                                    <span key={i} className="px-3 py-1 bg-blue-200/80 text-black rounded-full text-[11px] group-hover:bg-blue-100 transition-all">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            {card.isHero && (
                                                <button className="w-fit mt-1 bg-[#f59e0b] text-white px-4.5 py-2 rounded-full text-[14px] font-semibold mb-4">
                                                    Explore More
                                                </button>
                                            )}
                                        </div>

                                        {/*Image*/}
                                        <div className="relative w-full mx-6 -mb-6">
                                            <Image
                                                src={card.image}
                                                alt={card.category}
                                                width={600}
                                                height={600}
                                                className="w-full h-full object-contain object-bottom"
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/*Pagination*/}
                    <div className="flex justify-center gap-4 mt-8">
                        {cards.map((_, index) => (
                            <button
                                key={index}
                                className={`h-2 rounded-full transition-all duration-300 ${index === selectedIndex
                                    ? 'w-8 bg-[#f59e0b]'
                                    : 'w-2 bg-gray-300'
                                    }`}
                                onClick={() => emblaApi?.scrollTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop view */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* HERO CARD*/}
                    <div className="col-span-1 md:col-span-2 group relative bg-gradient-to-br from-[#e8f0fe] to-[#f0f4ff] rounded-[12px] border border-gray-100 overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:bg-[#1e3a8a] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0">
                        <div className="flex flex-col md:flex-row items-stretch min-h-[450px]">
                            <div className="w-full md:w-[480px] py-24 pl-20 pr-0 z-10 flex flex-col justify-center">
                                <h3 className="text-[27px] tracking-tight font-bold mb-[12px] text-[#1e3a8a] group-hover:text-white transition-colors duration-300">
                                    For <span className="text-[#f59e0b] group-hover:text-white transition-colors">D2C Brands</span>
                                </h3>
                                <p className="text-[#1e3a8a] font-medium text-[18px] mb-4 group-hover:text-white transition-colors tracking-tight leading-snug">
                                    {cards[0].description}
                                </p>
                                <div className="space-y-1 mb-5">
                                    {cards[0].features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-2 font-medium text-[#1e3a8a] group-hover:text-white">
                                            <CheckCircle className="w-4 h-4 text-[#1e3a8a] group-hover:text-yellow-200 transition-colors" />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-3.5 mb-8">
                                    {cards[0].tags.map((t, i) => (
                                        <span key={i} className="px-5 py-1.5 rounded-full text-[12px] font-normal bg-blue-200/80 group-hover:bg-blue-100 text-black transition-all">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <button className="w-fit bg-[#f59e0b] text-white hover:bg-white hover:text-[#1e3a8a] text-base tracking-wide font-semibold px-6 py-2 rounded-full transition-transform cursor-pointer">
                                    Explore More
                                </button>
                            </div>

                            <div className="ml-5 w-full md:w-2/3 relative h-auto overflow-hidden">
                                <div className="absolute inset-0 transition-transform duration-700 ease-out">
                                    <Image
                                        src={cards[0].image}
                                        alt="D2C Platform"
                                        fill
                                        className="object-contain object-bottom md:object-right-bottom"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SUB-CARDS */}
                    {cards.slice(1).map((card) => (
                        <div
                            key={card.id}
                            className="group relative bg-gradient-to-br from-[#e8f0fe] to-[#f0f4ff] rounded-[12px] border border-gray-100 flex flex-col overflow-hidden transition-all duration-500 h-[540px] before:absolute before:inset-0 before:bg-[#1e3a8a] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0"
                        >
                            <div className="py-7 px-6 z-10">
                                <h3 className="text-[27px] tracking-tight font-bold mb-[12px] text-[#1e3a8a] group-hover:text-white transition-colors">
                                    For <span className="text-[#f59e0b] group-hover:text-white transition-colors">{card.category.split('For ')[1]}</span>
                                </h3>
                                <p className="text-[#1e3a8a] font-medium text-[18px] mb-4 group-hover:text-white transition-colors tracking-tight leading-snug">
                                    {card.description}
                                </p>
                                <div className="space-y-0.5 mb-5">
                                    {cards[0].features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-2 font-medium text-[#1e3a8a] group-hover:text-white">
                                            <CheckCircle className="w-4 h-4 text-[#1e3a8a] group-hover:text-yellow-200 transition-colors" />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-3.5">
                                    {card.tags.map((t, i) => (
                                        <span key={i} className="px-5 py-1.5 rounded-full text-[12px] font-normal bg-blue-200/80 group-hover:bg-blue-100 text-black transition-all">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-[280px] px-6 pointer-events-none">
                                <div className="relative w-full h-full transform scale-100 transition-all duration-500 ease-out">
                                    <Image
                                        src={card.image}
                                        alt={card.category}
                                        fill
                                        className="object-contain object-bottom md:object-right-bottom"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}