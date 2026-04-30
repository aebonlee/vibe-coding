const t=[{id:"todo-app",slug:"todo-app",title:"Todo App 만들기",description:"React와 localStorage를 활용한 할 일 관리 앱. CRUD와 필터링 기능 구현.",level:"beginner",duration:"2-3시간",techStack:["React","Lovable","localStorage"],outcomes:["CRUD 기능 구현","상태관리 이해","AI 프롬프트 작성 능력"],diagram:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="760" height="320" font-family="'Noto Sans KR', sans-serif">
  <defs>
    <marker id="todo-arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#0046C8"/>
    </marker>
  </defs>
  <rect x="1" y="1" width="758" height="318" rx="12" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="2"/>
  <text x="380" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="#111827">Todo App 컴포넌트 구조 &amp; 데이터 흐름</text>
  <!-- App 컴포넌트 -->
  <rect x="310" y="45" width="140" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="70" text-anchor="middle" font-size="14" font-weight="bold" fill="#111827">App</text>
  <text x="380" y="100" text-anchor="middle" font-size="11" fill="#4B5563">컴포넌트 트리</text>
  <!-- 화살표: App → TodoHeader -->
  <line x1="340" y1="85" x2="140" y2="120" stroke="#0046C8" stroke-width="2" marker-end="url(#todo-arrow)"/>
  <!-- 화살표: App → TodoList -->
  <line x1="380" y1="85" x2="380" y2="120" stroke="#0046C8" stroke-width="2" marker-end="url(#todo-arrow)"/>
  <!-- 화살표: App → TodoFilter -->
  <line x1="420" y1="85" x2="620" y2="120" stroke="#0046C8" stroke-width="2" marker-end="url(#todo-arrow)"/>
  <!-- TodoHeader -->
  <rect x="60" y="120" width="160" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="140" y="145" text-anchor="middle" font-size="13" fill="#111827">TodoHeader (입력)</text>
  <!-- TodoList -->
  <rect x="300" y="120" width="160" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="145" text-anchor="middle" font-size="13" fill="#111827">TodoList (목록)</text>
  <!-- TodoFilter -->
  <rect x="540" y="120" width="160" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="620" y="145" text-anchor="middle" font-size="13" fill="#111827">TodoFilter (필터)</text>
  <!-- TodoList → TodoItem -->
  <line x1="380" y1="160" x2="380" y2="185" stroke="#0046C8" stroke-width="2" marker-end="url(#todo-arrow)"/>
  <rect x="300" y="185" width="160" height="36" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="208" text-anchor="middle" font-size="13" fill="#111827">TodoItem (항목)</text>
  <!-- 데이터 흐름 영역 -->
  <text x="380" y="248" text-anchor="middle" font-size="11" fill="#4B5563">데이터 흐름</text>
  <rect x="100" y="260" width="140" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="170" y="285" text-anchor="middle" font-size="13" fill="#111827">State (useState)</text>
  <!-- 양방향 화살표: State ↔ localStorage -->
  <line x1="240" y1="280" x2="370" y2="280" stroke="#0046C8" stroke-width="2" marker-end="url(#todo-arrow)"/>
  <line x1="370" y1="274" x2="240" y2="274" stroke="#0046C8" stroke-width="2" marker-end="url(#todo-arrow)"/>
  <text x="305" y="268" text-anchor="middle" font-size="10" fill="#4B5563">동기화</text>
  <rect x="370" y="260" width="150" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="445" y="285" text-anchor="middle" font-size="13" fill="#111827">localStorage</text>
  <!-- Filter → State 관계 -->
  <line x1="560" y1="280" x2="520" y2="280" stroke="#0046C8" stroke-width="2" marker-end="url(#todo-arrow)"/>
  <rect x="560" y="260" width="140" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="630" y="285" text-anchor="middle" font-size="13" fill="#111827">필터 상태</text>
</svg>`,steps:[{step:1,title:"프로젝트 설계",description:"Todo 앱의 기능과 UI를 설계합니다.",content:`이 단계에서는 Lovable(lovable.dev)에 접속하여 새 프로젝트를 시작합니다. Todo 앱은 바이브 코딩의 첫 프로젝트로 가장 적합합니다. 작은 규모이면서도 CRUD(생성, 읽기, 수정, 삭제)의 모든 요소를 포함하고 있기 때문입니다. 먼저 어떤 기능이 필요한지 목록을 작성한 후, AI에게 구체적으로 설명하는 것이 핵심입니다.

AI 프롬프트는 구체적일수록 좋은 결과를 얻습니다. 단순히 "Todo 앱 만들어줘"라고 하면 AI가 임의로 판단하게 됩니다. 대신 기능, 디자인 스타일, 색상 톤까지 설명하면 원하는 결과에 훨씬 가까운 코드가 생성됩니다.

**AI 프롬프트 예시 (Lovable):**
"React로 Todo 앱을 만들어주세요. 다음 기능이 필요합니다:
1. 할 일 추가 (입력창 + 추가 버튼)
2. 할 일 완료 체크 (체크박스)
3. 할 일 삭제 (삭제 버튼)
4. 깔끔한 미니멀 디자인, 파란색 계열 테마
5. 전체 화면 가운데 정렬, 최대 너비 600px
컴포넌트를 App, TodoHeader, TodoList, TodoItem으로 분리해주세요."

**예상 결과:**
Lovable이 기본적인 Todo 앱 코드를 생성합니다. 컴포넌트가 분리되어 있고, 기본적인 추가/삭제 기능이 동작하는 상태입니다. 미리보기로 즉시 확인할 수 있습니다.

**흔한 실수:**
프롬프트가 너무 짧으면 AI가 과도하게 복잡한 앱을 만들거나, 반대로 너무 단순한 앱을 만들 수 있습니다. "미니멀하게", "단순하게" 같은 키워드를 포함하면 초보자가 이해하기 쉬운 코드가 생성됩니다. 또한 컴포넌트 이름을 직접 지정하지 않으면 AI가 자체적으로 이름을 정하므로, 학습 자료와 일치하지 않을 수 있습니다.`,tips:["프롬프트에 구체적인 기능을 번호로 나열하면 AI가 빠뜨리지 않습니다","UI 스타일(미니멀, 모던, 컬러풀 등)을 함께 설명하면 디자인 품질이 올라갑니다","컴포넌트 이름을 직접 지정하면 코드 구조를 이해하기 쉬워집니다"]},{step:2,title:"UI 컴포넌트 생성",description:"AI로 기본 UI를 생성합니다.",content:`생성된 코드를 꼼꼼히 확인하고 컴포넌트 구조를 이해하는 것이 이 단계의 핵심입니다. AI가 만들어준 코드를 그대로 사용하는 것이 아니라, 왜 이렇게 구조가 나뉘었는지를 파악해야 합니다. Header에는 입력 폼, TodoList에는 목록 렌더링, TodoItem에는 개별 항목의 체크/삭제 로직이 들어갑니다.

**컴포넌트 구조 확인 사항:**
- App: 전체 상태(todos 배열)를 관리하는 최상위 컴포넌트
- TodoHeader: 새 할 일을 입력하는 폼 (input + button)
- TodoList: todos 배열을 map으로 순회하며 TodoItem을 렌더링
- TodoItem: 개별 할 일의 체크박스, 텍스트, 삭제 버튼

만약 생성된 코드가 하나의 파일에 모두 들어있다면, AI에게 분리를 요청하세요.

**AI 프롬프트 예시:**
"현재 코드를 컴포넌트별로 파일을 분리해주세요. TodoHeader.tsx, TodoList.tsx, TodoItem.tsx로 나누고, 각 컴포넌트에 적절한 Props 타입을 정의해주세요. TypeScript를 사용해주세요."

**예상 결과:**
각 컴포넌트가 별도 파일로 분리되고, Props 인터페이스가 정의됩니다. App.tsx에서 상태를 관리하고, 자식 컴포넌트에 props로 전달하는 구조가 됩니다.

**흔한 실수:**
컴포넌트를 분리할 때 상태 관리 위치를 잘못 잡는 경우가 많습니다. todos 상태는 반드시 App(또는 공통 부모)에 있어야 하며, 자식 컴포넌트에서는 props로 받아 사용합니다. 이것이 React의 "상태 끌어올리기(Lifting State Up)" 패턴입니다.`,codeExamples:[{language:"typescript",title:"Todo 타입 정의",code:`interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}`},{language:"typescript",title:"App 컴포넌트 기본 상태 관리",code:`function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos(prev => [
      ...prev,
      { id: Date.now(), text, completed: false, createdAt: new Date() }
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <TodoHeader onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}`}],tips:["AI가 생성한 코드의 import 경로가 맞는지 반드시 확인하세요","Todo 타입에 id를 Date.now()로 만들면 간단하고 고유한 값이 됩니다","컴포넌트 분리 후 화면이 깨지면 props 전달 누락을 먼저 확인하세요"]},{step:3,title:"기능 추가 - 필터링",description:"전체/완료/미완료 필터 기능을 추가합니다.",content:`필터링은 Todo 앱의 핵심 UX 기능입니다. 사용자가 "전체", "완료", "미완료" 버튼을 클릭하면 해당 조건에 맞는 항목만 표시됩니다. 이 기능을 구현하면서 배열의 filter 메서드와 조건부 렌더링을 자연스럽게 익힐 수 있습니다.

**구현 원리:**
필터 상태(filter)를 별도의 useState로 관리합니다. 값은 'all', 'completed', 'active' 중 하나입니다. TodoList에 전달하기 전에 todos 배열을 filter 상태에 따라 필터링합니다. 이렇게 하면 원본 데이터는 변경하지 않으면서 화면에 보여주는 데이터만 달라집니다.

**AI 프롬프트 예시:**
"필터 버튼을 추가해주세요. '전체', '완료', '미완료' 3개 버튼으로 필터링할 수 있게 해주세요. 현재 선택된 필터는 파란색 배경으로 강조 표시해주세요. 버튼은 TodoList 위에 가로로 배치해주세요. 각 필터 버튼 옆에 해당하는 항목 개수도 표시해주세요."

**예상 결과:**
TodoList 위에 3개의 필터 버튼이 나타나고, 클릭 시 해당 조건의 항목만 표시됩니다. 선택된 필터 버튼은 시각적으로 강조됩니다. 각 버튼 옆에 "(3)" 같은 카운트가 표시됩니다.

**흔한 실수:**
필터링 시 원본 todos 배열을 직접 수정하면 안 됩니다. setTodos로 필터링된 결과를 저장하면 원본 데이터가 사라져 "전체"로 돌아갈 수 없습니다. 반드시 useMemo나 별도 변수로 필터링된 결과를 계산하세요.`,codeExamples:[{language:"typescript",title:"필터 상태 관리 및 적용",code:`type FilterType = 'all' | 'completed' | 'active';

const [filter, setFilter] = useState<FilterType>('all');

const filteredTodos = useMemo(() => {
  switch (filter) {
    case 'completed':
      return todos.filter(todo => todo.completed);
    case 'active':
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
}, [todos, filter]);

const counts = useMemo(() => ({
  all: todos.length,
  completed: todos.filter(t => t.completed).length,
  active: todos.filter(t => !t.completed).length,
}), [todos]);`},{language:"tsx",title:"TodoFilter 컴포넌트",code:`function TodoFilter({ filter, onFilterChange, counts }: TodoFilterProps) {
  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: '전체' },
    { key: 'active', label: '미완료' },
    { key: 'completed', label: '완료' },
  ];

  return (
    <div className="filter-buttons">
      {filters.map(f => (
        <button
          key={f.key}
          className={filter === f.key ? 'active' : ''}
          onClick={() => onFilterChange(f.key)}
        >
          {f.label} ({counts[f.key]})
        </button>
      ))}
    </div>
  );
}`}],tips:["useMemo를 사용하면 todos가 변경될 때만 필터링이 재계산되어 성능이 좋아집니다","필터 버튼에 항목 수를 표시하면 사용자 경험이 크게 향상됩니다","필터링은 원본 배열을 변경하지 않고 새 배열을 반환하는 것이 핵심 원칙입니다"]},{step:4,title:"localStorage 연동",description:"브라우저 새로고침 후에도 데이터가 유지되도록 합니다.",content:`현재까지 만든 Todo 앱은 새로고침하면 데이터가 모두 사라집니다. React의 useState는 메모리에만 데이터를 저장하기 때문입니다. localStorage를 사용하면 브라우저에 데이터를 영구적으로 저장할 수 있습니다. 이 단계에서는 useEffect를 활용하여 상태와 localStorage를 동기화하는 방법을 배웁니다.

**구현 방법:**
두 가지 useEffect가 필요합니다. 첫 번째는 컴포넌트 마운트 시(빈 의존성 배열) localStorage에서 데이터를 읽어오는 것이고, 두 번째는 todos 상태가 변경될 때마다 localStorage에 저장하는 것입니다. JSON.stringify와 JSON.parse를 사용하여 배열 데이터를 문자열로 변환합니다.

**AI 프롬프트 예시:**
"localStorage를 사용해서 Todo 데이터를 저장하고, 페이지를 새로고침해도 데이터가 유지되게 해주세요. useEffect를 사용하고, localStorage의 키 이름은 'todos'로 해주세요. JSON.parse에서 에러가 발생할 경우 빈 배열로 초기화하는 에러 처리도 넣어주세요."

**예상 결과:**
할 일을 추가한 후 브라우저를 새로고침해도 데이터가 유지됩니다. 개발자 도구(F12) > Application > localStorage에서 저장된 데이터를 직접 확인할 수 있습니다.

**흔한 실수:**
useEffect의 의존성 배열을 빠뜨리면 무한 루프가 발생할 수 있습니다. 저장용 useEffect의 의존성 배열에는 [todos]를, 로드용 useEffect에는 []를 넣어야 합니다. 또한 초기 렌더링 시 빈 상태가 localStorage를 덮어쓰는 문제가 있으므로, useState의 초기값 함수(lazy initializer)를 사용하는 것이 더 안전합니다.`,codeExamples:[{language:"typescript",title:"localStorage 연동 (lazy initializer 패턴)",code:`const STORAGE_KEY = 'todos';

const [todos, setTodos] = useState<Todo[]>(() => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
});

