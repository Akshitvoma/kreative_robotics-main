import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
// import { useCourses } from "@/hooks/use-courses"; // No longer needed
import { motion } from "framer-motion";

export default function Courses() {
  // Replace backend hook with static empty data for frontend-only
  const courses = []; // No courses available from backend
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
            Our <span className="text-primary">Curriculum</span>
          </motion.h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive courses designed to take you from basics to advanced robotics engineering.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="glass-card h-[400px] animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses?.length === 0 ? (
                <p className="col-span-full text-center text-muted-foreground">No courses to display.</p>
            ) : (
                courses?.map((course, idx) => (
                    <CourseCard key={course.id} course={course} index={idx} />
                ))
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
