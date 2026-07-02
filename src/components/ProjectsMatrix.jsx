import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

export default function ProjectsMatrix() {
  const featuredProjects = projectsData.filter(project => project.featured);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {featuredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          tags={project.tags} // Pass array downstream
        />
      ))}
    </div>
  );
}