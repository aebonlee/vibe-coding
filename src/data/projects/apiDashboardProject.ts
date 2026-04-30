import type { ProjectData } from '../../types';

export const apiDashboardProject: ProjectData = {
  id: 'api-dashboard',
  slug: 'api-dashboard',
  title: 'API 대시보드',
  description: '외부 API를 연동하여 데이터를 시각화하는 대시보드.',
  level: 'intermediate',
  duration: '5-6시간',
  techStack: ['React', 'Claude Code', 'Chart.js', 'REST API', 'TypeScript'],
  outcomes: [
    'API 연동 능력',
    '데이터 시각화',
    '대시보드 레이아웃',
    'Claude Code 활용',
  ],
  diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" font-family="'Noto Sans KR', sans-serif">
  <defs>
    <marker id="ah" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#0046C8"/>
    </marker>
  </defs>
  <rect x="1" y="1" width="758" height="318" rx="12" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="2"/>
  <text x="380" y="28" text-anchor="middle" font-size="15" font-weight="700" fill="#111827">API 대시보드 아키텍처</text>

  <!-- External APIs -->
  <text x="90" y="58" text-anchor="middle" font-size="11" fill="#4B5563">외부 API</text>
  <rect x="20" y="68" width="140" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="90" y="93" text-anchor="middle" font-size="13" fill="#0046C8" font-weight="bold">Weather API</text>
  <rect x="20" y="118" width="140" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="90" y="143" text-anchor="middle" font-size="13" fill="#0046C8" font-weight="bold">Currency API</text>
  <rect x="20" y="168" width="140" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="90" y="193" text-anchor="middle" font-size="13" fill="#0046C8" font-weight="bold">JSONPlaceholder</text>

  <!-- Arrows: APIs → Hooks -->
  <line x1="160" y1="88" x2="260" y2="120" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <line x1="160" y1="138" x2="260" y2="138" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <line x1="160" y1="188" x2="260" y2="158" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>

  <!-- Custom Hooks -->
  <text x="340" y="58" text-anchor="middle" font-size="11" fill="#4B5563">Custom Hooks</text>
  <rect x="265" y="68" width="150" height="120" rx="8" fill="#0046C8" stroke="#0046C8" stroke-width="2"/>
  <text x="340" y="100" text-anchor="middle" font-size="12" fill="#FFFFFF" font-weight="bold">useWeatherData</text>
  <text x="340" y="130" text-anchor="middle" font-size="12" fill="#FFFFFF" font-weight="bold">useCurrencyData</text>
  <text x="340" y="160" text-anchor="middle" font-size="12" fill="#FFFFFF" font-weight="bold">usePostsData</text>

  <!-- Arrows: Hooks → Components -->
  <line x1="415" y1="100" x2="490" y2="88" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <line x1="415" y1="128" x2="490" y2="148" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <line x1="415" y1="158" x2="490" y2="208" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>

  <!-- React Components -->
  <text x="610" y="58" text-anchor="middle" font-size="11" fill="#4B5563">React Components</text>
  <rect x="495" y="68" width="140" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="565" y="93" text-anchor="middle" font-size="13" fill="#0046C8" font-weight="bold">KPI Cards</text>
  <rect x="495" y="128" width="140" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="565" y="153" text-anchor="middle" font-size="13" fill="#0046C8" font-weight="bold">Charts</text>
  <rect x="495" y="188" width="140" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="565" y="213" text-anchor="middle" font-size="13" fill="#0046C8" font-weight="bold">Data Table</text>

  <!-- Arrow: Components → Dashboard -->
  <line x1="635" y1="108" x2="665" y2="138" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <line x1="635" y1="148" x2="665" y2="148" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <line x1="635" y1="188" x2="665" y2="158" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>

  <rect x="670" y="118" width="70" height="60" rx="8" fill="#0046C8" stroke="#0046C8" stroke-width="2"/>
  <text x="705" y="145" text-anchor="middle" font-size="11" fill="#FFFFFF" font-weight="bold">App</text>
  <text x="705" y="162" text-anchor="middle" font-size="10" fill="#FFFFFF">(Layout)</text>

  <!-- Legend -->
  <text x="380" y="260" text-anchor="middle" font-size="12" fill="#555">External APIs → Custom Hooks → React Components → Dashboard Layout</text>
  <text x="380" y="282" text-anchor="middle" font-size="11" fill="#888">Chart.js로 Line / Bar / Doughnut 차트 시각화 | 반응형 그리드 레이아웃</text>
</svg>`,
  steps: [
    {
      step: 1,
      title: '대시보드 설계',
      description: '대시보드 레이아웃을 기획하고 사용할 API를 선정합니다.',
      content: `API 대시보드를 만들기 전에 먼저 어떤 데이터를 표시할지, 어떤 레이아웃으로 구성할지를 설계합니다. 좋은 대시보드는 한눈에 핵심 지표를 파악할 수 있어야 합니다.

이 프로젝트에서는 세 가지 데이터 소스를 사용합니다. 첫째, 날씨 데이터 — 도시별 기온, 습도, 풍속 등의 기상 정보입니다. 둘째, 환율 데이터 — 주요 통화의 환율 변동 정보입니다. 셋째, JSONPlaceholder — 게시글, 사용자 등의 목업 데이터입니다. 튜토리얼에서는 안정적인 학습을 위해 시뮬레이션 데이터를 활용합니다.

대시보드 레이아웃은 상단에 KPI 카드 4개를 가로로 배치하고, 중간에 Line Chart와 Bar Chart를 2열로, 하단에 데이터 테이블을 전체 폭으로 배치합니다. 반응형 디자인을 적용하여 모바일에서는 1열로 변환됩니다.

Claude Code에 다음과 같이 요청하세요:

"API 대시보드를 만들 거야. 상단에 KPI 카드 4개, 중간에 차트 2개(Line, Bar), 하단에 데이터 테이블을 배치하는 레이아웃을 설계해줘. 날씨, 환율, 게시글 데이터를 시각화할 거야."`,
      tips: [
        '실제 API 키가 필요 없는 무료 공개 API를 사용하면 학습에 집중할 수 있습니다.',
        '대시보드 설계 시 "정보 계층 구조"를 고려하세요 — 가장 중요한 KPI가 최상단에 위치해야 합니다.',
        'Claude Code에 와이어프레임을 설명하면 컴포넌트 구조를 자동으로 제안해줍니다.',
      ],
    },
    {
      step: 2,
      title: '프로젝트 초기화',
      description: 'React + Vite 프로젝트를 생성하고 Chart.js 라이브러리를 설치합니다.',
      content: `Claude Code를 사용하여 프로젝트를 초기화합니다. Vite의 React + TypeScript 템플릿으로 시작하고, Chart.js와 react-chartjs-2 라이브러리를 설치합니다.

Claude Code에 다음과 같이 요청하세요:

"React + Vite + TypeScript로 api-dashboard 프로젝트를 생성하고, chart.js, react-chartjs-2를 설치해줘. 프로젝트 구조는 components/, hooks/, types.ts로 나눠줘."

Chart.js는 가장 널리 사용되는 JavaScript 차트 라이브러리이며, react-chartjs-2는 Chart.js를 React 컴포넌트로 래핑한 라이브러리입니다. Chart.js에서 사용할 차트 유형(Line, Bar, Doughnut)의 모듈을 등록하는 것이 중요합니다.

프로젝트 구조:
- src/components/ — KPICard, LineChart, BarChart, DataTable, DashboardHeader
- src/hooks/ — useWeatherData, useCurrencyData (커스텀 훅)
- src/types.ts — API 응답 타입 정의
- src/App.tsx — 메인 대시보드 레이아웃
- src/App.css — 그리드 및 대시보드 스타일`,
      tips: [
        'Chart.js v4는 트리 쉐이킹을 지원합니다 — 사용하는 차트 유형만 등록하면 번들 크기가 줄어듭니다.',
        'react-chartjs-2의 버전이 Chart.js 버전과 호환되는지 확인하세요.',
      ],
      codeExamples: [
        {
          language: 'bash',
          title: '프로젝트 생성 및 의존성 설치',
          code: `# Vite로 프로젝트 생성
npm create vite@latest api-dashboard -- --template react-ts

# 디렉토리 이동
cd api-dashboard

# Chart.js 관련 패키지 설치
npm install chart.js react-chartjs-2

# 개발 서버 실행
npm run dev`,
        },
      ],
    },
    {
      step: 3,
      title: 'API 연동 — Custom Hooks',
      description: '외부 API 데이터를 가져오는 커스텀 훅을 구현합니다.',
      content: `데이터 페칭 로직을 커스텀 훅으로 분리하면 컴포넌트가 깔끔해지고 재사용성이 높아집니다. 각 훅은 data, loading, error 세 가지 상태를 관리합니다.

Claude Code에 다음과 같이 요청하세요:

"useWeatherData, useCurrencyData 커스텀 훅을 만들어줘. 각 훅은 시뮬레이션 데이터를 반환하되, 실제 API 호출 구조(fetch + useState + useEffect)를 따르도록 해줘. loading, error 상태도 포함해줘."

이 튜토리얼에서는 안정적인 학습을 위해 시뮬레이션 데이터를 사용합니다. 실제 프로젝트에서는 fetch() 호출 부분만 실제 API 엔드포인트로 교체하면 됩니다. 핵심은 훅의 구조와 상태 관리 패턴을 익히는 것입니다.

커스텀 훅 패턴:
1. useState로 data, loading, error 상태 선언
2. useEffect 안에서 비동기 함수 호출
3. try-catch로 에러 핸들링
4. finally에서 loading을 false로 설정
5. cleanup 함수로 메모리 누수 방지`,
      tips: [
        '커스텀 훅 이름은 반드시 "use"로 시작해야 React가 훅 규칙을 적용합니다.',
        'AbortController를 사용하면 컴포넌트 언마운트 시 진행 중인 요청을 취소할 수 있습니다.',
        '시뮬레이션 데이터를 사용할 때도 실제 API 호출과 동일한 비동기 패턴(setTimeout)을 적용하면 로딩 상태를 테스트할 수 있습니다.',
      ],
      codeExamples: [
        {
          language: 'typescript',
          title: '커스텀 훅 패턴 (useWeatherData)',
          code: `import { useState, useEffect } from 'react';
import type { WeatherData } from '../types';

export function useWeatherData() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        setLoading(true);
        // 시뮬레이션: 실제로는 fetch() 사용
        await new Promise(r => setTimeout(r, 800));
        if (!cancelled) {
          setData(simulatedWeatherData);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : '데이터 로딩 실패');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();
    return () => { cancelled = true; };
  }, []);

  return { data, loading, error };
}`,
        },
      ],
    },
    {
      step: 4,
      title: 'KPI 카드 구현',
      description: '핵심 지표를 표시하는 KPI 카드 컴포넌트를 만듭니다.',
      content: `KPI(Key Performance Indicator) 카드는 대시보드 최상단에 위치하여 핵심 지표를 한눈에 보여줍니다. 라벨, 값, 단위, 변화량(트렌드)을 표시합니다.

