# 바이브코딩 마스터 (Vibe Coding Master)

AI 코딩을 체계적으로 학습할 수 있는 종합 교육 플랫폼입니다.

**URL**: https://vibe-coding.dreamitbiz.com

## 주요 기능

| 기능 | 설명 | 경로 |
|------|------|------|
| 3단계 커리큘럼 | 초급/중급/고급 AI 코딩 학습 | `/curriculum/beginner\|intermediate\|advanced` |
| 실전 프로젝트 9개 | SVG 아키텍처 다이어그램 + 원페이지 스크롤 | `/projects/:level/:slug` |
| 28일 부트캠프 | 매일 실습 과제와 체크리스트 | `/bootcamp` |
| AI 도구 비교 13종 | Lovable, Cursor, Claude 등 비교 분석 | `/tools` |
| 마크다운 가이드 | AI 프롬프트에 필수인 마크다운 문법 | `/markdown` |
| 커뮤니티 게시판 | 질문/답변, 프로젝트 공유 | `/community` |
| 학습 진도 추적 | 로그인 후 토픽/프로젝트 완료 상태 저장 | Supabase |
| 관리자 대시보드 | 사용자 관리, 통계 | `/admin` |

## 기술 스택

- **Frontend**: React 19 + TypeScript + Vite 7
- **Backend**: Supabase (Auth, Database, RLS)
- **Routing**: React Router v7
- **Styling**: 커스텀 CSS (다크모드, 5색 테마, 반응형)
- **배포**: GitHub Pages (`gh-pages`)
- **i18n**: 한국어/영어 전환

## 프로젝트 구조

```
src/
├── components/          # 공용 컴포넌트
│   ├── layout/          #   Navbar, Footer
│   ├── AuthGuard.tsx    #   인증 라우트 가드
│   ├── CodeBlock.tsx    #   코드 블록 (복사 기능)
│   ├── LevelBadge.tsx   #   초급/중급/고급 뱃지
│   └── SidebarLayout.tsx #  사이드바+콘텐츠 레이아웃
├── config/
│   └── site.ts          # 사이트 설정 (메뉴, 기능 플래그)
├── contexts/            # React Context
│   ├── AuthContext.tsx   #   Supabase 인증
│   ├── ProgressContext.tsx #  학습 진도 추적
│   ├── ThemeContext.tsx  #   다크모드 + 컬러 테마
│   ├── LanguageContext.tsx # 한/영 전환
│   └── ToastContext.tsx  #   토스트 알림
├── data/
│   ├── curriculum/      # 커리큘럼 데이터 (초/중/고)
│   ├── projects/        # 프로젝트 데이터 (SVG 다이어그램 포함)
│   ├── bootcampData.ts  # 28일 부트캠프 일정
│   ├── markdownData.ts  # 마크다운 가이드 챕터
│   ├── toolsData.ts     # AI 도구 비교 데이터
│   └── checklistData.ts # 체크리스트 항목
├── hooks/               # 커스텀 훅
├── layouts/
│   └── PublicLayout.tsx  # 메인 레이아웃 (Lazy loading)
├── pages/               # 21개 페이지 컴포넌트
├── styles/              # CSS 파일
│   ├── base.css         #   변수, 버튼, 유틸리티
│   ├── site.css         #   사이드바, 코드블록, 프로젝트 등
│   ├── responsive.css   #   반응형 (1100/1024/768/480px)
│   ├── dark-mode.css    #   다크모드 오버라이드
│   ├── navbar.css       #   내비게이션 바
│   ├── footer.css       #   푸터
│   ├── hero.css         #   히어로 섹션
│   └── ...
├── types/
│   └── index.ts         # 전체 타입 정의
└── utils/               # 유틸리티 (Supabase, i18n 등)
```

## 콘텐츠 구성

### 커리큘럼 (22 토픽)

| 레벨 | 토픽 수 | 내용 |
|------|---------|------|
| 초급 | 7 | AI 코딩 개념, 프롬프트 작성, Lovable/v0/Bolt 사용법 |
| 중급 | 8 | Cursor/Windsurf IDE, 풀스택 개발, 코드 품질 |
| 고급 | 7 | 멀티에이전트, MCP, Spec-Driven 개발, CI/CD |

### 프로젝트 (9개)

| 레벨 | 프로젝트 | 도구 |
|------|----------|------|
| 초급 | Todo App, 포트폴리오, SaaS 랜딩 | Lovable, v0.dev, Bolt.new |
| 중급 | 풀스택 CRUD, API 대시보드, 실시간 채팅 | Cursor, Supabase |
| 고급 | 멀티에이전트, MCP 서버, Spec-Driven 풀앱 | Claude Code |

각 프로젝트에 **SVG 아키텍처 다이어그램**, 상세 스텝 가이드, 코드 예제, 팁이 포함되어 있습니다.

## 개발

```bash
# 의존성 설치
npm install

# 개발 서버
npm run dev

# 타입 체크
npm run typecheck

# 프로덕션 빌드
npm run build

# GitHub Pages 배포
npm run deploy
```

## 환경 변수

```env
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxx
```

## 레이아웃 규칙

- 모든 콘텐츠 영역: `max-width: 1280px` + `padding: 0 40px` = **1200px 콘텐츠 영역**
- `.sidebar-layout`도 동일한 max-width/margin/padding 적용
- 반응형 패딩: 1024px → 24px, 480px → 16px

## 배포

GitHub Pages를 통해 `vibe-coding.dreamitbiz.com`으로 배포됩니다.

```bash
npm run build && npx gh-pages -d dist
```

## 라이선스

DreamIT Biz - All Rights Reserved
