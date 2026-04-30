import type { ProjectData } from '../../types';

export const saasLandingProject: ProjectData = {
  id: 'saas-landing',
  slug: 'saas-landing',
  title: 'SaaS 랜딩페이지 만들기',
  description: 'SaaS 제품의 랜딩페이지. Hero, Features, Pricing, CTA, FAQ 섹션 구성.',
  level: 'beginner',
  duration: '3-4시간',
  techStack: ['React', 'Claude Code', 'TypeScript', 'CSS'],
  outcomes: [
    '랜딩페이지 설계 능력',
    '마케팅 UI 패턴 이해',
    '반응형 디자인',
    'Claude Code 활용',
  ],
  diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 520" font-family="'Noto Sans KR', sans-serif">
  <defs>
    <marker id="saas-arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#0046C8"/>
    </marker>
  </defs>
  <rect x="1" y="1" width="758" height="518" rx="12" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="#111827">SaaS 랜딩페이지 섹션 흐름</text>
  <!-- Hero -->
  <rect x="260" y="50" width="240" height="50" rx="8" fill="#0046C8" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="80" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFFFFF">Hero 섹션</text>
  <line x1="380" y1="100" x2="380" y2="125" stroke="#0046C8" stroke-width="2" marker-end="url(#saas-arrow)"/>
  <!-- Features -->
  <rect x="260" y="130" width="240" height="50" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="160" text-anchor="middle" font-size="14" font-weight="bold" fill="#0046C8">Features 섹션</text>
  <line x1="380" y1="180" x2="380" y2="205" stroke="#0046C8" stroke-width="2" marker-end="url(#saas-arrow)"/>
  <!-- Pricing -->
  <rect x="260" y="210" width="240" height="50" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="240" text-anchor="middle" font-size="14" font-weight="bold" fill="#0046C8">Pricing 섹션</text>
  <line x1="380" y1="260" x2="380" y2="285" stroke="#0046C8" stroke-width="2" marker-end="url(#saas-arrow)"/>
  <!-- FAQ -->
  <rect x="260" y="290" width="240" height="50" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="320" text-anchor="middle" font-size="14" font-weight="bold" fill="#0046C8">FAQ 섹션</text>
  <line x1="380" y1="340" x2="380" y2="365" stroke="#0046C8" stroke-width="2" marker-end="url(#saas-arrow)"/>
  <!-- CTA -->
  <rect x="260" y="370" width="240" height="50" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="400" text-anchor="middle" font-size="14" font-weight="bold" fill="#0046C8">CTA 섹션</text>
  <line x1="380" y1="420" x2="380" y2="445" stroke="#0046C8" stroke-width="2" marker-end="url(#saas-arrow)"/>
  <!-- Footer -->
  <rect x="260" y="450" width="240" height="50" rx="8" fill="#0046C8" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="480" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFFFFF">Footer</text>
  <!-- 좌측 설명 -->
  <text x="80" y="80" text-anchor="middle" font-size="11" fill="#6B7280">헤드라인 + CTA 버튼</text>
  <line x1="145" y1="75" x2="255" y2="75" stroke="#D1D5DB" stroke-width="1" stroke-dasharray="4"/>
  <text x="80" y="160" text-anchor="middle" font-size="11" fill="#6B7280">3열 카드 그리드</text>
  <line x1="140" y1="155" x2="255" y2="155" stroke="#D1D5DB" stroke-width="1" stroke-dasharray="4"/>
  <text x="80" y="240" text-anchor="middle" font-size="11" fill="#6B7280">3단계 가격 비교</text>
  <line x1="140" y1="235" x2="255" y2="235" stroke="#D1D5DB" stroke-width="1" stroke-dasharray="4"/>
  <text x="80" y="320" text-anchor="middle" font-size="11" fill="#6B7280">아코디언 Q&amp;A</text>
  <line x1="130" y1="315" x2="255" y2="315" stroke="#D1D5DB" stroke-width="1" stroke-dasharray="4"/>
  <text x="80" y="400" text-anchor="middle" font-size="11" fill="#6B7280">최종 행동 유도</text>
  <line x1="133" y1="395" x2="255" y2="395" stroke="#D1D5DB" stroke-width="1" stroke-dasharray="4"/>
  <text x="80" y="480" text-anchor="middle" font-size="11" fill="#6B7280">링크 + 저작권</text>
  <line x1="125" y1="475" x2="255" y2="475" stroke="#D1D5DB" stroke-width="1" stroke-dasharray="4"/>
  <!-- 우측 기술 스택 -->
  <text x="680" y="80" text-anchor="middle" font-size="11" fill="#6B7280">React + TS</text>
  <line x1="505" y1="75" x2="635" y2="75" stroke="#D1D5DB" stroke-width="1" stroke-dasharray="4"/>
  <text x="680" y="240" text-anchor="middle" font-size="11" fill="#6B7280">CSS Grid</text>
  <line x1="505" y1="235" x2="645" y2="235" stroke="#D1D5DB" stroke-width="1" stroke-dasharray="4"/>
  <text x="680" y="400" text-anchor="middle" font-size="11" fill="#6B7280">반응형 디자인</text>
  <line x1="505" y1="395" x2="635" y2="395" stroke="#D1D5DB" stroke-width="1" stroke-dasharray="4"/>
</svg>`,
  steps: [
    {
      step: 1,
      title: '프로젝트 초기화',
      description: 'React + TypeScript + Vite 프로젝트를 생성하고 기본 구조를 설정합니다.',
      content: `이 프로젝트에서는 Claude Code를 사용하여 SaaS 제품의 전문적인 랜딩페이지를 만듭니다. 가상의 프로젝트 관리 도구 "FlowDesk"를 위한 랜딩페이지를 구축합니다. 먼저 Vite로 React + TypeScript 프로젝트를 초기화합니다.

**Claude Code 프롬프트:**
"React + TypeScript + Vite로 새 프로젝트를 생성해줘. 프로젝트 이름은 saas-landing이야. 불필요한 기본 파일(App.css의 기본 스타일, assets 폴더)은 정리하고, 깨끗한 상태로 만들어줘."

**예상 결과:**
- saas-landing/ 디렉토리에 Vite 프로젝트가 생성됩니다.
- package.json에 react, react-dom, typescript 의존성이 설치됩니다.
- src/App.tsx가 빈 컴포넌트로 정리됩니다.

**확인 포인트:**
1. npm run dev로 개발 서버가 정상 실행되는지 확인
2. 브라우저에서 빈 페이지가 정상 렌더링되는지 확인
3. TypeScript 컴파일 에러가 없는지 확인

프로젝트 구조를 미리 계획합니다. src/components/ 폴더에 Hero, Features, Pricing, FAQ, CTA, Footer 컴포넌트를 배치하고, App.tsx에서 순서대로 렌더링하는 단순한 구조입니다. 별도의 라우팅은 필요하지 않습니다. 단일 페이지(Single Page)로 구성합니다.`,
      codeExamples: [
        {
          language: 'bash',
          title: 'Vite 프로젝트 생성',
          code: `npm create vite@latest saas-landing -- --template react-ts
cd saas-landing
npm install`,
        },
      ],
      tips: [
        'Vite는 빌드 속도가 빠르고 설정이 간단하여 랜딩페이지에 적합합니다.',
        'Claude Code에 "불필요한 파일 정리"를 요청하면 깔끔한 시작점을 만들어줍니다.',
        '프로젝트 구조를 먼저 설명한 후 코드를 요청하면 일관된 결과를 얻습니다.',
      ],
    },
    {
      step: 2,
      title: 'Hero 섹션 구현',
      description: '방문자의 첫인상을 결정하는 Hero 섹션을 만듭니다.',
      content: `Hero 섹션은 랜딩페이지에서 가장 중요한 영역입니다. 방문자가 3초 이내에 제품의 가치를 이해할 수 있어야 합니다. 헤드라인, 서브 헤드라인, CTA(Call-to-Action) 버튼으로 구성합니다.

**Claude Code 프롬프트:**
"src/components/Hero.tsx를 만들어줘. SaaS 프로젝트 관리 도구의 Hero 섹션이야. 다음 요소가 필요해:
1. 큰 헤드라인: '팀 협업을 한 단계 끌어올리세요'
2. 서브 헤드라인: 제품 가치를 설명하는 1-2줄 텍스트
3. CTA 버튼 2개: '무료로 시작하기' (primary), '데모 보기' (secondary)
4. 배경은 그라데이션, 모던한 SaaS 스타일
5. 가운데 정렬, 충분한 상하 패딩
CSS는 별도 파일이 아니라 App.css에 모아서 관리할 거야."

**예상 결과:**
- Hero.tsx 컴포넌트가 생성됩니다.
- 헤드라인 텍스트가 크고 볼드체로 표시됩니다.
- 2개의 CTA 버튼이 나란히 배치됩니다.
- 그라데이션 배경이 적용됩니다.

**확인 포인트:**
1. 헤드라인이 시각적으로 눈에 띄는지
2. CTA 버튼에 hover 효과가 있는지
3. 텍스트가 가운데 정렬되어 있는지

Hero 섹션의 핵심은 명확한 가치 제안(Value Proposition)입니다. "무엇을 하는 제품인지", "왜 사용해야 하는지"를 한 문장으로 전달해야 합니다. 장황한 설명보다 간결하고 임팩트 있는 카피가 중요합니다.`,
      codeExamples: [
        {
          language: 'tsx',
          title: 'Hero 컴포넌트 구조',
          code: `function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>팀 협업을 한 단계 끌어올리세요</h1>
        <p>설명 텍스트</p>
        <div className="hero-buttons">
          <button className="btn-primary">무료로 시작하기</button>
          <button className="btn-secondary">데모 보기</button>
        </div>
      </div>
    </section>
  );
}`,
        },
      ],
      tips: [
        'Hero 헤드라인은 40px 이상의 폰트 크기를 사용하면 임팩트가 커집니다.',
        'CTA 버튼은 2개까지가 적당합니다. 3개 이상이면 선택 장애를 유발합니다.',
        'primary 버튼은 밝은 색, secondary 버튼은 아웃라인 스타일로 구분하세요.',
      ],
    },
    {
      step: 3,
      title: 'Features 섹션 구현',
      description: '제품의 핵심 기능을 3열 카드 그리드로 소개합니다.',
      content: `Features 섹션은 제품의 핵심 기능 3-6개를 카드 형태로 보여줍니다. 각 카드에는 아이콘(이모지 또는 SVG), 제목, 설명이 포함됩니다. CSS Grid로 3열 레이아웃을 구성하면 깔끔한 정렬이 가능합니다.

