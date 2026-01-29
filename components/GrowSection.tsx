import Image from "next/image";
import { FaShippingFast, FaMapMarkerAlt, FaChartBar, FaCheckCircle, FaArrowUp, FaRoute } from "react-icons/fa";
import { BiLogoPlayStore, BiLogoApple } from "react-icons/bi";
import { IoStatsChart } from "react-icons/io5";

export default function GrowSection() {
    return (
        <section className="w-full pt-10 bg-gradient-to-br from-[#e8eef7] via-[#f5f7fa] to-[#fef3e8] overflow-hidden relative">
            <div className="max-w-[1200px] w-full mx-auto px-4 md:px-14 relative z-10 text-center md:text-start">
                <div className="flex flex-col lg:flex-row items-center md:justify-between gap-0 lg:gap-0">

                    {/* Left Content */}
                    <div className="flex-1 w-full lg:max-w-[550px] space-y-8">
                        <div className="space-y-4 md:space-y-5">
                            <h2 className="text-[28px] md:text-[38px] font-bold leading-[1.0] md:leading-[1.1]">
                                <span className="text-[#f59e0b]">Grow</span> <span className="text-[#1e3a8a]">on the Go</span>
                            </h2>
                            <p className="text-[#1e3a8a] text-[14px] md:text-[16px] leading-normal max-w-[480px]">
                                Your logistics command center, right in your pocket. Manage orders, monitor live tracking and view
                                growth analytics on the move.
                            </p>
                        </div>

                        <div className="space-y-5 mt-8 flex flex-col items-center md:items-start">
                            <div className="flex items-start gap-5 group">
                                <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <FaShippingFast className="w-10 h-10 text-[#1e3a8a]" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                                        <FaCheckCircle className="w-5 h-5 text-[#f59e0b]" />
                                    </div>
                                </div>
                                <div className="pt-1 leading-tight">
                                    <h3 className="text-[24px] md:text-[28px] font-bold text-[#1e3a8a]">One-Tap Shipping</h3>
                                    <p className="text-[#1e3a8a] text-[14px] md:text-[16px] text-start">Book pickups in seconds, not minutes</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <FaMapMarkerAlt className="w-9 h-9 text-[#1e3a8a]" />
                                    </div>
                                    <div className="absolute bottom-0 right-0 translate-y-1">
                                        <FaRoute className="w-6 h-6 text-[#f59e0b]" />
                                    </div>
                                </div>
                                <div className="pt-1 leading-tight">
                                    <h3 className="text-[24px] md:text-[28px] font-bold text-[#1e3a8a]">Live Pulse</h3>
                                    <p className="text-[#1e3a8a] text-[14px] md:text-[16px] text-start">Real-time tracking for you and your customers</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <IoStatsChart className="w-10 h-10 text-[#1e3a8a]" />
                                    </div>
                                    <div className="absolute top-1 -right-1">
                                        <FaArrowUp className="w-4 h-4 text-[#f59e0b] rotate-45 stroke-2" />
                                    </div>
                                </div>
                                <div className="pt-1 leading-tight">
                                    <h3 className="text-[24px] md:text-[28px] font-bold text-[#1e3a8a]">Smart Analytics</h3>
                                    <p className="text-[#1e3a8a] text-[14px] md:text-[16px] text-start">See your best-performing zones at a glance</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-1 justify-center md:justify-start">
                            <a href="#" className="flex items-center gap-2 md:gap-3 bg-black text-white px-6 py-2 rounded-[10px] transition-all shadow-lg">
                                <BiLogoPlayStore className="md:w-8 md:h-8 w-7 h-7 text-[#00E26B]" />
                                <div className="flex flex-col leading-none py-0.5">
                                    <span className="text-[9px] uppercase tracking-wide mb-0.5">GET IT ON</span>
                                    <span className="text-[14px] md:text-[16px]">Google Play</span>
                                </div>
                            </a>

                            <a href="#" className="flex items-center gap-2 md:gap-3 bg-black text-white px-6 py-2 rounded-[10px] transition-all shadow-lg">
                                <BiLogoApple className="md:w-8 md:h-8 w-7 h-7 text-white" />
                                <div className="flex flex-col leading-none py-0.5">
                                    <span className="text-[9px] tracking-wide mb-0.5 text-left">Download on the</span>
                                    <span className="text-[14px] md:text-[16px]">App Store</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Content*/}
                    <div className="flex-1 w-full relative flex justify-center mt-2 lg:-mt-28">
                        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[650px]">
                            <Image
                                src="/human.png"
                                alt="Man using courier app on sofa"
                                fill
                                className="object-contain object-bottom"
                                sizes="(max-width: 768px) 100vw, 600px"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