// todos가 변경될 때마다 localStorage에 저장
useEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}, [todos]);`},{language:"typescript",title:"커스텀 훅으로 분리 (심화)",code:`function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

// 사용법
const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);`}],tips:["useState의 lazy initializer(함수 전달)를 사용하면 초기 렌더링 시 localStorage를 한 번만 읽습니다","JSON.parse는 항상 try-catch로 감싸야 합니다 - 손상된 데이터가 있으면 앱이 크래시됩니다","개발자 도구(F12) > Application > Local Storage에서 저장된 데이터를 직접 확인하고 디버깅하세요"]},{step:5,title:"스타일링 및 완성",description:"디자인을 다듬고 반응형으로 만듭니다.",content:`마지막 단계에서는 Todo 앱의 시각적 완성도를 높입니다. 기능이 완벽하더라도 디자인이 거칠면 사용하기 불편합니다. 반응형 디자인, 애니메이션, 접근성을 모두 챙기면 프로페셔널한 결과물이 됩니다.

**주요 스타일링 포인트:**
1. 반응형: 모바일(< 480px)에서 패딩과 폰트 크기 조절
2. 완료된 항목: 취소선 + 투명도 변경으로 시각적 구분
3. 호버 효과: 버튼과 항목에 hover 시 배경색 변경
4. 트랜지션: 항목 추가/삭제 시 부드러운 애니메이션
5. 접근성: 키보드 탐색, focus 스타일, aria-label 추가

**AI 프롬프트 예시:**
"Todo 앱의 스타일을 개선해주세요:
1. 완료된 항목은 취소선과 50% 투명도를 적용
2. 삭제 버튼은 빨간색으로, 호버 시 배경색 변경
3. 할 일 추가 시 fade-in 애니메이션 적용
4. 모바일에서 가로 패딩 16px, 버튼 터치 영역 44px 이상으로
5. 빈 목록일 때 '할 일을 추가해보세요!' 안내 메시지 표시
6. 상단에 완료율 프로그레스 바 추가"

