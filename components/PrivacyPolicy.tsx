"use client";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function PrivacyPolicy() {
    return (
        <section className="w-full font-sans">
            <header className="w-full bg-gradient-to-br from-[#0f2557] via-[#1e3a8a] to-[#2563eb] py-8 md:py-12 relative overflow-hidden">
                <div className="max-w-[1400px] py-20 md:py-24 mx-auto px-3 md:px-10 relative z-10">
                    <nav className="flex items-center gap-2 text-white/80 text-[13px] md:text-[15px] mb-3 md:mb-4">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <FaChevronRight size={10} className="text-white/40" />
                        <span className="text-white font-medium">Privacy policy</span>
                    </nav>

                    <h1 className="text-[30px] xl:text-[50px] font-bold text-white tracking-tight">
                        Privacy policy
                    </h1>
                </div>
            </header>

            <div className="max-w-[1400px] mx-auto px-3 md:px-10 pt-10 pb-6 md:pt-16 md:pb-10">
                <div className="prose prose-blue max-w-none text-[#4b5563] text-[14px] md:text-[16px] leading-relaxed">
                    <div className="space-y-3 md:space-y-4">
                        <p>
                            This platform is owned and operated by <strong>Namma Courier and Logistics Services Private Limited</strong>. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
                        </p>
                        <p>
                            This Privacy Policy explains how உங்கள் Thoothuvan Logistics and its affiliates (collectively "we," "us," or "our") collect, use, and process your personal information. As a logistics and shipping platform, we handle data necessary for the successful delivery of shipments and the efficient operation of our services via our website and mobile application. By using our platform, you consent to the practices described in this policy.
                        </p>

                        <p>
                            We prioritize the privacy of our users, whether they are individual senders, business partners, or recipients of shipments. This policy outlines our commitment to protecting the sensitive logistical data entrusted to us.
                        </p>

                        <div className="space-y-3 md:space-y-4 pt-1 md:pt-2">
                            <h3 className="text-lg md:text-xl font-bold text-[#1f2937]">Information We Collect</h3>
                            <p>
                                To provide reliable shipping and fulfillment services, we collect various types of information, including:
                            </p>
                            <ul className="grid grid-cols-1 gap-y-2 md:gap-y-3 list-disc pl-5">
                                <li><strong>Sender & Recipient Details:</strong> Names, pickup/delivery addresses, contact numbers, and email addresses.</li>
                                <li><strong>Shipment Information:</strong> Package dimensions, weight, contents description, and value for insurance and customs purposes.</li>
                                <li><strong>Tracking & Location Data:</strong> Real-time status updates of shipments and GPS coordinates for delivery verification.</li>
                                <li><strong>Payment Information:</strong> Transaction details, billing addresses, and payment modes (COD or prepaid).</li>
                                <li><strong>Business Profile:</strong> For B2B partners, we collect GST details, KYC documents, and warehouse locations.</li>
                            </ul>
                        </div>

                        <div className="space-y-3 md:space-y-4 pt-1 md:pt-2">
                            <h3 className="text-lg md:text-xl font-bold text-[#1f2937]">How We Use Your Logistical Data</h3>
                            <p>
                                Collected information is essential for core shipping operations, including:
                            </p>
                            <ul className="grid grid-cols-1 gap-y-2 md:gap-y-3 list-disc pl-5">
                                <li>Processing and managing your shipping orders efficiently.</li>
                                <li>Sharing necessary details with our courier partners for physical delivery.</li>
                                <li>Providing real-time tracking updates via SMS, email, or our platform.</li>
                                <li>Calculating shipping rates and optimizing delivery routes.</li>
                                <li>Ensuring package security and facilitating insurance claims if needed.</li>
                                <li>Improving our warehousing and fulfillment technology through data analysis.</li>
                            </ul>
                        </div>

                        <div className="space-y-3 md:space-y-4 pt-1 md:pt-2">
                            <h3 className="text-lg md:text-xl font-bold text-[#1f2937]">Data Sharing & Disclosure</h3>
                            <p>
                                We share information only with trusted parties involved in the logistics chain:
                            </p>
                            <ul className="space-y-2 md:space-y-3 list-disc pl-5">
                                <li><strong>Courier & Delivery Partners:</strong> Sharing recipient addresses and contacts to facilitate successful deliveries.</li>
                                <li><strong>Warehousing Partners:</strong> Providing inventory data for fulfillment and storage services.</li>
                                <li><strong>Regulatory Authorities:</strong> Disclosing information as required by law for security checks or tax compliance.</li>
                                <li><strong>Internal Teams:</strong> Shared within our group companies to maintain service quality and operational support.</li>
                            </ul>
                        </div>

                        <div className="space-y-3 md:space-y-4 pt-1 md:pt-2">
                            <h3 className="text-lg md:text-xl font-bold text-[#1f2937]">Package & Data Security</h3>
                            <p>
                                We take significant measures to protect both the physical packages and the digital data associated with them. This includes:
                            </p>
                            <ul className="space-y-2 md:space-y-3 list-disc pl-5">
                                <li>Encryption of sensitive digital data during transmission.</li>
                                <li>Restricted access to personal information only to authorized personnel involved in delivery.</li>
                                <li>Physical security at our sorting centers and warehouses to safeguard your shipments.</li>
                            </ul>
                        </div>

                        <div className="space-y-3 md:space-y-4 pt-1 md:pt-2">
                            <h3 className="text-lg md:text-xl font-bold text-[#1f2937]">Retention of Records</h3>
                            <p>
                                Shipping manifests and delivery records are retained for a period required by applicable transport laws and for audit purposes. We may keep anonymized data for research to improve our delivery speeds and logistics network efficiency.
                            </p>
                        </div>

                        <div className="space-y-3 md:space-y-4 pt-1 md:pt-2">
                            <h3 className="text-lg md:text-xl font-bold text-[#1f2937]">Jurisdiction</h3>
                            <p>
                                Any claims or disputes related to data privacy or service usage shall be governed by the laws of India, with exclusive jurisdiction in the courts of Chennai, Tamil Nadu.
                            </p>
                        </div>

                        <div className="space-y-3 md:space-y-4 pt-1 md:pt-2">
                            <h3 className="text-lg md:text-xl font-bold text-[#1f2937]">Contact Us</h3>
                            <p>
                                For any privacy concerns or requests to opt-out of marketing updates, please contact our support team at care@ungalthoothuvan.com.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