**Claude Code 프롬프트:**
"src/components/Features.tsx를 만들어줘. 프로젝트 관리 도구의 기능 소개 섹션이야. 다음 조건:
1. 섹션 제목: '왜 FlowDesk인가요?'
2. 6개 기능 카드를 3열 그리드로 배치
3. 각 카드: 이모지 아이콘 + 제목 + 2줄 설명
4. 기능 목록:
   - 실시간 협업: 팀원들과 실시간으로 작업 현황 공유
   - 스마트 일정 관리: AI 기반 자동 일정 조정
   - 대시보드 분석: 프로젝트 진행률 시각화
   - 자동화 워크플로우: 반복 작업 자동화
   - 통합 메시징: 프로젝트 내 실시간 채팅
   - 보안 & 권한: 역할 기반 접근 제어
5. 카드에 호버 시 살짝 올라오는 효과
6. 모던한 SaaS 스타일, 배경은 연한 회색"

**예상 결과:**
- 6개 카드가 3x2 그리드로 배치됩니다.
- 각 카드에 호버 효과(transform + shadow)가 적용됩니다.
- 섹션 배경이 본문과 구분됩니다.

**확인 포인트:**
1. 6개 카드가 3열로 정렬되는지
2. 호버 시 카드가 자연스럽게 올라오는지
3. 카드 내용이 가독성이 좋은지`,
      codeExamples: [
        {
          language: 'tsx',
          title: 'Features 데이터 구조',
          code: `const features = [
  { icon: '🚀', title: '실시간 협업', desc: '팀원들과 실시간으로 작업 현황을 공유하세요.' },
  { icon: '📅', title: '스마트 일정 관리', desc: 'AI가 최적의 일정을 자동으로 조정합니다.' },
  // ...
];

