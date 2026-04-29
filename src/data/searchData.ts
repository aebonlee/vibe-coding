interface SearchItem {
  title: string;
  path: string;
  category: string;
  keywords: string[];
}

export const searchData: SearchItem[] = [
  // Curriculum
  { title: '바이브코딩 마인드셋', path: '/curriculum/beginner', category: '초급', keywords: ['마인드셋', 'AI코딩', '패러다임'] },
  { title: 'AI 코딩 도구 총정리', path: '/curriculum/beginner', category: '초급', keywords: ['도구', 'Cursor', 'Lovable', 'Claude'] },
  { title: 'Todo App 만들기', path: '/curriculum/beginner', category: '초급', keywords: ['todo', '첫앱', 'CRUD'] },
  { title: '포트폴리오 사이트', path: '/curriculum/beginner', category: '초급', keywords: ['포트폴리오', '반응형', '다크모드'] },
  { title: 'SaaS 랜딩 프로토타입', path: '/curriculum/beginner', category: '초급', keywords: ['SaaS', '랜딩', 'CTA'] },
  { title: '프롬프트 작성 기초', path: '/curriculum/beginner', category: '초급', keywords: ['프롬프트', 'prompt', '기초'] },
  { title: '7가지 필수 스킬', path: '/curriculum/beginner', category: '초급', keywords: ['필수', '스킬', '역량'] },
  { title: '컨텍스트 관리 전략', path: '/curriculum/intermediate', category: '중급', keywords: ['컨텍스트', 'CLAUDE.md', '문서화'] },
  { title: '프롬프트 심화 기법', path: '/curriculum/intermediate', category: '중급', keywords: ['프롬프트', '체인', '심화'] },
  { title: 'AI IDE 고급 활용', path: '/curriculum/intermediate', category: '중급', keywords: ['Cursor', 'Windsurf', 'IDE'] },
  { title: '풀스택 워크플로우', path: '/curriculum/intermediate', category: '중급', keywords: ['풀스택', 'Supabase', 'React'] },
  { title: 'Skills & Commands', path: '/curriculum/intermediate', category: '중급', keywords: ['skills', 'hooks', 'commands'] },
  { title: 'AI 코드리뷰', path: '/curriculum/intermediate', category: '중급', keywords: ['코드리뷰', '품질', '리뷰'] },
  { title: 'AI 디버깅 기법', path: '/curriculum/intermediate', category: '중급', keywords: ['디버깅', '버그', 'debug'] },
  { title: 'Spec-Driven 개발', path: '/curriculum/advanced', category: '고급', keywords: ['spec', 'PRD', '명세'] },
  { title: '멀티에이전트 오케스트레이션', path: '/curriculum/advanced', category: '고급', keywords: ['멀티에이전트', 'orchestration'] },
  { title: '자동화 파이프라인', path: '/curriculum/advanced', category: '고급', keywords: ['자동화', 'CI/CD', 'pipeline'] },
  { title: '프로덕션 안정성', path: '/curriculum/advanced', category: '고급', keywords: ['프로덕션', '테스트', '모니터링'] },
  { title: '시스템 아키텍처', path: '/curriculum/advanced', category: '고급', keywords: ['아키텍처', '설계', 'architecture'] },
  { title: '팀 워크플로우', path: '/curriculum/advanced', category: '고급', keywords: ['팀', '협업', 'workflow'] },
  { title: '자체 도구체인 구축', path: '/curriculum/advanced', category: '고급', keywords: ['MCP', '도구', 'toolchain'] },
  { title: '비판적 시각', path: '/curriculum/advanced', category: '고급', keywords: ['한계', '비판', 'AI 코딩'] },
  // Projects
  { title: 'Todo App 프로젝트', path: '/projects/beginner/todo-app', category: '프로젝트', keywords: ['todo', '프로젝트'] },
  { title: '포트폴리오 프로젝트', path: '/projects/beginner/portfolio', category: '프로젝트', keywords: ['포트폴리오', '프로젝트'] },
  { title: 'SaaS 랜딩 프로젝트', path: '/projects/beginner/saas-landing', category: '프로젝트', keywords: ['SaaS', '프로젝트'] },
  { title: '풀스택 CRUD', path: '/projects/intermediate/fullstack-crud', category: '프로젝트', keywords: ['풀스택', 'CRUD'] },
  { title: 'API 대시보드', path: '/projects/intermediate/api-dashboard', category: '프로젝트', keywords: ['API', '대시보드'] },
  { title: '실시간 채팅', path: '/projects/intermediate/realtime-chat', category: '프로젝트', keywords: ['실시간', '채팅'] },
  { title: '멀티에이전트 워크플로우', path: '/projects/advanced/multi-agent', category: '프로젝트', keywords: ['멀티에이전트'] },
  { title: 'MCP 서버 구축', path: '/projects/advanced/mcp-server', category: '프로젝트', keywords: ['MCP', '서버'] },
  { title: 'Spec-Driven 풀앱', path: '/projects/advanced/spec-driven-app', category: '프로젝트', keywords: ['spec', '풀앱'] },
  // Others
  { title: '도구 비교', path: '/tools', category: '도구', keywords: ['도구', '비교', 'Cursor', 'Claude Code'] },
  { title: '28일 부트캠프', path: '/bootcamp', category: '부트캠프', keywords: ['부트캠프', '28일', '도전'] },
  { title: '자기진단 체크리스트', path: '/checklist', category: '체크리스트', keywords: ['자기진단', '체크리스트'] },
  { title: '마크다운 가이드', path: '/markdown', category: '마크다운', keywords: ['마크다운', 'markdown', '문법'] },
  { title: '커뮤니티', path: '/community', category: '커뮤니티', keywords: ['커뮤니티', '질문', '자유'] },
];
