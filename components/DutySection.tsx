import Image from "next/image";

export default function DutySection() {
    return (
        <section className="w-full py-10 md:py-20 bg-gradient-to-br from-[#0f2557] via-[#1e3a8a] to-[#2563eb] relative overflow-hidden">
            <div className="w-full mx-auto relative z-10 px-6 md:pl-8 md:pr-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[28px] md:text-[38px] font-bold text-white leading-[1.2] md:leading-[1.3]">
                        Heavy-Duty Cargo?<br />
                        Unstoppable Performance
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center mb-11 md:mb-20">
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <div className="w-full max-w-[675px]">
                            <Image
                                src="/duty-1.png"
                                alt="Heavy duty cargo shipping with courier partners"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 px-1 md:px-16 text-white mt-5 md:mt-0">
                        <h3 className="text-[24px] md:text-[28px] font-bold mb-3 md:mb-4">Master Your B2B Logistics</h3>
                        <p className="text-[14px] md:text-[16px] leading-snug">
                            Seamlessly integrate your Warehouse Management System (WMS) to ship bulk orders under a single AWB. Get instant digital Proof of Delivery (POD) and flexible payment options.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse items-center mb-0 md:mb-12">
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="w-full px-5 md:px-0 max-w-[675px]">
                            <Image
                                src="/duty-2.png"
                                alt="Dependable delivery service support"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 px-1 md:px-24 text-white mt-5 md:mt-0">
                        <h3 className="text-[24px] md:text-[28px] font-bold mb-3 md:mb-4">Reach the Unreachable</h3>
                        <p className="text-[14px] md:text-[16px] leading-snug">
                            Deliver where others won't. Get ODA coverage up to 300km from hubs,
                            backed by dedicated Account Managers and full transit insurance.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-6 md:mt-16 pt-2">
                    <button className="bg-[#f59e0b] hover:bg-white hover:text-[#1e3a8a] text-[14px] md:text-[16px] text-white font-bold px-6 py-2 rounded-full transition-all cursor-pointer">
                        Explore Solutions
                    </button>
                </div>

            </div>
        </section>
    );
}
