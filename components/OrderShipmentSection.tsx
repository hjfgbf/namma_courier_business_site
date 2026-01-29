"use client";

import Image from "next/image";

const shipmentStages = [
    {
        title: "Booked",
        description: "Your order has been confirmed by the seller",
        icon: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-219-150x150.png.webp"
    },
    {
        title: "Pending Pickup",
        description: "You will be informed upon successful order pickup",
        icon: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-222-150x150.png.webp"
    },
    {
        title: "In Transit",
        description: "Your package is on the way",
        icon: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-224-150x150.png.webp"
    },
    {
        title: "Out for Delivery",
        description: "The delivery partner will deliver your order to your doorstep soon",
        icon: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-225-150x150.png.webp"
    },
    {
        title: "Delivered",
        description: "Your package has been successfully delivered",
        icon: "https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/weui_location-outlined-150x150.png.webp"
    }
];

export default function OrderShipmentSection() {
    return (
        <section className="w-full bg-white py-12 md:py-20">
            <div className="max-w-[1400px] mx-auto px-4 md:px-12">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-[28px] md:text-[38px] font-bold text-[#1e3a8a] mb-5 md:mb-[14px]">
                        Shipment Stages <span className="text-[#f59e0b]">Simplified</span>
                    </h2>
                    <h6 className="text-[#1e3a8a] text-[16px] md:text-[18px] font-semibold">
                        Decoding the courier tracking stages for your convenience.
                    </h6>
                </div>

                <div className="relative">
                    <div className="hidden lg:block absolute top-[40px] left-[10%] w-[80%] border-t-2 border-dotted border-[#f59e0b] z-0" />
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-9 lg:gap-4 relative z-10">
                        {shipmentStages.map((stage, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-full p-[10px] mb-6 relative">
                                    <div className="w-[56px] h-[56px] relative flex items-center justify-center rounded-full z-10">
                                        <Image
                                            src={stage.icon}
                                            alt={stage.title}
                                            width={120}
                                            height={120}
                                            className="object-contain w-full h-full p-2"
                                        />
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
