import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourierPartnersHero from "@/components/CourierPartnersHero";
import CourierIntegrations from "@/components/CourierIntegrations";
import GrowingBrandSection from "@/components/GrowingBrandSection";
import ShippingPowerSection from "@/components/ShippingPowerSection";
import FAQSection from "@/components/FAQSection";

export default function CourierPartners() {
    return (
        <main className="h-auto bg-white flex flex-col">
            <Navbar />
            <CourierPartnersHero />
            <CourierIntegrations />
            <GrowingBrandSection />
            <ShippingPowerSection />
            <FAQSection />
            <Footer />
        </main>
    );
}