import { useState } from "react";

const categories = {
  frontend: {
    title: "Frontend",
    note: "Interfaces people touch",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "HTML", level: 95},
      { name: "CSS", level: 99 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap", level: 95 },
      { name: "State Management", level: 80 },
      { name: "UI/UX", level: 80 },
      { name: "Web Performance", level: 88 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  backend: {
    title: "Backend",
    note: "Systems that hold it up",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 80 },
      { name: "Python", level: 70 },
      { name: "Database Management", level: 75 },
      { name: "REST API Integration", level: 80 },
      { name: "Cloud Deployments", level: 90 },
    ],
  },
  tools: {
    title: "Tools & Practices",
    note: "The daily kit",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name:  "Gitlab", level:90},
      { name: "AI Tools", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "System Design", level: 85 },
      { name: "Developer Consoles", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Performance Optimization", level: 80 },
    ],
  },
  soft: {
    title: "Soft Skills",
    note: "How the work gets done",
    skills: [
      { name: "Problem Solving", level: 80 },
      { name: "Self Learning", level: 95 },
      { name: "Team Collaboration", level: 85 },
      { name: "Analytical Thinking", level: 83 },
      { name: "Time Management", level: 88 },
    ],
  },
};

function ProficiencyRing({ level, size = 44 }) {
  const stroke = 3;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className="stroke-white/15"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className="stroke-white"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 900ms cubic-bezier(0.4, 0, 0.2, 1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-white">
        {level}
      </div>
    </div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const active = categories[activeCategory];

  return (
    <section id="skills" className="py-28 px-6 relative font-mono">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <div className="text-xs tracking-[0.2em] uppercase mb-3 text-white/40">
              Capabilities
            </div>
            <h2 className="text-5xl sm:text-6xl leading-none font-extrabold text-white">
              skills
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/40">
            A working set of tools and habits, grouped by where each one shows up.
          </p>
        </div>

        <div className="grid lg:grid-cols-[220px_1fr] gap-10">
          {/* Category rail */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {Object.entries(categories).map(([key, category]) => {
              const isActive = activeCategory === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`text-left px-4 py-3 rounded-lg transition-all cursor-pointer whitespace-nowrap lg:whitespace-normal shrink-0 border ${
                    isActive ? "border-white" : "bg-transparent border-white/15"
                  }`}
                >
                  <div className={`text-sm font-medium ${isActive ? "text-white" : "text-white/50"}`}>
                    {category.title}
                  </div>
                  <div className="hidden lg:block text-xs mt-1 text-white/30">
                    {category.note}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Skills grid */}
          <div>
            <div className="grid sm:grid-cols-2 gap-3" key={activeCategory}>
              {active.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 p-4 rounded-lg border border-white/10"
                  style={{
                    animation: `fadeUp 500ms ease-out both`,
                    animationDelay: `${index * 40}ms`,
                  }}
                >
                  <ProficiencyRing level={skill.level} />
                  <span className="text-sm text-white">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="mt-10 p-6 rounded-l border border-white/10">
              <div className="text-xs tracking-[0.15em] uppercase mb-5 text-white/40">
                Current stack
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-xs mb-1 text-white/30">Frontend</div>
                  <div className="text-sm text-white">React, Next.js, Javascript, TypeScript, HTML</div>
                </div>
                <div>
                  <div className="text-xs mb-1 text-white/30">Styling</div>
                  <div className="text-sm text-white">CSS, Tailwind CSS, Bootstrap</div>
                </div>
                <div>
                  <div className="text-xs mb-1 text-white/30">Backend</div>
                  <div className="text-sm text-white">Node.js, Express, Python, Firebase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Skills;