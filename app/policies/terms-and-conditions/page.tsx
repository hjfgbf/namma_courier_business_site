import Navbar from "@/components/Navbar";
import TermsAndConditions from "@/components/Terms&Conditions";
import Footer from "@/components/Footer";

export default function TermsAndConditionsPage() {
    return (
        <main className="h-auto bg-white flex flex-col">
            <Navbar />
            <TermsAndConditions />
            <Footer />
        </main>
    );
}