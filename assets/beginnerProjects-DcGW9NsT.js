const e={id:"todo-app",slug:"todo-app",title:"Todo App 만들기",description:"React와 localStorage를 활용한 할 일 관리 앱. CRUD와 필터링 기능 구현.",level:"beginner",duration:"2-3시간",techStack:["React","Claude Code","TypeScript","localStorage"],outcomes:["CRUD 기능 구현","상태관리 이해","Claude Code 프롬프트 작성 능력","React 컴포넌트 분리"],diagram:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="760" height="320" font-family="'Noto Sans KR', sans-serif">
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
</svg>`,steps:[{step:1,title:"프로젝트 초기화",description:"Claude Code를 사용하여 React + TypeScript + Vite 프로젝트를 생성합니다.",content:`이 단계에서는 Claude Code CLI를 사용하여 Todo App 프로젝트를 처음부터 셋업합니다. Claude Code는 터미널에서 직접 AI와 대화하며 코드를 생성하는 도구입니다. 먼저 빈 폴더를 만들고, 그 안에서 Claude Code를 실행합니다.

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
웹 기반 도구와 달리 Claude Code는 실제 로컬 파일시스템에서 작업합니다. 생성된 파일을 VS Code에서 바로 열어볼 수 있고, Git으로 버전 관리도 가능합니다.`,tips:["Claude Code 실행 전에 Node.js 18+ 와 npm이 설치되어 있는지 확인하세요",'프롬프트에 "현재 디렉토리에"를 명시하면 중첩 폴더가 생기는 것을 방지할 수 있습니다',"프로젝트 생성 후 `npm run dev`로 반드시 동작을 확인하세요"]},{step:2,title:"타입 정의",description:"Todo 데이터의 TypeScript 인터페이스를 정의합니다.",content:`TypeScript 프로젝트에서 가장 먼저 할 일은 데이터의 형태(타입)를 정의하는 것입니다. Todo 앱에서 하나의 할 일이 어떤 속성을 가지는지 인터페이스로 선언합니다.

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
타입을 먼저 만들면 이후 컴포넌트를 작성할 때 자동완성과 타입 검사의 혜택을 받을 수 있습니다. Claude Code에게도 이 타입 파일을 참조하라고 알려주면 일관된 코드를 생성합니다.`,codeExamples:[{language:"typescript",title:"src/types.ts 예상 결과",code:`export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export type FilterType = 'all' | 'active' | 'completed';`}],tips:["id를 number 대신 string으로 사용하면 UUID 생성이 간편합니다","createdAt을 Date 타입으로 선언하되, localStorage 저장 시 문자열 변환을 고려하세요",'타입 파일을 먼저 만들고 Claude Code에게 "types.ts를 참조해서" 라고 하면 일관성이 높아집니다']},{step:3,title:"컴포넌트 구현",description:"TodoHeader, TodoList, TodoItem, TodoFilter 컴포넌트를 Claude Code로 생성합니다.",content:`이제 핵심 UI 컴포넌트 4개를 Claude Code로 생성합니다. 한 번의 프롬프트로 모든 컴포넌트를 한꺼번에 만들 수도 있고, 하나씩 만들 수도 있습니다. 초보자라면 하나씩 만들면서 각 컴포넌트의 역할을 이해하는 것을 추천합니다.

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
- TodoFilter: 필터 상태를 변경하는 UI를 제공하는 역할`,tips:["프롬프트에 props 타입을 명시하면 Claude Code가 정확한 인터페이스를 생성합니다",'"React.FC 대신 일반 함수 컴포넌트"를 지정하면 최신 React 관행에 맞는 코드가 나옵니다',"각 컴포넌트를 만든 후 개별적으로 코드를 읽어보며 동작 원리를 이해하세요",'컴포넌트가 예상과 다르게 생성되면 "TodoHeader에서 Enter 키 핸들링을 추가해줘"처럼 구체적으로 수정 요청하세요']},{step:4,title:"상태관리 구현",description:"App 컴포넌트에서 useState와 localStorage를 연동합니다.",content:`이 단계에서는 App.tsx에서 모든 상태를 관리하고, localStorage와 동기화하는 로직을 구현합니다. React의 상태 끌어올리기(Lifting State Up) 패턴을 사용합니다.

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
모든 상태를 App에서 관리하고, 자식 컴포넌트에는 데이터와 함수를 props로 내려보냅니다. TodoHeader는 onAdd를 호출하고, TodoItem은 onToggle/onDelete를 호출합니다. 이 패턴 덕분에 데이터 흐름이 단방향(top-down)으로 유지되어 디버깅이 쉬워집니다.`,codeExamples:[{language:"typescript",title:"localStorage 동기화 패턴",code:`// 초기 로드
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
}, [todos]);`}],tips:["useState의 초기값에 함수를 전달하면 (lazy initialization) 컴포넌트가 처음 렌더링될 때만 localStorage를 읽습니다","localStorage에는 문자열만 저장되므로 Date 객체는 JSON.parse 후 new Date()로 복원해야 합니다",'Claude Code에게 "Date 변환 처리도 해줘"라고 명시하지 않으면 이 부분을 빠뜨릴 수 있습니다',"브라우저 개발자 도구 > Application > Local Storage에서 저장된 데이터를 확인할 수 있습니다"]},{step:5,title:"스타일링",description:"CSS로 깔끔한 UI를 완성합니다.",content:`기능이 완성되었으니 이제 시각적으로 깔끔한 UI를 만듭니다. Claude Code에게 CSS 파일 생성을 요청합니다.

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
CSS를 처음부터 완벽하게 만들 필요는 없습니다. Claude Code에게 "추가 버튼을 더 둥글게", "폰트 크기를 키워줘" 같은 후속 프롬프트로 반복 개선이 가능합니다. 바이브 코딩의 장점은 이런 빠른 반복(iteration)에 있습니다.`,tips:["CSS 클래스명을 프롬프트에서 지정하면 컴포넌트와 스타일이 정확히 매칭됩니다",'"반응형"을 명시하면 모바일 대응 미디어 쿼리가 포함됩니다',"색상 코드를 구체적으로 지정하면 원하는 디자인에 가까운 결과를 얻습니다",'스타일이 마음에 안 들면 "필터 버튼 영역을 pill 형태로 바꿔줘"처럼 구체적으로 수정 요청하세요']},{step:6,title:"테스트 및 완성",description:"기능 테스트와 코드 정리를 수행합니다.",content:`마지막 단계에서는 앱의 모든 기능을 체계적으로 테스트하고, 코드를 정리합니다. Claude Code를 활용하면 테스트 시나리오 확인과 코드 리팩토링도 효율적으로 할 수 있습니다.

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
기본 기능이 완성되면 Claude Code에게 추가 기능을 요청해 보세요: "할 일 수정 기능 추가해줘", "드래그 앤 드롭으로 순서 변경", "다크 모드 토글 추가" 등. 바이브 코딩의 핵심은 AI와의 반복적인 대화로 앱을 점진적으로 발전시키는 것입니다.`,tips:["9개 테스트 시나리오를 모두 통과했는지 하나씩 체크하세요","`npx tsc --noEmit` 명령으로 타입 에러를 빌드 없이 빠르게 확인할 수 있습니다",'Claude Code에게 "이 코드의 잠재적 버그를 찾아줘"라고 요청하면 놓친 엣지 케이스를 발견할 수 있습니다','완성 후 Git에 커밋하는 습관을 들이세요 — Claude Code에게 "git init하고 초기 커밋 만들어줘"라고 요청하면 됩니다']}],sourceFiles:[{filename:"package.json",language:"json",code:`{
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
}`},{filename:"vite.config.ts",language:"typescript",code:`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});`},{filename:"src/types.ts",language:"typescript",code:`export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export type FilterType = 'all' | 'active' | 'completed';`},{filename:"src/App.tsx",language:"tsx",code:`import { useState, useEffect } from 'react';
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

