import Header from "./components/Header/header";
import Hero from "./components/Hero/Hero";
import OurServices from "./components/OurServices/our-services";
import Testmonials from "./components/Testmonials/Testmonials";
import PricingTabs from "./components/PricingTabs/PricingTabs";
import AboutCoach from "./components/AboutCoach/AboutCoach";
import CTAInline from "./components/CTAInline/CTAInline";

export default function App() {
  return (
    <div className="flex flex-wrap min-h-screen items-center justify-center bg-darkgray text-white">
      <Header />
      <Hero />
      <OurServices />
      <Testmonials />
      <PricingTabs />
      <AboutCoach />
      <CTAInline />
    </div>
  );
}