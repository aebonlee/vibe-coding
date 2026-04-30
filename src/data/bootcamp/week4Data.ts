import type { BootcampDay } from '../../types';

export const week4Days: BootcampDay[] = [
  // ── Day 22: CLAUDE.md 작성 ──
  {
    day: 22,
    week: 4,
    title: 'CLAUDE.md 작성',
    description: '프로젝트 컨텍스트 문서를 작성합니다.',
    tasks: ['CLAUDE.md 구조 학습', '프로젝트별 CLAUDE.md 작성', '효과 검증'],
    tools: ['Claude Code'],
    deliverable: 'CLAUDE.md 파일',
    contents: [
      {
        id: 'day22-what-is-claude-md',
        title: 'CLAUDE.md란 무엇인가?',
        description: 'Claude Code가 프로젝트를 이해하도록 돕는 컨텍스트 문서의 역할을 알아봅니다.',
        content:
`**CLAUDE.md**는 프로젝트 루트에 위치하는 특별한 마크다운 파일입니다.
Claude Code가 새 대화를 시작할 때 **자동으로 이 파일을 읽어** 프로젝트의 맥락을 파악합니다.

왜 필요한가?
- Claude Code는 매 세션마다 **기억이 초기화**됩니다
- CLAUDE.md가 없으면 매번 프로젝트 구조, 규칙, 기술 스택을 다시 설명해야 합니다
- CLAUDE.md가 있으면 **일관된 코딩 스타일**과 **프로젝트 맥락**을 유지할 수 있습니다

CLAUDE.md의 위치:
- **프로젝트 루트**: \`/프로젝트/CLAUDE.md\` - 해당 프로젝트 전체에 적용
- **홈 디렉토리**: \`~/.claude/CLAUDE.md\` - 모든 프로젝트에 공통 적용
- **하위 디렉토리**: \`/프로젝트/src/CLAUDE.md\` - 해당 폴더 작업 시 추가 적용

Claude Code는 이 파일들을 **계층적으로 병합**하여 읽습니다.
홈 디렉토리의 글로벌 설정 + 프로젝트 루트 설정 + 하위 폴더 설정이 모두 합쳐집니다.`,
        keyPoints: [
          'CLAUDE.md는 프로젝트 루트에 위치하는 컨텍스트 문서',
          'Claude Code가 대화 시작 시 자동으로 읽음',
          '글로벌(~/.claude/) + 프로젝트 루트 + 하위 폴더 계층 구조 지원',
          '매 세션의 기억 초기화 문제를 해결하는 핵심 도구',
        ],
      },
      {
        id: 'day22-claude-md-structure',
        title: 'CLAUDE.md 작성 구조와 핵심 섹션',
        description: '효과적인 CLAUDE.md 파일의 구성 요소와 작성 패턴을 학습합니다.',
        content:
`좋은 CLAUDE.md는 다음 섹션들로 구성됩니다:

**1. 프로젝트 개요**
- 프로젝트가 무엇인지 한 문장으로 설명
- 주요 기술 스택 나열
- 배포 환경 정보

**2. 디렉토리 구조**
- 핵심 폴더와 역할 설명
- 중요 파일 위치 안내

**3. 코딩 규칙**
- 네이밍 컨벤션 (camelCase, PascalCase 등)
- 파일 구조 규칙
- import 순서, 들여쓰기 등

**4. 개발 명령어**
- 빌드, 테스트, 배포 명령어
- 환경 변수 설정 방법

**5. 주의사항 / Known Issues**
- 건드리면 안 되는 파일
- 알려진 버그나 임시 해결책
- 특수한 설정이 필요한 부분

**6. 데이터베이스/API 정보**
- 테이블 구조 요약
- API 엔드포인트 패턴
- 인증 방식

작성 팁:
- **간결하게** 작성합니다 - Claude Code가 매번 읽으므로 너무 길면 비효율적
- **명령형 문체**를 사용합니다 - "~하세요" 보다 "~한다" 또는 "~할 것"
- **구체적인 예시**를 포함합니다 - 추상적 설명보다 실제 코드/경로가 효과적`,
        keyPoints: [
          '프로젝트 개요, 디렉토리 구조, 코딩 규칙이 필수 섹션',
          '개발 명령어와 주의사항을 반드시 포함',
          '간결하고 명령형 문체로 작성',
          '추상적 설명보다 구체적인 경로와 코드 예시가 효과적',
        ],
        codeExamples: [
          {
            language: 'markdown',
            title: 'CLAUDE.md 기본 템플릿',
            code:
`# 프로젝트명

## 개요
React + Vite로 만든 개인 포트폴리오 사이트.
Supabase를 백엔드로 사용하며 GitHub Pages로 배포한다.

## 기술 스택
- React 19 + TypeScript + Vite
- Supabase (인증, DB)
- CSS Modules (Tailwind 사용하지 않음)

## 디렉토리 구조
\`\`\`
src/
  components/    # 재사용 컴포넌트
  pages/         # 라우트 페이지
  contexts/      # React Context (Auth, Theme)
  utils/         # 유틸리티 함수
  data/          # 정적 데이터
  types/         # TypeScript 타입 정의
\`\`\`

## 코딩 규칙
- 컴포넌트: PascalCase (예: UserCard.tsx)
- 유틸 함수: camelCase (예: formatDate.ts)
- CSS 클래스: kebab-case (예: .user-card)
- import 순서: React → 라이브러리 → 로컬

## 개발 명령어
- \`npm run dev\` — 로컬 개발 서버
- \`npm run build\` — 프로덕션 빌드
- \`npx gh-pages -d dist\` — GitHub Pages 배포

## 주의사항
- .env 파일은 gitignore 되어있음. 수동 설정 필요
- src/config/site.ts 는 사이트 전역 설정 — 구조 변경 금지
- Windows에서 NUL 아티팩트 파일 생성됨 — 무시할 것`,
          },
        ],
      },
      {
        id: 'day22-writing-practice',
        title: '실전: 내 프로젝트에 CLAUDE.md 작성하기',
        description: '지금까지 만든 프로젝트에 직접 CLAUDE.md를 작성하고 효과를 검증합니다.',
        content:
`이제 직접 CLAUDE.md를 작성해봅시다.

**Step 1: 프로젝트 분석**
먼저 Claude Code에게 프로젝트를 분석해달라고 요청합니다:

\`claude "이 프로젝트의 구조를 분석해서 CLAUDE.md 초안을 만들어줘"\`

Claude Code가 자동으로 파일들을 읽고 초안을 생성합니다.

**Step 2: 초안 검토 및 수정**
생성된 초안을 검토하면서 다음을 보완합니다:
- 빠진 코딩 규칙이 있는지 확인
- 주의사항이나 Known Issues 추가
- 불필요하게 긴 부분 축소

**Step 3: 효과 검증**
CLAUDE.md 작성 전후를 비교합니다:
- 작성 전: \`claude "새 컴포넌트 만들어줘"\` → 프로젝트 스타일과 다른 코드 생성
- 작성 후: \`claude "새 컴포넌트 만들어줘"\` → 프로젝트 규칙에 맞는 코드 생성

**자주 하는 실수:**
- 너무 길게 작성 (1000줄 이상) → 핵심만 200줄 이내로
- 코드 전체를 복사 → 구조와 규칙만 설명
- 업데이트 안 함 → 프로젝트가 변할 때마다 CLAUDE.md도 갱신

**고급 팁: 멀티 CLAUDE.md 전략**
큰 프로젝트에서는 하위 폴더별로 CLAUDE.md를 둘 수 있습니다:
- \`/CLAUDE.md\` — 전체 프로젝트 규칙
- \`/src/components/CLAUDE.md\` — 컴포넌트 작성 규칙
- \`/src/data/CLAUDE.md\` — 데이터 파일 형식 규칙`,
        keyPoints: [
          'Claude Code에게 초안 생성을 요청한 후 직접 검토/수정',
          '작성 전후 코드 생성 품질을 비교하여 효과 검증',
          '200줄 이내로 핵심만 간결하게 유지',
          '프로젝트 변경 시 CLAUDE.md도 함께 업데이트',
        ],
        codeExamples: [
          {
            language: 'bash',
            title: 'Claude Code로 CLAUDE.md 생성/검증',
            code:
`# 프로젝트 폴더에서 Claude Code 실행
cd ~/my-project

# 1. CLAUDE.md 초안 자동 생성
claude "이 프로젝트를 분석해서 CLAUDE.md를 작성해줘.
기술 스택, 디렉토리 구조, 코딩 규칙, 개발 명령어를 포함해줘."

# 2. 작성된 CLAUDE.md 확인
cat CLAUDE.md

# 3. 효과 검증 — 새 컴포넌트 생성 요청
claude "사용자 프로필 카드 컴포넌트를 만들어줘"
# → CLAUDE.md의 규칙(네이밍, 스타일, 구조)을 따르는지 확인

# 4. CLAUDE.md 업데이트
claude "/claude-md" # 이 명령은 없지만, 직접 편집하면 됩니다
# 또는
claude "CLAUDE.md에 최근 추가한 Supabase 테이블 정보를 추가해줘"`,
          },
        ],
      },
    ],
  },

  // ── Day 23: Skills & Hooks ──
  {
    day: 23,
    week: 4,
    title: 'Skills & Hooks',
    description: 'Claude Code의 고급 기능을 활용합니다.',
    tasks: ['커스텀 슬래시 명령어 만들기', 'Hooks 설정', '워크플로우 자동화'],
    tools: ['Claude Code'],
    deliverable: 'Skills/Hooks 설정',
    contents: [
      {
        id: 'day23-custom-slash-commands',
        title: '커스텀 슬래시 명령어 (Skills)',
        description: 'Claude Code에서 반복 작업을 자동화하는 커스텀 슬래시 명령어를 만듭니다.',
        content:
`**Skills(커스텀 슬래시 명령어)**는 자주 쓰는 프롬프트를 슬래시 명령어로 저장하는 기능입니다.
매번 긴 프롬프트를 입력하는 대신 \`/my-command\`로 간편하게 실행할 수 있습니다.

**설정 위치:**
- 프로젝트용: \`.claude/commands/명령어이름.md\`
- 글로벌용: \`~/.claude/commands/명령어이름.md\`

명령어 파일은 **마크다운 형식**으로 작성합니다.
파일명이 곧 명령어 이름이 됩니다:
- \`.claude/commands/review.md\` → \`/project:review\`로 실행
- \`~/.claude/commands/commit.md\` → \`/user:commit\`로 실행

**변수 사용:**
명령어 안에서 \`$ARGUMENTS\`를 사용하면 실행 시 추가 인자를 받을 수 있습니다.
예: \`/project:review src/App.tsx\` → \`$ARGUMENTS\`가 \`src/App.tsx\`로 치환

**유용한 커스텀 명령어 아이디어:**
- \`/project:review\` — 코드리뷰 요청
- \`/project:test\` — 테스트 작성 요청
- \`/project:refactor\` — 리팩토링 요청
- \`/project:doc\` — 문서화 요청
- \`/project:deploy\` — 배포 체크리스트 실행`,
        keyPoints: [
          '.claude/commands/ 폴더에 마크다운 파일로 커스텀 명령어 생성',
          '파일명이 명령어 이름, 내용이 프롬프트',
          '$ARGUMENTS로 실행 시 인자 전달 가능',
          '프로젝트용(/project:)과 글로벌용(/user:) 구분',
        ],
        codeExamples: [
          {
            language: 'markdown',
            title: '.claude/commands/review.md — 코드리뷰 명령어',
            code:
`다음 파일을 코드리뷰해주세요: $ARGUMENTS

리뷰 기준:
1. 타입 안전성 — any 타입 사용 여부, 타입 가드 적절성
2. 에러 처리 — try-catch, 에러 바운더리 적용 여부
3. 성능 — 불필요한 리렌더링, 메모이제이션 필요 여부
4. 접근성 — aria 속성, 키보드 네비게이션
5. 코딩 컨벤션 — CLAUDE.md 규칙 준수 여부

각 항목별로 점수(1-5)와 개선 제안을 제공해주세요.
심각한 문제가 있으면 즉시 수정 코드도 제안해주세요.`,
          },
          {
            language: 'markdown',
            title: '.claude/commands/component.md — 컴포넌트 생성 명령어',
            code:
`새로운 React 컴포넌트를 만들어주세요: $ARGUMENTS

규칙:
- src/components/ 폴더에 생성
- TypeScript + 함수형 컴포넌트
- Props 인터페이스를 별도로 정의
- 기본 CSS 클래스 포함
- CLAUDE.md의 코딩 규칙을 따를 것`,
          },
        ],
      },
      {
        id: 'day23-hooks-system',
        title: 'Hooks: 이벤트 기반 자동화',
        description: 'Claude Code의 Hooks 시스템으로 특정 이벤트 발생 시 자동 동작을 설정합니다.',
        content:
`**Hooks**는 Claude Code에서 특정 이벤트가 발생할 때 **자동으로 실행되는 스크립트**입니다.
\`.claude/settings.json\` 파일에서 설정합니다.

**지원되는 Hook 이벤트:**

1. **PreToolUse** — 도구 실행 전
- 특정 명령어 실행을 차단하거나 확인할 때 사용
- 예: \`rm -rf\` 같은 위험한 명령어 차단

2. **PostToolUse** — 도구 실행 후
- 도구 실행 결과에 따라 후속 작업 수행
- 예: 파일 수정 후 자동으로 린트 실행

3. **Notification** — 알림 발생 시
- Claude Code가 알림을 보낼 때 커스텀 동작
- 예: 장시간 작업 완료 시 사운드 알림

**Hook 동작 방식:**
- Hook은 **쉘 명령어**를 실행합니다
- 표준 입력(stdin)으로 이벤트 데이터(JSON)를 받습니다
- PreToolUse Hook이 \`exit 2\`를 반환하면 해당 도구 실행을 차단합니다

**주의사항:**
- Hook은 Claude의 허가 없이 실행되므로 **보안에 주의**
- 잘못된 Hook 설정은 Claude Code 전체 동작에 영향을 줄 수 있음
- 디버깅이 어려울 수 있으므로 **간단한 것부터 시작**`,
        keyPoints: [
          'Hooks는 .claude/settings.json에서 설정',
          'PreToolUse(실행 전), PostToolUse(실행 후), Notification(알림) 이벤트 지원',
          'stdin으로 JSON 이벤트 데이터를 받아 처리',
          'PreToolUse에서 exit 2 반환 시 도구 실행 차단 가능',
        ],
        codeExamples: [
          {
            language: 'json',
            title: '.claude/settings.json — Hooks 설정 예시',
            code:
`{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "bash -c 'input=$(cat); cmd=$(echo $input | jq -r .tool_input.command 2>/dev/null); if echo $cmd | grep -qE \"rm\\s+-rf\\s+/|git\\s+push\\s+--force\"; then echo \"위험한 명령어가 감지되었습니다: $cmd\" >&2; exit 2; fi'"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "bash -c 'input=$(cat); file=$(echo $input | jq -r .tool_input.file_path 2>/dev/null); if [[ $file == *.ts || $file == *.tsx ]]; then npx tsc --noEmit 2>&1 | head -20; fi'"
          }
        ]
      }
    ],
    "Notification": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "bash -c 'input=$(cat); msg=$(echo $input | jq -r .message 2>/dev/null); echo \"Claude Code 알림: $msg\"'"
          }
        ]
      }
    ]
  }
}`,
          },
        ],
      },
      {
        id: 'day23-workflow-automation',
        title: '워크플로우 자동화 실전',
        description: 'Skills와 Hooks를 결합하여 실무에서 쓸 수 있는 자동화 워크플로우를 구축합니다.',
        content:
`Skills와 Hooks를 결합하면 강력한 자동화 워크플로우를 만들 수 있습니다.

**실전 워크플로우 1: 자동 코드 품질 관리**
- PostToolUse Hook으로 파일 수정 후 자동 린트
- \`/project:review\` 명령어로 수시 코드리뷰
- 결과: 코드 품질이 항상 일정하게 유지

**실전 워크플로우 2: 커밋 자동화**
- \`/project:commit\` 명령어 생성
- 변경사항 분석 → 커밋 메시지 생성 → git add/commit 실행
- 결과: 의미 있는 커밋 메시지가 자동으로 작성됨

**실전 워크플로우 3: 배포 체크리스트**
- \`/project:deploy\` 명령어로 배포 전 점검
- 빌드 테스트, 타입 체크, 환경변수 확인을 순차적으로 수행
- 결과: 배포 실수 방지

**설정 파일 구조:**

\`.claude/\` 폴더의 전체 구조:
- \`.claude/commands/\` — 커스텀 슬래시 명령어
- \`.claude/settings.json\` — Hooks 및 기타 설정
- 프로젝트 루트의 \`CLAUDE.md\` — 프로젝트 컨텍스트

이 세 가지가 합쳐져서 Claude Code를 **나만의 개발 도구**로 만들어줍니다.

**실습: 직접 만들어보기**
1. \`.claude/commands/\` 폴더를 생성합니다
2. 자주 쓰는 프롬프트를 명령어 파일로 저장합니다
3. \`.claude/settings.json\`에 간단한 Hook을 추가합니다
4. 명령어를 실행하고 결과를 확인합니다`,
        keyPoints: [
          'Skills + Hooks 결합으로 자동 코드 품질 관리 가능',
          '커밋, 배포, 리뷰 등 반복 작업을 명령어로 자동화',
          '.claude/ 폴더가 Claude Code 커스터마이징의 핵심',
          '간단한 것부터 시작하여 점진적으로 자동화 확대',
        ],
        codeExamples: [
          {
            language: 'markdown',
            title: '.claude/commands/deploy.md — 배포 체크리스트 명령어',
            code:
`배포 전 체크리스트를 실행해주세요:

1. TypeScript 타입 체크: \`npx tsc --noEmit\` 실행
2. 빌드 테스트: \`npm run build\` 실행
3. 빌드 결과물(dist/) 확인
4. 환경변수 점검: .env 파일의 필수 변수 존재 여부

모든 체크가 통과하면:
- \`npx gh-pages -d dist\` 로 배포 실행
- 배포 URL을 알려주세요

하나라도 실패하면:
- 실패 원인을 설명하고 해결 방법을 제안해주세요
- 배포를 진행하지 마세요`,
          },
          {
            language: 'bash',
            title: 'Skills/Hooks 설정 디렉토리 만들기',
            code:
`# 커스텀 명령어 폴더 생성
mkdir -p .claude/commands

# 코드리뷰 명령어 작성
cat > .claude/commands/review.md << 'EOF'
다음 파일을 코드리뷰해주세요: $ARGUMENTS
보안, 성능, 가독성 관점에서 검토해주세요.
EOF

# 테스트 작성 명령어
cat > .claude/commands/test.md << 'EOF'
$ARGUMENTS 파일에 대한 단위 테스트를 작성해주세요.
기존 테스트 패턴을 참고하여 일관된 스타일로 만들어주세요.
EOF

# Hooks 설정 (settings.json)
cat > .claude/settings.json << 'EOF'
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "echo '파일이 수정되었습니다.'"
          }
        ]
      }
    ]
  }
}
EOF

# Claude Code에서 확인
claude "/project:review src/App.tsx"`,
          },
        ],
      },
    ],
  },

  // ── Day 24: 코드리뷰 & 디버깅 ──
  {
    day: 24,
    week: 4,
    title: '코드리뷰 & 디버깅',
    description: 'AI를 활용한 코드 품질 관리를 연습합니다.',
    tasks: ['AI 코드리뷰 요청', '버그 디버깅', '성능 최적화 제안 받기'],
    tools: ['Claude Code', 'Cursor'],
    deliverable: '리뷰/개선 코드',
    contents: [
      {
        id: 'day24-ai-code-review',
        title: 'AI 코드리뷰: 효과적으로 요청하기',
        description: 'Claude Code와 Cursor를 활용하여 체계적인 코드리뷰를 받는 방법을 배웁니다.',
        content:
`AI 코드리뷰는 사람 리뷰어가 없을 때 **코드 품질을 유지하는 핵심 방법**입니다.
특히 혼자 개발하는 바이브코더에게 매우 유용합니다.

**코드리뷰 요청의 핵심 원칙:**

1. **범위를 명확히** — "전체 코드를 봐줘" 대신 "이 파일의 에러 처리를 봐줘"
2. **관점을 지정** — "보안 관점에서 리뷰해줘", "성능 관점에서 리뷰해줘"
3. **기준을 제시** — "이 프로젝트의 코딩 규칙에 맞는지 확인해줘"

**Claude Code에서 코드리뷰하기:**
\`claude "src/components/UserCard.tsx를 리뷰해줘. 타입 안전성과 에러 처리 중심으로."\`

**Cursor에서 코드리뷰하기:**
- 코드를 선택한 후 \`Cmd+K\` → "이 코드를 리뷰해줘"
- Chat 패널에서 파일을 \`@\`로 참조하며 리뷰 요청

**리뷰 요청 템플릿:**
- "이 코드에서 **버그 가능성**이 있는 부분을 찾아줘"
- "이 함수의 **에지 케이스**를 찾아줘"
- "이 컴포넌트의 **리렌더링 최적화** 방안을 제안해줘"
- "이 코드가 **OWASP Top 10** 보안 취약점에 해당하는지 확인해줘"

**리뷰 결과 활용:**
- 바로 수정할 것: 버그, 보안 취약점
- 나중에 수정할 것: 리팩토링 제안, 성능 개선
- 학습할 것: 새로 알게 된 패턴이나 모범 사례`,
        keyPoints: [
          '범위, 관점, 기준을 명확히 하여 코드리뷰 요청',
          'Claude Code는 파일 경로 지정, Cursor는 코드 선택 후 리뷰',
          '버그/보안은 즉시 수정, 리팩토링은 백로그에 추가',
          '혼자 개발할 때 AI 코드리뷰는 품질 유지의 핵심',
        ],
      },
      {
        id: 'day24-debugging-with-ai',
        title: 'AI 디버깅: 에러 해결 전략',
        description: 'AI 도구를 활용하여 버그를 빠르게 찾고 수정하는 방법을 학습합니다.',
        content:
`AI를 활용한 디버깅은 **에러 메시지를 그대로 전달**하는 것이 핵심입니다.

**디버깅 3단계 프로세스:**

**1단계: 에러 정보 수집**
- 콘솔 에러 메시지 복사
- 에러가 발생하는 상황 정리 (어떤 버튼을 눌렀을 때, 어떤 페이지에서)
- 관련 코드 파일 파악

**2단계: AI에게 디버깅 요청**
- 에러 메시지와 관련 코드를 함께 제공
- "이 에러가 왜 발생하는지 설명하고 수정해줘"
- 재현 조건도 알려주면 더 정확한 답변을 받을 수 있음

**3단계: 수정 적용 및 검증**
- AI가 제안한 수정을 적용
- 동일한 상황에서 에러가 해결되었는지 확인
- 다른 기능에 영향을 주지 않는지 검증

**흔한 React 에러와 AI 디버깅:**
- \`Cannot read properties of undefined\` → 옵셔널 체이닝 누락
- \`Too many re-renders\` → useEffect 의존성 배열 문제
- \`Objects are not valid as React child\` → JSON 객체를 직접 렌더링
- \`Hydration mismatch\` → 서버/클라이언트 렌더링 불일치

**Claude Code 디버깅 팁:**
- 에러가 발생하는 파일을 Claude Code가 직접 읽게 하세요
- "이 에러를 수정하고 비슷한 문제가 다른 파일에도 있는지 확인해줘"
- Claude Code는 여러 파일을 동시에 분석할 수 있어서 **근본 원인**을 찾기 좋습니다`,
        keyPoints: [
          '에러 메시지를 그대로 복사하여 전달하는 것이 가장 중요',
          '에러 정보 수집 → AI 디버깅 요청 → 수정 적용/검증 3단계',
          'Claude Code는 여러 파일을 동시에 분석하여 근본 원인 탐색',
          '수정 후 반드시 다른 기능에 영향이 없는지 검증',
        ],
        codeExamples: [
          {
            language: 'bash',
            title: 'Claude Code로 디버깅 요청하기',
            code:
`# 에러 메시지를 직접 전달
claude "다음 에러가 발생해:
TypeError: Cannot read properties of undefined (reading 'map')
at UserList (src/components/UserList.tsx:15:22)

이 에러를 수정해줘."

# 넓은 범위에서 비슷한 버그 찾기
claude "src/ 폴더에서 null/undefined 체크 없이 .map()을 사용하는
코드를 모두 찾아서 안전하게 수정해줘."

# 런타임 에러 디버깅
claude "사용자가 로그인하지 않은 상태에서 /mypage에 접속하면
흰 화면이 나와. AuthContext 관련 문제 같은데 확인해줘."`,
          },
        ],
      },
      {
        id: 'day24-performance-optimization',
        title: '성능 최적화: AI의 제안 활용하기',
        description: 'AI에게 성능 분석을 요청하고 최적화 제안을 실무에 적용하는 방법을 배웁니다.',
        content:
`AI는 성능 문제를 빠르게 찾아내고 개선 방안을 제시하는 데 뛰어납니다.

**React 성능 최적화 요청 포인트:**

**1. 불필요한 리렌더링**
- "이 컴포넌트의 리렌더링 횟수를 줄여줘"
- AI가 \`React.memo\`, \`useMemo\`, \`useCallback\` 적용을 제안

**2. 번들 사이즈**
- "이 프로젝트의 번들 사이즈를 줄일 방법을 알려줘"
- AI가 코드 스플리팅, lazy import, 트리쉐이킹 제안

**3. 네트워크 요청**
- "API 호출을 최적화해줘"
- AI가 캐싱, 디바운싱, 병렬 요청 등을 제안

**4. 이미지/에셋**
- "이미지 로딩 성능을 개선해줘"
- AI가 lazy loading, WebP 변환, 적절한 사이즈 제안

**AI 최적화 제안을 받을 때 주의할 점:**
- 모든 제안을 무작정 적용하지 말 것
- 실제 성능 병목이 있는 곳부터 우선 적용
- 최적화 전후 **측정**을 반드시 수행
- 가독성을 크게 해치는 최적화는 보류

**실전 프롬프트 예시:**
"src/pages/Home.tsx의 성능을 분석해줘.
특히 데이터 페칭과 렌더링 효율 관점에서 개선 포인트를 알려줘.
각 개선의 예상 효과도 함께 설명해줘."`,
        keyPoints: [
          '리렌더링, 번들 사이즈, 네트워크, 이미지 4가지 영역에서 최적화',
          '모든 제안을 적용하지 말고 실제 병목 지점부터 처리',
          '최적화 전후 성능 측정 필수',
          '가독성을 크게 해치는 최적화는 보류',
        ],
        codeExamples: [
          {
            language: 'typescript',
            title: 'AI가 제안하는 흔한 React 최적화 패턴',
            code:
`// Before: 매 렌더링마다 필터 함수 재생성
const UserList = ({ users, filter }: Props) => {
  const filtered = users.filter(u => u.name.includes(filter));
  return <ul>{filtered.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
};

// After: useMemo로 불필요한 재계산 방지
import { useMemo } from 'react';

const UserList = ({ users, filter }: Props) => {
  const filtered = useMemo(
    () => users.filter(u => u.name.includes(filter)),
    [users, filter]  // users나 filter가 바뀔 때만 재계산
  );
  return <ul>{filtered.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
};

// Before: 매번 새 객체 생성 → 자식 리렌더링
<ChildComponent style={{ color: 'red' }} />

// After: 객체를 컴포넌트 밖이나 useMemo로 안정화
const style = { color: 'red' } as const;  // 컴포넌트 밖
<ChildComponent style={style} />`,
          },
        ],
      },
    ],
  },

  // ── Day 25: GitHub Pages 배포 ──
  {
    day: 25,
    week: 4,
    title: 'GitHub Pages 배포',
    description: '프로젝트를 GitHub Pages로 배포합니다.',
    tasks: ['Git 설정', 'gh-pages 배포', '커스텀 도메인 설정'],
    tools: ['Git', 'GitHub'],
    deliverable: '배포된 사이트',
    contents: [
      {
        id: 'day25-git-basics',
        title: 'Git 기본 설정과 GitHub 리포지토리 생성',
        description: 'Git 초기 설정부터 GitHub 리포지토리 생성까지의 과정을 학습합니다.',
        content:
`GitHub Pages로 배포하려면 먼저 **Git**과 **GitHub 리포지토리**가 필요합니다.

**Step 1: Git 설치 확인**
터미널에서 \`git --version\`을 실행하여 Git이 설치되어 있는지 확인합니다.
설치되어 있지 않다면 https://git-scm.com 에서 다운로드합니다.

**Step 2: Git 초기 설정**
처음 사용한다면 사용자 정보를 설정합니다:
- \`git config --global user.name "이름"\`
- \`git config --global user.email "이메일"\`

**Step 3: GitHub 리포지토리 생성**
1. GitHub.com에서 **New repository** 클릭
2. Repository name 입력 (예: my-portfolio)
3. **Public** 선택 (GitHub Pages 무료 사용 조건)
4. Create repository 클릭

**Step 4: 로컬 프로젝트와 연결**
프로젝트 폴더에서 Git을 초기화하고 GitHub와 연결합니다.

**중요한 파일들:**
- \`.gitignore\` — Git에 포함하지 않을 파일 목록 (node_modules, .env 등)
- \`CNAME\` — 커스텀 도메인 사용 시 필요 (dist 폴더에 위치)

**자주 하는 실수:**
- \`node_modules/\`를 커밋하는 실수 → .gitignore에 반드시 포함
- \`.env\` 파일을 커밋하는 실수 → API 키 유출 위험!
- 빈 폴더는 Git이 추적하지 않음 → \`.gitkeep\` 파일 추가`,
        keyPoints: [
          'Git 설치 → 사용자 설정 → GitHub 리포 생성 → 로컬 연결 순서',
          'GitHub Pages는 Public 리포지토리에서 무료 사용 가능',
          '.gitignore로 node_modules, .env 등 민감한 파일 제외 필수',
          '.env 파일을 절대 커밋하지 말 것 — API 키 유출 위험',
        ],
        codeExamples: [
          {
            language: 'bash',
            title: 'Git 초기 설정 및 GitHub 연결',
            code:
`# Git 설치 확인
git --version

# 사용자 정보 설정 (처음 한 번만)
git config --global user.name "홍길동"
git config --global user.email "hong@example.com"

# 프로젝트 폴더에서 Git 초기화
cd ~/my-project
git init

# .gitignore 생성 (React + Vite 프로젝트용)
cat > .gitignore << 'EOF'
node_modules/
dist/
.env
.env.local
.DS_Store
NUL
nul
.claude/
EOF

# 첫 커밋
git add .
git commit -m "Initial commit"

# GitHub 리포지토리 연결
git remote add origin https://github.com/사용자명/리포이름.git
git branch -M main
git push -u origin main`,
          },
        ],
      },
      {
        id: 'day25-gh-pages-deploy',
        title: 'gh-pages로 배포하기',
        description: 'Vite 프로젝트를 gh-pages 패키지를 사용하여 GitHub Pages에 배포합니다.',
        content:
`**gh-pages**는 빌드 결과물(dist 폴더)을 GitHub Pages의 \`gh-pages\` 브랜치에 자동으로 푸시해주는 도구입니다.

**배포 과정:**
1. \`npm run build\` → dist 폴더에 빌드 결과물 생성
2. \`npx gh-pages -d dist\` → dist 폴더 내용을 gh-pages 브랜치에 푸시
3. GitHub가 gh-pages 브랜치를 자동으로 호스팅

**Vite 설정 (중요):**
React Router를 사용하는 SPA는 \`vite.config.ts\`에서 **base** 설정이 필요합니다.
커스텀 도메인을 사용하면 \`base: '/'\`로 설정합니다.
GitHub 기본 도메인(사용자명.github.io/리포명)을 사용하면 \`base: '/리포명/'\`으로 설정합니다.

**SPA 라우팅 문제 해결:**
GitHub Pages는 정적 호스팅이라 새로고침 시 404가 발생합니다.
해결 방법: \`dist/404.html\`을 \`dist/index.html\`과 동일하게 만듭니다.

**배포 스크립트 자동화:**
package.json에 배포 스크립트를 추가하면 편리합니다.

**배포 확인:**
배포 후 1-2분 기다린 다음 URL에 접속하여 확인합니다.
GitHub 리포 Settings → Pages에서 배포 상태를 확인할 수 있습니다.`,
        keyPoints: [
          'gh-pages 패키지가 dist 폴더를 gh-pages 브랜치에 자동 푸시',
          'vite.config.ts에서 base 경로 설정이 필수',
          'SPA 라우팅 문제는 404.html 복사로 해결',
          '배포 후 1-2분 대기 필요 — GitHub Actions 빌드 시간',
        ],
        codeExamples: [
          {
            language: 'bash',
            title: 'gh-pages 배포 전체 과정',
            code:
`# 1. gh-pages 패키지 설치
npm install --save-dev gh-pages

# 2. 빌드
npm run build

# 3. SPA 라우팅을 위한 404.html 복사
cp dist/index.html dist/404.html

# 4. 커스텀 도메인 사용 시 CNAME 파일 생성
echo "mysite.example.com" > dist/CNAME

# 5. 배포
npx gh-pages -d dist

# 6. 배포 확인 (1-2분 후)
# https://사용자명.github.io/리포이름/
# 또는 커스텀 도메인 URL`,
          },
          {
            language: 'typescript',
            title: 'vite.config.ts — GitHub Pages 배포 설정',
            code:
`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 커스텀 도메인 사용 시:
  base: '/',
  // GitHub 기본 도메인 사용 시:
  // base: '/리포이름/',
  build: {
    outDir: 'dist',
  },
});`,
          },
          {
            language: 'json',
            title: 'package.json — 배포 스크립트 추가',
            code:
`{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build && cp dist/index.html dist/404.html",
    "deploy": "gh-pages -d dist"
  }
}`,
          },
        ],
      },
      {
        id: 'day25-custom-domain',
        title: '커스텀 도메인 설정',
        description: 'GitHub Pages에 자체 도메인을 연결하는 방법을 배웁니다.',
        content:
`기본 URL(\`사용자명.github.io/리포명\`) 대신 **자체 도메인**을 사용할 수 있습니다.

**커스텀 도메인 설정 3단계:**

**Step 1: 도메인 DNS 설정**
도메인 관리 사이트에서 DNS 레코드를 추가합니다:

서브도메인(예: app.example.com)의 경우:
- CNAME 레코드: \`app\` → \`사용자명.github.io\`

루트 도메인(example.com)의 경우:
- A 레코드 4개 추가 (GitHub의 IP 주소)

**Step 2: CNAME 파일 생성**
\`dist/CNAME\` 파일에 도메인을 적습니다.
배포할 때마다 이 파일이 포함되어야 하므로 \`public/CNAME\`에도 생성합니다.
(Vite는 public 폴더의 파일을 dist에 자동 복사)

**Step 3: GitHub 설정**
리포지토리 Settings → Pages → Custom domain에 도메인 입력
**Enforce HTTPS** 체크 (SSL 인증서 자동 발급 — 최대 24시간 소요)

**주의사항:**
- DNS 전파에 최대 48시간 소요 (보통 수분~수시간)
- CNAME 파일이 없으면 배포할 때마다 커스텀 도메인 설정이 초기화됨
- \`public/CNAME\` 파일을 꼭 만들어 둘 것
- HTTPS 인증서 발급에 시간이 걸릴 수 있음`,
        keyPoints: [
          'DNS에 CNAME 또는 A 레코드를 추가하여 GitHub Pages와 연결',
          'public/CNAME 파일에 도메인을 적어 배포 시 자동 포함',
          'GitHub Settings에서 Enforce HTTPS 활성화',
          'DNS 전파에 최대 48시간, HTTPS 인증서에 최대 24시간 소요',
        ],
        codeExamples: [
          {
            language: 'bash',
            title: 'CNAME 파일 생성 및 배포',
            code:
`# public/ 폴더에 CNAME 생성 (Vite가 dist에 자동 복사)
echo "myproject.dreamitbiz.com" > public/CNAME

# 빌드 및 배포
npm run build
cp dist/index.html dist/404.html
npx gh-pages -d dist

# DNS 설정 확인 (전파 후)
nslookup myproject.dreamitbiz.com
# 또는
dig myproject.dreamitbiz.com

# GitHub Pages IP (A 레코드용 — 루트 도메인일 때)
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153`,
          },
        ],
      },
    ],
  },

  // ── Day 26: 도구 비교 정리 ──
  {
    day: 26,
    week: 4,
    title: '도구 비교 정리',
    description: '사용해본 도구들을 비교 정리합니다.',
    tasks: ['각 도구의 장단점 정리', '상황별 추천 도구 정리', '비교표 작성'],
    tools: ['메모장'],
    deliverable: '도구 비교 노트',
    contents: [
      {
        id: 'day26-tool-categories',
        title: '바이브코딩 도구 카테고리 정리',
        description: '4주간 사용한 도구들을 카테고리별로 분류하고 각각의 특성을 정리합니다.',
        content:
`4주 부트캠프 동안 사용한 바이브코딩 도구들을 **카테고리별**로 정리합니다.

**카테고리 1: 웹 기반 앱 빌더**
- **Lovable** — 프롬프트만으로 풀스택 앱 생성, Supabase 연동 지원
- **Bolt.new** — 브라우저에서 바로 React/Next.js 앱 생성 및 편집
- **v0.dev** — Vercel의 UI 컴포넌트 생성 도구, 디자인에 특화

**카테고리 2: AI 코드 에디터**
- **Cursor** — VS Code 기반 AI IDE, 인라인 편집/Composer 모드
- **Windsurf** — Codeium의 AI IDE, Cascade 에이전트 모드

**카테고리 3: 터미널 기반 AI**
- **Claude Code** — Anthropic의 CLI 도구, 터미널에서 직접 코딩
- **GitHub Copilot CLI** — GitHub의 터미널 AI 도우미

**카테고리 4: AI 챗봇 (코딩 보조)**
- **Claude.ai** — Anthropic의 웹 채팅, 코드 생성/설명에 활용
- **ChatGPT** — OpenAI의 챗봇, 범용 코딩 질문
- **Gemini** — Google의 AI, 코드 분석/생성

**카테고리 5: 인프라/배포**
- **GitHub Pages** — 정적 사이트 무료 호스팅
- **Supabase** — 오픈소스 Firebase 대안 (DB, Auth, Storage)

각 도구의 **핵심 강점**을 한 줄로 정리하면 상황에 맞는 도구 선택이 쉬워집니다.`,
        keyPoints: [
          '웹 빌더(Lovable/Bolt/v0), AI IDE(Cursor/Windsurf), CLI(Claude Code) 3대 카테고리',
          'AI 챗봇은 코딩 보조 역할로 활용',
          '각 도구의 핵심 강점을 한 줄로 정리해두면 선택이 쉬움',
          '도구 선택은 프로젝트 규모와 단계에 따라 달라짐',
        ],
      },
      {
        id: 'day26-comparison-matrix',
        title: '도구별 상세 비교표',
        description: '주요 도구들을 여러 기준으로 비교하여 상황별 최적 도구를 판단합니다.',
        content:
`각 도구를 **6가지 기준**으로 비교해봅시다.

**비교 기준:**
1. **진입 장벽** — 처음 사용하기까지 얼마나 쉬운가
2. **커스터마이징** — 생성된 코드를 얼마나 자유롭게 수정 가능한가
3. **프로젝트 규모** — 어느 정도 규모의 프로젝트에 적합한가
4. **비용** — 무료/유료 플랜과 가격
5. **학습 가치** — 코딩 실력 향상에 얼마나 도움되는가
6. **협업** — 팀 작업에 적합한가

**Lovable:**
- 진입 장벽: 매우 낮음 (프롬프트만 입력)
- 커스터마이징: 보통 (UI 수정 가능하지만 한계 있음)
- 프로젝트 규모: 소규모~중규모
- 비용: 무료 크레딧 제공, 유료 $20/월~
- 학습 가치: 낮음 (코드를 직접 작성하지 않아서)
- 협업: 제한적

**Cursor:**
- 진입 장벽: 보통 (VS Code 경험 필요)
- 커스터마이징: 매우 높음 (직접 코드 편집)
- 프로젝트 규모: 모든 규모
- 비용: 무료 플랜 있음, Pro $20/월
- 학습 가치: 높음 (코드를 직접 보고 수정)
- 협업: 우수 (Git 통합)

**Claude Code:**
- 진입 장벽: 높음 (터미널, CLI 경험 필요)
- 커스터마이징: 매우 높음 (모든 파일 직접 수정)
- 프로젝트 규모: 중규모~대규모
- 비용: API 사용량 기반 과금
- 학습 가치: 매우 높음 (코드 구조를 깊이 이해)
- 협업: 우수 (Git 통합, CLAUDE.md 공유)

**v0.dev:**
- 진입 장벽: 낮음 (프롬프트로 UI 생성)
- 커스터마이징: 보통 (생성 후 코드 복사하여 수정)
- 프로젝트 규모: 컴포넌트 단위
- 비용: 무료 크레딧 제공
- 학습 가치: 보통 (UI 디자인 패턴 학습)
- 협업: 제한적

**Bolt.new:**
- 진입 장벽: 낮음 (브라우저에서 바로 시작)
- 커스터마이징: 보통 (웹 에디터에서 수정)
- 프로젝트 규모: 소규모~중규모
- 비용: 무료 크레딧, 유료 $20/월~
- 학습 가치: 보통
- 협업: 제한적`,
        keyPoints: [
          '진입 장벽, 커스터마이징, 규모, 비용, 학습 가치, 협업 6가지 기준으로 비교',
          'Lovable/Bolt은 빠른 프로토타이핑, Cursor/Claude Code는 실제 개발에 적합',
          '학습 가치는 Claude Code > Cursor > 웹 빌더 순',
          '프로젝트 규모가 커질수록 IDE/CLI 도구가 유리',
        ],
      },
      {
        id: 'day26-situation-recommendations',
        title: '상황별 도구 추천 가이드',
        description: '개발 상황과 목적에 따라 어떤 도구를 선택해야 하는지 가이드를 작성합니다.',
        content:
`**"어떤 도구를 써야 하지?"** 라는 질문에 대한 답을 정리합니다.

**상황 1: 아이디어를 빠르게 검증하고 싶다**
- 추천: **Lovable** 또는 **Bolt.new**
- 이유: 5분 안에 동작하는 앱을 볼 수 있음
- 그 다음: 가능성이 보이면 Cursor/Claude Code로 본격 개발

**상황 2: 예쁜 UI가 필요하다**
- 추천: **v0.dev** → **Cursor**로 커스터마이징
- 이유: v0가 디자인 퀄리티가 가장 높음
- 워크플로우: v0에서 컴포넌트 생성 → 코드 복사 → Cursor에서 수정

**상황 3: 풀스택 앱을 제대로 만들고 싶다**
- 추천: **Claude Code** + **Cursor** 조합
- 이유: Claude Code로 구조 설계, Cursor로 세부 편집
- 인프라: Supabase + GitHub Pages

**상황 4: 기존 프로젝트를 유지보수한다**
- 추천: **Claude Code**
- 이유: 터미널에서 프로젝트 전체를 분석하고 수정 가능
- CLAUDE.md로 프로젝트 컨텍스트 유지

**상황 5: 코딩을 배우면서 만들고 싶다**
- 추천: **Cursor**
- 이유: 코드를 직접 보면서 AI 도움을 받을 수 있음
- AI가 작성한 코드를 한 줄씩 이해하는 연습

**상황 6: 팀 프로젝트를 한다**
- 추천: **Cursor** + **Claude Code** + **Git**
- 이유: Git 통합이 잘 되어 있고, CLAUDE.md로 컨텍스트 공유

**핵심 원칙:**
도구는 **목적에 맞게** 선택하고, **하나에 얽매이지 않는** 것이 중요합니다.
프로토타이핑에는 웹 빌더, 본격 개발에는 IDE/CLI를 사용하세요.
여러 도구를 조합하는 것이 가장 효과적입니다.`,
        keyPoints: [
          '프로토타이핑은 웹 빌더, 본격 개발은 IDE/CLI',
          'v0(UI) + Cursor(편집) + Claude Code(구조) 조합이 강력',
          '학습 목적이면 Cursor, 생산성이면 Claude Code',
          '하나의 도구에 얽매이지 말고 상황에 맞게 조합',
        ],
      },
    ],
  },

  // ── Day 27: 최종 프로젝트 마무리 ──
  {
    day: 27,
    week: 4,
    title: '최종 프로젝트 마무리',
    description: '4주간의 프로젝트들을 정리하고 공유합니다.',
    tasks: ['포트폴리오에 프로젝트 추가', 'README 작성', 'GitHub 정리'],
    tools: ['Claude Code', 'Git'],
    deliverable: '최종 포트폴리오',
    contents: [
      {
        id: 'day27-portfolio-organization',
        title: '포트폴리오 프로젝트 정리하기',
        description: '4주간 만든 프로젝트들을 포트폴리오에 체계적으로 정리합니다.',
        content:
`4주 부트캠프 동안 여러 프로젝트를 만들었습니다.
이제 이것들을 **포트폴리오**로 정리하여 보여줄 수 있게 만듭니다.

**정리할 프로젝트 목록 (4주 결과물):**
- Week 1: Todo 앱, 포트폴리오 기획서
- Week 2: UI 컴포넌트, 포트폴리오 사이트, 마크다운 치트시트
- Week 3: 풀스택 앱 (React + Supabase), SaaS 랜딩 페이지
- Week 4: CLAUDE.md, Skills/Hooks 설정, 배포된 사이트

**포트폴리오 구성 방법:**

**방법 1: 포트폴리오 사이트에 프로젝트 섹션 추가**
- 각 프로젝트의 스크린샷, 설명, 사용 기술, 링크를 카드 형태로 배치
- 프로젝트마다 "어떤 문제를 해결했는가"를 간결하게 설명

**방법 2: GitHub 프로필 정리**
- 각 프로젝트 리포지토리에 README.md 작성
- GitHub 프로필 README 생성 (사용자명/사용자명 리포)
- 핀(Pin) 기능으로 대표 프로젝트 6개 고정

**프로젝트 설명 작성 공식:**
1. **한 줄 요약**: "XX 기능을 제공하는 YY 앱"
2. **기술 스택**: 사용한 기술 나열
3. **주요 기능**: 핵심 기능 3-5개
4. **배운 점**: 이 프로젝트에서 배운 것
5. **라이브 데모**: 배포된 URL

**팁: AI로 프로젝트 설명 작성하기**
Claude Code에게 프로젝트를 분석하고 설명을 작성해달라고 요청하세요:
\`claude "이 프로젝트를 분석해서 포트폴리오용 설명을 작성해줘"\``,
        keyPoints: [
          '4주간의 결과물을 포트폴리오 사이트와 GitHub에 정리',
          '프로젝트마다 한 줄 요약 + 기술 스택 + 주요 기능 + 배운 점 기록',
          'GitHub 프로필 README와 핀 기능으로 대표 프로젝트 노출',
          'Claude Code로 프로젝트 설명 자동 생성 가능',
        ],
      },
      {
        id: 'day27-readme-writing',
        title: '좋은 README.md 작성법',
        description: '프로젝트의 첫인상을 결정하는 README.md를 효과적으로 작성하는 방법을 배웁니다.',
        content:
`README.md는 프로젝트의 **첫인상**입니다.
GitHub에서 리포지토리에 접속하면 가장 먼저 보이는 문서입니다.

**좋은 README의 구조:**

**1. 프로젝트 제목 + 한 줄 소개**
- 프로젝트가 무엇인지 즉시 알 수 있어야 함

**2. 스크린샷 또는 데모**
- 백문이 불여일견 — 동작하는 모습을 보여줌
- GIF나 스크린샷을 포함하면 효과 극대화

**3. 기술 스택**
- 사용된 기술을 배지(badge)로 표시하면 깔끔함

**4. 주요 기능**
- 핵심 기능을 불릿 포인트로 나열

**5. 시작하기 (Getting Started)**
- 프로젝트를 로컬에서 실행하는 방법
- 필요한 환경변수 안내 (.env.example 제공)

**6. 프로젝트 구조**
- 주요 폴더와 파일의 역할 설명

**README 작성 실수:**
- 너무 길게 쓰기 → 핵심만 간결하게
- 설치 방법 누락 → 다른 사람이 실행할 수 없음
- 업데이트 안 함 → 현재 코드와 README가 불일치

**Claude Code로 README 생성:**
\`claude "이 프로젝트의 README.md를 작성해줘. 한국어로."\`
자동으로 프로젝트를 분석하고 구조화된 README를 생성합니다.`,
        keyPoints: [
          'README는 프로젝트의 첫인상 — 제목, 스크린샷, 기능, 설치방법 필수',
          '스크린샷이나 GIF를 포함하면 이해도가 크게 향상',
          'Getting Started 섹션으로 누구나 실행 가능하게',
          'Claude Code에게 README 초안 생성을 요청하면 효율적',
        ],
        codeExamples: [
          {
            language: 'markdown',
            title: 'README.md 템플릿',
            code:
`# 프로젝트명

> 한 줄 소개: AI를 활용한 개인 포트폴리오 웹사이트

## 스크린샷

![메인 화면](./screenshots/main.png)

## 기술 스택

- React 19 + TypeScript
- Vite
- Supabase (Auth, Database)
- GitHub Pages (배포)

## 주요 기능

- 반응형 포트폴리오 레이아웃
- 프로젝트 갤러리 (카드 형태)
- 다크모드 지원
- Supabase 기반 방문자 카운터

## 시작하기

\\\`\\\`\\\`bash
# 리포 클론
git clone https://github.com/username/project.git
cd project

# 의존성 설치
npm install

# 환경변수 설정
cp .env.example .env
# .env 파일에 Supabase URL과 키를 입력하세요

# 개발 서버 실행
npm run dev
\\\`\\\`\\\`

## 배포

\\\`\\\`\\\`bash
npm run build
npx gh-pages -d dist
\\\`\\\`\\\`

## 라이선스

MIT`,
          },
        ],
      },
      {
        id: 'day27-github-cleanup',
        title: 'GitHub 리포지토리 정리',
        description: 'GitHub 계정의 리포지토리들을 깔끔하게 정리하고 공개 프로필을 완성합니다.',
        content:
`포트폴리오의 마지막 단계는 **GitHub 계정 자체를 정리**하는 것입니다.

**리포지토리 정리 체크리스트:**

1. **불필요한 리포 삭제 또는 Private 전환**
- 테스트용으로 만든 리포는 삭제
- 미완성 프로젝트는 Private으로 전환
- 완성된 프로젝트만 Public으로 유지

2. **리포지토리 Description 작성**
- 각 리포에 한 줄 설명 추가
- Topics(태그) 추가: react, typescript, vite 등

3. **핀(Pin) 설정**
- 프로필 페이지에 최대 6개 리포를 핀 고정
- 가장 잘 만든 프로젝트를 선택

4. **GitHub 프로필 README 생성**
- \`사용자명/사용자명\` 리포를 생성하면 프로필에 README가 표시됨
- 자기소개, 기술 스택, 대표 프로젝트를 포함

**GitHub 프로필 관리 팁:**
- 커밋 그래프(잔디)를 꾸준히 채우면 활동성이 보임
- 의미 있는 커밋 메시지를 작성하는 습관
- Issue와 PR을 활용하면 전문성이 보임

**최종 점검:**
- 모든 Public 리포에 README가 있는가?
- .env나 API 키가 노출된 리포는 없는가?
- 각 리포의 Description과 Topics가 설정되었는가?
- 프로필 README가 최신 상태인가?`,
        keyPoints: [
          '불필요한 리포 삭제/Private 전환, 완성 프로젝트만 Public 유지',
          '각 리포에 Description과 Topics(태그) 추가',
          '프로필 페이지에 대표 프로젝트 6개를 핀 고정',
          'API 키 노출 여부 반드시 점검 — 보안 사고 예방',
        ],
        codeExamples: [
          {
            language: 'bash',
            title: 'GitHub 리포 정리 명령어 (gh CLI)',
            code:
`# GitHub CLI 설치 확인
gh --version

# 내 리포지토리 목록 보기
gh repo list --limit 50

# 리포지토리 설명 수정
gh repo edit my-portfolio --description "AI 바이브코딩으로 만든 포트폴리오"

# 리포지토리에 토픽 추가
gh repo edit my-portfolio --add-topic react,typescript,vite,portfolio

# 리포지토리를 Private으로 변경 (미완성 프로젝트)
gh repo edit test-project --visibility private

# 리포지토리 삭제 (불필요한 테스트 리포)
gh repo delete test-repo --yes

# 프로필 README 리포 생성 (사용자명으로)
gh repo create 사용자명 --public --description "GitHub Profile README"`,
          },
        ],
      },
    ],
  },

  // ── Day 28: 28일 회고 & 다음 단계 ──
  {
    day: 28,
    week: 4,
    title: '28일 회고 & 다음 단계',
    description: '전체 부트캠프를 회고하고 성장을 확인합니다.',
    tasks: ['전체 학습 정리', '자기진단 체크리스트 확인', '다음 학습 계획 수립'],
    tools: ['메모장'],
    deliverable: '28일 회고록',
    contents: [
      {
        id: 'day28-4weeks-review',
        title: '4주간의 학습 여정 돌아보기',
        description: '부트캠프 4주 동안 배운 내용과 만든 결과물을 주차별로 정리합니다.',
        content:
`28일간의 바이브코딩 부트캠프가 끝났습니다.
지금까지의 여정을 **주차별로** 돌아봅시다.

**Week 1: 입문 — "AI가 코드를 만들어준다고?"**
- 바이브코딩의 개념과 마인드셋을 배웠습니다
- Lovable, Bolt.new로 첫 앱을 만들었습니다
- 프롬프트 작성의 기초를 연습했습니다
- 핵심 깨달음: 자연어로 프로그래밍이 가능하다

**Week 2: 성장 — "도구를 다루는 힘이 생겼다"**
- v0.dev로 UI 컴포넌트를 생성했습니다
- Cursor IDE의 AI 기능(인라인 편집, Composer)을 익혔습니다
- 포트폴리오 사이트를 직접 만들었습니다
- 마크다운 문법을 마스터했습니다
- 핵심 깨달음: 도구를 조합하면 시너지가 난다

**Week 3: 심화 — "진짜 개발자처럼"**
- Supabase로 백엔드를 구축했습니다
- React + Supabase 풀스택 앱을 완성했습니다
- Claude Code를 설치하고 터미널 기반 개발을 경험했습니다
- SaaS 랜딩 페이지를 제작했습니다
- 핵심 깨달음: 풀스택 개발도 AI와 함께면 가능하다

**Week 4: 완성 — "나만의 개발 환경을 만들다"**
- CLAUDE.md로 프로젝트 컨텍스트 관리를 배웠습니다
- Skills & Hooks로 워크플로우를 자동화했습니다
- GitHub Pages로 프로젝트를 배포했습니다
- 도구들을 비교 정리하고 포트폴리오를 완성했습니다
- 핵심 깨달음: 도구를 내 것으로 만드는 것이 핵심이다

**28일 전의 나 vs 지금의 나:**
- 전: AI 코딩 도구가 뭔지 몰랐다
- 후: 5가지 이상의 도구를 상황에 맞게 선택하여 사용할 수 있다
- 전: 웹사이트를 만드는 것은 전문가의 영역이라 생각했다
- 후: 직접 풀스택 앱을 만들고 배포까지 할 수 있다`,
        keyPoints: [
          'Week 1 입문 → Week 2 성장 → Week 3 심화 → Week 4 완성의 단계적 성장',
          '5가지 이상의 바이브코딩 도구를 실전에서 사용 경험',
          '풀스택 앱 개발 + 배포까지 전 과정을 경험',
          '도구를 내 것으로 만드는 것(CLAUDE.md, Skills)이 진짜 실력',
        ],
      },
      {
        id: 'day28-self-assessment',
        title: '자기진단 체크리스트',
        description: '부트캠프 완료 후 자신의 역량을 객관적으로 평가하는 체크리스트입니다.',
        content:
`아래 항목들을 하나씩 체크하면서 **자신의 현재 수준**을 확인해보세요.

**기본 역량 (Day 1-7)**
- 바이브코딩의 개념과 장단점을 설명할 수 있다
- Lovable/Bolt.new로 간단한 앱을 만들 수 있다
- 효과적인 프롬프트를 작성할 수 있다
- 프로젝트 기획서를 작성할 수 있다

**중급 역량 (Day 8-14)**
- v0.dev로 UI 컴포넌트를 생성할 수 있다
- Cursor의 주요 기능(인라인 편집, Composer, Chat)을 사용할 수 있다
- 마크다운 문법을 자유롭게 활용할 수 있다
- 반응형 웹 페이지를 만들 수 있다

**고급 역량 (Day 15-21)**
- Supabase 프로젝트를 생성하고 테이블을 설계할 수 있다
- React + Supabase로 CRUD 기능을 구현할 수 있다
- Supabase Auth로 로그인 기능을 만들 수 있다
- Claude Code를 설치하고 기본 명령어를 사용할 수 있다

**전문 역량 (Day 22-28)**
- CLAUDE.md를 작성하여 프로젝트 컨텍스트를 관리할 수 있다
- 커스텀 슬래시 명령어(Skills)를 만들 수 있다
- GitHub Pages로 프로젝트를 배포할 수 있다
- 상황에 맞는 AI 코딩 도구를 선택할 수 있다
- Git의 기본 명령어(add, commit, push)를 사용할 수 있다

**점수 계산:**
- 17개 항목 중 15개 이상: 훌륭합니다! 심화 과정으로 진행하세요.
- 10-14개: 좋은 출발입니다. 부족한 부분을 복습하세요.
- 10개 미만: 1-2주차 내용을 다시 한번 따라해보세요.

모든 항목을 체크할 필요는 없습니다.
**자신의 현재 위치를 아는 것**이 가장 중요합니다.`,
        keyPoints: [
          '기본/중급/고급/전문 4단계로 역량을 체계적으로 평가',
          '17개 체크 항목으로 객관적인 자기진단 가능',
          '15개 이상이면 심화 과정, 10-14개면 복습, 10개 미만이면 기초 재학습',
          '모든 항목을 완벽히 체크할 필요 없음 — 현재 위치를 아는 것이 핵심',
        ],
      },
      {
        id: 'day28-next-steps',
        title: '다음 단계: 부트캠프 이후의 학습 로드맵',
        description: '부트캠프를 마친 후 계속 성장하기 위한 학습 방향과 프로젝트 아이디어를 제시합니다.',
        content:
`부트캠프는 끝났지만, **바이브코딩 여정은 이제 시작**입니다.
다음 단계를 위한 로드맵을 제시합니다.

**단기 목표 (1-2주):**
- 부트캠프에서 만든 프로젝트의 완성도를 높이기
- 빠진 기능 추가, UI 다듬기, 버그 수정
- 포트폴리오 사이트를 실제로 활용하기 시작

**중기 목표 (1-3개월):**

*경로 A: 프론트엔드 심화*
- TypeScript 기본 문법 학습
- React Hooks 심화 (useReducer, useContext, Custom Hooks)
- 상태관리 라이브러리 학습 (Zustand, Jotai)
- CSS 프레임워크 학습 (Tailwind CSS)

*경로 B: 풀스택 개발*
- Supabase 심화 (RLS, Edge Functions, Storage)
- API 설계와 RESTful 패턴
- 결제 연동 (PortOne, Stripe)
- 실제 서비스 런칭 경험

*경로 C: AI 활용 극대화*
- Claude Code 고급 기능 (MCP 서버, 멀티 에이전트)
- Cursor Rules 파일 작성
- CI/CD 파이프라인 구축
- AI 기반 테스트 자동화

**장기 목표 (3-6개월):**
- 실제 사용자가 있는 서비스 런칭
- 오픈소스 프로젝트 기여
- 기술 블로그 운영
- AI 코딩 커뮤니티 참여

**프로젝트 아이디어:**
1. **개인 블로그** — React + Supabase로 직접 만드는 블로그
2. **가계부 앱** — 수입/지출 관리 + 차트 시각화
3. **일정 관리 앱** — 캘린더 + 알림 기능
4. **학습 노트 앱** — 마크다운 에디터 + 카테고리 분류
5. **커뮤니티 사이트** — 게시판 + 댓글 + 회원 관리

**가장 중요한 것:**
매일 조금이라도 코드를 만지세요.
완벽하지 않아도 괜찮습니다.
AI와 함께 만들고, 배우고, 성장하세요.
**바이브코딩은 당신의 아이디어를 현실로 만드는 가장 빠른 길**입니다.`,
        keyPoints: [
          '단기(1-2주): 기존 프로젝트 완성도 향상',
          '중기(1-3개월): 프론트엔드 심화 / 풀스택 개발 / AI 활용 중 경로 선택',
          '장기(3-6개월): 실제 서비스 런칭, 오픈소스 기여, 블로그 운영',
          '매일 조금씩이라도 코드를 만지는 것이 성장의 핵심',
        ],
      },
      {
        id: 'day28-retrospective-template',
        title: '28일 회고록 작성 가이드',
        description: '부트캠프 전체를 돌아보는 회고록을 체계적으로 작성하는 방법을 안내합니다.',
        content:
`마지막으로, **28일 회고록**을 작성합니다.
회고록은 나의 성장을 기록하고, 앞으로의 방향을 설정하는 중요한 문서입니다.

**회고록 작성 프레임워크: 4L 회고법**

**1. Liked (좋았던 것)**
- 부트캠프에서 가장 재미있었던 것은?
- 특히 뿌듯했던 순간은?
- 기대 이상이었던 도구나 기능은?

**2. Learned (배운 것)**
- 새로 알게 된 기술이나 개념은?
- 가장 크게 성장한 부분은?
- 예상하지 못했던 깨달음은?

**3. Lacked (아쉬웠던 것)**
- 더 깊이 배우고 싶었던 것은?
- 시간이 부족했던 부분은?
- 어려워서 넘어간 것은?

**4. Longed for (앞으로 하고 싶은 것)**
- 다음에 만들고 싶은 프로젝트는?
- 더 배우고 싶은 기술은?
- 3개월 후 나의 목표는?

**작성 팁:**
- 솔직하게 작성하세요 — 잘한 것도, 부족한 것도
- 구체적으로 작성하세요 — "많이 배웠다" 대신 "Supabase Auth 구현을 배웠다"
- 수치를 포함하세요 — "프로젝트 3개 완성", "도구 5개 사용"
- 날짜를 기록하세요 — 나중에 돌아볼 때 유용합니다

**회고록 보관:**
- GitHub 리포에 \`RETROSPECTIVE.md\`로 저장
- 또는 개인 노트앱에 저장
- 3개월 후에 다시 읽어보면 성장을 실감할 수 있습니다

수고하셨습니다!
28일의 바이브코딩 부트캠프를 완주한 당신은 이미 **바이브코더**입니다.`,
        keyPoints: [
          '4L 회고법: Liked(좋았던 것), Learned(배운 것), Lacked(아쉬운 것), Longed for(하고 싶은 것)',
          '솔직하고 구체적으로, 수치를 포함하여 작성',
          '회고록을 GitHub이나 노트앱에 저장하여 나중에 돌아보기',
          '28일 부트캠프 완주 = 바이브코더로서의 시작',
        ],
      },
    ],
  },
];
