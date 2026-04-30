import type { ProjectData } from '../../types';

export const portfolioProject: ProjectData = {
  id: 'portfolio',
  slug: 'portfolio',
  title: '포트폴리오 사이트 만들기',
  description: '개인 포트폴리오 웹사이트. Hero, About, Projects, Contact 섹션 구성.',
  level: 'beginner',
  duration: '3-4시간',
  techStack: ['React', 'Claude Code', 'TypeScript', 'CSS'],
  outcomes: ['반응형 웹 디자인', '컴포넌트 기반 레이아웃', 'CSS 스타일링 능력', 'Claude Code 활용 능력'],
  diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 520" width="760" height="520" font-family="'Noto Sans KR', sans-serif">
  <defs>
    <marker id="pf-arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#0046C8"/>
    </marker>
  </defs>
  <rect x="1" y="1" width="758" height="518" rx="12" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="2"/>
  <text x="380" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="#111827">포트폴리오 사이트 페이지 구조</text>
  <!-- Header -->
  <rect x="240" y="50" width="280" height="44" rx="8" fill="#0046C8" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="78" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFFFFF">Header (Navigation)</text>
  <!-- Arrow -->
  <line x1="380" y1="94" x2="380" y2="114" stroke="#0046C8" stroke-width="2" marker-end="url(#pf-arrow)"/>
  <!-- Hero -->
  <rect x="240" y="118" width="280" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="146" text-anchor="middle" font-size="14" font-weight="bold" fill="#0046C8">Hero 섹션</text>
  <!-- Arrow -->
  <line x1="380" y1="162" x2="380" y2="182" stroke="#0046C8" stroke-width="2" marker-end="url(#pf-arrow)"/>
  <!-- About -->
  <rect x="240" y="186" width="280" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="214" text-anchor="middle" font-size="14" font-weight="bold" fill="#0046C8">About 섹션</text>
  <!-- Arrow -->
  <line x1="380" y1="230" x2="380" y2="250" stroke="#0046C8" stroke-width="2" marker-end="url(#pf-arrow)"/>
  <!-- Skills -->
  <rect x="240" y="254" width="280" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="282" text-anchor="middle" font-size="14" font-weight="bold" fill="#0046C8">Skills 섹션</text>
  <!-- Arrow -->
  <line x1="380" y1="298" x2="380" y2="318" stroke="#0046C8" stroke-width="2" marker-end="url(#pf-arrow)"/>
  <!-- Projects -->
  <rect x="240" y="322" width="280" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="350" text-anchor="middle" font-size="14" font-weight="bold" fill="#0046C8">Projects 섹션</text>
  <!-- Arrow -->
  <line x1="380" y1="366" x2="380" y2="386" stroke="#0046C8" stroke-width="2" marker-end="url(#pf-arrow)"/>
  <!-- Contact -->
  <rect x="240" y="390" width="280" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="418" text-anchor="middle" font-size="14" font-weight="bold" fill="#0046C8">Contact 섹션</text>
  <!-- Arrow -->
  <line x1="380" y1="434" x2="380" y2="454" stroke="#0046C8" stroke-width="2" marker-end="url(#pf-arrow)"/>
  <!-- Footer -->
  <rect x="240" y="458" width="280" height="44" rx="8" fill="#0046C8" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="486" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFFFFF">Footer</text>
  <!-- Side labels -->
  <text x="140" y="78" text-anchor="middle" font-size="11" fill="#6B7280">네비게이션 바</text>
  <text x="140" y="146" text-anchor="middle" font-size="11" fill="#6B7280">이름 / 직함 / CTA</text>
  <text x="140" y="214" text-anchor="middle" font-size="11" fill="#6B7280">자기소개</text>
  <text x="140" y="282" text-anchor="middle" font-size="11" fill="#6B7280">기술 스택 그리드</text>
  <text x="140" y="350" text-anchor="middle" font-size="11" fill="#6B7280">프로젝트 카드</text>
  <text x="140" y="418" text-anchor="middle" font-size="11" fill="#6B7280">연락처 폼</text>
  <text x="140" y="486" text-anchor="middle" font-size="11" fill="#6B7280">저작권 / 링크</text>
  <!-- Right side: Component filenames -->
  <text x="620" y="78" text-anchor="middle" font-size="11" fill="#9CA3AF">Header.tsx</text>
  <text x="620" y="146" text-anchor="middle" font-size="11" fill="#9CA3AF">Hero.tsx</text>
  <text x="620" y="214" text-anchor="middle" font-size="11" fill="#9CA3AF">About.tsx</text>
  <text x="620" y="282" text-anchor="middle" font-size="11" fill="#9CA3AF">Skills.tsx</text>
  <text x="620" y="350" text-anchor="middle" font-size="11" fill="#9CA3AF">Projects.tsx</text>
  <text x="620" y="418" text-anchor="middle" font-size="11" fill="#9CA3AF">Contact.tsx</text>
  <text x="620" y="486" text-anchor="middle" font-size="11" fill="#9CA3AF">Footer.tsx</text>
</svg>`,
  steps: [
    {
      step: 1,
      title: '프로젝트 초기화',
      description: 'Claude Code로 React + TypeScript + Vite 프로젝트를 생성합니다.',
      content: `이 단계에서는 Claude Code를 사용하여 포트폴리오 프로젝트의 기본 골격을 만듭니다. Vite는 매우 빠른 빌드 도구로, React + TypeScript 조합에 최적화되어 있습니다. Claude Code는 터미널에서 직접 AI와 대화하며 코드를 생성하는 방식이므로, 프로젝트 생성부터 모든 과정을 자연어로 요청할 수 있습니다.

**Claude Code 프롬프트:**
\`\`\`
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio && npm install
\`\`\`

프로젝트가 생성되면 불필요한 기본 파일을 정리합니다. Vite가 만들어주는 기본 Counter 예제 코드와 CSS를 제거하고, 포트폴리오에 맞는 깨끗한 상태로 만들어야 합니다.

**Claude Code 프롬프트:**
\`\`\`
기본 App.tsx의 카운터 예제 코드를 모두 제거하고, 빈 레이아웃으로 만들어줘.
App.css와 index.css의 기본 스타일도 모두 제거해줘.
assets 폴더의 기본 이미지도 삭제해줘.
\`\`\`

**예상 결과:**
- \`my-portfolio/\` 디렉토리가 생성됩니다.
- \`src/App.tsx\`는 빈 레이아웃 상태입니다.
- \`npm run dev\`로 개발 서버를 실행하면 빈 페이지가 나타납니다.

**확인 포인트:**
1. \`npm run dev\` 실행 시 에러 없이 서버가 시작되는가?
2. 브라우저에서 \`http://localhost:5173\`에 접속 가능한가?
3. TypeScript 에러가 없는가?`,
      codeExamples: [
        {
          language: 'bash',
          title: 'Vite 프로젝트 생성 명령어',
          code: `npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
npm install
npm run dev`
        }
      ],
      tips: [
        'Claude Code에서 "npm create vite@latest" 명령을 직접 실행할 수 있습니다',
        'TypeScript 템플릿을 사용하면 코드 자동완성과 에러 감지가 더 좋아집니다',
        '프로젝트 생성 후 반드시 npm install을 실행하여 의존성을 설치하세요'
      ]
    },
    {
      step: 2,
      title: '레이아웃 구조 설계',
      description: 'Header/Navbar와 전체 섹션 레이아웃을 설계합니다.',
      content: `포트폴리오 사이트의 전체 구조를 잡는 단계입니다. 단일 페이지(SPA) 포트폴리오로 설계하며, 상단에 고정된 네비게이션 바가 있고 아래로 스크롤하면 각 섹션이 순서대로 나타나는 구조입니다.

**페이지 구조:**
1. Header (고정 네비게이션)
2. Hero (메인 비주얼)
3. About (자기소개)
4. Skills (기술 스택)
5. Projects (프로젝트 목록)
6. Contact (연락처)
7. Footer (하단 정보)

**Claude Code 프롬프트:**
\`\`\`
src/components/ 폴더를 만들고 다음 컴포넌트 파일들을 생성해줘:
- Header.tsx: 네비게이션 바 (이름 로고 + 메뉴 링크)
- Hero.tsx: 히어로 섹션
- About.tsx: 자기소개 섹션
- Skills.tsx: 기술 스택 섹션
- Projects.tsx: 프로젝트 섹션
- Contact.tsx: 연락처 섹션
- Footer.tsx: 푸터

각 컴포넌트는 일단 섹션 이름만 표시하는 간단한 placeholder로 만들어줘.
App.tsx에서 모든 컴포넌트를 순서대로 import하여 렌더링해줘.
\`\`\`

**예상 결과:**
- 7개 컴포넌트 파일이 \`src/components/\`에 생성됩니다.
- App.tsx에서 모든 컴포넌트가 순서대로 렌더링됩니다.
- 브라우저에서 각 섹션의 이름이 순서대로 표시됩니다.

**확인 포인트:**
1. \`src/components/\` 디렉토리에 7개 파일이 있는가?
2. App.tsx에서 모든 컴포넌트를 올바르게 import하고 있는가?
3. 브라우저에서 7개 섹션이 위에서 아래로 순서대로 보이는가?`,
      codeExamples: [
        {
          language: 'tsx',
          title: 'App.tsx 기본 레이아웃',
          code: `import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App`
        }
      ],
      tips: [
        'placeholder 컴포넌트를 먼저 만들면 전체 구조를 빠르게 파악할 수 있습니다',
        '각 섹션에 고유한 id를 부여하면 네비게이션 링크에서 스크롤 이동이 가능합니다',
        'CSS 파일도 컴포넌트별로 분리하면 관리가 편리합니다'
      ]
    },
    {
      step: 3,
      title: 'Hero 섹션 구현',
      description: 'Hero 컴포넌트에 이름, 직함, CTA 버튼을 구현합니다.',
      content: `Hero 섹션은 포트폴리오 사이트에서 가장 먼저 보이는 영역으로, 방문자에게 강렬한 첫인상을 줘야 합니다. 이름, 직함(또는 한 줄 소개), 그리고 행동 유도 버튼(CTA: Call To Action)을 배치합니다. 배경은 깔끔한 그라데이션이나 단색을 사용하고, 텍스트는 중앙 정렬로 배치합니다.

**Claude Code 프롬프트:**
\`\`\`
Hero.tsx를 다음과 같이 구현해줘:
- 전체 화면 높이(100vh)의 히어로 섹션
- 중앙에 이름 "홍길동" (큰 글씨)
- 아래에 직함 "프론트엔드 개발자" (중간 글씨)
- 짧은 소개글 "사용자 경험을 중시하는 웹 개발자입니다"
- "프로젝트 보기"와 "연락하기" 두 개의 CTA 버튼
- 버튼 클릭 시 해당 섹션으로 부드럽게 스크롤
- 배경은 진한 남색(#1a1a2e)에서 파란색(#0046C8)으로 그라데이션
- 텍스트는 흰색
- 부드러운 등장 애니메이션 (fade-in)
\`\`\`

**스크롤 이동 구현 원리:**
CTA 버튼 클릭 시 \`document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })\`를 사용하면 해당 섹션으로 부드럽게 스크롤됩니다. 이를 위해 각 섹션 컴포넌트의 최외곽 요소에 \`id\` 속성을 부여해야 합니다.

**예상 결과:**
- 브라우저 전체 화면에 그라데이션 배경의 Hero가 표시됩니다.
- 이름, 직함, 소개글이 중앙에 정렬되어 보입니다.
- 두 버튼이 나란히 배치되며, 클릭하면 해당 섹션으로 이동합니다.

**확인 포인트:**
1. Hero가 화면 전체(100vh)를 차지하는가?
2. 텍스트가 수직/수평 중앙에 정렬되는가?
3. 버튼 클릭 시 해당 섹션으로 스크롤되는가?
4. 그라데이션 배경이 정상적으로 보이는가?`,
      codeExamples: [
        {
          language: 'tsx',
          title: '부드러운 스크롤 함수',
          code: `const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth'
  });
};`
        }
      ],
      tips: [
        '100vh를 사용하면 디바이스 크기에 관계없이 전체 화면을 채울 수 있습니다',
        'CTA 버튼은 2개가 적당합니다 (주요 행동 + 보조 행동)',
        'scrollIntoView의 behavior: "smooth"는 대부분의 모던 브라우저에서 지원됩니다',
        '그라데이션은 linear-gradient를 사용하면 간단하게 구현할 수 있습니다'
      ]
    },
    {
      step: 4,
      title: 'About & Skills 섹션',
      description: '자기소개와 기술 스택 그리드를 구현합니다.',
      content: `About 섹션에서는 자기소개 텍스트를 배치하고, Skills 섹션에서는 보유한 기술 스택을 시각적인 그리드로 표현합니다. 두 섹션 모두 깔끔한 카드 형태의 디자인을 사용합니다.

**Claude Code 프롬프트 (About):**
\`\`\`
About.tsx를 다음과 같이 구현해줘:
- 섹션 id는 "about"
- "About Me" 제목
- 왼쪽에 프로필 이미지 영역 (placeholder 원형 이미지)
- 오른쪽에 자기소개 텍스트 (3-4문장)
- 2단 레이아웃 (flexbox 사용)
- 섹션 배경은 흰색, 충분한 상하 패딩
\`\`\`

**Claude Code 프롬프트 (Skills):**
\`\`\`
Skills.tsx를 다음과 같이 구현해줘:
- 섹션 id는 "skills"
- "Skills" 제목
- 기술 스택을 카드 형태의 그리드로 표시
- 각 카드에 기술 이름과 숙련도 바(progress bar) 표시
- 기술 목록: React, TypeScript, JavaScript, HTML/CSS, Node.js, Git
- 숙련도는 퍼센트로 표시 (예: 90%, 85%, ...)
- 3열 그리드 레이아웃 (CSS Grid 사용)
- 카드에 hover 시 살짝 떠오르는 효과 (box-shadow + transform)
- 배경색은 연한 회색 (#f8f9fa)
\`\`\`

**예상 결과:**
- About 섹션: 프로필 이미지와 소개글이 나란히 배치됩니다.
- Skills 섹션: 6개의 기술 카드가 3열로 정렬되며, hover 시 시각 효과가 나타납니다.

**확인 포인트:**
1. About의 2단 레이아웃이 올바르게 표시되는가?
2. Skills 카드가 3열 그리드로 정렬되는가?
3. hover 효과가 부드럽게 작동하는가?
4. 숙련도 바가 정확한 비율로 표시되는가?`,
      codeExamples: [
        {
          language: 'css',
          title: 'Skills 카드 hover 효과',
          code: `.skill-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}`
        }
      ],
      tips: [
        'CSS Grid의 grid-template-columns: repeat(3, 1fr)을 사용하면 3열 그리드를 쉽게 만들 수 있습니다',
        'transition 속성을 사용하면 hover 효과가 부드럽게 전환됩니다',
        '프로필 이미지 대신 이니셜이나 아이콘을 사용해도 좋습니다',
        'progress bar는 width를 퍼센트로 설정하고 배경색을 채우는 방식으로 구현합니다'
      ]
    },
    {
      step: 5,
      title: 'Projects 섹션',
      description: '프로젝트 카드에 이미지와 링크를 구현합니다.',
      content: `Projects 섹션은 포트폴리오의 핵심입니다. 각 프로젝트를 카드 형태로 보여주며, 프로젝트 이미지(스크린샷), 제목, 설명, 사용 기술 태그, 그리고 GitHub/데모 링크를 포함합니다. 데이터를 배열로 관리하여 카드를 동적으로 렌더링하는 방식을 사용합니다.

**Claude Code 프롬프트:**
\`\`\`
Projects.tsx를 다음과 같이 구현해줘:
- 섹션 id는 "projects"
- "Projects" 제목
- 프로젝트 데이터를 배열로 관리 (최소 4개 프로젝트)
- 각 프로젝트 카드 구성:
  - 상단: 프로젝트 이미지 (placeholder 이미지, 회색 배경)
  - 중앙: 프로젝트 제목 + 설명 (2-3줄)
  - 하단: 기술 태그 (React, TypeScript 등 작은 뱃지)
  - 버튼: "GitHub"과 "Live Demo" 링크 버튼
- 2열 그리드 레이아웃
- 카드에 그림자(box-shadow)와 hover 효과
- 기술 태그는 파란색 배경의 작은 뱃지로 표시
\`\`\`

**데이터 구조 설계:**
프로젝트 데이터는 컴포넌트 외부에 배열로 선언합니다. 이렇게 하면 나중에 프로젝트를 추가하거나 수정할 때 데이터만 변경하면 됩니다. 이것이 "데이터 기반 렌더링"의 핵심 개념입니다.

**예상 결과:**
- 4개의 프로젝트 카드가 2열로 정렬됩니다.
- 각 카드에 이미지, 제목, 설명, 기술 태그, 링크 버튼이 표시됩니다.
- 카드 hover 시 떠오르는 효과가 있습니다.

**확인 포인트:**
1. 프로젝트 카드가 2열로 정렬되는가?
2. 기술 태그가 뱃지 형태로 표시되는가?
3. GitHub/Demo 버튼이 올바르게 렌더링되는가?
4. 카드 hover 효과가 부드러운가?`,
      codeExamples: [
        {
          language: 'tsx',
          title: '프로젝트 데이터 배열 구조',
          code: `interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: 'Todo 앱',
    description: 'React로 만든 할 일 관리 앱입니다.',
    image: '/placeholder.png',
    tags: ['React', 'TypeScript', 'CSS'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com'
  },
  // ... 더 많은 프로젝트
];`
        }
      ],
      tips: [
        '프로젝트 데이터를 배열로 분리하면 유지보수가 쉬워집니다',
        'map() 함수로 배열을 순회하며 카드를 렌더링하세요',
        '이미지가 없을 때를 위한 placeholder를 항상 준비하세요',
        'target="_blank"와 rel="noopener noreferrer"를 외부 링크에 반드시 추가하세요'
      ]
    },
    {
      step: 6,
      title: 'Contact & Footer',
      description: '연락처 폼과 하단 Footer를 구현합니다.',
      content: `Contact 섹션은 방문자가 직접 메시지를 보낼 수 있는 폼을 제공합니다. 이름, 이메일, 메시지 입력 필드와 전송 버튼으로 구성됩니다. Footer에는 저작권 정보와 소셜 미디어 링크를 배치합니다.

**Claude Code 프롬프트 (Contact):**
\`\`\`
Contact.tsx를 다음과 같이 구현해줘:
- 섹션 id는 "contact"
- "Contact" 제목 + "프로젝트에 관심이 있으시다면 연락 주세요!" 부제
- 폼 필드: 이름(text), 이메일(email), 메시지(textarea)
- "메시지 보내기" 전송 버튼
- 폼 제출 시 alert로 확인 메시지 표시 (실제 백엔드 연동 없이)
- useState로 폼 상태 관리
- 입력 필드에 적절한 placeholder 텍스트
- 폼은 화면 중앙, 최대 너비 600px
- 깔끔한 입력 필드 스타일 (border, border-radius, focus 효과)
\`\`\`

**Claude Code 프롬프트 (Footer):**
\`\`\`
Footer.tsx를 다음과 같이 구현해줘:
- 진한 배경색 (#1a1a2e)
- 저작권 텍스트: "© 2026 홍길동. All rights reserved."
- 소셜 링크: GitHub, LinkedIn, Email (아이콘 대신 텍스트 링크 사용)
- 링크들은 가로로 나열, 구분선으로 분리
- 전체 텍스트는 중앙 정렬, 흰색
\`\`\`

**예상 결과:**
- Contact: 깔끔한 폼이 중앙에 표시되며, 입력 후 전송 버튼을 누르면 알림이 나타납니다.
- Footer: 진한 배경에 저작권과 소셜 링크가 표시됩니다.

**확인 포인트:**
1. 폼 입력이 정상적으로 동작하는가?
2. 전송 버튼 클릭 시 alert가 표시되는가?
3. 폼 제출 후 입력 필드가 초기화되는가?
4. Footer의 배경색과 텍스트 색상이 올바른가?`,
      codeExamples: [
        {
          language: 'tsx',
          title: '폼 상태 관리 (useState)',
          code: `const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  alert(\`감사합니다, \${formData.name}님! 메시지를 받았습니다.\`);
  setFormData({ name: '', email: '', message: '' });
};

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
};`
        }
      ],
      tips: [
        'e.preventDefault()를 호출하지 않으면 폼 제출 시 페이지가 새로고침됩니다',
        'name 속성을 사용하면 하나의 handleChange 함수로 모든 입력을 처리할 수 있습니다',
        'textarea에 rows 속성을 지정하면 초기 높이를 조절할 수 있습니다',
        '실제 배포 시에는 EmailJS나 Formspree 같은 서비스를 연동할 수 있습니다'
      ]
    },
    {
      step: 7,
      title: '반응형 디자인',
      description: 'Media Query를 사용하여 모바일과 태블릿에 대응합니다.',
      content: `마지막 단계에서는 모바일과 태블릿 화면에서도 포트폴리오가 올바르게 표시되도록 반응형 디자인을 적용합니다. CSS Media Query를 사용하여 화면 크기에 따라 레이아웃을 조정합니다. 모바일(~768px)에서는 1열 레이아웃으로, 태블릿(768~1024px)에서는 2열로, 데스크톱(1024px~)에서는 원래 디자인 그대로 유지합니다.

**Claude Code 프롬프트:**
\`\`\`
모든 컴포넌트에 반응형 디자인을 적용해줘:

1. Header:
   - 모바일(768px 이하)에서 햄버거 메뉴 아이콘 표시
   - 메뉴 클릭 시 세로 드롭다운으로 변경

2. Hero:
   - 모바일에서 글씨 크기 축소
   - CTA 버튼을 세로로 배치

3. About:
   - 모바일에서 2단 → 1단 레이아웃 (이미지가 위, 텍스트가 아래)

4. Skills:
   - 모바일에서 3열 → 1열 그리드
   - 태블릿에서 3열 → 2열 그리드

5. Projects:
   - 모바일에서 2열 → 1열 그리드

6. Contact:
   - 모바일에서 폼 너비 100%, 좌우 패딩 축소

7. Footer:
   - 모바일에서 소셜 링크를 세로 배치

공통: 모든 font-size를 모바일에서 약간 축소해줘.
\`\`\`

**주요 브레이크포인트:**
- 데스크톱: 1024px 이상
- 태블릿: 768px ~ 1024px
- 모바일: 768px 이하

**예상 결과:**
- 브라우저 크기를 줄이면 레이아웃이 자연스럽게 변경됩니다.
- 모바일에서 모든 콘텐츠가 읽기 편하게 1열로 표시됩니다.
- 터치 기기에서 버튼 크기가 충분히 크게 표시됩니다.

**확인 포인트:**
1. 브라우저 개발자 도구에서 모바일 뷰를 확인했는가?
2. 375px(iPhone SE), 768px(iPad), 1024px(iPad 가로)에서 레이아웃이 올바른가?
3. 텍스트가 잘리거나 넘치지 않는가?
4. 버튼과 링크가 터치하기 충분한 크기인가(최소 44px)?`,
      codeExamples: [
        {
          language: 'css',
          title: '반응형 Media Query 예시',
          code: `/* 태블릿 */
@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 모바일 */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  .about-content {
    flex-direction: column;
  }
  .skills-grid {
    grid-template-columns: 1fr;
  }
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .cta-buttons {
    flex-direction: column;
    gap: 12px;
  }
}`
        }
      ],
      tips: [
        'Chrome 개발자 도구(F12)의 "Toggle device toolbar"로 다양한 화면 크기를 테스트하세요',
        'mobile-first 방식(min-width)보다 desktop-first 방식(max-width)이 초보자에게 더 직관적입니다',
        'rem 단위를 사용하면 글꼴 크기 조절이 일관성 있게 됩니다',
        '터치 대상(버튼, 링크)은 최소 44x44px 이상이 권장됩니다'
      ]
    }
  ],
  sourceFiles: [
    {
      filename: 'package.json',
      language: 'json',
      code: `{
  "name": "my-portfolio",
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
    "@vitejs/plugin-react": "^4.4.0",
    "typescript": "~5.7.0",
    "vite": "^6.3.0"
  }
}`
    },
    {
      filename: 'vite.config.ts',
      language: 'ts',
      code: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})`
    },
    {
      filename: 'src/App.tsx',
      language: 'tsx',
      code: `import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App`
    },
    {
      filename: 'src/App.css',
      language: 'css',
      code: `/* ─── 전역 리셋 & 기본 스타일 ─── */
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
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #333333;
  line-height: 1.6;
  background: #ffffff;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* ─── 공통 섹션 스타일 ─── */
