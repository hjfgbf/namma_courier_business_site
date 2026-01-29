import Link from "next/link";
import Image from "next/image";

export default function StorageFulfillment() {
    return (
        <section className="w-full py-10 md:py-20 bg-white">
            <div className="max-w-[1400px] w-full mx-auto px-4 md:px-6 lg:px-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-[28px] md:text-[38px] font-bold leading-tight">
                        <span className="md:block text-[#f59e0b]">Storage & Fulfillment </span>
                        <span className="md:block text-[#1e3a8a]">Infrastructure Built for Scale</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-6 mb-10 md:mb-16">
                    <div className="mt-12 bg-gradient-to-br from-[#e8f0fe] to-[#f0f4ff] rounded-[12px] p-6 pb-9 relative flex flex-col items-center text-center shadow-sm">
                        <div className="-mt-24 w-full md:w-[95%] relative z-10 md:px-4">
                            <div className="relative w-full aspect-[7/4] rounded-[12px] overflow-hidden shadow-sm">
                                <Image
                                    src="/person-2.png"
                                    alt="Warehouse worker checking inventory"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <h3 className="text-[24px] md:text-[28px] font-bold text-[#1e3a8a] max-w-[400px] mt-4 mb-1">Hands-Free Operations</h3>
                        <p className="text-[#1e3a8a] text-[14px] md:text-[15px] leading-normal max-w-[400px] mx-auto">
                            Stop worrying about overhead. From climate-controlled storage to precision packaging and dispatch, we handle
                            the heavy lifting so you can focus on your brand.
                        </p>
                    </div>

                    <div className="mt-12 bg-gradient-to-br from-[#e8f0fe] to-[#f0f4ff] rounded-[12px] p-6 pb-9 relative flex flex-col items-center text-center shadow-sm">
                        <div className="-mt-24 w-full md:w-[95%] relative z-10 md:px-4">
                            <div className="relative w-full aspect-[7/4] rounded-[12px] overflow-hidden shadow-sm">
                                <Image
                                    src="/person-1.png"
                                    alt="Worker at computer"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <h3 className="text-[24px] md:text-[28px] font-bold text-[#1e3a8a] mt-4 mb-1">Warehouse Intelligence</h3>
                        <p className="text-[#1e3a8a] text-[14px] md:text-[15px] leading-normal max-w-[400px] mx-auto">
                            Eliminate errors with 99.9% inventory accuracy and 98%+ same-day dispatch. Our tech-led fulfillment ensures
                            zero weight disputes and total peace of mind.
                        </p>
                    </div>
                </div>

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
