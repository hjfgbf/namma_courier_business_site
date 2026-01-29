import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AllFeaturesHero from "@/components/AllFeaturesHero";
import FeaturesGrid from "@/components/FeaturesGrid";

export default function AllFeatures() {
    return (
        <main className="h-auto bg-white flex flex-col">
            <Navbar />
            <AllFeaturesHero />
            <FeaturesGrid />
            <Footer />
        </main>
    );
}