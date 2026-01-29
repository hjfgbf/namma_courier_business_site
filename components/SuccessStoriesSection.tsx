import Image from 'next/image';

const successLogos = [
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Ekart-1.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-167-1.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-3371.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-166.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-337.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-165.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Professional.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/06/Group-3361.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Elastic-Run.png.webp',
    'https://d38jyoj3z4z76f.cloudfront.net/wp-content/uploads/2025/07/Group-339.png.webp',
];

const SuccessStoriesSection = () => {
    const logos = [...successLogos, ...successLogos];

    return (
        <section className="w-full bg-[#1e3a8a] py-3 md:py-4 overflow-hidden">
            <div className="text-center mb-2">
                <h2 className="text-[18px] md:text-[22px] font-semibold font-sans text-white">
                    Trusted Courier Partners
                </h2>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex w-max animate-marquee will-change-transform">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-4"
                        >
                            <div className="bg-transparent flex items-center justify-center h-[60px]">
                                <Image
                                    src={logo}
                                    alt={`Success Story ${index}`}
                                    width={140}
                                    height={50}
                                    className="object-contain w-28 h-28 duration-300"
                                    unoptimized
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStoriesSection;
