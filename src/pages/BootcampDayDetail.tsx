import { type ReactElement } from 'react';
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

  const currentDay = bootcampDays.find(d => d.day === dayNum);
  const prevDay = bootcampDays.find(d => d.day === dayNum - 1);
  const nextDay = bootcampDays.find(d => d.day === dayNum + 1);

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

      <div className="container">
        {/* 학습 콘텐츠 */}
        {currentDay.contents.length > 0 && (
          <div className="bootcamp-detail-content">
            {currentDay.contents.map((content, idx) => (
              <div key={content.id || idx} className="topic-section">
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
            ))}
          </div>
        )}

        {/* 실습 체크리스트 */}
        <div className="bootcamp-detail-tasks">
          <h3>실습 내용</h3>
          <ul>
            {currentDay.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>

        {/* 산출물 */}
        <div className="bootcamp-detail-deliverable">
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
  );
};

export default BootcampDayDetail;
