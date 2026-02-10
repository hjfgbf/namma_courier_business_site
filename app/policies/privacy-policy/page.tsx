import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function PrivacyPolicyPage() {
    return (
        <main className="h-auto bg-white flex flex-col">
            <Navbar />
            <PrivacyPolicy />
            <Footer />
        </main>
    );
}