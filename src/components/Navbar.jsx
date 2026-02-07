import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="" className="flex items-center gap-2 group">
            <div className="relative">
              <Terminal className="h-6 w-6 text-white" />
              <div className="absolute inset-0 bg-white/20 blur-xl group-hover:bg-white/30 transition-all" />
            </div>
            <span className="text-xl font-mono tracking-tight">Babatunde</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            {/* <Button
              onClick={() => scrollToSection("#contact")}
              className="ml-4 bg-white text-black hover:bg-white/90 rounded-none"
            >
              Let's Talk
            </Button> */}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10 bg-black/30 backdrop-blur-md rounded-b-lg space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                {item.label}
              </button>
            ))}
            {/* <Button
              onClick={() => scrollToSection("#contact")}
              className="w-full mt-4 bg-white text-black hover:bg-white/90 rounded-none"
            >
              Let's Talk
            </Button> */}
          </div>
        )}

      </div>
    </nav>
  );
}
