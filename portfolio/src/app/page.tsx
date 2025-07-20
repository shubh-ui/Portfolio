import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
