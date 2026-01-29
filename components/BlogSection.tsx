"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const blogPosts = [
    {
        image: "/blog-1.png",
        category: "Ecommerce, Global Shipping",
        date: "December 5, 2025",
        title: "Most Profitable Products to Export from India in 2025",
        excerpt: "As the 19th largest exporter globally, India has made incredible strides in the global market...",
    },
    {
        image: "/blog-2.png",
        category: "Domestic Shipping, E-commerce Delivery",
        date: "December 1, 2025",
        title: "Ready for India's Next Festive Wave? Master eCommerce Shipping to Win Big",
        excerpt: "India experienced a spectacular festive season this Diwali, with total sales reaching a record ₹6.05...",
    },
    {
        image: "/blog-3.png",
        category: "Domestic Shipping, E-commerce Delivery",
        date: "November 7, 2025",
        title: "What is the Difference Between \"Your Order has been Shipped\" and \"Out for Delivery\"",
        excerpt: "Picture this: you've just treated yourself to an online purchase, and you're eagerly awaiting its...",
    },
];

export default function BlogSection() {
    return (
        <section className="pt-12 pb-4 md:pt-12 md:pb-12 bg-white font-sans">
            <div className="max-w-[1400px] mx-auto px-6 md:px-6 lg:px-8">
                <div className="text-center mb-9 md:mb-12">
                    <h2 className="text-[28px] md:text-[38px] font-bold text-[#1e3a8a] leading-tight md:leading-normal">
                        Read the Latest in <span className="text-[#f59e0b]">eCommerce Logistics</span>
                    </h2>
                    <p className="mt-4 md:mt-0 text-[#1e3a8a] font-semibold text-[16px] md:text-[18px]">
                        Explore our blog for game-changing ideas, insights, tips, and trends
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-5">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="flex flex-col group cursor-pointer">
                            <div className="relative h-[160px] w-full rounded-[10px] overflow-hidden mb-[18px]">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-300"
                                />
                            </div>

                            <div className="flex flex-col flex-grow">
                                <div className="text-[13.5px] text-[#1e3a8a] mb-[6px] md:mb-2 font-normal leading-normal">
                                    <span>{post.category}</span>
                                    <span className="mx-2 text-[#1e3a8a]">|</span>
                                    <span>{post.date}</span>
                                </div>

                                <h3 className="text-[17px] font-semibold text-[#1e3a8a] leading-tight mb-[8px] md:mb-[6px] group-hover:text-[#1e3a8a] transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-[#1e3a8a] text-[13px] leading-snug mb-[10px] md:mb-4 font-normal">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto">
                                    <Link href="#" className="inline-flex items-center text-[#1e3a8a] hover:text-[#f59e0b] font-semibold text-[16px] gap-1">
                                        Read More <FaArrowRight size={14} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
