import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import { InfoCards } from "@/components/InfoCard";
import Competitors from "@/components/Competitors";
//import Clients from "@/components/Clients";
//
//import Footer from "@/components/Footer";

//
//import Leaders from "@/components/Leaders";

//import { StickyScrollRevealDemo } from "@/components/StickyScrollDemo";
//import { VideoYT } from "@/components/VideoYT";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <InfoCards />
      <Competitors/>
    </main>
  );
}


      {/*
      
      
      
      
      <Leaders/>
      <StickyScrollRevealDemo />
      <Clients />
      <Footer />
      */
     }