Claude Code에 다음과 같이 요청하세요:

"KPICard 컴포넌트를 만들어줘. props로 label, value, unit, change(전일 대비 변화율), icon을 받고, change가 양수면 초록색, 음수면 빨간색으로 표시해줘. 카드 스타일은 그림자와 둥근 모서리를 적용해줘."

KPI 카드 4개의 데이터:
1. 현재 기온 (날씨 데이터에서)
2. USD 환율 (환율 데이터에서)
3. 총 게시글 수 (JSONPlaceholder에서)
4. 평균 습도 (날씨 데이터에서)

각 카드는 동일한 KPICard 컴포넌트를 재사용하되, props만 다르게 전달합니다. 이것이 React 컴포넌트의 재사용성입니다.`,
      tips: [
        'KPI 카드의 변화율(change)에 삼각형 아이콘(▲/▼)을 추가하면 직관적입니다.',
        '숫자 포맷팅에 Intl.NumberFormat을 사용하면 천 단위 구분자, 소수점 등을 쉽게 처리할 수 있습니다.',
        'loading 상태에서는 숫자 대신 스켈레톤 UI를 표시하면 UX가 좋아집니다.',
      ],
      codeExamples: [
        {
          language: 'tsx',
          title: 'KPICard 컴포넌트 사용 예시',
          code: `<div className="kpi-grid">
  <KPICard
    label="현재 기온"
    value={weather?.temperature ?? 0}
    unit="°C"
    change={2.5}
    icon="🌡️"
  />
  <KPICard
    label="USD 환율"
    value={currency?.usd ?? 0}
    unit="원"
    change={-0.8}
    icon="💱"
  />
  <KPICard
    label="총 게시글"
    value={posts?.length ?? 0}
    unit="건"
    change={12}
    icon="📝"
  />
  <KPICard
    label="평균 습도"
    value={weather?.humidity ?? 0}
    unit="%"
    change={-3.2}
    icon="💧"
  />
