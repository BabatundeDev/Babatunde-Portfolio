import { useState } from "react";
import { ExternalLink, Github, ArrowRight, X } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./image/ImageWithFallback";

import Flickster from "../assets/projects/flickster.png";
import Football from "../assets/projects/football-live.png";
import Smartweblab from "../assets/projects/smartweblab.png";
import Smartdwell from "../assets/projects/smartdwell.png";
import Ride from "../assets/projects/ride.png"
import Pod from "../assets/projects/pod-tshirt.png";
import Autovista from "../assets/projects/autovista.png";
import Abiconnect from "../assets/projects/abiconnect.png";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      year: "2023",
      title: "Smartweblab — Digital Agency Website",
      description:
        "Smartwebsitelab is a professional web design and development agency site showcasing services, expertise, and brand identity. Built with responsive design and client-focused features (e-commerce, branding, SEO), it functions as both a personal brand hub and a lead-generation platform for potential clients.",
      image: Smartweblab,
      tags: ["React", "Javascript", "TailwindCSS", "Firebase"],
      metrics: ["100+ Leads Generated via Contact Form", "4.8/5 Client Satisfaction Rating", "Mobile-First Design Across 3+ Breakpoints"],
      features: [
        "Service Pages: Clear breakdown of service offerings — web design, business websites, e-commerce, SEO, maintenance, and branding.",
        "Responsive Design: Optimized for mobile, tablet, and desktop to give clients a seamless browsing experience.",
        "Client Testimonials: Displays social proof and success stories to build trust.",
        "About & Values Section: Communicates Smartweblab’s philosophy and my vision as the founder.",
        "Call‑to‑Action (CTA): Prominent “Start Your Project” CTA encourages visitors to convert into leads.",
        "SEO & Performance Optimization: Built to be fast and discoverable, aligning with best practices for visibility.",
        "Branding & Strategy: Designs and implements digital solutions tailored to each client’s goals and business model.",
        "Maintenance / Support Offering: Demonstrates continuous commitment to client success with post-launch support."
      ],
      github: "https://www.smartweblab.com.ng/",
      live: "https://www.smartweblab.com.ng/"
    },
    {
      year: "2026",
      title: "AbiConnect — Digital Marketing Agency Website",
      description:
        "AbiConnect is a sleek, modern website for a digital marketing agency specializing in social media management, content creation, and online advertising. The site features a clean design, responsive layout, and sections that highlight services, case studies, and client testimonials. It serves as both a portfolio and lead generation tool for potential clients looking to enhance their online presence.",
      image: Abiconnect,
      tags: ["React", "Javascript", "TailwindCSS", "Vercel"],
      metrics: ["100+ Leads Generated via Contact Form", "4.8/5 Client Satisfaction Rating", "Mobile-First Design Across 3+ Breakpoints"],
      features: [
        "Service Pages: Clear breakdown of service offerings — social media management, content creation, online advertising, and strategy consulting.",
        "Responsive Design: Optimized for mobile, tablet, and desktop to give clients a seamless browsing experience."
      ],
      github: "https://github.com/BabatundeDev/Abiconnect-Digital",
      live: "https://abiconnect-digital.vercel.app/"
    },
    {
      year: "2024",
      title: "Flickster - Movie & TV Platform (TMDB API)",
      description:
        "Flickster is a visually rich, React-based movie discovery platform built on the TMDB API. It provides users with a seamless browsing experience to explore popular, trending, and top-rated titles. The app emphasizes performance, clean UI design, and fluid interactions making movie exploration both engaging and intuitive.",
      image: Flickster,
      tags: ["React", "Javascript", "CSS", "TMDB API", "Vercel"],
      metrics: ["99.9% Uptime", "70+ Users", "100ms Response Time"],
      features: [
        "TMDB API Integration: Fetches real-time data for movies and TV shows trending, top-rated, upcoming, and more.",
        "Dynamic Search & Filter: Users can search by title or filter by genre to quickly find relevant content.",
        "Responsive Design: Works smoothly across devices (mobile, tablet, desktop) with consistent layout and user experience.",
        "Animated Carousels / Sliders: Genre-based movie carousels let users swipe through movie posters elegantly.",
        "Detailed Movie Views: Clicking a movie reveals essential details like overview, release date, rating, and poster.",
        "Theme Toggle: Potential for dark/light mode for better UX.",
        "Performance Optimizations: Lazy loading and efficient rendering to keep the UI snappy."
      ],
      github: "https://github.com/BabatundeDev/Flickster",
      live: "https://flickster.vercel.app/"
    },
    {
      year: "2024",
      title: "Football Live Match App",
      description:
        "This is a live match platform built in React that integrates with a football API to display real‑time data of ongoing and upcoming matches. The UI is clean and minimal, using dynamic cards to visualize teams, match times, and broadcast placeholders. The application is optimized for both performance and responsiveness, making it accessible from desktop and mobile devices.",
      image: Football,
      tags: ["React", "Javascript", "Bootstrap", "Football Data API", "Vercel"],
      metrics: ["99.9% Uptime", "100+ Live Matches Displayed", "100ms Response Time"],
      features: [
        "Real-time API Integration: Fetches live football match data, upcoming fixtures, and team information via a football data API.",
        "Match Cards: Displays live and scheduled matches in an organized, card-based layout, showing team names, times, and status.",
        "Responsive Design: Fully responsive grid adapts to desktop, tablet, and mobile views for a cohesive user experience.",
        "Interactive UI: Hover and click effects to highlight match details; state-based rendering for live vs upcoming games.",
        "Placeholder Video / Watch Button: Includes a design placeholder for match stream or replay.",
        "Performance Optimization: Efficient data fetching and rendering to handle live updates without lag.",
        "Error Handling: Manages API errors gracefully, showing fallback UI when data is unavailable."
      ],
      github: "https://github.com/BabatundeDev/Football-Live",
      live: "https://football-live-omega.vercel.app/"
    },
    {
      year: "2024",
      title: "SmartDwell — Real Estate Listing Platform",
      description:
        "SmartDwell is a real estate web application designed to showcase property listings in a user-friendly, modern interface. It allows users to browse homes, view property details, and connect with listing agents. With a clean design and intuitive navigation, SmartDwell is crafted to deliver a seamless property search experience on both desktop and mobile.",
      image: Smartdwell,
      tags: ["React", "Bootstrap", "Firebase", "Vercel"],
      metrics: ["500+ Property Views / Month", "200ms Page Load Time", "90% Mobile Responsiveness Score"],
      features: [
        "Property Listings: Displays real estates with relevant information: images, price, location, and key property specs.",
        "Advanced Search Filters: Users can filter listings by criteria like price, location, and property type.",
        "Responsive Design: Adapts to different screen sizes, from mobile to desktop, ensuring usability everywhere.",
        "Lead Capture / Contact Forms: Visitors can send inquiries, request more information, or schedule a viewing.",
        "Save Favorite Listings: Users can bookmark properties they like for later review.",
        "Property Detail Pages: Detailed pages contain photos, property description, and features.",
      ],
      // github: "",
      live: "https://smartdwell.vercel.app/"
    },
    {
      year: "2025",
      title: "RideX — Ride-Sharing Web Platform",
      description:
        "RideX is a modern ride-sharing web app built to simulate on-demand transportation functionality. Users can request rides, input pickup and drop-off locations, and follow their trip through a clean, map-driven interface. The app is designed to be responsive, intuitive, and focused on performance, giving users a seamless experience across devices.",
      image: Ride,
      tags: ["React", "Javascript", "TailwindCSS", "Vercel"],
      metrics: ["Ride Requests Simulated", "200ms Response Time", "90% Mobile Compatibility"],
      features: [
        "Responsive Design: Works both on mobile and desktop with a clean and accessible layout.",
        "Modern card-based layout for clear organization and easy scanning.",
        "Clean, intuitive ride-booking interface optimized for quick user actions",
        "Smooth state transitions and micro-interactions for a polished feel.",
        "Performance Optimization: Fast load times and smooth interactions for a better user experience.",
        "Clean UI/UX: Focuses on simplicity and ease of use with intuitive navigation and controls."
      ],
      github: "https://github.com/BabatundeDev/RideX",
      live: "https://babatunde-ridex.vercel.app/"
    },
    {
      year: "2024",
      title: "Customizable POD T-Shirt Store",
      description:
        "A single-page web application built with Lit where users can design and customize t-shirts in real time. This store lets customers upload images, add text, switch layouts, and preview their designs on a 3D shirt model before placing an order. The platform is optimized for a smooth, interactive design experience and reflects a real-world print-on-demand workflow.",
      image: Pod,
      tags: ["Lit", "3D library", "CSS", "Vercel"],
      metrics: ["150ms Design Render Time", "95% Mobile Compatibility", "100+ Unique Designs Saved / Exported"],
      features: [
        "Live 3D Shirt Preview: Users can see their design on a 3D shirt model as they customize.",
        "Image & Text Upload: Customers can upload images and overlay text, with control over size and placement.",
        "Multiple Layout Templates: Predefined layout templates for image + text combos help users design faster.",
        "Responsive Design: The application adapts seamlessly across devices, ensuring the design canvas works on desktop and mobile.",
        "Interactive UI: Smooth transitions, hover states, and drag support (if implemented) for a refined design flow.",
        "Export / Download Preview: Users can save or screenshot a preview of their custom t-shirt design.",
        "Print-Ready Output: Generates design-ready files (or formatted previews) for print‑on‑demand ordering (mocked or real)."
      ],
      github: "https://github.com/BabatundeDev/Pod-Tshirt-Store",
      live: "https://pod-tshirt-store.vercel.app/"
    },
    {
      year: "2025",
      title: "AutoVista — Automotive Marketplace Web App",
      description:
        "AutoVista is a sleek, modern automotive marketplace web app designed to showcase vehicle inventory with an intuitive UI. It provides detailed listings, high‑quality visuals, and a responsive layout to help users browse cars effortlessly. The app is built with performance, usability, and strong visual presentation in mind ideal for dealership-style or auto listing platforms.",
      image: Autovista,
      tags: ["React", "Javascript", "TailwindCSS", "Vercel"],
      metrics: ["90%+ Responsive Compatibility Score", "2s Page Load for Vehicle Pages", "50+ Inquiries Leads Generated (Demo Mode)"],
      features: [
        "Comprehensive vehicle listings with images, make, model, year, price, and details.",
        "Search and filter options (e.g. by brand, model, price range) to help users find the right car quickly.",
        "Detailed vehicle detail pages with full specs and high-resolution photos.",
        "Responsive design across mobile, tablet, and desktop for a smooth user experience.",
        "Professional visual layout: high-quality photos + clean typography for trust and clarity.",
        "Call-to-action buttons for inquiries or test-drive bookings."
      ],
      // github: "",
      live: "https://auto-vista-eight.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-white/40 font-mono text-sm">03</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h2 className="text-5xl md:text-6xl font-mono tracking-tight">PROJECTS</h2>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div
                className={`relative group cursor-pointer ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                onClick={() => setSelectedProject(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-white/20 bg-black">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 border border-white flex items-center justify-center">
                        <ArrowRight className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-white text-sm font-mono">View Details</p>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 w-12 h-12 border border-white/40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <span className="font-mono text-white/60 text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-white/10 -z-10 group-hover:border-white/30 transition-colors" />
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-white/40 font-mono text-sm">{project.year}</span>
                    <div className="h-px w-8 bg-white/20" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-mono mb-4 leading-tight">{project.title}</h3>
                  <p className="text-white/60 leading-relaxed text-lg">{project.description}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/10">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-white/80 text-sm mb-1">{metric.split(" ")[0]}</div>
                      <div className="text-white/40 text-xs">{metric.split(" ").slice(1).join(" ")}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 border border-white/20 text-xs font-mono text-white/60 hover:border-white/40 hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    onClick={() => setSelectedProject(index)}
                    className="bg-white text-black hover:bg-white/90 rounded-none flex-1"
                  >
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-white/20 text-white hover:bg-white hover:text-black rounded-none"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-white/20 text-white hover:bg-white hover:text-black rounded-none"
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-black border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-black border-b border-white/10 p-6 flex items-start justify-between z-10">
              <div>
                <div className="text-white/40 font-mono text-sm mb-2">
                  {projects[selectedProject].year}
                </div>
                <h3 className="text-3xl font-mono">{projects[selectedProject].title}</h3>
              </div>
              <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-white/10 transition-colors">
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div className="aspect-[16/9] overflow-hidden border border-white/20">
                <ImageWithFallback
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-xl font-mono mb-4">Overview</h4>
                <p className="text-white/60 leading-relaxed">{projects[selectedProject].description}</p>
              </div>

              <div>
                <h4 className="text-xl font-mono mb-4">Key Features</h4>
                <div className="space-y-3">
                  {projects[selectedProject].features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 border-l-2 border-white/20 pl-4 py-2 hover:border-white/60 transition-colors"
                    >
                      <span className="text-white/60">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-mono mb-4">Technology Stack</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {projects[selectedProject].tags.map((tag, i) => (
                    <div key={i} className="border border-white/20 p-3 text-center">
                      <span className="font-mono text-sm text-white/80">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-mono mb-4">Project Impact</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {projects[selectedProject].metrics.map((metric, i) => (
                    <div key={i} className="border border-white/20 p-6 text-center">
                      <div className="text-2xl font-mono mb-2">{metric.split(" ")[0]}</div>
                      <div className="text-white/40 text-sm">{metric.split(" ").slice(1).join(" ")}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-white/10">
                <Button asChild className="bg-white text-black hover:bg-white/90 rounded-none flex-1">
                  <a href={projects[selectedProject].live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Live Site
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-white/20 text-white hover:bg-white hover:text-black rounded-none flex-1"
                >
                  <a href={projects[selectedProject].github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}