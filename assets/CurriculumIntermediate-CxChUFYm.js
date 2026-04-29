import{r as C,h as I,a as S,j as e}from"./index-BTNUaOzl.js";import{S as E}from"./SidebarLayout-DBQjbUAu.js";import{C as f}from"./CodeBlock-Cywd_VGf.js";import{L as P}from"./LevelBadge-7w7eoV4w.js";const s=[{id:"int-1",slug:"context-management",title:"컨텍스트 관리",description:"AI에게 프로젝트 맥락을 효과적으로 전달하고, 대화 품질을 유지하는 기법을 학습합니다.",level:"intermediate",order:1,contents:[{id:"int-1-1",title:"CLAUDE.md와 Rules 파일 작성",description:"AI 코딩 도구가 프로젝트를 이해하도록 컨텍스트 문서를 작성합니다.",content:`AI 코딩 도구는 매 대화마다 프로젝트의 맥락을 새로 파악해야 합니다. CLAUDE.md나 .cursorrules 같은 컨텍스트 파일을 작성하면 AI가 프로젝트의 기술 스택, 코딩 컨벤션, 아키텍처를 즉시 이해할 수 있습니다.

**CLAUDE.md의 핵심 구성 요소:**
- 프로젝트 개요 및 기술 스택
- 디렉토리 구조 설명
- 코딩 컨벤션 (네이밍, 포맷팅)
- 자주 사용하는 패턴
- 절대 하지 말아야 할 것 (Anti-patterns)

좋은 컨텍스트 문서는 새로운 팀원에게 프로젝트를 설명하는 온보딩 문서와 같은 역할을 합니다. AI도 사람과 마찬가지로 맥락을 충분히 이해할수록 더 정확한 코드를 생성합니다.`,keyPoints:["CLAUDE.md는 프로젝트 루트에 위치하며 AI가 자동으로 읽는다","기술 스택, 컨벤션, 아키텍처를 명시적으로 기술한다","Anti-pattern을 명시하면 AI의 실수를 사전에 방지할 수 있다","팀 프로젝트에서는 모든 팀원이 동일한 AI 컨텍스트를 공유한다"],codeExamples:[{language:"markdown",title:"CLAUDE.md 예시",code:`# Project: My SaaS App

## Tech Stack
- React 19 + TypeScript + Vite 7
- Supabase (Auth, DB, Storage)
- TailwindCSS 4

## Directory Structure
\`\`\`
src/
  components/   # 재사용 가능한 UI 컴포넌트
  pages/        # 라우트별 페이지 컴포넌트
  hooks/        # 커스텀 훅
  utils/        # 유틸리티 함수
  types/        # TypeScript 타입 정의
\`\`\`

## Conventions
- 컴포넌트: PascalCase (UserCard.tsx)
- 유틸리티: camelCase (formatDate.ts)
- 타입: interface 우선, type은 유니온/교차에만 사용
- 상태관리: React Context + useReducer

## IMPORTANT
- Supabase 클라이언트는 src/lib/supabase.ts에서만 import
- 모든 API 호출은 try-catch로 감싸기
- console.log 대신 커스텀 logger 사용
- CSS-in-JS 사용 금지 — TailwindCSS만 사용`}]},{id:"int-1-2",title:"프로젝트 구조 설명 기법",description:"복잡한 프로젝트 구조를 AI에게 효과적으로 전달하는 방법을 배웁니다.",content:`AI에게 프로젝트 구조를 설명할 때는 단순히 파일 목록을 나열하는 것이 아니라, 각 디렉토리와 파일의 역할과 관계를 명확히 전달해야 합니다.

**효과적인 프로젝트 구조 설명 3단계:**

1. **전체 아키텍처 조감도**: 프로젝트의 큰 그림을 먼저 설명합니다
2. **모듈별 책임**: 각 디렉토리/모듈이 담당하는 역할을 명시합니다
3. **의존 관계**: 모듈 간의 데이터 흐름과 의존성을 설명합니다

특히 대규모 프로젝트에서는 현재 작업 중인 영역에 집중하여 설명하는 것이 중요합니다. AI의 컨텍스트 윈도우는 유한하므로, 관련 없는 파일 정보는 노이즈가 됩니다.`,keyPoints:["트리 구조로 디렉토리 레이아웃을 시각적으로 전달한다","현재 작업 영역에 해당하는 파일만 선별적으로 공유한다","파일 간 import 관계를 설명하면 AI가 수정 범위를 정확히 파악한다","설정 파일(tsconfig, vite.config 등)은 빌드 이슈 해결 시 반드시 공유한다"],codeExamples:[{language:"markdown",title:"프로젝트 구조 설명 프롬프트 예시",code:`## 현재 작업 중인 영역

인증 시스템을 수정하고 있습니다. 관련 파일 구조:

src/
  contexts/AuthContext.tsx    ← 인증 상태 관리 (Provider)
  hooks/useAuth.ts            ← AuthContext를 소비하는 훅
  pages/Login.tsx             ← 로그인 페이지
  pages/Register.tsx          ← 회원가입 페이지
  components/ProtectedRoute.tsx ← 인증 필요 라우트 가드
  lib/supabase.ts             ← Supabase 클라이언트

## 데이터 흐름
1. supabase.ts에서 클라이언트 초기화
2. AuthContext가 onAuthStateChange를 구독
3. ProtectedRoute가 useAuth()로 인증 여부 확인
4. 미인증 시 /login으로 리다이렉트`}]},{id:"int-1-3",title:"대화 길이 관리와 컨텍스트 윈도우",description:"AI와의 대화가 길어질 때 품질을 유지하는 전략을 학습합니다.",content:`AI 코딩 도구의 대화가 길어지면 초기 맥락이 희석되어 코드 품질이 저하될 수 있습니다. 이를 "컨텍스트 드리프트(Context Drift)"라고 합니다.

**컨텍스트 드리프트 방지 전략:**

1. **작업 단위 분리**: 하나의 대화에서 하나의 기능만 구현합니다
2. **중간 요약**: 대화가 길어지면 지금까지의 결정사항을 요약하여 새 대화를 시작합니다
3. **체크포인트 활용**: 중요한 결정이 내려질 때마다 메모해둡니다
4. **새 대화 전략**: 복잡한 작업은 설계 → 구현 → 리뷰를 별도 대화로 분리합니다

Claude Code에서는 /compact 명령으로 대화를 요약하여 컨텍스트를 절약할 수 있습니다. Cursor에서는 새 Composer 세션을 시작할 때 이전 대화의 핵심 결정사항을 첫 메시지에 포함합니다.`,keyPoints:["하나의 대화에서 하나의 기능을 완성하는 것이 최적이다","20회 이상 대화가 이어지면 새 세션 시작을 고려한다","/compact(Claude Code)로 대화를 요약하여 토큰을 절약할 수 있다","새 대화를 시작할 때 이전 결정사항 요약을 첫 메시지로 전달한다"],codeExamples:[{language:"markdown",title:"새 대화 시작 시 컨텍스트 전달 예시",code:`## 이전 대화 요약

지난 세션에서 다음을 완료했습니다:
1. users 테이블에 avatar_url 컬럼 추가 (migration 완료)
2. UserProfile 타입에 avatarUrl 필드 추가
3. AuthContext에서 avatar 정보 로드 로직 구현

## 이번 세션 목표
- 프로필 이미지 업로드 UI 구현 (Supabase Storage)
- 이미지 크롭/리사이즈 처리
- 기존 MyPage.tsx에 아바타 변경 기능 추가

## 제약 조건
- 이미지 최대 2MB, jpg/png만 허용
- Storage 버킷: avatars (이미 생성됨)
- RLS: 본인 아바타만 CRUD 가능 (정책 설정 완료)`}]},{id:"int-1-4",title:"멀티 프로젝트 컨텍스트 관리",description:"여러 프로젝트를 동시에 관리할 때 컨텍스트를 효율적으로 전환하는 방법을 배웁니다.",content:`실무에서는 여러 프로젝트를 동시에 진행하는 경우가 많습니다. 각 프로젝트의 컨텍스트를 효율적으로 관리하는 것이 생산성의 핵심입니다.

**멀티 프로젝트 관리 전략:**

1. **프로젝트별 CLAUDE.md**: 각 프로젝트 루트에 독립적인 컨텍스트 파일을 유지합니다
2. **글로벌 설정**: ~/.claude/CLAUDE.md에 공통 선호도(코딩 스타일, 언어 등)를 설정합니다
3. **프로젝트 전환 시 명시적 선언**: AI에게 어떤 프로젝트에서 작업하는지 명확히 전달합니다
4. **공유 패턴 문서화**: 여러 프로젝트에서 반복되는 패턴을 별도로 정리합니다

특히 동일한 기술 스택(예: React + Supabase)을 사용하는 프로젝트들은 공통 패턴을 템플릿화하면 AI가 일관된 코드를 생성하는 데 도움이 됩니다.`,keyPoints:["프로젝트별 CLAUDE.md로 독립적인 컨텍스트를 유지한다","글로벌 설정과 프로젝트 설정을 계층적으로 관리한다","공통 패턴은 템플릿으로 만들어 재사용한다","DB 프리픽스 등 프로젝트 고유 설정을 명시하여 혼동을 방지한다"],codeExamples:[{language:"yaml",title:"글로벌 설정 예시 (~/.claude/CLAUDE.md)",code:`# Global Preferences

## 언어
- 코드 주석: 한국어
- 변수명: 영어
- 커밋 메시지: 영어

## 공통 스택
- React 19 + TypeScript
- TailwindCSS
- Supabase

## 코딩 스타일
- 함수형 컴포넌트 + Hooks만 사용
- async/await 우선 (then 체이닝 금지)
- 명시적 return 타입 선언
- barrel exports (index.ts) 사용`}]}]},{id:"int-2",slug:"prompt-advanced",title:"프롬프트 심화 기법",description:"역할 부여, 제약 조건 설정, 체인 오브 쏘트 등 고급 프롬프트 엔지니어링을 학습합니다.",level:"intermediate",order:2,contents:[{id:"int-2-1",title:"역할 부여와 페르소나 설정",description:"AI에게 전문가 역할을 부여하여 코드 품질을 높이는 기법을 배웁니다.",content:`AI에게 특정 전문가 역할을 부여하면 해당 분야의 모범 사례와 패턴을 반영한 코드를 생성합니다. 이를 "페르소나 프롬프팅"이라고 합니다.

**효과적인 역할 부여 패턴:**

1. **전문 분야 지정**: "시니어 React 개발자로서" → React 최적화 패턴 적용
2. **경험 수준 명시**: "10년차 백엔드 개발자로서" → 프로덕션 레벨 코드
3. **특정 관점 요청**: "보안 전문가의 관점에서" → 취약점 중심 리뷰
4. **복합 역할**: "풀스택 개발자이자 DevOps 엔지니어로서" → 배포까지 고려한 코드

역할 부여는 CLAUDE.md의 첫 줄에 배치하거나, 특정 작업에 대한 프롬프트 시작 부분에 명시합니다. 동일한 프로젝트에서도 작업에 따라 역할을 전환하는 것이 효과적입니다.`,keyPoints:["역할을 부여하면 AI가 해당 분야의 모범 사례를 적용한다",'코드 리뷰 시에는 "시니어 리뷰어" 역할이 더 엄격한 피드백을 제공한다',"보안, 성능, 접근성 등 특정 관점을 지정할 수 있다","역할은 CLAUDE.md에 상시 설정하거나 필요 시에만 부여할 수 있다"],codeExamples:[{language:"markdown",title:"역할 부여 프롬프트 예시",code:`# 역할 부여 예시 1: 아키텍처 설계
시니어 소프트웨어 아키텍트로서, 다음 요구사항에 맞는
React + Supabase 애플리케이션의 폴더 구조와 상태 관리
전략을 설계해주세요. 확장성과 유지보수성을 최우선으로
고려해주세요.

# 역할 부여 예시 2: 보안 리뷰
웹 보안 전문가로서 아래 인증 코드를 리뷰해주세요.
OWASP Top 10 관점에서 취약점을 분석하고,
구체적인 수정 방안을 코드와 함께 제시해주세요.

# 역할 부여 예시 3: 성능 최적화
프론트엔드 성능 최적화 전문가로서, 이 컴포넌트의
불필요한 리렌더링을 분석하고 React.memo, useMemo,
useCallback을 적절히 적용해주세요.`}]},{id:"int-2-2",title:"제약 조건과 출력 형식 지정",description:"AI의 출력을 원하는 형태로 제어하는 제약 조건 설정 기법을 배웁니다.",content:`제약 조건을 명확하게 설정하면 AI가 불필요한 코드를 생성하지 않고, 프로젝트의 규칙에 맞는 결과물을 제공합니다.

**제약 조건의 4가지 카테고리:**

1. **기술적 제약**: 사용해야 하는 라이브러리, 금지하는 패턴 등
2. **구조적 제약**: 파일 위치, 네이밍 규칙, export 방식 등
3. **품질 제약**: 에러 처리 필수, 타입 안전성, 테스트 포함 등
4. **출력 형식**: 코드만 출력, 설명 포함, diff 형태 등

제약 조건이 명확할수록 AI의 출력이 예측 가능해지고, 수정 작업이 줄어듭니다. "하지 말아야 할 것"을 명시하는 것이 "해야 할 것"만큼 중요합니다.`,keyPoints:['"~하지 마세요" 형태의 부정 제약이 품질 향상에 매우 효과적이다',"출력 형식을 지정하면 후처리 작업이 줄어든다","기존 코드의 패턴을 예시로 보여주면 일관성이 유지된다","제약 조건은 5개 이내로 핵심만 전달하는 것이 효과적이다"],codeExamples:[{language:"markdown",title:"제약 조건 설정 프롬프트",code:`## 요구사항
사용자 프로필 편집 페이지를 만들어주세요.

## 제약 조건
- React Hook Form 사용 (useState로 폼 관리 금지)
- Zod로 유효성 검증 스키마 정의
- TailwindCSS만 사용 (인라인 스타일, CSS 모듈 금지)
- Supabase로 프로필 업데이트 (fetch/axios 금지)
- 에러 발생 시 toast 알림 표시 (alert 금지)

## 출력 형식
1. 먼저 Zod 스키마 코드
2. 그 다음 컴포넌트 코드
3. 마지막으로 사용법 예시
4. 각 코드 블록에 파일 경로 주석 포함`}]},{id:"int-2-3",title:"체인 오브 쏘트와 단계적 사고",description:"AI에게 단계적으로 생각하도록 유도하여 복잡한 문제를 해결하는 기법을 배웁니다.",content:`체인 오브 쏘트(Chain of Thought, CoT)는 AI에게 "단계별로 생각해보세요"라고 요청하여 복잡한 문제의 해결 품질을 높이는 기법입니다.

**CoT가 효과적인 상황:**

1. **복잡한 비즈니스 로직**: 여러 조건이 중첩되는 로직
2. **아키텍처 결정**: 여러 선택지 중 최적 방안 도출
3. **버그 분석**: 에러의 근본 원인 추적
4. **리팩토링 계획**: 대규모 코드 변경의 단계별 계획

단순한 CRUD 코드에는 불필요하지만, 설계 결정이나 복잡한 알고리즘에는 CoT를 적용하면 훨씬 논리적이고 견고한 결과를 얻을 수 있습니다.

**Few-shot 예시와 결합하면 더욱 강력합니다.** 기대하는 사고 과정의 예시를 1-2개 보여주면 AI가 동일한 패턴으로 추론합니다.`,keyPoints:['"단계별로 분석해주세요"라는 지시가 CoT를 활성화한다',"복잡한 로직일수록 CoT의 품질 향상 효과가 크다","Few-shot 예시와 결합하면 일관된 추론 패턴을 유도할 수 있다","단순 코드 생성에는 CoT가 불필요하며 오히려 비효율적이다"],codeExamples:[{language:"markdown",title:"체인 오브 쏘트 프롬프트 예시",code:`## 요청
주문 할인 로직을 구현해주세요. 단계별로 분석해주세요.

## 할인 규칙
- VIP 회원: 기본 10% 할인
- 3만원 이상 구매: 5% 추가 할인
- 쿠폰 적용: 쿠폰 금액 차감 (할인 후 가격에서)
- 최대 할인율: 30% (쿠폰 제외)
- 최소 결제 금액: 1,000원

## 원하는 사고 과정
1. 먼저 할인 규칙의 우선순위와 적용 순서를 정리
2. 엣지 케이스 도출 (VIP + 3만원 이상 + 쿠폰 동시 적용 등)
3. 타입 정의
4. 함수 구현
5. 테스트 케이스 작성`},{language:"typescript",title:"Few-shot 예시를 포함한 프롬프트 결과",code:`// Step 1: 할인 규칙 우선순위 정의
// 1) VIP 할인 (기본)
// 2) 금액 기반 할인 (추가)
// 3) 최대 할인율 캡 적용
// 4) 쿠폰 차감 (할인율 캡과 별도)
// 5) 최소 결제 금액 보장

interface DiscountInput {
  originalPrice: number;
  isVIP: boolean;
  couponAmount: number;
}

interface DiscountResult {
  finalPrice: number;
  discountRate: number;
  discountAmount: number;
  couponApplied: number;
  breakdown: string[];
}

const MAX_DISCOUNT_RATE = 0.3;
const MIN_PAYMENT = 1000;
const VIP_DISCOUNT = 0.1;
const BULK_DISCOUNT = 0.05;
const BULK_THRESHOLD = 30000;

export function calculateDiscount(input: DiscountInput): DiscountResult {
  const { originalPrice, isVIP, couponAmount } = input;
  const breakdown: string[] = [];
  let discountRate = 0;

  // Step 2: VIP 할인 적용
  if (isVIP) {
    discountRate += VIP_DISCOUNT;
    breakdown.push(\`VIP 할인: \${VIP_DISCOUNT * 100}%\`);
  }

  // Step 3: 금액 기반 추가 할인
  if (originalPrice >= BULK_THRESHOLD) {
    discountRate += BULK_DISCOUNT;
    breakdown.push(\`\${BULK_THRESHOLD.toLocaleString()}원 이상 할인: \${BULK_DISCOUNT * 100}%\`);
  }

  // Step 4: 최대 할인율 캡
  discountRate = Math.min(discountRate, MAX_DISCOUNT_RATE);
  const discountAmount = Math.floor(originalPrice * discountRate);
  let finalPrice = originalPrice - discountAmount;

  // Step 5: 쿠폰 적용
  const couponApplied = Math.min(couponAmount, finalPrice - MIN_PAYMENT);
  finalPrice -= Math.max(couponApplied, 0);

  // Step 6: 최소 결제 금액 보장
  finalPrice = Math.max(finalPrice, MIN_PAYMENT);

  return { finalPrice, discountRate, discountAmount, couponApplied, breakdown };
}`}]},{id:"int-2-4",title:"복잡한 요구사항 분해",description:"대규모 기능 요구사항을 AI가 처리하기 좋은 단위로 분해하는 전략을 배웁니다.",content:`하나의 프롬프트에 너무 많은 요구사항을 넣으면 AI의 출력 품질이 떨어집니다. 복잡한 기능을 적절한 단위로 분해하여 순차적으로 요청하는 것이 핵심입니다.

**요구사항 분해의 원칙:**

1. **단일 책임 원칙 적용**: 각 프롬프트가 하나의 관심사만 다루도록 합니다
2. **의존성 순서 파악**: 먼저 구현해야 하는 것부터 요청합니다
3. **인터페이스 우선**: 타입/인터페이스를 먼저 정의하고, 구현을 나중에 요청합니다
4. **수직 슬라이스**: 한 기능의 UI → 로직 → API를 한 묶음으로 처리합니다

예를 들어 "게시판 기능을 만들어주세요"라는 큰 요청 대신, 타입 정의 → DB 스키마 → CRUD 훅 → 목록 페이지 → 상세 페이지 → 작성 폼 순서로 분해합니다.`,keyPoints:["하나의 프롬프트에 파일 3개 이상 생성을 요청하면 품질이 저하된다","타입/인터페이스를 먼저 합의한 후 구현을 요청하는 것이 효과적이다","의존 관계가 있는 코드는 반드시 순서대로 요청한다","각 단계의 결과를 검증한 후 다음 단계로 진행한다"],codeExamples:[{language:"markdown",title:"게시판 기능 분해 예시 (5단계)",code:`## Step 1: 타입 정의 (첫 번째 프롬프트)
"게시판 기능에 필요한 TypeScript 타입을 정의해주세요.
Post, PostInput, PostFilter 타입이 필요합니다."

## Step 2: DB 스키마 (두 번째 프롬프트)
"위 타입에 맞는 Supabase 테이블 생성 SQL을 작성해주세요.
RLS 정책도 포함해주세요."

## Step 3: 데이터 훅 (세 번째 프롬프트)
"Step 1의 타입을 사용하여 usePosts 커스텀 훅을 만들어주세요.
목록 조회, 상세 조회, 생성, 수정, 삭제를 포함합니다."

## Step 4: 목록 페이지 (네 번째 프롬프트)
"usePosts 훅을 사용하여 게시판 목록 페이지를 만들어주세요.
페이지네이션과 검색 기능을 포함합니다."

## Step 5: 작성/수정 폼 (다섯 번째 프롬프트)
"React Hook Form + Zod로 게시글 작성/수정 폼을 만들어주세요.
PostInput 타입을 사용합니다."`}]}]},{id:"int-3",slug:"ai-ide-advanced",title:"AI IDE 고급 활용",description:"Cursor Rules, Composer, 멀티파일 편집, Tab 자동완성 등 AI IDE의 고급 기능을 활용합니다.",level:"intermediate",order:3,contents:[{id:"int-3-1",title:".cursorrules 파일 작성",description:"Cursor IDE의 프로젝트별 규칙 파일을 작성하여 AI 동작을 커스터마이징합니다.",content:`.cursorrules 파일은 Cursor IDE가 코드를 생성할 때 따르는 프로젝트별 규칙을 정의합니다. 프로젝트 루트에 위치하며, 모든 AI 기능(Tab 완성, Cmd+K, Chat, Composer)에 적용됩니다.

**좋은 .cursorrules의 특징:**
- 구체적이고 실행 가능한 규칙
- 프로젝트의 실제 패턴을 반영
- 금지 사항을 명확하게 명시
- 300줄 이내로 핵심만 기술

.cursorrules는 CLAUDE.md와 비슷한 역할을 하지만, Cursor IDE에 특화된 형식입니다. 프로젝트의 기술 스택, 코딩 컨벤션, 자주 사용하는 패턴을 명시하면 AI가 프로젝트에 맞는 코드를 생성합니다.`,keyPoints:[".cursorrules는 프로젝트 루트에 위치하며 자동으로 적용된다","Tab 완성, Chat, Composer 등 모든 AI 기능에 영향을 준다","규칙이 너무 길면 오히려 역효과 — 핵심 규칙만 포함한다","팀원이 공유하도록 Git에 커밋하는 것을 권장한다"],codeExamples:[{language:"markdown",title:".cursorrules 파일 예시",code:`You are an expert React + TypeScript developer.

## Project Stack
- React 19, TypeScript, Vite 7
- Supabase for backend (Auth, DB, Storage)
- TailwindCSS 4 for styling
- React Router v7 for routing

## Code Style Rules
- Use functional components with hooks only
- Use 'interface' for object types, 'type' for unions
- Always declare explicit return types for functions
- Use async/await, never .then() chains
- Prefer named exports over default exports
- Use Korean for comments, English for variable names

## Component Patterns
- One component per file
- Props interface named: {ComponentName}Props
- Use React.memo() only when measured performance benefit
- Custom hooks go in src/hooks/

## Supabase Patterns
- Import client from src/lib/supabase.ts only
- Always handle errors with try-catch
- Use .single() only when expecting exactly one row
- Never expose service_role key in frontend

## Forbidden
- No CSS-in-JS (styled-components, emotion)
- No class components
- No var declarations
- No any type (use unknown if needed)
- No console.log in production code`}]},{id:"int-3-2",title:"Cursor Composer 활용",description:"Composer를 사용하여 여러 파일을 동시에 생성하고 수정하는 방법을 배웁니다.",content:`Cursor Composer는 여러 파일을 동시에 생성하거나 수정할 수 있는 강력한 기능입니다. 단일 파일 편집인 Cmd+K와 달리, Composer는 프로젝트 전체를 조망하며 작업할 수 있습니다.

**Composer가 적합한 작업:**
- 새로운 기능 추가 (컴포넌트 + 훅 + 타입 + 라우트)
- 리팩토링 (여러 파일에 걸친 변경)
- 패턴 일괄 적용 (에러 처리, 로깅 추가 등)
- 설정 파일 업데이트 (package.json + tsconfig 등)

**Composer 사용 팁:**
1. @file로 관련 파일을 명시적으로 참조합니다
2. 변경할 파일의 범위를 명확히 지정합니다
3. 변경 전 모든 diff를 검토합니다
4. 너무 많은 파일(10개 이상)을 한 번에 변경하지 않습니다`,keyPoints:["Composer는 여러 파일을 동시에 수정할 수 있어 일관성을 유지한다","@file 참조로 AI에게 정확한 파일 컨텍스트를 제공한다","변경사항을 적용하기 전에 반드시 diff를 검토한다","한 번에 5-7개 파일 이내로 제한하는 것이 안전하다"],codeExamples:[{language:"markdown",title:"Composer에 효과적인 프롬프트 예시",code:`## Composer 프롬프트: 새 기능 추가

@src/types/index.ts
@src/hooks/usePosts.ts
@src/pages/Board.tsx
@src/components/PostCard.tsx

게시판에 "좋아요" 기능을 추가해주세요.

변경 사항:
1. types/index.ts에 likes 관련 타입 추가
2. usePosts.ts에 toggleLike 함수 추가
3. PostCard.tsx에 좋아요 버튼 UI 추가
4. Board.tsx에서 좋아요 상태 관리

제약 조건:
- Supabase에 post_likes 테이블이 이미 있다고 가정
- 낙관적 업데이트(optimistic update) 적용
- 중복 좋아요 방지 로직 포함`}]},{id:"int-3-3",title:"Tab 자동완성 최적화",description:"Cursor의 Tab 자동완성 기능을 최대한 활용하여 코딩 속도를 높이는 방법을 배웁니다.",content:`Cursor의 Tab 자동완성(Copilot++)은 단순한 코드 완성을 넘어, 주변 코드의 패턴을 학습하여 다음에 작성할 코드를 예측합니다. 이 기능을 극대화하려면 AI가 패턴을 잘 인식할 수 있도록 코드를 작성해야 합니다.

**Tab 완성 품질을 높이는 전략:**

1. **일관된 패턴 유지**: 비슷한 구조의 코드를 반복하면 Tab 예측이 정확해집니다
2. **주석으로 의도 표현**: 함수 위에 주석을 먼저 쓰면 Tab이 구현을 예측합니다
3. **타입 먼저 작성**: interface/type을 정의하면 구현 코드의 Tab 완성이 정확해집니다
4. **네이밍으로 힌트 제공**: 함수명/변수명이 명확하면 Tab 예측이 향상됩니다

**Tab 완성이 잘 작동하는 패턴:**
- 반복적인 CRUD 함수 (하나를 작성하면 나머지를 예측)
- 유사한 구조의 컴포넌트
- 테스트 케이스 작성 (하나의 테스트 후 나머지를 예측)`,keyPoints:["일관된 코딩 패턴이 Tab 자동완성의 정확도를 높인다","주석을 먼저 작성하면 AI가 구현 의도를 파악하여 더 나은 완성을 제공한다","타입 정의 후 구현하면 타입에 맞는 코드가 자동완성된다","Tab을 수락하기 전에 제안된 코드를 반드시 검토한다"],codeExamples:[{language:"typescript",title:"Tab 완성을 유도하는 코딩 패턴",code:`// 1. 타입을 먼저 정의하면 Tab이 구현을 정확히 예측
interface UserService {
  getById(id: string): Promise<User>;
  getAll(): Promise<User[]>;
  create(input: UserInput): Promise<User>;
  update(id: string, input: Partial<UserInput>): Promise<User>;
  delete(id: string): Promise<void>;
}

// 2. 첫 번째 함수를 작성하면 나머지를 Tab이 예측
// 사용자 ID로 조회
async function getUserById(id: string): Promise<User> {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
}

// 모든 사용자 조회 ← 여기서 Tab을 누르면
// 위 패턴을 학습하여 비슷한 구조로 자동완성
async function getAllUsers(): Promise<User[]> {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data ?? [];
}`}]},{id:"int-3-4",title:"멀티파일 편집 워크플로우",description:"여러 파일에 걸친 변경을 효율적으로 수행하는 AI IDE 워크플로우를 배웁니다.",content:`실제 개발에서는 하나의 기능이 여러 파일에 걸쳐 있습니다. AI IDE를 활용한 멀티파일 편집 워크플로우를 체계화하면 생산성이 크게 향상됩니다.

**체계적인 멀티파일 편집 워크플로우:**

1단계 — **영향 범위 파악**: AI에게 변경이 필요한 파일 목록을 먼저 물어봅니다
2단계 — **의존성 순서 결정**: 타입 → 유틸 → 훅 → 컴포넌트 → 페이지 순으로 수정합니다
3단계 — **파일별 순차 수정**: 각 파일을 열고 Cmd+K 또는 Chat으로 수정합니다
4단계 — **타입 검증**: tsc --noEmit으로 타입 오류가 없는지 확인합니다
5단계 — **통합 테스트**: 전체 기능이 정상 동작하는지 브라우저에서 확인합니다

Cursor의 경우 Composer로 한 번에 처리할 수 있지만, Claude Code에서는 자동으로 멀티파일 편집을 수행합니다. 핵심은 변경 순서와 범위를 명확히 지시하는 것입니다.`,keyPoints:["타입 정의 파일부터 수정하고, 의존하는 파일을 순차적으로 수정한다","AI에게 변경이 필요한 파일 목록을 먼저 확인 요청하면 누락을 방지한다","각 파일 수정 후 tsc 타입 체크로 오류를 즉시 발견한다","너무 많은 파일을 한 번에 변경하면 롤백이 어려워진다"],codeExamples:[{language:"bash",title:"Claude Code에서 멀티파일 편집 프롬프트",code:`# Claude Code에서의 멀티파일 편집 프롬프트 예시

# Step 1: 영향 범위 파악
> "게시판에 카테고리 필터를 추가하려면 어떤 파일을 수정해야 하나요?"

# AI 응답 예시:
# 1. src/types/index.ts - PostCategory 타입 추가
# 2. src/hooks/usePosts.ts - 카테고리 필터 파라미터 추가
# 3. src/components/CategoryFilter.tsx - 새 컴포넌트 생성
# 4. src/pages/Board.tsx - 필터 컴포넌트 통합

# Step 2: 순차 구현
> "먼저 types/index.ts에 PostCategory 타입을 추가해주세요"
> "이제 usePosts 훅에 카테고리 필터 기능을 추가해주세요"
> "CategoryFilter 컴포넌트를 만들어주세요"
> "Board.tsx에 CategoryFilter를 통합해주세요"

# Step 3: 검증
> "tsc --noEmit으로 타입 오류를 확인해주세요"`}]}]},{id:"int-4",slug:"fullstack-workflow",title:"풀스택 개발 워크플로우",description:"React + Supabase 조합으로 풀스택 앱을 AI와 함께 구축하는 워크플로우를 학습합니다.",level:"intermediate",order:4,contents:[{id:"int-4-1",title:"DB 스키마 설계와 AI",description:"AI와 함께 Supabase 데이터베이스 스키마를 설계하고 생성하는 방법을 배웁니다.",content:`풀스택 개발의 첫 단계는 데이터베이스 스키마 설계입니다. AI에게 비즈니스 요구사항을 전달하면 정규화된 스키마를 설계하고, Supabase SQL을 생성할 수 있습니다.

**AI와 DB 스키마 설계 워크플로우:**

1. **요구사항 전달**: 어떤 데이터를 저장하고 어떤 관계가 있는지 설명합니다
2. **ERD 검토**: AI가 제안한 테이블 구조를 검토하고 피드백합니다
3. **SQL 생성**: CREATE TABLE, 인덱스, RLS 정책을 생성합니다
4. **마이그레이션**: Supabase 대시보드 또는 CLI에서 SQL을 실행합니다

테이블 프리픽스를 사용하면 여러 프로젝트가 하나의 Supabase 인스턴스를 공유할 때 충돌을 방지할 수 있습니다. 예를 들어 게시판 기능의 테이블은 board_posts, board_comments와 같이 프리픽스를 붙입니다.`,keyPoints:["AI에게 비즈니스 요구사항을 자연어로 전달하면 스키마를 설계해준다","RLS(Row Level Security) 정책은 스키마 생성 시 함께 설정한다","테이블 프리픽스로 멀티 프로젝트 환경에서 충돌을 방지한다","created_at, updated_at 컬럼은 모든 테이블에 기본 포함한다"],codeExamples:[{language:"typescript",title:"AI에게 스키마 설계 요청 및 결과",code:`-- AI에게 전달한 요구사항:
-- "온라인 서점의 DB를 설계해주세요.
--  도서, 카테고리, 주문, 리뷰가 필요합니다.
--  프리픽스는 bs_ 를 사용해주세요."

-- AI가 생성한 SQL:
CREATE TABLE bs_categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE bs_books (
  id SERIAL PRIMARY KEY,
  category_id INT REFERENCES bs_categories(id),
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  isbn TEXT UNIQUE,
  price INT NOT NULL DEFAULT 0,
  description TEXT,
  cover_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE bs_reviews (
  id SERIAL PRIMARY KEY,
  book_id INT REFERENCES bs_books(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id),
  rating INT CHECK (rating >= 1 AND rating <= 5),
  content TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- RLS 정책
ALTER TABLE bs_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "누구나 리뷰 조회 가능"
  ON bs_reviews FOR SELECT USING (true);

CREATE POLICY "인증된 사용자만 리뷰 작성"
  ON bs_reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "본인 리뷰만 수정/삭제"
  ON bs_reviews FOR UPDATE
  USING (auth.uid() = user_id);`}]},{id:"int-4-2",title:"Supabase Auth 구현",description:"AI와 함께 Supabase 인증 시스템을 구현하는 방법을 배웁니다.",content:`Supabase Auth는 이메일/비밀번호, OAuth(Google, GitHub 등), 매직 링크 등 다양한 인증 방식을 제공합니다. AI에게 인증 요구사항을 전달하면 AuthContext, 로그인/회원가입 페이지, 보호된 라우트를 생성할 수 있습니다.

**AI에게 Auth 구현을 요청할 때 명시해야 할 사항:**

1. **인증 방식**: 이메일, OAuth, 매직 링크 중 어떤 것을 사용할지
2. **역할 체계**: 사용자 역할(user, admin, superadmin 등)
3. **프로필 데이터**: 추가로 저장할 사용자 정보
4. **접근 제어**: 어떤 페이지가 로그인을 요구하는지
5. **세션 관리**: 자동 로그아웃, 토큰 갱신 등

특히 AuthContext는 앱 전체에서 사용되므로, 처음부터 견고하게 설계하는 것이 중요합니다.`,keyPoints:["AuthContext는 앱 전체의 인증 상태를 관리하는 핵심 컴포넌트이다","onAuthStateChange로 세션 변화를 실시간 감지한다","보호된 라우트는 ProtectedRoute 컴포넌트로 구현한다","user_profiles 테이블에 추가 사용자 정보를 저장한다"],codeExamples:[{language:"typescript",title:"AI로 생성한 AuthContext 핵심 구조",code:`// src/contexts/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface AuthState {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  isAdmin: boolean;
}

interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    profile: null,
    loading: true,
    isAdmin: false,
  });

  useEffect(() => {
    // 현재 세션 확인
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        loadProfile(session.user);
      } else {
        setState(prev => ({ ...prev, loading: false }));
      }
    });

    // 인증 상태 변화 구독
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          await loadProfile(session.user);
        } else {
          setState({ user: null, profile: null, loading: false, isAdmin: false });
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  async function loadProfile(user: User) {
    const { data } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    const role = data?.role === 'user' ? 'member' : data?.role;
    const isAdmin = ['admin', 'superadmin'].includes(role ?? '');

    setState({
      user,
      profile: data ? { ...data, role } : null,
      loading: false,
      isAdmin,
    });
  }

  // signIn, signUp, signOut 구현...
  return (
    <AuthContext.Provider value={{ ...state, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};`}]},{id:"int-4-3",title:"CRUD 개발과 커스텀 훅",description:"AI와 함께 재사용 가능한 CRUD 커스텀 훅을 만드는 패턴을 학습합니다.",content:`CRUD(Create, Read, Update, Delete)는 대부분의 웹 애플리케이션의 핵심입니다. AI와 함께 재사용 가능한 커스텀 훅으로 CRUD를 구현하면 일관된 패턴으로 빠르게 개발할 수 있습니다.

**CRUD 커스텀 훅 설계 원칙:**

1. **단일 테이블 = 단일 훅**: useProducts, useOrders 등 테이블별 훅
2. **상태 관리 통합**: 데이터, 로딩, 에러 상태를 훅 내부에서 관리
3. **낙관적 업데이트**: UI를 먼저 갱신하고 서버 응답을 기다림
4. **에러 처리 표준화**: 모든 CRUD 작업에 일관된 에러 처리 적용
5. **페이지네이션**: 목록 조회 시 페이지네이션을 기본 포함

AI에게 첫 번째 훅(예: useProducts)을 만들게 한 후, 동일한 패턴으로 나머지 훅을 생성하면 프로젝트 전체의 일관성을 유지할 수 있습니다.`,keyPoints:["CRUD 훅은 데이터, 로딩, 에러 상태를 함께 반환한다","첫 번째 훅의 패턴을 기준으로 나머지를 일관되게 생성한다","낙관적 업데이트로 사용자 경험을 개선한다","AI에게 기존 훅의 패턴을 보여주면 동일한 스타일로 생성한다"],codeExamples:[{language:"typescript",title:"재사용 가능한 CRUD 훅 패턴",code:`// src/hooks/useProducts.ts
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  is_active: boolean;
  created_at: string;
}

interface UseProductsOptions {
  category?: string;
  page?: number;
  pageSize?: number;
}

export function useProducts(options: UseProductsOptions = {}) {
  const { category, page = 1, pageSize = 10 } = options;
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let query = supabase
        .from('products')
        .select('*', { count: 'exact' })
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .range((page - 1) * pageSize, page * pageSize - 1);

      if (category) query = query.eq('category', category);

      const { data, count, error: err } = await query;
      if (err) throw err;
      setProducts(data ?? []);
      setTotal(count ?? 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : '데이터 로드 실패');
    } finally {
      setLoading(false);
    }
  }, [category, page, pageSize]);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  const createProduct = async (input: Omit<Product, 'id' | 'created_at'>) => {
    const { data, error: err } = await supabase
      .from('products').insert(input).select().single();
    if (err) throw err;
    setProducts(prev => [data, ...prev]);
    return data;
  };

  const updateProduct = async (id: number, input: Partial<Product>) => {
    const { data, error: err } = await supabase
      .from('products').update(input).eq('id', id).select().single();
    if (err) throw err;
    setProducts(prev => prev.map(p => p.id === id ? data : p));
    return data;
  };

  const deleteProduct = async (id: number) => {
    const { error: err } = await supabase
      .from('products').delete().eq('id', id);
    if (err) throw err;
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return {
    products, total, loading, error,
    totalPages: Math.ceil(total / pageSize),
    refetch: fetchProducts,
    createProduct, updateProduct, deleteProduct,
  };
}`}]},{id:"int-4-4",title:"RLS 정책 설계",description:"Supabase Row Level Security 정책을 AI와 함께 설계하여 데이터를 안전하게 보호합니다.",content:`RLS(Row Level Security)는 Supabase의 핵심 보안 기능으로, 데이터베이스 레벨에서 행별 접근 권한을 제어합니다. AI에게 접근 규칙을 자연어로 설명하면 적절한 RLS 정책을 생성할 수 있습니다.

**RLS 정책의 4가지 유형:**
- **SELECT** (읽기): 누가 어떤 데이터를 조회할 수 있는지
- **INSERT** (생성): 누가 데이터를 생성할 수 있는지
- **UPDATE** (수정): 누가 어떤 데이터를 수정할 수 있는지
- **DELETE** (삭제): 누가 어떤 데이터를 삭제할 수 있는지

**일반적인 RLS 패턴:**
1. 공개 읽기 + 인증된 쓰기 (게시판, 블로그)
2. 소유자만 CRUD (개인 노트, 프로필)
3. 역할 기반 접근 (관리자만 삭제 가능)
4. 조건부 공개 (is_public이 true인 것만 공개)`,keyPoints:["RLS는 프론트엔드 검증보다 안전한 서버 레벨 접근 제어이다","auth.uid()로 현재 사용자를 식별한다","정책이 없으면 해당 테이블에 아무도 접근할 수 없다 (기본 거부)","superadmin은 별도 정책으로 모든 접근을 허용한다"],codeExamples:[{language:"typescript",title:"AI에게 RLS 요구사항 전달 예시와 결과",code:`-- AI에게 전달한 요구사항:
-- "게시판 RLS를 만들어주세요.
--  - 게시글: 누구나 읽기, 로그인 사용자 작성, 본인만 수정/삭제
--  - 댓글: 누구나 읽기, 로그인 사용자 작성, 본인만 삭제
--  - 관리자(superadmin)는 모든 작업 가능"

-- AI 생성 결과:
ALTER TABLE board_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE board_comments ENABLE ROW LEVEL SECURITY;

-- 게시글 정책
CREATE POLICY "게시글 공개 읽기"
  ON board_posts FOR SELECT
  USING (true);

CREATE POLICY "인증 사용자 게시글 작성"
  ON board_posts FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "본인 게시글 수정"
  ON board_posts FOR UPDATE
  USING (auth.uid() = author_id);

CREATE POLICY "본인 게시글 삭제"
  ON board_posts FOR DELETE
  USING (auth.uid() = author_id);

-- 관리자 전체 접근
CREATE POLICY "관리자 게시글 전체 관리"
  ON board_posts FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid()
      AND role = 'superadmin'
    )
  );

-- 댓글 정책 (동일 패턴)
CREATE POLICY "댓글 공개 읽기"
  ON board_comments FOR SELECT USING (true);

CREATE POLICY "인증 사용자 댓글 작성"
  ON board_comments FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "본인 댓글 삭제"
  ON board_comments FOR DELETE
  USING (auth.uid() = author_id);`}]}]},{id:"int-5",slug:"skills-commands",title:"Skills & Commands 활용",description:"Claude Code와 Cursor의 커스텀 명령어 및 프로젝트별 설정을 활용합니다.",level:"intermediate",order:5,contents:[{id:"int-5-1",title:"Claude Code 슬래시 명령어",description:"Claude Code의 내장 명령어와 커스텀 슬래시 명령어를 활용하는 방법을 배웁니다.",content:"Claude Code는 다양한 슬래시 명령어를 제공하여 반복적인 작업을 효율화합니다. 내장 명령어 외에도 프로젝트별 커스텀 명령어를 만들어 팀 워크플로우를 표준화할 수 있습니다.\n\n**주요 내장 명령어:**\n- `/compact` — 대화 요약으로 컨텍스트 절약\n- `/clear` — 대화 초기화\n- `/init` — CLAUDE.md 파일 생성\n- `/review` — 코드 리뷰 요청\n- `/cost` — 현재 세션 비용 확인\n\n**커스텀 명령어 생성:**\n`.claude/commands/` 디렉토리에 마크다운 파일을 생성하면 `/project:` 접두사로 호출할 수 있습니다. 예를 들어 `.claude/commands/deploy.md`를 만들면 `/project:deploy`로 사용합니다.\n\n커스텀 명령어는 반복적인 작업(배포, 테스트, 린트 수정 등)을 자동화하는 데 매우 유용합니다.",keyPoints:["/compact로 긴 대화의 토큰을 절약할 수 있다",".claude/commands/ 디렉토리에 커스텀 명령어를 정의한다","커스텀 명령어는 /project: 접두사로 호출한다","팀 공통 명령어는 Git에 커밋하여 공유한다"],codeExamples:[{language:"markdown",title:".claude/commands/deploy.md (커스텀 배포 명령어)",code:`# Deploy to GitHub Pages

다음 단계로 프로젝트를 배포해주세요:

1. \`npm run build\`로 프로덕션 빌드를 실행합니다
2. 빌드 오류가 있으면 수정합니다
3. dist/ 디렉토리에 CNAME 파일이 있는지 확인합니다
4. 없으면 적절한 도메인으로 CNAME을 생성합니다
5. \`npx gh-pages -d dist\`로 배포합니다
6. 배포 결과를 확인하고 URL을 알려줍니다

## 주의사항
- .env 파일이 dist에 포함되지 않도록 확인
- CNAME의 도메인은 {프로젝트명}.dreamitbiz.com 형식`},{language:"markdown",title:".claude/commands/new-page.md (새 페이지 생성)",code:`# Create New Page

$ARGUMENTS 이름으로 새 페이지를 생성해주세요.

## 생성할 파일:
1. \`src/pages/{PageName}.tsx\` — 페이지 컴포넌트
2. 필요시 \`src/hooks/use{PageName}.ts\` — 데이터 훅

## 규칙:
- 기존 페이지 패턴을 따라주세요 (src/pages/ 참고)
- TailwindCSS로 스타일링
- 반응형 디자인 적용 (모바일 우선)
- 적절한 로딩/에러 상태 처리
- App.tsx의 라우트에 자동 추가`}]},{id:"int-5-2",title:"Cursor @commands 활용",description:"Cursor IDE의 @ 명령어를 활용하여 AI에게 정확한 컨텍스트를 제공합니다.",content:"Cursor의 @ 명령어는 AI에게 특정 컨텍스트를 제공하는 강력한 메커니즘입니다. 파일, 심볼, 문서 등을 직접 참조하여 AI가 정확한 정보를 기반으로 응답하도록 합니다.\n\n**주요 @ 명령어:**\n\n- `@file` — 특정 파일의 내용을 컨텍스트로 추가\n- `@folder` — 폴더 구조를 컨텍스트로 추가\n- `@symbol` — 함수/클래스/변수를 직접 참조\n- `@codebase` — 전체 코드베이스에서 관련 코드 검색\n- `@docs` — 외부 문서를 참조 (React 문서, Supabase 문서 등)\n- `@web` — 웹 검색 결과를 컨텍스트에 포함\n- `@git` — Git 히스토리를 참조\n\n@ 명령어를 효과적으로 조합하면 AI가 프로젝트의 정확한 맥락을 이해하고, 기존 코드와 일관된 결과물을 생성합니다.",keyPoints:["@file로 관련 파일을 명시하면 AI가 기존 패턴을 파악한다","@codebase는 전체 코드에서 관련 부분을 자동으로 찾아준다","@docs로 외부 라이브러리 문서를 참조할 수 있다","여러 @ 명령어를 조합하면 매우 정확한 컨텍스트를 전달할 수 있다"],codeExamples:[{language:"markdown",title:"Cursor @ 명령어 활용 예시",code:`## 예시 1: 기존 패턴에 맞게 새 훅 생성
@file src/hooks/useProducts.ts
@file src/types/index.ts
"useProducts와 동일한 패턴으로 useOrders 훅을 만들어주세요"

## 예시 2: 외부 문서 참조
@docs Supabase Storage
"Supabase Storage로 이미지 업로드 기능을 구현해주세요.
최신 API를 사용해주세요."

## 예시 3: Git 변경사항 기반 작업
@git diff HEAD~3
"최근 3개 커밋의 변경사항을 리뷰하고,
개선할 점을 알려주세요"

## 예시 4: 코드베이스 전체 검색
@codebase "supabase.from"
"프로젝트에서 Supabase 쿼리를 사용하는 모든 곳을 찾아서
에러 처리가 누락된 부분을 알려주세요"`}]},{id:"int-5-3",title:"Custom Instructions 설정",description:"AI 코딩 도구의 시스템 레벨 설정으로 일관된 동작을 보장합니다.",content:`Custom Instructions는 AI 코딩 도구에게 영구적으로 적용되는 지시사항입니다. 매번 프롬프트에 포함하지 않아도 항상 적용되므로, 개인적인 코딩 선호도를 설정하는 데 적합합니다.

**설정 위치별 적용 범위:**

| 설정 위치 | 적용 범위 | 예시 |
|-----------|----------|------|
| ~/.claude/CLAUDE.md | 모든 프로젝트 | 언어 선호도, 코딩 스타일 |
| 프로젝트/CLAUDE.md | 해당 프로젝트 | 기술 스택, 아키텍처 규칙 |
| .cursorrules | Cursor IDE 전체 | 코드 생성 스타일 |
| Cursor Settings > Rules | 전역 설정 | 기본 응답 언어 |

**우선순위**: 프로젝트 설정이 글로벌 설정보다 우선합니다. 충돌이 있으면 더 구체적인 설정이 적용됩니다.`,keyPoints:["글로벌 설정은 모든 프로젝트에 적용되는 공통 선호도를 설정한다","프로젝트 설정은 해당 프로젝트만의 고유한 규칙을 설정한다","프로젝트 설정이 글로벌 설정보다 우선한다","설정 파일은 Git에 커밋하여 팀원과 공유할 수 있다"],codeExamples:[{language:"markdown",title:"계층적 설정 구조 예시",code:`# ~/.claude/CLAUDE.md (글로벌 — 모든 프로젝트)
## 응답 언어
- 코드 주석과 설명은 한국어로 작성
- 변수명과 함수명은 영어로 작성

## 코딩 스타일
- TypeScript strict mode 사용
- async/await 우선
- 함수형 프로그래밍 선호

---

# 프로젝트/CLAUDE.md (프로젝트 — 이 프로젝트만)
## 기술 스택
- React 19 + Vite 7 + TailwindCSS 4
- Supabase (DB prefix: vibe_)
- React Router v7

## 프로젝트 규칙
- 컴포넌트 파일 하나에 하나의 export
- 페이지 컴포넌트는 src/pages/에 위치
- 커스텀 훅은 src/hooks/에 위치
- 유틸리티 함수는 순수 함수로 작성

## 금지 사항
- lodash 사용 금지 (네이티브 메서드 사용)
- moment.js 사용 금지 (date-fns 사용)
- CSS 모듈 사용 금지 (TailwindCSS만)`}]}]},{id:"int-6",slug:"code-review",title:"AI와 코드 리뷰",description:"AI를 활용하여 코드 품질 개선, 리팩토링, 보안 취약점 검토, 성능 최적화를 수행합니다.",level:"intermediate",order:6,contents:[{id:"int-6-1",title:"AI 코드 리뷰 요청 기법",description:"AI에게 효과적으로 코드 리뷰를 요청하는 방법과 관점 지정 기법을 배웁니다.",content:`AI 코드 리뷰는 사람 리뷰어를 대체하는 것이 아니라, 리뷰 품질을 높이는 보조 도구입니다. AI에게 구체적인 리뷰 관점을 지정하면 더 유용한 피드백을 받을 수 있습니다.

**AI 코드 리뷰의 5가지 관점:**

1. **정확성**: 로직 오류, 엣지 케이스, 타입 안전성
2. **가독성**: 네이밍, 함수 길이, 주석, 구조
3. **성능**: 불필요한 연산, 메모리 누수, 리렌더링
4. **보안**: 입력 검증, XSS, 인증 우회 가능성
5. **유지보수성**: 결합도, 중복 코드, 확장 가능성

리뷰를 요청할 때 어떤 관점에 집중할지 명시하면, AI가 해당 영역에 대해 더 깊이 있는 피드백을 제공합니다. "전체적으로 리뷰해주세요"보다 "보안 관점에서 리뷰해주세요"가 훨씬 유용합니다.`,keyPoints:["리뷰 관점을 명시하면 더 깊이 있는 피드백을 받는다","Claude Code에서 /review 명령으로 코드 리뷰를 요청할 수 있다","AI 리뷰는 사람 리뷰 전 사전 점검으로 활용하면 효과적이다","리뷰 결과를 무조건 수용하지 말고 비판적으로 판단한다"],codeExamples:[{language:"markdown",title:"관점별 코드 리뷰 프롬프트",code:`## 보안 관점 리뷰 요청
아래 인증 관련 코드를 보안 전문가 관점에서 리뷰해주세요.
특히 다음을 확인해주세요:
- 입력값 검증이 충분한가?
- SQL 인젝션 가능성이 있는가?
- XSS 취약점이 있는가?
- 인증 토큰 처리가 안전한가?
- 에러 메시지가 민감한 정보를 노출하지 않는가?

## 성능 관점 리뷰 요청
아래 React 컴포넌트를 성능 관점에서 리뷰해주세요:
- 불필요한 리렌더링이 있는가?
- useMemo/useCallback이 적절히 사용되었는가?
- 무거운 연산이 렌더링 중에 실행되는가?
- 이미지/리소스 최적화가 필요한가?

## 유지보수 관점 리뷰 요청
이 모듈의 코드를 유지보수 관점에서 리뷰해주세요:
- 함수가 너무 길지 않은가? (30줄 이상이면 분리 검토)
- 중복 코드가 있는가?
- 네이밍이 의도를 명확히 전달하는가?
- 하드코딩된 값이 있는가? (상수로 추출 필요)`}]},{id:"int-6-2",title:"리팩토링 요청 패턴",description:"AI에게 코드 리팩토링을 효과적으로 요청하는 패턴과 전략을 배웁니다.",content:`리팩토링은 기능은 동일하게 유지하면서 코드의 구조를 개선하는 작업입니다. AI에게 리팩토링을 요청할 때는 "무엇을 개선하고 싶은지"를 명확히 전달해야 합니다.

**AI 리팩토링 요청의 유형:**

1. **함수 추출**: 긴 함수를 작은 단위로 분리
2. **중복 제거**: 반복되는 코드를 공통 유틸로 추출
3. **패턴 적용**: 커스텀 훅, HOC, 컴포지션 패턴 적용
4. **타입 안전성**: any 제거, 유니온 타입으로 엣지 케이스 처리
5. **네이밍 개선**: 의미 있는 이름으로 변수/함수명 변경

**리팩토링 요청 시 주의사항:**
- 한 번에 하나의 리팩토링만 요청합니다
- 리팩토링 전후의 동작이 동일한지 확인합니다
- 테스트가 있다면 리팩토링 후 테스트를 실행합니다`,keyPoints:["리팩토링은 한 번에 하나의 변경만 수행하는 것이 안전하다",'"왜 리팩토링해야 하는지" 이유를 설명하면 더 좋은 결과를 얻는다',"AI가 제안한 리팩토링이 기존 동작을 변경하지 않는지 반드시 확인한다","Git 커밋 후 리팩토링하여 언제든 되돌릴 수 있게 한다"],codeExamples:[{language:"typescript",title:"리팩토링 전후 비교 예시",code:`// ── 리팩토링 전: 하나의 거대한 함수 ──
async function handleSubmit(formData: FormData) {
  // 유효성 검증 (15줄)
  if (!formData.title) { setError('제목을 입력해주세요'); return; }
  if (formData.title.length > 100) { setError('제목은 100자 이내'); return; }
  if (!formData.content) { setError('내용을 입력해주세요'); return; }
  // ... 더 많은 검증

  // API 호출 (10줄)
  const { data, error } = await supabase.from('posts').insert({
    title: formData.title,
    content: formData.content,
    author_id: user.id,
  }).select().single();
  if (error) { setError(error.message); return; }

  // 후처리 (10줄)
  toast.success('게시글이 등록되었습니다');
  navigate(\`/posts/\${data.id}\`);
}

// ── 리팩토링 후: 관심사별로 분리 ──

// AI에게 요청: "이 handleSubmit 함수를
// 검증/API호출/후처리로 분리해주세요"

function validatePostForm(data: FormData): string | null {
  if (!data.title) return '제목을 입력해주세요';
  if (data.title.length > 100) return '제목은 100자 이내';
  if (!data.content) return '내용을 입력해주세요';
  return null;
}

async function createPost(input: PostInput): Promise<Post> {
  const { data, error } = await supabase
    .from('posts').insert(input).select().single();
  if (error) throw new Error(error.message);
  return data;
}

async function handleSubmit(formData: FormData) {
  const validationError = validatePostForm(formData);
  if (validationError) { setError(validationError); return; }

  try {
    const post = await createPost({
      title: formData.title,
      content: formData.content,
      author_id: user.id,
    });
    toast.success('게시글이 등록되었습니다');
    navigate(\`/posts/\${post.id}\`);
  } catch (err) {
    setError(err instanceof Error ? err.message : '등록 실패');
  }
}`}]},{id:"int-6-3",title:"보안 취약점 검토",description:"AI를 활용하여 웹 애플리케이션의 보안 취약점을 탐지하고 수정합니다.",content:`웹 애플리케이션의 보안은 개발 초기부터 고려해야 합니다. AI에게 코드의 보안 취약점을 검토 요청하면, 놓치기 쉬운 잠재적 위협을 발견할 수 있습니다.

**프론트엔드에서 흔한 보안 취약점:**

1. **XSS (Cross-Site Scripting)**: dangerouslySetInnerHTML, innerHTML 사용
2. **민감 정보 노출**: API 키, 토큰이 클라이언트 코드에 하드코딩
3. **불충분한 입력 검증**: 사용자 입력을 검증 없이 사용
4. **안전하지 않은 URL 처리**: 외부 URL을 검증 없이 리다이렉트
5. **CSRF**: 폼 제출 시 CSRF 토큰 미사용

**Supabase 관련 보안:**
- service_role 키는 절대 프론트엔드에 노출하지 않음
- RLS 정책이 모든 테이블에 활성화되어 있는지 확인
- .env 파일이 Git에 커밋되지 않도록 .gitignore 설정`,keyPoints:["dangerouslySetInnerHTML 사용 시 DOMPurify로 반드시 sanitize한다","API 키와 시크릿은 환경 변수로 관리하고 .env를 gitignore한다","Supabase anon 키만 프론트엔드에서 사용 가능하다","AI에게 OWASP Top 10 관점의 리뷰를 요청하면 체계적인 검토가 가능하다"],codeExamples:[{language:"typescript",title:"보안 취약점 수정 예시",code:`// ── 취약한 코드 ──

// 1. XSS 취약점: 사용자 입력을 직접 렌더링
function Comment({ content }: { content: string }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

// 2. 민감 정보 노출: API 키 하드코딩
const SUPABASE_KEY = 'eyJhbGciOi...서비스롤키...';

// 3. 불충분한 입력 검증
const searchQuery = new URLSearchParams(location.search).get('q');
const { data } = await supabase
  .from('posts')
  .select('*')
  .textSearch('title', searchQuery!); // null 체크 없음


// ── 수정된 코드 ──

// 1. XSS 방지: DOMPurify로 sanitize
import DOMPurify from 'dompurify';

function Comment({ content }: { content: string }) {
  const sanitized = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br'],
    ALLOWED_ATTR: [],
  });
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
}

// 2. 환경 변수 사용
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,   // anon 키만 사용
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// 3. 입력 검증 추가
const searchQuery = new URLSearchParams(location.search).get('q');
if (searchQuery && searchQuery.trim().length > 0) {
  const sanitizedQuery = searchQuery.trim().slice(0, 100); // 길이 제한
  const { data } = await supabase
    .from('posts')
    .select('*')
    .textSearch('title', sanitizedQuery);
}`}]},{id:"int-6-4",title:"성능 최적화 제안 받기",description:"AI에게 React 애플리케이션의 성능 최적화 방안을 제안받는 방법을 배웁니다.",content:`React 애플리케이션의 성능 문제는 주로 불필요한 리렌더링, 무거운 연산, 큰 번들 사이즈에서 발생합니다. AI에게 성능 관점의 리뷰를 요청하면 구체적인 최적화 방안을 제안받을 수 있습니다.

**AI에게 성능 최적화를 요청하는 방법:**

1. **증상 설명**: "이 페이지가 느려요" → 어떤 상호작용이 느린지 구체적으로
2. **측정 데이터 제공**: React DevTools Profiler 결과, Lighthouse 점수
3. **컴포넌트 트리 공유**: 어떤 컴포넌트가 리렌더링되는지
4. **최적화 목표 설정**: 초기 로딩 시간, 인터랙션 응답 시간 등

**일반적인 React 성능 최적화 패턴:**
- React.memo()로 불필요한 리렌더링 방지
- useMemo/useCallback으로 비용이 큰 연산 캐싱
- lazy()와 Suspense로 코드 분할
- 가상 스크롤(virtualization)로 대량 리스트 처리`,keyPoints:["최적화는 측정 후에 진행 — 추측 기반 최적화는 효과가 제한적이다","React.memo는 props가 자주 변하지 않는 컴포넌트에 효과적이다","useMemo/useCallback을 모든 곳에 쓰면 오히려 메모리 낭비가 된다","AI에게 Lighthouse 점수 개선 방안을 물으면 체계적인 가이드를 받을 수 있다"],codeExamples:[{language:"typescript",title:"React 성능 최적화 예시",code:`// AI에게 요청: "이 컴포넌트의 리렌더링을 최적화해주세요"

// ── 최적화 전 ──
function ProductList({ products, onSelect }: Props) {
  // 매 렌더링마다 정렬 연산 실행
  const sorted = products.sort((a, b) => b.price - a.price);

  // 매 렌더링마다 새로운 함수 생성
  const handleClick = (id: number) => {
    onSelect(id);
  };

  return (
    <div>
      {sorted.map(p => (
        <ProductCard
          key={p.id}
          product={p}
          onClick={() => handleClick(p.id)}
        />
      ))}
    </div>
  );
}

// ── 최적화 후 ──
import { memo, useMemo, useCallback } from 'react';

// 자식 컴포넌트를 memo로 감싸기
const MemoizedProductCard = memo(ProductCard);

function ProductList({ products, onSelect }: Props) {
  // 정렬 결과를 메모이제이션
  const sorted = useMemo(
    () => [...products].sort((a, b) => b.price - a.price),
    [products]
  );

  // 콜백 함수 메모이제이션
  const handleClick = useCallback(
    (id: number) => onSelect(id),
    [onSelect]
  );

  return (
    <div>
      {sorted.map(p => (
        <MemoizedProductCard
          key={p.id}
          product={p}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

// 코드 분할 (lazy loading)
import { lazy, Suspense } from 'react';

const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

function App() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <AdminDashboard />
    </Suspense>
  );
}`}]}]},{id:"int-7",slug:"debugging",title:"AI 디버깅 마스터",description:"에러 메시지 분석, 재현 단계 설명, 로그 기반 디버깅 등 AI와 함께 버그를 해결합니다.",level:"intermediate",order:7,contents:[{id:"int-7-1",title:"에러 메시지 분석",description:"에러 메시지를 AI에게 효과적으로 전달하여 빠르게 원인을 파악하는 방법을 배웁니다.",content:`에러가 발생했을 때 AI에게 효과적으로 도움을 요청하려면, 에러의 맥락을 충분히 전달해야 합니다. 단순히 에러 메시지만 보내는 것보다 주변 상황을 함께 전달하면 훨씬 정확한 해결책을 얻을 수 있습니다.

**에러 보고의 4요소:**

1. **에러 메시지 전문**: 일부만 발췌하지 않고 전체를 전달합니다
2. **재현 단계**: 어떤 동작을 했을 때 에러가 발생하는지
3. **관련 코드**: 에러가 발생하는 파일과 함수
4. **환경 정보**: Node/브라우저 버전, OS, 최근 변경사항

**흔한 에러 유형별 접근법:**
- **타입 에러**: tsconfig.json과 해당 타입 정의를 함께 공유
- **런타임 에러**: 콘솔 전체 로그와 스택 트레이스를 공유
- **빌드 에러**: 빌드 명령어 전체 출력과 설정 파일을 공유
- **네트워크 에러**: 요청/응답 정보와 API 엔드포인트를 공유`,keyPoints:["에러 메시지를 일부만 발췌하면 AI가 잘못된 원인을 추측할 수 있다","재현 단계를 포함하면 AI가 에러의 맥락을 정확히 파악한다","최근 변경사항을 알려주면 원인 범위를 좁힐 수 있다","스택 트레이스의 첫 번째 줄이 가장 중요한 단서이다"],codeExamples:[{language:"markdown",title:"효과적인 에러 보고 프롬프트",code:`## 에러 상황
회원가입 후 프로필 페이지로 이동하면 흰 화면이 뜹니다.

## 에러 메시지 (브라우저 콘솔)
\`\`\`
Uncaught TypeError: Cannot read properties of null
  (reading 'display_name')
    at UserProfile (MyPage.tsx:24:18)
    at renderWithHooks (react-dom.development.js:14985)
    at mountIndeterminateComponent (react-dom.development.js:17811)
\`\`\`

## 재현 단계
1. /register 페이지에서 이메일로 회원가입
2. 이메일 인증 링크 클릭
3. 자동으로 /mypage로 리다이렉트
4. 흰 화면 + 위 에러 발생

## 관련 코드
MyPage.tsx 24번째 줄:
\`const { display_name } = useAuth().profile;\`

## 의심 사항
회원가입 직후에는 user_profiles 테이블에
레코드가 아직 생성되지 않은 것 같습니다.
(트리거 지연?)`}]},{id:"int-7-2",title:"로그 기반 디버깅",description:"전략적인 로깅과 AI를 결합하여 복잡한 버그를 추적하는 방법을 배웁니다.",content:`복잡한 버그는 한 번에 원인을 찾기 어렵습니다. 전략적으로 로그를 추가하고, 그 결과를 AI에게 분석하게 하면 효율적으로 원인을 좁혀갈 수 있습니다.

**로그 기반 디버깅 워크플로우:**

1단계 — AI에게 의심 지점을 물어봅니다
2단계 — AI가 제안한 위치에 로그를 추가합니다
3단계 — 버그를 재현하고 로그를 수집합니다
4단계 — 로그를 AI에게 전달하여 분석을 요청합니다
5단계 — 원인을 좁혀가며 1-4단계를 반복합니다

**전략적 로그 추가 위치:**
- 함수의 진입점과 반환점
- 조건 분기 전후
- API 호출 전후
- 상태 변경 직전과 직후
- 에러 catch 블록`,keyPoints:["console.log 대신 구조화된 로그(JSON 형태)를 사용하면 AI 분석이 용이하다","로그에 타임스탬프를 포함하면 실행 순서를 파악할 수 있다","AI에게 로그 전체를 전달하고 패턴 분석을 요청한다","디버깅 완료 후 반드시 디버그 로그를 제거한다"],codeExamples:[{language:"typescript",title:"전략적 로그 추가 예시",code:`// AI에게 요청: "장바구니에 추가가 안 되는 버그가 있어요.
// 어디에 로그를 추가하면 좋을까요?"

// AI 제안에 따라 로그 추가:
async function addToCart(productId: number) {
  console.log('[Cart] addToCart 시작:', { productId, timestamp: Date.now() });

  // 1. 상품 조회
  const product = products.find(p => p.id === productId);
  console.log('[Cart] 상품 조회 결과:', {
    found: !!product,
    product: product ? { id: product.id, title: product.title } : null
  });

  if (!product) {
    console.error('[Cart] 상품을 찾을 수 없음:', productId);
    return;
  }

  // 2. 재고 확인
  console.log('[Cart] 재고 상태:', {
    isSoldOut: product.isSoldOut,
    isActive: product.isActive
  });

  if (product.isSoldOut) {
    console.warn('[Cart] 품절 상품:', productId);
    toast.error('품절된 상품입니다');
    return;
  }

  // 3. 장바구니에 추가
  console.log('[Cart] 현재 장바구니:', cart.map(i => ({
    id: i.id, qty: i.quantity
  })));

  const existingItem = cart.find(item => item.id === productId);
  console.log('[Cart] 기존 아이템:', existingItem ? '있음' : '없음');

  // 상태 업데이트
  if (existingItem) {
    setCart(prev => prev.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  } else {
    setCart(prev => [...prev, { ...product, quantity: 1 }]);
  }

  console.log('[Cart] addToCart 완료');
}

// 로그 수집 결과를 AI에게 전달:
// "[Cart] addToCart 시작: { productId: 5, timestamp: ... }
//  [Cart] 상품 조회 결과: { found: true, product: { id: 5 } }
//  [Cart] 재고 상태: { isSoldOut: false, isActive: true }
//  [Cart] 현재 장바구니: []
//  [Cart] 기존 아이템: 없음"
// → 여기서 "[Cart] addToCart 완료"가 출력 안 됨
// → setCart 부분에서 에러 발생 의심`}]},{id:"int-7-3",title:"스택 트레이스 해석",description:"JavaScript/TypeScript 스택 트레이스를 AI와 함께 분석하여 에러의 근본 원인을 찾습니다.",content:`스택 트레이스(Stack Trace)는 에러가 발생한 시점의 함수 호출 경로를 보여줍니다. 이를 올바르게 해석하면 에러의 근본 원인을 빠르게 찾을 수 있습니다.

**스택 트레이스 해석 순서:**

1. **맨 위 줄**: 에러가 실제로 발생한 위치 (가장 구체적)
2. **위에서 아래로**: 함수 호출 순서 (아래일수록 상위 호출자)
3. **내 코드 vs 라이브러리**: node_modules/react-dom 등은 라이브러리 코드
4. **파일명:행번호**: 정확한 에러 발생 위치

**AI에게 스택 트레이스 분석 요청 시 팁:**
- 스택 트레이스 전체를 그대로 복사하여 전달합니다
- 소스맵이 적용된 스택 트레이스가 더 유용합니다 (개발 모드)
- 에러 메시지와 스택 트레이스를 함께 전달합니다
- "이 스택 트레이스를 분석하고 원인을 설명해주세요"라고 요청합니다`,keyPoints:["스택 트레이스의 맨 위 줄이 에러 발생 지점이다","내 코드 파일명을 찾아 해당 줄을 먼저 확인한다","라이브러리 내부 코드는 보통 무시하고 내 코드만 분석한다","프로덕션에서는 소스맵이 없어 디버깅이 어려울 수 있다"],codeExamples:[{language:"markdown",title:"스택 트레이스 분석 프롬프트 예시",code:`## 에러 상황
주문 완료 시 다음 에러가 발생합니다. 분석해주세요.

## 스택 트레이스
\`\`\`
TypeError: Cannot read properties of undefined (reading 'map')
    at OrderComplete (OrderComplete.tsx:45:32)
    at renderWithHooks (react-dom.development.js:14985)
    at mountIndeterminateComponent (react-dom.development.js:17811)
    at beginWork (react-dom.development.js:19049)
    at HTMLUnknownElement.callCallback (react-dom.development.js:3945)
\`\`\`

## 해당 코드 (OrderComplete.tsx 45번째 줄 부근)
\`\`\`tsx
function OrderComplete() {
  const { state } = useLocation();
  const order = state?.order;          // line 43
                                        // line 44
  const items = order.items.map(       // line 45 ← 에러!
    (item) => ({
      name: item.product_title,
      qty: item.quantity,
    })
  );
  // ...
}
\`\`\`

## AI에게 기대하는 분석
1. 에러의 직접적 원인
2. order가 undefined인 이유 (추정)
3. 수정 방안 (옵셔널 체이닝? null 체크?)
4. 같은 유형의 에러를 방지하는 패턴`}]},{id:"int-7-4",title:"수정 검증과 회귀 방지",description:"버그 수정 후 검증하고, 같은 버그가 재발하지 않도록 방지하는 전략을 배웁니다.",content:`버그를 수정한 후에는 반드시 검증 단계를 거쳐야 합니다. 또한 같은 유형의 버그가 다시 발생하지 않도록 예방 조치를 취해야 합니다.

**수정 검증 체크리스트:**

1. **원래 버그가 해결되었는가?** — 동일한 재현 단계로 확인
2. **다른 기능에 영향이 없는가?** — 관련 기능을 테스트 (회귀 테스트)
3. **엣지 케이스도 처리되는가?** — null, undefined, 빈 배열 등
4. **에러 메시지가 사용자 친화적인가?** — 기술적 에러를 그대로 노출하지 않는지

**회귀 방지 전략:**
- 버그 원인을 주석으로 기록 (향후 같은 실수 방지)
- TypeScript strict mode 활용 (컴파일 타임에 잡기)
- 방어적 프로그래밍 (옵셔널 체이닝, nullish coalescing)
- 타입 가드 함수로 런타임 안전성 확보

AI에게 "이 수정이 다른 곳에 영향을 줄 수 있는지 분석해주세요"라고 요청하면 놓칠 수 있는 사이드 이펙트를 발견할 수 있습니다.`,keyPoints:["버그 수정 후 원래 재현 단계로 반드시 검증한다","수정이 다른 기능에 미치는 영향을 AI에게 분석 요청한다","방어적 프로그래밍으로 같은 유형의 버그를 사전에 방지한다","TypeScript strict mode는 컴파일 타임에 많은 버그를 잡아준다"],codeExamples:[{language:"typescript",title:"방어적 프로그래밍 패턴",code:`// ── 방어적 프로그래밍 Before / After ──

// Before: 에러 발생 가능
function UserCard({ user }: { user: User }) {
  return (
    <div>
      <h2>{user.display_name}</h2>
      <p>{user.email}</p>
      <span>{user.visited_sites.length}개 사이트 방문</span>
    </div>
  );
}

// After: 방어적 프로그래밍 적용
function UserCard({ user }: { user: User | null }) {
  if (!user) {
    return <div className="animate-pulse h-24 bg-gray-200 rounded" />;
  }

  return (
    <div>
      <h2>{user.display_name ?? '이름 없음'}</h2>
      <p>{user.email}</p>
      <span>{user.visited_sites?.length ?? 0}개 사이트 방문</span>
    </div>
  );
}

// 타입 가드 함수로 런타임 안전성 확보
function isValidOrder(order: unknown): order is Order {
  return (
    typeof order === 'object' &&
    order !== null &&
    'id' in order &&
    'order_number' in order &&
    'total_amount' in order
  );
}

// 사용 예시
function OrderComplete() {
  const { state } = useLocation();

  if (!isValidOrder(state?.order)) {
    return <Navigate to="/orders" replace />;
  }

  // 여기서부터 order는 Order 타입으로 안전하게 사용
  const { order } = state;
  return (
    <div>
      <h1>주문 완료: {order.order_number}</h1>
      <p>결제 금액: {order.total_amount.toLocaleString()}원</p>
    </div>
  );
}`}]}]}],R=()=>{const[n,d]=C.useState(s[0]?.id||""),{isCompleted:i,toggleComplete:c,getProgressPercent:u}=I(),{isLoggedIn:l}=S(),o=s.find(t=>t.id===n)||s[0],p=s.map(t=>t.id),m=u("topic",p.map(t=>`intermediate-${t}`)),A=s.map(t=>({id:t.id,title:t.title,completed:i("topic",`intermediate-${t.id}`)}));return e.jsxs("div",{className:"curriculum-page",children:[e.jsx("div",{className:"curriculum-header",children:e.jsxs("div",{className:"container",children:[e.jsx(P,{level:"intermediate",size:"lg"}),e.jsx("h1",{children:"중급 커리큘럼"}),e.jsx("p",{children:"AI IDE 심화 활용, 풀스택 개발, 코드 품질 관리를 학습합니다."})]})}),e.jsx(E,{title:"중급 토픽",items:A,activeId:n,onSelect:d,progressPercent:m,children:o&&e.jsxs("div",{className:"topic-content",children:[e.jsx("h2",{children:o.title}),e.jsx("p",{className:"topic-description",children:o.description}),o.contents.map((t,g)=>e.jsxs("div",{className:"topic-section",children:[e.jsx("h3",{children:t.title}),e.jsx("div",{className:"topic-text",dangerouslySetInnerHTML:{__html:t.content.replace(/\n/g,"<br/>")}}),t.keyPoints&&t.keyPoints.length>0&&e.jsxs("div",{className:"key-points",children:[e.jsx("h4",{children:"핵심 포인트"}),e.jsx("ul",{children:t.keyPoints.map((r,a)=>e.jsx("li",{children:r},a))})]}),t.codeExamples&&t.codeExamples.map((r,a)=>e.jsx(f,{code:r.code,language:r.language,title:r.title},a))]},t.id||g)),l&&e.jsx("div",{className:"topic-complete-action",children:e.jsx("button",{className:`btn ${i("topic",`intermediate-${o.id}`)?"btn-completed":"btn-primary"}`,onClick:()=>c("topic",`intermediate-${o.id}`),children:i("topic",`intermediate-${o.id}`)?"✓ 학습 완료":"학습 완료 표시"})})]})})]})};export{R as default};