export default App;`},{filename:"src/components/TodoHeader.tsx",language:"tsx",code:`import { useState } from 'react';

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
}`},{filename:"src/components/TodoList.tsx",language:"tsx",code:`import type { Todo } from '../types';
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
}`},{filename:"src/components/TodoItem.tsx",language:"tsx",code:`import type { Todo } from '../types';

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
}`},{filename:"src/components/TodoFilter.tsx",language:"tsx",code:`import type { FilterType } from '../types';

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
}`},{filename:"src/App.css",language:"css",code:`/* ── 전체 레이아웃 ── */
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
}`}]},t={id:"portfolio",slug:"portfolio",title:"포트폴리오 사이트 만들기",description:"개인 포트폴리오 웹사이트. Hero, About, Projects, Contact 섹션 구성.",level:"beginner",duration:"3-4시간",techStack:["React","Claude Code","TypeScript","CSS"],outcomes:["반응형 웹 디자인","컴포넌트 기반 레이아웃","CSS 스타일링 능력","Claude Code 활용 능력"],diagram:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 520" width="760" height="520" font-family="'Noto Sans KR', sans-serif">
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
</svg>`,steps:[{step:1,title:"프로젝트 초기화",description:"Claude Code로 React + TypeScript + Vite 프로젝트를 생성합니다.",content:`이 단계에서는 Claude Code를 사용하여 포트폴리오 프로젝트의 기본 골격을 만듭니다. Vite는 매우 빠른 빌드 도구로, React + TypeScript 조합에 최적화되어 있습니다. Claude Code는 터미널에서 직접 AI와 대화하며 코드를 생성하는 방식이므로, 프로젝트 생성부터 모든 과정을 자연어로 요청할 수 있습니다.

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
3. TypeScript 에러가 없는가?`,codeExamples:[{language:"bash",title:"Vite 프로젝트 생성 명령어",code:`npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
npm install
npm run dev`}],tips:['Claude Code에서 "npm create vite@latest" 명령을 직접 실행할 수 있습니다',"TypeScript 템플릿을 사용하면 코드 자동완성과 에러 감지가 더 좋아집니다","프로젝트 생성 후 반드시 npm install을 실행하여 의존성을 설치하세요"]},{step:2,title:"레이아웃 구조 설계",description:"Header/Navbar와 전체 섹션 레이아웃을 설계합니다.",content:`포트폴리오 사이트의 전체 구조를 잡는 단계입니다. 단일 페이지(SPA) 포트폴리오로 설계하며, 상단에 고정된 네비게이션 바가 있고 아래로 스크롤하면 각 섹션이 순서대로 나타나는 구조입니다.

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
3. 브라우저에서 7개 섹션이 위에서 아래로 순서대로 보이는가?`,codeExamples:[{language:"tsx",title:"App.tsx 기본 레이아웃",code:`import Header from './components/Header'
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

export default App`}],tips:["placeholder 컴포넌트를 먼저 만들면 전체 구조를 빠르게 파악할 수 있습니다","각 섹션에 고유한 id를 부여하면 네비게이션 링크에서 스크롤 이동이 가능합니다","CSS 파일도 컴포넌트별로 분리하면 관리가 편리합니다"]},{step:3,title:"Hero 섹션 구현",description:"Hero 컴포넌트에 이름, 직함, CTA 버튼을 구현합니다.",content:`Hero 섹션은 포트폴리오 사이트에서 가장 먼저 보이는 영역으로, 방문자에게 강렬한 첫인상을 줘야 합니다. 이름, 직함(또는 한 줄 소개), 그리고 행동 유도 버튼(CTA: Call To Action)을 배치합니다. 배경은 깔끔한 그라데이션이나 단색을 사용하고, 텍스트는 중앙 정렬로 배치합니다.

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
4. 그라데이션 배경이 정상적으로 보이는가?`,codeExamples:[{language:"tsx",title:"부드러운 스크롤 함수",code:`const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth'
  });
};`}],tips:["100vh를 사용하면 디바이스 크기에 관계없이 전체 화면을 채울 수 있습니다","CTA 버튼은 2개가 적당합니다 (주요 행동 + 보조 행동)",'scrollIntoView의 behavior: "smooth"는 대부분의 모던 브라우저에서 지원됩니다',"그라데이션은 linear-gradient를 사용하면 간단하게 구현할 수 있습니다"]},{step:4,title:"About & Skills 섹션",description:"자기소개와 기술 스택 그리드를 구현합니다.",content:`About 섹션에서는 자기소개 텍스트를 배치하고, Skills 섹션에서는 보유한 기술 스택을 시각적인 그리드로 표현합니다. 두 섹션 모두 깔끔한 카드 형태의 디자인을 사용합니다.

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
4. 숙련도 바가 정확한 비율로 표시되는가?`,codeExamples:[{language:"css",title:"Skills 카드 hover 효과",code:`.skill-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}`}],tips:["CSS Grid의 grid-template-columns: repeat(3, 1fr)을 사용하면 3열 그리드를 쉽게 만들 수 있습니다","transition 속성을 사용하면 hover 효과가 부드럽게 전환됩니다","프로필 이미지 대신 이니셜이나 아이콘을 사용해도 좋습니다","progress bar는 width를 퍼센트로 설정하고 배경색을 채우는 방식으로 구현합니다"]},{step:5,title:"Projects 섹션",description:"프로젝트 카드에 이미지와 링크를 구현합니다.",content:`Projects 섹션은 포트폴리오의 핵심입니다. 각 프로젝트를 카드 형태로 보여주며, 프로젝트 이미지(스크린샷), 제목, 설명, 사용 기술 태그, 그리고 GitHub/데모 링크를 포함합니다. 데이터를 배열로 관리하여 카드를 동적으로 렌더링하는 방식을 사용합니다.

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
4. 카드 hover 효과가 부드러운가?`,codeExamples:[{language:"tsx",title:"프로젝트 데이터 배열 구조",code:`interface Project {
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
];`}],tips:["프로젝트 데이터를 배열로 분리하면 유지보수가 쉬워집니다","map() 함수로 배열을 순회하며 카드를 렌더링하세요","이미지가 없을 때를 위한 placeholder를 항상 준비하세요",'target="_blank"와 rel="noopener noreferrer"를 외부 링크에 반드시 추가하세요']},{step:6,title:"Contact & Footer",description:"연락처 폼과 하단 Footer를 구현합니다.",content:`Contact 섹션은 방문자가 직접 메시지를 보낼 수 있는 폼을 제공합니다. 이름, 이메일, 메시지 입력 필드와 전송 버튼으로 구성됩니다. Footer에는 저작권 정보와 소셜 미디어 링크를 배치합니다.

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
4. Footer의 배경색과 텍스트 색상이 올바른가?`,codeExamples:[{language:"tsx",title:"폼 상태 관리 (useState)",code:`const [formData, setFormData] = useState({
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
};`}],tips:["e.preventDefault()를 호출하지 않으면 폼 제출 시 페이지가 새로고침됩니다","name 속성을 사용하면 하나의 handleChange 함수로 모든 입력을 처리할 수 있습니다","textarea에 rows 속성을 지정하면 초기 높이를 조절할 수 있습니다","실제 배포 시에는 EmailJS나 Formspree 같은 서비스를 연동할 수 있습니다"]},{step:7,title:"반응형 디자인",description:"Media Query를 사용하여 모바일과 태블릿에 대응합니다.",content:`마지막 단계에서는 모바일과 태블릿 화면에서도 포트폴리오가 올바르게 표시되도록 반응형 디자인을 적용합니다. CSS Media Query를 사용하여 화면 크기에 따라 레이아웃을 조정합니다. 모바일(~768px)에서는 1열 레이아웃으로, 태블릿(768~1024px)에서는 2열로, 데스크톱(1024px~)에서는 원래 디자인 그대로 유지합니다.

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
4. 버튼과 링크가 터치하기 충분한 크기인가(최소 44px)?`,codeExamples:[{language:"css",title:"반응형 Media Query 예시",code:`/* 태블릿 */
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
}`}],tips:['Chrome 개발자 도구(F12)의 "Toggle device toolbar"로 다양한 화면 크기를 테스트하세요',"mobile-first 방식(min-width)보다 desktop-first 방식(max-width)이 초보자에게 더 직관적입니다","rem 단위를 사용하면 글꼴 크기 조절이 일관성 있게 됩니다","터치 대상(버튼, 링크)은 최소 44x44px 이상이 권장됩니다"]}],sourceFiles:[{filename:"package.json",language:"json",code:`{
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
}`},{filename:"vite.config.ts",language:"ts",code:`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})`},{filename:"src/App.tsx",language:"tsx",code:`import Header from './components/Header'
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

export default App`},{filename:"src/App.css",language:"css",code:`/* ─── 전역 리셋 & 기본 스타일 ─── */
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
}`},{filename:"src/components/Header.tsx",language:"tsx",code:`import { useState } from 'react'

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

export default Header`},{filename:"src/components/Hero.tsx",language:"tsx",code:`function Hero() {
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

export default Hero`},{filename:"src/components/About.tsx",language:"tsx",code:`function About() {
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

export default About`},{filename:"src/components/Skills.tsx",language:"tsx",code:`interface Skill {
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

export default Skills`},{filename:"src/components/Projects.tsx",language:"tsx",code:`interface Project {
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

export default Projects`},{filename:"src/components/Contact.tsx",language:"tsx",code:`import { useState } from 'react'

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

export default Contact`},{filename:"src/components/Footer.tsx",language:"tsx",code:`const socialLinks = [
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

export default Footer`}]},o={id:"saas-landing",slug:"saas-landing",title:"SaaS 랜딩페이지 만들기",description:"SaaS 제품의 랜딩페이지. Hero, Features, Pricing, CTA, FAQ 섹션 구성.",level:"beginner",duration:"3-4시간",techStack:["React","Claude Code","TypeScript","CSS"],outcomes:["랜딩페이지 설계 능력","마케팅 UI 패턴 이해","반응형 디자인","Claude Code 활용"],diagram:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 520" font-family="'Noto Sans KR', sans-serif">
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
</svg>`,steps:[{step:1,title:"프로젝트 초기화",description:"React + TypeScript + Vite 프로젝트를 생성하고 기본 구조를 설정합니다.",content:`이 프로젝트에서는 Claude Code를 사용하여 SaaS 제품의 전문적인 랜딩페이지를 만듭니다. 가상의 프로젝트 관리 도구 "FlowDesk"를 위한 랜딩페이지를 구축합니다. 먼저 Vite로 React + TypeScript 프로젝트를 초기화합니다.

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

프로젝트 구조를 미리 계획합니다. src/components/ 폴더에 Hero, Features, Pricing, FAQ, CTA, Footer 컴포넌트를 배치하고, App.tsx에서 순서대로 렌더링하는 단순한 구조입니다. 별도의 라우팅은 필요하지 않습니다. 단일 페이지(Single Page)로 구성합니다.`,codeExamples:[{language:"bash",title:"Vite 프로젝트 생성",code:`npm create vite@latest saas-landing -- --template react-ts
cd saas-landing
npm install`}],tips:["Vite는 빌드 속도가 빠르고 설정이 간단하여 랜딩페이지에 적합합니다.",'Claude Code에 "불필요한 파일 정리"를 요청하면 깔끔한 시작점을 만들어줍니다.',"프로젝트 구조를 먼저 설명한 후 코드를 요청하면 일관된 결과를 얻습니다."]},{step:2,title:"Hero 섹션 구현",description:"방문자의 첫인상을 결정하는 Hero 섹션을 만듭니다.",content:`Hero 섹션은 랜딩페이지에서 가장 중요한 영역입니다. 방문자가 3초 이내에 제품의 가치를 이해할 수 있어야 합니다. 헤드라인, 서브 헤드라인, CTA(Call-to-Action) 버튼으로 구성합니다.

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

Hero 섹션의 핵심은 명확한 가치 제안(Value Proposition)입니다. "무엇을 하는 제품인지", "왜 사용해야 하는지"를 한 문장으로 전달해야 합니다. 장황한 설명보다 간결하고 임팩트 있는 카피가 중요합니다.`,codeExamples:[{language:"tsx",title:"Hero 컴포넌트 구조",code:`function Hero() {
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
}`}],tips:["Hero 헤드라인은 40px 이상의 폰트 크기를 사용하면 임팩트가 커집니다.","CTA 버튼은 2개까지가 적당합니다. 3개 이상이면 선택 장애를 유발합니다.","primary 버튼은 밝은 색, secondary 버튼은 아웃라인 스타일로 구분하세요."]},{step:3,title:"Features 섹션 구현",description:"제품의 핵심 기능을 3열 카드 그리드로 소개합니다.",content:`Features 섹션은 제품의 핵심 기능 3-6개를 카드 형태로 보여줍니다. 각 카드에는 아이콘(이모지 또는 SVG), 제목, 설명이 포함됩니다. CSS Grid로 3열 레이아웃을 구성하면 깔끔한 정렬이 가능합니다.

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
3. 카드 내용이 가독성이 좋은지`,codeExamples:[{language:"tsx",title:"Features 데이터 구조",code:`const features = [
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
))}`}],tips:["features 배열로 데이터를 분리하면 나중에 내용을 쉽게 수정할 수 있습니다.","3열 그리드는 CSS Grid의 grid-template-columns: repeat(3, 1fr)로 간단히 구현됩니다.","카드 호버 효과는 transform: translateY(-4px)과 box-shadow를 조합하면 자연스럽습니다."]},{step:4,title:"Pricing 섹션 구현",description:"3단계 가격 테이블을 만들어 요금제를 비교합니다.",content:`Pricing 섹션은 SaaS 랜딩페이지의 핵심입니다. Basic, Pro, Enterprise 3단계 요금제를 카드로 보여주고, 추천 요금제(Pro)를 시각적으로 강조합니다. 각 요금제에는 가격, 기능 목록, CTA 버튼이 포함됩니다.

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

