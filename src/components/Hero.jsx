import { ArrowRight, Github, Linkedin, Mail, Code } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 pt-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 justify-center mt-15 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <Code className="h-4 w-4 text-white" />
              <span className="text-sm text-white/80">HI THERE, I'M BABATUNDE</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-6"
          >
            <h1 className="text-6xl md:text-8xl lg:text-8x tracking-tighter mb-4 font-extrabold font-sans"> I build fast, functional, <br/> and beautiful web applications. </h1>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-sm md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
              I specialize in turning ideas into fast, scalable, and revenue-ready digital
              products, from high-performance React and Next.js frontend interfaces to
              intelligent AI-powered backends built with Python and FastAPI. Whether
              operating as a solo engineer or embedded within a remote cross-functional
              team, I bring a detail-oriented, user-focused execution standard to every
              product I ship.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-none px-8 group cursor-pointer"
            >
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToProjects}
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-none px-8 cursor-pointer"
            >
              View Work
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/BabatundeDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <div className="w-px h-5 bg-white/20" />
            <a
              href="https://linkedin.com/in/babatunde-ishau-95ab94359"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <div className="w-px h-5 bg-white/20" />
            <a
              href="mailto:ishaubabatunde49@gmail.com"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
              <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
