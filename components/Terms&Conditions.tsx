"use client";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function TermsAndConditions() {
    return (
        <section className="w-full font-sans">
            <header className="w-full bg-gradient-to-br from-[#0f2557] via-[#1e3a8a] to-[#2563eb] py-8 md:py-12 relative overflow-hidden">
                <div className="max-w-[1400px] py-20 md:py-24 mx-auto px-3 md:px-10 relative z-10">
                    <nav className="flex items-center gap-2 text-white/80 text-[13px] md:text-[15px] mb-3 md:mb-4">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <FaChevronRight size={10} className="text-white/40" />
                        <span className="text-white font-medium">Terms & Conditions</span>
                    </nav>

                    <h1 className="text-[30px] xl:text-[50px] font-bold text-white tracking-tight">
                        Terms & Conditions
                    </h1>
                </div>
            </header>

            <div className="max-w-[1400px] mx-auto px-3 md:px-10 pt-10 pb-6 md:pt-16 md:pb-10">
                <div className="prose prose-blue max-w-none text-[#4b5563] text-[14px] md:text-[16px] leading-relaxed">
                    <div className="space-y-3 md:space-y-4">
                        <p>
                            Welcome to உங்கள் Thoothuvan Logistics. These Terms and Conditions govern your use of our platform and the shipping, warehousing, and fulfillment services we provide. By using our platform or booking our services, you agree to comply with these terms.
                        </p>

                        <div className="space-y-3 md:space-y-4 pt-1 md:pt-2">
                            <h3 className="text-lg md:text-xl font-bold text-[#1f2937]">1. Our Services</h3>
                            <p>
                                உங்கள் Thoothuvan provides a tech-driven logistics platform and physical delivery network. Our services include:
                            </p>
                            <ul className="grid grid-cols-1 gap-y-2 md:gap-y-3 list-disc pl-5">
                                <li><strong>B2C & B2B Shipping:</strong> Handling deliveries for individual sellers and large enterprises alike.</li>
                                <li><strong>Warehousing & Fulfillment:</strong> Storing, packing, and dispatching products from our secure facilities.</li>
                                <li><strong>Integrated Tracking:</strong> Providing digital dashboards for real-time monitoring of all shipments.</li>
                                <li><strong>API Integrations:</strong> Enabling automated shipping workflows for e-commerce platforms.</li>
                            </ul>
                        </div>

                        <div className="space-y-3 md:space-y-4 pt-1 md:pt-2">
                            <h3 className="text-lg md:text-xl font-bold text-[#1f2937]">2. Shipment Compliance & Packaging</h3>
                            <p>
                                Users must ensure all packages meet the following standards:
                            </p>
                            <ul className="grid grid-cols-1 gap-y-2 md:gap-y-3 list-disc pl-5">
                                <li><strong>Prohibited Items:</strong> Items prohibited by law, explosive materials, hazardous chemicals, and illegal substances are strictly banned.</li>
                                <li><strong>Accuracy of Information:</strong> You must provide accurate weights, dimensions, and descriptions. Misdeclared contents may lead to rejection or additional charges.</li>
                                <li><strong>Secure Packaging:</strong> It is the sender's responsibility to package items securely to withstand standard transit handling.</li>
                            </ul>
                        </div>

                        <div className="space-y-3 md:space-y-4 pt-1 md:pt-2">
                            <h3 className="text-lg md:text-xl font-bold text-[#1f2937]">3. Payments, Rates & Billing</h3>
                            <ul className="space-y-2 md:space-y-3 list-disc pl-5">
                                <li><strong>Shipping Rates:</strong> Rates are calculated based on dead weight or volumetric weight, whichever is higher.</li>
                                <li><strong>Invoicing:</strong> For B2B partners, invoices are generated based on the agreed billing cycle. Payments are overdue after the specified date.</li>
                                <li><strong>Cash on Delivery (COD):</strong> COD collection services are available, with remissions handled according to our standard payout schedule.</li>
                            </ul>
                        </div>

                        <div className="space-y-3 md:space-y-4 pt-1 md:pt-2">
                            <h3 className="text-lg md:text-xl font-bold text-[#1f2937]">4. Delivery Timelines & Liability</h3>
                            <p>
                                While we strive for speed, delivery timelines are estimates and can be affected by weather, strikes, or logistical hurdles.
                            </p>
                            <ul className="space-y-2 md:space-y-3 list-disc pl-5">
                                <li><strong>Loss or Damage:</strong> In the rare event of shipment loss or damage, claims must be filed within the specified window from the delivery attempt.</li>
                                <li><strong>Limited Liability:</strong> Our liability is limited to the declared value of the shipment or a standard maximum amount, whichever is lower, unless extra coverage is opted for.</li>
                            </ul>
                        </div>

                        <div className="space-y-3 md:space-y-4 pt-1 md:pt-2">
                            <h3 className="text-lg md:text-xl font-bold text-[#1f2937]">5. User Account Security</h3>
                            <p>
                                You are responsible for maintaining the confidentiality of your login credentials. Any activity performed via your account is deemed your responsibility. Notify our team immediately if you suspect any unauthorized access.
                            </p>
                        </div>

                        <div className="space-y-3 md:space-y-4 pt-1 md:pt-2">
                            <h3 className="text-lg md:text-xl font-bold text-[#1f2937]">6. Dispute Resolution & Jurisdiction</h3>
                            <p>
                                Any dispute arising under these terms shall be subject to amicable resolution. If unresolved, legal proceedings shall be governed by Indian laws and fall under the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
                            </p>
                        </div>

                        <div className="space-y-3 md:space-y-4 pt-1 md:pt-2">
                            <h3 className="text-lg md:text-xl font-bold text-[#1f2937]">7. Policy Updates</h3>
                            <p>
                                உங்கள் Thoothuvan reserves the right to modify these terms as we evolve. Continued use of our services after such changes constitutes acceptance of the new terms.
                            </p>
                        </div>

                        <div className="space-y-3 md:space-y-4 pt-1 md:pt-2">
                            <h3 className="text-lg md:text-xl font-bold text-[#1f2937]">8. Contact for Support</h3>
                            <p>
                                For any queries regarding these terms or your shipments, please reach out to us at support@ungalthoothuvan.com.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
