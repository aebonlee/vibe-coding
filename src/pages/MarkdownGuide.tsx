import { useState, type ReactElement } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import CodeBlock from '../components/CodeBlock';
import { useProgress } from '../contexts/ProgressContext';
import { useAuth } from '../contexts/AuthContext';
import { markdownChapters } from '../data/markdownData';
import { md } from '../utils/markdown';

const MarkdownGuide = (): ReactElement => {
  const [activeId, setActiveId] = useState(markdownChapters[0]?.id || '');
  const { isCompleted, toggleComplete, getProgressPercent } = useProgress();
  const { isLoggedIn } = useAuth();

  const activeChapter = markdownChapters.find(c => c.id === activeId) || markdownChapters[0];
  const chapterIds = markdownChapters.map(c => c.id);
  const progressPercent = getProgressPercent('markdown', chapterIds);

  const sidebarItems = markdownChapters.map(c => ({
    id: c.id,
    title: c.title,
    completed: isCompleted('markdown', c.id),
  }));

  return (
    <div className="curriculum-page">
      <div className="curriculum-header">
        <div className="container">
          <h1>마크다운 가이드</h1>
          <p>AI 프롬프트와 개발 문서에 필수인 마크다운 문법을 마스터하세요.</p>
        </div>
      </div>
      <SidebarLayout
        title="마크다운 챕터"
        items={sidebarItems}
        activeId={activeId}
        onSelect={setActiveId}
        progressPercent={progressPercent}
      >
        {activeChapter && (
          <div className="topic-content">
            <h2>{activeChapter.title}</h2>
            <p className="topic-description">{activeChapter.description}</p>
            <div className="topic-text" dangerouslySetInnerHTML={{ __html: md(activeChapter.content) }} />

            {activeChapter.examples.map((ex, i) => (
              <div key={i} className="markdown-example">
                <h4>{ex.title}</h4>
                <div className="markdown-split">
                  <div className="markdown-input">
                    <h5>마크다운</h5>
                    <CodeBlock code={ex.markdown} language="markdown" />
                  </div>
                  <div className="markdown-output">
                    <h5>결과</h5>
                    <div className="markdown-rendered" dangerouslySetInnerHTML={{ __html: ex.rendered || '' }} />
                  </div>
                </div>
              </div>
            ))}

            {isLoggedIn && (
              <div className="topic-complete-action">
                <button
                  className={`btn ${isCompleted('markdown', activeChapter.id) ? 'btn-completed' : 'btn-primary'}`}
                  onClick={() => toggleComplete('markdown', activeChapter.id)}
                >
                  {isCompleted('markdown', activeChapter.id) ? '✓ 학습 완료' : '학습 완료 표시'}
                </button>
              </div>
            )}
          </div>
        )}
      </SidebarLayout>
    </div>
  );
};

export default MarkdownGuide;
