import type { ProjectData } from '../../types';

export const specDrivenProject: ProjectData = {
  id: 'spec-driven-app',
  slug: 'spec-driven-app',
  title: 'Spec-Driven 풀앱 개발',
  description: 'PRD → 구조화명세 → 자동구현 → 배포까지 완전 자동화.',
  level: 'advanced',
  duration: '10-12시간',
  techStack: ['Claude Code', 'React', 'Supabase', 'GitHub Actions'],
  outcomes: [
    'Spec-Driven 개발 프로세스 체득',
    'PRD → 코드 자동 변환',
    'CI/CD 파이프라인 구축',
    '명세 기반 자동 테스트 생성',
  ],
  diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" font-family="'Noto Sans KR', sans-serif">
  <defs>
    <marker id="ah" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#0046C8"/>
    </marker>
  </defs>
  <!-- Row 1 -->
  <rect x="20" y="40" width="140" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="90" y="74" text-anchor="middle" font-size="15" font-weight="bold" fill="#0046C8">PRD</text>
  <line x1="160" y1="68" x2="195" y2="68" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <rect x="200" y="40" width="140" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="270" y="74" text-anchor="middle" font-size="15" font-weight="bold" fill="#0046C8">구조화 명세</text>
  <line x1="340" y1="68" x2="375" y2="68" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <rect x="380" y="40" width="140" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="450" y="74" text-anchor="middle" font-size="15" font-weight="bold" fill="#0046C8">DB 스키마</text>
  <line x1="520" y1="68" x2="555" y2="68" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <rect x="560" y="40" width="140" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="630" y="74" text-anchor="middle" font-size="15" font-weight="bold" fill="#0046C8">API</text>
  <!-- Connector Row1 → Row2 -->
  <path d="M 630 96 L 630 160 Q 630 180 610 180 L 155 180" fill="none" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <!-- Row 2 -->
  <rect x="20" y="152" width="140" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="90" y="186" text-anchor="middle" font-size="15" font-weight="bold" fill="#0046C8">프론트엔드</text>
  <line x1="20" y1="180" x2="195" y2="180" stroke="none"/>
  <rect x="200" y="152" width="140" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="270" y="186" text-anchor="middle" font-size="15" font-weight="bold" fill="#0046C8">테스트</text>
  <line x1="160" y1="180" x2="195" y2="180" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <line x1="340" y1="180" x2="375" y2="180" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <rect x="380" y="152" width="140" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="450" y="186" text-anchor="middle" font-size="15" font-weight="bold" fill="#0046C8">CI/CD</text>
  <line x1="520" y1="180" x2="555" y2="180" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <rect x="560" y="152" width="140" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="630" y="186" text-anchor="middle" font-size="15" font-weight="bold" fill="#0046C8">배포</text>
  <!-- Labels -->
  <text x="380" y="260" text-anchor="middle" font-size="13" fill="#555">Spec-Driven: 명세가 바뀌면 코드가 따라간다</text>
  <text x="380" y="290" text-anchor="middle" font-size="12" fill="#888">PRD → 구조화 명세 → 자동 구현 → 자동 테스트 → 자동 배포</text>
</svg>`,
  steps: [
    {
      step: 1,
      title: 'PRD 작성',
      description: '제품 요구사항 문서(PRD)를 체계적으로 작성합니다.',
      content: `Spec-Driven 개발의 출발점은 PRD입니다. 비즈니스 목표, 타깃 사용자, 핵심 기능을 명확히 정의합니다. "무엇을 만들 것인가"를 자연어로 작성하되, Claude Code가 해석할 수 있도록 구조화된 마크다운 형식을 사용합니다.

PRD에는 기능 목록(Features), 사용자 스토리(User Stories), 비기능 요구사항(NFR), 우선순위를 포함합니다. 각 기능에는 수용 기준(Acceptance Criteria)을 반드시 작성하여, 이후 자동 테스트 생성의 기초가 되도록 합니다.

작성된 PRD는 CLAUDE.md에 요약을 포함시키고, 전체 문서는 docs/PRD.md 경로에 저장합니다. 이후 모든 단계는 이 문서를 기준으로 동작합니다.`,
      tips: [
        '기능마다 Acceptance Criteria를 반드시 작성하세요 — 이것이 자동 테스트의 원재료입니다.',
        'Claude Code에 "PRD.md를 읽고 기능 목록을 정리해줘"라고 요청하면 빠진 항목을 찾아줍니다.',
      ],
      codeExamples: [
        {
          language: 'markdown',
          title: 'PRD 마크다운 템플릿',
          code: `# PRD: 프로젝트명

## 1. 개요
- **목표**: 핵심 비즈니스 목표
- **타깃 사용자**: 주요 사용자 그룹
- **성공 지표**: MAU 1,000 / 전환율 5%

## 2. 기능 명세
### F-001: 회원가입
- 이메일/비밀번호 또는 소셜 로그인
- **수용 기준**:
  - [ ] 이메일 중복 시 에러 메시지 표시
  - [ ] 가입 후 프로필 페이지로 리다이렉트

### F-002: 대시보드
- 사용자별 데이터 시각화
- **수용 기준**:
  - [ ] 로그인 후 3초 이내 로딩
  - [ ] 차트 필터링 동작

## 3. 비기능 요구사항
- 응답 시간 < 500ms (p95)
- Lighthouse 성능 점수 > 85
- 모바일 반응형 필수`,
        },
      ],
    },
    {
      step: 2,
      title: '구조화 명세 생성',
      description: 'PRD를 기술 명세로 변환하여 자동 구현의 토대를 만듭니다.',
      content: `PRD의 자연어를 Claude Code가 직접 소비할 수 있는 구조화 명세로 변환합니다. "PRD.md를 기반으로 기술 명세를 생성해줘"라는 프롬프트로 시작하면, 데이터 모델, API 엔드포인트, 컴포넌트 트리를 자동으로 추출할 수 있습니다.

구조화 명세는 세 가지 산출물로 구성됩니다. 첫째, 데이터 모델(ERD) — 테이블, 컬럼, 관계를 정의합니다. 둘째, API 명세 — 엔드포인트, 요청/응답 스키마를 정의합니다. 셋째, 컴포넌트 명세 — 페이지별 컴포넌트 트리와 상태 관리를 정의합니다.

이 문서들은 docs/spec/ 디렉토리에 저장합니다. 명세가 변경되면 영향 범위를 자동으로 분석하는 것이 Spec-Driven 개발의 핵심 원리입니다.`,
      tips: [
        '"PRD의 F-001부터 F-005까지 데이터 모델을 추출해줘"처럼 범위를 지정하면 정확도가 높아집니다.',
        '명세 파일은 JSON Schema 형식으로 저장하면, 이후 자동 검증에 활용할 수 있습니다.',
      ],
    },
    {
      step: 3,
      title: 'DB 스키마 자동 생성',
      description: '구조화 명세에서 Supabase 마이그레이션 SQL을 자동 생성합니다.',
      content: `데이터 모델 명세를 기반으로 SQL 마이그레이션 파일을 생성합니다. Claude Code에 "데이터 모델 명세를 기반으로 Supabase 마이그레이션 SQL을 만들어줘"라고 요청합니다. 테이블 생성, 인덱스, RLS 정책까지 한 번에 생성됩니다.

마이그레이션 파일은 supabase/migrations/ 디렉토리에 타임스탬프 기반으로 저장합니다. 각 마이그레이션은 독립적으로 실행 가능해야 하며, 롤백 방안도 함께 작성합니다. Supabase CLI의 supabase db push 명령으로 적용합니다.

RLS(Row Level Security) 정책은 명세의 권한 모델을 그대로 반영합니다. 인증된 사용자만 자기 데이터에 접근하도록 auth.uid() 기반 정책을 기본으로 적용합니다.`,
      tips: [
        'RLS 정책을 빠뜨리면 데이터가 공개됩니다 — 마이그레이션에 반드시 포함하세요.',
        'supabase db diff 명령으로 로컬과 원격 스키마 차이를 확인할 수 있습니다.',
      ],
      codeExamples: [
        {
          language: 'sql',
          title: 'Supabase 마이그레이션 예시',
          code: `-- 20260430_create_tasks.sql

create table if not exists public.tasks (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null default auth.uid(),
  title      text not null,
  status     text not null default 'todo'
             check (status in ('todo','in_progress','done')),
  priority   int  not null default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Index
create index idx_tasks_user on public.tasks(user_id);

-- RLS
alter table public.tasks enable row level security;

create policy "Users read own tasks"
  on public.tasks for select
  using (auth.uid() = user_id);

create policy "Users insert own tasks"
  on public.tasks for insert
  with check (auth.uid() = user_id);

create policy "Users update own tasks"
  on public.tasks for update
  using (auth.uid() = user_id);`,
        },
      ],
    },
    {
      step: 4,
      title: 'API 레이어 구현',
      description: 'Supabase RPC와 Edge Functions로 백엔드 API를 구현합니다.',
      content: `API 명세를 기반으로 Supabase의 두 가지 접근 방식을 혼합합니다. 단순 CRUD는 PostgREST 자동 API를 활용하고, 복잡한 비즈니스 로직은 Edge Functions(Deno)로 구현합니다. Claude Code에 "API 명세를 기반으로 Edge Function을 생성해줘"라고 지시합니다.

각 API는 입력 검증, 에러 핸들링, 응답 포맷을 명세와 일치시킵니다. Supabase의 supabase.rpc() 호출로 PostgreSQL 함수를 직접 실행하면, 네트워크 왕복을 줄이고 트랜잭션을 보장할 수 있습니다.

API 레이어에서 가장 중요한 것은 일관된 에러 응답 형식입니다. { error: string, code: string } 형태로 통일하면 프론트엔드에서 에러 처리가 단순해집니다.`,
      tips: [
        'Supabase의 자동 생성 API(PostgREST)를 먼저 확인하고, 부족한 부분만 Edge Function으로 보완하세요.',
        'Edge Function 로컬 테스트는 supabase functions serve 명령을 사용합니다.',
      ],
    },
    {
      step: 5,
      title: '프론트엔드 자동 구현',
      description: '컴포넌트 명세를 기반으로 React 페이지를 자동 생성합니다.',
      content: `컴포넌트 명세의 페이지 목록과 컴포넌트 트리를 기반으로, Claude Code가 React 컴포넌트를 생성합니다. "컴포넌트 명세를 기반으로 src/pages/와 src/components/를 생성해줘"라고 요청합니다. React Router 라우팅 설정도 함께 생성됩니다.

각 컴포넌트는 Supabase 클라이언트를 통해 데이터를 가져오고, 로딩/에러 상태를 일관되게 처리합니다. 공용 컴포넌트(버튼, 모달, 폼)는 재사용 가능하도록 src/components/ui/에 분리합니다.

반응형 레이아웃은 CSS 변수와 미디어 쿼리로 구현합니다. 명세에 정의된 브레이크포인트를 따르며, 모바일 우선(mobile-first) 접근 방식을 적용합니다.`,
      tips: [
        '명세에 없는 기능을 추가하고 싶다면 먼저 PRD를 업데이트하세요 — 명세가 코드보다 앞서야 합니다.',
        'Claude Code에 "이 컴포넌트에 로딩 스켈레톤을 추가해줘"처럼 구체적으로 요청하면 품질이 높아집니다.',
      ],
    },
    {
      step: 6,
      title: '인증 & 권한',
      description: 'Supabase Auth와 RLS를 활용한 인증/권한 시스템을 구축합니다.',
      content: `Supabase Auth를 활용하여 이메일/비밀번호, 소셜 로그인(Google, Kakao 등)을 설정합니다. AuthContext를 만들어 로그인 상태를 전역에서 관리하며, ProtectedRoute 컴포넌트로 미인증 사용자의 접근을 차단합니다.

역할 기반 접근 제어(RBAC)는 user_profiles 테이블의 role 컬럼으로 구현합니다. admin, member 등 역할에 따라 메뉴 노출과 API 접근을 분기합니다. RLS 정책에서도 역할을 확인하여 DB 레벨에서 이중 보호합니다.

인증 관련 트리거가 실패하면 전체 회원가입이 차단될 수 있습니다. 트리거 함수에는 반드시 EXCEPTION WHEN OTHERS THEN RETURN NEW 구문을 포함하여, 개별 트리거 실패가 전파되지 않도록 합니다.`,
      tips: [
        '트리거 함수에 EXCEPTION WHEN OTHERS THEN RETURN NEW를 빠뜨리면 회원가입이 전체 중단됩니다.',
        '개발 환경에서 RLS를 끄고 작업하면 나중에 권한 버그가 생깁니다 — 처음부터 켜두세요.',
      ],
    },
    {
      step: 7,
      title: '자동 테스트 생성',
      description: '명세의 수용 기준을 기반으로 테스트를 자동 생성합니다.',
      content: `PRD의 Acceptance Criteria가 테스트 케이스의 원재료입니다. Claude Code에 "PRD의 수용 기준을 기반으로 Vitest 테스트를 생성해줘"라고 요청하면, 각 기능별 유닛 테스트와 통합 테스트가 생성됩니다.

유닛 테스트는 개별 함수와 컴포넌트를 검증하고, 통합 테스트는 사용자 시나리오 전체를 검증합니다. Supabase 호출은 모킹(mocking)하여 네트워크 의존성을 제거합니다. 테스트 커버리지 80% 이상을 목표로 합니다.

테스트가 명세와 동기화되어야 Spec-Driven의 가치가 있습니다. 명세가 바뀌면 테스트도 함께 업데이트해야 하며, 이 과정도 Claude Code로 자동화할 수 있습니다.`,
      tips: [
        '"명세 F-003이 변경되었어. 관련 테스트를 업데이트해줘"라고 요청하면 영향 범위를 자동으로 파악합니다.',
        'Vitest의 --reporter=verbose 옵션으로 실패 원인을 상세히 확인하세요.',
      ],
    },
    {
      step: 8,
      title: 'CI/CD 파이프라인',
      description: 'GitHub Actions로 빌드, 테스트, 배포를 자동화합니다.',
      content: `GitHub Actions 워크플로우를 작성하여 push 시 자동으로 빌드, 테스트, 배포가 실행되도록 합니다. main 브랜치에 푸시하면 gh-pages로 배포까지 완료되는 파이프라인을 구성합니다.

워크플로우는 세 단계로 구성합니다. 첫째, lint와 타입 체크. 둘째, 테스트 실행. 셋째, 빌드 후 GitHub Pages 배포. 각 단계가 실패하면 이후 단계가 실행되지 않으므로, 불량 코드가 프로덕션에 도달하는 것을 방지합니다.

환경 변수는 GitHub Secrets에 저장합니다. VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY 등을 시크릿으로 등록하고 워크플로우에서 참조합니다.`,
      tips: [
        'GitHub Secrets에 .env 변수를 모두 등록해야 빌드가 성공합니다.',
        'actions/cache를 사용하면 node_modules 캐싱으로 빌드 시간을 40% 이상 줄일 수 있습니다.',
      ],
      codeExamples: [
        {
          language: 'yaml',
          title: 'GitHub Actions 빌드/배포 워크플로우',
          code: `name: Build & Deploy
on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci

      - run: npx tsc --noEmit
        name: Type Check

      - run: npx vitest run --reporter=verbose
        name: Test

      - run: npm run build
        env:
          VITE_SUPABASE_URL: \${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: \${{ secrets.VITE_SUPABASE_ANON_KEY }}

      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`,
        },
      ],
    },
    {
      step: 9,
      title: '모니터링 설정',
      description: '배포 후 에러 추적과 성능 모니터링을 구성합니다.',
      content: `프로덕션 환경에서 발생하는 에러를 실시간으로 추적하기 위해, 글로벌 에러 핸들러를 설정합니다. window.onerror와 window.onunhandledrejection을 등록하고, 에러 정보를 Supabase 테이블에 기록합니다.

성능 모니터링은 Web Vitals(LCP, FID, CLS)를 측정합니다. web-vitals 라이브러리를 설치하고, 측정값을 주기적으로 수집합니다. Lighthouse CI를 GitHub Actions에 추가하면 배포 전 성능 회귀를 감지할 수 있습니다.

알림은 Supabase Edge Function + Resend 이메일 조합으로 구현합니다. 에러가 특정 임계치를 넘으면 관리자 이메일로 알림을 발송합니다.`,
      tips: [
        'console.error를 래핑하여 모든 에러를 자동으로 수집하면 누락 없이 추적할 수 있습니다.',
        'Lighthouse CI의 budget.json으로 성능 기준을 설정하면 기준 미달 시 빌드가 실패합니다.',
      ],
    },
    {
      step: 10,
      title: '변경 요청 대응',
      description: '명세 변경 시 영향 분석과 자동 업데이트를 수행합니다.',
      content: `Spec-Driven 개발의 진정한 가치는 변경 요청에서 드러납니다. 명세가 바뀌면 Claude Code에 "명세 F-002가 변경되었어. 영향 범위를 분석하고 코드를 업데이트해줘"라고 요청합니다. AI가 관련 파일을 찾아 일괄 수정합니다.

영향 분석의 핵심은 명세 ID와 코드의 매핑입니다. 각 컴포넌트와 테스트 파일에 관련 명세 ID를 주석으로 남기면, 변경 시 grep으로 빠르게 영향 범위를 파악할 수 있습니다.

변경 후에는 반드시 관련 테스트를 재실행합니다. CI 파이프라인이 자동으로 이를 수행하지만, 로컬에서도 변경된 명세와 관련된 테스트만 선별 실행하여 빠르게 검증합니다.`,
      tips: [
        '코드에 /* spec: F-002 */ 같은 주석을 남기면 영향 분석이 훨씬 빨라집니다.',
        'vitest --changed 옵션으로 변경된 파일과 관련된 테스트만 실행할 수 있습니다.',
      ],
    },
    {
      step: 11,
      title: '문서 자동화',
      description: 'API 문서와 사용자 가이드를 코드에서 자동 생성합니다.',
      content: `코드와 명세로부터 문서를 자동 생성합니다. API 문서는 TypeScript 타입 정의와 JSDoc 주석에서 추출하고, 사용자 가이드는 컴포넌트 명세와 스토리북에서 생성합니다. Claude Code에 "src/types/를 분석해서 API 문서를 생성해줘"라고 요청합니다.

README.md는 프로젝트 개요, 설치 방법, 환경 변수 목록, 주요 명령어를 포함하도록 자동 생성합니다. 배포 URL, 기술 스택, 아키텍처 다이어그램도 포함하여 신규 개발자의 온보딩 시간을 줄입니다.

문서가 코드와 동기화되지 않으면 오히려 혼란을 야기합니다. CI 파이프라인에 문서 생성 단계를 추가하여, 코드가 바뀌면 문서도 자동으로 갱신되도록 합니다.`,
      tips: [
        'TypeDoc이나 JSDoc 기반 문서 생성 도구를 CI에 통합하면 문서가 항상 최신 상태를 유지합니다.',
        'CLAUDE.md에 문서 생성 규칙을 명시하면, Claude Code가 코드 수정 시 문서도 함께 업데이트합니다.',
      ],
    },
    {
      step: 12,
      title: '회고 & 프로세스 개선',
      description: '전체 Spec-Driven 프로세스를 리뷰하고 개선점을 도출합니다.',
      content: `프로젝트가 완료되면 전체 프로세스를 회고합니다. PRD 작성부터 배포까지 각 단계의 소요 시간, 자동화율, 수작업 비율을 측정합니다. Claude Code에 "프로젝트 로그를 분석해서 병목 구간을 찾아줘"라고 요청할 수 있습니다.

개선 포인트를 식별합니다. 명세의 어떤 부분이 모호했는지, 자동 생성 코드의 품질은 어땠는지, 테스트 커버리지는 충분했는지를 정리합니다. 이 결과물은 다음 프로젝트의 프로세스 템플릿이 됩니다.

Spec-Driven 개발의 궁극적 목표는 "명세를 바꾸면 앱이 바뀐다"입니다. 이 이상에 얼마나 가까웠는지 평가하고, 수동 개입이 필요했던 지점을 추가 자동화 대상으로 기록합니다.`,
      tips: [
        '소요 시간을 단계별로 기록해두면 다음 프로젝트의 일정 산정이 정확해집니다.',
        '회고 결과를 CLAUDE.md에 반영하면 Claude Code의 다음 프로젝트 품질이 향상됩니다.',
      ],
    },
  ],
};
