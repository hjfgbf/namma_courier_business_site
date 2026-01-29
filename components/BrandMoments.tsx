import Link from "next/link";
import { FaUserCheck, FaTruck, FaDesktop, FaExchangeAlt, FaCheckCircle, FaCommentDots, FaBoxOpen } from "react-icons/fa";

export default function BrandMoments() {
    return (
        <section className="w-full py-10 md:py-20 bg-gradient-to-br from-[#e8eef7] via-[#f5f7fa] to-[#fef3e8]">
            <div className="max-w-[1400px] w-full mx-auto px-4 lg:px-12">
                {/* Header */}
                <div className="text-center mb-14 md:mb-16">
                    <h2 className="text-[28px] md:text-[38px] font-bold leading-tight">
                        <span className="md:block text-[#f59e0b]">Create Brand Moments </span>
                        <span className="md:block text-[#1e3a8a]">That Build Lasting Loyalty</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="px-2 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-9 md:mb-12">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col h-full border border-gray-100">
                        <div className="relative h-12 w-12">
                            <div className="text-[#1e3a8a]">
                                <FaUserCheck size={40} />
                            </div>
                        </div>
                        <h3 className="text-[21px] md:text-[22px] font-bold leading-snug text-[#1e3a8a] mb-[10px]">Smart Checkout Recovery</h3>
                        <p className="text-[#1e3a8a] text-[14px] md:text-[15px] leading-normal">
                            Recover abandoned carts and validate COD orders via automated IVR. Reduce RTO (Return to Origin) by confirming intent before you ship
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col h-full border border-gray-100">
                        <div className="relative h-12 w-14">
                            <div className="text-[#1e3a8a]">
                                <FaCommentDots size={40} transform="scale(-1, 1)" />
                            </div>
                        </div>
                        <h3 className="text-[21px] md:text-[22px] font-bold leading-snug text-[#1e3a8a] mb-[10px]">Post-Purchase Clarity</h3>
                        <p className="text-[#1e3a8a] text-[14px] md:text-[15px] leading-normal">
                            Keep customers calm and informed with automated WhatsApp updates and proactive IVR follow-ups for failed delivery attempts
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col h-full border border-gray-100">
                        <div className="text-[#f59e0b]">
                            <div className="relative h-12 w-14">
                                <FaDesktop size={40} className="text-[#1e3a8a]" />
                            </div>
                        </div>
                        <h3 className="text-[21px] md:text-[22px] font-bold leading-snug text-[#1e3a8a] mb-[10px]">Your Brand, Front & Center</h3>
                        <p className="text-[#1e3a8a] text-[14px] md:text-[15px] leading-normal">
                            Replace generic tracking with a custom-branded experience. Showcase your logo and marketing banners at no extra cost
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col h-full border border-gray-100">
                        <div className="relative h-12 w-12 flex items-center">
                            <div className="text-[#1e3a8a]">
                                <FaExchangeAlt size={32} />
                            </div>
                        </div>
                        <h3 className="text-[21px] md:text-[22px] font-bold leading-snug text-[#1e3a8a] mb-[10px]">Frictionless Returns</h3>
                        <p className="text-[#1e3a8a] text-[14px] md:text-[15px] leading-normal">
                            Turn returns into a trust-building exercise with stress-free exchanges and automated reverse quality checks
                        </p>
                    </div>
                </div>

                {/* Button */}
                <div className="text-center">
                    <Link
                        href="/"
                        className="inline-block bg-[#f59e0b] text-white text-[14px] md:text-base font-bold px-6 py-2 rounded-full hover:bg-[#1e3a8a] transition-colors shadow-sm"
                    >
                        Explore Solutions
                    </Link>
                </div>
            </div>
        </section>
    );
}
