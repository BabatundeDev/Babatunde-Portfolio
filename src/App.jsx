import { useState } from 'react'
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <div className="fixed inset-0 z-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
              backgroundSize: "40px 40px"
            }}
          />
        </div>

        <div className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>
      <footer className="relative z-10 border-t border-white/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 flex justify-center gap-8">
            <a href="https://github.com/BabatundeDev" className="text-white/60 hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/babatunde-ishau-95ab94359" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://x.com/BabatundeIshau" className="text-white/60 hover:text-white transition-colors">Twitter</a>
          </div>
          <p className="text-white/40 text-sm">© 2025 Babatunde Ishau. Crafted with precision.</p>
        </div>
      </footer>
    </div>
  );
}