{features.map((f, i) => (
  <div className="feature-card" key={i}>
    <span className="feature-icon">{f.icon}</span>
    <h3>{f.title}</h3>
    <p>{f.desc}</p>
  </div>
))}`,
        },
      ],
      tips: [
        'features 배열로 데이터를 분리하면 나중에 내용을 쉽게 수정할 수 있습니다.',
        '3열 그리드는 CSS Grid의 grid-template-columns: repeat(3, 1fr)로 간단히 구현됩니다.',
        '카드 호버 효과는 transform: translateY(-4px)과 box-shadow를 조합하면 자연스럽습니다.',
      ],
    },
    {
      step: 4,
      title: 'Pricing 섹션 구현',
      description: '3단계 가격 테이블을 만들어 요금제를 비교합니다.',
      content: `Pricing 섹션은 SaaS 랜딩페이지의 핵심입니다. Basic, Pro, Enterprise 3단계 요금제를 카드로 보여주고, 추천 요금제(Pro)를 시각적으로 강조합니다. 각 요금제에는 가격, 기능 목록, CTA 버튼이 포함됩니다.

**Claude Code 프롬프트:**
"src/components/Pricing.tsx를 만들어줘. SaaS 가격 비교 테이블이야. 다음 조건:
1. 섹션 제목: '심플한 요금제'
2. 3개 요금제 카드를 나란히 배치:
   - Basic: 무료 / 프로젝트 3개, 팀원 5명, 기본 분석
   - Pro: 월 29,000원 / 무제한 프로젝트, 팀원 50명, 고급 분석, 자동화
   - Enterprise: 별도 문의 / 무제한 전체, 전담 지원, SLA, SSO
3. Pro 카드에 '추천' 배지, 카드 크기 약간 크게, 테두리 강조
4. 각 기능 항목 앞에 체크 아이콘
5. 각 카드 하단에 '시작하기' 버튼
6. 월/연간 토글 스위치 (연간 선택 시 20% 할인 표시)"

**예상 결과:**
- 3개 가격 카드가 나란히 배치됩니다.
- Pro 카드가 시각적으로 강조됩니다(크기, 색상, 배지).
- 월/연간 토글이 동작합니다.

**확인 포인트:**
1. Pro 카드가 가운데에서 강조되는지
2. 토글 스위치가 정상 동작하는지
3. 가격 변경 시 자연스러운 전환 효과가 있는지
4. 기능 목록의 체크 아이콘이 정렬되는지

가격 테이블에서 가장 중요한 것은 "비교의 용이성"입니다. 사용자가 한눈에 각 요금제의 차이를 파악할 수 있어야 합니다. 가장 인기 있는 요금제를 시각적으로 강조하고, 업그레이드 동기를 자연스럽게 부여하세요.`,
      codeExamples: [
        {
          language: 'tsx',
          title: '요금제 데이터 구조',
          code: `const plans = [
  {
    name: 'Basic',
    price: 0,
    period: '무료',
    features: ['프로젝트 3개', '팀원 5명', '기본 분석'],
    cta: '무료로 시작',
    popular: false,
  },
  {
    name: 'Pro',
    price: 29000,
    period: '월',
    features: ['무제한 프로젝트', '팀원 50명', '고급 분석', '자동화 워크플로우'],
    cta: 'Pro 시작하기',
    popular: true,
  },
  // ...
];`,
        },
      ],
      tips: [
        '추천 요금제는 가운데에 배치하고 scale(1.05) 정도로 살짝 크게 만드세요.',
        '월/연간 토글은 useState로 간단히 구현할 수 있습니다.',
        '가격 표시 시 toLocaleString()을 사용하면 천단위 콤마가 자동 적용됩니다.',
        'Enterprise 요금제에 "문의하기" 버튼을 넣으면 B2B 리드 확보에 효과적입니다.',
      ],
    },
    {
      step: 5,
      title: 'FAQ 섹션 구현',
      description: '자주 묻는 질문을 아코디언 형태로 구현합니다.',
      content: `FAQ(자주 묻는 질문) 섹션은 잠재 고객의 의문을 해소하고 전환율을 높이는 중요한 역할을 합니다. 아코디언(접고 펼치기) UI로 구현하면 공간을 효율적으로 사용할 수 있습니다. 각 질문을 클릭하면 답변이 부드럽게 펼쳐지는 인터랙션을 구현합니다.

