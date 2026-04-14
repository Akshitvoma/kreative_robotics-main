
import { useParams } from 'wouter';
import { projectGalleryData } from '../lib/project-gallery-data';
import { ProjectGalleryCard } from '../components/ProjectGalleryCard';
import NotFound from '@/pages/not-found';

export function ProjectGallery() {
  const params = useParams();
  const levelParam = params.level;
  const levelNumber = levelParam ? parseInt(levelParam, 10) : NaN;

  if (isNaN(levelNumber) || levelNumber < 1 || levelNumber > 7) {
    return <NotFound />;
  }

  const levelData = projectGalleryData.find(l => l.level === levelNumber);

  if (!levelData) {
    return <NotFound />;
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Level {levelData.level}: <span className="text-primary">{levelData.name}</span>
          </h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            A showcase of innovative projects built by our talented students.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 md:gap-12 space-y-8 md:space-y-12">
          {levelData.projects.map((project, index) => (
            <ProjectGalleryCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
