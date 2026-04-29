import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

const About = (): ReactElement => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-header">
        <div className="container">
          <h1>바이브코딩 마스터 소개</h1>
          <p>AI와 함께 코딩하는 시대, 체계적으로 준비하세요</p>
        </div>
      </section>

      <div className="container">
        {/* 사이트 의도 */}
        <section className="about-section">
          <h2>왜 바이브코딩 마스터인가?</h2>
          <div className="about-text">
            <p>
              2025년, AI가 코드를 작성하는 시대가 열렸습니다. ChatGPT, Claude, Cursor, Lovable 같은 도구들이
              프로그래밍의 진입장벽을 크게 낮추었고, &ldquo;바이브코딩(Vibe Coding)&rdquo;이라는 새로운 개발 방식이
              등장했습니다.
            </p>
            <p>
              하지만 AI 도구를 단순히 사용하는 것과, <strong>전략적으로 활용해 프로덕션 수준의 결과물</strong>을
              만드는 것은 완전히 다른 이야기입니다. 바이브코딩 마스터는 이 차이를 메우기 위해 만들어졌습니다.
            </p>
          </div>
        </section>

        {/* 제공하는 것 */}
        <section className="about-section">
          <h2>무엇을 배울 수 있나요?</h2>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-card-icon">📚</div>
              <h3>체계적 커리큘럼</h3>
              <p>
                초급(마인드셋, 도구 이해)부터 중급(프롬프트 심화, 풀스택), 고급(멀티에이전트, Spec-Driven 개발)까지
                총 22개 토픽을 단계별로 학습합니다.
              </p>
              <Link to="/curriculum/beginner" className="btn-link">
                커리큘럼 보기 →
              </Link>
            </div>
            <div className="about-card">
              <div className="about-card-icon">🛠️</div>
              <h3>실전 프로젝트 9개</h3>
              <p>
                Todo 앱 같은 미니 프로젝트부터 풀스택 CRUD, 실시간 채팅, MCP 서버 구축까지
                난이도별 9개 프로젝트를 단계별 가이드와 함께 직접 만들어봅니다.
              </p>
              <Link to="/projects" className="btn-link">
                프로젝트 보기 →
              </Link>
            </div>
            <div className="about-card">
              <div className="about-card-icon">🔍</div>
              <h3>AI 코딩 도구 비교</h3>
              <p>
                Cursor, Windsurf, Claude Code, Lovable, Bolt.new, v0.dev, Kiro 등
                주요 AI 코딩 도구의 장단점과 적합한 사용 시나리오를 비교 분석합니다.
              </p>
              <Link to="/tools" className="btn-link">
                도구 비교 보기 →
              </Link>
            </div>
            <div className="about-card">
              <div className="about-card-icon">🏕️</div>
              <h3>28일 부트캠프</h3>
              <p>
                매일 하나의 미션을 수행하며 4주 만에 바이브코딩의 핵심을 체득합니다.
                Lovable부터 시작해 Cursor, Claude Code까지 모든 주요 도구를 경험합니다.
              </p>
              <Link to="/bootcamp" className="btn-link">
                부트캠프 보기 →
              </Link>
            </div>
            <div className="about-card">
              <div className="about-card-icon">📝</div>
              <h3>마크다운 가이드</h3>
              <p>
                AI에게 명확한 지시를 내리려면 마크다운이 필수입니다.
                12개 챕터로 마크다운 문법을 체계적으로 학습하고 실시간 프리뷰로 확인합니다.
              </p>
              <Link to="/markdown" className="btn-link">
                마크다운 가이드 →
              </Link>
            </div>
            <div className="about-card">
              <div className="about-card-icon">✅</div>
              <h3>자기진단 체크리스트</h3>
              <p>
                초급·중급·고급 각 단계별 핵심 역량 체크리스트로
                현재 자신의 바이브코딩 수준을 객관적으로 진단하고 다음 단계를 계획합니다.
              </p>
              <Link to="/checklist" className="btn-link">
                자기진단 하기 →
              </Link>
            </div>
          </div>
        </section>

        {/* 대상 */}
        <section className="about-section">
          <h2>이런 분들에게 추천합니다</h2>
          <div className="about-audience">
            <div className="audience-item">
              <strong>비개발자 / 기획자</strong>
              <span>AI 도구로 직접 프로토타입을 만들고 싶은 분</span>
            </div>
            <div className="audience-item">
              <strong>입문 개발자</strong>
              <span>AI를 활용해 개발 속도를 10배 높이고 싶은 분</span>
            </div>
            <div className="audience-item">
              <strong>현직 개발자</strong>
              <span>Cursor, Claude Code 같은 도구를 전략적으로 쓰고 싶은 분</span>
            </div>
            <div className="audience-item">
              <strong>창업가 / PM</strong>
              <span>아이디어를 직접 MVP로 구현하고 싶은 분</span>
            </div>
            <div className="audience-item">
              <strong>대학생 / 취준생</strong>
              <span>AI 코딩 역량을 체계적으로 쌓아 경쟁력을 높이고 싶은 분</span>
            </div>
            <div className="audience-item">
              <strong>교수 / 강사</strong>
              <span>바이브코딩을 교과목으로 가르치기 위한 참고 자료가 필요한 분</span>
            </div>
          </div>
        </section>

        {/* 운영 */}
        <section className="about-section">
          <h2>운영 정보</h2>
          <div className="about-text">
            <p>
              <strong>바이브코딩 마스터</strong>는 <strong>드림아이티비즈(DreamIT Biz)</strong>가 운영하는
              AI 코딩 교육 플랫폼입니다.
            </p>
            <p>
              DreamIT Biz는 80개 이상의 교육·비즈니스 웹사이트를 운영하며,
              AI·SW, 경영, 자격증, 취업 등 다양한 분야의 체계적인 학습 콘텐츠를 제공합니다.
            </p>
            <p>
              본 사이트의 모든 콘텐츠는 실무 경험을 바탕으로 직접 작성되었으며,
              최신 AI 코딩 도구의 변화에 맞춰 지속적으로 업데이트됩니다.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <h2>지금 시작하세요</h2>
          <p>초급 커리큘럼부터 차근차근 따라오면 누구나 바이브코딩을 마스터할 수 있습니다.</p>
          <div className="about-cta-actions">
            <Link to="/curriculum/beginner" className="btn btn-primary btn-lg">
              초급 커리큘럼 시작
            </Link>
            <Link to="/checklist" className="btn btn-outline btn-lg">
              내 수준 진단하기
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
