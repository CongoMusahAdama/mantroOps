import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Vision } from "@/components/sections/Vision";
import { WhyMantroOps } from "@/components/sections/WhyMantroOps";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { OfflineSection } from "@/components/sections/OfflineSection";
import { RolesSection } from "@/components/sections/RolesSection";
import { Timeline } from "@/components/sections/Timeline";
import { FAQ } from "@/components/sections/FAQ";
import { Closing } from "@/components/sections/Closing";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-clip">
        <Hero />
        <Vision />
        <WhyMantroOps />
        <Features />
        <HowItWorks />
        <OfflineSection />
        <RolesSection />
        <Timeline />
        <FAQ />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
