"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaChevronDown, FaBullhorn } from "react-icons/fa";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Scroll lock when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Top Announcement Bar */}
            <div className="hidden md:flex w-full font-sans bg-gradient-to-br from-[#e8eef7] via-[#f5f7fa] to-[#fef3e8] px-4 py-2 text-[13px] md:text-sm text-[#1f2937] flex justify-center items-center">
                <div className="flex items-center flex-wrap justify-center gap-2 text-center">
                    <div className="bg-[#ff4d4f] rounded-full p-1 text-white flex items-center justify-center">
                        <FaBullhorn size={12} />
                    </div>
                    <span className="font-bold text-[#1f2937]">NEW YEAR OFFER: ₹1750</span>
                    <span className="text-[#1f2937]">Shipping Credits on 1st Recharge of ₹1000 | Code: NY750 | *T&C Apply.</span>
                    <Link href="#" className="bg-white text-[#1e3a8a] px-3 py-1 rounded-full text-xs font-bold shadow-sm hover:bg-gray-50 transition-colors ml-2">
                        See More Offers
                    </Link>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="w-full font-sans bg-white sticky top-0 z-50 h-[60px] md:h-[70px] flex items-center">
                <div className="max-w-[1400px] w-full mx-auto px-4 md:px-6 lg:px-8 h-full">
                    <div className="flex items-center justify-between h-full">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/">
                                <img
                                    src="/image.png"
                                    alt="NimbusPost"
                                    className="h-14 md:h-16 w-auto"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden xl:flex items-center pl-4 gap-5 text-[16px] font-medium text-[#1e3a8a] h-full">
                            {/* Solutions Dropdown */}
                            <div className="relative group h-full flex items-center cursor-pointer">
                                <span className="flex items-center gap-2 hover:text-[#f59e0b] transition-colors">
                                    Solutions <FaChevronDown size={12} className="text-[#1e3a8a] group-hover:text-[#f59e0b]" />
                                </span>
                                <div className="absolute text-[14px] top-full left-0 w-64 bg-white shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 mt-[5px] before:absolute before:left-0 before:-top-[5px] before:w-full before:h-[5px] before:content-['']">
                                    <div className="py-2">
                                        <div className="relative group/sub px-4 py-2 flex items-center justify-between cursor-pointer">
                                            <span className="text-gray-700">B2C Shipping</span>
                                            <FaChevronDown size={10} className="-rotate-90 text-gray-400" />
                                            {/* Sub Dropdown */}
                                            <div className="absolute top-0 left-full w-56 bg-white shadow-lg rounded-sm opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 ml-1">
                                                <div className="py-2">
                                                    <Link href="#" className="block px-4 py-2 text-gray-600 hover:text-[#f59e0b]">Domestic Shipping</Link>
                                                    <Link href="#" className="block px-4 py-2 text-gray-600 hover:text-[#f59e0b]">Same-Day Delivery</Link>
                                                    <Link href="#" className="block px-4 py-2 text-gray-600 hover:text-[#f59e0b]">Next-Day Delivery</Link>
                                                    <Link href="#" className="block px-4 py-2 text-gray-600 hover:text-[#f59e0b]">RTO Suite</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="#" className="block px-4 py-2 text-gray-600 hover:text-[#f59e0b]">B2B Shipping</Link>
                                        <Link href="#" className="block px-4 py-2 text-gray-600 hover:text-[#f59e0b]">Warehousing & Fulfillment</Link>
                                    </div>
                                </div>
                            </div>

                            {/* Features Dropdown */}
                            <div className="relative group h-full flex items-center cursor-pointer">
                                <span className="flex items-center gap-2 hover:text-[#f59e0b] transition-colors">
                                    Features <FaChevronDown size={12} className="text-[#1e3a8a] group-hover:text-[#f59e0b]" />
                                </span>
                                <div className="absolute text-[14px] top-full left-0 w-56 bg-white shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 mt-[5px] before:absolute before:left-0 before:-top-[5px] before:w-full before:h-[5px] before:content-['']">
                                    <div className="py-2">
                                        <Link href="/features/trackingPage" className="block px-4 py-2 text-gray-600 hover:text-[#f59e0b]">Branded Tracking Page</Link>
                                        <Link href="/features/allFeatures" className="block px-4 py-2 text-gray-600 hover:text-[#f59e0b]">All Features</Link>
                                    </div>
                                </div>
                            </div>

                            {/* Partners Dropdown */}
                            <div className="relative group h-full flex items-center cursor-pointer">
                                <span className="flex items-center gap-2 hover:text-[#f59e0b] transition-colors">
                                    Partners <FaChevronDown size={12} className="text-[#1e3a8a] group-hover:text-[#f59e0b]" />
                                </span>
                                <div className="absolute text-[14px] top-full left-0 w-56 bg-white shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 mt-[5px] before:absolute before:left-0 before:-top-[5px] before:w-full before:h-[5px] before:content-['']">
                                    <div className="py-2">
                                        <Link href="/partners/channelPartners" className="block px-4 py-2 text-gray-600 hover:text-[#f59e0b]">Channel Partners</Link>
                                        <Link href="/partners/courierPartners" className="block px-4 py-2 text-gray-600 hover:text-[#f59e0b]">Courier Partners</Link>
                                    </div>
                                </div>
                            </div>

                            {/* Resources Dropdown */}
                            <div className="relative group h-full flex items-center cursor-pointer">
                                <span className="flex items-center gap-2 hover:text-[#f59e0b] transition-colors">
                                    Resources <FaChevronDown size={12} className="text-[#1e3a8a] group-hover:text-[#f59e0b]" />
                                </span>
                                <div className="absolute text-[14px] top-full left-0 w-56 bg-white shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 mt-[5px] before:absolute before:left-0 before:-top-[5px] before:w-full before:h-[5px] before:content-['']">
                                    <div className="py-2">
                                        <Link href="#" className="block px-4 py-2 text-gray-600 hover:text-[#f59e0b]">Blog</Link>
                                        <Link href="#" className="block px-4 py-2 text-gray-600 hover:text-[#f59e0b] flex items-center justify-between">
                                            Festive Playbook
                                            <span className="bg-[#fce7f3] text-[#be185d] text-[9px] font-bold px-1.5 py-0.5 rounded-[2px] ml-2">New</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Pricing Dropdown */}
                            <div className="relative group h-full flex items-center cursor-pointer">
                                <span className="flex items-center gap-1 hover:text-[#f59e0b] transition-colors">
                                    Pricing <FaChevronDown size={12} className="text-[#1e3a8a] group-hover:text-[#f59e0b]" />
                                </span>
                                <div className="absolute text-[14px] top-full left-0 w-60 bg-white shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 mt-[5px] before:absolute before:left-0 before:-top-[5px] before:w-full before:h-[5px] before:content-['']">
                                    <div className="py-2">
                                        <Link href="/pricing/pricingPlans" className="block px-4 py-2 text-gray-600 hover:text-[#f59e0b]">Pricing Plans</Link>
                                        <Link href="/pricing/shippingRate" className="block px-4 py-2 text-gray-600 hover:text-[#f59e0b]">Shipping Rate Calculator</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group h-full flex items-center cursor-pointer">
                                <Link href="/checkout" className="hover:text-[#f59e0b] transition-colors relative flex items-center">
                                    Checkout
                                    {/*
                                        <span className="absolute -top-1 -right-8 bg-[#fce7f3] text-[#be185d] text-[10px] font-bold px-1.5 py-0.5 rounded-sm">NEW</span>
                                    */}
                                </Link>
                            </div>

                            <Link href="/orders" className="hover:text-[#f59e0b] transition-colors">
                                Track Order
                            </Link>
                        </div>

                        {/* Auth Buttons */}
                        <div className="hidden xl:flex items-center gap-4">
                            <Link href="#" className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors">
                                Login
                            </Link>
                            <Link href="#" className="px-6 py-2 rounded-full bg-[#f59e0b] text-white font-bold hover:bg-[#1e3a8a] transition-colors shadow-sm">
                                Sign Up
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="xl:hidden flex items-center">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-[#1e3a8a] p-2"
                            >
                                {isMobileMenuOpen ? <X size={24} strokeWidth="3" /> : <Menu size={24} strokeWidth="3" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="xl:hidden bg-white absolute -mt-1 top-[60px] left-0 w-full shadow-lg min-h-screen overflow-y-auto z-50">
                        <div className="flex flex-col pt-4 px-5 space-y-4">
                            <Link href="#" className="text-gray-900 font-semibold text-[16px]">Solutions</Link>
                            <Link href="#" className="text-gray-900 font-semibold text-[16px]">Partners</Link>
                            <Link href="#" className="text-gray-900 font-semibold text-[16px]">Resources</Link>
                            <Link href="#" className="text-gray-900 font-semibold text-[16px]">Pricing</Link>
                            <Link href="/checkout" className="text-gray-900 font-semibold text-[16px]">Checkout</Link>
                            <Link href="#" className="text-gray-900 font-semibold text-[16px]">Track Order</Link>
                            <div className="pt-4 flex flex-row gap-3">
                                <Link href="#" className="w-full text-center text-[15px] md:text-[16px] py-1.5 md:py-3 bg-[#F1F2F4] rounded-full text-[#1e3a8a] font-semibold">Login</Link>
                                <Link href="#" className="w-full text-center text-[15px] md:text-[16px] py-1.5 md:py-3 bg-[#f59e0b] text-white rounded-full font-semibold">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav >
        </>
    );
}
