import { motion } from "framer-motion";

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  studentName: string;
}

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-all duration-300 flex flex-col justify-end p-6 backdrop-blur-sm group-hover:backdrop-blur-md">
        <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">
          {project.category}
        </span>
        <h3 className="text-lg font-bold text-foreground mb-1 tracking-wider leading-relaxed">{project.title}</h3>
        <p className="text-sm text-foreground/80 tracking-wider leading-relaxed">by {project.studentName}</p>
      </div>
    </motion.div>
  );
}
