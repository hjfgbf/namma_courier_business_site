import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShippingRateHero from "@/components/ShippingRateHero";
import GreatRatesSection from "@/components/GreatRatesSection";
import PricingFAQ from "@/components/PricingFAQ";
import PricingBlogSection from "@/components/PricingBlogSection";
import PricingBrandPartner from "@/components/PricingBrandPartner";
import PricingCourierPartner from "@/components/PricingCourierPartner";
import PricingShippingRate from "@/components/PricingShippingRate";
import PricingShippingCost from "@/components/PricingShippingCost";
import PricingImpactSection from "@/components/PricingImpactSection";
import SmarterShippingSection from "@/components/SmarterShippingSection";
import PricingCalculatorSection from "@/components/PricingCalculatorSection";

export default function ShippingRate() {
    return (
        <main className="h-auto bg-white flex flex-col">
            <Navbar />
            <ShippingRateHero />
            <PricingCalculatorSection />
            <SmarterShippingSection />
            <PricingImpactSection />
            <PricingShippingCost />
            <PricingCourierPartner />
            <PricingShippingRate />
            <PricingBrandPartner />
            <PricingBlogSection />
            <PricingFAQ />
            <GreatRatesSection />
            <Footer />
        </main>
    );
}