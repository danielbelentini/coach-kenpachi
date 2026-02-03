import { ScrollSpyProvider } from "./context/ScrollSpyContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import OurServices from "./components/OurServices/OurServices";
import Testmonials from "./components/Testmonials/Testmonials";
import PricingTabs from "./components/PricingTabs/PricingTabs";
import AboutCoach from "./components/AboutCoach/AboutCoach";
import CTAInline from "./components/CTAInline/CTAInline";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="flex flex-wrap min-h-screen items-center justify-center bg-darkgray text-white">0
      <ScrollSpyProvider>
        <Header />
        <main className="w-full">
          <Hero />
          <OurServices />
          <Testmonials />
          <PricingTabs />
          <AboutCoach />
          <CTAInline />
          <Footer />
        </main>
      </ScrollSpyProvider>
    </div>
  );
}