가격 테이블에서 가장 중요한 것은 "비교의 용이성"입니다. 사용자가 한눈에 각 요금제의 차이를 파악할 수 있어야 합니다. 가장 인기 있는 요금제를 시각적으로 강조하고, 업그레이드 동기를 자연스럽게 부여하세요.`,codeExamples:[{language:"tsx",title:"요금제 데이터 구조",code:`const plans = [
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
];`}],tips:["추천 요금제는 가운데에 배치하고 scale(1.05) 정도로 살짝 크게 만드세요.","월/연간 토글은 useState로 간단히 구현할 수 있습니다.","가격 표시 시 toLocaleString()을 사용하면 천단위 콤마가 자동 적용됩니다.",'Enterprise 요금제에 "문의하기" 버튼을 넣으면 B2B 리드 확보에 효과적입니다.']},{step:5,title:"FAQ 섹션 구현",description:"자주 묻는 질문을 아코디언 형태로 구현합니다.",content:`FAQ(자주 묻는 질문) 섹션은 잠재 고객의 의문을 해소하고 전환율을 높이는 중요한 역할을 합니다. 아코디언(접고 펼치기) UI로 구현하면 공간을 효율적으로 사용할 수 있습니다. 각 질문을 클릭하면 답변이 부드럽게 펼쳐지는 인터랙션을 구현합니다.

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
3. 한 번에 하나의 항목만 열리는지`,codeExamples:[{language:"tsx",title:"아코디언 상태 관리",code:`const [openIndex, setOpenIndex] = useState<number | null>(null);

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
))}`}],tips:["max-height 트랜지션을 사용하면 열기/닫기 애니메이션이 자연스러워집니다.","FAQ 내용은 실제 고객이 자주 묻는 질문을 기반으로 작성하세요.","하나만 열리는 로직은 openIndex 상태 하나로 간단히 구현됩니다.","FAQ 섹션은 SEO에도 도움이 됩니다 (구조화된 데이터로 활용 가능)."]},{step:6,title:"CTA & Footer 구현",description:"최종 행동 유도 섹션과 페이지 하단 Footer를 만듭니다.",content:`CTA(Call-to-Action) 섹션은 페이지의 마지막 설득 지점입니다. 모든 정보를 확인한 방문자에게 최종 행동을 유도합니다. 강렬한 배경색과 큰 텍스트로 구성합니다. Footer는 회사 정보, 링크 모음, 저작권 표시를 포함합니다.

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
3. Footer 링크에 호버 효과가 있는지`,codeExamples:[{language:"tsx",title:"CTA 컴포넌트",code:`function CTA() {
  return (
    <section className="cta-section">
      <h2>지금 바로 시작하세요</h2>
      <p>14일 무료 체험, 신용카드 불필요</p>
      <button className="cta-button">무료 체험 시작하기</button>
    </section>
  );
}`}],tips:["CTA 섹션의 배경색은 페이지의 주요 색상과 동일하게 맞추세요.","Footer는 CSS Grid의 grid-template-columns: repeat(4, 1fr)로 균등 배치합니다.",'"신용카드 불필요"같은 문구는 가입 장벽을 낮춰 전환율을 높입니다.','Footer 링크는 실제로 동작하지 않아도 괜찮습니다. href="#"으로 처리하세요.']},{step:7,title:"반응형 및 애니메이션",description:"모바일 대응과 스크롤 애니메이션을 추가합니다.",content:`마지막 단계에서는 모바일 반응형 디자인과 스크롤 애니메이션을 적용합니다. 미디어 쿼리로 768px, 480px 브레이크포인트를 설정하고, Intersection Observer API로 스크롤 시 요소가 페이드인되는 효과를 구현합니다.

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

