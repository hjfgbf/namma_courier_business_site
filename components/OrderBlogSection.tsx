"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const blogPosts = [
    {
        image: "/order1.png",
        category: "Courier Partner, Domestic Shipping",
        date: "January 23, 2026",
        title: "Calculate DTDC Courier Charges for eCommerce Shipping",
        excerpt: "Whether you own a business or not, sending parcels from one city or location to another is always challenging. This is because […]",
    },
    {
        image: "/order2.png",
        category: "Courier Partner, Domestic Shipping",
        date: "January 12, 2026",
        title: "Delhivery vs DTDC Express – Which is the Better Courier for eCommerce?",
        excerpt: "The eCommerce industry in India is growing exponentially. Every year we see many retailers taking their businesses online to cater to a […]",
    },
    {
        image: "/order3.png",
        category: "Courier Partner, Domestic Shipping",
        date: "January 12, 2026",
        title: "Delhivery vs XpressBees: Which is the Better Courier Option?",
        excerpt: "Nowadays, Indian buyers shop online because of the speedy product delivery and convenience to their doorsteps. However, most customers are becoming increasingly […]",
    },
];

export default function OrderBlogSection() {
    return (
        <section className="pt-12 pb-8 md:pt-16 md:pb-12 bg-white font-sans">
            <div className="max-w-[1400px] mx-auto px-6 md:px-6 lg:px-8">
                <div className="text-center mb-9 md:mb-12">
                    <h2 className="text-[28px] md:text-[38px] font-bold text-[#1e3a8a] leading-tight md:leading-normal">
                        <span className="text-[#f59e0b]">Mastering Logistics: </span>Expert Insights
                    </h2>
                    <p className="mt-4 md:mt-0 text-[#1e3a8a] font-semibold text-[16px] md:text-[18px]">
                        In-depth guides and industry secrets to help you navigate the world of shipping.
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
                                    <Link href="#" className="inline-flex items-center transition-colors duration-300 hover:text-[#f59e0b] text-[#1e3a8a] font-semibold text-[16px] gap-1">
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
