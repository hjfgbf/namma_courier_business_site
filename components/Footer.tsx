import Link from 'next/link';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="w-full max-w-[95%] mx-auto my-6 rounded-[20px] overflow-hidden bg-gradient-to-br from-[#0f2557] via-[#1e3a8a] to-[#2563eb] text-white font-sans">
            <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-10 pb-7 md:pt-12 md:pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 md:mb-12">

                    {/* Column 1: Brand, Contact & Socials */}
                    <div className="flex lg:justify-center">
                        <div className="space-y-8">
                            <div className="space-y-8">
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/image.png"
                                        alt="உங்கள் Thoothuvan"
                                        className="h-14 md:h-16 w-auto object-contain"
                                    />
                                </div>

                                <div>
                                    {/* <h3 className="text-[21px] md:text-[22px] font-bold mb-4">Follow Us</h3> */}
                                    <div className="flex gap-5">
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                            <FaFacebook size={22} />
                                        </a>
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                            <FaTwitter size={22} />
                                        </a>
                                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                            <FaYoutube size={22} />
                                        </a>
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                            <FaInstagram size={22} />
                                        </a>
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                            <FaLinkedin size={22} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* 
                            <p className="text-[14.5px] md:text-[16px] text-white leading-[1.5] pr-0 md:pr-4">
                                உங்கள் Thoothuvan is a dedicated logistics partner empowering India's emerging online brands. We provide simplified, tech-driven shipping and fulfillment solutions designed to help your business reach new heights with reliability and personal care.
                            </p> 
                            */}

                            <div className="space-y-4">
                                <h3 className="text-[21px] md:text-[22px] font-bold">Contact Us</h3>
                                <div className="flex gap-3 items-center">
                                    <div className="flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <MdLocationOn size={28} className="text-[#f59e0b]" />
                                    </div>
                                    <a
                                        href="https://maps.google.com/?q=Thoothukudi,Tamil Nadu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[15px] text-white hover:text-[#f59e0b] transition-colors leading-relaxed"
                                    >
                                        Chennai, Tamil Nadu, India
                                    </a>
                                </div>

                                <div className="flex gap-3 items-center">
                                    <div className="flex items-center justify-center flex-shrink-0">
                                        <MdEmail size={28} className="text-[#f59e0b]" />
                                    </div>
                                    <a
                                        href="mailto:care@ungalthoothuvan.com"
                                        className="text-[16px] text-white hover:text-[#f59e0b] transition-colors"
                                    >
                                        care@ungalthoothuvan.com
                                    </a>
                                </div>

                                <div className="flex gap-3 items-center">
                                    <div className="flex items-center justify-center flex-shrink-0">
                                        <MdPhone size={28} className="text-[#f59e0b]" />
                                    </div>
                                    <a
                                        href="tel:+919876543210"
                                        className="text-[16px] text-white hover:text-[#f59e0b] transition-colors"
                                    >
                                        +91 98765 43210
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-[21px] md:text-[22px] font-bold mb-4">Download App</h3>
                                <div className="flex gap-3 flex-wrap">
                                    <a
                                        href="https://play.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 bg-white text-gray-900 px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors w-[120px]"
                                    >
                                        <FaGooglePlay size={20} className="text-[#ea4335]" />
                                        <div className="text-left">
                                            <div className="text-[9px] font-medium text-gray-600 leading-tight">Get it on</div>
                                            <div className="text-[12px] font-bold leading-tight">Google Play</div>
                                        </div>
                                    </a>
                                    <a
                                        href="https://apps.apple.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 bg-white text-gray-900 px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors w-[120px]"
                                    >
                                        <FaApple size={24} className="text-black" />
                                        <div className="text-left">
                                            <div className="text-[9px] font-medium text-gray-600 leading-tight">Available on the</div>
                                            <div className="text-[13px] font-bold leading-tight">App Store</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start md:justify-center border-t border-white/50 md:border-none pt-6 md:pt-0  mt-0">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-[21px] md:text-[22px] font-semibold mb-3">Solutions</h3>
                                <ul className="space-y-[14px]">
                                    <li><Link href="#" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">B2C Shipping</Link></li>
                                    <li><Link href="#" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">B2B Shipping</Link></li>
                                    <li><Link href="#" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">Warehouse & Fulfillment</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[21px] md:text-[22px] font-bold mb-3">Features</h3>
                                <ul className="space-y-[14px]">
                                    <li><Link href="/features/trackingPage" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">Branded Tracking Page</Link></li>
                                    <li><Link href="/features/allFeatures" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">All Features</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[21px] md:text-[22px] font-bold mb-3">Partners</h3>
                                <ul className="space-y-[14px]">
                                    <li><Link href="/partners/channelPartners" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">Channel Partners</Link></li>
                                    <li><Link href="/partners/courierPartners" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">Courier Partners</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start md:justify-center mt-0">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-[21px] md:text-[22px] font-bold mb-3">Pricing</h3>
                                <ul className="space-y-[14px]">
                                    <li><Link href="/pricing/pricingPlans" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">Pricing Plans</Link></li>
                                    <li><Link href="/pricing/shippingRate" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">Shipping Rate Calculator</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[21px] md:text-[22px] font-bold mb-3">Quick links</h3>
                                <ul className="space-y-[14px]">
                                    <li><Link href="#" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">About Us</Link></li>
                                    <li><Link href="#" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">Blogs</Link></li>
                                    <li><Link href="/checkout" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">Checkout</Link></li>
                                    <li><Link href="/orders" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">Track Order</Link></li>
                                    <li><Link href="#" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">Contact Us</Link></li>
                                    <li><Link href="/policies/terms-and-conditions" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">Terms and Conditions</Link></li>
                                    <li><Link href="/policies/privacy-policy" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">Privacy Policy</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/50 pt-5 md:pt-6 flex flex-col-reverse md:flex-row justify-center items-center gap-4">
                    <p className="text-[14px] text-white">
                        © 2026 உங்கள் Thoothuvan. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
