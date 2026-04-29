import type { ReactElement } from 'react';
import ProjectCard from '../components/ProjectCard';
import LevelBadge from '../components/LevelBadge';
import { beginnerProjects } from '../data/projects/beginnerProjects';

const ProjectsBeginner = (): ReactElement => (
  <div className="projects-page">
    <div className="page-header">
      <div className="container">
        <LevelBadge level="beginner" size="lg" />
        <h1>초급 프로젝트</h1>
        <p>AI 코딩 도구로 첫 번째 앱을 만들어보세요. 각 2-3시간이면 완성할 수 있습니다.</p>
      </div>
    </div>
    <div className="container">
      <div className="projects-grid">
        {beginnerProjects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  </div>
);

export default ProjectsBeginner;
