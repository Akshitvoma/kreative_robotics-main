import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { MegaDropdown } from "./MegaDropdown";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProgramDropdownVisible, setProgramDropdownVisible] = useState(false);
  const [mobileProgramOpen, setMobileProgramOpen] = useState(false);
  const [location] = useLocation();

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Program", href: "/programs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProgramDropdownVisible(false);
      }
    };

    if (isProgramDropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProgramDropdownVisible]);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-2xl"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer shrink-0">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
            <img src="/KR.png" alt="Kreative Robotics Logo" className="w-full h-full object-cover rounded-lg md:rounded-xl" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg md:text-xl tracking-tight leading-none text-foreground">
              KREATIVE <span className="text-primary">ROBOTICS</span>
            </span>
            <span className="text-[9px] md:text-[10px] text-foreground/60 tracking-wider titlecase font-medium mt-0.5 whitespace-nowrap">Obotz Warangal</span>
          </div>
        </Link>
        {/* Centered Desktop Nav */}
        <div className="hidden md:flex items-center justify-center flex-1 gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = location === link.href || (link.href === "/programs" && location.startsWith("/program"));

            return link.name === "Program" ? (
              <div
                key={link.name}
                className="relative group"
                ref={dropdownRef}
              >
                <button
                  onClick={() => setProgramDropdownVisible(!isProgramDropdownVisible)}
                  className={cn(
                    "px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 relative",
                    isProgramDropdownVisible || isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
                  )}
                >
                  {link.name}
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isProgramDropdownVisible && "rotate-180")} />
                  {(isProgramDropdownVisible || isActive) && (
                    <motion.div
                      layoutId="navTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </button>
                <AnimatePresence>
                  {isProgramDropdownVisible && <MegaDropdown />}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-semibold transition-all duration-300 relative",
                  isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Action Area */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          {/* CTA Button */}
          <div className="hidden sm:block">
            <Link href="/contact">
              <Button className="rounded-xl px-4 md:px-6 py-2 h-auto text-sm md:text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all border-none">
                Book a Free Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/5 text-primary active:scale-90 transition-transform"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-background/60 backdrop-blur-sm z-[-1]"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border/50 overflow-hidden flex flex-col shadow-2xl z-50"
            >
              <div className="p-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  link.name === "Program" ? (
                    <div key={link.name} className="flex flex-col">
                      <button
                        onClick={() => setMobileProgramOpen(!mobileProgramOpen)}
                        className={cn(
                          "text-base font-semibold p-3 rounded-xl transition-all flex items-center justify-between",
                          location.startsWith("/program") ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:bg-primary/10 hover:text-primary"
                        )}
                      >
                        {link.name}
                        <motion.div
                          animate={{ rotate: mobileProgramOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {mobileProgramOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex flex-col pl-4 mt-1 border-l-2 border-primary/20 ml-4 gap-1 overflow-hidden"
                          >
                            <Link href="/program/overview" onClick={() => setIsOpen(false)} className="p-3 text-sm text-foreground/60 hover:text-primary transition-colors">Overview</Link>
                            <Link href="/program/benefits" onClick={() => setIsOpen(false)} className="p-3 text-sm text-foreground/60 hover:text-primary transition-colors">Benefits</Link>
                            <Link href="/program/robotics-kit" onClick={() => setIsOpen(false)} className="p-3 text-sm text-foreground/60 hover:text-primary transition-colors">Robotics Kit</Link>
                            <Link href="/projects" onClick={() => setIsOpen(false)} className="p-3 text-sm text-foreground/60 hover:text-primary transition-colors">Project Gallery</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-base font-semibold p-3 rounded-xl transition-all leading-relaxed",
                        location === link.href ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:bg-primary/10 hover:text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                <div className="mt-4 pt-4 border-t border-border/50 sm:hidden">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full rounded-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground py-6 border-none text-lg">
                      Book a Free Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}