import { Hero } from "@/components/Hero";
import { Atelier } from "@/components/Atelier";
import { Process } from "@/components/Process";
import { Collections } from "@/components/Collections";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Atelier />
      <Process />
      <Collections />
      <Faq />
      <Footer />
    </main>
  );
}