</div>`,
        },
      ],
    },
    {
      step: 5,
      title: '차트 구현',
      description: 'Chart.js를 활용하여 Line Chart, Bar Chart를 구현합니다.',
      content: `Chart.js와 react-chartjs-2를 사용하여 데이터를 시각적으로 표현합니다. 이 프로젝트에서는 세 가지 차트를 구현합니다.

Claude Code에 다음과 같이 요청하세요:

"Chart.js를 사용해서 LineChart와 BarChart 컴포넌트를 만들어줘. LineChart는 7일간 기온 변화를, BarChart는 통화별 환율을 표시해줘. 차트 색상은 파란색(#0046C8) 계열로 통일하고, 반응형으로 만들어줘. Chart.js 모듈 등록도 포함해줘."

Chart.js 사용 시 중요한 점:
1. CategoryScale, LinearScale, PointElement 등 필요한 모듈을 Chart.register()로 등록
2. react-chartjs-2의 Line, Bar 컴포넌트에 data와 options를 props로 전달
3. options.responsive = true로 반응형 설정
4. options.maintainAspectRatio = false로 부모 컨테이너에 맞춤

Line Chart — 최근 7일간 기온 변화 추이를 시계열로 표시합니다. 부드러운 곡선(tension: 0.4)과 그라데이션 배경을 적용하면 시각적으로 매력적인 차트가 됩니다.

