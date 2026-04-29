import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';
import ProjectCard from '../components/ProjectCard';
import { beginnerProjects } from '../data/projects/beginnerProjects';
import { intermediateProjects } from '../data/projects/intermediateProjects';
import { advancedProjects } from '../data/projects/advancedProjects';

const allProjects = [...beginnerProjects, ...intermediateProjects, ...advancedProjects];

const ProjectsOverview = (): ReactElement => {
  return (
    <div className="projects-page">
      <div className="page-header">
        <div className="container">
          <h1>실전 프로젝트</h1>
          <p>9개의 프로젝트로 바이브코딩 실력을 쌓으세요. 초급부터 고급까지 단계별로 진행합니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="project-level-nav">
          <Link to="/projects/beginner" className="level-nav-item level-beginner">초급 (3)</Link>
          <Link to="/projects/intermediate" className="level-nav-item level-intermediate">중급 (3)</Link>
          <Link to="/projects/advanced" className="level-nav-item level-advanced">고급 (3)</Link>
        </div>
        <div className="projects-grid">
          {allProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsOverview;
