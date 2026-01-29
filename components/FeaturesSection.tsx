import Image from "next/image";

const features = [
    {
        title: "Simplified Shipping for You",
        description:
            "Launch shipments in seconds with our intuitive dashboard. Auto-generate professional labels and instantly find the best route for every package.",
        image: "/img1.png",
        imagePosition: "left",
    },
    {
        title: "Priority Delivery & Fast Payouts",
        description:
            "Delight your customers with local same-day delivery options. We ensure your business stays liquid with consistent and timely COD remittances.",
        image: "/img2.png",
        imagePosition: "right",
    },
    {
        title: "The Trust of a True Messenger",
        description:
            "We treat every pickup as a priority. With transparent weight audits and dedicated support, we eliminate the friction in your logistics.",
        image: "/img3.png",
        imagePosition: "left",
    },
    {
        title: "Insights to Grow Your Brand",
        description:
            "Take control with actionable data insights. Track performance in real-time and customize the delivery experience to reflect your brand's quality.",
        image: "/img4.png",
        imagePosition: "right",
    },
];

const FeaturesSection = () => {
    return (
        <section className="pt-12 pb-14 md:py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-28">
                <div className="text-center mb-14 md:mb-16">
                    <h2 className="text-[28px] md:text-[38px] font-bold text-[#1e3a8a] mb-4 leading-tight">
                        Reliable & Modern
                        <br />
                        <span className="text-[#f59e0b]">Logistics for Your Growth</span>
                    </h2>
                    <p className="text-[#1e3a8a] font-semibold mt-7 md:mt-5 tracking-wide text-[15px] md:text-[17px]">
                        Seamless Pickups. Transparent Billing. Faster Deliveries.
                    </p>
                </div>

                <div className="px-[6px] md:px-0 space-y-12 md:space-y-24">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center gap-4 md:gap-8 ${feature.imagePosition === "left"
                                ? "md:flex-row"
                                : "md:flex-row-reverse"
                                }`}
                        >
                            <div className="w-full md:w-1/2 flex justify-start">
                                <div className="relative w-full max-w-[500px]">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>

                            <div className={`w-full md:w-1/2 flex ${feature.imagePosition === "left"
                                ? "justify-start md:pl-8"
                                : "justify-start md:pr-8"
                                }`}>
                                <div className="text-left">
                                    <h3 className="text-[24px] md:text-[28px] font-bold text-[#1e3a8a] mb-2 leading-tight md:leading-normal">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[#1e3a8a] tracking-wide text-[14px] md:text-[16px] leading-snug max-w-[450px]">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:mt-20 text-center">
                    <button className="bg-[#f59e0b] text-white text-[14px] md:text-[16px] font-bold px-6 py-2 rounded-full hover:bg-[#1e3a8a] transition-colors duration-300 cursor-pointer">
                        Explore Solutions
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;