Bar Chart — 주요 통화(USD, EUR, JPY, GBP, CNY)의 환율을 비교 막대로 표시합니다. 각 막대에 다른 색상을 적용하여 구분합니다.`,
      tips: [
        'Chart.js 모듈을 등록하지 않으면 "Category is not a registered scale" 에러가 발생합니다.',
        'responsive: true와 maintainAspectRatio: false를 함께 설정하고, 부모 div에 고정 높이를 지정하세요.',
        'Doughnut 차트는 카테고리별 비율을 표시할 때 효과적입니다 — 추가 도전 과제로 구현해보세요.',
      ],
      codeExamples: [
        {
          language: 'typescript',
          title: 'Chart.js 모듈 등록',
          code: `import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// 사용할 모듈 등록 (앱 시작 시 1회)
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);`,
        },
      ],
    },
    {
      step: 6,
      title: '데이터 테이블 구현',
      description: '정렬 기능이 있는 데이터 테이블 컴포넌트를 만듭니다.',
      content: `대시보드 하단에는 원본 데이터를 상세히 확인할 수 있는 테이블을 배치합니다. 컬럼 헤더 클릭 시 오름차순/내림차순 정렬이 토글되는 기능을 구현합니다.

Claude Code에 다음과 같이 요청하세요:

"DataTable 컴포넌트를 만들어줘. 제네릭 타입으로 만들어서 어떤 데이터든 표시할 수 있게 해줘. 컬럼 정의는 columns prop으로 받고, 헤더 클릭 시 정렬 기능을 포함해줘. 현재 정렬 기준 컬럼에 화살표 표시도 해줘."

테이블 컴포넌트 설계 포인트:
1. columns 배열로 표시할 컬럼을 정의 (key, label, sortable)
2. useState로 sortKey와 sortOrder(asc/desc) 관리
3. useMemo로 정렬된 데이터를 캐싱하여 성능 최적화
4. 정렬 아이콘(▲/▼)으로 현재 정렬 상태를 시각적으로 표시

JSONPlaceholder의 posts 데이터를 활용하여 ID, 제목, 작성자ID를 테이블에 표시합니다. 실제 서비스에서는 페이지네이션, 필터링, 검색 기능을 추가합니다.`,
      tips: [
        'useMemo를 사용하여 정렬 연산을 최적화하세요 — 데이터가 변경될 때만 재정렬됩니다.',
        '테이블이 길어질 경우 max-height와 overflow-y: auto로 스크롤 영역을 제한하세요.',
        '접근성을 위해 정렬 버튼에 aria-sort 속성을 추가하면 좋습니다.',
      ],
      codeExamples: [
        {
          language: 'typescript',
          title: '정렬 로직',
          code: `const [sortKey, setSortKey] = useState<string>('id');
const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

const sortedData = useMemo(() => {
  return [...data].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    const modifier = sortOrder === 'asc' ? 1 : -1;
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return (aVal - bVal) * modifier;
    }
    return String(aVal).localeCompare(String(bVal)) * modifier;
  });
}, [data, sortKey, sortOrder]);

function handleSort(key: string) {
  if (sortKey === key) {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  } else {
    setSortKey(key);
    setSortOrder('asc');
  }
}`,
        },
      ],
    },
    {
      step: 7,
      title: '반응형 레이아웃 및 완성',
      description: 'CSS Grid로 반응형 대시보드 레이아웃을 완성하고 로딩 상태를 처리합니다.',
      content: `모든 컴포넌트를 App.tsx에서 조합하여 완성된 대시보드를 만듭니다. CSS Grid를 사용하여 반응형 레이아웃을 구현하고, 로딩/에러 상태를 처리합니다.

Claude Code에 다음과 같이 요청하세요:

"App.tsx에서 모든 컴포넌트를 조합해줘. CSS Grid로 레이아웃을 구성하고, 데스크톱에서는 KPI 4열, 차트 2열, 테이블 전체 폭으로 배치해줘. 모바일(768px 이하)에서는 모두 1열로 변환해줘. 각 훅의 loading 상태에 따라 스켈레톤 UI를 표시해줘."

반응형 브레이크포인트:
- 1200px 이상: KPI 4열, 차트 2열
- 768px~1199px: KPI 2열, 차트 1열
- 768px 미만: 모두 1열

로딩 상태 처리:
- 각 섹션별로 독립적인 로딩 상태 관리
- 로딩 중에는 깜빡이는 스켈레톤 박스 표시
- 에러 발생 시 빨간색 에러 메시지와 재시도 버튼 표시

마지막으로 DashboardHeader 컴포넌트를 추가합니다. 대시보드 제목, 마지막 업데이트 시간, 새로고침 버튼을 포함하여 사용자가 데이터를 수동으로 갱신할 수 있게 합니다.

완성 후 npm run dev로 개발 서버를 실행하고, 브라우저에서 대시보드가 정상적으로 표시되는지 확인합니다. Chrome DevTools의 반응형 모드에서 다양한 화면 크기를 테스트하세요.`,
      tips: [
        'CSS Grid의 minmax()와 auto-fill을 활용하면 미디어 쿼리 없이도 기본 반응형을 구현할 수 있습니다.',
        'loading 상태에서 컴포넌트 크기가 변하면 레이아웃이 점프합니다 — 스켈레톤 UI를 실제 컴포넌트와 같은 크기로 만드세요.',
        '새로고침 버튼에 회전 애니메이션을 추가하면 사용자가 갱신 중임을 직관적으로 알 수 있습니다.',
        'Claude Code에 "성능 최적화를 위해 React.memo와 useMemo를 적용해줘"라고 요청하면 렌더링 최적화를 도와줍니다.',
      ],
      codeExamples: [
        {
          language: 'css',
          title: '반응형 그리드 레이아웃',
          code: `.dashboard {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px;
}

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.chart-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