**Claude Code 프롬프트:**
"src/components/FAQ.tsx를 만들어줘. 아코디언 스타일의 FAQ 섹션이야. 다음 조건:
1. 섹션 제목: '자주 묻는 질문'
2. 5개 Q&A 항목:
   - Q: 무료 체험 기간이 있나요? / A: 네, 14일간 Pro 플랜의 모든 기능을 무료로 사용할 수 있습니다.
   - Q: 언제든지 플랜을 변경할 수 있나요? / A: 네, 설정에서 언제든지 업그레이드 또는 다운그레이드할 수 있습니다.
   - Q: 데이터는 안전한가요? / A: 모든 데이터는 AES-256으로 암호화되며, SOC 2 인증을 획득했습니다.
   - Q: 팀원 수에 제한이 있나요? / A: Basic은 5명, Pro는 50명이며, Enterprise는 무제한입니다.
   - Q: 기존 도구와 연동이 가능한가요? / A: Slack, Jira, GitHub, Figma 등 50개 이상의 도구와 연동됩니다.
3. 클릭 시 부드러운 열기/닫기 애니메이션
4. 열린 항목은 + 아이콘이 - 로 변경
5. 한 번에 하나만 열리도록 (다른 항목 클릭 시 이전 항목 닫힘)"

**예상 결과:**
- 5개 FAQ 항목이 목록으로 표시됩니다.
- 클릭 시 답변이 부드럽게 펼쳐집니다.
- 이전에 열린 항목은 자동으로 닫힙니다.

**확인 포인트:**
1. 아코디언 열기/닫기가 부드러운지
2. 아이콘(+/-)이 올바르게 전환되는지
3. 한 번에 하나의 항목만 열리는지`,
      codeExamples: [
        {
          language: 'tsx',
          title: '아코디언 상태 관리',
          code: `const [openIndex, setOpenIndex] = useState<number | null>(null);

const toggle = (index: number) => {
  setOpenIndex(openIndex === index ? null : index);
};

{faqs.map((faq, i) => (
  <div className="faq-item" key={i}>
    <button className="faq-question" onClick={() => toggle(i)}>
      <span>{faq.question}</span>
      <span>{openIndex === i ? '−' : '+'}</span>
    </button>
    {openIndex === i && (
      <div className="faq-answer">{faq.answer}</div>
    )}
  </div>
))}`,
        },
      ],
      tips: [
        'max-height 트랜지션을 사용하면 열기/닫기 애니메이션이 자연스러워집니다.',
        'FAQ 내용은 실제 고객이 자주 묻는 질문을 기반으로 작성하세요.',
        '하나만 열리는 로직은 openIndex 상태 하나로 간단히 구현됩니다.',
        'FAQ 섹션은 SEO에도 도움이 됩니다 (구조화된 데이터로 활용 가능).',
      ],
    },
    {
      step: 6,
      title: 'CTA & Footer 구현',
      description: '최종 행동 유도 섹션과 페이지 하단 Footer를 만듭니다.',
      content: `CTA(Call-to-Action) 섹션은 페이지의 마지막 설득 지점입니다. 모든 정보를 확인한 방문자에게 최종 행동을 유도합니다. 강렬한 배경색과 큰 텍스트로 구성합니다. Footer는 회사 정보, 링크 모음, 저작권 표시를 포함합니다.

**Claude Code 프롬프트 (CTA):**
"src/components/CTA.tsx를 만들어줘. 페이지 하단 CTA 섹션이야:
1. 파란색 그라데이션 배경
2. 큰 텍스트: '지금 바로 시작하세요'
3. 부가 설명: '14일 무료 체험, 신용카드 불필요'
4. 큰 CTA 버튼: '무료 체험 시작하기' (흰색 배경, 파란색 텍스트)"

