import type { ProjectData } from '../../types';

export const advancedProjects: ProjectData[] = [
  {
    id: 'multi-agent',
    slug: 'multi-agent',
    title: '멀티에이전트 워크플로우',
    description: 'Claude Code와 역할분담 자동화를 활용한 멀티에이전트 시스템.',
    level: 'advanced',
    duration: '8-10시간',
    techStack: ['Claude Code', 'Task Tool', 'Bash', 'TypeScript'],
    outcomes: ['에이전트 오케스트레이션', '역할 분담 설계', '자동화 파이프라인'],
    steps: [
      { step: 1, title: '아키텍처 설계', description: '멀티에이전트 시스템의 구조를 설계합니다.', content: 'Orchestrator → Worker Agent 패턴을 설계합니다. 각 에이전트의 역할과 통신 방식을 정의합니다.' },
      { step: 2, title: 'CLAUDE.md 작성', description: '프로젝트 컨텍스트 문서를 작성합니다.', content: '프로젝트 구조, 코딩 컨벤션, 아키텍처 결정 사항을 CLAUDE.md에 문서화합니다.' },
      { step: 3, title: '오케스트레이터 구현', description: '메인 에이전트를 구현합니다.', content: 'Task 분배, 진행 상황 추적, 결과 통합을 담당하는 오케스트레이터를 만듭니다.' },
      { step: 4, title: '워커 에이전트 구현', description: '전문 에이전트들을 구현합니다.', content: 'Frontend Agent, Backend Agent, Test Agent 등 역할별 에이전트를 구현합니다.' },
      { step: 5, title: '태스크 분배 로직', description: '작업을 적절히 분배하는 로직을 만듭니다.', content: '의존성을 고려한 태스크 분배와 병렬 실행을 구현합니다.' },
      { step: 6, title: '에러 핸들링', description: '실패한 태스크의 재시도와 복구를 구현합니다.', content: '에이전트 실패 시 재시도, 폴백, 알림 메커니즘을 구현합니다.' },
      { step: 7, title: '결과 통합', description: '각 에이전트의 결과를 통합합니다.', content: '코드 병합, 충돌 해결, 통합 테스트를 자동화합니다.' },
      { step: 8, title: '모니터링 대시보드', description: '에이전트 상태를 실시간으로 모니터링합니다.', content: '각 에이전트의 진행 상태, 소요 시간, 성공/실패를 시각화합니다.' },
      { step: 9, title: '최적화', description: '성능과 비용을 최적화합니다.', content: '토큰 사용량 추적, 캐싱, 불필요한 API 호출 줄이기를 구현합니다.' },
      { step: 10, title: '문서화 & 공유', description: '프로젝트를 문서화하고 공유합니다.', content: 'README, 아키텍처 다이어그램, 사용 가이드를 작성합니다.' },
    ]
  },
  {
    id: 'mcp-server',
    slug: 'mcp-server',
    title: 'MCP 서버 구축',
    description: 'Node.js로 커스텀 MCP 서버를 직접 개발하여 AI 도구를 확장합니다.',
    level: 'advanced',
    duration: '8-10시간',
    techStack: ['Node.js', 'MCP SDK', 'TypeScript', 'Claude Code'],
    outcomes: ['MCP 프로토콜 이해', 'Tool/Resource 구현', '커스텀 서버 개발'],
    steps: [
      { step: 1, title: 'MCP 프로토콜 이해', description: 'MCP의 개념과 구조를 학습합니다.', content: 'Model Context Protocol의 기본 개념, Tool, Resource, Prompt의 차이를 이해합니다.' },
      { step: 2, title: '프로젝트 초기화', description: 'MCP 서버 프로젝트를 셋업합니다.', content: '@modelcontextprotocol/sdk를 설치하고 기본 서버 구조를 만듭니다.' },
      { step: 3, title: '첫 번째 Tool', description: '간단한 Tool을 구현합니다.', content: '파일 검색, 데이터 조회 등 간단한 Tool을 만들어봅니다.' },
      { step: 4, title: 'Resource 구현', description: 'Resource를 통해 데이터를 제공합니다.', content: '데이터베이스, 파일 시스템 등에서 데이터를 읽어 Resource로 노출합니다.' },
      { step: 5, title: '에러 핸들링', description: '에러 처리와 검증을 구현합니다.', content: '입력 검증, 에러 메시지, 타임아웃 처리를 추가합니다.' },
      { step: 6, title: 'Claude Code 연동', description: 'Claude Code에서 MCP 서버를 사용합니다.', content: 'claude_desktop_config.json에 서버를 등록하고 테스트합니다.' },
      { step: 7, title: '고급 기능', description: '스트리밍, 캐싱 등 고급 기능을 추가합니다.', content: '대용량 데이터 스트리밍, 응답 캐싱, 인증을 구현합니다.' },
      { step: 8, title: '테스트', description: '유닛 테스트와 통합 테스트를 작성합니다.', content: 'MCP Inspector를 활용한 테스트와 자동화된 테스트를 구현합니다.' },
      { step: 9, title: '배포 & 공유', description: '서버를 패키지화하고 공유합니다.', content: 'npm 패키지로 배포하거나 Docker 이미지로 만들어 공유합니다.' },
    ]
  },
  {
    id: 'spec-driven-app',
    slug: 'spec-driven-app',
    title: 'Spec-Driven 풀앱 개발',
    description: 'PRD → 구조화명세 → 자동구현 → 배포까지 완전 자동화.',
    level: 'advanced',
    duration: '10-12시간',
    techStack: ['Claude Code', 'React', 'Supabase', 'GitHub Actions'],
    outcomes: ['Spec-Driven 프로세스', '완전 자동화', 'CI/CD 파이프라인'],
    steps: [
      { step: 1, title: 'PRD 작성', description: '제품 요구사항 문서를 작성합니다.', content: '비즈니스 목표, 사용자 스토리, 기능 명세를 포함한 PRD를 작성합니다.' },
      { step: 2, title: '구조화 명세 생성', description: 'PRD를 기술 명세로 변환합니다.', content: 'AI를 활용하여 PRD를 API 명세, DB 스키마, 컴포넌트 구조로 변환합니다.' },
      { step: 3, title: 'DB 스키마 자동 생성', description: '명세에서 DB 스키마를 자동 생성합니다.', content: 'SQL 마이그레이션 파일을 자동 생성하고 Supabase에 적용합니다.' },
      { step: 4, title: 'API 레이어 구현', description: '백엔드 API를 자동 구현합니다.', content: 'Supabase RPC, Edge Functions를 활용한 API를 구현합니다.' },
      { step: 5, title: '프론트엔드 자동 구현', description: 'React 컴포넌트를 자동 생성합니다.', content: '명세를 기반으로 페이지, 컴포넌트, 라우팅을 자동 생성합니다.' },
      { step: 6, title: '인증 & 권한', description: '인증과 역할 기반 권한을 구현합니다.', content: 'Supabase Auth와 RLS를 활용한 인증/권한 시스템을 구현합니다.' },
      { step: 7, title: '자동 테스트 생성', description: '테스트를 자동으로 생성합니다.', content: '유닛 테스트, 통합 테스트를 명세 기반으로 자동 생성합니다.' },
      { step: 8, title: 'CI/CD 파이프라인', description: 'GitHub Actions로 자동 배포를 설정합니다.', content: 'push 시 자동 빌드, 테스트, 배포되는 파이프라인을 구축합니다.' },
      { step: 9, title: '모니터링 설정', description: '에러 추적과 모니터링을 설정합니다.', content: '에러 로깅, 성능 모니터링, 알림을 설정합니다.' },
      { step: 10, title: '변경 요청 대응', description: '명세 변경 시 자동 업데이트 프로세스를 구현합니다.', content: '명세 변경 → 영향 분석 → 코드 수정 → 테스트 → 배포 자동화.' },
      { step: 11, title: '문서 자동화', description: 'API 문서, 사용자 가이드를 자동 생성합니다.', content: 'OpenAPI 스펙, Storybook, README를 자동 생성합니다.' },
      { step: 12, title: '회고 & 프로세스 개선', description: '전체 프로세스를 리뷰하고 개선합니다.', content: '소요 시간, 품질, 자동화율을 분석하고 개선점을 도출합니다.' },
    ]
  }
];
