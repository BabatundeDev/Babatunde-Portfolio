import { useState } from "react";
import { ExternalLink, Github, ArrowRight, X } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./image/ImageWithFallback";

import SupplyGuard from "../assets/projects/supplyguard.png";
import Moviehub from "../assets/projects/moviehub.png";
import Cineprime from "../assets/projects/cineprime.png"
import Veloura from "../assets/projects/veloura-freight.png";
import Smartdwell from "../assets/projects/smartdwell.png";
import Football from "../assets/projects/football-live.png";
import Abiconnect from "../assets/projects/abiconnect.png";
import Ride from "../assets/projects/ride.png"
import Pod from "../assets/projects/pod-tshirt.png";


export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      year: "2026",
      title: "SupplyGuard AI Dashboard",
      description: "SupplyGuard AI is a full-stack, AI-powered supply chain risk intelligence platform built for the automotive industry. The platform proactively detects, predicts, and mitigates supply chain disruptions by scoring supplier risk in real time using machine learning, recommending alternate sourcing strategies, and forecasting inventory demand, giving automotive OEMs the early warning intelligence they need to prevent production shutdowns before they happen.",
      image: SupplyGuard,
      tags: ["React 18", "Recharts", "Custom CSS variables", "Vercel", "Python FastAPI", "10 REST endpoints", "Render"],
      metrics: ["R²0.982 Risk model accuracy", "50 Suppliers tracked across 8 countries", "73% Disruption detection speed", "$2.1 Million Estimated annual savings per OEM", "40% Inventory efficiency improvement", "10 Live API endpoints in production"],
      features: [
        "AI Risk Radar — A GradientBoosting machine learning model scores every supplier from 0 to 100 using six features: country risk index, geopolitical score, lead time, supplier rating, price volatility, and capacity utilisation. Suppliers are ranked in real time so the most critical risks surface immediately.",

        "Alternate Sourcing Engine — When a supplier is flagged as high risk, the platform fires a live API call to recommend the lowest-risk backup suppliers for the same material category, quantifying exactly how many risk points are saved by switching.",

        "Demand Forecasting — A Holt-Winters Exponential Smoothing model projects 12 weeks of inventory demand with 80% confidence bands across Semiconductors, Battery Metals, and Steel — giving procurement teams a data-driven reorder schedule.",

        "Live Disruption Alerts — A real-time feed aggregates geopolitical events and AI-detected supplier-level disruptions, auto-refreshing every 60 seconds with severity classification across Critical, High, Medium, and Low.",

        "Interactive Dashboard — A dark-mode React dashboard with four screens — Overview, Supplier Intelligence, Demand Forecast, and Disruption Alerts — with sortable tables, material filters, loading states, error handling, and a modal-based alternate sourcing interface."
      ],
      github: "https://github.com/BabatundeDev/SupplyGuard",
      live: "http://supplyguard-dashboard.vercel.app/"
    },
    {
      year: "2026",
      title: "MovieHub - Movie Discovery Dashboard (TMDB API)",
      description:
        "MovieHub is a modern movie discovery dashboard built with React and TypeScript, designed to help users explore movies from The Movie Database (TMDB). It features a clean dark UI, seamless API integration, and a fully responsive layout optimized for both desktop and mobile.",
      image: Moviehub,
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "Axios", "React Router", "TMDB API", "Vercel"],
      metrics: ["99.9% Uptime", "Sub-100ms Response Time", "Mobile Responsive"],
      features: [
        "Movie Discovery: Browse movies across multiple curated sections including Now Playing, Popular, Top Rated, and Upcoming. Each section displays a responsive card grid with poster images, ratings, titles, and release years for quick at-a-glance exploration.",

        "Search & Filters: A debounced search input prevents excessive API calls while delivering instant results. Users can filter movies by genre, release year, rating, and sort order, with a one-click clear filters option and intelligent routing between search and discover endpoints.",

        "Movie Details Page: Clicking any movie card navigates to a dedicated details page featuring the movie backdrop, poster, title, rating, runtime, language, tagline, full overview, genres, director, top cast, budget, revenue, and a similar movies section.",

        "Favorites Management: Users can add or remove movies from a personal favorites list directly from the details page using a heart toggle button, with visual state feedback between saved and unsaved states.",

        "Responsive Sidebar Navigation: A persistent sidebar on desktop collapses into a slide-in drawer on mobile, triggered by a hamburger menu with a backdrop overlay and smooth transition animations.",

        "Async State Management: TanStack Query handles all data fetching with intelligent caching, background refetching, and a 5-minute stale time. Every data-fetching surface includes animated skeleton loaders, error states with messaging, and empty state fallbacks.",

        "Clean Architecture: Strict TypeScript throughout with zero use of any. API calls are fully abstracted in a centralized Axios client, consumed via typed hooks — keeping components clean and the data layer independently maintainable."
      ],
      github: "https://github.com/BabatundeDev/moviehub",
      live: "https://moviehub-dashboard.vercel.app/"
    },
    {
      year: "2025",
      title: "CinePrime - Movie & TV Platform (TMDB API)",
      description:
        "CinePrime is a polished movie discovery web app built with React and TypeScript, designed to help users explore and curate movies from The Movie Database (TMDB). It combines modern UI/UX, performance optimizations, and convenient personalization features to deliver an engaging browsing experience.",
      image: Cineprime,
      tags: ["React", "Typescript", "Javascript", "Eslint", "CSS", "TMDB API", "Vercel"],
      metrics: ["99.9% Uptime", "70+ Users", "100ms Response Time"],
      features: [
        "Movie Discovery Sliders: This feature allows users to browse movies across multiple categories like popular, top-rated, now-playing, and upcoming films. It uses horizontal scroll layouts for intuitive navigation, making it easy to discover new content without overwhelming the interface",

        "Search Functionality: Users can perform live searches for movies by title, with a debounced input that prevents excessive API calls. Results appear instantly in a dedicated slider, providing quick access to specific films while handling empty results gracefully.",

        "Movie Details Modal: Clicking on any movie card opens a detailed modal that displays comprehensive information including high-resolution posters, title, release year, rating, plot overview, and vote statistics. The modal is fully accessible with keyboard navigation and includes options to close via button or outside click.",

        "Favorites Management: Users can add or remove movies from a personal favorites list using a heart-shaped toggle in the modal. Favorites are stored in the browser's localStorage, ensuring persistence across sessions, and a dedicated slider shows favorited movies when available.",

        "Theme Toggle: The app supports switching between light and dark themes, with the user's preference saved in localStorage. This enhances usability by adapting to different viewing environments and personal preferences.",

        "User Experience Enhancements: The app includes skeleton loaders for movie cards and spinners for search operations to improve perceived performance. It features robust error handling with retry options for API failures, responsive design that adapts to various screen sizes, and accessibility features like ARIA labels and focus management.",

        "Performance Optimizations: Lazy loading and efficient rendering to keep the UI snappy."
      ],
      github: "https://github.com/BabatundeDev/CinePrime",
      live: "https://cineprime-movie.vercel.app/"
    },
    {
      year: "2026",
      title: "Veloura Freight Logistics",
      description:
        "Veloura is a modern freight logistics web application designed to streamline the shipping process for businesses. It offers features like shipment tracking, route optimization, and real-time updates. The platform is built with a clean, intuitive interface and is optimized for performance and responsiveness across devices.",
      image: Veloura,
      tags: ["React", "Typescript", "TailwindCSS", "Vercel"],
      metrics: ["100+ Shipments Tracked", "95% On-Time Delivery Rate (Simulated)", "99% Mobile Responsiveness Score"],
      features: [
        "Shipment Tracking: Real-time tracking of shipments with status updates and location information.",
        "Freight Cost Calculator: Provides cost estimates based on distance, weight, and delivery speed.",
        "Route Optimization: Intelligent route planning to minimize delivery times and costs.",
        "User Dashboard: Centralized dashboard for users to manage shipments, view history, and access support.",
        "Responsive Design: Optimized for mobile, tablet, and desktop to provide a seamless user experience.",
        "Performance Optimization: Fast load times and smooth interactions for a better user experience.",
        "Clean UI/UX: Focuses on simplicity and ease of use with intuitive navigation and controls."
      ],
      github: "https://github.com/BabatundeDev/Veloura-Freight",
      live: "https://veloura-freight.vercel.app/"
    },
    {
      year: "2024",
      title: "SmartDwell — Real Estate Listing Platform",
      description:
        "SmartDwell is a real estate web application designed to showcase property listings in a user-friendly, modern interface. It allows users to browse homes, view property details, and connect with listing agents. With a clean design and intuitive navigation, SmartDwell is crafted to deliver a seamless property search experience on both desktop and mobile.",
      image: Smartdwell,
      tags: ["HTML", "Bootstrap", "CSS", "JavaScript", "Vercel"],
      metrics: ["500+ Property Views / Month", "200ms Page Load Time", "90% Mobile Responsiveness Score"],
      features: [
        "Property Listings: Displays real estates with relevant information: images, price, location, and key property specs.",
        "Advanced Search Filters: Users can filter listings by criteria like price, location, and property type.",
        "Responsive Design: Adapts to different screen sizes, from mobile to desktop, ensuring usability everywhere.",
        "Lead Capture / Contact Forms: Visitors can send inquiries, request more information, or schedule a viewing.",
        "Save Favorite Listings: Users can bookmark properties they like for later review.",
        "Property Detail Pages: Detailed pages contain photos, property description, and features.",
      ],
      github: "https://github.com/BabatundeDev/SmartDwell",
      live: "https://smartdwell.vercel.app/"
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
      github: "https://github.com/BabatundeDev/omoteshobisola",
      live: "https://omoteshobisola.vercel.app/"
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
          <h2 className="text-5xl md:text-6xl font-mono tracking-tight font-extrabold">projects</h2>
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