**Claude Code 프롬프트 (Footer):**
"src/components/Footer.tsx를 만들어줘. 깔끔한 SaaS 스타일 Footer:
1. 4열 레이아웃: 회사 소개 | 제품 링크 | 고객 지원 | 법적 고지
2. 각 열에 4-5개 링크
3. 하단에 저작권 표시: '© 2026 FlowDesk. All rights reserved.'
4. 배경은 진한 남색(#1a1a2e)"

**예상 결과:**
- CTA 섹션이 눈에 띄는 배경색으로 표시됩니다.
- Footer가 4열 레이아웃으로 깔끔하게 정리됩니다.

**확인 포인트:**
1. CTA 버튼이 충분히 크고 클릭 유도력이 있는지
2. Footer 4열이 균등하게 배치되는지
3. Footer 링크에 호버 효과가 있는지`,
      codeExamples: [
        {
          language: 'tsx',
          title: 'CTA 컴포넌트',
          code: `function CTA() {
  return (
    <section className="cta-section">
      <h2>지금 바로 시작하세요</h2>
      <p>14일 무료 체험, 신용카드 불필요</p>
      <button className="cta-button">무료 체험 시작하기</button>
    </section>
  );
}`,
        },
      ],
      tips: [
        'CTA 섹션의 배경색은 페이지의 주요 색상과 동일하게 맞추세요.',
        'Footer는 CSS Grid의 grid-template-columns: repeat(4, 1fr)로 균등 배치합니다.',
        '"신용카드 불필요"같은 문구는 가입 장벽을 낮춰 전환율을 높입니다.',
        'Footer 링크는 실제로 동작하지 않아도 괜찮습니다. href="#"으로 처리하세요.',
      ],
    },
    {
      step: 7,
      title: '반응형 및 애니메이션',
      description: '모바일 대응과 스크롤 애니메이션을 추가합니다.',
      content: `마지막 단계에서는 모바일 반응형 디자인과 스크롤 애니메이션을 적용합니다. 미디어 쿼리로 768px, 480px 브레이크포인트를 설정하고, Intersection Observer API로 스크롤 시 요소가 페이드인되는 효과를 구현합니다.

**Claude Code 프롬프트:**
"App.css에 반응형 디자인과 스크롤 애니메이션을 추가해줘:
1. 반응형 브레이크포인트:
   - 768px 이하: Features와 Pricing 카드를 1열로 변경, Footer 2열로 변경
   - 480px 이하: 전체 패딩 축소, 헤드라인 폰트 크기 축소
2. 스크롤 애니메이션:
   - 각 섹션이 뷰포트에 진입할 때 아래에서 위로 페이드인
   - Intersection Observer API 사용
   - 자연스러운 트랜지션 (0.6s ease-out)
3. 버튼 호버 효과 개선: 살짝 올라오는 효과 + 그림자 강화
4. 스무스 스크롤 적용: html { scroll-behavior: smooth }"

**예상 결과:**
- 모바일에서 카드가 1열로 쌓입니다.
- 스크롤 시 각 섹션이 부드럽게 나타납니다.
- 버튼 호버 시 미세한 애니메이션이 동작합니다.

**확인 포인트:**
1. 브라우저 너비를 줄여 768px, 480px에서 레이아웃이 올바르게 변하는지
2. 스크롤 시 각 섹션이 순차적으로 나타나는지
3. 애니메이션이 끊기지 않고 부드러운지
4. 모바일에서 터치 인터랙션이 자연스러운지

마지막으로 전체 페이지를 처음부터 끝까지 스크롤하며 완성도를 점검합니다. Hero에서 Footer까지 일관된 스타일, 자연스러운 섹션 전환, 반응형 레이아웃이 모두 정상 동작하는지 확인합니다.`,
      codeExamples: [
        {
          language: 'tsx',
          title: 'Intersection Observer 훅',
          code: `import { useEffect, useRef, useState } from 'react';

function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}`,
        },
        {
          language: 'css',
          title: '반응형 미디어 쿼리',
          code: `/* 태블릿 */
@media (max-width: 768px) {
  .features-grid { grid-template-columns: 1fr; }
  .pricing-cards { flex-direction: column; align-items: center; }
  .footer-links { grid-template-columns: repeat(2, 1fr); }
}

/* 모바일 */
@media (max-width: 480px) {
  .hero h1 { font-size: 28px; }
  .section-title { font-size: 24px; }
  .footer-links { grid-template-columns: 1fr; }
}`,
        },
      ],
      tips: [
        'Intersection Observer는 scroll 이벤트보다 성능이 훨씬 좋습니다.',
        '모바일 먼저 디자인(Mobile-First)하면 반응형 CSS가 더 간결해집니다.',
        '애니메이션은 0.6s 이내로 설정하세요. 너무 느리면 답답하게 느껴집니다.',
        'Chrome DevTools의 기기 시뮬레이터로 다양한 화면 크기를 테스트하세요.',
      ],
    },
  ],
  sourceFiles: [
    {
      filename: 'package.json',
      language: 'json',
      code: `{
  "name": "saas-landing",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.0",
    "typescript": "~5.7.0",
    "vite": "^6.0.0"
  }
}`,
    },
    {
      filename: 'vite.config.ts',
      language: 'typescript',
      code: `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});`,
    },
    {
      filename: 'src/App.tsx',
      language: 'tsx',
      code: `import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;`,
    },
    {
      filename: 'src/App.css',
      language: 'css',
      code: `/* ─── 전역 리셋 ─── */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Noto Sans KR', sans-serif;
  color: #1a1a2e;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.app {
  overflow-x: hidden;
}

/* ─── 공용 섹션 ─── */
.section-title {
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 12px;
  color: #1a1a2e;
}

.section-subtitle {
  font-size: 18px;
  text-align: center;
  color: #6b7280;
  margin-bottom: 48px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* ─── 스크롤 애니메이션 ─── */
.fade-in-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-section.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Hero ─── */
.hero {
  background: linear-gradient(135deg, #0046c8 0%, #0066ff 50%, #3399ff 100%);
  color: #ffffff;
  padding: 120px 24px 100px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at 30% 70%,
    rgba(255, 255, 255, 0.06) 0%,
    transparent 50%
  );
  pointer-events: none;
}

.hero-content {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  padding: 6px 16px;
  font-size: 14px;
  margin-bottom: 24px;
  backdrop-filter: blur(4px);
}

.hero h1 {
  font-size: 52px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
}

.hero p {
  font-size: 20px;
  opacity: 0.9;
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: #ffffff;
  color: #0046c8;
  border: none;
  padding: 16px 32px;
  font-size: 17px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 14px 32px;
  font-size: 17px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #ffffff;
}

/* ─── Features ─── */
.features {
  padding: 100px 24px;
  background: #f8f9fc;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}

.feature-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 32px 28px;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 70, 200, 0.08);
  border-color: #c7d4f0;
}

