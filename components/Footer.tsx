import Link from 'next/link';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="w-full max-w-[95%] mx-auto my-6 rounded-[20px] overflow-hidden bg-gradient-to-br from-[#0f2557] via-[#1e3a8a] to-[#2563eb] text-white font-sans">
            <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-10 pb-7 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mb-8">

                    <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-5 md:mb-6">
                            <img
                                src="/image.png"
                                alt="NimbusPost"
                                className="h-14 md:h-16 w-auto object-contain"
                            />
                        </div>
                        <p className="text-[14.5px] md:text-[16px] text-white leading-[1.5] pr-0 md:pr-4 w-fullmd:w-[90%]">
                            NimbusPost is a leading eCommerce enabler for India's new-age online businesses. Offering easy-to-use and scalable logistics and fulfillment solutions, we are building an all-in-one tech & service stack for the entire value chain – from acquisition and conversion, to post-purchase engagement and retention.
                        </p>

                        <div className="md:pt-2">
                            <h4 className="text-[21px] md:text-[22px] font-bold mb-4">Follow Us</h4>
                            <div className="flex gap-5 ml-3">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                    <FaFacebook size={20} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                    <FaTwitter size={20} />
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                    <FaYoutube size={20} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                    <FaInstagram size={20} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                    <FaLinkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-7 md:mt-0 lg:pl-8">
                        <h3 className="text-[21px] md:text-[22px] font-semibold mb-3 md:mb-2">Services</h3>
                        <ul className="space-y-[14px]">
                            <li>
                                <Link href="/services/domestic-shipping" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">
                                    Domestic Shipping
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/warehouse" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">
                                    Warehouse & Fulfillment
                                </Link>
                            </li>
                        </ul>

                        <h3 className="text-[21px] md:text-[22px] font-bold mb-3 md:mb-2 mt-6 md:mt-8">Quick links</h3>
                        <ul className="space-y-[14px]">
                            <li>
                                <Link href="/about" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/media" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">
                                    Media
                                </Link>
                            </li>
                            <li>
                                <Link href="/blogs" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='mt-6 md:mt-0'>
                        <h3 className="text-[21px] md:text-[22px] font-bold mb-3 md:mb-2">Features</h3>
                        <ul className="space-y-[14px]">
                            <li>
                                <Link href="/features/cod" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">
                                    Branded Tracking Page
                                </Link>
                            </li>
                            <li>
                                <Link href="/features/cod" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">
                                    Cash on Delivery
                                </Link>
                            </li>
                            <li>
                                <Link href="/features/pin-codes" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">
                                    Serviceable Pin Codes
                                </Link>
                            </li>
                            <li>
                                <Link href="/features/api" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">
                                    API Integration
                                </Link>
                            </li>
                            <li>
                                <Link href="/features/pickup" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">
                                    Multiple Pickup Locations
                                </Link>
                            </li>
                            <li>
                                <Link href="/features/labels" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">
                                    Print Shipping Labels
                                </Link>
                            </li>
                            <li>
                                <Link href="/features/notifications" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">
                                    Email & SMS Notifications
                                </Link>
                            </li>
                            <li>
                                <Link href="/features/amazon" className="text-white hover:text-[#f59e0b] transition-colors text-[16px]">
                                    Amazon Self-Ship
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-5 md:mt-0 lg:pl-4">
                        <h3 className="text-[21px] md:text-[22px] font-bold mb-2">Contact Us</h3>
                        <div className="space-y-4">
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
                                    8th Floor, Splendor Spectrum One, Golf Course Ext Rd, Sector 58, Gurugram, Haryana 122011
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
                                    care@nimbuspost.com
                                </a>
                            </div>
                        </div>

                        <div className="mt-5 md:mt-8">
                            <h3 className="text-[21px] md:text-[22px] font-bold mb-4">Download App</h3>
                            <div className="flex gap-3 md:justify-between">
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

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col-reverse md:flex-row justify-between items-center gap-4 mt-4">
                    <p className="text-[14px] text-white">
                        © 2026 NimbusPost. All rights reserved.
                    </p>
                    <div className="flex gap-6 items-center">
                        <Link href="/terms-and-conditions" className="text-[14px] text-white transition-colors">
                            Terms and Conditions
                        </Link>
                        <span className="text-white text-[14px]">|</span>
                        <Link href="/privacy-policy" className="text-[13px] text-white transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
