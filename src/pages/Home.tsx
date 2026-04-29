import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import type { ReactElement } from 'react';

const Home = (): ReactElement => {
  const { t } = useLanguage();
  const { isLoggedIn } = useAuth();

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Vibe Coding Master</span>
            <h1 className="hero-title">{t('home.hero')}</h1>
            <p className="hero-subtitle">{t('home.heroSub')}</p>
            <div className="hero-actions">
              <Link to="/curriculum/beginner" className="btn btn-primary btn-lg">
                학습 시작하기
              </Link>
              {!isLoggedIn && (
                <Link to="/register" className="btn btn-outline btn-lg">
                  회원가입
                </Link>
              )}
            </div>
            <div className="hero-stats">
              <div className="stat"><span className="stat-number">22</span><span className="stat-label">커리큘럼 토픽</span></div>
              <div className="stat"><span className="stat-number">9</span><span className="stat-label">실전 프로젝트</span></div>
              <div className="stat"><span className="stat-number">28</span><span className="stat-label">일 부트캠프</span></div>
              <div className="stat"><span className="stat-number">13</span><span className="stat-label">AI 도구 비교</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">왜 바이브코딩 마스터인가?</h2>
          <div className="features-grid">
            <Link to="/curriculum/beginner" className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h3>{t('home.curriculum')}</h3>
              <p>{t('home.curriculumDesc')}</p>
              <span className="feature-link">초급부터 시작 &rarr;</span>
            </Link>

            <Link to="/projects" className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h3>{t('home.projects')}</h3>
              <p>{t('home.projectsDesc')}</p>
              <span className="feature-link">프로젝트 보기 &rarr;</span>
            </Link>

            <Link to="/bootcamp" className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3>{t('home.bootcamp')}</h3>
              <p>{t('home.bootcampDesc')}</p>
              <span className="feature-link">부트캠프 참여 &rarr;</span>
            </Link>

            <Link to="/tools" className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                  <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <h3>{t('home.tools')}</h3>
              <p>{t('home.toolsDesc')}</p>
              <span className="feature-link">도구 비교 보기 &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="roadmap-section">
        <div className="container">
          <h2 className="section-title">학습 로드맵</h2>
          <div className="roadmap">
            <div className="roadmap-step">
              <div className="roadmap-badge level-beginner">초급</div>
              <h3>입문 & 기초</h3>
              <p>AI 코딩 도구 이해, 프롬프트 작성, 첫 앱 만들기</p>
              <span>7개 토픽 + 3개 프로젝트</span>
            </div>
            <div className="roadmap-arrow">&rarr;</div>
            <div className="roadmap-step">
              <div className="roadmap-badge level-intermediate">중급</div>
              <h3>실전 & 심화</h3>
              <p>Cursor/Claude Code 활용, 풀스택 개발, 코드리뷰</p>
              <span>7개 토픽 + 3개 프로젝트</span>
            </div>
            <div className="roadmap-arrow">&rarr;</div>
            <div className="roadmap-step">
              <div className="roadmap-badge level-advanced">고급</div>
              <h3>마스터 & 자동화</h3>
              <p>멀티에이전트, MCP, Spec-Driven 개발</p>
              <span>8개 토픽 + 3개 프로젝트</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>지금 바로 시작하세요</h2>
          <p>무료로 모든 커리큘럼과 프로젝트 가이드를 이용할 수 있습니다.</p>
          <div className="hero-actions">
            <Link to="/curriculum/beginner" className="btn btn-primary btn-lg">
              초급부터 시작하기
            </Link>
            <Link to="/bootcamp" className="btn btn-outline btn-lg">
              28일 부트캠프
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
