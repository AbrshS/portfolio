import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
