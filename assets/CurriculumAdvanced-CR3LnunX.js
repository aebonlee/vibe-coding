import{r as h,h as I,a as v,j as e}from"./index-Be6EJXfM.js";import{S as y}from"./SidebarLayout-GFJ2aYsn.js";import{C}from"./CodeBlock-DY9g0n_b.js";import{L as S}from"./LevelBadge-BPeftfZZ.js";const i=[{id:"adv-spec-driven",slug:"spec-driven",title:"Spec-Driven 개발",description:"PRD 기반 구조화 명세서로 AI 자동 구현과 검증을 수행하는 체계적 개발 방법론.",level:"advanced",order:1,contents:[{id:"adv-spec-driven-1",title:"PRD 작성법과 구조화 명세",description:"제품 요구사항 문서(PRD)를 AI가 이해할 수 있는 구조화 명세로 변환합니다.",content:'Spec-Driven 개발은 자연어 PRD를 구조화된 기술 명세로 변환하고, AI가 이를 기반으로 코드를 자동 생성하는 방법론입니다. 핵심은 "명확한 입력 → 예측 가능한 출력"입니다. PRD에는 비즈니스 목표, 사용자 스토리, 기능 요구사항, 비기능 요구사항(성능·보안)을 포함해야 합니다. AI에게 전달할 때는 마크다운 구조로 계층화하고, 각 기능에 대해 입력/출력/예외 케이스를 명시합니다.',keyPoints:["PRD는 비즈니스 목표 → 사용자 스토리 → 기능 명세 → 비기능 요구사항 순서로 작성","구조화 명세는 API 엔드포인트, DB 스키마, 컴포넌트 트리를 포함",'모호한 표현("빠르게", "적절히")을 제거하고 수치로 명시',"AI가 이해하기 쉬운 마크다운 + JSON Schema 조합 권장"],codeExamples:[{language:"markdown",title:"PRD 구조화 명세 템플릿",code:`# PRD: 온라인 예약 시스템

## 1. 비즈니스 목표
- 전화 예약 대비 온라인 예약 비율 70% 달성
- 노쇼(No-show) 30% 감소

## 2. 사용자 스토리
- US-01: 사용자는 날짜/시간을 선택하여 예약할 수 있다
- US-02: 관리자는 예약 현황을 대시보드에서 확인한다
- US-03: 예약 24시간 전 자동 리마인더 발송

## 3. 기술 명세
### API 엔드포인트
| Method | Path              | 설명           |
|--------|-------------------|----------------|
| POST   | /api/reservations | 예약 생성       |
| GET    | /api/reservations | 예약 목록 조회  |
| PATCH  | /api/reservations/:id | 예약 수정  |

### DB 스키마
\`\`\`sql
CREATE TABLE reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  date DATE NOT NULL,
  time_slot TEXT NOT NULL,
  status TEXT DEFAULT 'confirmed',
  created_at TIMESTAMPTZ DEFAULT now()
);
\`\`\``}]},{id:"adv-spec-driven-2",title:"AI 자동 구현 워크플로우",description:"명세서를 기반으로 AI가 코드를 자동 생성하는 프로세스를 구축합니다.",content:"구조화 명세가 완성되면, Claude Code에 명세를 전달하여 DB 스키마 → API 레이어 → 프론트엔드 순서로 자동 구현합니다. 핵심은 한 번에 전체를 생성하지 않고, 레이어별로 생성 → 검증 → 다음 레이어 순서를 따르는 것입니다. 각 단계에서 생성된 코드가 명세와 일치하는지 확인한 뒤 진행합니다.",keyPoints:["DB 스키마 → API → 프론트엔드 순서로 단계적 구현","각 단계 완료 후 명세 대비 검증 수행","CLAUDE.md에 명세 요약을 포함하여 컨텍스트 유지","변경 사항은 명세 먼저 수정 후 코드 재생성"],codeExamples:[{language:"bash",title:"Claude Code로 단계별 구현",code:`# 1단계: DB 스키마 생성
claude "specs/db-schema.md를 읽고 Supabase SQL 마이그레이션 파일을 생성해줘"

# 2단계: API 레이어 생성
claude "specs/api-spec.md를 기반으로 Supabase Edge Functions를 생성해줘"

# 3단계: 프론트엔드 컴포넌트 생성
claude "specs/component-tree.md를 기반으로 React 컴포넌트를 생성해줘"

# 4단계: 명세 검증
claude "현재 코드가 specs/ 디렉토리의 명세와 일치하는지 검증해줘"`}]},{id:"adv-spec-driven-3",title:"검증 자동화와 지속적 준수",description:"명세 대비 코드의 일치 여부를 자동으로 검증합니다.",content:"명세 기반 개발에서 가장 중요한 것은 코드가 명세를 계속 준수하는지 자동으로 검증하는 것입니다. 테스트를 명세에서 자동 생성하고, CI 파이프라인에서 명세 준수 여부를 체크합니다. 명세가 변경되면 영향 범위를 자동 분석하고, 관련 코드와 테스트를 업데이트합니다.",keyPoints:["명세에서 테스트 케이스를 자동 생성 (E2E, Integration, Unit)","CI 파이프라인에 명세 준수 검증 단계 추가","명세 변경 시 영향 분석 자동화","Snapshot 테스트로 UI 명세 준수 확인"],codeExamples:[{language:"typescript",title:"명세 기반 자동 테스트 생성",code:`// specs/api-spec.json에서 테스트를 자동 생성
import { describe, it, expect } from 'vitest';
import apiSpec from '../specs/api-spec.json';

// 명세의 각 엔드포인트에 대해 자동으로 테스트 생성
for (const endpoint of apiSpec.endpoints) {
  describe(\`\${endpoint.method} \${endpoint.path}\`, () => {
    it('정상 요청 시 올바른 상태 코드를 반환한다', async () => {
      const res = await fetch(endpoint.path, {
        method: endpoint.method,
        body: JSON.stringify(endpoint.sampleInput),
      });
      expect(res.status).toBe(endpoint.expectedStatus);
    });

    it('잘못된 입력 시 400을 반환한다', async () => {
      const res = await fetch(endpoint.path, {
        method: endpoint.method,
        body: JSON.stringify(endpoint.invalidInput),
      });
      expect(res.status).toBe(400);
    });
  });
}`}]},{id:"adv-spec-driven-4",title:"AWS Kiro와 Spec-Driven 도구",description:"AWS Kiro 등 Spec-Driven 개발을 지원하는 전문 도구를 살펴봅니다.",content:'AWS Kiro는 Amazon이 출시한 Spec-Driven AI IDE로, "Spec → 구현 → 검증" 사이클을 자동화합니다. Kiro는 자연어 요구사항을 받아 구조화 명세(Spec)를 자동 생성하고, 이를 기반으로 코드를 구현하며, 테스트로 검증합니다. Claude Code의 CLAUDE.md + 명세 파일 조합과 유사하지만, IDE 수준에서 통합된 경험을 제공합니다. Spec-Driven 접근은 도구에 관계없이 적용 가능한 방법론입니다.',keyPoints:["AWS Kiro: 자연어 → Spec → 코드 → 검증의 통합 IDE",'Kiro의 "Steering" 기능으로 명세 기반 코드 생성 제어',"Claude Code에서도 CLAUDE.md + specs/ 디렉토리로 유사한 워크플로우 구현 가능",'핵심은 도구가 아닌 "명세 우선(Spec-First)" 마인드셋'],codeExamples:[{language:"markdown",title:"CLAUDE.md에 명세 참조 설정",code:`# CLAUDE.md

## Spec-Driven 워크플로우
- 모든 기능 구현 전에 \`specs/\` 디렉토리의 명세를 먼저 확인
- 명세에 없는 기능은 구현하지 않음
- 코드 변경 시 명세 업데이트 여부 확인 필수

## 명세 파일 구조
- \`specs/prd.md\` — 제품 요구사항
- \`specs/api-spec.json\` — API 명세
- \`specs/db-schema.sql\` — DB 스키마
- \`specs/component-tree.md\` — 컴포넌트 구조

## 검증 명령어
- 명세 준수 검증: \`npm run spec:validate\`
- 테스트 자동 생성: \`npm run spec:gen-tests\``}]}]},{id:"adv-multi-agent",slug:"multi-agent",title:"멀티에이전트 시스템",description:"Orchestrator-Worker 패턴으로 여러 AI 에이전트가 협업하는 시스템을 구축합니다.",level:"advanced",order:2,contents:[{id:"adv-multi-agent-1",title:"Orchestrator-Worker 패턴",description:"메인 에이전트가 작업을 분배하고 워커 에이전트가 실행하는 패턴을 학습합니다.",content:"멀티에이전트 시스템에서 가장 일반적인 패턴은 Orchestrator-Worker입니다. Orchestrator(지휘자)는 전체 작업을 분석하고 하위 태스크로 분할합니다. 각 Worker(실행자)는 특정 역할(프론트엔드, 백엔드, 테스트 등)을 전문적으로 수행합니다. Claude Code에서는 Task(SubAgent)를 활용하여 이 패턴을 구현할 수 있습니다. 핵심은 명확한 역할 정의와 인터페이스 설계입니다.",keyPoints:["Orchestrator는 작업 분해, 의존성 분석, 결과 통합을 담당","Worker는 특정 도메인(FE/BE/Test/DevOps)에 특화","Claude Code의 Task tool로 SubAgent 생성 가능","에이전트 간 통신은 파일 시스템 또는 메시지 패싱으로 구현"],codeExamples:[{language:"typescript",title:"Orchestrator-Worker 구조 설계",code:`// orchestrator.ts — 작업 분배 로직
interface AgentTask {
  id: string;
  role: 'frontend' | 'backend' | 'testing' | 'devops';
  description: string;
  dependencies: string[];  // 선행 태스크 ID
  status: 'pending' | 'running' | 'done' | 'failed';
}

function decomposeTask(requirement: string): AgentTask[] {
  return [
    {
      id: 'task-1',
      role: 'backend',
      description: 'Supabase 테이블과 RLS 정책 생성',
      dependencies: [],
      status: 'pending',
    },
    {
      id: 'task-2',
      role: 'frontend',
      description: 'React 페이지 컴포넌트와 라우팅 구현',
      dependencies: ['task-1'],  // 백엔드 완료 후 시작
      status: 'pending',
    },
    {
      id: 'task-3',
      role: 'testing',
      description: '통합 테스트 작성 및 실행',
      dependencies: ['task-1', 'task-2'],
      status: 'pending',
    },
  ];
}`}]},{id:"adv-multi-agent-2",title:"Claude Code SubAgent 활용",description:"Claude Code의 Task tool을 사용하여 SubAgent를 생성하고 병렬 처리합니다.",content:"Claude Code에서 SubAgent는 Task tool을 통해 생성됩니다. 메인 에이전트가 Task를 호출하면 독립적인 서브에이전트가 생성되어 지정된 작업을 수행합니다. 서브에이전트는 자체 컨텍스트를 가지며, 파일 읽기/쓰기, 코드 실행 등 메인 에이전트와 동일한 도구를 사용할 수 있습니다. 병렬로 여러 SubAgent를 실행하면 작업 속도가 크게 향상됩니다.",keyPoints:["Task tool로 서브에이전트를 생성하면 독립 컨텍스트에서 실행","의존성 없는 태스크는 병렬 실행으로 속도 향상","서브에이전트 결과는 메인 에이전트에 자동 반환","CLAUDE.md를 통해 모든 에이전트가 동일한 규칙을 따르도록 보장"],codeExamples:[{language:"markdown",title:"CLAUDE.md — 멀티에이전트 규칙 설정",code:`# CLAUDE.md

## 멀티에이전트 워크플로우 규칙
- 서브에이전트에게 작업을 위임할 때 반드시 명확한 범위 지정
- 각 에이전트는 자신의 담당 디렉토리만 수정
  - Frontend Agent: src/components/, src/pages/
  - Backend Agent: supabase/, src/api/
  - Test Agent: src/__tests__/
- 공유 파일(types/, utils/) 수정 시 Orchestrator 승인 필요
- 모든 에이전트는 TypeScript strict 모드 준수
- 커밋 메시지에 [agent:역할] 접두사 사용

## 병렬 실행 가이드
- 독립적인 컴포넌트는 병렬 생성
- DB 마이그레이션은 반드시 순차 실행
- 테스트는 구현 완료 후 실행`}]},{id:"adv-multi-agent-3",title:"에이전트 간 통신과 상태 관리",description:"여러 에이전트가 작업 상태를 공유하고 협업하는 방법을 구현합니다.",content:"멀티에이전트 시스템에서 에이전트 간 통신은 핵심 과제입니다. 가장 실용적인 방법은 파일 기반 통신입니다. 공유 디렉토리(예: .agents/)에 각 에이전트의 상태와 결과를 JSON으로 기록합니다. Orchestrator는 이 파일들을 모니터링하여 전체 진행 상황을 파악하고, 다음 단계를 결정합니다. 충돌 방지를 위해 각 에이전트가 수정할 수 있는 파일 범위를 엄격히 제한합니다.",keyPoints:[".agents/ 디렉토리에 상태 파일을 JSON으로 기록","각 에이전트의 파일 수정 범위를 명확히 분리","Lock 파일로 동시 수정 충돌 방지","Orchestrator가 상태를 취합하여 다음 단계 결정"],codeExamples:[{language:"json",title:".agents/status.json — 에이전트 상태 파일",code:`{
  "orchestrator": {
    "phase": "implementation",
    "totalTasks": 5,
    "completedTasks": 3
  },
  "agents": {
    "frontend": {
      "status": "running",
      "currentTask": "task-2",
      "progress": "src/pages/ReservationPage.tsx 생성 중",
      "filesModified": [
        "src/pages/ReservationPage.tsx",
        "src/components/Calendar.tsx"
      ]
    },
    "backend": {
      "status": "done",
      "currentTask": "task-1",
      "result": "테이블 3개, RLS 정책 6개 생성 완료",
      "filesModified": [
        "supabase/migrations/001_reservations.sql"
      ]
    },
    "testing": {
      "status": "pending",
      "waitingFor": ["task-2"]
    }
  }
}`}]}]},{id:"adv-automation",slug:"automation",title:"개발 자동화",description:"CI/CD 파이프라인에 AI를 통합하여 테스트 생성, 코드 리뷰, 배포를 자동화합니다.",level:"advanced",order:3,contents:[{id:"adv-automation-1",title:"CI/CD + AI 통합",description:"GitHub Actions에 AI 기반 자동화 단계를 추가합니다.",content:"전통적인 CI/CD 파이프라인(빌드 → 테스트 → 배포)에 AI 단계를 추가하면 코드 품질과 개발 속도를 크게 향상시킬 수 있습니다. PR이 생성되면 AI가 자동으로 코드를 리뷰하고, 누락된 테스트를 감지하며, 보안 취약점을 스캔합니다. 배포 후에는 AI가 로그를 모니터링하여 이상 징후를 조기에 발견합니다.",keyPoints:["PR 생성 시 AI 코드 리뷰 자동 실행","커밋마다 AI가 영향 범위를 분석하여 필요한 테스트만 실행","배포 전 AI 보안 스캔으로 취약점 사전 차단","GitHub Actions + Claude Code CLI 조합으로 구현"],codeExamples:[{language:"yaml",title:".github/workflows/ai-review.yml",code:`name: AI Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Get changed files
        id: changed
        run: |
          echo "files=$(git diff --name-only origin/main...HEAD | tr '\\n' ' ')" >> $GITHUB_OUTPUT

      - name: AI Code Review
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          npx claude-code -p "다음 변경 파일들을 리뷰해줘: \${{ steps.changed.outputs.files }}
          - 버그 가능성, 성능 이슈, 보안 취약점 확인
          - 개선 제안을 구체적으로 작성
          - 결과를 REVIEW.md에 저장" --allowedTools "Read,Write,Bash"

      - name: Post review comment
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs');
            const review = fs.readFileSync('REVIEW.md', 'utf8');
            github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.issue.number,
              body: review
            });`}]},{id:"adv-automation-2",title:"자동 테스트 생성",description:"AI를 활용하여 코드 변경에 대한 테스트를 자동으로 생성합니다.",content:"코드를 작성하면 AI가 해당 코드에 대한 테스트를 자동으로 생성합니다. 함수 시그니처, 입출력 타입, 엣지 케이스를 분석하여 유닛 테스트, 통합 테스트, E2E 테스트를 생성합니다. Claude Code의 Hooks 기능을 활용하면 파일 저장 시 자동으로 테스트가 생성되도록 설정할 수 있습니다.",keyPoints:["함수 시그니처 분석으로 유닛 테스트 자동 생성","엣지 케이스(null, 빈 배열, 경계값)를 자동으로 포함","Hooks로 파일 저장 시 테스트 자동 생성 파이프라인 구축","커버리지 목표(80%+)를 설정하고 AI가 부족 부분 보완"],codeExamples:[{language:"typescript",title:"AI 생성 테스트 예시",code:`// src/utils/reservation.ts
export function validateTimeSlot(
  date: string,
  time: string,
  existingSlots: string[]
): { valid: boolean; reason?: string } {
  if (!date || !time) return { valid: false, reason: '날짜와 시간을 입력해주세요' };
  const slotKey = \`\${date}_\${time}\`;
  if (existingSlots.includes(slotKey)) {
    return { valid: false, reason: '이미 예약된 시간입니다' };
  }
  return { valid: true };
}

// AI가 자동 생성한 테스트: src/utils/__tests__/reservation.test.ts
import { describe, it, expect } from 'vitest';
import { validateTimeSlot } from '../reservation';

describe('validateTimeSlot', () => {
  it('유효한 시간대를 올바르게 검증한다', () => {
    const result = validateTimeSlot('2026-05-01', '10:00', []);
    expect(result.valid).toBe(true);
  });

  it('빈 날짜를 거부한다', () => {
    const result = validateTimeSlot('', '10:00', []);
    expect(result.valid).toBe(false);
    expect(result.reason).toContain('날짜');
  });

  it('이미 예약된 시간대를 거부한다', () => {
    const existing = ['2026-05-01_10:00'];
    const result = validateTimeSlot('2026-05-01', '10:00', existing);
    expect(result.valid).toBe(false);
    expect(result.reason).toContain('이미 예약');
  });
});`}]},{id:"adv-automation-3",title:"코드 리뷰 자동화",description:"AI 기반 코드 리뷰를 팀 워크플로우에 통합합니다.",content:"AI 코드 리뷰는 인간 리뷰어를 대체하는 것이 아니라 보완합니다. AI는 스타일 일관성, 타입 안전성, 잠재적 버그, 성능 이슈를 빠르게 감지합니다. 인간 리뷰어는 비즈니스 로직의 정확성, 아키텍처 결정, UX 관점에 집중할 수 있습니다. Claude Code에서는 /review-pr 스킬이나 커스텀 스크립트로 자동 리뷰를 실행할 수 있습니다.",keyPoints:["AI 리뷰: 스타일, 타입, 버그, 성능 / 인간 리뷰: 로직, 아키텍처, UX","리뷰 체크리스트를 CLAUDE.md에 정의하여 일관성 확보","Severity 레벨(Critical/Warning/Info)로 우선순위 구분","자동 Fix 가능한 항목은 AI가 PR에 직접 커밋"],codeExamples:[{language:"json",title:".claude/settings.json — 코드 리뷰 Hook 설정",code:`{
  "hooks": {
    "pre-commit": [
      {
        "command": "npx tsc --noEmit",
        "description": "TypeScript 타입 체크"
      },
      {
        "command": "npx eslint --fix .",
        "description": "ESLint 자동 수정"
      }
    ],
    "post-commit": [
      {
        "command": "claude -p '마지막 커밋의 변경사항을 리뷰하고 이슈가 있으면 보고해줘'",
        "description": "AI 자동 리뷰"
      }
    ]
  }
}`}]},{id:"adv-automation-4",title:"GitHub Actions 배포 파이프라인",description:"AI 검증을 포함한 완전 자동화 배포 파이프라인을 구축합니다.",content:"AI 기반 배포 파이프라인은 빌드 → AI 검증 → 테스트 → 스테이징 배포 → AI 모니터링 → 프로덕션 배포 순서로 동작합니다. GitHub Pages 배포 시에는 gh-pages 브랜치로 빌드 결과물을 자동 push합니다. AI 단계가 실패하면 배포가 중단되고 개발자에게 알림이 발송됩니다.",keyPoints:["빌드 → AI 검증 → 테스트 → 배포의 자동화 파이프라인","AI가 빌드 결과물의 번들 크기, 접근성, SEO를 자동 점검","GitHub Pages 배포: gh-pages 브랜치 자동 push","배포 실패 시 자동 롤백 메커니즘 구현"],codeExamples:[{language:"yaml",title:".github/workflows/deploy.yml",code:`name: Build & Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci
      - run: npm run build
      - run: npm test -- --run

      - name: Check bundle size
        run: |
          SIZE=$(du -sb dist | cut -f1)
          if [ "$SIZE" -gt 5242880 ]; then
            echo "::warning::번들 크기가 5MB를 초과합니다: $SIZE bytes"
          fi

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: mysite.dreamitbiz.com`}]}]},{id:"adv-production-stability",slug:"production-stability",title:"프로덕션 안정성",description:"에러 핸들링, 로깅, 모니터링, 보안으로 프로덕션 환경의 안정성을 확보합니다.",level:"advanced",order:4,contents:[{id:"adv-production-stability-1",title:"체계적 에러 핸들링",description:"AI와 함께 견고한 에러 핸들링 전략을 구축합니다.",content:'프로덕션 환경에서 에러는 불가피합니다. 중요한 것은 에러가 사용자 경험을 완전히 파괴하지 않도록 방어하는 것입니다. React의 Error Boundary로 컴포넌트 단위 에러를 격리하고, API 호출에는 재시도 로직과 폴백을 적용합니다. AI에게 "이 코드에 에러 핸들링을 추가해줘"라고 요청하면 누락된 try-catch, null 체크, 타입 가드를 자동으로 추가합니다.',keyPoints:["Error Boundary로 컴포넌트 단위 에러 격리","API 호출에 재시도(retry) + 지수 백오프(exponential backoff) 적용","AI에게 에러 핸들링 감사(audit) 요청으로 누락 지점 발견","사용자에게 친절한 에러 메시지 표시 (기술 상세는 로그에만)"],codeExamples:[{language:"typescript",title:"Error Boundary + 재시도 로직",code:`// ErrorBoundary.tsx
import { Component, type ReactNode } from 'react';

interface Props { children: ReactNode; fallback?: ReactNode; }
interface State { hasError: boolean; error?: Error; }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack);
    // 에러 리포팅 서비스로 전송
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="p-8 text-center">
          <h2>문제가 발생했습니다</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            다시 시도
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// fetchWithRetry.ts — 재시도 로직
export async function fetchWithRetry<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  baseDelay = 1000
): Promise<T> {
  for (let i = 0; i <= maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries) throw error;
      const delay = baseDelay * Math.pow(2, i);
      await new Promise(r => setTimeout(r, delay));
    }
  }
  throw new Error('Unreachable');
}`}]},{id:"adv-production-stability-2",title:"로깅과 모니터링",description:"구조화된 로깅과 실시간 모니터링으로 문제를 조기에 감지합니다.",content:"프로덕션 환경에서는 console.log 대신 구조화된 로깅을 사용해야 합니다. 로그에 타임스탬프, 레벨, 컨텍스트를 포함하고, 중요 이벤트(로그인, 결제, 에러)는 Supabase 테이블에 기록합니다. 프론트엔드에서는 Performance API로 핵심 웹 바이탈(Core Web Vitals)을 측정하고, 임계값 초과 시 알림을 발송합니다.",keyPoints:["console.log → 구조화된 Logger 클래스로 전환","로그 레벨: DEBUG, INFO, WARN, ERROR, FATAL 구분","Core Web Vitals(LCP, FID, CLS) 측정 및 모니터링","Supabase 테이블에 에러 로그를 저장하여 추적 가능"],codeExamples:[{language:"typescript",title:"구조화된 Logger 클래스",code:`// utils/logger.ts
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  context?: Record<string, unknown>;
  timestamp: string;
  userAgent?: string;
}

class Logger {
  private static instance: Logger;
  private buffer: LogEntry[] = [];

  static getInstance() {
    if (!Logger.instance) Logger.instance = new Logger();
    return Logger.instance;
  }

  private log(level: LogLevel, message: string, context?: Record<string, unknown>) {
    const entry: LogEntry = {
      level,
      message,
      context,
      timestamp: new Date().toISOString(),
    };

    // 개발 환경에서는 콘솔 출력
    if (import.meta.env.DEV) {
      console[level === 'debug' ? 'log' : level](message, context);
    }

    // ERROR 레벨은 즉시 서버에 전송
    if (level === 'error') {
      this.flush([entry]);
    } else {
      this.buffer.push(entry);
      if (this.buffer.length >= 10) this.flush();
    }
  }

  private async flush(entries?: LogEntry[]) {
    const toSend = entries ?? this.buffer.splice(0);
    if (toSend.length === 0) return;
    try {
      await fetch('/api/logs', {
        method: 'POST',
        body: JSON.stringify(toSend),
      });
    } catch { /* 로깅 실패는 무시 */ }
  }

  debug(msg: string, ctx?: Record<string, unknown>) { this.log('debug', msg, ctx); }
  info(msg: string, ctx?: Record<string, unknown>) { this.log('info', msg, ctx); }
  warn(msg: string, ctx?: Record<string, unknown>) { this.log('warn', msg, ctx); }
  error(msg: string, ctx?: Record<string, unknown>) { this.log('error', msg, ctx); }
}

export const logger = Logger.getInstance();`}]},{id:"adv-production-stability-3",title:"성능 최적화와 보안 체크리스트",description:"AI를 활용한 성능 최적화 방법과 프로덕션 보안 점검 항목을 정리합니다.",content:'프로덕션 배포 전에 성능과 보안을 반드시 점검해야 합니다. AI에게 "이 프로젝트의 성능을 최적화해줘"라고 요청하면 코드 분할, 이미지 최적화, 메모이제이션 적용 등을 자동으로 수행합니다. 보안 점검에서는 XSS 방지, CSRF 토큰, 환경변수 노출 여부, SQL 인젝션 방지를 확인합니다.',keyPoints:["React.lazy + Suspense로 코드 분할 적용","useMemo/useCallback으로 불필요한 리렌더링 방지","환경변수(.env)가 클라이언트에 노출되지 않는지 확인","Supabase RLS(Row Level Security) 정책 필수 적용"],codeExamples:[{language:"markdown",title:"프로덕션 배포 전 체크리스트",code:`## 성능 체크리스트
- [ ] 번들 크기 3MB 이하 확인 (npm run build)
- [ ] 이미지 WebP 변환 및 lazy loading
- [ ] React.lazy로 라우트 단위 코드 분할
- [ ] API 응답 캐싱 적용 (stale-while-revalidate)
- [ ] Lighthouse 성능 점수 90+ 확인

## 보안 체크리스트
- [ ] .env 파일이 .gitignore에 포함
- [ ] VITE_SUPABASE_ANON_KEY만 클라이언트에 노출 (service_role 절대 금지)
- [ ] Supabase RLS 정책 모든 테이블에 적용
- [ ] XSS: dangerouslySetInnerHTML 미사용 또는 DOMPurify 적용
- [ ] HTTPS 강제 리디렉션 확인
- [ ] Content-Security-Policy 헤더 설정

## 안정성 체크리스트
- [ ] Error Boundary 주요 컴포넌트에 적용
- [ ] API 호출에 timeout, retry 로직 적용
- [ ] 404 페이지와 에러 페이지 구현
- [ ] 오프라인 상태 감지 및 안내 UI`}]},{id:"adv-production-stability-4",title:"롤백 전략",description:"배포 실패 시 빠르게 이전 버전으로 복구하는 전략을 수립합니다.",content:'프로덕션에서 문제가 발생했을 때 빠르게 복구하는 능력은 필수입니다. GitHub Pages 환경에서는 gh-pages 브랜치의 이전 커밋으로 force push하여 롤백할 수 있습니다. Supabase DB 변경은 다운 마이그레이션 스크립트를 미리 작성해 둡니다. 핵심은 "배포 전에 롤백 계획을 먼저 세우는 것"입니다.',keyPoints:["GitHub Pages: gh-pages 브랜치 이전 커밋으로 롤백","DB 변경은 반드시 다운 마이그레이션 스크립트 작성","롤백 시간 목표: 5분 이내","배포마다 태그를 생성하여 복구 지점 명확화"],codeExamples:[{language:"bash",title:"GitHub Pages 롤백 스크립트",code:`#!/bin/bash
# rollback.sh — GitHub Pages 긴급 롤백

set -e

echo "=== GitHub Pages 롤백 ==="

# 현재 배포 커밋 확인
CURRENT=$(git log gh-pages -1 --format="%H %s")
echo "현재 배포: $CURRENT"

# 이전 배포 목록 표시
echo ""
echo "최근 배포 이력:"
git log gh-pages --oneline -5

# 이전 배포로 롤백
PREV_COMMIT=$(git log gh-pages --format="%H" -2 | tail -1)
echo ""
echo "롤백 대상: $(git log --oneline -1 $PREV_COMMIT)"

git checkout gh-pages
git reset --hard "$PREV_COMMIT"
git push -f origin gh-pages

echo ""
echo "롤백 완료! 사이트가 2-3분 내에 복구됩니다."`}]}]},{id:"adv-architecture",slug:"architecture",title:"AI와 아키텍처 설계",description:"AI의 도움으로 모노레포, 컴포넌트 설계, 상태 관리, API/DB 설계를 수행합니다.",level:"advanced",order:5,contents:[{id:"adv-architecture-1",title:"모노레포 vs 멀티레포 설계",description:"AI를 활용하여 프로젝트 규모에 맞는 저장소 전략을 선택합니다.",content:"프로젝트 규모가 커지면 코드를 어떻게 구성할지가 중요해집니다. 모노레포(Monorepo)는 여러 프로젝트를 하나의 저장소에서 관리하여 코드 공유가 쉽습니다. 멀티레포(Multi-repo)는 각 프로젝트를 독립 저장소로 관리하여 배포 독립성이 높습니다. AI에게 프로젝트 특성(팀 규모, 코드 공유 빈도, 배포 주기)을 설명하면 적합한 전략을 추천받을 수 있습니다.",keyPoints:["모노레포: 코드 공유 쉬움, 일관된 도구/설정, 빌드 시간 증가 주의","멀티레포: 배포 독립성, 팀 자율성, 코드 중복 위험","소규모 팀/공유 코드 많으면 → 모노레포 추천","AI에게 프로젝트 구조를 분석시켜 공유 가능한 코드 식별"],codeExamples:[{language:"json",title:"Turborepo 모노레포 구조 (turbo.json)",code:`{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {},
    "test": {
      "dependsOn": ["build"]
    }
  }
}

// 디렉토리 구조
// packages/
//   ui/           ← 공유 UI 컴포넌트 (Button, Modal, Toast)
//   utils/        ← 공유 유틸리티 (logger, fetchWithRetry)
//   types/        ← 공유 타입 정의
// apps/
//   web/          ← 메인 웹 애플리케이션
//   admin/        ← 관리자 대시보드
//   docs/         ← 문서 사이트`}]},{id:"adv-architecture-2",title:"AI 기반 컴포넌트 설계",description:"AI와 함께 재사용 가능하고 유지보수하기 쉬운 컴포넌트를 설계합니다.",content:'좋은 컴포넌트 설계의 원칙은 단일 책임, 합성(Composition), 인터페이스 최소화입니다. AI에게 "이 페이지를 분석해서 컴포넌트 트리를 설계해줘"라고 요청하면, 재사용 가능한 원자 컴포넌트(Atom)부터 페이지 컴포넌트까지 계층을 자동으로 설계합니다. Atomic Design(Atoms → Molecules → Organisms → Templates → Pages) 패턴과 잘 어울립니다.',keyPoints:["Atomic Design: Atoms → Molecules → Organisms → Pages","컴포넌트 Props는 최소화하고, children과 합성 활용","AI에게 기존 컴포넌트를 분석시켜 중복 코드 리팩토링","Storybook으로 컴포넌트를 독립적으로 개발/테스트"],codeExamples:[{language:"typescript",title:"AI가 설계한 합성 패턴 컴포넌트",code:`// 합성(Composition) 패턴으로 유연한 Card 컴포넌트
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={\`rounded-lg border bg-white shadow-sm \${className}\`}>
      {children}
    </div>
  );
}

Card.Header = function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="border-b px-6 py-4 font-semibold">{children}</div>;
};

Card.Body = function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="px-6 py-4">{children}</div>;
};

Card.Footer = function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="border-t px-6 py-3 bg-gray-50">{children}</div>;
};

// 사용 예시 — 조합 자유자재
<Card>
  <Card.Header>예약 현황</Card.Header>
  <Card.Body>
    <p>오늘 예약: 12건</p>
  </Card.Body>
  <Card.Footer>
    <button>전체 보기</button>
  </Card.Footer>
</Card>`}]},{id:"adv-architecture-3",title:"상태 관리와 API 설계",description:"AI와 함께 확장 가능한 상태 관리 전략과 API 구조를 설계합니다.",content:"상태 관리는 프로젝트 규모에 따라 전략이 달라집니다. 소규모: React Context + useReducer, 중규모: Zustand 또는 Jotai, 대규모: 서버 상태(TanStack Query) + 클라이언트 상태(Zustand) 분리. API 설계에서는 RESTful 원칙을 따르되, Supabase의 PostgREST를 활용하면 DB 스키마에서 API가 자동 생성됩니다. AI에게 도메인 모델을 설명하면 엔티티 관계와 API 구조를 자동으로 설계합니다.",keyPoints:["서버 상태(API 데이터)와 클라이언트 상태(UI 상태)를 분리","TanStack Query로 서버 상태 캐싱, 재검증, 낙관적 업데이트","Supabase PostgREST: DB 테이블이 곧 REST API","AI에게 엔티티 관계도(ERD)를 자동 생성 요청 가능"],codeExamples:[{language:"typescript",title:"TanStack Query + Supabase 패턴",code:`// hooks/useReservations.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';

// 서버 상태: TanStack Query가 캐싱/재검증 관리
export function useReservations(date: string) {
  return useQuery({
    queryKey: ['reservations', date],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('reservations')
        .select('*')
        .eq('date', date)
        .order('time_slot');
      if (error) throw error;
      return data;
    },
    staleTime: 1000 * 60, // 1분간 캐시 유지
  });
}

// 낙관적 업데이트: UI를 먼저 반영하고 서버에 동기화
export function useCreateReservation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: { date: string; time_slot: string }) => {
      const { data, error } = await supabase
        .from('reservations')
        .insert(input)
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['reservations', variables.date],
      });
    },
  });
}`}]}]},{id:"adv-team-workflow",slug:"team-workflow",title:"팀 워크플로우",description:"CLAUDE.md 공유, AI PR 리뷰, 지식 공유, 온보딩 자동화로 팀 생산성을 극대화합니다.",level:"advanced",order:6,contents:[{id:"adv-team-workflow-1",title:"CLAUDE.md와 팀 컨벤션 공유",description:"CLAUDE.md를 팀 전체가 공유하여 AI 도구의 일관성을 확보합니다.",content:'CLAUDE.md는 AI 에이전트에게 프로젝트 규칙과 컨텍스트를 전달하는 문서입니다. 팀에서 이 파일을 Git에 포함하여 공유하면, 모든 팀원의 AI가 동일한 코딩 스타일, 아키텍처 패턴, 네이밍 규칙을 따릅니다. 이를 통해 "AI가 생성한 코드가 팀마다 다른" 문제를 해결할 수 있습니다. CLAUDE.md는 프로젝트 루트에 위치하며, 3단계 계층(글로벌 → 프로젝트 → 개인)으로 관리합니다.',keyPoints:["CLAUDE.md는 반드시 Git에 포함하여 팀 전체가 공유","글로벌(~/.claude/) → 프로젝트(./CLAUDE.md) → 개인(.claude/local) 3단계 계층","코딩 컨벤션, 금지 패턴, 선호 라이브러리를 명시","정기적으로 CLAUDE.md를 리뷰하고 업데이트"],codeExamples:[{language:"markdown",title:"CLAUDE.md — 팀 공유 템플릿",code:`# CLAUDE.md

## 프로젝트 개요
React 19 + Vite + Supabase 기반 예약 관리 시스템

## 기술 스택
- React 19, TypeScript (strict), Vite 8
- Supabase (Auth, DB, Storage, Edge Functions)
- TailwindCSS, React Router v7

## 코딩 컨벤션
- 함수 컴포넌트 + hooks만 사용 (class 컴포넌트 금지)
- 타입은 interface 우선 (type은 union/intersection에만)
- 파일명: PascalCase(컴포넌트), camelCase(유틸), kebab-case(라우트)
- import 순서: React → 외부 → 내부 → 타입

## 금지 패턴
- any 타입 사용 금지
- console.log (logger 사용)
- inline styles (TailwindCSS 사용)
- default export (named export만)

## DB 규칙
- 테이블 접두사: rsv_ (예: rsv_reservations)
- RLS 정책 필수
- created_at, updated_at 컬럼 필수`}]},{id:"adv-team-workflow-2",title:"AI PR 리뷰와 지식 공유",description:"AI를 활용한 PR 리뷰 프로세스와 팀 내 지식 축적 방법을 설계합니다.",content:"AI PR 리뷰를 팀 워크플로우에 통합하면, 코드 품질을 일관되게 유지하면서 리뷰 병목을 해소할 수 있습니다. AI가 1차 리뷰(스타일, 버그, 보안)를 수행하고, 인간 리뷰어는 비즈니스 로직과 설계 판단에 집중합니다. 또한 AI가 리뷰하면서 발견한 패턴과 반복 이슈를 팀 위키에 자동 축적하면, 자연스럽게 팀 지식이 쌓입니다.",keyPoints:["AI 1차 리뷰 → 인간 2차 리뷰의 2단계 프로세스","AI 리뷰 결과를 PR 코멘트로 자동 게시",'반복 이슈를 CLAUDE.md의 "금지 패턴"에 자동 추가',"주간 AI 리뷰 요약으로 팀 전체 코드 품질 트렌드 파악"],codeExamples:[{language:"bash",title:"AI PR 리뷰 실행 스크립트",code:`#!/bin/bash
# scripts/ai-review.sh — PR 생성 전 AI 사전 리뷰

echo "=== AI 코드 리뷰 시작 ==="

# 변경 파일 목록
CHANGED=$(git diff --name-only main...HEAD)
echo "변경 파일: $CHANGED"

# Claude Code로 리뷰 실행
claude -p "다음 파일들의 변경사항을 리뷰해줘:
$CHANGED

리뷰 기준:
1. CLAUDE.md의 코딩 컨벤션 준수 여부
2. TypeScript 타입 안전성
3. 잠재적 버그 (null 참조, 배열 경계, 비동기 에러 등)
4. 보안 이슈 (XSS, 환경변수 노출 등)
5. 성능 이슈 (불필요한 리렌더링, 큰 번들 등)

결과를 Critical / Warning / Info 레벨로 분류해줘."

echo "=== AI 리뷰 완료 ==="`}]},{id:"adv-team-workflow-3",title:"온보딩 자동화",description:"새 팀원의 프로젝트 온보딩을 AI로 자동화하여 적응 시간을 단축합니다.",content:'새 팀원이 합류했을 때 프로젝트 구조, 코딩 규칙, 업무 프로세스를 이해하는 데 상당한 시간이 소요됩니다. CLAUDE.md와 프로젝트 문서를 잘 정리해 두면, 새 팀원이 Claude Code에 "이 프로젝트 구조를 설명해줘"라고 질문하는 것만으로 온보딩이 가능합니다. 나아가 온보딩 체크리스트를 자동화하면 환경 설정, 의존성 설치, DB 연결까지 한 번에 수행됩니다.',keyPoints:["CLAUDE.md에 프로젝트 구조, 규칙, FAQ를 상세히 기록","온보딩 스크립트로 환경 설정 자동화 (setup.sh)","새 팀원이 Claude Code로 코드베이스를 즉시 탐색 가능","첫 PR까지의 시간을 측정하여 온보딩 효과 평가"],codeExamples:[{language:"bash",title:"scripts/setup.sh — 자동 온보딩 스크립트",code:`#!/bin/bash
# 새 팀원 온보딩 자동화 스크립트

set -e
echo "=== 프로젝트 온보딩 시작 ==="

# 1. 의존성 설치
echo "[1/5] 의존성 설치 중..."
npm install

# 2. 환경변수 설정
echo "[2/5] 환경변수 설정 중..."
if [ ! -f .env ]; then
  cp .env.example .env
  echo "  .env 파일이 생성되었습니다. SUPABASE 키를 입력해주세요."
fi

# 3. Git hooks 설정
echo "[3/5] Git hooks 설정 중..."
npx husky install

# 4. 타입 체크
echo "[4/5] TypeScript 타입 체크..."
npx tsc --noEmit

# 5. 프로젝트 구조 안내
echo "[5/5] 프로젝트 구조:"
echo "  src/
    components/  ← 재사용 가능한 UI 컴포넌트
    pages/       ← 라우트 페이지
    hooks/       ← 커스텀 React hooks
    utils/       ← 유틸리티 함수
    types/       ← TypeScript 타입 정의
    contexts/    ← React Context 정의"

echo ""
echo "=== 온보딩 완료! ==="
echo "CLAUDE.md를 읽고, 'npm run dev'로 시작하세요."`}]}]},{id:"adv-custom-toolchain",slug:"custom-toolchain",title:"자체 도구체인 구축",description:"MCP 서버 개발, Custom Skills, Hooks 시스템으로 프로젝트 전용 AI 도구를 만듭니다.",level:"advanced",order:7,contents:[{id:"adv-custom-toolchain-1",title:"MCP 서버 개발",description:"Model Context Protocol 서버를 직접 개발하여 AI 도구를 확장합니다.",content:"MCP(Model Context Protocol)는 AI 에이전트가 외부 시스템과 통신하기 위한 표준 프로토콜입니다. MCP 서버를 개발하면 AI가 사내 시스템(DB, API, 문서 등)에 접근할 수 있습니다. 예를 들어, Supabase MCP 서버를 만들면 Claude Code가 직접 DB를 조회하고 스키마를 분석할 수 있습니다. @modelcontextprotocol/sdk를 사용하여 Tool, Resource, Prompt를 정의합니다.",keyPoints:["MCP 3가지 요소: Tool(액션), Resource(데이터), Prompt(템플릿)","@modelcontextprotocol/sdk로 TypeScript MCP 서버 개발","Claude Code의 claude_desktop_config.json에 서버 등록","stdio 또는 HTTP 전송 방식 선택 가능"],codeExamples:[{language:"typescript",title:"MCP 서버 기본 구조",code:`// mcp-server/src/index.ts
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const server = new McpServer({
  name: 'project-tools',
  version: '1.0.0',
});

// Tool 정의: DB 테이블 목록 조회
server.tool(
  'list-tables',
  '프로젝트 DB의 테이블 목록을 조회합니다',
  { prefix: z.string().optional().describe('테이블 접두사 필터') },
  async ({ prefix }) => {
    const tables = await queryTables(prefix);
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(tables, null, 2),
      }],
    };
  }
);

// Resource 정의: 프로젝트 설정 파일
server.resource(
  'project-config',
  'file:///project/config',
  async () => ({
    contents: [{
      uri: 'file:///project/config',
      mimeType: 'application/json',
      text: JSON.stringify(await loadConfig()),
    }],
  })
);

// 서버 시작
const transport = new StdioServerTransport();
await server.connect(transport);`}]},{id:"adv-custom-toolchain-2",title:"Custom Skills 개발",description:"Claude Code에서 슬래시 명령어로 호출하는 커스텀 스킬을 만듭니다.",content:"Claude Code의 Custom Skills는 반복적인 작업을 슬래시 명령어(/deploy, /test, /review 등)로 자동화합니다. .claude/commands/ 디렉토리에 마크다운 파일을 생성하면 해당 파일명이 슬래시 명령어가 됩니다. 스킬 파일에는 AI에게 전달할 프롬프트와 허용할 도구를 정의합니다. 팀 전체가 공유하는 스킬은 프로젝트 루트의 .claude/commands/에, 개인 스킬은 ~/.claude/commands/에 저장합니다.",keyPoints:[".claude/commands/deploy.md → /deploy 명령어로 호출","스킬 파일에 $ARGUMENTS로 사용자 입력을 받을 수 있음","프로젝트 스킬(.claude/commands/)과 개인 스킬(~/.claude/commands/) 분리","자주 반복하는 작업(배포, 테스트, 리뷰)을 스킬로 자동화"],codeExamples:[{language:"markdown",title:".claude/commands/deploy.md",code:`# 배포 스킬

다음 단계로 프로젝트를 배포해줘:

1. TypeScript 타입 체크 실행: \`npx tsc --noEmit\`
2. 린트 검사: \`npx eslint src/\`
3. 테스트 실행: \`npm test -- --run\`
4. 프로덕션 빌드: \`npm run build\`
5. 빌드 결과물 크기 확인 (5MB 초과 시 경고)
6. GitHub Pages 배포: \`npx gh-pages -d dist\`

$ARGUMENTS 가 있으면 해당 내용을 추가 지시사항으로 반영해줘.

배포 완료 후 결과를 요약해줘:
- 빌드 크기
- 테스트 통과 여부
- 배포 URL`},{language:"markdown",title:".claude/commands/new-page.md",code:`# 새 페이지 생성 스킬

$ARGUMENTS 이름으로 새 페이지를 생성해줘:

1. \`src/pages/$ARGUMENTS.tsx\` 파일 생성
2. 기존 페이지 컴포넌트 패턴을 따름
3. React Router에 라우트 추가
4. 네비게이션 메뉴에 링크 추가
5. 기본 레이아웃(헤더, 푸터) 적용
6. TypeScript 타입 체크 통과 확인

CLAUDE.md의 코딩 컨벤션을 반드시 준수할 것.`}]},{id:"adv-custom-toolchain-3",title:"Hooks 시스템 활용",description:"Claude Code의 Hooks로 이벤트 기반 자동화를 구축합니다.",content:"Hooks는 Claude Code의 특정 이벤트(파일 변경, 커밋 전, 커밋 후 등)에 자동으로 실행되는 스크립트입니다. 예를 들어, .tsx 파일이 변경될 때마다 자동으로 린트를 실행하거나, 커밋 전에 테스트를 실행하는 워크플로우를 구축할 수 있습니다. .claude/settings.json에서 설정하며, 프로젝트별 또는 글로벌로 적용할 수 있습니다.",keyPoints:["pre-commit, post-commit, file-change 등 다양한 이벤트 지원",".claude/settings.json에서 hooks 배열로 정의","셸 명령어 또는 Claude Code 프롬프트를 실행 가능","팀 전체에 동일한 Hooks를 적용하여 품질 일관성 확보"],codeExamples:[{language:"json",title:".claude/settings.json — Hooks 설정",code:`{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hook": "if echo "$INPUT" | grep -q 'rm -rf'; then echo 'DENY: 위험한 삭제 명령어 차단'; exit 1; fi"
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write",
        "hook": "FILE=$(echo $INPUT | jq -r '.file_path'); if [[ "$FILE" == *.tsx ]]; then npx eslint --fix "$FILE" 2>/dev/null; fi"
      }
    ],
    "Notification": [
      {
        "matcher": "",
        "hook": "terminal-notifier -message "$MESSAGE" -title 'Claude Code'"
      }
    ]
  }
}`}]},{id:"adv-custom-toolchain-4",title:"프로젝트 전용 명령어 체계",description:"Skills + Hooks + MCP를 조합하여 프로젝트 맞춤형 도구체인을 완성합니다.",content:"MCP 서버, Custom Skills, Hooks를 조합하면 프로젝트에 최적화된 완전한 AI 도구체인을 구축할 수 있습니다. MCP 서버는 외부 시스템 접근을 담당하고, Skills는 복잡한 워크플로우를 명령어화하며, Hooks는 자동화 규칙을 적용합니다. 이 3가지를 잘 조합하면 AI가 프로젝트 컨텍스트를 완전히 이해하고, 팀의 워크플로우에 녹아든 개발 경험을 제공합니다.",keyPoints:["MCP: 외부 시스템 접근 (DB, API, 문서)","Skills: 반복 워크플로우 자동화 (/deploy, /test, /new-page)","Hooks: 이벤트 기반 자동 실행 (린트, 타입체크, 보안스캔)","3가지를 조합하여 프로젝트 전용 AI 개발환경 구축"],codeExamples:[{language:"markdown",title:"도구체인 아키텍처 정리",code:`## 프로젝트 AI 도구체인

### MCP 서버 (외부 시스템 연동)
- project-db: Supabase DB 조회/분석
- project-docs: Notion 문서 검색/읽기
- project-deploy: 배포 상태 모니터링

### Custom Skills (워크플로우 자동화)
- /deploy      — 빌드 + 테스트 + 배포
- /new-page    — 새 페이지 생성
- /review      — 코드 리뷰 실행
- /db-migrate  — DB 마이그레이션 생성/적용
- /hotfix      — 긴급 버그 수정 + 배포

### Hooks (자동 실행 규칙)
- 파일 저장 시 → ESLint 자동 수정
- 커밋 전 → TypeScript 타입 체크
- 위험 명령어 → 자동 차단 (rm -rf 등)
- 작업 완료 시 → 데스크톱 알림`}]}]},{id:"adv-critical-thinking",slug:"critical-thinking",title:"비판적 시각",description:"AI 코드의 한계, 환각(Hallucination) 대응, 보안 위험, AI 코딩의 미래를 분석합니다.",level:"advanced",order:8,contents:[{id:"adv-critical-thinking-1",title:"AI 코드의 한계와 환각 대응",description:"AI가 생성한 코드의 근본적 한계와 환각(Hallucination) 문제에 대응합니다.",content:'AI가 생성한 코드는 "그럴듯하지만 틀린" 경우가 있습니다. 이를 환각(Hallucination)이라 합니다. 존재하지 않는 API를 호출하거나, 잘못된 라이브러리 버전의 문법을 사용하거나, 로직이 표면적으로는 맞아 보이지만 엣지 케이스에서 실패하는 코드를 생성할 수 있습니다. AI 코드를 맹목적으로 신뢰하지 않고, 반드시 검증하는 습관이 필요합니다.',keyPoints:["AI는 존재하지 않는 API/함수를 확신 있게 생성할 수 있음 (환각)","최신 라이브러리의 API 변경사항을 모르는 경우가 빈번","AI 코드는 반드시 컴파일 → 테스트 → 리뷰를 거쳐야 함","복잡한 비즈니스 로직은 AI보다 인간이 검증해야 함"],codeExamples:[{language:"typescript",title:"AI 환각 사례와 대응",code:`// --- AI가 생성할 수 있는 환각 코드 ---

// 환각 1: 존재하지 않는 Supabase 메서드
const { data } = await supabase
  .from('users')
  .search('name', 'Kim');  // search() 메서드는 존재하지 않음!
// 실제로는: .ilike('name', '%Kim%') 또는 .textSearch()

// 환각 2: 잘못된 React 19 API
import { useFormStatus } from 'react';  // react가 아닌 react-dom에서 import
// 올바른 코드: import { useFormStatus } from 'react-dom';

// 환각 3: 라이브러리 버전 혼동
import { useRouter } from 'next/router';  // Pages Router 문법
// Next.js App Router에서는: import { useRouter } from 'next/navigation';

// --- 대응 방법 ---
// 1. AI 생성 코드를 바로 사용하지 말고, 공식 문서와 대조
// 2. TypeScript strict 모드로 타입 에러 즉시 감지
// 3. 핵심 로직은 유닛 테스트로 검증
// 4. "이 코드가 맞는지 공식 문서를 참조해서 확인해줘"라고 재질문`}]},{id:"adv-critical-thinking-2",title:"보안 위험과 의존성 관리",description:"AI 코딩 환경에서 발생할 수 있는 보안 위험과 의존성 관리 전략을 수립합니다.",content:"AI가 생성한 코드에는 보안 취약점이 숨어 있을 수 있습니다. AI는 기능 구현에 집중하고 보안을 간과하는 경향이 있습니다. 특히 사용자 입력 검증, 인증/인가 우회, 환경변수 노출, 불필요한 npm 패키지 추가 등에 주의해야 합니다. 또한 AI가 추천한 패키지가 악성 코드를 포함한 타이포스쿼팅(typosquatting) 패키지일 수 있으므로, 패키지 설치 전 검증이 필요합니다.",keyPoints:["AI 코드의 사용자 입력 처리 부분을 반드시 검토","환경변수가 클라이언트에 노출되지 않는지 확인","npm 패키지 설치 전 다운로드 수, 관리 상태, 보안 감사 확인","npm audit, Snyk 등으로 정기적인 보안 점검"],codeExamples:[{language:"typescript",title:"AI 코드의 보안 취약점 예시",code:`// --- AI가 생성하기 쉬운 보안 취약점 ---

// 취약점 1: SQL 인젝션 가능한 코드
const { data } = await supabase
  .from('users')
  .select('*')
  .filter('name', 'eq', userInput);  // userInput이 검증 없이 사용됨

// 개선: 입력 검증 + Supabase의 매개변수화된 쿼리 사용
const sanitized = userInput.replace(/[^a-zA-Z가-힣0-9 ]/g, '');
const { data } = await supabase
  .from('users')
  .select('id, name, email')  // 필요한 컬럼만 선택
  .eq('name', sanitized);

// 취약점 2: 환경변수 노출
const API_KEY = 'sk-1234567890';  // 하드코딩된 비밀 키!
// 개선: .env에 저장하고, 서버 측에서만 접근

// 취약점 3: XSS 취약 코드
function Comment({ content }: { content: string }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
// 개선: DOMPurify로 살균 또는 일반 텍스트 렌더링
import DOMPurify from 'dompurify';
function SafeComment({ content }: { content: string }) {
  const clean = DOMPurify.sanitize(content);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
}`}]},{id:"adv-critical-thinking-3",title:"AI 코딩의 책임과 윤리",description:"AI가 생성한 코드의 책임 소재와 윤리적 고려사항을 논의합니다.",content:'AI가 코드를 생성하더라도, 그 코드를 프로덕션에 배포하는 책임은 개발자에게 있습니다. AI가 만든 코드에 버그가 있어서 서비스 장애가 발생하면, 그 책임은 "AI가 만들었으니"라는 변명이 통하지 않습니다. 또한 AI 코드에 포함된 라이선스 문제(학습 데이터의 GPL 코드가 반영될 가능성), 개인정보 처리, 접근성(a11y) 준수 여부도 개발자가 확인해야 합니다.',keyPoints:["AI 코드의 프로덕션 배포 책임은 개발자에게 있음","라이선스 문제: AI가 GPL 코드를 참조했을 가능성 인지","접근성(a11y): AI가 생성한 UI의 ARIA 속성, 키보드 접근성 확인","개인정보보호: AI에게 실제 고객 데이터를 전달하지 않기"],codeExamples:[{language:"markdown",title:"AI 코딩 윤리 체크리스트",code:`## AI 코딩 윤리 체크리스트

### 책임
- [ ] AI 생성 코드를 모두 검토하고 이해했는가?
- [ ] 비즈니스 로직의 정확성을 인간이 검증했는가?
- [ ] 테스트가 충분히 작성되어 있는가?

### 라이선스
- [ ] AI 생성 코드가 특정 오픈소스 코드를 그대로 복사하지 않았는가?
- [ ] 사용 중인 npm 패키지의 라이선스를 확인했는가?
- [ ] 프로젝트 라이선스와 의존성 라이선스가 호환되는가?

### 개인정보
- [ ] AI 도구에 고객의 실제 개인정보를 전달하지 않았는가?
- [ ] 프롬프트에 API 키, 비밀번호 등 민감 정보를 포함하지 않았는가?
- [ ] AI가 생성한 더미 데이터에 실제 데이터가 반영되지 않았는가?

### 접근성
- [ ] AI가 생성한 UI에 적절한 ARIA 레이블이 있는가?
- [ ] 키보드만으로 모든 기능을 사용할 수 있는가?
- [ ] 색상 대비(contrast ratio)가 WCAG 기준을 충족하는가?`}]},{id:"adv-critical-thinking-4",title:"AI 코딩의 미래",description:"AI 코딩 도구의 발전 방향과 개발자 역할의 변화를 전망합니다.",content:'AI 코딩 도구는 빠르게 발전하고 있습니다. 코드 자동완성 → 파일 생성 → 프로젝트 생성 → 에이전트 기반 자율 개발로 진화하고 있습니다. 하지만 AI가 아무리 발전해도, "무엇을 만들 것인가"를 결정하는 것은 인간의 역할입니다. 미래의 개발자는 코드를 직접 타이핑하는 것보다, 요구사항을 정확히 정의하고, AI의 결과물을 평가하며, 아키텍처를 설계하는 능력이 더 중요해질 것입니다. 바이브코딩의 핵심은 도구가 아닌 사고방식의 변화입니다.',keyPoints:["현재: AI 보조 코딩 → 미래: AI 자율 코딩 + 인간 감독","개발자 역할 변화: 코더(Coder) → 아키텍트(Architect) + 감독자(Supervisor)","요구사항 정의, 품질 검증, 아키텍처 설계 능력이 핵심 역량","도구는 바뀌어도, 문제 해결 능력과 비판적 사고는 변하지 않음"],codeExamples:[{language:"markdown",title:"미래 개발자 역량 로드맵",code:`## AI 시대 개발자 핵심 역량

### Tier 1: 필수 역량 (AI가 대체할 수 없음)
- 문제 정의 능력: "무엇을 만들 것인가?"
- 아키텍처 설계: 시스템 전체 구조 결정
- 비판적 코드 리뷰: AI 결과물의 품질 평가
- 비즈니스 도메인 이해: 기술과 비즈니스 연결

### Tier 2: 차별화 역량 (AI와 협업)
- 프롬프트 엔지니어링: AI에게 정확한 지시
- Spec-Driven 개발: 구조화된 명세 작성
- 멀티에이전트 오케스트레이션
- 자동화 파이프라인 설계

### Tier 3: 기초 역량 (AI가 보조)
- 프로그래밍 언어 문법
- 프레임워크 API 사용법
- CSS/스타일링
- CRUD 구현

### 학습 우선순위
1. Tier 1을 먼저 강화 (AI가 대체 불가)
2. Tier 2로 AI 활용 극대화
3. Tier 3는 AI와 협업하면서 자연스럽게 습득`}]}]}],b=()=>{const[a,c]=h.useState(i[0]?.id||""),{isCompleted:n,toggleComplete:d,getProgressPercent:l}=I(),{isLoggedIn:p}=v(),o=i.find(t=>t.id===a)||i[0],u=i.map(t=>t.id),m=l("topic",u.map(t=>`advanced-${t}`)),g=i.map(t=>({id:t.id,title:t.title,completed:n("topic",`advanced-${t.id}`)}));return e.jsxs("div",{className:"curriculum-page",children:[e.jsx("div",{className:"curriculum-header",children:e.jsxs("div",{className:"container",children:[e.jsx(S,{level:"advanced",size:"lg"}),e.jsx("h1",{children:"고급 커리큘럼"}),e.jsx("p",{children:"멀티에이전트, MCP, Spec-Driven 개발 등 전문가 수준의 AI 코딩을 학습합니다."})]})}),e.jsx(y,{title:"고급 토픽",items:g,activeId:a,onSelect:c,progressPercent:m,children:o&&e.jsxs("div",{className:"topic-content",children:[e.jsx("h2",{children:o.title}),e.jsx("p",{className:"topic-description",children:o.description}),o.contents.map((t,A)=>e.jsxs("div",{className:"topic-section",children:[e.jsx("h3",{children:t.title}),e.jsx("div",{className:"topic-text",dangerouslySetInnerHTML:{__html:t.content.replace(/\n/g,"<br/>")}}),t.keyPoints&&t.keyPoints.length>0&&e.jsxs("div",{className:"key-points",children:[e.jsx("h4",{children:"핵심 포인트"}),e.jsx("ul",{children:t.keyPoints.map((s,r)=>e.jsx("li",{children:s},r))})]}),t.codeExamples&&t.codeExamples.map((s,r)=>e.jsx(C,{code:s.code,language:s.language,title:s.title},r))]},t.id||A)),p&&e.jsx("div",{className:"topic-complete-action",children:e.jsx("button",{className:`btn ${n("topic",`advanced-${o.id}`)?"btn-completed":"btn-primary"}`,onClick:()=>d("topic",`advanced-${o.id}`),children:n("topic",`advanced-${o.id}`)?"✓ 학습 완료":"학습 완료 표시"})})]})})]})};export{b as default};