**예상 결과:**
깔끔하고 사용하기 편한 Todo 앱이 완성됩니다. 완료 항목은 시각적으로 구분되고, 애니메이션이 적용되어 부드러운 사용감을 제공합니다. 모바일에서도 터치하기 편한 크기의 버튼이 표시됩니다.

**흔한 실수:**
CSS 애니메이션을 항목 삭제에 적용하려면 DOM에서 즉시 제거하면 안 됩니다. 삭제 애니메이션이 끝난 후 제거해야 하므로, onAnimationEnd 이벤트나 setTimeout을 활용해야 합니다. 처음에는 간단한 opacity 전환만 적용하고, 익숙해지면 height 애니메이션을 추가하세요.`,codeExamples:[{language:"css",title:"핵심 스타일링",code:`.todo-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s, opacity 0.3s;
}

.todo-item:hover {
  background-color: #f9fafb;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  opacity: 0.5;
  color: #9ca3af;
}

.todo-item.fade-in {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 480px) {
  .todo-container { padding: 0 16px; }
  .todo-item button { min-height: 44px; min-width: 44px; }
}`}],tips:["모바일 터치 영역은 최소 44x44px이어야 합니다 (Apple HIG 기준)","transition은 hover 효과에, animation은 등장/퇴장 효과에 사용하세요","빈 상태(Empty State) 메시지를 추가하면 UX가 크게 향상됩니다"]}]},{id:"portfolio",slug:"portfolio",title:"포트폴리오 사이트 만들기",description:"반응형 개인 포트폴리오 사이트. 다크모드와 섹션 구성 포함.",level:"beginner",duration:"3-4시간",techStack:["React","v0.dev","CSS"],outcomes:["반응형 디자인 구현","다크모드 토글","섹션 기반 레이아웃"],diagram:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="760" height="320" font-family="'Noto Sans KR', sans-serif">
  <defs>
    <marker id="port-arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#0046C8"/>
    </marker>
  </defs>
  <rect x="1" y="1" width="758" height="318" rx="12" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="2"/>
  <text x="380" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="#111827">포트폴리오 섹션 레이아웃 &amp; 반응형 구조</text>
  <!-- 섹션 흐름 (세로) -->
  <text x="190" y="55" text-anchor="middle" font-size="11" fill="#4B5563">페이지 섹션 흐름</text>
  <rect x="110" y="65" width="160" height="34" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="190" y="87" text-anchor="middle" font-size="13" fill="#111827">Hero (메인 비주얼)</text>
  <line x1="190" y1="99" x2="190" y2="110" stroke="#0046C8" stroke-width="2" marker-end="url(#port-arrow)"/>
  <rect x="110" y="110" width="160" height="34" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="190" y="132" text-anchor="middle" font-size="13" fill="#111827">About (자기소개)</text>
  <line x1="190" y1="144" x2="190" y2="155" stroke="#0046C8" stroke-width="2" marker-end="url(#port-arrow)"/>
  <rect x="110" y="155" width="160" height="34" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="190" y="177" text-anchor="middle" font-size="13" fill="#111827">Skills (기술 스택)</text>
  <line x1="190" y1="189" x2="190" y2="200" stroke="#0046C8" stroke-width="2" marker-end="url(#port-arrow)"/>
  <rect x="110" y="200" width="160" height="34" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="190" y="222" text-anchor="middle" font-size="13" fill="#111827">Projects (프로젝트)</text>
  <line x1="190" y1="234" x2="190" y2="245" stroke="#0046C8" stroke-width="2" marker-end="url(#port-arrow)"/>
  <rect x="110" y="245" width="160" height="34" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="190" y="267" text-anchor="middle" font-size="13" fill="#111827">Contact (연락처)</text>
  <!-- 반응형 브레이크포인트 -->
  <text x="530" y="55" text-anchor="middle" font-size="11" fill="#4B5563">반응형 브레이크포인트</text>
  <!-- 데스크톱 -->
  <rect x="420" y="65" width="220" height="55" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="530" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="#111827">데스크톱 (1024px+)</text>
  <text x="530" y="110" text-anchor="middle" font-size="11" fill="#4B5563">2열 그리드 / 내비게이션 바</text>
  <line x1="530" y1="120" x2="530" y2="135" stroke="#0046C8" stroke-width="2" marker-end="url(#port-arrow)"/>
  <!-- 태블릿 -->
  <rect x="420" y="135" width="220" height="55" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="530" y="155" text-anchor="middle" font-size="12" font-weight="bold" fill="#111827">태블릿 (768px~1023px)</text>
  <text x="530" y="180" text-anchor="middle" font-size="11" fill="#4B5563">1~2열 그리드 / 햄버거 메뉴</text>
  <line x1="530" y1="190" x2="530" y2="205" stroke="#0046C8" stroke-width="2" marker-end="url(#port-arrow)"/>
  <!-- 모바일 -->
  <rect x="420" y="205" width="220" height="55" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="530" y="225" text-anchor="middle" font-size="12" font-weight="bold" fill="#111827">모바일 (< 768px)</text>
  <text x="530" y="250" text-anchor="middle" font-size="11" fill="#4B5563">1열 스택 / 풀 와이드</text>
  <!-- 다크모드 토글 -->
  <rect x="420" y="275" width="220" height="34" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="530" y="297" text-anchor="middle" font-size="13" fill="#111827">다크모드 토글 (CSS 변수)</text>
</svg>`,steps:[{step:1,title:"구조 설계",description:"포트폴리오의 섹션을 기획합니다.",content:`포트폴리오 사이트는 자신을 효과적으로 소개하는 웹사이트입니다. 이 프로젝트에서는 v0.dev(vercel.com/v0)를 사용하여 섹션별로 디자인을 생성합니다. v0은 UI 디자인에 특화된 AI 도구로, 특히 모던하고 깔끔한 컴포넌트를 잘 만들어줍니다.

**섹션 구성:**
포트폴리오는 보통 5개 섹션으로 구성됩니다. Hero(메인 비주얼), About(자기소개), Skills(기술 스택), Projects(프로젝트), Contact(연락처)입니다. 각 섹션은 독립적인 컴포넌트로 만들고, 스크롤로 이동하는 원페이지(SPA) 구조가 가장 일반적입니다.

**AI 프롬프트 예시 (v0.dev):**
"개발자 포트폴리오 사이트의 전체 레이아웃을 만들어주세요.
- 상단 네비게이션: 로고 + 메뉴(About, Skills, Projects, Contact) + 다크모드 토글 버튼
- Hero 섹션: 이름, 직함, 한 줄 소개, 소셜 링크(GitHub, LinkedIn)
- About 섹션: 프로필 이미지(왼쪽) + 소개 텍스트(오른쪽) 2열 레이아웃
- Skills 섹션: 기술 태그를 카테고리별(Frontend, Backend, Tools) 그룹핑
- Projects 섹션: 카드 그리드(3열)로 프로젝트 표시
- Contact 섹션: 이메일 폼 또는 연락처 정보
- 부드러운 스크롤, 모던한 디자인, Tailwind CSS 사용"

**예상 결과:**
v0이 전체 포트폴리오 레이아웃을 생성합니다. 각 섹션이 구분되어 있고, 반응형 기본 구조가 잡혀 있습니다. 코드를 복사하여 로컬 프로젝트에 적용할 수 있습니다.

**흔한 실수:**
처음부터 모든 섹션을 한 번에 만들려고 하면 프롬프트가 너무 길어져 AI가 일부를 빠뜨릴 수 있습니다. 먼저 전체 구조를 잡은 후, 섹션별로 디테일을 추가하는 것이 효과적입니다.`,tips:["v0.dev에서 생성한 코드는 shadcn/ui 컴포넌트를 사용합니다 - 필요한 패키지 설치를 확인하세요","한 번에 완벽한 결과를 기대하지 말고, 섹션별로 나눠서 프롬프트하세요","레퍼런스 사이트 URL을 프롬프트에 포함하면 스타일 방향을 잡는 데 도움이 됩니다"]},{step:2,title:"Hero 섹션",description:"메인 비주얼과 소개 영역을 만듭니다.",content:`Hero 섹션은 방문자가 가장 먼저 보는 영역입니다. 첫인상을 결정하므로 깔끔하고 임팩트 있게 만들어야 합니다. 이름, 직함, 간단한 소개 문구, 그리고 소셜 링크 버튼이 핵심 요소입니다.

**디자인 포인트:**
- 화면 전체 높이(100vh)를 차지하는 풀스크린 레이아웃
- 콘텐츠는 화면 중앙에 배치 (flex center)
- 타이핑 효과 애니메이션으로 직함 표시
- CTA 버튼: "프로젝트 보기" 또는 "연락하기"

**AI 프롬프트 예시:**
"포트폴리오 Hero 섹션을 만들어주세요:
- 풀스크린 높이(100vh), 콘텐츠 가운데 정렬
- 이름: '홍길동' (큰 볼드체)
- 직함: 'Frontend Developer' (타이핑 애니메이션 효과)
- 한 줄 소개: '사용자 경험을 중요시하는 프론트엔드 개발자입니다'
- 버튼 2개: '프로젝트 보기'(primary), '연락하기'(outline)
- GitHub, LinkedIn 아이콘 링크
- 부드러운 배경 그라데이션
- 아래로 스크롤 화살표 애니메이션"

**예상 결과:**
화면 전체를 차지하는 깔끔한 Hero 섹션이 생성됩니다. 이름과 직함이 눈에 띄게 표시되고, 버튼과 소셜 링크가 배치됩니다. 아래쪽에 스크롤 유도 화살표가 위아래로 움직이는 애니메이션이 있습니다.

**흔한 실수:**
풀스크린 높이를 100vh로 설정할 때 모바일에서 주소창 때문에 콘텐츠가 잘릴 수 있습니다. dvh(dynamic viewport height) 단위를 사용하거나, min-height: 100vh로 설정하면 이 문제를 해결할 수 있습니다.`,codeExamples:[{language:"tsx",title:"Hero 섹션 기본 구조",code:`function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-name">홍길동</h1>
        <p className="hero-title">
          <TypeWriter texts={['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast']} />
        </p>
        <p className="hero-description">
          사용자 경험을 중요시하는 프론트엔드 개발자입니다
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">프로젝트 보기</a>
          <a href="#contact" className="btn btn-outline">연락하기</a>
        </div>
        <div className="hero-social">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span className="scroll-arrow">&#x2193;</span>
      </div>
    </section>
  );
}`}],tips:["min-height: 100dvh를 사용하면 모바일 주소창 문제를 해결할 수 있습니다","Hero 섹션의 텍스트는 3초 내에 핵심을 전달할 수 있도록 간결하게 작성하세요","CTA 버튼은 최대 2개까지만 배치하세요 - 너무 많으면 선택 장애가 생깁니다"]},{step:3,title:"About & Skills",description:"자기소개와 기술 스택을 표시합니다.",content:`About 섹션은 자신을 소개하는 영역이고, Skills 섹션은 보유한 기술 스택을 시각적으로 보여주는 영역입니다. 이 두 섹션은 채용 담당자가 가장 주의 깊게 보는 부분이므로, 정보의 가독성과 시각적 매력을 모두 잡아야 합니다.

**About 섹션 구성:**
- 왼쪽: 프로필 이미지 (원형 또는 라운드 사각형)
- 오른쪽: 소개 텍스트 (2-3 문단) + 핵심 경력/학력 리스트
- 모바일에서는 이미지가 위, 텍스트가 아래로 배치

**Skills 섹션 구성:**
카테고리별로 기술을 그룹핑합니다. Frontend(React, TypeScript, CSS), Backend(Node.js, Python), Tools(Git, Docker, Figma) 등으로 나누면 깔끔합니다. 태그 형태나 프로그레스 바 형태 중 선택할 수 있습니다.

**AI 프롬프트 예시:**
"About 섹션을 만들어주세요:
- 2열 레이아웃: 왼쪽에 프로필 이미지(placeholder), 오른쪽에 소개 텍스트
- 소개 텍스트 아래에 '경력 3년', '프로젝트 10+', '기술 블로그 운영' 같은 통계 카드 3개

Skills 섹션도 만들어주세요:
- 카테고리별 그룹핑 (Frontend, Backend, Tools)
- 각 기술은 아이콘 + 이름의 태그 형태로 표시
- 호버 시 살짝 위로 올라오는 애니메이션
- 반응형: 데스크톱 3열, 태블릿 2열, 모바일 1열"

**예상 결과:**
About 섹션에 이미지와 텍스트가 나란히 배치되고, 아래에 통계 카드가 표시됩니다. Skills 섹션에는 카테고리별로 기술 태그가 그리드로 배치됩니다.

**흔한 실수:**
프로필 이미지를 너무 크게 설정하면 모바일에서 화면 대부분을 차지합니다. max-width를 200~250px로 제한하세요. Skills에서 프로그레스 바(실력 퍼센트)를 사용하는 것은 논란이 있습니다. 객관적 기준이 없어 오히려 마이너스가 될 수 있으므로, 태그 형태를 추천합니다.`,codeExamples:[{language:"tsx",title:"Skills 섹션 - 카테고리별 태그",code:`const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker', 'Figma', 'VS Code'],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map(category => (
          <div key={category.title} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}`}],tips:["프로필 이미지는 정사각형 비율로 준비하고, CSS로 원형(border-radius: 50%)으로 만드세요","Skills에서 프로그레스 바 대신 태그 형태를 추천합니다 - 실력 퍼센트는 객관성이 부족합니다","Intersection Observer API를 사용하면 스크롤 시 섹션이 나타나는 애니메이션을 쉽게 구현할 수 있습니다"]},{step:4,title:"Projects 섹션",description:"프로젝트 카드 그리드를 만듭니다.",content:`Projects 섹션은 포트폴리오의 핵심입니다. 자신이 만든 프로젝트를 카드 형태로 보여주며, 각 카드에는 프로젝트 제목, 설명, 사용 기술, 라이브 링크, GitHub 링크가 포함됩니다. 시각적으로 매력적인 카드 디자인이 중요합니다.

**카드 구성 요소:**
- 상단: 프로젝트 스크린샷 또는 썸네일 이미지
- 중단: 제목, 간단한 설명 (2-3줄)
- 하단: 기술 태그 + 링크 버튼(Live Demo, GitHub)

**데이터 구조:**
프로젝트 데이터를 배열로 관리하면 유지보수가 쉽습니다. 새 프로젝트를 추가할 때 배열에 객체만 추가하면 자동으로 카드가 생성됩니다.

**AI 프롬프트 예시:**
"Projects 섹션을 만들어주세요:
- 3열 그리드 레이아웃 (반응형: 태블릿 2열, 모바일 1열)
- 각 카드: 상단 이미지(16:9 비율), 제목, 설명(2줄 말줄임), 기술 태그(최대 4개), 링크 버튼 2개
- 카드 호버 시 살짝 위로 올라가고 그림자 효과
- 카드 이미지 호버 시 살짝 줌인 효과
- 프로젝트 데이터는 배열로 관리하여 쉽게 추가/수정 가능하게
- 3~4개의 더미 프로젝트 데이터 포함"

**예상 결과:**
카드 그리드가 깔끔하게 표시되고, 호버 시 자연스러운 인터랙션이 동작합니다. 카드를 클릭하면 라이브 데모 또는 GitHub 페이지로 이동합니다.

**흔한 실수:**
이미지 비율이 카드마다 다르면 그리드가 들쭉날쭉해집니다. object-fit: cover와 고정 높이를 사용하여 모든 카드의 이미지 영역을 통일하세요. 설명이 길어지면 카드 높이가 달라지므로 line-clamp로 줄 수를 제한하세요.`,codeExamples:[{language:"typescript",title:"프로젝트 데이터 구조",code:`interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Todo App',
    description: 'React와 localStorage를 활용한 할 일 관리 앱',
    image: '/images/todo-app.png',
    techStack: ['React', 'TypeScript', 'CSS'],
    liveUrl: 'https://todo.example.com',
    githubUrl: 'https://github.com/user/todo-app',
  },
  // ... 더 많은 프로젝트
];`},{language:"css",title:"프로젝트 카드 스타일",code:`.project-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.project-card .card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s;
}

.project-card:hover .card-image {
  transform: scale(1.05);
}

.card-description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`}],tips:["object-fit: cover로 이미지 비율을 통일하면 그리드가 깔끔해집니다","line-clamp로 설명 텍스트 줄 수를 제한하면 카드 높이가 일정해집니다","프로젝트 스크린샷은 직접 캡처하거나, placeholder 서비스(placehold.co)를 임시로 사용하세요"]},{step:5,title:"다크모드",description:"라이트/다크 테마 토글을 구현합니다.",content:`다크모드는 현대 웹사이트의 필수 기능입니다. CSS 변수(Custom Properties)를 활용하면 테마 전환을 깔끔하게 구현할 수 있습니다. body 또는 html에 data-theme 속성을 추가하고, CSS 변수 값을 바꾸는 방식입니다.

**구현 원리:**
1. CSS 변수로 색상 정의 (--bg-color, --text-color, --card-bg 등)
2. [data-theme="dark"] 선택자로 다크 모드 색상 정의
3. JavaScript(React)에서 data-theme 속성을 토글
4. localStorage에 테마 선택을 저장하여 새로고침 후에도 유지
5. prefers-color-scheme 미디어 쿼리로 시스템 설정 감지

**AI 프롬프트 예시:**
"다크모드 토글 기능을 추가해주세요:
- CSS 변수를 사용하여 라이트/다크 테마 색상 정의
- 네비게이션 바 우측에 해/달 아이콘 토글 버튼 배치
- 토글 시 부드러운 전환 애니메이션 (transition 0.3s)
- localStorage에 테마 저장하여 새로고침 후에도 유지
- 시스템 다크모드 설정을 기본값으로 감지
- 모든 섹션(Hero, About, Skills, Projects, Contact)에 다크모드 색상 적용"

**예상 결과:**
토글 버튼을 클릭하면 전체 페이지가 부드럽게 라이트/다크 모드로 전환됩니다. 새로고침 후에도 마지막 선택이 유지되고, 처음 방문 시에는 시스템 설정을 따릅니다.

**흔한 실수:**
CSS 변수를 일부 요소에만 적용하면 다크모드에서 특정 영역만 밝게 남는 문제가 발생합니다. 모든 배경색, 텍스트 색, 보더 색을 CSS 변수로 관리해야 합니다. 또한 이미지(로고, 프로필)가 다크모드에서 잘 보이는지도 확인해야 합니다.`,codeExamples:[{language:"css",title:"CSS 변수 기반 테마 시스템",code:`:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --text-primary: #111827;
  --text-secondary: #4b5563;
  --border-color: #e5e7eb;
  --card-bg: #ffffff;
  --card-shadow: rgba(0, 0, 0, 0.08);
  --accent: #0046C8;
}

[data-theme="dark"] {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --border-color: #334155;
  --card-bg: #1e293b;
  --card-shadow: rgba(0, 0, 0, 0.3);
  --accent: #60a5fa;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s, color 0.3s;
}`},{language:"typescript",title:"다크모드 토글 훅",code:`function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme', isDark ? 'dark' : 'light'
    );
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggle = () => setIsDark(prev => !prev);

  return { isDark, toggle };
}`}],tips:["모든 색상을 CSS 변수로 관리해야 다크모드 전환 시 빠뜨리는 곳이 없습니다","prefers-color-scheme 미디어 쿼리로 시스템 설정을 감지하면 첫 방문자의 UX가 좋아집니다","transition을 body에 적용할 때 duration은 0.3s가 자연스럽습니다 - 너무 길면 답답합니다"]},{step:6,title:"반응형 및 배포",description:"모바일 대응과 배포를 진행합니다.",content:`마지막 단계에서는 모든 섹션의 반응형 레이아웃을 점검하고, 실제 배포하여 온라인에 공개합니다. 반응형 디자인은 데스크톱, 태블릿, 모바일 3가지 화면 크기에서 모두 잘 보이도록 만드는 것입니다.

**반응형 체크리스트:**
- 768px 미만: 네비게이션을 햄버거 메뉴로 변경
- 768px 미만: 2열 레이아웃을 1열로 변경 (About, Projects)
- 480px 미만: 폰트 크기 축소, 패딩 줄이기
- 모든 이미지: max-width: 100%로 넘침 방지
- 버튼/링크: 터치 영역 44px 이상

**AI 프롬프트 예시:**
"포트폴리오를 완전히 반응형으로 만들어주세요:
- 768px 미만에서 네비게이션을 햄버거 메뉴로 변경 (클릭 시 슬라이드 메뉴)
- About 섹션: 모바일에서 이미지가 위, 텍스트가 아래로 배치
- Projects 그리드: 태블릿 2열, 모바일 1열
- Hero 섹션: 모바일에서 폰트 크기 줄이기
- 모든 곳에서 가로 스크롤이 발생하지 않도록
- GitHub Pages로 배포할 수 있도록 빌드 설정도 확인해주세요"

**배포 방법 (GitHub Pages):**
1. GitHub에 리포지토리 생성
2. npm run build로 빌드
3. npx gh-pages -d dist로 배포
4. CNAME 파일에 커스텀 도메인 설정 (선택)

**예상 결과:**
모든 화면 크기에서 깔끔하게 보이는 포트폴리오가 완성되고, 실제 URL로 접속 가능합니다.

**흔한 실수:**
반응형 테스트를 크롬 개발자 도구의 "모바일 시뮬레이터"로만 하면 실제 기기에서 차이가 날 수 있습니다. 가능하면 실제 스마트폰에서도 확인하세요. 특히 iOS Safari에서 100vh 문제, 폰트 렌더링 차이, 터치 이벤트 등이 다를 수 있습니다.`,codeExamples:[{language:"css",title:"반응형 미디어 쿼리 구조",code:`/* 태블릿 */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 모바일 */
@media (max-width: 768px) {
  .nav-menu { display: none; }
  .hamburger { display: block; }

  .about-content {
    flex-direction: column;
    text-align: center;
  }

  .about-image {
    margin-bottom: 24px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .hero-name {
    font-size: 2rem;
  }
}

/* 소형 모바일 */
@media (max-width: 480px) {
  .section { padding: 40px 16px; }
  .hero-name { font-size: 1.5rem; }
}`}],tips:["개발자 도구(F12)에서 다양한 기기 크기로 테스트하되, 실제 기기에서도 반드시 확인하세요","GitHub Pages 배포 시 vite.config.ts의 base 경로를 확인하세요","네비게이션 smooth scroll은 CSS의 scroll-behavior: smooth 한 줄로 구현할 수 있습니다"]}]},{id:"saas-landing",slug:"saas-landing",title:"SaaS 랜딩 프로토타입",description:"구독 폼, 가격표, CTA가 포함된 SaaS 랜딩 페이지.",level:"beginner",duration:"2-3시간",techStack:["React","Bolt.new","Tailwind"],outcomes:["마케팅 페이지 설계","가격 테이블 구현","CTA 최적화"],diagram:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="760" height="320" font-family="'Noto Sans KR', sans-serif">
  <defs>
    <marker id="saas-arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#0046C8"/>
    </marker>
  </defs>
  <rect x="1" y="1" width="758" height="318" rx="12" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="2"/>
  <text x="380" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="#111827">SaaS 랜딩 전환 퍼널 &amp; 페이지 섹션</text>
  <!-- 전환 퍼널 (왼쪽) -->
  <text x="175" y="55" text-anchor="middle" font-size="11" fill="#4B5563">전환 퍼널 (Conversion Funnel)</text>
  <!-- 퍼널 단계들 (점점 좁아지는 형태) -->
  <rect x="70" y="65" width="210" height="34" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="175" y="87" text-anchor="middle" font-size="13" fill="#111827">방문 (Visit)</text>
  <line x1="175" y1="99" x2="175" y2="110" stroke="#0046C8" stroke-width="2" marker-end="url(#saas-arrow)"/>
  <rect x="90" y="110" width="170" height="34" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="175" y="132" text-anchor="middle" font-size="13" fill="#111827">기능 확인 (Features)</text>
  <line x1="175" y1="144" x2="175" y2="155" stroke="#0046C8" stroke-width="2" marker-end="url(#saas-arrow)"/>
  <rect x="105" y="155" width="140" height="34" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="175" y="177" text-anchor="middle" font-size="13" fill="#111827">가격 비교 (Pricing)</text>
  <line x1="175" y1="189" x2="175" y2="200" stroke="#0046C8" stroke-width="2" marker-end="url(#saas-arrow)"/>
  <rect x="120" y="200" width="110" height="34" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="175" y="222" text-anchor="middle" font-size="13" fill="#111827">행동 유도 (CTA)</text>
  <line x1="175" y1="234" x2="175" y2="245" stroke="#0046C8" stroke-width="2" marker-end="url(#saas-arrow)"/>
  <rect x="135" y="245" width="80" height="34" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="175" y="267" text-anchor="middle" font-size="13" fill="#111827">구독 완료</text>
  <!-- 페이지 섹션 (오른쪽) -->
  <text x="540" y="55" text-anchor="middle" font-size="11" fill="#4B5563">페이지 섹션 구조</text>
  <rect x="420" y="65" width="240" height="30" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="540" y="85" text-anchor="middle" font-size="12" fill="#111827">Navigation (로고 + 메뉴 + CTA)</text>
  <rect x="420" y="100" width="240" height="30" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="540" y="120" text-anchor="middle" font-size="12" fill="#111827">Hero (헤드라인 + 부제 + 버튼)</text>
  <rect x="420" y="135" width="240" height="30" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="540" y="155" text-anchor="middle" font-size="12" fill="#111827">Social Proof (로고 배너)</text>
  <rect x="420" y="170" width="240" height="30" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="540" y="190" text-anchor="middle" font-size="12" fill="#111827">Features (3~4개 기능 카드)</text>
  <rect x="420" y="205" width="240" height="30" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="540" y="225" text-anchor="middle" font-size="12" fill="#111827">Pricing (3단계 가격표)</text>
  <rect x="420" y="240" width="240" height="30" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="540" y="260" text-anchor="middle" font-size="12" fill="#111827">Testimonials (고객 후기)</text>
  <rect x="420" y="275" width="240" height="30" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="540" y="295" text-anchor="middle" font-size="12" fill="#111827">Footer (CTA + 구독 폼 + 링크)</text>
  <!-- 연결 화살표 (퍼널 → 섹션) -->
  <line x1="280" y1="82" x2="420" y2="115" stroke="#0046C8" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#saas-arrow)"/>
  <line x1="260" y1="127" x2="420" y2="185" stroke="#0046C8" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#saas-arrow)"/>
  <line x1="245" y1="172" x2="420" y2="220" stroke="#0046C8" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#saas-arrow)"/>
  <line x1="230" y1="217" x2="420" y2="290" stroke="#0046C8" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#saas-arrow)"/>
</svg>`,steps:[{step:1,title:"랜딩 기획",description:"SaaS 제품의 컨셉과 섹션을 기획합니다.",content:`SaaS 랜딩 페이지는 방문자를 유료 고객으로 전환시키는 것이 목표입니다. 따라서 "전환 퍼널(Conversion Funnel)" 개념을 이해하는 것이 중요합니다. 방문자가 페이지를 스크롤하면서 제품의 가치를 이해하고, 최종적으로 구독이나 무료 체험을 시작하도록 유도해야 합니다.

**먼저 가상의 SaaS 제품을 설정합니다.**
예를 들어 "TeamFlow"라는 프로젝트 관리 도구를 만든다고 가정합니다. 제품명, 핵심 가치 제안(Value Proposition), 타겟 고객을 정하면 나머지 콘텐츠가 자연스럽게 따라옵니다.

**섹션 구성 (권장 순서):**
1. Navigation: 로고 + 메뉴 + "무료 시작" CTA 버튼
2. Hero: 강력한 헤드라인 + 부제목 + CTA 버튼 + 제품 스크린샷
3. Social Proof: "1,000+ 팀이 사용 중" + 기업 로고 배너
4. Features: 핵심 기능 3-4개 (아이콘 + 제목 + 설명)
5. Pricing: Free / Pro / Enterprise 3단계 가격표
6. Testimonials: 고객 후기 2-3개
7. CTA / Newsletter: 최종 행동 유도 + 이메일 구독 폼
8. Footer: 링크, 소셜, 저작권

**AI 프롬프트 예시 (Bolt.new):**
"'TeamFlow'라는 프로젝트 관리 SaaS 제품의 랜딩 페이지를 만들어주세요.
React + Tailwind CSS를 사용하고, 다음 섹션을 포함해주세요:
Navigation, Hero, Social Proof, Features(4개), Pricing(3단계), Testimonials(3개), CTA, Footer
모던하고 프로페셔널한 디자인으로, 파란색을 메인 컬러로 사용해주세요.
각 섹션을 별도 컴포넌트로 분리해주세요."

**예상 결과:**
Bolt.new가 완전한 랜딩 페이지 코드를 생성합니다. 각 섹션이 컴포넌트로 분리되어 있고, Tailwind CSS가 적용된 상태입니다. 즉시 미리보기로 확인할 수 있습니다.

**흔한 실수:**
SaaS 랜딩의 가장 큰 실수는 기능 나열에만 집중하는 것입니다. 방문자는 기능보다 "이 제품이 나의 문제를 어떻게 해결해주는가"에 관심이 있습니다. 헤드라인에 기능이 아닌 "결과(benefit)"를 강조하세요.`,tips:['SaaS 랜딩의 핵심은 "기능"이 아니라 "고객의 문제 해결"입니다 - 헤드라인에 benefit을 강조하세요',"Bolt.new는 전체 프로젝트를 생성하므로, 한 번에 모든 섹션을 프롬프트해도 잘 동작합니다","실제 SaaS 사이트(Notion, Slack, Linear 등)를 참고하면 디자인 감각을 빠르게 키울 수 있습니다"]},{step:2,title:"Hero & Features",description:"메인 비주얼과 기능 소개 영역을 만듭니다.",content:`Hero 섹션은 랜딩 페이지에서 가장 중요한 영역입니다. 방문자의 78%가 Hero 섹션만 보고 이탈하거나 계속 스크롤할지를 결정합니다. 따라서 강력한 헤드라인, 명확한 부제목, 시각적인 제품 이미지가 필수입니다.

**Hero 섹션 구성:**
- 헤드라인: 한 문장으로 핵심 가치 전달 (예: "팀 협업을 10배 빠르게")
- 부제목: 헤드라인 보충 설명 (1-2줄)
- CTA 버튼: "무료로 시작하기" (강조색), "데모 보기" (보조)
- 비주얼: 제품 스크린샷 또는 목업 이미지

**Features 섹션 구성:**
3-4개의 핵심 기능을 카드 형태로 표시합니다. 각 카드에는 아이콘, 제목, 2-3줄 설명이 들어갑니다. 일부 기능은 좌우 교차 레이아웃(이미지 + 텍스트)으로 상세하게 보여줄 수도 있습니다.

**AI 프롬프트 예시:**
"Hero 섹션을 개선해주세요:
- 헤드라인: '팀 협업을 10배 빠르게' (큰 볼드체, gradient 텍스트 효과)
- 부제목: 'TeamFlow로 프로젝트 관리, 소통, 문서를 한 곳에서'
- CTA: '무료로 시작하기'(파란 배경 버튼) + '데모 보기'(투명 아웃라인 버튼)
- 하단에 제품 스크린샷 목업 (그림자 + 라운드 코너)
- 배경에 부드러운 그라데이션 또는 미세한 패턴

Features 섹션도 만들어주세요:
- 4개 기능 카드: 실시간 협업, 칸반 보드, 자동 리포트, 통합 메신저
- 각 카드에 Lucide 아이콘 사용
- 호버 시 카드 배경색 변경 + 살짝 위로 이동"

**예상 결과:**
시선을 사로잡는 Hero와 깔끔한 Features 섹션이 생성됩니다. CTA 버튼이 눈에 띄고, 제품의 핵심 가치가 명확하게 전달됩니다.

**흔한 실수:**
CTA 버튼 텍스트가 너무 일반적이면(예: "자세히 알아보기") 클릭률이 낮아집니다. "무료로 시작하기", "14일 무료 체험" 같은 행동 지향적이고 구체적인 텍스트를 사용하세요. Hero 이미지가 없으면 텍스트만으로는 시각적 임팩트가 부족합니다.`,codeExamples:[{language:"tsx",title:"Hero 섹션 구조",code:`function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          팀 협업을{' '}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            10배 빠르게
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          TeamFlow로 프로젝트 관리, 소통, 문서를 한 곳에서 해결하세요.
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
            무료로 시작하기
          </button>
          <button className="px-8 py-3 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition font-medium">
            데모 보기
          </button>
        </div>
        <div className="max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden border border-gray-200">
          <img src="/mockup.png" alt="TeamFlow 제품 화면" className="w-full" />
        </div>
      </div>
    </section>
  );
}`},{language:"tsx",title:"Features 카드 컴포넌트",code:`const features = [
  { icon: 'Users', title: '실시간 협업', desc: '팀원과 동시에 문서를 편집하고, 변경 사항을 즉시 확인하세요.' },
  { icon: 'Layout', title: '칸반 보드', desc: '드래그 앤 드롭으로 작업을 관리하고 진행 상황을 시각화하세요.' },
  { icon: 'BarChart', title: '자동 리포트', desc: '프로젝트 진행률, 팀 생산성을 자동으로 분석하고 리포트합니다.' },
  { icon: 'MessageCircle', title: '통합 메신저', desc: '별도 앱 없이 프로젝트 내에서 바로 소통하세요.' },
];

