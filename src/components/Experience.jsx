import React from "react"
import { Building2, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      period: "May 2023 – Present",
      title: "Smartweblab — Freelance Web Agency",
      company: "Smartweblab",
      location: "Lagos, Nigeria (Remote)",
      description:
        "Delivered high-impact websites for business clients by orchestrating design, development, optimization, and deployment.",
      achievements: [
        "Delivered 20+ client websites with 100 percent mobile responsiveness and cross-browser stability",
        "Drove a 35 percent improvement in user engagement through structured UI/UX enhancements",
        "Managed complete development lifecycle including requirements, planning, build, QA, and deployment",
        "Implemented SEO and performance optimization strategies that enabled sub-2 second load times",
        "Strengthened brand presence for clients through modern, conversion-focused interfaces"
      ],
      stack: ["React", "Javascript", "Node.js", "Firebase", "TailwindCSS", "Bootstrap", "Responsive Design", "SEO", "Git", "UI/UX Optimization", "Performance Tuning", "Deployment", "Client Communication", "Project Management", "REST APIs"]
    },
    {
      period: "Aug 2025 – Oct 2025",
      title: "Frontend Developer Intern",
      company: "Nobel Learning PBC",
      location: "United States (Remote)",
      description:
        "Participated in a collaborative learning environment focused on web development, teamwork, and problem solving.",
      achievements: [
        "Completed technical sprints and delivered assignments consistently on schedule",
        "Strengthened debugging, version control, and presentation competencies",
        "Engaged in peer-to-peer code reviews, improving code quality and communication",
        "Participated in project-based learning aligned with modern development practices"
      ],
      stack: ["Web Design", "Basic of Internet Troubleshooting", "Pitch & Presentation", "Leardership Pratice", "Facilitation", "Collaboration", "Problem Solving", "Time Management", "Adaptability", "Version Control",
        "Communication Skills"
      ]
    },
    {
      period: "Sep 2025 – Present",
      title: "Community Manager Frontend and Backend Engineering Communities",
      company: "TechSynergy",
      location: "Lagos, Nigeria (Remote)",
      description:
        "As Community Manager for TechSynergy’s Frontend and Backend developer groups, I lead engagement, knowledge sharing, and collaboration across a growing technical community.",
      achievements: [
        "Facilitated weekly technical knowledge sharing sessions across frontend and backend tracks",
        "Coordinated and scheduled speakers to present on React, state management, backend systems, and tooling",
        "Drove community engagement and accountability through structured discussions and challenges",
        "Moderated conversations to ensure high signal technical discussions and inclusive participation",
        "Helped foster a consistent learning culture and peer to peer support environment"
      ],
      stack: ["Community Building & Engagement", "Technical Communication", "Pitch & Presentation", "Leardership Pratice", "Facilitation", "Collaboration", "Content & Knowledge Management","Communication Skills"
      ]
    },
    {
      period: "Oct 2023 – Present",
      title: "Frontend Developer",
      company: "Independent Projects",
      location: "Lagos, Nigeria (Remote)",
      description:
        "Executed end-to-end web applications for learning, experimentation, and real-world usage.",
      achievements: [
        "Achieved 100 percent deployment success rate across GitHub Pages and Vercel",
        "Integrated third-party APIs to power real-time and dynamic experiences",
        "Continually optimized interfaces, improving Lighthouse mobile scores from 70s to 100",
        "Delivered consistent results using mobile-first, scalable component architecture"
      ],
      stack: ["React", "Javascript", "TailwindCSS", "Bootstrap", "Node.js", "Firebase", "HTML5", "CSS3", "REST APIs", "Git", "Vercel", "GitHub Pages", "Performance Optimization", "Responsive Design", "Component-Based Architecture", "Generated Ai Tools"]
    }
  ]

  return (
    <section id="experience" className="py-32 px-4 relative">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-white/40 font-mono text-sm">04</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h2 className="text-5xl md:text-6xl font-mono tracking-tight">EXPERIENCE</h2>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-12 bottom-0 w-px bg-white/10 hidden lg:block" />
              )}

              <div className="grid lg:grid-cols-[200px,1fr] gap-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/40 font-mono text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="hidden lg:block w-3 h-3 border-2 border-white bg-black" />
                </div>

                <div className="border border-white/10 p-8 hover:border-white/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-mono mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-white/60">
                        <Building2 className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="text-white/40 text-sm mt-1">{exp.location}</div>
                    </div>
                  </div>

                  <p className="text-white/60 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-2 w-1 h-1 bg-white/40 rounded-full" />
                        <span className="text-white/60 text-sm leading-relaxed">{ach}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {exp.stack.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2 py-1 text-xs font-mono text-white/40 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 border border-white/10 p-8 text-center">
          <p className="text-white/60 mb-4">Want to see my detailed work history?</p>
          <a
            href="https://linkedin.com/in/babatunde-ishau-95ab94359"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
          >
            <span className="font-mono">View LinkedIn Profile</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}