import { useState, useEffect, useRef, useCallback, type ReactElement } from 'react';
import { useParams, Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock';
import LevelBadge from '../components/LevelBadge';
import { useProgress } from '../contexts/ProgressContext';
import { useAuth } from '../contexts/AuthContext';
import { md } from '../utils/markdown';
import { beginnerProjects } from '../data/projects/beginnerProjects';
import { intermediateProjects } from '../data/projects/intermediateProjects';
import { advancedProjects } from '../data/projects/advancedProjects';
import type { ProjectData } from '../types';

const allProjects: ProjectData[] = [...beginnerProjects, ...intermediateProjects, ...advancedProjects];

const ProjectDetail = (): ReactElement => {
  const { slug } = useParams<{ level: string; slug: string }>();
  const project = allProjects.find(p => p.slug === slug);
  const [activeStep, setActiveStep] = useState(0);
  const { isCompleted, toggleComplete } = useProgress();
  const { isLoggedIn } = useAuth();
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrolling = useRef(false);

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    if (isScrolling.current) return;
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const idx = Number(entry.target.getAttribute('data-step-index'));
        if (!isNaN(idx)) setActiveStep(idx);
      }
    }
  }, []);

  useEffect(() => {
    if (!project) return;
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    });
    stepRefs.current.forEach(el => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [project, handleIntersect]);

  const scrollToStep = (index: number) => {
    const el = stepRefs.current[index];
    if (!el) return;
    isScrolling.current = true;
    setActiveStep(index);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => { isScrolling.current = false; }, 800);
  };

  if (!project) {
    return (
      <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h2>프로젝트를 찾을 수 없습니다</h2>
        <Link to="/projects">프로젝트 목록으로</Link>
      </div>
    );
  }

  const progressId = `project-${project.id}`;

  return (
    <div className="project-detail-page">
      <div className="page-header">
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
            <LevelBadge level={project.level} />
            <span className="project-card-duration">{project.duration}</span>
          </div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="project-card-tech" style={{ marginTop: '1rem' }}>
            {project.techStack.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
          </div>
        </div>
      </div>

      <div className="container">
        {project.diagram && (
          <div className="project-diagram">
            <h3>아키텍처 / 설계 흐름</h3>
            <div className="project-diagram-svg" dangerouslySetInnerHTML={{ __html: project.diagram }} />
          </div>
        )}

        <div className="project-detail-layout">
          <aside className="project-steps-nav">
            <h3>단계 ({project.steps.length})</h3>
            {project.steps.map((s, i) => (
              <button
                key={i}
                className={`step-nav-item ${activeStep === i ? 'active' : ''}`}
                onClick={() => scrollToStep(i)}
              >
                <span className="step-number">{s.step}</span>
                <span className="step-title">{s.title}</span>
              </button>
            ))}
          </aside>

          <div className="project-step-content">
            {project.steps.map((step, i) => (
              <div
                key={i}
                ref={el => { stepRefs.current[i] = el; }}
                data-step-index={i}
                className="project-step-section"
                id={`step-${i}`}
              >
                <div className="step-header">
                  <span className="step-badge">Step {step.step} / {project.steps.length}</span>
                  <h2>{step.title}</h2>
                  <p className="topic-description">{step.description}</p>
                </div>
                <div className="topic-text" dangerouslySetInnerHTML={{ __html: md(step.content) }} />

                {step.tips && step.tips.length > 0 && (
                  <div className="key-points">
                    <h4>팁</h4>
                    <ul>{step.tips.map((tip, j) => <li key={j}>{tip}</li>)}</ul>
                  </div>
                )}

                {step.codeExamples && step.codeExamples.map((ex, j) => (
                  <CodeBlock key={j} code={ex.code} language={ex.language} title={ex.title} />
                ))}
              </div>
            ))}

            {isLoggedIn && (
              <div className="topic-complete-action" style={{ marginTop: '2rem' }}>
                <button
                  className={`btn ${isCompleted('project', progressId) ? 'btn-completed' : 'btn-primary'}`}
                  onClick={() => toggleComplete('project', progressId)}
                >
                  {isCompleted('project', progressId) ? '✓ 프로젝트 완료' : '프로젝트 완료 표시'}
                </button>
              </div>
            )}
          </div>
        </div>

        {project.outcomes.length > 0 && (
          <div className="project-outcomes">
            <h3>학습 성과</h3>
            <ul>{project.outcomes.map((o, i) => <li key={i}>{o}</li>)}</ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
