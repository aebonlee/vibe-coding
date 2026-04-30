import type { ProjectData } from '../../types';

export const todoProject: ProjectData = {
  id: 'todo-app',
  slug: 'todo-app',
  title: 'Todo App 만들기',
  description: 'React와 localStorage를 활용한 할 일 관리 앱. CRUD와 필터링 기능 구현.',
  level: 'beginner',
  duration: '2-3시간',
  techStack: ['React', 'Claude Code', 'TypeScript', 'localStorage'],
  outcomes: ['CRUD 기능 구현', '상태관리 이해', 'Claude Code 프롬프트 작성 능력', 'React 컴포넌트 분리'],
  diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="760" height="320" font-family="'Noto Sans KR', sans-serif">
  <defs>
    <marker id="todo-arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#0046C8"/>
    </marker>
  </defs>
  <rect x="1" y="1" width="758" height="318" rx="12" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="2"/>
  <text x="380" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="#111827">Todo App 컴포넌트 구조 &amp; 데이터 흐름</text>
  <rect x="310" y="45" width="140" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="70" text-anchor="middle" font-size="14" font-weight="bold" fill="#111827">App</text>
  <text x="380" y="100" text-anchor="middle" font-size="11" fill="#4B5563">컴포넌트 트리</text>
  <line x1="340" y1="85" x2="140" y2="120" stroke="#0046C8" stroke-width="2" marker-end="url(#todo-arrow)"/>
  <line x1="380" y1="85" x2="380" y2="120" stroke="#0046C8" stroke-width="2" marker-end="url(#todo-arrow)"/>
  <line x1="420" y1="85" x2="620" y2="120" stroke="#0046C8" stroke-width="2" marker-end="url(#todo-arrow)"/>
  <rect x="60" y="120" width="160" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="140" y="145" text-anchor="middle" font-size="13" fill="#111827">TodoHeader (입력)</text>
  <rect x="300" y="120" width="160" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="145" text-anchor="middle" font-size="13" fill="#111827">TodoList (목록)</text>
  <rect x="540" y="120" width="160" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="620" y="145" text-anchor="middle" font-size="13" fill="#111827">TodoFilter (필터)</text>
  <line x1="380" y1="160" x2="380" y2="185" stroke="#0046C8" stroke-width="2" marker-end="url(#todo-arrow)"/>
  <rect x="300" y="185" width="160" height="36" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="208" text-anchor="middle" font-size="13" fill="#111827">TodoItem (항목)</text>
  <text x="380" y="248" text-anchor="middle" font-size="11" fill="#4B5563">데이터 흐름</text>
  <rect x="100" y="260" width="140" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="170" y="285" text-anchor="middle" font-size="13" fill="#111827">State (useState)</text>
  <line x1="240" y1="280" x2="370" y2="280" stroke="#0046C8" stroke-width="2" marker-end="url(#todo-arrow)"/>
  <line x1="370" y1="274" x2="240" y2="274" stroke="#0046C8" stroke-width="2" marker-end="url(#todo-arrow)"/>
  <text x="305" y="268" text-anchor="middle" font-size="10" fill="#4B5563">동기화</text>
  <rect x="370" y="260" width="150" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="445" y="285" text-anchor="middle" font-size="13" fill="#111827">localStorage</text>
  <line x1="560" y1="280" x2="520" y2="280" stroke="#0046C8" stroke-width="2" marker-end="url(#todo-arrow)"/>
  <rect x="560" y="260" width="140" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="630" y="285" text-anchor="middle" font-size="13" fill="#111827">필터 상태</text>
</svg>`,
  steps: [
    {
      step: 1,
      title: '프로젝트 초기화',
      description: 'Claude Code를 사용하여 React + TypeScript + Vite 프로젝트를 생성합니다.',
      content: `이 단계에서는 Claude Code CLI를 사용하여 Todo App 프로젝트를 처음부터 셋업합니다. Claude Code는 터미널에서 직접 AI와 대화하며 코드를 생성하는 도구입니다. 먼저 빈 폴더를 만들고, 그 안에서 Claude Code를 실행합니다.

**1단계: 프로젝트 폴더 생성 및 Claude Code 실행**

\`\`\`bash
mkdir todo-app && cd todo-app
claude
\`\`\`

**2단계: Claude Code에 프로젝트 초기화 프롬프트 입력**

\`\`\`
React 19 + TypeScript + Vite로 Todo App 프로젝트를 초기화해줘.
- npm create vite@latest로 프로젝트 생성 (현재 디렉토리에)
- 불필요한 보일러플레이트 코드 정리
- src/components/ 폴더 생성
- src/types.ts 파일 생성 (빈 파일)
\`\`\`

**예상 결과:**
Claude Code가 터미널에서 직접 명령어를 실행하여 Vite 프로젝트를 생성합니다. package.json, vite.config.ts, tsconfig.json 등 기본 설정 파일이 생성되고, node_modules가 설치됩니다.

**확인 사항:**
- package.json에 react, react-dom, typescript, vite 의존성이 있는지 확인
- \`npm run dev\`로 개발 서버가 정상 실행되는지 확인
- src/components/ 디렉토리가 생성되었는지 확인

**Claude Code의 장점:**
웹 기반 도구와 달리 Claude Code는 실제 로컬 파일시스템에서 작업합니다. 생성된 파일을 VS Code에서 바로 열어볼 수 있고, Git으로 버전 관리도 가능합니다.`,
      tips: [
        'Claude Code 실행 전에 Node.js 18+ 와 npm이 설치되어 있는지 확인하세요',
        '프롬프트에 "현재 디렉토리에"를 명시하면 중첩 폴더가 생기는 것을 방지할 수 있습니다',
        '프로젝트 생성 후 `npm run dev`로 반드시 동작을 확인하세요'
      ]
    },
    {
      step: 2,
      title: '타입 정의',
      description: 'Todo 데이터의 TypeScript 인터페이스를 정의합니다.',
      content: `TypeScript 프로젝트에서 가장 먼저 할 일은 데이터의 형태(타입)를 정의하는 것입니다. Todo 앱에서 하나의 할 일이 어떤 속성을 가지는지 인터페이스로 선언합니다.

**Claude Code 프롬프트:**

\`\`\`
src/types.ts에 Todo 앱에 필요한 타입을 정의해줘:
- Todo 인터페이스: id(string), text(string), completed(boolean), createdAt(Date)
- FilterType 타입: 'all' | 'active' | 'completed'
\`\`\`

**예상 결과:**
Claude Code가 src/types.ts 파일을 열고 Todo 인터페이스와 FilterType 타입 별칭을 작성합니다. id를 string으로 지정하는 이유는 crypto.randomUUID()나 Date.now().toString() 같은 유니크 값을 사용하기 위해서입니다.

**확인 사항:**
- Todo 인터페이스에 4개 필드(id, text, completed, createdAt)가 모두 있는지 확인
- FilterType이 유니온 타입으로 정확히 3가지 값만 허용하는지 확인
- export 키워드가 붙어있어 다른 파일에서 import 가능한지 확인

**타입을 먼저 정의하는 이유:**
타입을 먼저 만들면 이후 컴포넌트를 작성할 때 자동완성과 타입 검사의 혜택을 받을 수 있습니다. Claude Code에게도 이 타입 파일을 참조하라고 알려주면 일관된 코드를 생성합니다.`,
      codeExamples: [
        {
          language: 'typescript',
          title: 'src/types.ts 예상 결과',
          code: `export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export type FilterType = 'all' | 'active' | 'completed';`
        }
      ],
      tips: [
        'id를 number 대신 string으로 사용하면 UUID 생성이 간편합니다',
        'createdAt을 Date 타입으로 선언하되, localStorage 저장 시 문자열 변환을 고려하세요',
        '타입 파일을 먼저 만들고 Claude Code에게 "types.ts를 참조해서" 라고 하면 일관성이 높아집니다'
      ]
    },
    {
      step: 3,
      title: '컴포넌트 구현',
      description: 'TodoHeader, TodoList, TodoItem, TodoFilter 컴포넌트를 Claude Code로 생성합니다.',
      content: `이제 핵심 UI 컴포넌트 4개를 Claude Code로 생성합니다. 한 번의 프롬프트로 모든 컴포넌트를 한꺼번에 만들 수도 있고, 하나씩 만들 수도 있습니다. 초보자라면 하나씩 만들면서 각 컴포넌트의 역할을 이해하는 것을 추천합니다.

**Claude Code 프롬프트 (한꺼번에 생성):**

\`\`\`
src/types.ts의 Todo 타입을 사용해서 4개 컴포넌트를 만들어줘:

1. src/components/TodoHeader.tsx
   - 새 할 일 입력 폼 (input + 추가 버튼)
   - props: onAdd(text: string) => void
   - Enter 키로도 추가 가능
   - 빈 입력 방지

2. src/components/TodoItem.tsx
   - 개별 할 일 항목 표시
   - props: todo: Todo, onToggle(id: string) => void, onDelete(id: string) => void
   - 체크박스로 완료 토글, 삭제 버튼
   - 완료된 항목은 취소선 스타일

3. src/components/TodoList.tsx
   - 할 일 목록 렌더링
   - props: todos: Todo[], onToggle, onDelete
   - 빈 목록일 때 안내 메시지 표시

4. src/components/TodoFilter.tsx
   - 전체/진행중/완료 필터 버튼
   - props: currentFilter: FilterType, onFilterChange(filter: FilterType) => void
   - 현재 선택된 필터 버튼 강조

모든 컴포넌트는 React.FC 대신 일반 함수 컴포넌트로 작성하고,
props 타입은 인라인이 아닌 별도 interface로 정의해줘.
\`\`\`

**예상 결과:**
Claude Code가 src/components/ 폴더 아래에 4개의 .tsx 파일을 생성합니다. 각 파일에는 Props 인터페이스와 함수형 컴포넌트가 포함됩니다.

**확인 사항:**
- 4개 파일이 모두 src/components/ 아래에 생성되었는지 확인
- 각 컴포넌트가 src/types.ts에서 Todo, FilterType을 import하는지 확인
- TodoHeader에서 빈 입력 제출 시 방지 로직이 있는지 확인
- TodoItem에서 completed 상태에 따라 스타일이 변하는지 확인

**컴포넌트별 역할 정리:**
- TodoHeader: 사용자 입력을 받아 부모(App)에게 전달하는 역할
- TodoList: 배열 데이터를 순회하며 TodoItem을 렌더링하는 역할
- TodoItem: 개별 항목의 UI와 이벤트를 처리하는 역할
- TodoFilter: 필터 상태를 변경하는 UI를 제공하는 역할`,
      tips: [
        '프롬프트에 props 타입을 명시하면 Claude Code가 정확한 인터페이스를 생성합니다',
        '"React.FC 대신 일반 함수 컴포넌트"를 지정하면 최신 React 관행에 맞는 코드가 나옵니다',
        '각 컴포넌트를 만든 후 개별적으로 코드를 읽어보며 동작 원리를 이해하세요',
        '컴포넌트가 예상과 다르게 생성되면 "TodoHeader에서 Enter 키 핸들링을 추가해줘"처럼 구체적으로 수정 요청하세요'
      ]
    },
    {
      step: 4,
      title: '상태관리 구현',
      description: 'App 컴포넌트에서 useState와 localStorage를 연동합니다.',
      content: `이 단계에서는 App.tsx에서 모든 상태를 관리하고, localStorage와 동기화하는 로직을 구현합니다. React의 상태 끌어올리기(Lifting State Up) 패턴을 사용합니다.

**Claude Code 프롬프트:**

\`\`\`
src/App.tsx를 다음 요구사항으로 구현해줘:
- src/types.ts에서 Todo, FilterType import
- 4개 컴포넌트(TodoHeader, TodoList, TodoItem, TodoFilter) import
- useState로 todos(Todo[])와 filter(FilterType) 상태 관리
- localStorage에서 초기 데이터 로드 (키: 'todos')
- todos가 변경될 때마다 localStorage에 자동 저장 (useEffect 사용)
- CRUD 함수: addTodo, toggleTodo, deleteTodo
- filteredTodos: filter 상태에 따라 배열 필터링
- Date 객체는 localStorage 저장/복원 시 문자열 변환 처리
- 상단에 제목 "Todo App" 표시
\`\`\`

**예상 결과:**
Claude Code가 App.tsx를 작성합니다. useState로 todos 배열을 관리하고, useEffect로 localStorage와 동기화합니다. addTodo/toggleTodo/deleteTodo 함수가 정의되고 각 자식 컴포넌트에 props로 전달됩니다.

**확인 사항:**
- useState 초기값에서 localStorage 데이터를 불러오는지 확인
- useEffect에서 todos 변경 시 localStorage에 저장하는지 확인
- addTodo에서 고유한 id를 생성하는지 확인 (crypto.randomUUID 또는 Date.now)
- deleteTodo에서 filter로 해당 id를 제외하는지 확인
- filteredTodos가 filter 값에 따라 올바르게 필터링되는지 확인

**핵심 개념 - 상태 끌어올리기:**
모든 상태를 App에서 관리하고, 자식 컴포넌트에는 데이터와 함수를 props로 내려보냅니다. TodoHeader는 onAdd를 호출하고, TodoItem은 onToggle/onDelete를 호출합니다. 이 패턴 덕분에 데이터 흐름이 단방향(top-down)으로 유지되어 디버깅이 쉬워집니다.`,
      codeExamples: [
        {
          language: 'typescript',
          title: 'localStorage 동기화 패턴',
          code: `// 초기 로드
const [todos, setTodos] = useState<Todo[]>(() => {
  const saved = localStorage.getItem('todos');
  if (!saved) return [];
  return JSON.parse(saved).map((t: Todo) => ({
    ...t,
    createdAt: new Date(t.createdAt),
  }));
});

// 변경 시 저장
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);`
        }
      ],
      tips: [
        'useState의 초기값에 함수를 전달하면 (lazy initialization) 컴포넌트가 처음 렌더링될 때만 localStorage를 읽습니다',
        'localStorage에는 문자열만 저장되므로 Date 객체는 JSON.parse 후 new Date()로 복원해야 합니다',
        'Claude Code에게 "Date 변환 처리도 해줘"라고 명시하지 않으면 이 부분을 빠뜨릴 수 있습니다',
        '브라우저 개발자 도구 > Application > Local Storage에서 저장된 데이터를 확인할 수 있습니다'
      ]
    },
    {
      step: 5,
      title: '스타일링',
      description: 'CSS로 깔끔한 UI를 완성합니다.',
      content: `기능이 완성되었으니 이제 시각적으로 깔끔한 UI를 만듭니다. Claude Code에게 CSS 파일 생성을 요청합니다.

**Claude Code 프롬프트:**

\`\`\`
src/App.css에 Todo App 스타일을 작성해줘:
- 전체 배경: 밝은 회색 (#f5f5f5)
- 앱 컨테이너: 흰색 배경, 최대 너비 520px, 가운데 정렬, 그림자
- 입력 폼: 둥근 모서리, 포커스 시 파란색 테두리
- 추가 버튼: 파란색 배경 (#4A90D9), 흰색 텍스트
- 할 일 항목: 하단 구분선, 호버 시 배경색 변경
- 완료 항목: 텍스트 취소선 + 회색 처리
- 삭제 버튼: 빨간색, 호버 시 진하게
- 필터 버튼: 선택된 버튼 파란색, 나머지 회색
- 부드러운 전환 애니메이션 (transition)
- 반응형: 모바일에서도 깨지지 않도록
\`\`\`

**예상 결과:**
Claude Code가 src/App.css에 완성된 스타일시트를 작성합니다. 모든 컴포넌트에 적용되는 클래스명이 포함됩니다.

**확인 사항:**
- 앱이 화면 가운데에 정렬되는지 확인
- 입력 필드에 포커스할 때 시각적 피드백이 있는지 확인
- 완료된 항목에 취소선이 표시되는지 확인
- 필터 버튼에서 현재 선택된 필터가 시각적으로 구분되는지 확인
- 모바일 크기에서 레이아웃이 깨지지 않는지 확인

**스타일링 팁:**
CSS를 처음부터 완벽하게 만들 필요는 없습니다. Claude Code에게 "추가 버튼을 더 둥글게", "폰트 크기를 키워줘" 같은 후속 프롬프트로 반복 개선이 가능합니다. 바이브 코딩의 장점은 이런 빠른 반복(iteration)에 있습니다.`,
      tips: [
        'CSS 클래스명을 프롬프트에서 지정하면 컴포넌트와 스타일이 정확히 매칭됩니다',
        '"반응형"을 명시하면 모바일 대응 미디어 쿼리가 포함됩니다',
        '색상 코드를 구체적으로 지정하면 원하는 디자인에 가까운 결과를 얻습니다',
        '스타일이 마음에 안 들면 "필터 버튼 영역을 pill 형태로 바꿔줘"처럼 구체적으로 수정 요청하세요'
      ]
    },
    {
      step: 6,
      title: '테스트 및 완성',
      description: '기능 테스트와 코드 정리를 수행합니다.',
      content: `마지막 단계에서는 앱의 모든 기능을 체계적으로 테스트하고, 코드를 정리합니다. Claude Code를 활용하면 테스트 시나리오 확인과 코드 리팩토링도 효율적으로 할 수 있습니다.

**기능 테스트 체크리스트:**

\`\`\`
다음 시나리오를 하나씩 테스트해주세요:

1. 추가(Create): 텍스트 입력 후 추가 버튼 클릭 → 목록에 표시
2. 추가(Enter): 텍스트 입력 후 Enter 키 → 목록에 표시
3. 빈 입력 방지: 빈 입력 상태에서 추가 시도 → 추가되지 않음
4. 완료 토글: 체크박스 클릭 → 취소선 표시 / 다시 클릭 → 취소선 해제
5. 삭제: 삭제 버튼 클릭 → 목록에서 제거
6. 필터 - 전체: 완료/미완료 모두 표시
7. 필터 - 진행중: 미완료 항목만 표시
8. 필터 - 완료: 완료 항목만 표시
9. 새로고침: 페이지 새로고침 후에도 데이터 유지 (localStorage)
\`\`\`

**Claude Code로 코드 품질 점검:**

\`\`\`
현재 Todo App 코드를 점검해줘:
- TypeScript 타입 에러가 없는지 확인
- 불필요한 console.log가 있으면 제거
- 접근성(aria 속성) 개선이 필요한 부분 확인
- 코드 컨벤션 통일 (작은따옴표, 세미콜론 등)
\`\`\`

**예상 결과:**
Claude Code가 코드를 분석하고 개선이 필요한 부분을 알려줍니다. 타입 에러 수정, 접근성 속성 추가, 코드 스타일 통일 등의 작업을 수행합니다.

**확인 사항:**
- \`npx tsc --noEmit\`으로 TypeScript 에러가 없는지 확인
- \`npm run build\`로 프로덕션 빌드가 성공하는지 확인
- 브라우저 개발자 도구 Console에 에러가 없는지 확인
- localStorage에 데이터가 올바른 형식으로 저장되는지 확인

**완성 후 확장 아이디어:**
기본 기능이 완성되면 Claude Code에게 추가 기능을 요청해 보세요: "할 일 수정 기능 추가해줘", "드래그 앤 드롭으로 순서 변경", "다크 모드 토글 추가" 등. 바이브 코딩의 핵심은 AI와의 반복적인 대화로 앱을 점진적으로 발전시키는 것입니다.`,
      tips: [
        '9개 테스트 시나리오를 모두 통과했는지 하나씩 체크하세요',
        '`npx tsc --noEmit` 명령으로 타입 에러를 빌드 없이 빠르게 확인할 수 있습니다',
        'Claude Code에게 "이 코드의 잠재적 버그를 찾아줘"라고 요청하면 놓친 엣지 케이스를 발견할 수 있습니다',
        '완성 후 Git에 커밋하는 습관을 들이세요 — Claude Code에게 "git init하고 초기 커밋 만들어줘"라고 요청하면 됩니다'
      ]
    }
  ],
  sourceFiles: [
    {
      filename: 'package.json',
      language: 'json',
      code: `{
  "name": "todo-app",
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
}`
    },
    {
      filename: 'vite.config.ts',
      language: 'typescript',
      code: `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});`
    },
    {
      filename: 'src/types.ts',
      language: 'typescript',
      code: `export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export type FilterType = 'all' | 'active' | 'completed';`
    },
    {
      filename: 'src/App.tsx',
      language: 'tsx',
      code: `import { useState, useEffect } from 'react';
import type { Todo, FilterType } from './types';
import { TodoHeader } from './components/TodoHeader';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    if (!saved) return [];
    try {
      return JSON.parse(saved).map((t: Todo) => ({
        ...t,
        createdAt: new Date(t.createdAt),
      }));
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState<FilterType>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      createdAt: new Date(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;

  return (
    <div className="app">
      <div className="app-container">
        <h1 className="app-title">Todo App</h1>
        <TodoHeader onAdd={addTodo} />
        <TodoFilter
          currentFilter={filter}
          onFilterChange={setFilter}
          activeCount={activeCount}
          totalCount={todos.length}
        />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;`
    },
    {
      filename: 'src/components/TodoHeader.tsx',
      language: 'tsx',
      code: `import { useState } from 'react';

interface TodoHeaderProps {
  onAdd: (text: string) => void;
}

export function TodoHeader({ onAdd }: TodoHeaderProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText('');
  };

  return (
    <form className="todo-header" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="할 일을 입력하세요..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="새 할 일 입력"
      />
      <button type="submit" className="todo-add-btn" aria-label="할 일 추가">
        추가
      </button>
    </form>
  );
}`
    },
    {
      filename: 'src/components/TodoList.tsx',
      language: 'tsx',
      code: `import type { Todo } from '../types';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="todo-empty">
        <p>할 일이 없습니다. 새 할 일을 추가해보세요!</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}`
    },
    {
      filename: 'src/components/TodoItem.tsx',
      language: 'tsx',
      code: `import type { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className={\`todo-item \${todo.completed ? 'completed' : ''}\`}>
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          aria-label={\`\${todo.text} 완료 토글\`}
        />
        <span className="todo-text">{todo.text}</span>
      </label>
      <button
        className="todo-delete-btn"
        onClick={() => onDelete(todo.id)}
        aria-label={\`\${todo.text} 삭제\`}
      >
        삭제
      </button>
    </li>
  );
}`
    },
    {
      filename: 'src/components/TodoFilter.tsx',
      language: 'tsx',
      code: `import type { FilterType } from '../types';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  totalCount: number;
}

const filters: { key: FilterType; label: string }[] = [
  { key: 'all', label: '전체' },
  { key: 'active', label: '진행중' },
  { key: 'completed', label: '완료' },
];

export function TodoFilter({
  currentFilter,
  onFilterChange,
  activeCount,
  totalCount,
}: TodoFilterProps) {
  return (
    <div className="todo-filter">
      <div className="filter-buttons">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            className={\`filter-btn \${currentFilter === key ? 'active' : ''}\`}
            onClick={() => onFilterChange(key)}
          >
            {label}
          </button>
        ))}
      </div>
      <span className="todo-count">
        {activeCount}/{totalCount} 남음
      </span>
    </div>
  );
}`
    },
    {
      filename: 'src/App.css',
      language: 'css',
      code: `/* ── 전체 레이아웃 ── */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, sans-serif;
  background: #f0f2f5;
  color: #1a1a1a;
  min-height: 100vh;
}

.app {
  display: flex;
  justify-content: center;
  padding: 40px 16px;
  min-height: 100vh;
}

.app-container {
  width: 100%;
  max-width: 520px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 32px;
  height: fit-content;
}

.app-title {
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
  color: #111827;
}

/* ── 입력 폼 ── */
.todo-header {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 12px 16px;
  font-size: 15px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.2s;
}

.todo-input:focus {
  border-color: #4a90d9;
}

.todo-input::placeholder {
  color: #9ca3af;
}

.todo-add-btn {
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  background: #4a90d9;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
}

.todo-add-btn:hover {
  background: #3a7bc8;
}

.todo-add-btn:active {
  background: #2e6ab3;
}

/* ── 필터 ── */
.todo-filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f3f4f6;
}

.filter-buttons {
  display: flex;
  gap: 6px;
}

.filter-btn {
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 500;
  color: #6b7280;
  background: #f3f4f6;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover {
  background: #e5e7eb;
  color: #374151;
}

.filter-btn.active {
  background: #4a90d9;
  color: #ffffff;
}

.todo-count {
  font-size: 13px;
  color: #9ca3af;
}

/* ── 할 일 목록 ── */
.todo-list {
  list-style: none;
}

.todo-empty {
  text-align: center;
  padding: 40px 0;
  color: #9ca3af;
  font-size: 14px;
}

/* ── 할 일 항목 ── */
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 4px;
  border-bottom: 1px solid #f3f4f6;
  transition: background 0.15s;
}

.todo-item:hover {
  background: #f9fafb;
}

.todo-item:last-child {
  border-bottom: none;
}

.todo-label {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  cursor: pointer;
  min-width: 0;
}

.todo-label input[type='checkbox'] {
  width: 20px;
  height: 20px;
  accent-color: #4a90d9;
  cursor: pointer;
  flex-shrink: 0;
}

.todo-text {
  font-size: 15px;
  line-height: 1.4;
  transition: all 0.2s;
  word-break: break-word;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #9ca3af;
}

.todo-delete-btn {
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 500;
  color: #ef4444;
  background: transparent;
  border: 1px solid #fecaca;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;
  margin-left: 8px;
}

.todo-delete-btn:hover {
  background: #fef2f2;
  border-color: #ef4444;
}

.todo-delete-btn:active {
  background: #fee2e2;
}

/* ── 반응형 ── */
@media (max-width: 480px) {
  .app {
    padding: 20px 12px;
  }

  .app-container {
    padding: 20px;
    border-radius: 12px;
  }

  .app-title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .todo-header {
    flex-direction: column;
  }

  .todo-add-btn {
    width: 100%;
  }
}`
    }
  ]
};
