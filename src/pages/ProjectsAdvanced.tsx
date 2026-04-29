import type { ReactElement } from 'react';
import ProjectCard from '../components/ProjectCard';
import LevelBadge from '../components/LevelBadge';
import { advancedProjects } from '../data/projects/advancedProjects';

const ProjectsAdvanced = (): ReactElement => (
  <div className="projects-page">
    <div className="page-header">
      <div className="container">
        <LevelBadge level="advanced" size="lg" />
        <h1>고급 프로젝트</h1>
        <p>멀티에이전트, MCP, Spec-Driven 개발에 도전하세요. 각 8-12시간 소요.</p>
      </div>
    </div>
    <div className="container">
      <div className="projects-grid">
        {advancedProjects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  </div>
);

export default ProjectsAdvanced;
