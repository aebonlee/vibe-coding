import { useState, useEffect, useRef, useCallback, type ReactElement } from 'react';
import { useParams, Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock';
import { useProgress } from '../contexts/ProgressContext';
import { useAuth } from '../contexts/AuthContext';
import { bootcampDays } from '../data/bootcampData';
import { md } from '../utils/markdown';

const getToolTagClass = (tool: string): string => {
  const lower = tool.toLowerCase();
  if (lower.includes('lovable')) return 'tool-tag-lovable';
  if (lower.includes('bolt')) return 'tool-tag-bolt';
  if (lower.includes('v0')) return 'tool-tag-v0';
  if (lower.includes('cursor')) return 'tool-tag-cursor';
  if (lower.includes('windsurf')) return 'tool-tag-windsurf';
  if (lower.includes('claude')) return 'tool-tag-claude';
  if (lower.includes('github') || lower.includes('copilot')) return 'tool-tag-github';
  if (lower.includes('supabase')) return 'tool-tag-supabase';
  if (lower.includes('배포') || lower.includes('deploy') || lower.includes('gh-pages')) return 'tool-tag-deploy';
  if (lower.includes('react')) return 'tool-tag-react';
  return '';
};

const weekLabels: Record<number, string> = {
  1: '입문: 개념 + 첫 앱',
  2: 'v0 + Cursor 기본/심화',
  3: '풀스택 + Claude Code',
  4: 'CLAUDE.md/Skills/Hooks + 배포',
};

const BootcampDayDetail = (): ReactElement => {
  const { day: dayParam } = useParams<{ day: string }>();
  const dayNum = Number(dayParam);
  const { isCompleted, toggleComplete } = useProgress();
  const { isLoggedIn } = useAuth();
  const [activeSection, setActiveSection] = useState('');
  const [tocOpen, setTocOpen] = useState(false);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  const currentDay = bootcampDays.find(d => d.day === dayNum);
  const prevDay = bootcampDays.find(d => d.day === dayNum - 1);
  const nextDay = bootcampDays.find(d => d.day === dayNum + 1);

  // Build section list for TOC
  const tocItems: { id: string; title: string }[] = [];
  if (currentDay) {
    currentDay.contents.forEach((content, idx) => {
      tocItems.push({ id: content.id || `section-${idx}`, title: content.title });
    });
    tocItems.push({ id: 'section-tasks', title: '실습 내용' });
    tocItems.push({ id: 'section-deliverable', title: '산출물' });
  }

  // IntersectionObserver for scroll spy
  useEffect(() => {
    if (!currentDay) return;
    const refs = sectionRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    refs.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [currentDay, dayNum]);

  // Reset state on day change
  useEffect(() => {
    setActiveSection('');
    setTocOpen(false);
    sectionRefs.current.clear();
  }, [dayNum]);

  const registerRef = useCallback((id: string, el: HTMLElement | null) => {
    if (el) {
      sectionRefs.current.set(id, el);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current.get(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      setTocOpen(false);
    }
  };

  if (!currentDay) {
    return (
      <div className="bootcamp-detail-page">
        <div className="container">
          <div className="bootcamp-detail-empty">
            <h2>Day를 찾을 수 없습니다</h2>
            <p>올바른 Day 번호를 확인해주세요.</p>
            <Link to="/bootcamp" className="btn btn-primary">부트캠프 목록으로</Link>
          </div>
        </div>
      </div>
    );
  }

  const contentId = `bootcamp-day-${currentDay.day}`;
  const completed = isCompleted('bootcamp', contentId);

  return (
    <div className="bootcamp-detail-page">
      {/* 페이지 헤더 */}
      <div className="bootcamp-detail-header">
        <div className="container">
          <div className="bootcamp-detail-badges">
            <span className="bootcamp-day-number">Day {currentDay.day}</span>
            <span className="bootcamp-detail-week">Week {currentDay.week}: {weekLabels[currentDay.week]}</span>
          </div>
          <h1>{currentDay.title}</h1>
          <p className="bootcamp-detail-desc">{currentDay.description}</p>
          <div className="bootcamp-detail-tools">
            {currentDay.tools.map((tool, i) => (
              <span key={i} className={`tech-tag ${getToolTagClass(tool)}`}>{tool}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 사이드바 + 콘텐츠 레이아웃 */}
      <div className="bootcamp-detail-body">
        {/* 모바일 목차 토글 */}
        <button className="bootcamp-toc-mobile-toggle" onClick={() => setTocOpen(!tocOpen)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          목차
        </button>

        {/* 왼쪽 TOC 사이드바 */}
        <aside className={`bootcamp-toc ${tocOpen ? 'open' : ''}`}>
          <div className="bootcamp-toc-header">
            <h3>목차</h3>
          </div>
          <nav className="bootcamp-toc-nav">
            {tocItems.map((item) => (
              <button
                key={item.id}
                className={`bootcamp-toc-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="bootcamp-toc-dot" />
                <span className="bootcamp-toc-title">{item.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* 오른쪽 콘텐츠 */}
        <div className="bootcamp-detail-main">
          {/* 학습 콘텐츠 */}
          {currentDay.contents.length > 0 && (
            <div className="bootcamp-detail-content">
              {currentDay.contents.map((content, idx) => {
                const sectionId = content.id || `section-${idx}`;
                return (
                  <div
                    key={sectionId}
                    id={sectionId}
                    ref={(el) => registerRef(sectionId, el)}
                    className="topic-section"
                  >
                    <h3>{content.title}</h3>
                    {content.description && (
                      <p className="topic-description">{content.description}</p>
                    )}
                    <div className="topic-text" dangerouslySetInnerHTML={{ __html: md(content.content) }} />
                    {content.keyPoints && content.keyPoints.length > 0 && (
                      <div className="key-points">
                        <h4>핵심 포인트</h4>
                        <ul>
                          {content.keyPoints.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {content.codeExamples && content.codeExamples.map((ex, i) => (
                      <CodeBlock key={i} code={ex.code} language={ex.language} title={ex.title} />
                    ))}
                  </div>
                );
              })}
            </div>
          )}

          {/* 실습 체크리스트 */}
          <div
            id="section-tasks"
            ref={(el) => registerRef('section-tasks', el)}
            className="bootcamp-detail-tasks"
          >
            <h3>실습 내용</h3>
            <ul>
              {currentDay.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>

          {/* 산출물 */}
          <div
            id="section-deliverable"
            ref={(el) => registerRef('section-deliverable', el)}
            className="bootcamp-detail-deliverable"
          >
            <h3>산출물</h3>
            <p>{currentDay.deliverable}</p>
          </div>

          {/* 완료 표시 */}
          {isLoggedIn && (
            <div className="bootcamp-detail-complete">
              <button
                className={`btn ${completed ? 'btn-completed' : 'btn-primary'}`}
                onClick={() => toggleComplete('bootcamp', contentId)}
              >
                {completed ? '✓ 학습 완료' : '학습 완료 표시'}
              </button>
            </div>
          )}

          {/* 하단 네비게이션 */}
          <div className="bootcamp-day-nav">
            {prevDay ? (
              <Link to={`/bootcamp/day/${prevDay.day}`} className="bootcamp-nav-btn prev">
                <span className="bootcamp-nav-label">이전</span>
                <span className="bootcamp-nav-title">Day {prevDay.day}: {prevDay.title}</span>
              </Link>
            ) : <div />}
            <Link to="/bootcamp" className="bootcamp-nav-list-btn">목록으로</Link>
            {nextDay ? (
              <Link to={`/bootcamp/day/${nextDay.day}`} className="bootcamp-nav-btn next">
                <span className="bootcamp-nav-label">다음</span>
                <span className="bootcamp-nav-title">Day {nextDay.day}: {nextDay.title}</span>
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootcampDayDetail;
