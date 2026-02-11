import Navbar from "@/components/Navbar";
import CheckoutBox from "@/components/CheckoutBox";
import Footer from "@/components/Footer";

export default function CheckoutPage() {
    return (
        <main className="h-auto bg-white flex flex-col">
            <Navbar />
            <CheckoutBox />
            <Footer />
        </main>
    );
}