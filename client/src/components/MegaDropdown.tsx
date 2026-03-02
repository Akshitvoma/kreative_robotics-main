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

const Submenu = ({ items, active }: { items: { name: string; href: string }[], active: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -10 }}
    className="bg-popover rounded-2xl shadow-2xl border border-primary/20 overflow-hidden min-w-[240px]"
  >
    <ul className="py-2">
      {items.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className="flex items-center px-4 py-3 text-sm transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-primary/10 group"
          >
            <span className="flex-1">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
);

export function MegaDropdown() {
  const [activeSubmenu, setActiveSubmenu] = useState<"levels" | "gallery" | null>(null);

  const leftPanelItemClass = "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left";

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-10 -mt-10 z-[100] pointer-events-auto flex items-start gap-4">
      {/* Main Panel */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="bg-popover rounded-2xl shadow-2xl border border-primary/20 w-[240px] overflow-hidden"
      >
        <ul className="py-2 px-2 flex flex-col gap-1">
          <li onMouseEnter={() => setActiveSubmenu(null)}>
            <Link href="/program/overview" className={cn(leftPanelItemClass, "text-muted-foreground hover:bg-primary/10 hover:text-foreground")}>
              Overview
            </Link>
          </li>
          <li onMouseEnter={() => setActiveSubmenu("levels")}>
            <button className={cn(leftPanelItemClass, activeSubmenu === "levels" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "text-muted-foreground hover:bg-primary/10 hover:text-foreground")}>
              <span>Levels</span>
              <ChevronRight className={cn("w-4 h-4 transition-transform", activeSubmenu === "levels" && "rotate-90")} />
            </button>
          </li>
          <li onMouseEnter={() => setActiveSubmenu(null)}>
            <Link href="/program/benefits" className={cn(leftPanelItemClass, "text-muted-foreground hover:bg-primary/10 hover:text-foreground")}>Benefits</Link>
          </li>
          <li onMouseEnter={() => setActiveSubmenu(null)}>
            <Link href="/program/robotics-kit" className={cn(leftPanelItemClass, "text-muted-foreground hover:bg-primary/10 hover:text-foreground")}>Robotics Kit</Link>
          </li>
          <li onMouseEnter={() => setActiveSubmenu("gallery")}>
            <button className={cn(leftPanelItemClass, activeSubmenu === "gallery" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "text-muted-foreground hover:bg-primary/10 hover:text-foreground")}>
              <span>Project Gallery</span>
              <ChevronRight className={cn("w-4 h-4 transition-transform", activeSubmenu === "gallery" && "rotate-90")} />
            </button>
          </li>
        </ul>
      </motion.div>

      {/* Sub Panel (Cascading) */}
      <AnimatePresence>
        {activeSubmenu && (activeSubmenu === 'levels' || activeSubmenu === 'gallery') && (
          <Submenu
            items={activeSubmenu === 'levels' ? levels : projectGallery}
            active={true}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
