import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShippingBox from "@/components/ShippingBox";

export default function ShippingPage() {
    return (
        <main className="h-auto bg-gray-100 flex flex-col">
            <Navbar />
            <ShippingBox />
            <Footer />
        </main>
    );
}