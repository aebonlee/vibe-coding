import { useState, type ReactElement } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import CodeBlock from '../components/CodeBlock';
import LevelBadge from '../components/LevelBadge';
import { useProgress } from '../contexts/ProgressContext';
import { useAuth } from '../contexts/AuthContext';
import { advancedTopics } from '../data/curriculum/advancedData';
import { md } from '../utils/markdown';

const CurriculumAdvanced = (): ReactElement => {
  const [activeId, setActiveId] = useState(advancedTopics[0]?.id || '');
  const { isCompleted, toggleComplete, getProgressPercent } = useProgress();
  const { isLoggedIn } = useAuth();

  const activeTopic = advancedTopics.find(t => t.id === activeId) || advancedTopics[0];
  const topicIds = advancedTopics.map(t => t.id);
  const progressPercent = getProgressPercent('topic', topicIds.map(id => `advanced-${id}`));

  const sidebarItems = advancedTopics.map(t => ({
    id: t.id,
    title: t.title,
    completed: isCompleted('topic', `advanced-${t.id}`),
  }));

  return (
    <div className="curriculum-page">
      <div className="curriculum-header">
        <div className="container">
          <LevelBadge level="advanced" size="lg" />
          <h1>고급 커리큘럼</h1>
          <p>멀티에이전트, MCP, Spec-Driven 개발 등 전문가 수준의 AI 코딩을 학습합니다.</p>
        </div>
      </div>
      <SidebarLayout
        title="고급 토픽"
        items={sidebarItems}
        activeId={activeId}
        onSelect={setActiveId}
        progressPercent={progressPercent}
      >
        {activeTopic && (
          <div className="topic-content">
            <h2>{activeTopic.title}</h2>
            <p className="topic-description">{activeTopic.description}</p>

            {activeTopic.contents.map((content, idx) => (
              <div key={content.id || idx} className="topic-section">
                <h3>{content.title}</h3>
                <div className="topic-text" dangerouslySetInnerHTML={{ __html: md(content.content) }} />
                {content.keyPoints && content.keyPoints.length > 0 && (
                  <div className="key-points">
                    <h4>핵심 포인트</h4>
                    <ul>{content.keyPoints.map((point, i) => <li key={i}>{point}</li>)}</ul>
                  </div>
                )}
                {content.codeExamples && content.codeExamples.map((ex, i) => (
                  <CodeBlock key={i} code={ex.code} language={ex.language} title={ex.title} />
                ))}
              </div>
            ))}

            {isLoggedIn && (
              <div className="topic-complete-action">
                <button
                  className={`btn ${isCompleted('topic', `advanced-${activeTopic.id}`) ? 'btn-completed' : 'btn-primary'}`}
                  onClick={() => toggleComplete('topic', `advanced-${activeTopic.id}`)}
                >
                  {isCompleted('topic', `advanced-${activeTopic.id}`) ? '✓ 학습 완료' : '학습 완료 표시'}
                </button>
              </div>
            )}
          </div>
        )}
      </SidebarLayout>
    </div>
  );
};

export default CurriculumAdvanced;