@media (max-width: 1199px) {
  .kpi-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .chart-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .kpi-grid {
    grid-template-columns: 1fr;
  }
  .dashboard {
    padding: 16px;
  }
}`,
        },
      ],
    },
  ],
  sourceFiles: [
    {
      filename: 'package.json',
      language: 'json',
      code: `{
  "name": "api-dashboard",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "chart.js": "^4.4.7",
    "react": "^19.0.0",
    "react-chartjs-2": "^5.3.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.4.1",
    "typescript": "~5.7.0",
    "vite": "^6.3.0"
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
      filename: 'src/types.ts',
      language: 'typescript',
      code: `/* ── API 응답 타입 정의 ── */

export interface WeatherData {
  city: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  forecast: DailyForecast[];
}

export interface DailyForecast {
  date: string;
  high: number;
  low: number;
  condition: string;
}

export interface CurrencyRate {
  code: string;
  name: string;
  rate: number;
  change: number;
}

export interface CurrencyData {
  base: string;
  date: string;
  rates: CurrencyRate[];
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

/* ── 컴포넌트 Props ── */

export interface KPICardProps {
  label: string;
  value: number;
  unit: string;
  change: number;
  icon: string;
  loading?: boolean;
}

export interface ColumnDef {
  key: string;
  label: string;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  columns: ColumnDef[];
  data: T[];
  loading?: boolean;
}`,
    },
    {
      filename: 'src/App.tsx',
      language: 'tsx',
      code: `import { useWeatherData } from './hooks/useWeatherData';
import { useCurrencyData } from './hooks/useCurrencyData';
import { usePostsData } from './hooks/usePostsData';
import { DashboardHeader } from './components/DashboardHeader';
import { KPICard } from './components/KPICard';
import { LineChart } from './components/LineChart';
import { BarChart } from './components/BarChart';
import { DataTable } from './components/DataTable';
import type { ColumnDef, Post } from './types';
import './App.css';

const postColumns: ColumnDef[] = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'title', label: '제목', sortable: true },
  { key: 'userId', label: '작성자 ID', sortable: true },
];

export default function App() {
  const { data: weather, loading: wLoading, refetch: refetchWeather } = useWeatherData();
  const { data: currency, loading: cLoading, refetch: refetchCurrency } = useCurrencyData();
  const { data: posts, loading: pLoading, refetch: refetchPosts } = usePostsData();

  const handleRefresh = () => {
    refetchWeather();
    refetchCurrency();
    refetchPosts();
  };

  return (
    <div className="dashboard">
      <DashboardHeader onRefresh={handleRefresh} />

      {/* KPI 카드 영역 */}
      <section className="kpi-grid">
        <KPICard
          label="현재 기온"
          value={weather?.temperature ?? 0}
          unit="°C"
          change={2.5}
          icon="🌡️"
          loading={wLoading}
        />
        <KPICard
          label="USD 환율"
          value={currency?.rates.find(r => r.code === 'USD')?.rate ?? 0}
          unit="원"
          change={-0.8}
          icon="💱"
          loading={cLoading}
        />
        <KPICard
          label="총 게시글"
          value={posts?.length ?? 0}
          unit="건"
          change={12}
          icon="📝"
          loading={pLoading}
        />
        <KPICard
          label="평균 습도"
          value={weather?.humidity ?? 0}
          unit="%"
          change={-3.2}
          icon="💧"
          loading={wLoading}
        />
      </section>

      {/* 차트 영역 */}
      <section className="chart-grid">
        <div className="chart-card">
          <h3 className="chart-title">7일간 기온 변화</h3>
          <div className="chart-wrapper">
            <LineChart
              labels={weather?.forecast.map(f => f.date) ?? []}
              highData={weather?.forecast.map(f => f.high) ?? []}
              lowData={weather?.forecast.map(f => f.low) ?? []}
              loading={wLoading}
            />
          </div>
        </div>
        <div className="chart-card">
          <h3 className="chart-title">주요 통화 환율</h3>
          <div className="chart-wrapper">
            <BarChart
              labels={currency?.rates.map(r => r.code) ?? []}
              data={currency?.rates.map(r => r.rate) ?? []}
              loading={cLoading}
            />
          </div>
        </div>
      </section>

      {/* 데이터 테이블 영역 */}
      <section className="table-section">
        <h3 className="section-title">게시글 목록</h3>
        <DataTable<Post>
          columns={postColumns}
          data={posts ?? []}
          loading={pLoading}
        />
      </section>
    </div>
  );
}`,
    },
    {
      filename: 'src/App.css',
      language: 'css',
      code: `/* ── 대시보드 레이아웃 ── */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #f0f2f5;
  color: #1a1a2e;
  min-height: 100vh;
}

.dashboard {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px;
}

/* ── KPI 그리드 ── */

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

/* ── 차트 영역 ── */

.chart-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.chart-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.chart-title {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 16px;
}

.chart-wrapper {
  position: relative;
  height: 280px;
}

/* ── 테이블 영역 ── */

.table-section {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.section-title {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 16px;
}

/* ── 스켈레톤 로딩 ── */

.skeleton {
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* ── 반응형 ── */

@media (max-width: 1199px) {
  .kpi-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .chart-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .kpi-grid {
    grid-template-columns: 1fr;
  }
  .dashboard {
    padding: 16px;
  }
  .chart-wrapper {
    height: 220px;
  }
}`,
    },
    {
      filename: 'src/hooks/useWeatherData.ts',
      language: 'typescript',
      code: `import { useState, useEffect, useCallback } from 'react';
import type { WeatherData } from '../types';

/* ── 시뮬레이션 데이터 ── */
const simulatedWeather: WeatherData = {
  city: '서울',
  temperature: 22,
  humidity: 58,
  windSpeed: 3.4,
  condition: '맑음',
  forecast: [
    { date: '월', high: 24, low: 14, condition: '맑음' },
    { date: '화', high: 22, low: 13, condition: '구름' },
    { date: '수', high: 19, low: 11, condition: '비' },
    { date: '목', high: 21, low: 12, condition: '구름' },
    { date: '금', high: 25, low: 15, condition: '맑음' },
    { date: '토', high: 27, low: 17, condition: '맑음' },
    { date: '일', high: 23, low: 14, condition: '구름' },
  ],
};

/**
 * 날씨 데이터를 가져오는 커스텀 훅
 * 실제 프로젝트에서는 fetch()를 사용하여 OpenWeatherMap 등의 API를 호출합니다.
 */
export function useWeatherData() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    let cancelled = false;

    try {
      setLoading(true);
      setError(null);

      // 실제 API 호출 시:
      // const res = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=\${API_KEY}\`);
      // const json = await res.json();

      // 시뮬레이션: 네트워크 지연을 모사
      await new Promise(resolve => setTimeout(resolve, 800));

      if (!cancelled) {
        // 약간의 랜덤 변화를 추가하여 새로고침 효과 생성
        const variation = (Math.random() - 0.5) * 4;
        setData({
          ...simulatedWeather,
          temperature: Math.round((simulatedWeather.temperature + variation) * 10) / 10,
          humidity: Math.round(simulatedWeather.humidity + variation),
        });
      }
    } catch (err) {
      if (!cancelled) {
        setError(err instanceof Error ? err.message : '날씨 데이터 로딩 실패');
      }
    } finally {
      if (!cancelled) {
        setLoading(false);
      }
    }

    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}`,
    },
    {
      filename: 'src/hooks/useCurrencyData.ts',
      language: 'typescript',
      code: `import { useState, useEffect, useCallback } from 'react';
import type { CurrencyData } from '../types';

/* ── 시뮬레이션 데이터 ── */
const simulatedCurrency: CurrencyData = {
  base: 'KRW',
  date: new Date().toISOString().split('T')[0],
  rates: [
    { code: 'USD', name: '미국 달러', rate: 1345.20, change: -0.8 },
    { code: 'EUR', name: '유로', rate: 1478.50, change: 0.3 },
    { code: 'JPY', name: '일본 엔 (100)', rate: 892.10, change: -1.2 },
    { code: 'GBP', name: '영국 파운드', rate: 1712.80, change: 0.5 },
    { code: 'CNY', name: '중국 위안', rate: 185.40, change: -0.1 },
  ],
};

/**
 * 환율 데이터를 가져오는 커스텀 훅
 * 실제 프로젝트에서는 fetch()를 사용하여 환율 API를 호출합니다.
 */
export function useCurrencyData() {
  const [data, setData] = useState<CurrencyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    let cancelled = false;

    try {
      setLoading(true);
      setError(null);

      // 실제 API 호출 시:
      // const res = await fetch('https://api.exchangerate-api.com/v4/latest/KRW');
      // const json = await res.json();

      // 시뮬레이션: 네트워크 지연을 모사
      await new Promise(resolve => setTimeout(resolve, 600));

      if (!cancelled) {
        // 약간의 랜덤 변화를 추가
        setData({
          ...simulatedCurrency,
          date: new Date().toISOString().split('T')[0],
          rates: simulatedCurrency.rates.map(rate => ({
            ...rate,
            rate: Math.round((rate.rate + (Math.random() - 0.5) * 10) * 100) / 100,
          })),
        });
      }
    } catch (err) {
      if (!cancelled) {
        setError(err instanceof Error ? err.message : '환율 데이터 로딩 실패');
      }
    } finally {
      if (!cancelled) {
        setLoading(false);
      }
    }

    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}`,
    },
    {
      filename: 'src/hooks/usePostsData.ts',
      language: 'typescript',
      code: `import { useState, useEffect, useCallback } from 'react';
import type { Post } from '../types';

/**
 * 게시글 데이터를 가져오는 커스텀 훅
 * JSONPlaceholder의 무료 API를 사용합니다.
 */
export function usePostsData() {
  const [data, setData] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    const controller = new AbortController();

    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=20',
        { signal: controller.signal }
      );

      if (!res.ok) {
        throw new Error(\`HTTP \${res.status}: \${res.statusText}\`);
      }

      const json: Post[] = await res.json();
      setData(json);
    } catch (err) {
      if (err instanceof Error && err.name !== 'AbortError') {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }

    return () => controller.abort();
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}`,
    },
    {
      filename: 'src/components/KPICard.tsx',
      language: 'tsx',
      code: `import type { KPICardProps } from '../types';

export function KPICard({ label, value, unit, change, icon, loading }: KPICardProps) {
  if (loading) {
    return (
      <div className="kpi-card">
        <div className="skeleton" style={{ width: 40, height: 40, borderRadius: '50%' }} />
        <div className="skeleton" style={{ width: '60%', height: 16, marginTop: 12 }} />
        <div className="skeleton" style={{ width: '80%', height: 28, marginTop: 8 }} />
      </div>
    );
  }

  const isPositive = change >= 0;
  const formattedValue = new Intl.NumberFormat('ko-KR', {
    maximumFractionDigits: 1,
  }).format(value);

  return (
    <div className="kpi-card">
      <div className="kpi-icon">{icon}</div>
      <p className="kpi-label">{label}</p>
      <p className="kpi-value">
        {formattedValue}
        <span className="kpi-unit">{unit}</span>
      </p>
      <p className={\`kpi-change \${isPositive ? 'positive' : 'negative'}\`}>
        {isPositive ? '▲' : '▼'} {Math.abs(change)}%
      </p>

      <style>{\`
        .kpi-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .kpi-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }
        .kpi-icon {
          font-size: 28px;
          margin-bottom: 8px;
        }
        .kpi-label {
          font-size: 13px;
          color: #6b7280;
          margin-bottom: 4px;
        }
        .kpi-value {
          font-size: 28px;
          font-weight: 800;
          color: #1a1a2e;
        }
        .kpi-unit {
          font-size: 14px;
          font-weight: 400;
          color: #6b7280;
          margin-left: 4px;
        }
        .kpi-change {
          font-size: 13px;
          font-weight: 600;
          margin-top: 4px;
        }
        .kpi-change.positive { color: #16a34a; }
        .kpi-change.negative { color: #dc2626; }
      \`}</style>
    </div>
  );
}`,
    },
    {
      filename: 'src/components/LineChart.tsx',
      language: 'tsx',
      code: `import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LineChartProps {
  labels: string[];
  highData: number[];
  lowData: number[];
  loading?: boolean;
}

export function LineChart({ labels, highData, lowData, loading }: LineChartProps) {
  if (loading) {
    return <div className="skeleton" style={{ width: '100%', height: '100%' }} />;
  }

  const data = {
    labels,
    datasets: [
      {
        label: '최고 기온',
        data: highData,
        borderColor: '#0046C8',
        backgroundColor: 'rgba(0, 70, 200, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: '#0046C8',
      },
      {
        label: '최저 기온',
        data: lowData,
        borderColor: '#60a5fa',
        backgroundColor: 'rgba(96, 165, 250, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: '#60a5fa',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 16,
          font: { size: 12, family: "'Noto Sans KR', sans-serif" },
        },
      },
      tooltip: {
        backgroundColor: '#1a1a2e',
        titleFont: { family: "'Noto Sans KR', sans-serif" },
        bodyFont: { family: "'Noto Sans KR', sans-serif" },
        callbacks: {
          label: (ctx: { dataset: { label?: string }; parsed: { y: number | null } }) =>
            \`\${ctx.dataset.label}: \${ctx.parsed.y}°C\`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: { color: 'rgba(0,0,0,0.05)' },
        ticks: {
          callback: (val: string | number) => \`\${val}°C\`,
          font: { size: 11 },
        },
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 } },
      },
    },
  };

  return <Line data={data} options={options} />;
}`,
    },
    {
      filename: 'src/components/BarChart.tsx',
      language: 'tsx',
      code: `import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  labels: string[];
  data: number[];
  loading?: boolean;
}

export function BarChart({ labels, data: values, loading }: BarChartProps) {
  if (loading) {
    return <div className="skeleton" style={{ width: '100%', height: '100%' }} />;
  }

  const barColors = [
    'rgba(0, 70, 200, 0.8)',
    'rgba(37, 99, 235, 0.8)',
    'rgba(59, 130, 246, 0.8)',
    'rgba(96, 165, 250, 0.8)',
    'rgba(147, 197, 253, 0.8)',
  ];

  const borderColors = [
    '#0046C8',
    '#2563eb',
    '#3b82f6',
    '#60a5fa',
    '#93c5fd',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: '환율 (KRW)',
        data: values,
        backgroundColor: barColors.slice(0, labels.length),
        borderColor: borderColors.slice(0, labels.length),
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1a1a2e',
        titleFont: { family: "'Noto Sans KR', sans-serif" },
        bodyFont: { family: "'Noto Sans KR', sans-serif" },
        callbacks: {
          label: (ctx: { parsed: { y: number | null } }) =>
            \`\${new Intl.NumberFormat('ko-KR').format(ctx.parsed.y ?? 0)} 원\`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(0,0,0,0.05)' },
        ticks: {
          callback: (val: string | number) =>
            new Intl.NumberFormat('ko-KR', { notation: 'compact' }).format(Number(val)),
          font: { size: 11 },
        },
      },
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 12, weight: 'bold' as const },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}`,
    },
    {
      filename: 'src/components/DataTable.tsx',
      language: 'tsx',
      code: `import { useState, useMemo } from 'react';
import type { DataTableProps } from '../types';

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  loading,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string>(columns[0]?.key ?? '');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const sortedData = useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      const modifier = sortOrder === 'asc' ? 1 : -1;

      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return (aVal - bVal) * modifier;
      }
      return String(aVal ?? '').localeCompare(String(bVal ?? '')) * modifier;
    });
  }, [data, sortKey, sortOrder]);

  function handleSort(key: string) {
    if (sortKey === key) {
      setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  }

  if (loading) {
    return (
      <div className="table-skeleton">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="skeleton" style={{ height: 40, marginBottom: 8 }} />
        ))}
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map(col => (
              <th
                key={col.key}
                onClick={() => col.sortable && handleSort(col.key)}
                className={col.sortable ? 'sortable' : ''}
                aria-sort={
                  sortKey === col.key
                    ? sortOrder === 'asc' ? 'ascending' : 'descending'
                    : undefined
                }
              >
                {col.label}
                {col.sortable && sortKey === col.key && (
                  <span className="sort-icon">
                    {sortOrder === 'asc' ? ' ▲' : ' ▼'}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, idx) => (
            <tr key={idx}>
              {columns.map(col => (
                <td key={col.key}>{String(row[col.key] ?? '')}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <style>{\`
        .table-container {
          overflow-x: auto;
          max-height: 400px;
          overflow-y: auto;
        }
        .data-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }
        .data-table thead {
          position: sticky;
          top: 0;
          z-index: 1;
        }
        .data-table th {
          background: #f8fafc;
          padding: 12px 16px;
          text-align: left;
          font-weight: 600;
          color: #374151;
          border-bottom: 2px solid #e5e7eb;
          white-space: nowrap;
          user-select: none;
        }
        .data-table th.sortable {
          cursor: pointer;
        }
        .data-table th.sortable:hover {
          background: #f1f5f9;
        }
        .sort-icon {
          font-size: 11px;
          color: #0046C8;
        }
        .data-table td {
          padding: 10px 16px;
          border-bottom: 1px solid #f1f5f9;
          color: #4b5563;
          max-width: 400px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .data-table tbody tr:hover {
          background: #f8fafc;
        }
        .table-skeleton {
          padding: 8px 0;
        }
      \`}</style>
    </div>
  );
}`,
    },
    {
      filename: 'src/components/DashboardHeader.tsx',
      language: 'tsx',
      code: `import { useState } from 'react';

interface DashboardHeaderProps {
  onRefresh: () => void;
}

export function DashboardHeader({ onRefresh }: DashboardHeaderProps) {
  const [spinning, setSpinning] = useState(false);

  const handleRefresh = () => {
    setSpinning(true);
    onRefresh();
    setTimeout(() => setSpinning(false), 1000);
  };

  const now = new Date();
  const timeString = now.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1 className="header-title">API 대시보드</h1>
        <p className="header-subtitle">실시간 데이터 모니터링</p>
      </div>
      <div className="header-right">
        <span className="last-updated">마지막 업데이트: {timeString}</span>
        <button
          className={\`refresh-btn \${spinning ? 'spinning' : ''}\`}
          onClick={handleRefresh}
          title="데이터 새로고침"
        >
          &#x21bb;
        </button>
      </div>

      <style>{\`
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .header-title {
          font-size: 28px;
          font-weight: 800;
          color: #1a1a2e;
        }
        .header-subtitle {
          font-size: 14px;
          color: #6b7280;
          margin-top: 2px;
        }
        .header-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .last-updated {
          font-size: 13px;
          color: #9ca3af;
        }
        .refresh-btn {
          width: 36px;
          height: 36px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          background: #ffffff;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          color: #374151;
        }
        .refresh-btn:hover {
          border-color: #0046C8;
          color: #0046C8;
        }
        .refresh-btn.spinning {
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .header-title { font-size: 22px; }
          .last-updated { display: none; }
        }
      \`}</style>
    </header>
  );
}`,
    },
  ],
};
