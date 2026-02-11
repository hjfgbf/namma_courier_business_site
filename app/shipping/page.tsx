import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShippingBox from "@/components/ShippingBox";

export default function ShippingPage() {
    return (
        <main className="h-auto bg-gray-100 flex flex-col">
            <Navbar />
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <ShippingBox />
            </Suspense>
            <Footer />
        </main>
    );
}
