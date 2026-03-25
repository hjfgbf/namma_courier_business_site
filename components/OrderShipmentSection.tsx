"use client";

import Image from "next/image";

const shipmentStages = [
    {
        id: "01",
        title: "Order Confirmed",
        description: "The seller has processed your order and prepared the shipment.",
        icon: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-219-150x150.png.webp"
    },
    {
        id: "02",
        title: "Pickup Manifested",
        description: "Your package is ready and waiting for our courier partner to collect.",
        icon: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-222-150x150.png.webp"
    },
    {
        id: "03",
        title: "Global Transit",
        description: "Shipment is moving through our network hubs toward your city.",
        icon: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-224-150x150.png.webp"
    },
    {
        id: "04",
        title: "Out for Delivery",
        description: "Our local delivery expert is on the way to your specified address.",
        icon: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-225-150x150.png.webp"
    },
    {
        id: "05",
        title: "Delivered",
        description: "The journey is complete. Your package has been safely handed over.",
        icon: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/weui_location-outlined-150x150.png.webp"
    }
];

export default function OrderShipmentSection() {
    return (
        <section className="w-full bg-white py-12 md:py-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 md:px-12">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-[28px] md:text-[38px] font-bold text-[#1e3a8a] mb-5 md:mb-[14px]">
                        Understanding Your <span className="text-[#f59e0b]">Shipment Journey</span>
                    </h2>
                    <h6 className="text-[#1e3a8a] text-[16px] md:text-[18px] font-semibold">
                        We believe in total transparency. Here is a detailed breakdown of the milestones your package crosses.
                    </h6>
                </div>

                <div className="relative">
                    <div className="hidden lg:block absolute top-[25px] left-[10%] w-[80%] h-[90px] -z-0">
                        <svg width="100%" height="100%" viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
                            <path
                                d="M0,50 Q125,100 250,50 T500,50 T750,50 T1000,50"
                                stroke="#1e3a8a"
                                strokeWidth="2"
                                strokeDasharray="6 4"
                                fill="none"
                                opacity="1"
                            />
                        </svg>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-9 lg:gap-4 relative z-10">
                        {shipmentStages.map((stage, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="relative mb-8">
                                    <div className="w-[140px] h-[140px] rounded-full bg-white shadow-[0_15px_35px_-5px_rgba(0,0,0,0.3)] flex items-center justify-center relative border-[1px] border-dashed border-gray-100 p-3 transition-transform duration-500">
                                        <div className="w-full h-full rounded-full border-[1.5px] border-dashed border-[#f59e0b] border-opacity-30 flex items-center justify-center">
                                            <div className="w-[70px] h-[70px] relative">
                                                <Image
                                                    src={stage.icon}
                                                    alt={stage.title}
                                                    fill
                                                    className="object-contain p-2"
                                                />
                                            </div>
                                        </div>

                                        <div className="absolute -top-1 -right-1 w-9 h-9 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center font-bold text-[14px] shadow-md z-20">
                                            {stage.id}
                                        </div>
                                    </div>
                                </div>

                                <div className="px-2">
                                    <h3 className="text-[20px] md:text-[21px] font-bold text-[#1e3a8a] mb-1">
                                        {stage.title}
                                    </h3>
                                    <p className="text-[15px] md:text-[16px] font-medium text-[#1e3a8a] leading-normal max-w-[280px] md:max-w-[220px] mx-auto">
                                        {stage.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