.section {
  padding: 80px 24px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: #111827;
}

.section-subtitle {
  font-size: 1.1rem;
  text-align: center;
  color: #6b7280;
  margin-bottom: 48px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ─── 반응형 ─── */
@media (max-width: 1024px) {
  .section {
    padding: 60px 20px;
  }
  .section-title {
    font-size: 1.75rem;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 48px 16px;
  }
  .section-title {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }
  .section-subtitle {
    font-size: 1rem;
    margin-bottom: 32px;
  }
}`
    },
    {
      filename: 'src/components/Header.tsx',
      language: 'tsx',
      code: `import { useState } from 'react'

const navLinks = [
  { label: '홈', href: '#hero' },
  { label: '소개', href: '#about' },
  { label: '기술', href: '#skills' },
  { label: '프로젝트', href: '#projects' },
  { label: '연락처', href: '#contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#hero" className="logo" onClick={() => handleNavClick('#hero')}>
          홍길동
        </a>

        <button
          className={\`hamburger \${menuOpen ? 'active' : ''}\`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={\`nav \${menuOpen ? 'nav--open' : ''}\`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <style>{\`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid #e5e7eb;
        }
        .header-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0046C8;
        }
        .nav {
          display: flex;
          gap: 32px;
        }
        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: #374151;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #0046C8;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #374151;
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
        }
        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }
          .nav {
            display: none;
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            flex-direction: column;
            background: rgba(255, 255, 255, 0.98);
            padding: 16px 24px;
            gap: 16px;
            border-bottom: 1px solid #e5e7eb;
          }
          .nav--open {
            display: flex;
          }
        }
      \`}</style>
    </header>
  )
}

export default Header`
    },
    {
      filename: 'src/components/Hero.tsx',
      language: 'tsx',
      code: `function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">안녕하세요, 저는</p>
        <h1 className="hero-name">홍길동</h1>
        <h2 className="hero-title">프론트엔드 개발자</h2>
        <p className="hero-description">
          사용자 경험을 중시하는 웹 개발자입니다.
          <br />
          깔끔한 코드와 아름다운 인터페이스를 만듭니다.
        </p>
        <div className="cta-buttons">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('projects')}
          >
            프로젝트 보기
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            연락하기
          </button>
        </div>
      </div>

      <style>{\`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1a2e 0%, #0046C8 100%);
          padding: 80px 24px 60px;
          text-align: center;
        }
        .hero-content {
          max-width: 700px;
        }
        .hero-greeting {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 8px;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }
        .hero-name {
          font-size: 3.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 8px;
          animation: fadeInUp 0.6s ease 0.15s forwards;
          opacity: 0;
        }
        .hero-title {
          font-size: 1.5rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 20px;
          animation: fadeInUp 0.6s ease 0.3s forwards;
          opacity: 0;
        }
        .hero-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.8;
          margin-bottom: 36px;
          animation: fadeInUp 0.6s ease 0.45s forwards;
          opacity: 0;
        }
        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          animation: fadeInUp 0.6s ease 0.6s forwards;
          opacity: 0;
        }
        .btn {
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn:hover {
          transform: translateY(-2px);
        }
        .btn-primary {
          background: #ffffff;
          color: #0046C8;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
        }
        .btn-primary:hover {
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }
        .btn-secondary {
          background: transparent;
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.6);
        }
        .btn-secondary:hover {
          border-color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-name {
            font-size: 2.5rem;
          }
          .hero-title {
            font-size: 1.2rem;
          }
          .hero-description {
            font-size: 1rem;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          .btn {
            width: 100%;
            max-width: 280px;
          }
        }
      \`}</style>
    </section>
  )
}

export default Hero`
    },
    {
      filename: 'src/components/About.tsx',
      language: 'tsx',
      code: `function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">저에 대해 소개합니다</p>

        <div className="about-content">
          <div className="about-image">
            <div className="about-image-placeholder">
              <span>GD</span>
            </div>
          </div>
          <div className="about-text">
            <h3 className="about-heading">안녕하세요!</h3>
            <p>
              저는 3년차 프론트엔드 개발자 홍길동입니다. 사용자 중심의 웹 애플리케이션을
              만드는 것을 좋아하며, 깔끔한 코드와 직관적인 UI를 추구합니다.
            </p>
            <p>
              React와 TypeScript를 주력으로 사용하고 있으며, 새로운 기술을 배우는 것에
              항상 열려 있습니다. 현재는 AI 기반 개발 도구를 활용한 생산성 향상에
              관심을 가지고 있습니다.
            </p>
            <p>
              팀과의 협업을 중시하고, 코드 리뷰를 통해 함께 성장하는 문화를 지향합니다.
              사이드 프로젝트를 통해 끊임없이 새로운 것을 시도하고 있습니다.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">년 경력</span>
              </div>
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">프로젝트</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">기술 스택</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{\`
        .about {
          background: #ffffff;
        }
        .about-content {
          display: flex;
          gap: 48px;
          align-items: center;
        }
        .about-image {
          flex-shrink: 0;
        }
        .about-image-placeholder {
          width: 240px;
          height: 240px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0046C8 0%, #3b82f6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .about-image-placeholder span {
          font-size: 4rem;
          font-weight: 700;
          color: #ffffff;
        }
        .about-text {
          flex: 1;
        }
        .about-heading {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 16px;
        }
        .about-text p {
          font-size: 1rem;
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 12px;
        }
        .about-stats {
          display: flex;
          gap: 32px;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #e5e7eb;
        }
        .stat {
          text-align: center;
        }
        .stat-number {
          display: block;
          font-size: 1.75rem;
          font-weight: 700;
          color: #0046C8;
        }
        .stat-label {
          font-size: 0.85rem;
          color: #6b7280;
        }

        @media (max-width: 768px) {
          .about-content {
            flex-direction: column;
            text-align: center;
          }
          .about-image-placeholder {
            width: 180px;
            height: 180px;
          }
          .about-image-placeholder span {
            font-size: 3rem;
          }
          .about-stats {
            justify-content: center;
          }
        }
      \`}</style>
    </section>
  )
}

export default About`
    },
    {
      filename: 'src/components/Skills.tsx',
      language: 'tsx',
      code: `interface Skill {
  name: string
  level: number
  color: string
}

const skills: Skill[] = [
  { name: 'React', level: 90, color: '#61DAFB' },
  { name: 'TypeScript', level: 85, color: '#3178C6' },
  { name: 'JavaScript', level: 92, color: '#F7DF1E' },
  { name: 'HTML / CSS', level: 95, color: '#E34F26' },
  { name: 'Node.js', level: 75, color: '#339933' },
  { name: 'Git', level: 80, color: '#F05032' },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">제가 다루는 기술 스택입니다</p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{
                    width: \`\${skill.level}%\`,
                    background: skill.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{\`
        .skills {
          background: #f8f9fa;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .skill-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .skill-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }
        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .skill-name {
          font-size: 1rem;
          font-weight: 600;
          color: #111827;
        }
        .skill-percent {
          font-size: 0.9rem;
          font-weight: 600;
          color: #6b7280;
        }
        .skill-bar-bg {
          height: 8px;
          background: #e5e7eb;
          border-radius: 4px;
          overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 1s ease;
        }

        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      \`}</style>
    </section>
  )
}

export default Skills`
    },
    {
      filename: 'src/components/Projects.tsx',
      language: 'tsx',
      code: `interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  githubUrl: string
  demoUrl: string
}

const projectData: Project[] = [
  {
    id: 1,
    title: 'Todo 앱',
    description:
      'React와 localStorage를 활용한 할 일 관리 앱입니다. CRUD 기능과 필터링, 드래그 앤 드롭 정렬을 지원합니다.',
    tags: ['React', 'TypeScript', 'CSS'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
  {
    id: 2,
    title: '날씨 대시보드',
    description:
      '오픈 API를 활용한 실시간 날씨 정보 대시보드입니다. 지역 검색과 5일 예보 기능을 제공합니다.',
    tags: ['React', 'API', 'Chart.js'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
  {
    id: 3,
    title: '블로그 플랫폼',
    description:
      'Markdown 기반의 개인 블로그 플랫폼입니다. 글 작성, 카테고리 분류, 검색 기능을 포함합니다.',
    tags: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
  {
    id: 4,
    title: '채팅 앱',
    description:
      'WebSocket 기반의 실시간 채팅 앱입니다. 1:1 채팅과 그룹 채팅, 이미지 전송을 지원합니다.',
    tags: ['React', 'Socket.io', 'Express'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">제가 만든 프로젝트들을 소개합니다</p>

        <div className="projects-grid">
          {projectData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span className="project-image-label">{project.title}</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link--demo"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{\`
        .projects {
          background: #ffffff;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        .project-card {
          border-radius: 12px;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
        }
        .project-image {
          height: 200px;
          background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .project-image-label {
          font-size: 1.25rem;
          font-weight: 600;
          color: #4338ca;
        }
        .project-body {
          padding: 24px;
        }
        .project-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 8px;
        }
        .project-desc {
          font-size: 0.95rem;
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }
        .tag {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          background: #eff6ff;
          color: #0046C8;
        }
        .project-links {
          display: flex;
          gap: 12px;
        }
        .project-link {
          padding: 8px 20px;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          border: 1px solid #d1d5db;
          color: #374151;
          transition: all 0.2s;
        }
        .project-link:hover {
          border-color: #0046C8;
          color: #0046C8;
        }
        .project-link--demo {
          background: #0046C8;
          color: #ffffff;
          border-color: #0046C8;
        }
        .project-link--demo:hover {
          background: #003ba8;
          border-color: #003ba8;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-image {
            height: 160px;
          }
        }
      \`}</style>
    </section>
  )
}

export default Projects`
    },
    {
      filename: 'src/components/Contact.tsx',
      language: 'tsx',
      code: `import { useState } from 'react'

interface FormData {
  name: string
  email: string
  message: string
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(\`감사합니다, \${formData.name}님! 메시지를 확인하겠습니다.\`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          프로젝트에 관심이 있으시다면 연락 주세요!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="홍길동"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              메시지
            </label>
            <textarea
              id="message"
              name="message"
              className="form-input form-textarea"
              placeholder="문의 내용을 입력해주세요"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="form-submit">
            메시지 보내기
          </button>
        </form>
      </div>

      <style>{\`
        .contact {
          background: #f8f9fa;
        }
        .contact-form {
          max-width: 600px;
          margin: 0 auto;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-label {
          display: block;
          font-size: 0.95rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 6px;
        }
        .form-input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
          color: #111827;
          background: #ffffff;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: inherit;
        }
        .form-input:focus {
          outline: none;
          border-color: #0046C8;
          box-shadow: 0 0 0 3px rgba(0, 70, 200, 0.1);
        }
        .form-input::placeholder {
          color: #9ca3af;
        }
        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }
        .form-submit {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          background: #0046C8;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .form-submit:hover {
          background: #003ba8;
          transform: translateY(-1px);
        }
        .form-submit:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .contact-form {
            max-width: 100%;
          }
        }
      \`}</style>
    </section>
  )
}

export default Contact`
    },
    {
      filename: 'src/components/Footer.tsx',
      language: 'tsx',
      code: `const socialLinks = [
  { label: 'GitHub', url: 'https://github.com' },
  { label: 'LinkedIn', url: 'https://linkedin.com' },
  { label: 'Email', url: 'mailto:example@email.com' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-social">
          {socialLinks.map((link, idx) => (
            <span key={link.label}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {link.label}
              </a>
              {idx < socialLinks.length - 1 && (
                <span className="footer-divider">|</span>
              )}
            </span>
          ))}
        </div>
        <p className="footer-copy">
          &copy; 2026 홍길동. All rights reserved.
        </p>
      </div>

      <style>{\`
        .footer {
          background: #1a1a2e;
          padding: 40px 24px;
          text-align: center;
        }
        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .footer-social {
          margin-bottom: 16px;
        }
        .footer-link {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: #ffffff;
        }
        .footer-divider {
          margin: 0 16px;
          color: rgba(255, 255, 255, 0.3);
        }
        .footer-copy {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 768px) {
          .footer-social {
            display: flex;
            flex-direction: column;
            gap: 12px;
            align-items: center;
          }
          .footer-divider {
            display: none;
          }
        }
      \`}</style>
    </footer>
  )
}

export default Footer`
    }
  ]
};
