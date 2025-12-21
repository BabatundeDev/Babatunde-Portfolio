import { useState } from "react";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const categories = {
    frontend: {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "Javascript", level: 85 },
        { name: "Typescript", level: 80 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Bootstrap", level: 95 },
        { name: "State Management", level: 80 },
        { name: "UI/UX", level: 80 },
        { name: "Web Performance", level: 88 },
        { name: "Responsive Design", level: 95 }
      ]
    },
    backend: {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 80 },
        { name: "REST API integration", level: 80 },
        { name: "Cloud deployments", level: 90 }
      ]
    },
    tools: {
      title: "Tools & Practices",
      skills: [
        { name: "Git / GitHub", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "System Design", level: 85 },
        { name: "Code editors and developer consoles", level: 85 },
        { name: "Figma", level: 70 },
        { name: "Performance Optimization", level: 80 }
      ]
    },
    soft: {
      title: "Soft Skills",
      skills: [
        { name: "Problem solving and critical thinking", level: 80 },
        { name: "Self learning and adaptability", level: 95 },
        { name: "Team collaboration and effective communication", level: 85 },
        { name: "Analytical thinking and attention to detail", level: 83 },
        { name: "Time management and project prioritization", level: 88 }
      ]
    }
  };

  return (
    <section id="skills" className="py-32 px-4 relative">
      {/* Decorative line */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto max-w-6xl">
        {/* Section label */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-white/40 font-mono text-sm">02</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h2 className="text-5xl md:text-6xl font-mono tracking-tight">SKILLS</h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 border transition-all ${activeCategory === key
                ? "border-white bg-white text-black"
                : "border-white/20 text-white/60 hover:border-white/40 hover:text-white"
                }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills display */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {categories[activeCategory].skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white">{skill.name}</span>
                <span className="text-white/40 text-sm font-mono">{skill.level}%</span>
              </div>

              <div className="h-1 bg-white/10 relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-white transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    transitionDelay: `${index * 50}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack highlight */}
        <div className="mt-24 border border-white/10 p-8">
          <h3 className="text-xl font-mono mb-6">Current Tech Stack</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 justify- content-between">
            <div className="space-y-2">
              <div className="text-white/40 text-sm">Frontend</div>
              <div className="text-white font-mono">React + Javascript+ Typescript</div>
            </div>

            <div className="space-y-2">
              <div className="text-white/40 text-sm">Styling & UI</div>
              <div className="text-white font-mono">CSS + Tailwind CSS + Bootstrap</div>
            </div>

            <div className="space-y-2">
              <div className="text-white/40 text-sm">Backend</div>
              <div className="text-white font-mono">Node.js + Express + Firebase</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}