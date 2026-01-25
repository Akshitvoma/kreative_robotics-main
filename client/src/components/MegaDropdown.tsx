import { useState } from "react";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const levels = [
  { name: "Level 1: Funtronix", href: "/level/funtronix" },
  { name: "Level 2: RoboTrix", href: "/level/robotrix" },
  { name: "Level 3: Solarix", href: "/level/solarix" },
  { name: "Level 4: RoboVi", href: "/level/robovi" },
  { name: "Level 5: C-Robo", href: "/level/c-robo" },
  { name: "Level 6: Embetrix", href: "/level/embetrix" },
  { name: "Level 7: WalkO’Botz", href: "/level/walkobotz" },
];

const projectGallery = [
  { name: "Level 1: Funtronix", href: "/projects/level/1" },
  { name: "Level 2: RoboTrix", href: "/projects/level/2" },
  { name: "Level 3: Solarix", href: "/projects/level/3" },
  { name: "Level 4: RoboVi", href: "/projects/level/4" },
  { name: "Level 5: C-Robo", href: "/projects/level/5" },
  { name: "Level 6: Embetrix", href: "/projects/level/6" },
  { name: "Level 7: WalkO’Botz", href: "/projects/level/7" },
];

const Submenu = ({ items }: { items: { name: string; href: string }[] }) => (
    <ul className="space-y-1">
        {items.map((item) => (
        <li key={item.name}>
            <Link
            href={item.href}
            className="block px-3 py-2 text-sm transition-colors text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-md"
            >
            {item.name}
            </Link>
        </li>
        ))}
    </ul>
  );

export function MegaDropdown() {
  const [activeSubmenu, setActiveSubmenu] = useState<"levels" | "gallery" | null>(null);

  const leftPanelItemClass = "w-full flex items-center justify-between px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 text-left";

  return (
    <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute top-full left-0 mt-0"
    >
      <div className={cn(
          "bg-background rounded-xl shadow-lg grid overflow-hidden border border-border/10 transition-all duration-300",
          activeSubmenu ? "grid-cols-[minmax(220px,auto)_minmax(220px,auto)]" : "grid-cols-[minmax(220px,auto)]"
        )}>
        {/* Left Panel */}
        <div className="p-3">
          <ul className="space-y-1">
            <li onMouseEnter={() => setActiveSubmenu(null)}>
                <Link href="/program/overview" className={cn(leftPanelItemClass, "text-foreground/70 hover:bg-primary/5 hover:text-primary", !activeSubmenu && "bg-primary/10 text-primary")}>
                    Overview
                </Link>
            </li>
            <li onMouseEnter={() => setActiveSubmenu("levels")}>
              <button className={cn(leftPanelItemClass, "text-foreground/70 hover:bg-primary/5 hover:text-primary", activeSubmenu === "levels" && "bg-primary/10 text-primary")}>
                <span>Levels</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </li>
            <li onMouseEnter={() => setActiveSubmenu(null)}>
                <Link href="/program/benefits" className={cn(leftPanelItemClass, "text-foreground/70 hover:bg-primary/5 hover:text-primary")}>Benefits</Link>
            </li>
            <li onMouseEnter={() => setActiveSubmenu(null)}>
                <Link href="/program/robotics-kit" className={cn(leftPanelItemClass, "text-foreground/70 hover:bg-primary/5 hover:text-primary")}>Robotics Kit</Link>
            </li>
            <li onMouseEnter={() => setActiveSubmenu("gallery")}>
            <button className={cn(leftPanelItemClass, "text-foreground/70 hover:bg-primary/5 hover:text-primary", activeSubmenu === "gallery" && "bg-primary/10 text-primary")}>
                <span>Project Gallery</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </li>
          </ul>
        </div>

        {/* Right Panel */}
        <AnimatePresence mode="wait">
            {activeSubmenu && (
                <motion.div
                    key={activeSubmenu}
                    initial={{ opacity: 0, x: 5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -5 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="p-3 border-l border-border/10"
                >
                    {activeSubmenu === 'levels' && <Submenu items={levels} />}
                    {activeSubmenu === 'gallery' && <Submenu items={projectGallery} />}
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
