
import { motion } from "framer-motion";
import { PlayCircle } from 'lucide-react';

export type ProjectGalleryItem = {
  title: string;
  imageUrl: string;
  videoUrl?: string;
};

export function ProjectGalleryCard({ project, index = 0 }: { project: ProjectGalleryItem; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg aspect-video">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {project.videoUrl && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <PlayCircle className="w-16 h-16 text-white/80" />
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold mt-4 text-center">{project.title}</h3>
    </motion.div>
  );
}