.feature-icon {
  font-size: 36px;
  display: block;
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #1a1a2e;
}

.feature-card p {
  font-size: 15px;
  color: #6b7280;
  line-height: 1.6;
}

/* ─── Pricing ─── */
.pricing {
  padding: 100px 24px;
  background: #ffffff;
}

.pricing-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 48px;
}

.pricing-toggle span {
  font-size: 15px;
  color: #6b7280;
  font-weight: 500;
}

.pricing-toggle span.active {
  color: #0046c8;
  font-weight: 700;
}

.toggle-switch {
  width: 52px;
  height: 28px;
  background: #d1d5db;
  border-radius: 14px;
  position: relative;
  cursor: pointer;
  border: none;
  transition: background 0.3s ease;
}

.toggle-switch.on {
  background: #0046c8;
}

.toggle-switch::after {
  content: '';
  position: absolute;
  width: 22px;
  height: 22px;
  background: #ffffff;
  border-radius: 50%;
  top: 3px;
  left: 3px;
  transition: transform 0.3s ease;
}

.toggle-switch.on::after {
  transform: translateX(24px);
}

.pricing-cards {
  display: flex;
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
  justify-content: center;
  align-items: stretch;
}

.pricing-card {
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  padding: 40px 32px;
  flex: 1;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
}

.pricing-card.popular {
  border-color: #0046c8;
  position: relative;
  transform: scale(1.05);
  box-shadow: 0 16px 48px rgba(0, 70, 200, 0.12);
}

.pricing-card.popular:hover {
  transform: scale(1.05) translateY(-4px);
}

.popular-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #0046c8;
  color: #ffffff;
  padding: 4px 20px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 700;
}

.pricing-card h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #1a1a2e;
}

.pricing-price {
  margin-bottom: 24px;
}

.pricing-price .amount {
  font-size: 42px;
  font-weight: 800;
  color: #0046c8;
}

.pricing-price .period {
  font-size: 15px;
  color: #9ca3af;
  margin-left: 4px;
}

.pricing-price .original {
  text-decoration: line-through;
  color: #d1d5db;
  font-size: 18px;
  margin-right: 8px;
}

.pricing-features {
  list-style: none;
  margin-bottom: 32px;
  flex: 1;
}

.pricing-features li {
  padding: 8px 0;
  font-size: 15px;
  color: #4b5563;
  display: flex;
  align-items: center;
  gap: 10px;
}

.pricing-features li::before {
  content: '\\2713';
  color: #0046c8;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}

.pricing-btn {
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid #0046c8;
  background: transparent;
  color: #0046c8;
}

.pricing-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 70, 200, 0.15);
}

.pricing-btn.primary {
  background: #0046c8;
  color: #ffffff;
}

.pricing-btn.primary:hover {
  background: #0038a6;
}

/* ─── FAQ ─── */
.faq {
  padding: 100px 24px;
  background: #f8f9fc;
}

.faq-list {
  max-width: 720px;
  margin: 0 auto;
}

