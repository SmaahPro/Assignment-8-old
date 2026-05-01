"use client";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/homepage/HeroSection";
import ExtraSection from "@/components/homepage/ExtraSection";

export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ExtraSection />
            <Footer />
        </div>
    );
}