function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">핵심 기능</h2>
        <p className="text-gray-600 text-center mb-12">
          TeamFlow가 제공하는 강력한 기능을 확인하세요
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(f => (
            <div key={f.title}
              className="p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                {/* Lucide 아이콘 */}
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`}],tips:['Hero 헤드라인은 "무엇을(What)"이 아닌 "왜(Why)" 또는 "결과(Result)"에 초점을 맞추세요',"CTA 버튼은 대비가 강한 색상으로, 페이지에서 가장 눈에 띄어야 합니다","Features는 3-4개가 적당합니다 - 너무 많으면 오히려 핵심이 흐려집니다"]},{step:3,title:"가격 테이블",description:"3단계 가격 플랜을 만듭니다.",content:`가격 테이블(Pricing Table)은 SaaS 랜딩에서 전환율에 가장 직접적인 영향을 미치는 섹션입니다. 보통 3단계(Free, Pro, Enterprise) 구조를 사용하며, 가운데 플랜을 "추천"으로 강조하여 시선을 유도하는 것이 일반적입니다. 이를 "앵커링 효과"라고 합니다.

**3단 가격 구성 원칙:**
- Free: 기본 기능만 제공, 사용량 제한. 진입장벽을 낮추는 역할
- Pro: 핵심 기능 전체 + 높은 사용량. 가장 많이 선택하도록 유도 (시각적 강조)
- Enterprise: 무제한 + 전용 지원 + 커스텀. "문의하기" 버튼 사용

**AI 프롬프트 예시:**
"3단계 가격 테이블을 만들어주세요:

Free (월 0원):
- 사용자 3명까지
- 프로젝트 5개
- 기본 칸반 보드
- 커뮤니티 지원

Pro (월 15,000원) - '인기' 뱃지:
- 사용자 무제한
- 프로젝트 무제한
- 고급 리포트
- 우선 이메일 지원
- 통합 API 접근

Enterprise (맞춤 가격):
- 모든 Pro 기능
- 전용 매니저
- SLA 보장
- 커스텀 통합
- '문의하기' 버튼

가운데 Pro 카드를 시각적으로 강조 (크기, 테두리, 배경색 차별화)
월간/연간 토글 스위치 추가 (연간은 20% 할인 표시)"

**예상 결과:**
3개의 가격 카드가 나란히 배치되고, Pro 카드가 크기와 색상으로 강조됩니다. 월간/연간 토글을 전환하면 가격이 바뀌고, 연간에는 "20% 할인" 뱃지가 표시됩니다.

**흔한 실수:**
가격 카드 간 기능 비교가 어려우면 사용자가 혼란을 느낍니다. 모든 플랜에서 동일한 순서로 기능을 나열하고, 미포함 기능은 취소선이나 흐린 색으로 표시하세요. 체크마크와 엑스 아이콘을 사용하면 한눈에 비교할 수 있습니다.`,codeExamples:[{language:"typescript",title:"가격 데이터 구조",code:`interface PricingPlan {
  name: string;
  price: { monthly: number; yearly: number };
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

const plans: PricingPlan[] = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    description: '소규모 팀을 위한 기본 플랜',
    features: ['사용자 3명', '프로젝트 5개', '기본 칸반 보드', '커뮤니티 지원'],
    cta: '무료로 시작',
  },
  {
    name: 'Pro',
    price: { monthly: 15000, yearly: 144000 },
    description: '성장하는 팀을 위한 전문 플랜',
    features: ['사용자 무제한', '프로젝트 무제한', '고급 리포트', '우선 이메일 지원', 'API 접근'],
    cta: '14일 무료 체험',
    highlighted: true,
    badge: '인기',
  },
  {
    name: 'Enterprise',
    price: { monthly: -1, yearly: -1 }, // 맞춤 가격
    description: '대기업을 위한 맞춤 플랜',
    features: ['모든 Pro 기능', '전용 매니저', 'SLA 보장', '커스텀 통합', '교육 지원'],
    cta: '문의하기',
  },
];`},{language:"tsx",title:"월간/연간 토글 구현",code:`const [isYearly, setIsYearly] = useState(false);

function formatPrice(plan: PricingPlan) {
  const price = isYearly ? plan.price.yearly : plan.price.monthly;
  if (price < 0) return '맞춤 가격';
  if (price === 0) return '무료';
  return \`\${price.toLocaleString()}원\`;
}

<div className="flex items-center justify-center gap-3 mb-12">
  <span className={!isYearly ? 'font-bold' : 'text-gray-500'}>월간</span>
  <button
    onClick={() => setIsYearly(!isYearly)}
    className={\`relative w-14 h-7 rounded-full transition \${
      isYearly ? 'bg-blue-600' : 'bg-gray-300'
    }\`}
  >
    <span className={\`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition \${
      isYearly ? 'translate-x-7' : ''
    }\`} />
  </button>
  <span className={isYearly ? 'font-bold' : 'text-gray-500'}>
    연간 <span className="text-green-500 text-sm">20% 할인</span>
  </span>
</div>`}],tips:["가운데 플랜(Pro)을 시각적으로 강조하면 자연스럽게 선택이 유도됩니다 (앵커링 효과)","연간 결제 할인율을 명확하게 표시하면 연간 결제 전환율이 높아집니다",'Enterprise는 고정 가격 대신 "문의하기"를 사용하여 영업팀 연결 기회를 만드세요']},{step:4,title:"구독 폼 & CTA",description:"이메일 구독 폼과 액션 버튼을 추가합니다.",content:`CTA(Call to Action)와 구독 폼은 랜딩 페이지의 최종 전환 요소입니다. 방문자가 스크롤을 끝까지 내렸다는 것은 제품에 관심이 있다는 의미이므로, 마지막으로 강력한 행동 유도를 해야 합니다. 뉴스레터 구독 폼, 무료 체험 시작 버튼, 데모 예약 폼 등 다양한 형태가 가능합니다.

**CTA 섹션 구성:**
- 배경: 브랜드 컬러 또는 그라데이션으로 시선 집중
- 헤드라인: "지금 시작하세요" 같은 행동 유도 문구
- 부제목: 마지막 설득 메시지 ("14일 무료, 카드 불필요")
- 이메일 입력 + 버튼: 인라인 폼 (한 줄로 배치)

**Testimonials(고객 후기) 섹션:**
CTA 바로 위에 고객 후기를 배치하면 "소셜 증거(Social Proof)" 효과로 전환율이 높아집니다. 실제 사용자의 사진, 이름, 직함, 후기 내용을 카드 형태로 표시합니다.

**AI 프롬프트 예시:**
"다음 섹션을 추가해주세요:

Testimonials 섹션:
- 3개의 고객 후기 카드 (가로 배치)
- 각 카드: 별 5개 아이콘, 후기 텍스트, 프로필 이미지(원형), 이름, 직함/회사명
- 카드 배경 밝은 회색, 라운드 코너, 부드러운 그림자

CTA 섹션:
- 파란색-보라색 그라데이션 배경
- 큰 흰색 헤드라인: '팀의 생산성을 높일 준비가 되셨나요?'
- 부제목: '14일 무료 체험. 신용카드 불필요. 언제든 취소 가능.'
- 이메일 입력 + '무료 체험 시작' 버튼 (인라인 폼)
- 폼 아래에 '이미 1,000+ 팀이 사용 중' 작은 텍스트"

**예상 결과:**
고객 후기 카드가 나란히 표시되고, 아래에 강렬한 CTA 섹션이 나타납니다. 이메일 입력 후 버튼을 클릭하면 (현재는 동작 없이) 폼이 제출됩니다.

**흔한 실수:**
폼 유효성 검증을 빠뜨리면 빈 이메일이나 잘못된 형식이 제출됩니다. 이메일 형식 검증, 빈 값 체크, 제출 중 로딩 상태, 성공/실패 피드백을 반드시 구현하세요. 또한 CTA 문구에 "무료"와 "카드 불필요"를 명시하면 전환율이 크게 올라갑니다.`,codeExamples:[{language:"tsx",title:"CTA 섹션 + 이메일 폼",code:`function CTASection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    try {
      // API 호출 (예: Supabase, EmailOctopus 등)
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          팀의 생산성을 높일 준비가 되셨나요?
        </h2>
        <p className="text-blue-100 mb-8 text-lg">
          14일 무료 체험 · 신용카드 불필요 · 언제든 취소 가능
        </p>
        <form onSubmit={handleSubmit}
          className="flex gap-2 max-w-md mx-auto">
          <input
            type="email" value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="이메일 주소를 입력하세요"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            required
          />
          <button type="submit" disabled={status === 'loading'}
            className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition">
            {status === 'loading' ? '처리 중...' : '무료 체험'}
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-green-200">등록 완료! 이메일을 확인해주세요.</p>
        )}
        <p className="mt-6 text-sm text-blue-200">
          이미 1,000+ 팀이 TeamFlow를 사용하고 있습니다
        </p>
      </div>
    </section>
  );
}`},{language:"tsx",title:"Testimonial 카드",code:`const testimonials = [
  {
    name: '김민수',
    role: 'CTO, TechStartup',
    avatar: '/avatars/1.jpg',
    text: 'TeamFlow 도입 후 팀 커뮤니케이션이 확실히 개선되었습니다. 특히 실시간 협업 기능이 최고입니다.',
    rating: 5,
  },
  // ... 더 많은 후기
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
      <div className="flex text-yellow-400 mb-3">
        {Array.from({ length: t.rating }, (_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="text-gray-700 mb-4">"{t.text}"</p>
      <div className="flex items-center gap-3">
        <img src={t.avatar} alt={t.name}
          className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-sm">{t.name}</p>
          <p className="text-gray-500 text-xs">{t.role}</p>
        </div>
      </div>
    </div>
  );
}`}],tips:['CTA 문구에 "무료"와 "카드 불필요"를 명시하면 전환율이 평균 30% 높아집니다',"폼 제출 후 성공/실패 피드백을 반드시 보여주세요 - 사용자는 자신의 행동 결과를 확인하고 싶어합니다","Testimonial은 실제 사진과 구체적인 직함이 있을수록 신뢰도가 높아집니다"]},{step:5,title:"반응형 완성",description:"모바일에서도 완벽하게 동작하도록 합니다.",content:`SaaS 랜딩 페이지는 모바일 트래픽이 50% 이상을 차지합니다. 특히 소셜 미디어(Instagram, Twitter)에서 유입되는 경우 거의 100% 모바일입니다. 따라서 모바일에서의 경험이 전환율에 직접적인 영향을 미칩니다.

**반응형 점검 포인트:**

1. **Navigation**: 768px 미만에서 햄버거 메뉴로 전환. CTA 버튼은 항상 보이도록 유지
2. **Hero**: 텍스트 크기 축소, 제품 이미지는 화면 너비에 맞게 조절
3. **Features 카드**: 데스크톱 4열 -> 태블릿 2열 -> 모바일 1열
4. **Pricing 카드**: 데스크톱 3열 -> 모바일에서 세로 스택 (Pro가 가장 위에)
5. **Testimonials**: 가로 스크롤 또는 세로 스택
6. **CTA 폼**: 인라인(가로)에서 스택(세로)으로 변경

**AI 프롬프트 예시:**
"모든 섹션을 반응형으로 최적화해주세요:
- 768px 미만: 햄버거 메뉴, 1열 레이아웃, CTA 폼 세로 스택
- Pricing: 모바일에서 Pro 카드가 가장 먼저 보이도록 순서 변경
- Testimonials: 모바일에서 좌우 스와이프 가능한 캐러셀로 변경
- 모든 텍스트의 줄바꿈이 자연스러운지 확인
- 가로 스크롤이 절대 발생하지 않도록
- 터치 영역 최소 44px 보장
- 페이지 전체 성능 최적화 (이미지 lazy loading)"

**성능 최적화:**
랜딩 페이지는 로딩 속도가 전환율에 직접 영향을 미칩니다. 이미지는 WebP 포맷으로 변환하고, lazy loading을 적용하세요. 외부 폰트는 display: swap으로 로드하여 FOUT(Flash of Unstyled Text)를 방지합니다.

**예상 결과:**
모든 화면 크기에서 레이아웃이 깔끔하게 유지되고, 터치 인터랙션이 자연스럽습니다. Lighthouse 성능 점수가 90점 이상이면 합격입니다.

**흔한 실수:**
Tailwind CSS의 반응형 접두사(sm:, md:, lg:)를 잘못 사용하면 예상과 다른 레이아웃이 나옵니다. Tailwind는 모바일 퍼스트이므로, 기본 스타일이 모바일이고 md:, lg:로 확장하는 구조입니다. 예를 들어 "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"는 모바일 1열, 태블릿 2열, 데스크톱 4열을 의미합니다.`,codeExamples:[{language:"tsx",title:"Tailwind 반응형 레이아웃 패턴",code:`{/* Features: 모바일 1열 → 태블릿 2열 → 데스크톱 4열 */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {features.map(f => <FeatureCard key={f.title} {...f} />)}
</div>

{/* Pricing: 모바일 1열 → 데스크톱 3열, Pro 카드 모바일에서 먼저 */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {/* 모바일에서 Pro를 먼저 보여주기 위해 order 사용 */}
  <PricingCard plan={plans[0]} className="order-2 lg:order-1" />
  <PricingCard plan={plans[1]} className="order-1 lg:order-2" />
  <PricingCard plan={plans[2]} className="order-3" />
</div>

{/* CTA 폼: 모바일에서 세로 스택 */}
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
  <input type="email" className="flex-1 px-4 py-3 rounded-lg" />
  <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-bold
    whitespace-nowrap">
    무료 체험
  </button>
</form>

{/* 이미지 lazy loading */}
<img src="/mockup.webp" alt="제품 화면" loading="lazy"
  className="w-full rounded-xl shadow-lg" />`}],tips:["Tailwind는 모바일 퍼스트입니다 - 기본이 모바일이고 md:/lg:로 확장하는 구조를 기억하세요","Lighthouse(개발자 도구 > Lighthouse)로 성능, 접근성, SEO 점수를 측정하세요 - 90점 이상이 목표","CSS order 속성으로 모바일에서 중요한 요소(추천 플랜)를 먼저 보여줄 수 있습니다"]}]}];export{t as b};