.faq-item {
  background: #ffffff;
  border-radius: 12px;
  margin-bottom: 12px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.faq-item.open {
  border-color: #c7d4f0;
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a2e;
  text-align: left;
  transition: color 0.2s ease;
}

.faq-question:hover {
  color: #0046c8;
}

.faq-icon {
  font-size: 20px;
  font-weight: 300;
  color: #0046c8;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  margin-left: 16px;
}

.faq-icon.open {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.faq-answer.open {
  max-height: 200px;
}

.faq-answer-inner {
  padding: 0 24px 20px;
  font-size: 15px;
  color: #6b7280;
  line-height: 1.7;
}

/* ─── CTA ─── */
.cta-section {
  padding: 100px 24px;
  background: linear-gradient(135deg, #0046c8 0%, #0066ff 50%, #3399ff 100%);
  text-align: center;
  color: #ffffff;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at 70% 30%,
    rgba(255, 255, 255, 0.05) 0%,
    transparent 50%
  );
  pointer-events: none;
}

.cta-content {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.cta-section h2 {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 16px;
}

.cta-section p {
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 36px;
}

.cta-button {
  background: #ffffff;
  color: #0046c8;
  border: none;
  padding: 18px 48px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

/* ─── Footer ─── */
.footer {
  background: #1a1a2e;
  color: #ffffff;
  padding: 64px 24px 32px;
}

.footer-content {
  max-width: 1100px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 48px;
}

.footer-brand h3 {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 12px;
  color: #ffffff;
}

.footer-brand p {
  font-size: 14px;
  color: #9ca3af;
  line-height: 1.6;
  max-width: 280px;
}

.footer-column h4 {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #ffffff;
}

.footer-column ul {
  list-style: none;
}

.footer-column li {
  margin-bottom: 10px;
}

.footer-column a {
  color: #9ca3af;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
}

.footer-column a:hover {
  color: #ffffff;
}

.footer-bottom {
  border-top: 1px solid #2d2d44;
  padding-top: 24px;
  text-align: center;
  font-size: 13px;
  color: #6b7280;
}

/* ─── 반응형: 태블릿 ─── */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 17px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    max-width: 480px;
  }

  .pricing-cards {
    flex-direction: column;
    align-items: center;
  }

  .pricing-card {
    max-width: 100%;
    width: 100%;
  }

  .pricing-card.popular {
    transform: none;
  }

  .pricing-card.popular:hover {
    transform: translateY(-4px);
  }

  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-title {
    font-size: 28px;
  }

  .cta-section h2 {
    font-size: 30px;
  }
}

/* ─── 반응형: 모바일 ─── */
@media (max-width: 480px) {
  .hero {
    padding: 80px 16px 64px;
  }

  .hero h1 {
    font-size: 28px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 280px;
    text-align: center;
  }

  .section-title {
    font-size: 24px;
  }

  .section-subtitle {
    font-size: 15px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }

  .cta-section h2 {
    font-size: 24px;
  }

  .cta-button {
    padding: 16px 36px;
    font-size: 16px;
  }
}`,
    },
    {
      filename: 'src/components/Hero.tsx',
      language: 'tsx',
      code: `function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">
          \u2728 2026년 최고의 프로젝트 관리 도구
        </span>
        <h1>
          팀 협업을
          <br />
          한 단계 끌어올리세요
        </h1>
        <p>
          FlowDesk는 프로젝트 계획부터 실행까지, 팀의 모든 워크플로우를
          <br />
          하나의 플랫폼에서 관리할 수 있도록 설계되었습니다.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">무료로 시작하기</button>
          <button className="btn-secondary">데모 보기 \u2192</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;`,
    },
    {
      filename: 'src/components/Features.tsx',
      language: 'tsx',
      code: `import { useEffect, useRef, useState } from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '\uD83D\uDE80',
    title: '실시간 협업',
    description:
      '팀원들과 실시간으로 작업 현황을 공유하고, 변경사항을 즉시 반영하세요.',
  },
  {
    icon: '\uD83D\uDCC5',
    title: '스마트 일정 관리',
    description:
      'AI가 팀원의 업무량을 분석하여 최적의 일정을 자동으로 조정합니다.',
  },
  {
    icon: '\uD83D\uDCCA',
    title: '대시보드 분석',
    description:
      '프로젝트 진행률, 병목 구간, 팀 생산성을 한눈에 파악할 수 있습니다.',
  },
  {
    icon: '\u26A1',
    title: '자동화 워크플로우',
    description:
      '반복적인 작업을 자동화하고, 알림과 승인 프로세스를 간소화하세요.',
  },
  {
    icon: '\uD83D\uDCAC',
    title: '통합 메시징',
    description:
      '프로젝트 내에서 바로 대화하세요. 별도의 메신저가 필요 없습니다.',
  },
  {
    icon: '\uD83D\uDD12',
    title: '보안 & 권한',
    description:
      '역할 기반 접근 제어로 민감한 데이터를 안전하게 보호합니다.',
  },
];

