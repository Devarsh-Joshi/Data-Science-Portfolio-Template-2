import { useEffect, Suspense } from "react";
import Scene from "@/components/canvas/Scene";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative w-full min-h-screen text-foreground overflow-x-hidden bg-[#02040a]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50 shadow-[0_0_20px_rgba(0,255,255,0.5)]"
        style={{ scaleX }}
      />

      {/* 3D Background */}
      <Suspense fallback={null}>
        <Scene />
      </Suspense>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
        {/* Footer */}
        <footer className="pb-16 pt-0 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-muted-foreground font-light text-sm relative z-10 gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-white font-bold">ALEX NOVA</p>
            <p>© 2026. BUILT WITH RIGOR AND DESIGN.</p>
          </div>
          <div className="flex gap-12 font-medium">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary cursor-pointer transition-colors">TWITTER</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary cursor-pointer transition-colors">LINKEDIN</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary cursor-pointer transition-colors">GITHUB</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
