import { Code2, Zap, Award, Users } from "lucide-react";
import { ImageWithFallback } from "./image/ImageWithFallback";

import Profile from "../assets/images/Profile.png";

export function About() {
  const stats = [
    { icon: Code2, label: "Lines of Code", value: "500K+" },
    { icon: Zap, label: "Projects Delivered", value: "40+" },
    { icon: Award, label: "Years Experience", value: "3+" },
    { icon: Users, label: "Clients Worldwide", value: "20+" }
  ];

  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-white/40 font-mono text-sm">01</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h2 className="text-5xl md:text-6xl tracking-tight font-extrabold">about</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div className="space-y-6">
            <p className="text-xl text-white/80 leading-relaxed">
              I'm Babatunde Ishau, a Frontend Engineer and AI Specialist dedicated to
              engineering production-grade web products and intelligent systems that drive
              real business outcomes for companies, businesses and startups.
            </p>

            <p className="text-white/80 leading-relaxed">
              I specialize in building fast, scalable, and revenue-ready digital products
              using React, Next.Js, Javascript, TypeScript and FastAPI across the full
              engineering lifecycle from component architecture and state management to
              AI-powered backend systems, REST API integration, and performance-optimized
              deployment pipelines.
            </p>

            <p className="text-white/80 leading-relaxed">
              I operate with a detail-oriented, user-focused execution standard whether
              shipping solo or collaborating within remote cross-functional engineering
              teams. Every product I deliver is built for performance, maintainability,
              and measurable impact with Lighthouse scores of 95 to 100 and sub-2-second
              load times across 30+ production deliveries as proof of standard.
            </p>

            <div className="pt-4">
              <div className="flex items-center gap-4 text-sm">
                <span className="text-white/80">Currently</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <p className="text-white/80 mt-2">
                Founder & Lead Engineer @{" "}
                <span className="text-white font-semibold">Smartweblab</span>
              </p>
              <p className="text-white/80 text-sm">
                Engineering scalable web products and AI systems that help companies,
                businesses and startups grow, convert, and compete online.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="relative aspect-[3/4] overflow-hidden border border-white/20">
              <ImageWithFallback
                src={Profile}
                alt="Babatunde Ishau - Frontend Developer"
                className="w-full h-full object-cover transition-all duration-500"
              />
              {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" /> */}
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-white/20 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-white/20 -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />

            <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-white/20 p-4">
              <p className="font-mono text-sm text-white/60">Babatunde Ishau</p>
              <p className="text-xs text-white/40">Frontend Engineer</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border border-white/10 p-6 hover:border-white/30 transition-colors group"
            >
              <stat.icon className="h-8 w-8 text-white/40 mb-4 group-hover:text-white transition-colors" />
              <div className="text-3xl font-mono mb-1">{stat.value}</div>
              <div className="text-sm text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="border-l-2 border-white/20 pl-8">
          <h3 className="text-2xl font-mono mb-4">Development Philosophy</h3>
          <p className="text-white/60 leading-relaxed max-w-3xl">
            "Great software is built on three pillars: clean architecture,user-centric design, and continuous improvement.
            Every line of code should serve a purpose, every feature should solve a real problem,
            and every project should push the boundaries of what's possible."
          </p>
        </div>
      </div>
    </section>
  );
}
