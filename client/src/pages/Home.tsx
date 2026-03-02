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
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
                Future Ready Skills
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
                Master the Art of <span className="text-gradient">Robotics</span>
              </h1>
              <p className="text-foreground/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Join the next generation of innovators. Hands-on project based learning in Robotics, and IoT, designed for all ages.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/contact">
                  <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.6)] hover:-translate-y-1">
                    Enroll Now
                  </button>
                </Link>

              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative"
            >
              {/* Unsplash abstract tech image */}
              {/* robotics tech abstract blue futuristic */}
              <div className="relative aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary/50 rounded-[3rem] rotate-6 opacity-20 blur-xl" />
                <img 
                  src="/robot.png" 
                  alt="Futuristic Robot" 
                  className="relative z-10 w-full h-full object-cover rounded-[2.5rem] border border-white/10 shadow-2xl"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -left-8 z-20 bg-card/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-white">100+</p>
                      <p className="text-xs text-white">Students Certified</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* 7-Level Program Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary mb-2">Comprehensive Curriculum</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Kreative <span className="text-primary">Robotics</span></h2>
            <p className="text-lg text-gray-400 mt-2">7-Level Program</p>
            <Link href="/program/overview" className="absolute top-0 right-0">
              <button className="w-20 h-20 rounded-full border-2 border-primary text-primary flex items-center justify-center text-xs font-bold uppercase hover:bg-primary hover:text-white transition-colors">
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
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-center justify-between py-6 border-b border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer px-4"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-sm font-semibold text-gray-400 w-16">{course.level}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-200 group-hover:text-white transition-colors">{course.name}</h3>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-500 group-hover:text-primary transition-colors -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kreative Robotics Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why <span className="text-primary">Kreative Robotics</span></h2>
            <p className="text-lg text-foreground/80">It Develops In-Demand Skills in Children</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-1/2 flex justify-center items-center">
              {/* Placeholder for images */}
              <div className="w-full h-64 bg-primary/10 rounded-lg flex items-center justify-center text-foreground/50">
                Image Placeholder
              </div>
            </div>
            <div className="lg:w-1/2 max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Mechanics</AccordionTrigger>
                  <AccordionContent>
                    Mechanics has a direct impact on fine motor skills and hand-eye coordination of children, while enhancing their cause and effect reasoning capabilities. Small machines and robots foster curiosity and a sense of exploration.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Electronics</AccordionTrigger>
                  <AccordionContent>
                    Studies have revealed that a curriculum having electronics enhances literacy capabilities in kids. It improves learning skills, logical thinking and memory retention power in children.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Algorithm</AccordionTrigger>
                  <AccordionContent>
                    When children understand the process of developing an algorithm, it helps them lay a strong foundation of logical thinking and problem-solving mindset. Children also enhance cross-disciplinary skills.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Coding / Programming</AccordionTrigger>
                  <AccordionContent>
                    Children who code are usually also good in academics. Coding for kids improves their math and writing skills, while instilling valuable skills in life, which eventually will help in future professional jobs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>IoT Systems</AccordionTrigger>
                  <AccordionContent>
                    Connect devices to the cloud and build smart homes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Start your journey in robotics today. Join thousands of students learning by doing.
          </p>
          <Link href="/contact">
            <button className="px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all hover:shadow-lg shadow-primary/25 hover:-translate-y-1">
              Start Learning Now
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
