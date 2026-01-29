import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderFAQ from "@/components/OrderFAQ";
import OrderBlogSection from "@/components/OrderBlogSection";
import OrderCourierSection from "@/components/OrderCourierSection";
import OrderShipmentSection from "@/components/OrderShipmentSection";
import OrderHeroSection from "@/components/OrderHeroSection";

export default function TrackOrder() {
    return (
        <main className="h-auto bg-white flex flex-col">
            <Navbar />
            <OrderHeroSection />
            <OrderShipmentSection />
            <OrderCourierSection />
            <OrderBlogSection />
            <OrderFAQ />
            <Footer />
        </main>
    );
}