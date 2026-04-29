import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';
import type { ProjectData } from '../types';
import LevelBadge from './LevelBadge';

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard = ({ project }: ProjectCardProps): ReactElement => {
  return (
    <Link to={`/projects/${project.level}/${project.slug}`} className="project-card">
      <div className="project-card-header">
        <LevelBadge level={project.level} size="sm" />
        <span className="project-card-duration">{project.duration}</span>
      </div>
      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-desc">{project.description}</p>
      <div className="project-card-tech">
        {project.techStack.map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-card-footer">
        <span className="project-card-steps">{project.steps.length}단계</span>
        <span className="project-card-arrow">&rarr;</span>
      </div>
    </Link>
  );
};

export default ProjectCard;
