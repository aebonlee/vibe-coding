import type { ReactElement } from 'react';
import ProjectCard from '../components/ProjectCard';
import LevelBadge from '../components/LevelBadge';
import { intermediateProjects } from '../data/projects/intermediateProjects';

const ProjectsIntermediate = (): ReactElement => (
  <div className="projects-page">
    <div className="page-header">
      <div className="container">
        <LevelBadge level="intermediate" size="lg" />
        <h1>중급 프로젝트</h1>
        <p>풀스택 개발과 실시간 기능을 구현합니다. 각 5-6시간 소요.</p>
      </div>
    </div>
    <div className="container">
      <div className="projects-grid">
        {intermediateProjects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  </div>
);

export default ProjectsIntermediate;
