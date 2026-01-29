import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SuccessStoriesSection from "../components/SuccessStoriesSection";
import CourierPartnersSection from "../components/CourierPartnersSection";
import BusinessScaleSection from "../components/BusinessScaleSection";
import Footer from "../components/Footer";
import BlogSection from "../components/BlogSection";
import BrandMoments from "../components/BrandMoments";
import StorageFulfillment from "../components/StorageFulfillment";
import GrowSection from "../components/GrowSection";
import DutySection from "../components/DutySection";
import TestimonialSection from "../components/TestimonialSection";
import FeaturesSection from "../components/FeaturesSection";
import FeaturesStatsSection from "../components/FeaturesStatsSection";

export default function Home() {
  return (
    <main className="h-auto bg-white flex flex-col">
      <Navbar />
      <HeroSection />
      <SuccessStoriesSection />
      <FeaturesSection />
      <FeaturesStatsSection />
      <CourierPartnersSection />
      <BusinessScaleSection />
      <GrowSection />
      <DutySection />
      <StorageFulfillment />
      <BrandMoments />
      <TestimonialSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
