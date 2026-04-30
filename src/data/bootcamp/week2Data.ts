import type { BootcampDay } from '../../types';

export const week2Days: BootcampDay[] = [
  /* ──────────────────────────────────────────────
   * Day 8: v0.dev 시작
   * ────────────────────────────────────────────── */
  {
    day: 8,
    week: 2,
    title: 'v0.dev 시작',
    description: 'v0.dev로 UI 컴포넌트를 생성합니다.',
    tasks: ['v0.dev 가입', '카드 UI 생성', '대시보드 레이아웃 생성'],
    tools: ['v0.dev'],
    deliverable: 'UI 컴포넌트 3개',
    contents: [
      {
        id: 'day8-v0-intro',
        title: 'v0.dev란 무엇인가?',
        description: 'Vercel이 만든 AI UI 생성 도구의 개요와 특징',
        content:
          '**v0.dev**는 Vercel이 만든 AI 기반 UI 컴포넌트 생성 도구입니다. ' +
          '자연어 프롬프트를 입력하면 **Tailwind CSS + shadcn/ui** 기반의 아름다운 React 컴포넌트를 자동으로 생성해줍니다.\n\n' +
          '**v0.dev의 핵심 특징:**\n' +
          '- 프롬프트 한 줄로 완성도 높은 UI 컴포넌트 생성\n' +
          '- shadcn/ui 기반이라 실제 프로젝트에 바로 복사해서 사용 가능\n' +
          '- 반응형 디자인이 기본으로 적용됨\n' +
          '- 생성된 코드를 자유롭게 수정하고 재생성 요청 가능\n' +
          '- Next.js, React 프로젝트와 완벽 호환\n\n' +
          '**v0 vs 다른 AI 도구 차이점:**\n' +
          '- Lovable/Bolt.new: 전체 앱을 생성하는 "풀앱빌더"\n' +
          '- v0.dev: UI 컴포넌트 단위로 정밀하게 생성하는 "컴포넌트 빌더"\n' +
          '- 따라서 v0는 기존 프로젝트에 컴포넌트를 추가할 때 특히 유용합니다.',
        keyPoints: [
          'Vercel이 만든 AI UI 생성 전문 도구',
          'Tailwind CSS + shadcn/ui 기반 코드 생성',
          '컴포넌트 단위로 정밀한 UI 생성 가능',
          '생성된 코드를 그대로 프로젝트에 복사하여 사용',
        ],
      },
      {
        id: 'day8-v0-signup',
        title: 'v0.dev 가입 및 시작하기',
        description: 'v0.dev에 가입하고 첫 번째 컴포넌트를 생성하는 방법',
        content:
          '**v0.dev 시작 가이드 (단계별):**\n\n' +
          '1. **v0.dev** 사이트(https://v0.dev)에 접속합니다.\n' +
          '2. **Sign Up** 버튼을 클릭하고 GitHub 또는 이메일로 가입합니다.\n' +
          '3. 무료 플랜으로도 하루 일정 횟수의 생성이 가능합니다.\n' +
          '4. 메인 화면의 프롬프트 입력창에 원하는 UI를 설명합니다.\n\n' +
          '**첫 번째 프롬프트 작성 팁:**\n' +
          '- 구체적으로 설명할수록 결과물이 좋습니다.\n' +
          '- 색상, 레이아웃, 포함할 요소를 명확히 지정하세요.\n' +
          '- 예시: "블로그 포스트 카드를 만들어줘. 썸네일 이미지, 제목, 요약, 작성일, 태그를 포함해줘."\n\n' +
          '**생성 결과 활용법:**\n' +
          '- 생성된 코드는 **Code** 탭에서 확인할 수 있습니다.\n' +
          '- 마음에 들지 않으면 추가 프롬프트로 수정을 요청하세요.\n' +
          '- "제목 폰트를 더 크게 해줘", "배경색을 진한 파란색으로 바꿔줘" 등 구체적인 수정 요청이 효과적입니다.\n' +
          '- 최종 코드를 복사하여 자신의 프로젝트에 붙여넣기합니다.',
        keyPoints: [
          'GitHub 계정으로 간편 가입 가능',
          '무료 플랜에서도 기본 생성 기능 사용 가능',
          '구체적인 프롬프트가 좋은 결과를 만듦',
          '추가 프롬프트로 반복 수정 가능',
        ],
        codeExamples: [
          {
            language: 'text',
            title: 'v0 프롬프트 좋은 예시 vs 나쁜 예시',
            code:
              '# 나쁜 프롬프트 (너무 모호함)\n' +
              '"카드 만들어줘"\n\n' +
              '# 좋은 프롬프트 (구체적)\n' +
              '"사용자 프로필 카드를 만들어줘.\n' +
              ' - 원형 아바타 이미지 (80px)\n' +
              ' - 이름 (bold, 18px)\n' +
              ' - 직업/소속 (gray 텍스트)\n' +
              ' - 이메일, GitHub 링크 아이콘\n' +
              ' - 흰색 배경, 부드러운 그림자\n' +
              ' - hover 시 살짝 위로 올라가는 애니메이션"',
          },
        ],
      },
      {
        id: 'day8-v0-card',
        title: '카드 UI 컴포넌트 생성 실습',
        description: 'v0.dev로 다양한 카드 컴포넌트를 만들어봅니다',
        content:
          '**실습 1: 상품 카드 만들기**\n\n' +
          '다음 프롬프트를 v0에 입력해보세요:\n' +
          '"e-commerce 상품 카드를 만들어줘. 상품 이미지, 상품명, 가격(원화), 할인율 배지, 별점, 장바구니 담기 버튼을 포함해줘. 모던하고 깔끔한 디자인으로."\n\n' +
          '**생성된 코드 분석하기:**\n' +
          '- v0가 생성한 코드에서 `Card`, `CardContent`, `CardHeader` 등의 shadcn/ui 컴포넌트를 확인하세요.\n' +
          '- Tailwind CSS 클래스(`flex`, `rounded-lg`, `shadow-md` 등)가 어떻게 사용되는지 살펴보세요.\n' +
          '- 이 코드를 이해하지 못해도 괜찮습니다. 점차 익숙해집니다.\n\n' +
          '**실습 2: 프로필 카드 만들기**\n' +
          '"팀원 소개 카드를 만들어줘. 아바타, 이름, 역할, 소개 한 줄, SNS 링크 아이콘들을 포함해줘."\n\n' +
          '**실습 3: 통계 카드 만들기**\n' +
          '"대시보드용 통계 카드 4개를 만들어줘. 각각 총 매출, 신규 사용자, 활성 사용자, 전환율을 보여주고, 전월 대비 증감율도 표시해줘."',
        keyPoints: [
          '프롬프트에 포함할 요소를 목록으로 나열하면 효과적',
          'shadcn/ui 컴포넌트 구조를 눈으로 익히기',
          '같은 프롬프트도 재생성하면 다른 결과가 나올 수 있음',
          '여러 번 시도하면서 마음에 드는 결과를 선택',
        ],
        codeExamples: [
          {
            language: 'tsx',
            title: 'v0가 생성하는 카드 코드 예시 (참고용)',
            code:
              'import { Card, CardContent, CardHeader } from "@/components/ui/card";\nimport { Badge } from "@/components/ui/badge";\nimport { Button } from "@/components/ui/button";\n\nexport function ProductCard() {\n  return (\n    <Card className="w-[300px] overflow-hidden">\n      <div className="relative">\n        <img\n          src="/product.jpg"\n          alt="상품 이미지"\n          className="w-full h-48 object-cover"\n        />\n        <Badge className="absolute top-2 right-2 bg-red-500">\n          20% OFF\n        </Badge>\n      </div>\n      <CardHeader>\n        <h3 className="font-bold text-lg">프리미엄 노트북</h3>\n        <p className="text-2xl font-bold text-blue-600">\n          ₩1,280,000\n        </p>\n      </CardHeader>\n      <CardContent>\n        <Button className="w-full">장바구니 담기</Button>\n      </CardContent>\n    </Card>\n  );\n}',
          },
        ],
      },
      {
        id: 'day8-v0-dashboard',
        title: '대시보드 레이아웃 생성',
        description: 'v0.dev로 대시보드 전체 레이아웃을 만드는 실습',
        content:
          '**대시보드 레이아웃 프롬프트 작성 전략:**\n\n' +
          '대시보드처럼 복잡한 UI는 한 번에 완성하기보다, 단계적으로 접근하는 것이 효과적입니다.\n\n' +
          '**1단계: 전체 레이아웃 틀 잡기**\n' +
          '"관리자 대시보드 레이아웃을 만들어줘. 왼쪽에 사이드바 네비게이션, 상단에 헤더(검색바, 알림 아이콘, 프로필), 오른쪽에 메인 콘텐츠 영역. 사이드바는 접을 수 있게 해줘."\n\n' +
          '**2단계: 메인 콘텐츠 구성**\n' +
          '"메인 영역에 상단에 통계 카드 4개(가로 배치), 중간에 차트 2개(라인차트, 바차트를 나란히), 하단에 최근 주문 테이블을 배치해줘."\n\n' +
          '**3단계: 세부 수정**\n' +
          '"사이드바 메뉴 아이콘을 Lucide 아이콘으로 바꿔줘. 활성 메뉴는 파란색 배경으로 표시해줘."\n\n' +
          '**팁: 레퍼런스 이미지 활용**\n' +
          '- v0 Pro를 사용하면 이미지를 업로드하여 비슷한 UI를 생성할 수 있습니다.\n' +
          '- 마음에 드는 대시보드 스크린샷을 참고로 제공하면 훨씬 정확한 결과물을 얻습니다.\n\n' +
          '**오늘의 과제:**\n' +
          '- 카드 UI 1개, 프로필 카드 1개, 대시보드 레이아웃 1개를 v0로 생성하세요.\n' +
          '- 각각의 코드를 별도 파일로 저장해두세요. (Day 12에서 포트폴리오 제작에 활용)',
        keyPoints: [
          '복잡한 UI는 단계적으로 프롬프트를 나누어 접근',
          '전체 레이아웃 → 세부 영역 → 디테일 수정 순서',
          '레퍼런스 이미지를 활용하면 원하는 결과에 가까워짐',
          '생성된 코드를 저장해두면 나중에 재활용 가능',
        ],
      },
    ],
  },

  /* ──────────────────────────────────────────────
   * Day 9: Cursor 설치 & 기본
   * ────────────────────────────────────────────── */
  {
    day: 9,
    week: 2,
    title: 'Cursor 설치 & 기본',
    description: 'Cursor IDE를 설치하고 기본 기능을 익힙니다.',
    tasks: ['Cursor 설치', 'Cmd+K 인라인 편집 연습', 'Tab 자동완성 체험'],
    tools: ['Cursor'],
    deliverable: 'Cursor 기본 조작 숙달',
    contents: [
      {
        id: 'day9-cursor-intro',
        title: 'Cursor IDE란?',
        description: 'AI가 내장된 차세대 코드 에디터의 개요',
        content:
          '**Cursor**는 VS Code를 기반으로 만든 **AI 네이티브 코드 에디터**입니다. ' +
          'VS Code의 모든 기능을 그대로 사용하면서, 강력한 AI 코딩 기능이 추가되어 있습니다.\n\n' +
          '**Cursor가 특별한 이유:**\n' +
          '- **코드 에디터 안에서** 직접 AI와 대화하며 코드를 수정할 수 있음\n' +
          '- AI가 현재 열린 파일, 프로젝트 구조를 이해하고 맥락에 맞는 코드를 생성\n' +
          '- 기존 VS Code 확장 프로그램을 그대로 사용 가능\n' +
          '- 인라인 편집(Cmd+K), 채팅(Cmd+L), 자동완성(Tab) 등 다양한 AI 기능 제공\n\n' +
          '**Cursor vs 일반 VS Code + Copilot:**\n' +
          '- Copilot: 줄 단위 자동완성 위주\n' +
          '- Cursor: 파일 전체를 이해하고 블록 단위 코드 생성/수정 가능\n' +
          '- Cursor는 "코드를 수정해줘"라는 자연어 명령에 더 강력하게 반응합니다.',
        keyPoints: [
          'VS Code 기반 + AI 기능이 네이티브로 탑재된 에디터',
          'Cmd+K(인라인 편집), Cmd+L(채팅), Tab(자동완성) 3가지 핵심 기능',
          '프로젝트 전체 맥락을 이해하는 AI 코딩 지원',
          'VS Code 확장 프로그램 호환',
        ],
      },
      {
        id: 'day9-cursor-install',
        title: 'Cursor 설치 가이드',
        description: 'Cursor를 다운로드하고 초기 설정하는 방법',
        content:
          '**Cursor 설치 단계:**\n\n' +
          '1. **cursor.com** 에 접속합니다.\n' +
          '2. **Download** 버튼을 클릭하여 설치 파일을 다운로드합니다.\n' +
          '3. 설치 파일을 실행하고 안내에 따라 설치를 완료합니다.\n' +
          '4. Cursor를 처음 실행하면 가입/로그인 화면이 나타납니다.\n' +
          '5. 이메일 또는 GitHub 계정으로 로그인합니다.\n\n' +
          '**VS Code에서 설정 가져오기:**\n' +
          '- Cursor 첫 실행 시 기존 VS Code 설정을 가져올 수 있습니다.\n' +
          '- Extensions(확장 프로그램), 테마, 키바인딩을 자동으로 마이그레이션합니다.\n' +
          '- VS Code를 사용하던 분이라면 이 옵션을 선택하세요.\n\n' +
          '**무료 vs 유료:**\n' +
          '- **Free**: 월 일정 횟수의 AI 요청 제공 (학습용으로 충분)\n' +
          '- **Pro** ($20/월): 무제한 AI 요청, 최신 모델 사용\n' +
          '- 부트캠프 기간에는 무료 플랜으로 시작하세요.\n\n' +
          '**초기 설정 추천:**\n' +
          '- Settings > Models에서 사용할 AI 모델을 확인합니다.\n' +
          '- 한국어 프롬프트도 잘 이해하지만, 코드 관련 지시는 영어가 더 정확할 수 있습니다.',
        keyPoints: [
          'cursor.com에서 무료 다운로드 및 설치',
          'VS Code 설정을 자동으로 마이그레이션 가능',
          '무료 플랜으로 학습 시작 충분',
          'GitHub 계정으로 간편 로그인',
        ],
      },
      {
        id: 'day9-cursor-shortcuts',
        title: '핵심 단축키: Cmd+K, Cmd+L, Tab',
        description: 'Cursor의 3가지 핵심 AI 기능과 단축키',
        content:
          '**Cursor의 3가지 핵심 AI 기능을 익히면 생산성이 크게 올라갑니다.**\n\n' +
          '**1. Cmd+K (인라인 편집) — 가장 많이 쓰는 기능**\n' +
          '- 코드를 선택하고 `Cmd+K` (Windows: `Ctrl+K`)를 누릅니다.\n' +
          '- 입력창에 원하는 수정사항을 자연어로 입력합니다.\n' +
          '- 예: "이 함수에 에러 처리를 추가해줘"\n' +
          '- AI가 선택한 코드를 분석하고 수정안을 제안합니다.\n' +
          '- Accept(수락) 또는 Reject(거절)로 적용 여부를 결정합니다.\n\n' +
          '**2. Cmd+L (AI 채팅) — 질문하고 대화하기**\n' +
          '- `Cmd+L` (Windows: `Ctrl+L`)을 누르면 사이드 채팅 패널이 열립니다.\n' +
          '- 코드에 대한 질문, 설명 요청, 새 코드 생성 요청 등이 가능합니다.\n' +
          '- 예: "이 컴포넌트가 무슨 역할을 하는지 설명해줘"\n' +
          '- 채팅에서 생성된 코드를 바로 파일에 적용할 수 있습니다.\n\n' +
          '**3. Tab (자동완성) — 코드를 쓰다가 Tab 누르기**\n' +
          '- 코드를 입력하는 도중 Tab 키를 누르면 AI가 다음 코드를 예측합니다.\n' +
          '- 단순한 줄 완성부터 여러 줄 코드 블록까지 제안합니다.\n' +
          '- 원하는 제안이 아니면 Esc를 누르고 직접 작성하면 됩니다.',
        keyPoints: [
          'Cmd+K (Ctrl+K): 선택한 코드를 자연어로 수정',
          'Cmd+L (Ctrl+L): AI 채팅 패널에서 질문/요청',
          'Tab: 코드 작성 중 AI 자동완성',
          '세 가지만 익히면 Cursor의 80%를 활용하는 것',
        ],
        codeExamples: [
          {
            language: 'text',
            title: 'Cursor 핵심 단축키 정리 (Windows 기준)',
            code:
              '[ 인라인 편집 ]\n' +
              '  Ctrl+K        코드 선택 후 AI에게 수정 요청\n\n' +
              '[ AI 채팅 ]\n' +
              '  Ctrl+L        사이드 채팅 패널 열기\n' +
              '  Ctrl+Shift+L  새 채팅 시작\n\n' +
              '[ 자동완성 ]\n' +
              '  Tab           AI 자동완성 수락\n' +
              '  Esc           자동완성 거절\n\n' +
              '[ Composer ]\n' +
              '  Ctrl+I        Composer 패널 열기\n\n' +
              '[ 유용한 기능 ]\n' +
              '  @파일명       채팅에서 특정 파일 참조\n' +
              '  @codebase     프로젝트 전체를 컨텍스트로 제공',
          },
        ],
      },
      {
        id: 'day9-cursor-practice',
        title: '실습: Cmd+K와 Tab으로 간단한 코드 작성',
        description: '실제 코드를 작성하며 Cursor의 AI 기능을 체험합니다',
        content:
          '**실습 목표:** Cursor에서 간단한 React 컴포넌트를 만들며 AI 기능을 체험합니다.\n\n' +
          '**실습 1: Tab 자동완성 체험**\n' +
          '1. Cursor에서 새 파일 `Greeting.tsx`를 만듭니다.\n' +
          '2. `function Greeting` 까지 입력하고 잠시 기다립니다.\n' +
          '3. Tab 키를 누르면 AI가 나머지 코드를 자동 완성합니다.\n' +
          '4. 원하는 결과가 아니면 Esc 후 다시 시도합니다.\n\n' +
          '**실습 2: Cmd+K 인라인 편집 체험**\n' +
          '1. 아래 코드를 파일에 붙여넣기합니다.\n' +
          '2. 전체 코드를 선택하고 `Ctrl+K`를 누릅니다.\n' +
          '3. "props로 이름을 받아서 표시하도록 수정해줘" 라고 입력합니다.\n' +
          '4. AI가 제안한 수정사항을 확인하고 Accept을 클릭합니다.\n\n' +
          '**실습 3: Cmd+L 채팅 체험**\n' +
          '1. `Ctrl+L`을 눌러 채팅 패널을 엽니다.\n' +
          '2. "useState를 사용해서 카운터 버튼을 만들어줘"라고 요청합니다.\n' +
          '3. 생성된 코드의 **Apply** 버튼을 클릭하여 파일에 적용합니다.\n\n' +
          '**주의사항:**\n' +
          '- AI가 생성한 코드를 항상 읽어보는 습관을 가지세요.\n' +
          '- 이해가 안 되는 부분은 채팅에서 "이 코드를 설명해줘"라고 물어보세요.',
        keyPoints: [
          'Tab 자동완성은 코드 입력 중 자연스럽게 동작',
          'Ctrl+K는 선택한 코드 범위를 지정해서 수정 요청',
          'Ctrl+L 채팅에서 새 코드 생성 후 Apply로 적용',
          'AI가 생성한 코드를 반드시 읽고 이해하려는 습관이 중요',
        ],
        codeExamples: [
          {
            language: 'tsx',
            title: '실습 2에서 사용할 기본 코드',
            code:
              'function Greeting() {\n' +
              '  return (\n' +
              '    <div>\n' +
              '      <h1>안녕하세요!</h1>\n' +
              '      <p>바이브코딩 부트캠프에 오신 것을 환영합니다.</p>\n' +
              '    </div>\n' +
              '  );\n' +
              '}\n\n' +
              'export default Greeting;',
          },
        ],
      },
    ],
  },

  /* ──────────────────────────────────────────────
   * Day 10: Cursor로 코드 수정
   * ────────────────────────────────────────────── */
  {
    day: 10,
    week: 2,
    title: 'Cursor로 코드 수정',
    description: 'Cursor의 AI 기능으로 코드를 수정합니다.',
    tasks: ['기존 코드에 기능 추가', 'Cmd+K로 리팩토링', 'Chat으로 질문하기'],
    tools: ['Cursor'],
    deliverable: '수정된 코드',
    contents: [
      {
        id: 'day10-add-feature',
        title: '기존 코드에 기능 추가하기',
        description: 'Cursor AI를 활용해 기존 코드에 새 기능을 추가하는 방법',
        content:
          '**AI로 기존 코드에 기능을 추가하는 것은 바이브코딩의 핵심 워크플로우입니다.**\n\n' +
          '**기능 추가 워크플로우:**\n' +
          '1. 수정할 파일을 Cursor에서 엽니다.\n' +
          '2. 기능을 추가할 위치의 코드를 선택합니다.\n' +
          '3. `Ctrl+K`를 누르고 원하는 기능을 설명합니다.\n' +
          '4. AI가 제안한 코드를 검토하고 Accept 합니다.\n\n' +
          '**예시: Todo 앱에 기능 추가하기**\n' +
          '- "완료된 항목에 취소선을 추가해줘"\n' +
          '- "할 일 목록을 우선순위 순으로 정렬해줘"\n' +
          '- "로컬스토리지에 데이터를 저장해서 새로고침해도 유지되게 해줘"\n\n' +
          '**팁: @파일명으로 맥락 제공하기**\n' +
          '- 채팅에서 `@파일명`을 입력하면 해당 파일을 AI에게 컨텍스트로 제공합니다.\n' +
          '- 예: "@App.tsx 이 파일에 다크모드 토글 기능을 추가해줘"\n' +
          '- 여러 파일을 참조할 수도 있습니다: "@App.tsx @styles.css 다크모드를 적용해줘"\n\n' +
          '**주의: 한 번에 너무 많은 변경을 요청하지 마세요.**\n' +
          '- 작은 단위로 나누어 요청하면 AI가 더 정확한 코드를 생성합니다.\n' +
          '- "로그인 + 게시판 + 결제를 모두 만들어줘" (X)\n' +
          '- "로그인 폼을 먼저 만들어줘" (O)',
        keyPoints: [
          '기능 추가는 작은 단위로 나누어 요청하는 것이 효과적',
          '@파일명으로 특정 파일을 컨텍스트로 제공',
          'Accept/Reject로 AI 제안을 선택적으로 적용',
          '한 번에 하나의 기능을 추가하고 테스트하는 습관',
        ],
      },
      {
        id: 'day10-refactor',
        title: 'Cmd+K로 코드 리팩토링',
        description: '인라인 편집 기능을 활용한 코드 개선 방법',
        content:
          '**리팩토링이란?** 코드의 동작은 그대로 유지하면서 구조, 가독성, 성능을 개선하는 작업입니다.\n' +
          'Cursor의 `Ctrl+K`는 리팩토링에 매우 강력합니다.\n\n' +
          '**자주 사용하는 리팩토링 프롬프트:**\n\n' +
          '1. **코드 정리**: "이 코드를 더 읽기 쉽게 정리해줘"\n' +
          '2. **함수 분리**: "이 긴 함수를 작은 함수들로 분리해줘"\n' +
          '3. **타입 추가**: "TypeScript 타입을 추가해줘"\n' +
          '4. **에러 처리**: "try-catch로 에러 처리를 추가해줘"\n' +
          '5. **성능 개선**: "불필요한 리렌더링을 방지하도록 최적화해줘"\n\n' +
          '**리팩토링 실습:**\n' +
          '1. 아래 예제 코드를 Cursor에 붙여넣기합니다.\n' +
          '2. 전체 코드를 선택 후 `Ctrl+K`를 누릅니다.\n' +
          '3. "TypeScript로 변환하고, 에러 처리를 추가해줘"라고 입력합니다.\n' +
          '4. AI가 제안한 리팩토링 결과를 비교해보세요.\n\n' +
          '**리팩토링 전후를 비교하는 습관이 실력 향상의 지름길입니다.**\n' +
          '- AI가 어떤 패턴을 적용했는지 살펴보세요.\n' +
          '- 이해가 안 되는 부분은 `Ctrl+L`로 물어보세요.',
        keyPoints: [
          '리팩토링 = 동작은 유지하면서 코드 품질 개선',
          'Ctrl+K로 선택한 코드를 자연어로 수정 요청',
          '작은 단위로 리팩토링하고 결과를 확인하는 것이 안전',
          '리팩토링 전후 코드를 비교하며 학습',
        ],
        codeExamples: [
          {
            language: 'javascript',
            title: '리팩토링 전: 개선이 필요한 코드',
            code:
              'function getData() {\n' +
              '  let d = fetch("https://api.example.com/data")\n' +
              '  let r = d.then(res => res.json())\n' +
              '  return r.then(data => {\n' +
              '    let result = []\n' +
              '    for (let i = 0; i < data.length; i++) {\n' +
              '      if (data[i].active == true) {\n' +
              '        result.push(data[i].name)\n' +
              '      }\n' +
              '    }\n' +
              '    return result\n' +
              '  })\n' +
              '}',
          },
          {
            language: 'typescript',
            title: '리팩토링 후: AI가 개선한 코드 (예시)',
            code:
              'interface User {\n' +
              '  name: string;\n' +
              '  active: boolean;\n' +
              '}\n\n' +
              'async function getActiveUserNames(): Promise<string[]> {\n' +
              '  try {\n' +
              '    const response = await fetch("https://api.example.com/data");\n' +
              '    if (!response.ok) {\n' +
              '      throw new Error(`HTTP error: ${response.status}`);\n' +
              '    }\n' +
              '    const users: User[] = await response.json();\n' +
              '    return users\n' +
              '      .filter(user => user.active)\n' +
              '      .map(user => user.name);\n' +
              '  } catch (error) {\n' +
              '    console.error("데이터 조회 실패:", error);\n' +
              '    return [];\n' +
              '  }\n' +
              '}',
          },
        ],
      },
      {
        id: 'day10-chat',
        title: 'Chat 기능으로 코드 질문하기',
        description: 'Cursor의 채팅 기능을 활용해 코드를 이해하고 디버깅하는 방법',
        content:
          '**Cursor의 채팅(Ctrl+L)은 코드를 이해하는 최고의 학습 도구입니다.**\n\n' +
          '**활용법 1: 코드 설명 요청**\n' +
          '- 이해가 안 되는 코드를 선택하고 `Ctrl+L`을 누릅니다.\n' +
          '- "이 코드가 무슨 일을 하는지 한국어로 설명해줘"라고 요청합니다.\n' +
          '- AI가 줄 단위로 상세하게 설명해줍니다.\n\n' +
          '**활용법 2: 에러 해결**\n' +
          '- 에러 메시지를 복사하여 채팅에 붙여넣기합니다.\n' +
          '- "이 에러가 왜 발생하는지, 어떻게 고치는지 알려줘"라고 요청합니다.\n' +
          '- @파일명을 함께 제공하면 더 정확한 답변을 얻습니다.\n\n' +
          '**활용법 3: 학습 목적 질문**\n' +
          '- "React의 useState와 useEffect의 차이가 뭐야?"\n' +
          '- "이 프로젝트에서 Tailwind CSS가 어떻게 사용되고 있어?"\n' +
          '- "@codebase 이 프로젝트의 전체 구조를 설명해줘"\n\n' +
          '**활용법 4: 코드 리뷰 요청**\n' +
          '- "이 코드에서 개선할 점을 알려줘"\n' +
          '- "이 코드에 보안 취약점이 있는지 확인해줘"\n' +
          '- "이 함수의 성능을 개선할 방법을 제안해줘"\n\n' +
          '**팁:** `@codebase`를 사용하면 AI가 프로젝트 전체 파일을 맥락으로 참고합니다.',
        keyPoints: [
          'Ctrl+L로 AI 채팅 패널을 열어 자유롭게 질문',
          '@파일명으로 특정 파일 참조, @codebase로 전체 프로젝트 참조',
          '에러 메시지를 붙여넣고 해결 방법을 물어보기',
          '코드 설명, 학습, 리뷰 등 다양한 용도로 활용 가능',
        ],
        codeExamples: [
          {
            language: 'text',
            title: 'Cursor 채팅 프롬프트 예시 모음',
            code:
              '[ 코드 이해 ]\n' +
              '  "이 useEffect가 언제 실행되는지 설명해줘"\n' +
              '  "이 reducer 함수의 동작 흐름을 알려줘"\n\n' +
              '[ 에러 해결 ]\n' +
              '  "TypeError: Cannot read properties of undefined 에러가 발생해.\n' +
              '   @App.tsx 파일을 확인하고 원인과 해결법을 알려줘"\n\n' +
              '[ 기능 구현 ]\n' +
              '  "@App.tsx 에 다크모드 토글 버튼을 추가해줘.\n' +
              '   localStorage에 설정을 저장하고,\n' +
              '   새로고침해도 유지되게 해줘"\n\n' +
              '[ 코드 리뷰 ]\n' +
              '  "@codebase 이 프로젝트에서 개선할 점을 5가지 알려줘"',
          },
        ],
      },
    ],
  },

  /* ──────────────────────────────────────────────
   * Day 11: Cursor Composer
   * ────────────────────────────────────────────── */
  {
    day: 11,
    week: 2,
    title: 'Cursor Composer',
    description: 'Composer로 여러 파일을 동시에 수정합니다.',
    tasks: ['Composer 모드 활용', '다중 파일 수정', '프로젝트 구조 변경'],
    tools: ['Cursor'],
    deliverable: 'Composer 활용 프로젝트',
    contents: [
      {
        id: 'day11-composer-intro',
        title: 'Composer란 무엇인가?',
        description: 'Cursor Composer의 개념과 일반 Chat과의 차이점',
        content:
          '**Composer**는 Cursor의 가장 강력한 기능으로, **여러 파일을 동시에 수정**할 수 있는 AI 에이전트입니다.\n\n' +
          '**Chat vs Composer 차이:**\n' +
          '- **Chat (Ctrl+L)**: 한 파일에 대한 질문/수정에 적합\n' +
          '- **Composer (Ctrl+I)**: 여러 파일을 동시에 생성/수정할 때 사용\n\n' +
          '**Composer가 강력한 이유:**\n' +
          '- 새 파일 생성과 기존 파일 수정을 한 번의 요청으로 처리\n' +
          '- 컴포넌트, 스타일, 타입, 유틸리티 파일을 한꺼번에 만들 수 있음\n' +
          '- 파일 간 import/export 관계를 자동으로 설정\n' +
          '- 프로젝트 구조를 이해하고 적절한 위치에 파일을 생성\n\n' +
          '**Composer 사용 시점:**\n' +
          '- 새 기능을 추가할 때 (컴포넌트 + 스타일 + 라우팅)\n' +
          '- 프로젝트 구조를 변경할 때 (폴더 정리, 파일 분리)\n' +
          '- 여러 파일에 걸친 대규모 리팩토링을 할 때\n\n' +
          '**단축키:** `Ctrl+I`로 Composer 패널을 열 수 있습니다.',
        keyPoints: [
          'Composer = 여러 파일을 동시에 수정하는 AI 에이전트',
          'Ctrl+I로 Composer 패널 열기',
          '파일 생성, 수정, 삭제를 한 번의 요청으로 처리',
          'Chat은 단일 파일, Composer는 멀티 파일에 적합',
        ],
      },
      {
        id: 'day11-composer-usage',
        title: 'Composer 기본 사용법',
        description: 'Composer를 열고 멀티 파일 수정을 요청하는 방법',
        content:
          '**Composer 사용 단계:**\n\n' +
          '1. `Ctrl+I`를 눌러 Composer 패널을 엽니다.\n' +
          '2. 원하는 작업을 자연어로 설명합니다.\n' +
          '3. 필요하면 `@파일명`으로 특정 파일을 참조합니다.\n' +
          '4. AI가 수정할 파일 목록과 변경 내용을 제안합니다.\n' +
          '5. 각 파일별로 **Accept** 또는 **Reject**를 선택합니다.\n\n' +
          '**효과적인 Composer 프롬프트 작성법:**\n\n' +
          '- **목표를 먼저 설명**: "사용자 프로필 페이지를 만들고 싶어"\n' +
          '- **필요한 파일을 나열**: "ProfilePage.tsx 컴포넌트, useProfile.ts 훅, profile.css 스타일 파일이 필요해"\n' +
          '- **구체적인 요구사항 추가**: "프로필 이미지 업로드, 이름 수정, 비밀번호 변경 기능을 포함해줘"\n\n' +
          '**Composer 활용 팁:**\n' +
          '- 한 번에 5개 이상의 파일을 수정하면 정확도가 떨어질 수 있습니다.\n' +
          '- 큰 작업은 2-3단계로 나누어 요청하세요.\n' +
          '- 각 단계마다 결과를 확인하고 다음 단계를 진행하세요.\n' +
          '- 변경사항이 마음에 들지 않으면 `Ctrl+Z`로 되돌릴 수 있습니다.',
        keyPoints: [
          'Ctrl+I로 Composer를 열고 자연어로 작업 설명',
          '파일별로 Accept/Reject 가능',
          '5개 이하의 파일을 한 번에 수정하는 것이 효과적',
          '큰 작업은 단계를 나누어 진행',
        ],
        codeExamples: [
          {
            language: 'text',
            title: 'Composer 프롬프트 예시',
            code:
              '[ 좋은 Composer 프롬프트 ]\n\n' +
              '"src/components 폴더에 Header 컴포넌트를 만들어줘.\n' +
              ' - Header.tsx: 로고, 네비게이션 메뉴, 로그인 버튼 포함\n' +
              ' - Header.css: 상단 고정, 반응형 스타일\n' +
              ' - @App.tsx 에 Header를 import하고 최상단에 추가해줘\n' +
              ' - 네비게이션 메뉴: 홈, 소개, 서비스, 문의"\n\n' +
              '[ 단계적 접근 예시 ]\n\n' +
              '1단계: "기본 Header 컴포넌트를 만들어줘"\n' +
              '2단계: "Header에 반응형 햄버거 메뉴를 추가해줘"\n' +
              '3단계: "스크롤 시 Header 배경색이 변하도록 해줘"',
          },
        ],
      },
      {
        id: 'day11-composer-practice',
        title: '실습: Composer로 프로젝트 구조 만들기',
        description: '실제 프로젝트 구조를 Composer로 한 번에 만들어봅니다',
        content:
          '**실습: 간단한 블로그 구조 만들기**\n\n' +
          'Composer에 다음 프롬프트를 입력해보세요:\n\n' +
          '"간단한 블로그 앱의 기본 구조를 만들어줘.\n' +
          '필요한 파일:\n' +
          '- src/components/BlogList.tsx: 블로그 글 목록 컴포넌트\n' +
          '- src/components/BlogCard.tsx: 개별 블로그 카드 컴포넌트\n' +
          '- src/components/BlogDetail.tsx: 블로그 글 상세 페이지\n' +
          '- src/types/blog.ts: Blog 관련 TypeScript 타입 정의\n' +
          '- src/data/samplePosts.ts: 샘플 블로그 데이터 3개\n' +
          'Tailwind CSS를 사용하고 깔끔한 디자인으로 만들어줘."\n\n' +
          '**Composer 실행 결과 확인하기:**\n' +
          '- Composer가 제안한 각 파일의 내용을 하나씩 살펴보세요.\n' +
          '- 파일 간 import/export가 올바르게 연결되었는지 확인하세요.\n' +
          '- 타입 정의가 일관되게 사용되고 있는지 확인하세요.\n\n' +
          '**추가 실습: 프로젝트 구조 변경**\n' +
          '- "BlogCard 컴포넌트를 분리해서 src/components/blog/ 폴더로 이동해줘"\n' +
          '- "모든 import 경로도 함께 업데이트해줘"\n' +
          '- Composer는 파일 이동과 import 경로 수정을 동시에 처리합니다.',
        keyPoints: [
          'Composer로 프로젝트 전체 구조를 한 번에 생성 가능',
          '파일 간 import/export 관계를 자동으로 설정',
          '파일 이동 시 경로 업데이트도 자동 처리',
          '결과를 항상 검토하고 필요하면 추가 수정 요청',
        ],
        codeExamples: [
          {
            language: 'typescript',
            title: 'Composer가 생성할 타입 파일 예시',
            code:
              '// src/types/blog.ts\n' +
              'export interface BlogPost {\n' +
              '  id: number;\n' +
              '  title: string;\n' +
              '  content: string;\n' +
              '  author: string;\n' +
              '  date: string;\n' +
              '  tags: string[];\n' +
              '  thumbnail?: string;\n' +
              '}\n\n' +
              'export interface BlogListProps {\n' +
              '  posts: BlogPost[];\n' +
              '  onSelect: (post: BlogPost) => void;\n' +
              '}',
          },
        ],
      },
    ],
  },

  /* ──────────────────────────────────────────────
   * Day 12: 포트폴리오 제작
   * ────────────────────────────────────────────── */
  {
    day: 12,
    week: 2,
    title: '포트폴리오 제작',
    description: 'v0 + Cursor로 포트폴리오를 만듭니다.',
    tasks: ['v0에서 UI 생성', 'Cursor에서 커스터마이징', '반응형 적용'],
    tools: ['v0.dev', 'Cursor'],
    deliverable: '포트폴리오 사이트',
    contents: [
      {
        id: 'day12-portfolio-plan',
        title: '포트폴리오 제작 전략',
        description: 'v0와 Cursor를 조합하여 포트폴리오를 만드는 전체 워크플로우',
        content:
          '**v0 + Cursor 조합 워크플로우:**\n\n' +
          'Day 12에서는 v0.dev와 Cursor를 결합하여 실제 포트폴리오 사이트를 만듭니다. ' +
          '이것이 바이브코딩의 진정한 워크플로우입니다.\n\n' +
          '**전체 흐름:**\n' +
          '1. **v0.dev에서 UI 생성** → 아름다운 컴포넌트를 빠르게 만들기\n' +
          '2. **코드 복사** → v0에서 생성된 코드를 Cursor 프로젝트로 가져오기\n' +
          '3. **Cursor에서 커스터마이징** → 실제 데이터 연결, 기능 추가\n' +
          '4. **반응형 적용** → 모바일/태블릿 대응\n\n' +
          '**포트폴리오에 포함할 섹션:**\n' +
          '- **Hero 섹션**: 이름, 한 줄 소개, 프로필 사진\n' +
          '- **About 섹션**: 자기소개, 기술 스택\n' +
          '- **Projects 섹션**: 프로젝트 카드 목록\n' +
          '- **Contact 섹션**: 연락처 정보, 이메일 폼\n\n' +
          '**v0에서 생성할 컴포넌트 목록:**\n' +
          '- Hero 배너 (이름 + 소개 + CTA 버튼)\n' +
          '- 프로젝트 카드 그리드\n' +
          '- 기술 스택 아이콘 섹션\n' +
          '- 연락처 폼',
        keyPoints: [
          'v0로 UI 생성 → Cursor로 커스터마이징이 핵심 워크플로우',
          'Hero, About, Projects, Contact 4개 섹션으로 구성',
          '각 섹션별로 v0에서 컴포넌트를 생성',
          'Cursor에서 실제 데이터를 연결하고 기능 완성',
        ],
      },
      {
        id: 'day12-v0-to-cursor',
        title: 'v0에서 UI 생성 후 Cursor로 가져오기',
        description: 'v0 생성 코드를 Cursor 프로젝트에 통합하는 방법',
        content:
          '**Step 1: v0에서 Hero 섹션 만들기**\n\n' +
          'v0 프롬프트:\n' +
          '"개인 포트폴리오의 Hero 섹션을 만들어줘. ' +
          '왼쪽에 이름, 직업, 간단한 소개 텍스트와 Contact Me 버튼. ' +
          '오른쪽에 원형 프로필 이미지. ' +
          '배경은 그라데이션. 모던하고 미니멀한 디자인."\n\n' +
          '**Step 2: 생성된 코드 복사하기**\n' +
          '- v0에서 생성된 결과의 **Code** 탭을 클릭합니다.\n' +
          '- 전체 코드를 복사합니다.\n\n' +
          '**Step 3: Cursor 프로젝트에 붙여넣기**\n' +
          '1. Cursor에서 React 프로젝트를 생성하거나 엽니다.\n' +
          '2. `src/components/Hero.tsx` 파일을 만들고 코드를 붙여넣습니다.\n' +
          '3. shadcn/ui를 사용하지 않는 프로젝트라면 Tailwind CSS 클래스만 남깁니다.\n\n' +
          '**Step 4: Cursor에서 커스터마이징**\n' +
          '- `Ctrl+K`로 "이름을 홍길동으로 바꾸고, 소개 텍스트를 바이브코딩 개발자로 수정해줘"\n' +
          '- "프로필 이미지 경로를 /images/profile.jpg로 변경해줘"\n' +
          '- "Contact Me 버튼을 클릭하면 #contact 섹션으로 스크롤되게 해줘"\n\n' +
          '**이 과정을 About, Projects, Contact 섹션에도 반복합니다.**',
        keyPoints: [
          'v0에서 Code 탭의 코드를 복사하여 Cursor에 붙여넣기',
          '섹션별로 v0 생성 → Cursor 수정을 반복',
          'Ctrl+K로 실제 데이터(이름, 소개 등)로 교체',
          'shadcn/ui 의존성이 있다면 설치하거나 순수 Tailwind로 변환',
        ],
        codeExamples: [
          {
            language: 'text',
            title: '섹션별 v0 프롬프트 예시',
            code:
              '[ Hero 섹션 ]\n' +
              '"포트폴리오 Hero 배너. 왼쪽에 이름/직업/소개,\n' +
              ' 오른쪽에 프로필 이미지. 그라데이션 배경."\n\n' +
              '[ About 섹션 ]\n' +
              '"자기소개 섹션. 좌측에 텍스트, 우측에 기술 스택\n' +
              ' 아이콘들 (React, TypeScript, Tailwind 등)."\n\n' +
              '[ Projects 섹션 ]\n' +
              '"프로젝트 카드 그리드 (3열). 각 카드에 썸네일,\n' +
              ' 제목, 설명, 기술 태그, GitHub/Demo 링크 버튼."\n\n' +
              '[ Contact 섹션 ]\n' +
              '"연락처 섹션. 이메일 폼 (이름, 이메일, 메시지),\n' +
              ' 오른쪽에 이메일/GitHub/LinkedIn 정보."',
          },
        ],
      },
      {
        id: 'day12-responsive',
        title: '반응형 디자인 적용하기',
        description: '모바일, 태블릿에서도 잘 보이도록 반응형을 적용합니다',
        content:
          '**반응형 디자인이란?** 화면 크기에 따라 레이아웃이 자동으로 변하는 디자인입니다.\n\n' +
          '**Tailwind CSS 반응형 접두사:**\n' +
          '- `sm:` → 640px 이상 (소형 태블릿)\n' +
          '- `md:` → 768px 이상 (태블릿)\n' +
          '- `lg:` → 1024px 이상 (노트북)\n' +
          '- `xl:` → 1280px 이상 (데스크톱)\n\n' +
          '**Cursor로 반응형 적용하기:**\n' +
          '1. 포트폴리오 코드를 선택합니다.\n' +
          '2. `Ctrl+K` → "모바일 반응형을 적용해줘. 768px 이하에서는 한 줄로 세로 배치해줘"\n' +
          '3. AI가 `md:flex-row flex-col` 같은 Tailwind 반응형 클래스를 추가합니다.\n\n' +
          '**모바일에서 확인하는 방법:**\n' +
          '- 브라우저에서 `F12`를 눌러 개발자 도구를 엽니다.\n' +
          '- 상단의 디바이스 토글 버튼을 클릭합니다.\n' +
          '- iPhone, iPad 등 다양한 기기 크기에서 확인합니다.\n\n' +
          '**반응형 체크리스트:**\n' +
          '- Hero 섹션: 모바일에서 이미지와 텍스트가 세로로 배치되는지\n' +
          '- 프로젝트 카드: 모바일에서 1열, 태블릿에서 2열, 데스크톱에서 3열\n' +
          '- 네비게이션: 모바일에서 햄버거 메뉴로 변환되는지\n' +
          '- 폰트 크기: 모바일에서 너무 크거나 작지 않은지',
        keyPoints: [
          'Tailwind CSS 반응형 접두사(sm, md, lg, xl) 이해',
          'Cursor에 반응형 적용을 자연어로 요청 가능',
          'F12 개발자 도구로 다양한 화면 크기에서 테스트',
          '모바일 → 태블릿 → 데스크톱 순서로 확인',
        ],
        codeExamples: [
          {
            language: 'tsx',
            title: 'Tailwind 반응형 예시',
            code:
              '// 프로젝트 카드 그리드 - 반응형\n' +
              '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\n' +
              '  {projects.map(project => (\n' +
              '    <ProjectCard key={project.id} {...project} />\n' +
              '  ))}\n' +
              '</div>\n\n' +
              '// Hero 섹션 - 모바일에서 세로 배치\n' +
              '<section className="flex flex-col md:flex-row items-center gap-8 p-6">\n' +
              '  <div className="text-center md:text-left">\n' +
              '    <h1 className="text-3xl md:text-5xl font-bold">홍길동</h1>\n' +
              '    <p className="text-lg md:text-xl text-gray-600">바이브코더</p>\n' +
              '  </div>\n' +
              '  <img\n' +
              '    src="/profile.jpg"\n' +
              '    className="w-32 h-32 md:w-48 md:h-48 rounded-full"\n' +
              '  />\n' +
              '</section>',
          },
        ],
      },
    ],
  },

  /* ──────────────────────────────────────────────
   * Day 13: 마크다운 학습
   * ────────────────────────────────────────────── */
  {
    day: 13,
    week: 2,
    title: '마크다운 학습',
    description: '마크다운 문법을 집중 학습합니다.',
    tasks: ['기본 문법 학습', '코드블록/테이블 연습', 'AI 프롬프트에 마크다운 활용'],
    tools: ['VS Code/Cursor'],
    deliverable: '마크다운 치트시트',
    contents: [
      {
        id: 'day13-md-basics',
        title: '마크다운 기본 문법',
        description: '제목, 강조, 목록, 링크 등 핵심 문법을 학습합니다',
        content:
          '**마크다운(Markdown)이란?** 텍스트에 간단한 기호를 붙여서 서식을 지정하는 문법입니다. ' +
          'GitHub, Notion, 블로그, AI 프롬프트 등 개발자가 가장 많이 사용하는 문서 형식입니다.\n\n' +
          '**왜 마크다운을 배워야 하나요?**\n' +
          '- GitHub의 README.md 파일 작성에 필수\n' +
          '- AI에게 구조화된 프롬프트를 전달할 때 유용\n' +
          '- 기술 블로그, 문서 작성에 표준으로 사용\n' +
          '- CLAUDE.md 같은 AI 설정 파일도 마크다운 기반\n\n' +
          '**제목 (Heading):**\n' +
          '- `# 제목 1` → 가장 큰 제목\n' +
          '- `## 제목 2` → 두 번째 크기\n' +
          '- `### 제목 3` → 세 번째 크기\n\n' +
          '**텍스트 강조:**\n' +
          '- `**굵은 글씨**` → 굵은 글씨\n' +
          '- `*기울임*` → 기울임\n' +
          '- `` `인라인 코드` `` → 인라인 코드\n' +
          '- `~~취소선~~` → 취소선\n\n' +
          '**목록:**\n' +
          '- `- 항목` 또는 `* 항목` → 순서 없는 목록\n' +
          '- `1. 항목` → 순서 있는 목록\n' +
          '- 들여쓰기(2칸)로 하위 항목 생성\n\n' +
          '**링크와 이미지:**\n' +
          '- `[링크 텍스트](URL)` → 하이퍼링크\n' +
          '- `![대체 텍스트](이미지URL)` → 이미지 삽입',
        keyPoints: [
          '#의 개수로 제목 수준을 결정 (1~6단계)',
          '**굵게**, *기울임*, `코드` 3가지 강조 문법',
          '- 또는 1. 으로 목록 생성',
          '[텍스트](URL)로 링크, ![](URL)로 이미지 삽입',
        ],
        codeExamples: [
          {
            language: 'markdown',
            title: '마크다운 기본 문법 예시',
            code:
              '# 프로젝트 제목\n\n' +
              '## 소개\n' +
              '이 프로젝트는 **바이브코딩**으로 만든 *포트폴리오* 사이트입니다.\n\n' +
              '## 기술 스택\n' +
              '- React\n' +
              '- TypeScript\n' +
              '- Tailwind CSS\n\n' +
              '## 설치 방법\n' +
              '1. 저장소를 클론합니다.\n' +
              '2. 의존성을 설치합니다.\n' +
              '3. 개발 서버를 실행합니다.\n\n' +
              '## 링크\n' +
              '- [GitHub](https://github.com/username/project)\n' +
              '- [배포 사이트](https://project.example.com)',
          },
        ],
      },
      {
        id: 'day13-md-advanced',
        title: '코드블록, 테이블, 인용문',
        description: '개발자가 자주 사용하는 고급 마크다운 문법',
        content:
          '**코드블록 (Code Block):**\n' +
          '백틱 3개로 감싸서 코드 블록을 만듭니다. 언어를 지정하면 구문 강조(syntax highlighting)가 적용됩니다.\n\n' +
          '**테이블 (Table):**\n' +
          '`|`와 `-`를 사용하여 표를 만듭니다. 정렬도 가능합니다.\n' +
          '- `:---` → 왼쪽 정렬\n' +
          '- `:---:` → 가운데 정렬\n' +
          '- `---:` → 오른쪽 정렬\n\n' +
          '**인용문 (Blockquote):**\n' +
          '`>` 기호로 인용문을 만듭니다. 중첩도 가능합니다.\n\n' +
          '**수평선:**\n' +
          '`---` 또는 `***`로 수평선을 삽입합니다.\n\n' +
          '**체크박스 (Task List):**\n' +
          '- `- [ ] 미완료 항목`\n' +
          '- `- [x] 완료 항목`\n' +
          '- GitHub에서 실제로 클릭 가능한 체크박스로 렌더링됩니다.\n\n' +
          '**팁: 마크다운 미리보기**\n' +
          '- Cursor/VS Code에서 `.md` 파일을 열고 `Ctrl+Shift+V`를 누르면 미리보기를 볼 수 있습니다.\n' +
          '- `Ctrl+K V`를 누르면 에디터 옆에 미리보기가 나란히 표시됩니다.',
        keyPoints: [
          '백틱 3개 + 언어명으로 구문 강조된 코드블록 생성',
          '파이프(|)와 대시(-)로 테이블 생성',
          '> 기호로 인용문, --- 로 수평선',
          'Ctrl+Shift+V로 마크다운 미리보기 확인',
        ],
        codeExamples: [
          {
            language: 'markdown',
            title: '코드블록 작성법',
            code:
              '일반 텍스트 중 `인라인 코드`를 넣을 수 있습니다.\n\n' +
              '```javascript\n' +
              '// 구문 강조가 적용된 코드블록\n' +
              'function greet(name) {\n' +
              '  return `안녕하세요, ${name}님!`;\n' +
              '}\n' +
              '```\n\n' +
              '```bash\n' +
              '# 터미널 명령어도 가능\n' +
              'npm install\n' +
              'npm run dev\n' +
              '```',
          },
          {
            language: 'markdown',
            title: '테이블과 체크박스',
            code:
              '| 도구 | 분류 | 가격 |\n' +
              '|:---|:---:|---:|\n' +
              '| v0.dev | 풀앱빌더 | 무료/유료 |\n' +
              '| Cursor | AI IDE | $20/월 |\n' +
              '| Claude Code | 에이전트 | API 과금 |\n\n' +
              '## 오늘의 할 일\n' +
              '- [x] 마크다운 기본 문법 학습\n' +
              '- [x] 코드블록 연습\n' +
              '- [ ] 테이블 작성 연습\n' +
              '- [ ] AI 프롬프트에 활용',
          },
        ],
      },
      {
        id: 'day13-md-ai-prompt',
        title: 'AI 프롬프트에 마크다운 활용하기',
        description: '마크다운을 활용하여 더 효과적인 AI 프롬프트를 작성하는 방법',
        content:
          '**마크다운은 AI 프롬프트의 가독성과 정확도를 크게 높여줍니다.**\n\n' +
          'AI에게 복잡한 요청을 할 때 마크다운으로 구조화하면 훨씬 정확한 결과를 얻습니다.\n\n' +
          '**활용법 1: 제목으로 섹션 구분**\n' +
          '- `## 목표`, `## 기술 스택`, `## 요구사항` 으로 프롬프트를 구조화\n' +
          '- AI가 각 섹션을 명확히 구분하여 이해합니다.\n\n' +
          '**활용법 2: 목록으로 요구사항 나열**\n' +
          '- 문장으로 나열하면 AI가 누락하기 쉬움\n' +
          '- 목록(`-`)으로 나열하면 하나하나 정확히 반영\n\n' +
          '**활용법 3: 코드블록으로 예시 제공**\n' +
          '- 원하는 코드 스타일을 코드블록으로 보여주면 AI가 그 스타일을 따름\n' +
          '- 기존 코드를 코드블록으로 감싸서 "이 코드를 개선해줘"라고 요청\n\n' +
          '**활용법 4: CLAUDE.md 작성**\n' +
          '- 프로젝트 루트에 `CLAUDE.md` 파일을 작성합니다.\n' +
          '- 프로젝트 설명, 기술 스택, 코딩 규칙을 마크다운으로 정리합니다.\n' +
          '- Claude Code가 이 파일을 읽고 프로젝트 맥락을 이해합니다.\n\n' +
          '**오늘의 과제:**\n' +
          '- 마크다운 문법을 정리한 "치트시트"를 `.md` 파일로 작성하세요.\n' +
          '- 제목, 목록, 코드블록, 테이블을 모두 사용해보세요.',
        keyPoints: [
          '마크다운으로 프롬프트를 구조화하면 AI 응답 정확도 향상',
          '제목으로 섹션 구분, 목록으로 요구사항 나열',
          '코드블록으로 예시를 제공하면 AI가 스타일을 따름',
          'CLAUDE.md 같은 프로젝트 설정 파일도 마크다운 기반',
        ],
        codeExamples: [
          {
            language: 'markdown',
            title: '마크다운으로 구조화한 AI 프롬프트 예시',
            code:
              '# 요청: 대시보드 페이지 생성\n\n' +
              '## 기술 스택\n' +
              '- React + TypeScript\n' +
              '- Tailwind CSS\n' +
              '- Recharts (차트 라이브러리)\n\n' +
              '## 필요한 컴포넌트\n' +
              '1. StatsCard: 통계 요약 카드 (매출, 사용자 수 등)\n' +
              '2. SalesChart: 월별 매출 라인 차트\n' +
              '3. RecentOrders: 최근 주문 테이블\n\n' +
              '## 요구사항\n' +
              '- 반응형 디자인 (모바일 대응)\n' +
              '- 다크모드 지원\n' +
              '- 로딩 스켈레톤 적용\n\n' +
              '## 참고 코드 스타일\n' +
              '```tsx\n' +
              '// 이 스타일로 작성해줘\n' +
              'const Component: React.FC<Props> = ({ data }) => {\n' +
              '  return <div className="p-4">...</div>;\n' +
              '};\n' +
              '```',
          },
        ],
      },
    ],
  },

  /* ──────────────────────────────────────────────
   * Day 14: 2주차 회고
   * ────────────────────────────────────────────── */
  {
    day: 14,
    week: 2,
    title: '2주차 회고',
    description: '2주차 학습을 정리합니다.',
    tasks: ['포트폴리오 완성도 점검', 'Cursor 활용 팁 정리', '3주차 준비'],
    tools: ['메모장'],
    deliverable: '2주차 회고 노트',
    contents: [
      {
        id: 'day14-portfolio-check',
        title: '포트폴리오 완성도 점검',
        description: '제작한 포트폴리오의 완성도를 항목별로 확인합니다',
        content:
          '**2주차에 만든 포트폴리오를 점검해봅시다.**\n\n' +
          '**기능 체크리스트:**\n' +
          '- Hero 섹션에 이름, 소개, CTA 버튼이 잘 표시되는가?\n' +
          '- About 섹션에 기술 스택이 나열되어 있는가?\n' +
          '- Projects 섹션에 프로젝트 카드가 표시되는가?\n' +
          '- Contact 섹션에 연락처 정보가 있는가?\n\n' +
          '**디자인 체크리스트:**\n' +
          '- 전체적인 색상 조합이 통일되어 있는가?\n' +
          '- 폰트 크기가 일관적인가?\n' +
          '- 여백(padding, margin)이 적절한가?\n' +
          '- 시각적으로 깔끔한 인상을 주는가?\n\n' +
          '**반응형 체크리스트:**\n' +
          '- 모바일(375px)에서 깨지지 않고 잘 보이는가?\n' +
          '- 태블릿(768px)에서 레이아웃이 적절한가?\n' +
          '- 데스크톱(1280px)에서 너무 넓어지지 않는가?\n\n' +
          '**개선할 점 기록하기:**\n' +
          '- 아직 미완성인 부분을 목록으로 정리하세요.\n' +
          '- 3주차에 Supabase를 배운 후 연락처 폼에 백엔드를 연결할 수 있습니다.\n' +
          '- 4주차에 GitHub Pages로 실제 배포할 예정입니다.',
        keyPoints: [
          '기능, 디자인, 반응형 3가지 관점에서 점검',
          '미완성 부분을 목록으로 정리하여 추후 개선',
          '3주차에 백엔드(Supabase) 연결 예정',
          '4주차에 GitHub Pages 배포 예정',
        ],
      },
      {
        id: 'day14-cursor-tips',
        title: 'Cursor 활용 팁 정리',
        description: '2주간 사용하면서 알게 된 Cursor 팁을 정리합니다',
        content:
          '**2주간 Cursor를 사용하면서 알게 된 핵심 팁들을 정리합니다.**\n\n' +
          '**생산성을 높이는 팁:**\n' +
          '- `Ctrl+K`에서 코드 범위를 정확히 선택하면 더 좋은 결과\n' +
          '- 프롬프트에 "TypeScript로", "Tailwind CSS를 사용해서" 같은 기술 제약을 명시\n' +
          '- "기존 코드 스타일을 유지하면서" 라는 조건을 추가하면 일관성 유지\n' +
          '- 긴 파일을 수정할 때는 수정할 부분만 선택해서 `Ctrl+K` 사용\n\n' +
          '**실수를 줄이는 팁:**\n' +
          '- AI가 수정한 코드는 반드시 Accept 전에 diff를 확인\n' +
          '- 한 번에 너무 많은 변경을 요청하지 않기\n' +
          '- 중요한 변경 전에 Git commit으로 백업해두기\n' +
          '- AI 제안이 이상하면 Reject 후 프롬프트를 수정하여 재시도\n\n' +
          '**자주 쓰는 프롬프트 패턴:**\n' +
          '- "이 코드에 에러 처리를 추가해줘"\n' +
          '- "이 컴포넌트를 TypeScript로 변환해줘"\n' +
          '- "이 함수에 주석을 추가해줘"\n' +
          '- "이 코드를 더 읽기 쉽게 리팩토링해줘"\n' +
          '- "이 CSS를 Tailwind CSS로 변환해줘"\n\n' +
          '**나만의 팁을 문서로 정리해두면 나중에 큰 도움이 됩니다.**',
        keyPoints: [
          '코드 범위를 정확히 선택하면 AI 응답 품질 향상',
          '기술 스택과 스타일 제약을 프롬프트에 명시',
          'Accept 전에 반드시 diff(변경 내용)를 확인',
          '자주 쓰는 프롬프트 패턴을 문서로 정리',
        ],
        codeExamples: [
          {
            language: 'text',
            title: 'Cursor 자주 쓰는 프롬프트 모음',
            code:
              '[ 코드 생성 ]\n' +
              '  "React + TypeScript + Tailwind로 [기능]을 만들어줘"\n' +
              '  "이 디자인과 비슷한 컴포넌트를 만들어줘"\n\n' +
              '[ 코드 수정 ]\n' +
              '  "이 코드에 loading 상태와 error 상태를 추가해줘"\n' +
              '  "이 함수를 async/await 패턴으로 변경해줘"\n' +
              '  "이 컴포넌트에 props 타입을 정의해줘"\n\n' +
              '[ 코드 이해 ]\n' +
              '  "이 코드가 무슨 일을 하는지 한줄씩 설명해줘"\n' +
              '  "@codebase 이 프로젝트의 데이터 흐름을 설명해줘"\n\n' +
              '[ 디버깅 ]\n' +
              '  "이 에러 메시지를 분석하고 해결 방법을 알려줘"\n' +
              '  "이 코드에서 버그가 있을 수 있는 부분을 찾아줘"',
          },
        ],
      },
      {
        id: 'day14-week2-review',
        title: '2주차 학습 회고 작성',
        description: '2주차에 배운 내용을 정리하고 성장을 확인합니다',
        content:
          '**회고 노트를 작성하는 것은 학습 효과를 2배로 높여줍니다.**\n\n' +
          '**2주차 학습 요약:**\n' +
          '- Day 8: v0.dev로 UI 컴포넌트 생성 (카드, 대시보드)\n' +
          '- Day 9: Cursor 설치 및 기본 단축키 (Ctrl+K, Ctrl+L, Tab)\n' +
          '- Day 10: Cursor로 코드 수정, 리팩토링, 채팅 활용\n' +
          '- Day 11: Composer로 다중 파일 수정, 프로젝트 구조 생성\n' +
          '- Day 12: v0 + Cursor로 포트폴리오 사이트 제작\n' +
          '- Day 13: 마크다운 문법 학습 및 AI 프롬프트 활용\n\n' +
          '**회고 질문 (아래 질문에 답하며 노트를 작성하세요):**\n\n' +
          '1. 이번 주에 가장 인상 깊었던 도구/기능은?\n' +
          '2. v0.dev와 Cursor를 조합하는 워크플로우가 체감이 되었나?\n' +
          '3. Cursor의 Cmd+K, Chat, Composer 중 가장 유용했던 기능은?\n' +
          '4. 포트폴리오를 만들면서 어려웠던 점은?\n' +
          '5. 마크다운이 AI 프롬프트에 왜 유용한지 체감이 되었나?\n' +
          '6. 1주차(Lovable/Bolt)와 비교해서 Cursor의 차이점은 무엇이었나?\n\n' +
          '**3주차 미리보기:**\n' +
          '- Supabase로 백엔드(데이터베이스) 연결\n' +
          '- 인증(로그인) 시스템 구현\n' +
          '- Claude Code 설치 및 기본 사용법\n' +
          '- SaaS 랜딩 페이지 제작\n\n' +
          '**3주차 준비사항:**\n' +
          '- Supabase (supabase.com) 계정을 미리 생성해두세요.\n' +
          '- Node.js가 컴퓨터에 설치되어 있는지 확인하세요.\n' +
          '- Claude Code 사용을 위해 Anthropic API 키 발급을 준비하세요.',
        keyPoints: [
          '회고 노트 작성으로 학습 효과 극대화',
          '2주차 핵심: v0(UI 생성) + Cursor(코드 수정) 조합 워크플로우',
          '3주차에는 Supabase 백엔드와 Claude Code를 배울 예정',
          'Supabase 계정, Node.js, Anthropic API 키 미리 준비',
        ],
      },
    ],
  },
];
