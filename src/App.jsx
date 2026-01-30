import Header from "./components/Header/header";
import Hero from "./components/Hero/Hero";
import OurServices from "./components/OurServices/our-services";

export default function App() {
  return (
    <div className="flex flex-wrap min-h-screen items-center justify-center bg-darkgray text-white">
      <Header />
      <Hero />
      <OurServices />
    </div>
  );
}