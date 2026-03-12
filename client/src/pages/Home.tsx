import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-[60px] md:blur-[100px] translate-y-1/3 -translate-x-1/3" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 text-center lg:text-left order-2 lg:order-1"
            >
              <div className="inline-block mb-4 px-3 md:px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-sm font-semibold tracking-wide uppercase">
                Future Ready Skills
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
                Where Creativity Meets <span className="text-gradient">Robotics</span>
              </h1>
              <p className="text-foreground/80 text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Join the next generation of innovators. Hands-on project based learning in Robotics, and IoT, designed for all ages.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.6)] hover:-translate-y-1 active:scale-95">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative order-1 lg:order-2 w-full max-w-[320px] sm:max-w-[450px] lg:max-w-none mx-auto lg:mx-0"
            >
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary/50 rounded-3xl md:rounded-[3rem] rotate-6 opacity-20 blur-xl" />
                <img
                  src="/robot.png"
                  alt="Futuristic Robot"
                  className="relative z-10 w-full h-full object-cover rounded-3xl md:rounded-[2.5rem] border border-white/10 shadow-2xl"
                />

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 z-20 bg-card/80 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 shadow-xl"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-base md:text-lg text-white">300+</p>
                      <p className="text-[10px] md:text-xs text-white">Students Certified</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* 7-Level Program Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 text-center md:text-left">
            <div className="relative">
              <p className="text-xs md:text-sm uppercase tracking-widest text-primary mb-2">Comprehensive Curriculum</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white flex items-center justify-center md:justify-start gap-4 flex-wrap">
                Kreative 
                <img src="/ROBO.png" alt="Robo Mascot" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                <span className="text-primary">Robotics</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 mt-2">7-Level Program</p>
            </div>
            <Link href="/program/overview">
              <button className="mx-auto md:mx-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary text-primary flex items-center justify-center text-[10px] md:text-xs font-bold uppercase hover:bg-primary hover:text-white transition-all active:scale-95 shrink-0">
                More Info
              </button>
            </Link>
          </div>

          <div className="flex flex-col">
            {[
              { level: "Level 1", name: "Funtronix", path: "/level/funtronix" },
              { level: "Level 2", name: "Robotrix", path: "/level/robotrix" },
              { level: "Level 3", name: "Solarix", path: "/level/solarix" },
              { level: "Level 4", name: "RoboVi", path: "/level/robovi" },
              { level: "Level 5", name: "C-Robo", path: "/level/c-robo" },
              { level: "Level 6", name: "Embetrix", path: "/level/embetrix" },
              { level: "Level 7", name: "WalkO'Botz", path: "/level/walkobotz" },
            ].map((course, idx) => (
              <Link key={idx} href={course.path}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group flex items-center justify-between py-4 md:py-6 border-b border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer px-2 md:px-4"
                >
                  <div className="flex items-center gap-4 md:gap-10">
                    <span className="text-xs md:text-sm font-semibold text-gray-400 w-12 md:w-16">{course.level}</span>
                    <h3 className="text-xl md:text-3xl font-bold text-gray-200 group-hover:text-white transition-colors tracking-tight">{course.name}</h3>
                  </div>
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-500 group-hover:text-primary transition-all md:-translate-x-4 md:group-hover:translate-x-0 opacity-100 md:opacity-0 md:group-hover:opacity-100" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kreative Robotics Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Why <span className="text-primary">Kreative Robotics</span></h2>
            <p className="text-base md:text-lg text-foreground/80">It Develops In-Demand Skills in Children</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center lg:items-stretch">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative aspect-video lg:aspect-auto lg:h-full w-full rounded-2xl overflow-hidden flex items-center justify-center border border-primary/20 shadow-2xl min-h-[300px] md:min-h-[400px]">
                <img src="/STEM.png" alt="STEM Education" className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 max-w-2xl lg:max-w-none">
              <Accordion type="single" collapsible className="w-full space-y-3">
                {[
                  { title: "Mechanics", content: "Mechanics has a direct impact on fine motor skills and hand-eye coordination of children, while enhancing their cause and effect reasoning capabilities. Small machines and robots foster curiosity and a sense of exploration." },
                  { title: "Electronics", content: "Studies have revealed that a curriculum having electronics enhances literacy capabilities in kids. It improves learning skills, logical thinking and memory retention power in children." },
                  { title: "Algorithm", content: "When children understand the process of developing an algorithm, it helps them lay a strong foundation of logical thinking and problem-solving mindset. Children also enhance cross-disciplinary skills." },
                  { title: "Coding / Programming", content: "Children who code are usually also good in academics. Coding for kids improves their math and writing skills, while instilling valuable skills in life, which eventually will help in future professional jobs." },
                  { title: "IoT Systems", content: "Connect devices to the cloud and build smart homes." },
                ].map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border border-border/50 rounded-xl px-4 md:px-6 bg-card/10 overflow-hidden">
                    <AccordionTrigger className="text-lg md:text-xl font-bold py-4 hover:text-primary transition-colors no-underline hover:no-underline">{item.title}</AccordionTrigger>
                    <AccordionContent className="text-foreground/80 leading-relaxed text-sm md:text-base pb-4">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/5 blur-[120px] rounded-full" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Ready to Build the <span className="text-gradient">Future?</span></h2>
            <p className="text-base md:text-lg lg:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Start your journey in robotics today. Join mapping out thousands of students learning by doing.
            </p>
            <Link href="/contact" className="inline-block">
              <button className="px-10 py-5 rounded-xl bg-primary text-primary-foreground font-bold text-lg md:text-xl hover:bg-primary/90 transition-all hover:shadow-2xl shadow-primary/25 hover:-translate-y-1 active:scale-95">
                Start Learning Now
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