마지막으로 전체 페이지를 처음부터 끝까지 스크롤하며 완성도를 점검합니다. Hero에서 Footer까지 일관된 스타일, 자연스러운 섹션 전환, 반응형 레이아웃이 모두 정상 동작하는지 확인합니다.`,codeExamples:[{language:"tsx",title:"Intersection Observer 훅",code:`import { useEffect, useRef, useState } from 'react';

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
}`},{language:"css",title:"반응형 미디어 쿼리",code:`/* 태블릿 */
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
}`}],tips:["Intersection Observer는 scroll 이벤트보다 성능이 훨씬 좋습니다.","모바일 먼저 디자인(Mobile-First)하면 반응형 CSS가 더 간결해집니다.","애니메이션은 0.6s 이내로 설정하세요. 너무 느리면 답답하게 느껴집니다.","Chrome DevTools의 기기 시뮬레이터로 다양한 화면 크기를 테스트하세요."]}],sourceFiles:[{filename:"package.json",language:"json",code:`{
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
}`},{filename:"vite.config.ts",language:"typescript",code:`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});`},{filename:"src/App.tsx",language:"tsx",code:`import Hero from './components/Hero';
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

export default App;`},{filename:"src/App.css",language:"css",code:`/* ─── 전역 리셋 ─── */
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
}`},{filename:"src/components/Hero.tsx",language:"tsx",code:`function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">
          ✨ 2026년 최고의 프로젝트 관리 도구
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
          <button className="btn-secondary">데모 보기 →</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;`},{filename:"src/components/Features.tsx",language:"tsx",code:`import { useEffect, useRef, useState } from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '🚀',
    title: '실시간 협업',
    description:
      '팀원들과 실시간으로 작업 현황을 공유하고, 변경사항을 즉시 반영하세요.',
  },
  {
    icon: '📅',
    title: '스마트 일정 관리',
    description:
      'AI가 팀원의 업무량을 분석하여 최적의 일정을 자동으로 조정합니다.',
  },
  {
    icon: '📊',
    title: '대시보드 분석',
    description:
      '프로젝트 진행률, 병목 구간, 팀 생산성을 한눈에 파악할 수 있습니다.',
  },
  {
    icon: '⚡',
    title: '자동화 워크플로우',
    description:
      '반복적인 작업을 자동화하고, 알림과 승인 프로세스를 간소화하세요.',
  },
  {
    icon: '💬',
    title: '통합 메시징',
    description:
      '프로젝트 내에서 바로 대화하세요. 별도의 메신저가 필요 없습니다.',
  },
  {
    icon: '🔒',
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

export default Features;`},{filename:"src/components/Pricing.tsx",language:"tsx",code:`import { useEffect, useRef, useState } from 'react';

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
                {plan.price > 0 ? '₩' : ''}
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

export default Pricing;`},{filename:"src/components/FAQ.tsx",language:"tsx",code:`import { useEffect, useRef, useState } from 'react';

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

export default FAQ;`},{filename:"src/components/CTA.tsx",language:"tsx",code:`import { useEffect, useRef, useState } from 'react';

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

export default CTA;`},{filename:"src/components/Footer.tsx",language:"tsx",code:`function Footer() {
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

export default Footer;`}]},r=[e,t,o];export{r as b};
