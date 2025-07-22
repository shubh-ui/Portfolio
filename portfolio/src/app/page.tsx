import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
