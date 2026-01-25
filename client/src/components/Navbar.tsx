import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MegaDropdown } from "./MegaDropdown";
import { AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProgramDropdownVisible, setProgramDropdownVisible] = useState(false);
  const [location] = useLocation();

  const openTimeout = useRef<number | null>(null);
  const closeTimeout = useRef<number | null>(null);

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

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    openTimeout.current = window.setTimeout(() => {
      setProgramDropdownVisible(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (openTimeout.current) clearTimeout(openTimeout.current);
    closeTimeout.current = window.setTimeout(() => {
      setProgramDropdownVisible(false);
    }, 300);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
                <img src="/KR.jpeg" alt="Kreative Robotics Logo" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight">
                KREATIVE <span className="text-primary">ROBOTICS</span>
                </span>
                <span className="text-xs text-foreground/80 -mt-1 leading-relaxed">Obotz Warangal</span>
            </div>
            </Link>

            {/* Left-aligned Desktop Nav */}
            <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => {
                const isActive = location === link.href || (link.href === "/programs" && location.startsWith("/programs"));
                
                return link.name === "Program" ? (
                <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div
                    className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer",
                        isProgramDropdownVisible || isActive ? "bg-primary/10 text-primary" : "text-foreground/70 hover:text-primary"
                    )}
                    >
                    {link.name}
                    </div>
                    <AnimatePresence>
                    {isProgramDropdownVisible && <MegaDropdown />}
                    </AnimatePresence>
                </div>
                ) : (
                <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
                        isActive ? "bg-primary/10 text-primary" : "text-foreground/70 hover:text-primary"
                    )}
                >
                    {link.name}
                </Link>
                );
            })}
            </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link href="/contact">
            <button className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]">
              Enroll Now
            </button>
          </Link>
        </div>


        {/* Mobile Toggle */}
        <div className="md:hidden">
            <button
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border/50 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-base font-medium p-2 rounded-md hover:bg-primary/10 leading-relaxed",
                location === link.href ? "text-primary" : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full mt-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm">
              Enroll Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
