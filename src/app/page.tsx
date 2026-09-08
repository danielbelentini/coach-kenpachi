import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Goals } from "@/components/Goals";
import { Approach } from "@/components/Approach";
import { Consultancy } from "@/components/Consultancy";
import { HowItWorks } from "@/components/HowItWorks";
import { Method } from "@/components/Method";
import { Results } from "@/components/Results";
import { About } from "@/components/About";
import { OtherServices } from "@/components/OtherServices";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Goals />
        <Approach />
        <Consultancy />
        <HowItWorks />
        <Method />
        <Results />
        <About />
        <OtherServices />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
