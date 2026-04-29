import type { ProjectData } from '../../types';

export const beginnerProjects: ProjectData[] = [
  {
    id: 'todo-app',
    slug: 'todo-app',
    title: 'Todo App 만들기',
    description: 'React와 localStorage를 활용한 할 일 관리 앱. CRUD와 필터링 기능 구현.',
    level: 'beginner',
    duration: '2-3시간',
    techStack: ['React', 'Lovable', 'localStorage'],
    outcomes: ['CRUD 기능 구현', '상태관리 이해', 'AI 프롬프트 작성 능력'],
    steps: [
      { step: 1, title: '프로젝트 설계', description: 'Todo 앱의 기능과 UI를 설계합니다.', content: 'Lovable에 접속하여 새 프로젝트를 시작합니다. 프롬프트로 Todo 앱의 기본 구조를 설명하세요.\n\n프롬프트 예시:\n"React로 Todo 앱을 만들어주세요. 할 일 추가, 완료 체크, 삭제 기능이 필요합니다. 깔끔한 UI로 만들어주세요."', tips: ['구체적인 기능을 나열하세요', 'UI 스타일도 함께 설명하면 좋습니다'] },
      { step: 2, title: 'UI 컴포넌트 생성', description: 'AI로 기본 UI를 생성합니다.', content: '생성된 코드를 확인하고 컴포넌트 구조를 이해합니다. Header, TodoList, TodoItem, AddTodo 등의 컴포넌트가 있어야 합니다.' },
      { step: 3, title: '기능 추가 — 필터링', description: '전체/완료/미완료 필터 기능을 추가합니다.', content: '프롬프트: "필터 버튼을 추가해주세요. 전체, 완료, 미완료로 필터링할 수 있게 해주세요. 현재 선택된 필터는 시각적으로 구분해주세요."' },
      { step: 4, title: 'localStorage 연동', description: '브라우저 새로고침 후에도 데이터가 유지되도록 합니다.', content: 'localStorage를 사용하여 Todo 데이터를 저장하고 불러오는 기능을 구현합니다.\n\n프롬프트: "localStorage를 사용해서 Todo 데이터를 저장하고, 페이지를 새로고침해도 데이터가 유지되게 해주세요."' },
      { step: 5, title: '스타일링 및 완성', description: '디자인을 다듬고 반응형으로 만듭니다.', content: '모바일에서도 잘 보이도록 반응형 스타일을 적용하고, 애니메이션을 추가합니다.' },
    ]
  },
  {
    id: 'portfolio',
    slug: 'portfolio',
    title: '포트폴리오 사이트 만들기',
    description: '반응형 개인 포트폴리오 사이트. 다크모드와 섹션 구성 포함.',
    level: 'beginner',
    duration: '3-4시간',
    techStack: ['React', 'v0.dev', 'CSS'],
    outcomes: ['반응형 디자인 구현', '다크모드 토글', '섹션 기반 레이아웃'],
    steps: [
      { step: 1, title: '구조 설계', description: '포트폴리오의 섹션을 기획합니다.', content: 'Hero, About, Skills, Projects, Contact 섹션으로 구성합니다. v0.dev에서 시작하세요.' },
      { step: 2, title: 'Hero 섹션', description: '메인 비주얼과 소개 영역을 만듭니다.', content: '프롬프트: "개발자 포트폴리오의 Hero 섹션을 만들어주세요. 이름, 직함, 간단한 소개, 소셜 링크 버튼이 필요합니다."' },
      { step: 3, title: 'About & Skills', description: '자기소개와 기술 스택을 표시합니다.', content: '프로필 사진 영역, 소개 텍스트, 스킬 태그 또는 차트를 추가합니다.' },
      { step: 4, title: 'Projects 섹션', description: '프로젝트 카드 그리드를 만듭니다.', content: '각 프로젝트의 제목, 설명, 기술 태그, 링크를 카드 형태로 표시합니다.' },
      { step: 5, title: '다크모드', description: '라이트/다크 테마 토글을 구현합니다.', content: 'CSS 변수를 활용한 테마 시스템과 토글 버튼을 추가합니다.' },
      { step: 6, title: '반응형 및 배포', description: '모바일 대응과 배포를 진행합니다.', content: '미디어 쿼리로 모바일 레이아웃을 만들고, Netlify/Vercel로 배포합니다.' },
    ]
  },
  {
    id: 'saas-landing',
    slug: 'saas-landing',
    title: 'SaaS 랜딩 프로토타입',
    description: '구독 폼, 가격표, CTA가 포함된 SaaS 랜딩 페이지.',
    level: 'beginner',
    duration: '2-3시간',
    techStack: ['React', 'Bolt.new', 'Tailwind'],
    outcomes: ['마케팅 페이지 설계', '가격 테이블 구현', 'CTA 최적화'],
    steps: [
      { step: 1, title: '랜딩 기획', description: 'SaaS 제품의 컨셉과 섹션을 기획합니다.', content: 'Hero, Features, Pricing, Testimonials, CTA, Footer 섹션으로 구성합니다.' },
      { step: 2, title: 'Hero & Features', description: '메인 비주얼과 기능 소개 영역을 만듭니다.', content: 'Bolt.new에서 프롬프트: "SaaS 제품 랜딩 페이지를 만들어주세요. 모던하고 깔끔한 디자인으로, Hero에 제목/부제/CTA 버튼, Features에 3-4개 기능 카드를 배치해주세요."' },
      { step: 3, title: '가격 테이블', description: '3단계 가격 플랜을 만듭니다.', content: 'Free, Pro, Enterprise 3단계 가격 테이블을 만듭니다. 추천 플랜은 강조 표시합니다.' },
      { step: 4, title: '구독 폼 & CTA', description: '이메일 구독 폼과 액션 버튼을 추가합니다.', content: '뉴스레터 구독 폼, 무료 체험 시작 버튼 등 전환 요소를 배치합니다.' },
      { step: 5, title: '반응형 완성', description: '모바일에서도 완벽하게 동작하도록 합니다.', content: '모든 섹션이 모바일에서 잘 보이는지 확인하고 조정합니다.' },
    ]
  }
];