function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={\`features fade-in-section\${isVisible ? ' visible' : ''}\`}
      ref={sectionRef}
    >
      <h2 className="section-title">왜 FlowDesk인가요?</h2>
      <p className="section-subtitle">
        복잡한 프로젝트도 심플하게. FlowDesk가 팀의 생산성을 높여드립니다.
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;`,
    },
    {
      filename: 'src/components/Pricing.tsx',
      language: 'tsx',
      code: `import { useEffect, useRef, useState } from 'react';

interface Plan {
  name: string;
  price: number;
  originalPrice?: number;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

const plans: Plan[] = [
  {
    name: 'Basic',
    price: 0,
    period: '무료',
    description: '소규모 팀을 위한 시작 플랜',
    features: [
      '프로젝트 3개',
      '팀원 5명',
      '기본 분석 대시보드',
      '이메일 지원',
      '1GB 저장공간',
    ],
    cta: '무료로 시작',
    popular: false,
  },
  {
    name: 'Pro',
    price: 29000,
    originalPrice: 36000,
    period: '월',
    description: '성장하는 팀을 위한 핵심 플랜',
    features: [
      '무제한 프로젝트',
      '팀원 50명',
      '고급 분석 & 리포트',
      '자동화 워크플로우',
      '우선 지원',
      '10GB 저장공간',
    ],
    cta: 'Pro 시작하기',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: -1,
    period: '별도 문의',
    description: '대규모 조직을 위한 맞춤 플랜',
    features: [
      '무제한 전체 기능',
      '무제한 팀원',
      '전담 매니저 배정',
      'SLA 99.9% 보장',
      'SSO & SAML 인증',
      '무제한 저장공간',
      '맞춤 교육',
    ],
    cta: '문의하기',
    popular: false,
  },
];

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getPrice = (plan: Plan) => {
    if (plan.price === 0) return '무료';
    if (plan.price === -1) return '별도 문의';
    const price = isAnnual
      ? Math.round(plan.price * 0.8)
      : plan.price;
    return price.toLocaleString('ko-KR');
  };

  return (
    <section
      className={\`pricing fade-in-section\${isVisible ? ' visible' : ''}\`}
      ref={sectionRef}
    >
      <h2 className="section-title">심플한 요금제</h2>
      <p className="section-subtitle">
        팀 규모에 맞는 요금제를 선택하세요. 언제든 변경할 수 있습니다.
      </p>

      <div className="pricing-toggle">
        <span className={!isAnnual ? 'active' : ''}>월간</span>
        <button
          className={\`toggle-switch\${isAnnual ? ' on' : ''}\`}
          onClick={() => setIsAnnual(!isAnnual)}
          aria-label="연간/월간 토글"
        />
        <span className={isAnnual ? 'active' : ''}>
          연간 <strong style={{ color: '#0046c8' }}>(20% 할인)</strong>
        </span>
      </div>

      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div
            className={\`pricing-card\${plan.popular ? ' popular' : ''}\`}
            key={index}
          >
            {plan.popular && <span className="popular-badge">추천</span>}
            <h3>{plan.name}</h3>
            <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 16 }}>
              {plan.description}
            </p>
            <div className="pricing-price">
              {plan.price > 0 && isAnnual && plan.originalPrice && (
                <span className="original">
                  {plan.price.toLocaleString('ko-KR')}
                </span>
              )}
              <span className="amount">
                {plan.price > 0 ? '\u20A9' : ''}
                {getPrice(plan)}
              </span>
              {plan.price > 0 && (
                <span className="period">
                  /{isAnnual ? '월 (연간결제)' : plan.period}
                </span>
              )}
            </div>
            <ul className="pricing-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button
              className={\`pricing-btn\${plan.popular ? ' primary' : ''}\`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;`,
    },
    {
      filename: 'src/components/FAQ.tsx',
      language: 'tsx',
      code: `import { useEffect, useRef, useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '무료 체험 기간이 있나요?',
    answer:
      '네, 14일간 Pro 플랜의 모든 기능을 무료로 사용할 수 있습니다. 체험 기간 중에는 신용카드 등록이 필요 없으며, 기간 종료 후 자동으로 Basic 플랜으로 전환됩니다.',
  },
  {
    question: '언제든지 플랜을 변경할 수 있나요?',
    answer:
      '네, 설정 페이지에서 언제든지 업그레이드 또는 다운그레이드할 수 있습니다. 업그레이드 시 즉시 적용되며, 다운그레이드는 현재 결제 주기가 끝난 후 적용됩니다.',
  },
  {
    question: '데이터는 안전한가요?',
    answer:
      '모든 데이터는 AES-256으로 암호화되며, SOC 2 Type II 인증을 획득했습니다. 데이터센터는 한국(서울)과 일본(도쿄)에 위치하며, 매일 자동 백업이 수행됩니다.',
  },
  {
    question: '팀원 수에 제한이 있나요?',
    answer:
      'Basic 플랜은 5명, Pro 플랜은 50명까지 지원하며, Enterprise 플랜은 무제한입니다. 추가 팀원이 필요한 경우 언제든 플랜을 업그레이드하거나 별도 문의해 주세요.',
  },
  {
    question: '기존 도구와 연동이 가능한가요?',
    answer:
      'Slack, Jira, GitHub, Figma, Google Drive 등 50개 이상의 도구와 연동됩니다. REST API와 Webhook도 제공하므로 커스텀 연동도 가능합니다.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={\`faq fade-in-section\${isVisible ? ' visible' : ''}\`}
      ref={sectionRef}
    >
      <h2 className="section-title">자주 묻는 질문</h2>
      <p className="section-subtitle">
        FlowDesk에 대해 궁금한 점이 있으신가요?
      </p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={\`faq-item\${openIndex === index ? ' open' : ''}\`}
            key={index}
          >
            <button
              className="faq-question"
              onClick={() => toggle(index)}
            >
              <span>{faq.question}</span>
              <span
                className={\`faq-icon\${openIndex === index ? ' open' : ''}\`}
              >
                +
              </span>
            </button>
            <div
              className={\`faq-answer\${openIndex === index ? ' open' : ''}\`}
            >
              <div className="faq-answer-inner">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;`,
    },
    {
      filename: 'src/components/CTA.tsx',
      language: 'tsx',
      code: `import { useEffect, useRef, useState } from 'react';

function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={\`cta-section fade-in-section\${isVisible ? ' visible' : ''}\`}
      ref={sectionRef}
    >
      <div className="cta-content">
        <h2>지금 바로 시작하세요</h2>
        <p>
          14일 무료 체험, 신용카드 불필요.
          <br />
          5분이면 팀 전체가 사용할 수 있습니다.
        </p>
        <button className="cta-button">무료 체험 시작하기</button>
      </div>
    </section>
  );
}

export default CTA;`,
    },
    {
      filename: 'src/components/Footer.tsx',
      language: 'tsx',
      code: `function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>FlowDesk</h3>
            <p>
              팀 협업을 한 단계 끌어올리는 올인원 프로젝트 관리 플랫폼.
              지금 시작하세요.
            </p>
          </div>
          <div className="footer-column">
            <h4>제품</h4>
            <ul>
              <li><a href="#">기능 소개</a></li>
              <li><a href="#">요금제</a></li>
              <li><a href="#">연동 서비스</a></li>
              <li><a href="#">업데이트 로그</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>고객 지원</h4>
            <ul>
              <li><a href="#">도움말 센터</a></li>
              <li><a href="#">문의하기</a></li>
              <li><a href="#">커뮤니티</a></li>
              <li><a href="#">API 문서</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>회사</h4>
            <ul>
              <li><a href="#">회사 소개</a></li>
              <li><a href="#">채용</a></li>
              <li><a href="#">개인정보처리방침</a></li>
              <li><a href="#">이용약관</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 FlowDesk. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;`,
    },
  ],
};

