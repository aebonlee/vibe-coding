import type { BootcampDay } from '../types';

export const bootcampDays: BootcampDay[] = [
  // Week 1: 개념 + Lovable/Bolt + 첫 앱
  { day: 1, week: 1, title: '바이브코딩이란?', description: 'AI 코딩의 개념과 도구 생태계를 이해합니다.', tasks: ['바이브코딩 마인드셋 학습', 'AI 코딩 도구 카테고리 파악', '학습 로드맵 확인'], tools: ['웹브라우저'], deliverable: '학습 노트 작성' },
  { day: 2, week: 1, title: 'Lovable 시작하기', description: 'Lovable에서 첫 번째 앱을 만들어봅니다.', tasks: ['Lovable 가입', '프롬프트로 간단한 페이지 생성', '결과물 확인 및 수정'], tools: ['Lovable'], deliverable: '첫 번째 생성 앱' },
  { day: 3, week: 1, title: 'Bolt.new 체험', description: 'Bolt.new에서 React 앱을 만들어봅니다.', tasks: ['Bolt.new 접속', 'React 앱 생성 프롬프트 작성', '코드 구조 확인'], tools: ['Bolt.new'], deliverable: 'Bolt.new 앱' },
  { day: 4, week: 1, title: 'Todo 앱 만들기', description: 'Lovable로 Todo 앱을 완성합니다.', tasks: ['Todo CRUD 기능 구현', '필터링 추가', '스타일링 다듬기'], tools: ['Lovable'], deliverable: 'Todo 앱 완성' },
  { day: 5, week: 1, title: '프롬프트 기초 연습', description: '효과적인 프롬프트 작성법을 연습합니다.', tasks: ['좋은 프롬프트 vs 나쁜 프롬프트 비교', '프롬프트 템플릿 만들기', '다양한 프롬프트 실험'], tools: ['Lovable', 'Claude.ai'], deliverable: '프롬프트 템플릿' },
  { day: 6, week: 1, title: '포트폴리오 설계', description: '개인 포트폴리오 사이트를 기획합니다.', tasks: ['포트폴리오 구조 설계', '콘텐츠 준비', '디자인 레퍼런스 수집'], tools: ['Figma/메모장'], deliverable: '포트폴리오 기획서' },
  { day: 7, week: 1, title: '1주차 회고', description: '첫 주의 학습을 정리하고 다음 주를 준비합니다.', tasks: ['배운 내용 정리', '어려웠던 점 기록', '2주차 목표 설정'], tools: ['메모장'], deliverable: '1주차 회고 노트' },

  // Week 2: v0 + Cursor 기본 + 앱 개선
  { day: 8, week: 2, title: 'v0.dev 시작', description: 'v0.dev로 UI 컴포넌트를 생성합니다.', tasks: ['v0.dev 가입', '카드 UI 생성', '대시보드 레이아웃 생성'], tools: ['v0.dev'], deliverable: 'UI 컴포넌트 3개' },
  { day: 9, week: 2, title: 'Cursor 설치 & 기본', description: 'Cursor IDE를 설치하고 기본 기능을 익힙니다.', tasks: ['Cursor 설치', 'Cmd+K 인라인 편집 연습', 'Tab 자동완성 체험'], tools: ['Cursor'], deliverable: 'Cursor 기본 조작 숙달' },
  { day: 10, week: 2, title: 'Cursor로 코드 수정', description: 'Cursor의 AI 기능으로 코드를 수정합니다.', tasks: ['기존 코드에 기능 추가', 'Cmd+K로 리팩토링', 'Chat으로 질문하기'], tools: ['Cursor'], deliverable: '수정된 코드' },
  { day: 11, week: 2, title: 'Cursor Composer', description: 'Composer로 여러 파일을 동시에 수정합니다.', tasks: ['Composer 모드 활용', '다중 파일 수정', '프로젝트 구조 변경'], tools: ['Cursor'], deliverable: 'Composer 활용 프로젝트' },
  { day: 12, week: 2, title: '포트폴리오 제작', description: 'v0 + Cursor로 포트폴리오를 만듭니다.', tasks: ['v0에서 UI 생성', 'Cursor에서 커스터마이징', '반응형 적용'], tools: ['v0.dev', 'Cursor'], deliverable: '포트폴리오 사이트' },
  { day: 13, week: 2, title: '마크다운 학습', description: '마크다운 문법을 집중 학습합니다.', tasks: ['기본 문법 학습', '코드블록/테이블 연습', 'AI 프롬프트에 마크다운 활용'], tools: ['VS Code/Cursor'], deliverable: '마크다운 치트시트' },
  { day: 14, week: 2, title: '2주차 회고', description: '2주차 학습을 정리합니다.', tasks: ['포트폴리오 완성도 점검', 'Cursor 활용 팁 정리', '3주차 준비'], tools: ['메모장'], deliverable: '2주차 회고 노트' },

  // Week 3: Cursor 심화 + Claude Code + SaaS
  { day: 15, week: 3, title: 'Supabase 시작', description: 'Supabase 프로젝트를 생성하고 테이블을 만듭니다.', tasks: ['Supabase 가입', 'DB 테이블 생성', 'API 키 확인'], tools: ['Supabase'], deliverable: 'Supabase 프로젝트' },
  { day: 16, week: 3, title: '풀스택 앱 시작', description: 'React + Supabase 연동을 시작합니다.', tasks: ['프로젝트 셋업', 'Supabase 클라이언트 연결', '데이터 CRUD 구현'], tools: ['Cursor', 'Supabase'], deliverable: 'CRUD 기본 구현' },
  { day: 17, week: 3, title: '인증 구현', description: 'Supabase Auth로 로그인을 만듭니다.', tasks: ['이메일 로그인 구현', 'OAuth 추가', 'AuthContext 만들기'], tools: ['Cursor', 'Supabase'], deliverable: '인증 시스템' },
  { day: 18, week: 3, title: 'Claude Code 설치', description: 'Claude Code를 설치하고 기본 사용법을 익힙니다.', tasks: ['Claude Code 설치', '기본 명령어 연습', '파일 읽기/수정 체험'], tools: ['Claude Code'], deliverable: 'Claude Code 기본 숙달' },
  { day: 19, week: 3, title: 'Claude Code로 개발', description: 'Claude Code로 풀스택 앱을 개선합니다.', tasks: ['기능 추가', '코드 리팩토링', '버그 수정'], tools: ['Claude Code'], deliverable: '개선된 풀스택 앱' },
  { day: 20, week: 3, title: 'SaaS 랜딩 제작', description: 'AI 도구를 조합하여 SaaS 랜딩을 만듭니다.', tasks: ['랜딩 기획', 'v0로 UI 생성', 'Cursor로 조합/수정'], tools: ['v0.dev', 'Cursor'], deliverable: 'SaaS 랜딩 페이지' },
  { day: 21, week: 3, title: '3주차 회고', description: '3주차 학습을 정리합니다.', tasks: ['풀스택 앱 완성도 점검', 'Claude Code 활용법 정리', '4주차 준비'], tools: ['메모장'], deliverable: '3주차 회고 노트' },

  // Week 4: CLAUDE.md/Skills/Hooks + 배포
  { day: 22, week: 4, title: 'CLAUDE.md 작성', description: '프로젝트 컨텍스트 문서를 작성합니다.', tasks: ['CLAUDE.md 구조 학습', '프로젝트별 CLAUDE.md 작성', '효과 검증'], tools: ['Claude Code'], deliverable: 'CLAUDE.md 파일' },
  { day: 23, week: 4, title: 'Skills & Hooks', description: 'Claude Code의 고급 기능을 활용합니다.', tasks: ['커스텀 슬래시 명령어 만들기', 'Hooks 설정', '워크플로우 자동화'], tools: ['Claude Code'], deliverable: 'Skills/Hooks 설정' },
  { day: 24, week: 4, title: '코드리뷰 & 디버깅', description: 'AI를 활용한 코드 품질 관리를 연습합니다.', tasks: ['AI 코드리뷰 요청', '버그 디버깅', '성능 최적화 제안 받기'], tools: ['Claude Code', 'Cursor'], deliverable: '리뷰/개선 코드' },
  { day: 25, week: 4, title: 'GitHub Pages 배포', description: '프로젝트를 GitHub Pages로 배포합니다.', tasks: ['Git 설정', 'gh-pages 배포', '커스텀 도메인 설정'], tools: ['Git', 'GitHub'], deliverable: '배포된 사이트' },
  { day: 26, week: 4, title: '도구 비교 정리', description: '사용해본 도구들을 비교 정리합니다.', tasks: ['각 도구의 장단점 정리', '상황별 추천 도구 정리', '비교표 작성'], tools: ['메모장'], deliverable: '도구 비교 노트' },
  { day: 27, week: 4, title: '최종 프로젝트 마무리', description: '4주간의 프로젝트들을 정리하고 공유합니다.', tasks: ['포트폴리오에 프로젝트 추가', 'README 작성', 'GitHub 정리'], tools: ['Claude Code', 'Git'], deliverable: '최종 포트폴리오' },
  { day: 28, week: 4, title: '28일 회고 & 다음 단계', description: '전체 부트캠프를 회고하고 성장을 확인합니다.', tasks: ['전체 학습 정리', '자기진단 체크리스트 확인', '다음 학습 계획 수립'], tools: ['메모장'], deliverable: '28일 회고록' },
];
