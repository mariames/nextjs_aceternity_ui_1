import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import { InfoCards } from "@/components/InfoCard";
import Competitors from "@/components/Competitors";
import Leaders from "@/components/Leaders";
import { StickyScrollRevealDemo } from "@/components/StickyScrollDemo";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
//
//import { VideoYT } from "@/components/VideoYT";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <InfoCards />
      <Competitors/>
      <Leaders/>
      <StickyScrollRevealDemo />
      <Clients />
      <Footer />
    </main>
  );
}
