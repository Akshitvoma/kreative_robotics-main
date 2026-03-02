import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
// import { useProjects } from "@/hooks/use-projects"; // No longer needed
import { motion } from "framer-motion";

export default function Projects() {
  // Replace backend hook with static empty data for frontend-only
  const projects = []; // No projects available from backend
  const isLoading = false; // Data is immediately available (empty)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-24 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Student <span className="text-primary">Showcase</span>
          </motion.h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Amazing innovations built by our students. From autonomous rovers to smart home systems.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="glass-card aspect-[4/3] animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.length === 0 ? (
                <p className="col-span-full text-center text-muted-foreground">No projects to display.</p>
            ) : (
                projects?.map((project, idx) => (
                    <ProjectCard key={project.id} project={project} index={idx} />
                ))
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
