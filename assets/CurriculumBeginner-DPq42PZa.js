import{r as g,h as v,a as C,j as e}from"./index-CLCU2oiu.js";import{S as x}from"./SidebarLayout-C8IPn1-0.js";import{C as b}from"./CodeBlock-DVgYyJMo.js";import{L as h}from"./LevelBadge-Brz6tSWv.js";const i=[{id:"mindset",slug:"mindset",title:"바이브코딩 마인드셋",description:"AI와 협업하는 새로운 개발 패러다임을 이해하고, 바이브코딩이 무엇인지, 누구나 시작할 수 있는 이유를 알아봅니다.",level:"beginner",order:1,contents:[{id:"mindset-what",title:"바이브코딩이란 무엇인가?",description:"바이브코딩의 정의와 핵심 철학",content:'바이브코딩(Vibe Coding)은 AI에게 자연어로 원하는 기능을 설명하면 AI가 코드를 생성해주는 새로운 개발 방식입니다. 개발자가 한 줄 한 줄 코드를 작성하는 대신, "이런 기능이 필요해"라고 대화하듯 지시하면 AI가 코드를 만들어줍니다. 핵심은 완벽한 프로그래밍 지식이 없어도 아이디어를 빠르게 구현할 수 있다는 점입니다. 바이브코딩은 코딩을 "작성"이 아닌 "지시와 검증"의 과정으로 바꿔놓았습니다.',keyPoints:["AI에게 자연어로 원하는 결과를 설명하는 개발 방식","코드 작성 능력보다 문제 정의 능력이 중요","빠른 프로토타이핑과 반복 개선이 핵심 워크플로우","Andrej Karpathy가 2025년 처음 명명한 용어"],codeExamples:[{language:"text",title:"바이브코딩 프롬프트 예시",code:`# 전통적 코딩: 직접 코드를 작성
const button = document.createElement("button");
button.textContent = "제출";
button.addEventListener("click", handleSubmit);

# 바이브코딩: AI에게 자연어로 지시
"파란색 제출 버튼을 만들어줘.
 클릭하면 폼 데이터를 서버에 전송하고,
 전송 중에는 로딩 스피너를 보여줘."`}]},{id:"mindset-vs",title:"전통 코딩 vs AI 코딩",description:"기존 개발 방식과 AI 협업 개발의 비교",content:'전통 코딩에서는 개발자가 문법, 알고리즘, 프레임워크를 모두 숙지해야 했습니다. AI 코딩에서는 "무엇을 만들 것인가"에 집중하고, "어떻게 구현할 것인가"는 AI와 함께 해결합니다. 전통 코딩이 악기 연주를 직접 배우는 것이라면, 바이브코딩은 오케스트라를 지휘하는 것에 가깝습니다. 다만 AI가 생성한 코드를 검증하고 방향을 잡아주는 역할은 여전히 사람의 몫입니다.',keyPoints:["전통 코딩: 문법 암기 + 직접 구현 → AI 코딩: 요구사항 정의 + AI 협업","개발 속도가 5~10배 빨라지는 경우가 많음","AI 코드를 무조건 신뢰하지 말고 반드시 검토해야 함","기초 지식이 있으면 AI를 더 효과적으로 활용 가능"]},{id:"mindset-who",title:"누가 바이브코더가 될 수 있나?",description:"바이브코딩의 진입 장벽과 대상",content:"바이브코딩은 비개발자, 디자이너, 기획자, 학생 등 누구나 시작할 수 있습니다. 프로그래밍 경험이 없어도 명확하게 원하는 것을 설명할 수 있다면 충분합니다. 물론 HTML/CSS/JavaScript 기초를 알면 AI의 출력물을 더 잘 이해하고 수정할 수 있습니다. 바이브코딩은 코딩의 민주화를 이끌고 있으며, 아이디어만 있으면 누구든 프로덕트를 만들 수 있는 시대를 열었습니다.",keyPoints:["비개발자도 아이디어를 직접 프로토타입으로 구현 가능","기획자, 디자이너, 마케터 등 다양한 직군에서 활용","기초 웹 지식(HTML/CSS)이 있으면 더 효과적","핵심 역량: 논리적 사고 + 명확한 의사소통"]},{id:"mindset-roadmap",title:"학습 로드맵",description:"바이브코딩 학습 단계와 권장 순서",content:"초급 단계에서는 AI 도구에 익숙해지고 간단한 웹페이지를 만들어봅니다. 중급 단계에서는 Cursor 같은 AI IDE를 활용해 프론트엔드/백엔드를 연결하고 데이터베이스를 다룹니다. 고급 단계에서는 Claude Code 같은 터미널 에이전트로 복잡한 프로젝트를 자동화하고 배포 파이프라인을 구축합니다. 각 단계마다 실습 프로젝트를 완성하며 실력을 쌓아가는 것이 가장 효과적인 학습 방법입니다.",keyPoints:["초급: AI 도구 체험 → 간단한 앱 만들기 (2~4주)","중급: AI IDE 활용 → 풀스택 프로젝트 (4~8주)","고급: 터미널 에이전트 → 자동화와 배포 (4~8주)","가장 중요한 원칙: 직접 만들면서 배우기"],codeExamples:[{language:"text",title:"단계별 추천 도구",code:`[ 초급 — 풀앱빌더 ]
  Lovable, Bolt.new, v0.dev
  → 대화만으로 앱 완성, 배포까지 원클릭

[ 중급 — AI IDE ]
  Cursor, Windsurf
  → 기존 코드베이스에서 AI와 협업

[ 고급 — 터미널 에이전트 ]
  Claude Code, Codex CLI
  → 멀티파일 수정, 자동화 스크립트`}]}]},{id:"tools-overview",slug:"tools-overview",title:"AI 코딩 도구의 종류",description:"채팅형 AI, 풀앱빌더, AI IDE, 터미널 에이전트 등 다양한 AI 코딩 도구의 특징과 차이를 살펴봅니다.",level:"beginner",order:2,contents:[{id:"tools-chat",title:"채팅형 AI (Claude.ai, ChatGPT)",description:"대화로 코드를 생성하는 범용 AI",content:'채팅형 AI는 가장 접근성이 높은 AI 코딩 도구입니다. Claude.ai나 ChatGPT에 "로그인 폼을 React로 만들어줘"라고 입력하면 전체 코드를 생성해줍니다. 코드뿐 아니라 설계 조언, 버그 분석, 리팩토링 제안까지 다양한 역할을 수행합니다. 다만 생성된 코드를 직접 복사-붙여넣기해야 하므로 프로젝트 규모가 커지면 번거로울 수 있습니다. 초보자가 코딩 개념을 학습하거나 단일 파일 수준의 코드를 빠르게 얻을 때 가장 유용합니다.',keyPoints:["Claude.ai: 긴 코드 생성에 강하고 정확도가 높음","ChatGPT: 넓은 범위의 언어와 프레임워크 지원","장점: 무료/저가, 즉시 사용 가능, 학습 겸용","한계: 파일 관리/빌드/배포는 수동으로 처리해야 함"]},{id:"tools-fullapp",title:"풀앱빌더 (Lovable, Bolt.new, v0.dev)",description:"대화만으로 완전한 웹앱을 만드는 도구",content:"풀앱빌더는 프롬프트 한 줄로 완전한 웹 애플리케이션을 생성하고 즉시 배포까지 해주는 도구입니다. Lovable은 Supabase 연동, 인증, 결제까지 통합된 풀스택 앱을 만들어주고, Bolt.new는 브라우저 내에서 실시간 미리보기가 가능합니다. v0.dev는 Vercel이 만든 UI 컴포넌트 생성 특화 도구로 Tailwind CSS + shadcn/ui 기반의 아름다운 컴포넌트를 빠르게 만듭니다. 코딩 경험이 전혀 없는 사람도 30분 안에 동작하는 앱을 완성할 수 있어 바이브코딩 입문에 최적입니다.",keyPoints:["Lovable: 풀스택 앱 + Supabase 백엔드 자동 연결","Bolt.new: StackBlitz 기반, 브라우저에서 실시간 개발","v0.dev: UI 컴포넌트 특화, shadcn/ui + Tailwind","공통: 코딩 경험 불필요, 원클릭 배포 가능"],codeExamples:[{language:"text",title:"Lovable에 보내는 프롬프트 예시",code:`"할 일 관리 앱을 만들어줘.
 - 할 일 추가, 완료 체크, 삭제 기능
 - Supabase에 데이터를 저장
 - 로그인한 사용자별로 할 일을 분리
 - 깔끔한 미니멀 디자인, 다크모드 지원
 - 모바일 반응형"`}]},{id:"tools-ide",title:"AI IDE (Cursor, Windsurf)",description:"기존 코드베이스에서 AI와 함께 개발하는 통합 환경",content:'AI IDE는 VS Code 같은 코드 편집기에 AI를 깊이 통합한 도구입니다. Cursor는 VS Code를 포크해서 만든 AI 네이티브 에디터로, Cmd+K로 인라인 코드 생성, Composer로 멀티파일 수정이 가능합니다. Windsurf(구 Codeium)는 자체 AI 에이전트 "Cascade"가 파일 구조를 파악하고 자동으로 관련 파일들을 함께 수정합니다. 이미 시작한 프로젝트에 기능을 추가하거나 리팩토링할 때, 전체 프로젝트 맥락을 이해하는 AI IDE가 가장 효과적입니다. 중급 이상에서 본격적으로 사용하게 되지만, 도구의 존재를 미리 알아두면 학습 계획을 세우기 좋습니다.',keyPoints:["Cursor: VS Code 기반, Cmd+K 인라인 편집, Composer 멀티파일","Windsurf: Cascade 에이전트, 파일 자동 탐색, 컨텍스트 인식","기존 프로젝트에 AI를 적용할 때 최적","초급 이후 중급 단계에서 본격 활용 권장"]},{id:"tools-terminal",title:"터미널 에이전트 (Claude Code, Codex CLI)",description:"명령줄에서 AI가 직접 코드를 수정하고 실행하는 자율형 도구",content:"터미널 에이전트는 명령줄(CLI)에서 실행되며, AI가 파일 시스템을 직접 탐색하고, 코드를 수정하고, 명령어를 실행하는 가장 강력한 형태의 AI 코딩 도구입니다. Claude Code는 Anthropic의 공식 CLI 에이전트로, 프로젝트 전체를 이해한 뒤 여러 파일을 동시에 수정하고 git 커밋까지 자동으로 수행합니다. OpenAI의 Codex CLI도 유사한 방식으로 터미널에서 코드 생성과 실행을 지원합니다. 고급 단계의 도구이지만 자동화와 대규모 리팩토링에서 압도적인 생산성을 보여줍니다.",keyPoints:["Claude Code: 파일 탐색 + 멀티파일 수정 + git 자동화","Codex CLI: OpenAI 기반 터미널 코딩 에이전트","가장 높은 자율성, 가장 강력한 자동화","고급 단계에서 활용, 기초 CLI 지식 필요"],codeExamples:[{language:"text",title:"Claude Code 사용 예시",code:`$ claude
> 이 프로젝트의 모든 TypeScript 파일에서
  사용하지 않는 import를 찾아서 제거해줘.
  변경사항을 git commit으로 만들어줘.

→ Claude Code가 자동으로:
  1. 프로젝트 구조를 탐색
  2. 미사용 import를 분석
  3. 각 파일을 수정
  4. git add + commit 실행`}]}]},{id:"first-todo-app",slug:"first-todo-app",title:"첫 번째 앱: Todo App 만들기",description:"Lovable이나 Bolt.new를 사용해 Todo App을 만들어보며, 프롬프트 작성법부터 배포까지 체험합니다.",level:"beginner",order:3,contents:[{id:"todo-start",title:"풀앱빌더로 시작하기",description:"Lovable 또는 Bolt.new 접속 및 첫 프롬프트",content:'Lovable(lovable.dev)이나 Bolt.new(bolt.new)에 접속해 무료 계정을 만듭니다. 로그인하면 바로 프롬프트 입력창이 보이는데, 여기에 만들고 싶은 앱을 한국어로 설명하면 됩니다. Todo App은 바이브코딩 입문의 "Hello World"와 같은 프로젝트로, 기본적인 CRUD(생성/읽기/수정/삭제) 개념을 자연스럽게 익힐 수 있습니다. 첫 프롬프트는 구체적일수록 좋지만, 너무 완벽하지 않아도 괜찮습니다. 이후 대화로 수정할 수 있으니까요.',keyPoints:["Lovable.dev 또는 Bolt.new에 무료 가입","첫 프롬프트는 완벽하지 않아도 됨 — 반복 수정 가능",'Todo App은 바이브코딩의 "Hello World"',"CRUD 개념을 자연스럽게 학습하는 실습"],codeExamples:[{language:"text",title:"첫 프롬프트: Todo App 생성",code:`"심플한 할 일 관리 앱을 만들어줘.
 기능:
 - 할 일 텍스트 입력 후 추가 버튼으로 등록
 - 체크박스로 완료/미완료 토글
 - 삭제 버튼으로 항목 제거
 - 완료된 항목은 취소선 표시
 디자인:
 - 깔끔한 카드 UI, 그림자 효과
 - 보라색 계열 테마
 - 모바일에서도 잘 보이게"`}]},{id:"todo-modify",title:"UI 수정 요청하기",description:"생성된 앱을 대화로 개선하는 과정",content:'AI가 첫 번째 버전을 만들어주면 미리보기에서 직접 확인합니다. 마음에 들지 않는 부분은 후속 프롬프트로 수정을 요청합니다. "버튼 색을 파란색으로 바꿔줘", "폰트 크기를 키워줘" 같은 작은 수정부터 "카테고리별 필터링 기능을 추가해줘" 같은 기능 추가까지 가능합니다. 한 번에 모든 것을 요구하기보다 한 가지씩 수정하며 확인하는 것이 좋습니다. 이 반복적인 대화 과정이 바이브코딩의 핵심 워크플로우이며, 피드백 루프라고 부릅니다.',keyPoints:["한 번에 한 가지 수정 요청이 가장 효과적","시각적 변경과 기능 변경을 구분해서 요청","AI가 잘못 이해했다면 다시 명확하게 설명","매 수정 후 미리보기에서 반드시 확인"],codeExamples:[{language:"text",title:"수정 요청 프롬프트 흐름",code:`1차: "할 일 목록 위에 남은 할 일 개수를 표시해줘"

2차: "완료된 항목과 미완료 항목을 탭으로 분리해줘.
      전체 / 진행중 / 완료됨 세 개의 필터 탭"

3차: "다크모드 토글 버튼을 상단 오른쪽에 추가해줘.
      사용자의 시스템 설정을 기본값으로 사용"

4차: "할 일을 드래그앤드롭으로 순서 변경 가능하게 해줘"`}]},{id:"todo-code",title:"생성된 코드 살펴보기",description:"AI가 만든 코드의 구조 이해하기",content:"AI가 생성한 코드를 에디터 탭에서 살펴봅니다. React 컴포넌트 구조, 상태 관리(useState), 이벤트 핸들러 등의 패턴이 보일 것입니다. 처음에는 모든 코드를 이해할 필요는 없지만, 전체 구조를 파악하는 습관을 들이면 나중에 직접 수정할 수 있게 됩니다. 특히 컴포넌트가 어떻게 분리되어 있는지, 데이터가 어디에 저장되는지를 주목하세요. 이렇게 AI 코드를 읽는 것 자체가 훌륭한 코딩 학습 방법입니다.",keyPoints:["코드를 100% 이해하지 않아도 됨 — 구조만 파악","App.tsx → 메인 컴포넌트, 상태(state)가 여기에","useState: 할 일 목록 데이터를 관리하는 React 훅","코드를 읽는 습관이 AI 코딩 실력을 키우는 핵심"],codeExamples:[{language:"javascript",title:"AI가 생성한 Todo 컴포넌트 (핵심 부분)",code:`const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");

const addTodo = () => {
  if (!input.trim()) return;
  setTodos([...todos, {
    id: Date.now(),
    text: input,
    completed: false
  }]);
  setInput("");
};

const toggleTodo = (id) => {
  setTodos(todos.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  ));
};`}]},{id:"todo-deploy",title:"배포하기",description:"만든 앱을 인터넷에 공개하는 과정",content:'풀앱빌더의 가장 큰 장점 중 하나는 원클릭 배포입니다. Lovable은 "Publish" 버튼을, Bolt.new는 "Deploy" 버튼을 누르면 고유한 URL이 생성됩니다. 이 URL을 친구나 동료에게 공유하면 바로 사용해볼 수 있습니다. 나만의 첫 웹앱이 인터넷에 올라가는 경험은 큰 동기부여가 됩니다. 무료 플랜에서는 URL이 플랫폼 도메인을 사용하지만, 커스텀 도메인 연결도 가능합니다. 배포 후에도 프롬프트로 수정하면 자동으로 재배포되어 항상 최신 상태가 유지됩니다.',keyPoints:["Lovable: Publish 버튼 → lovable.dev 서브도메인 URL 생성","Bolt.new: Deploy 버튼 → Netlify 자동 배포","배포 후에도 대화로 수정하면 자동 재배포","커스텀 도메인 연결은 유료 플랜에서 지원"]}]},{id:"portfolio-site",slug:"portfolio-site",title:"포트폴리오 사이트 만들기",description:"v0.dev 또는 Lovable으로 개인 포트폴리오 사이트를 만들어봅니다. 섹션 구성, 반응형 디자인, 배포를 실습합니다.",level:"beginner",order:4,contents:[{id:"portfolio-plan",title:"포트폴리오 기획하기",description:"어떤 섹션을 넣을지 계획 세우기",content:'포트폴리오 사이트를 만들기 전에 어떤 정보를 담을지 먼저 정리합니다. 일반적으로 히어로(Hero) 섹션, 자기소개, 스킬/기술 스택, 프로젝트 갤러리, 연락처 섹션을 포함합니다. AI에게 요청할 때 이 구조를 미리 정리해서 전달하면 훨씬 완성도 높은 결과물을 얻을 수 있습니다. 특히 "어떤 분위기인지"를 설명하면 디자인 방향도 잡을 수 있습니다 (미니멀, 크리에이티브, 프로페셔널 등). 포트폴리오는 취업, 프리랜서 활동, 개인 브랜딩에 실질적으로 도움이 되는 프로젝트입니다.',keyPoints:["필수 섹션: Hero, About, Skills, Projects, Contact","분위기/톤 키워드를 함께 전달하면 디자인 품질 향상","실제 내용(이름, 경력, 프로젝트)을 미리 준비","참고할 포트폴리오 URL이 있으면 함께 전달"],codeExamples:[{language:"text",title:"포트폴리오 생성 프롬프트",code:`"개발자 포트폴리오 웹사이트를 만들어줘.

 구성:
 1. Hero 섹션: 이름, 한 줄 소개, 프로필 사진 영역
 2. About: 3~4줄 자기소개
 3. Skills: 기술 스택을 아이콘 + 진행 바로 표시
 4. Projects: 카드형 갤러리 (이미지, 제목, 설명, 링크)
 5. Contact: 이메일, GitHub, LinkedIn 링크

 디자인: 미니멀하고 모던한 느낌, 다크 테마
 기술: React + Tailwind CSS
 반응형: 모바일/태블릿/데스크톱 모두 대응"`}]},{id:"portfolio-responsive",title:"반응형 디자인 요청하기",description:"모바일, 태블릿, 데스크톱에서 모두 잘 보이게 만들기",content:'반응형 디자인은 화면 크기에 따라 레이아웃이 자동으로 조정되는 것을 말합니다. AI에게 "모바일 반응형"이라고만 말해도 기본적인 반응형 처리를 해주지만, 구체적인 요청이 더 좋은 결과를 냅니다. 예를 들어 "프로젝트 카드를 데스크톱에서는 3열, 태블릿에서는 2열, 모바일에서는 1열로 보여줘"라고 지시하면 정확하게 반영됩니다. 미리보기에서 브라우저 크기를 줄여보거나 모바일 뷰로 전환해서 반드시 확인하세요. 네비게이션 메뉴가 모바일에서 햄버거 메뉴로 바뀌는지, 폰트 크기가 적절한지를 체크합니다.',keyPoints:["데스크톱/태블릿/모바일 각각의 레이아웃을 구체적으로 지시","미리보기에서 브라우저 크기를 줄여보며 확인","네비게이션, 이미지, 텍스트 크기를 각각 검토","Tailwind CSS의 반응형 접두사(sm:, md:, lg:)가 자동 적용됨"]},{id:"portfolio-customize",title:"내 정보로 커스터마이징",description:"더미 데이터를 실제 내용으로 교체하기",content:'AI가 처음 생성한 포트폴리오에는 "John Doe"같은 더미 데이터가 들어있습니다. 이를 본인의 실제 정보로 교체하는 과정이 필요합니다. 프롬프트로 "이름을 홍길동으로, 직함을 프론트엔드 개발자로 바꿔줘"라고 할 수 있고, 직접 코드에서 텍스트를 수정할 수도 있습니다. 프로젝트 섹션에는 이전에 AI로 만든 Todo App이나 다른 실습 결과물을 넣으면 자연스럽게 포트폴리오가 채워집니다. 프로필 이미지는 온라인 이미지 URL을 제공하거나 Lovable의 파일 업로드 기능을 활용합니다.',keyPoints:["더미 텍스트를 실제 이름/경력/프로젝트로 교체","이전 실습 결과물(Todo App 등)을 프로젝트에 추가","이미지 URL을 직접 제공하거나 파일을 업로드","직접 코드를 수정해보는 것도 좋은 학습 경험"],codeExamples:[{language:"html",title:"Hero 섹션 HTML 구조 예시",code:`<section class="hero">
  <div class="hero-content">
    <img src="profile.jpg" alt="프로필" class="avatar" />
    <h1>홍길동</h1>
    <p class="subtitle">프론트엔드 개발자 | 바이브코더</p>
    <div class="hero-links">
      <a href="https://github.com/username">GitHub</a>
      <a href="mailto:email@example.com">Email</a>
    </div>
  </div>
</section>`}]}]},{id:"saas-landing",slug:"saas-landing",title:"SaaS 랜딩 프로토타입",description:"구독 서비스의 랜딩 페이지를 만들어보며 CTA 버튼, 가격 테이블, 소셜 프루프 등 전환 최적화 요소를 실습합니다.",level:"beginner",order:5,contents:[{id:"saas-structure",title:"랜딩 페이지 구조 설계",description:"SaaS 랜딩 페이지의 필수 섹션 이해하기",content:"SaaS 랜딩 페이지는 방문자를 유료 사용자로 전환하는 것이 목적입니다. 일반적으로 Hero(가치 제안), Features(주요 기능), Pricing(가격표), Testimonials(고객 후기), CTA(행동 유도) 섹션으로 구성됩니다. AI에게 가상의 서비스를 정의하고 이 구조대로 랜딩 페이지를 요청하면 실제 SaaS 기업의 랜딩 페이지와 유사한 결과물을 얻을 수 있습니다. 이 실습은 바이브코딩으로 사업 아이디어를 빠르게 시각화하는 연습이 됩니다. 프로토타입을 만든 뒤 주변 사람의 피드백을 받아 개선하면 실제 사업 검증(MVP)에도 활용할 수 있습니다.",keyPoints:["필수 섹션: Hero → Features → Pricing → Testimonials → CTA","Hero 섹션의 가치 제안(Value Proposition)이 가장 중요","가상의 SaaS 서비스를 정의하고 연습","프로토타입을 빠르게 만들어 사업 아이디어를 검증 가능"],codeExamples:[{language:"text",title:"SaaS 랜딩 페이지 프롬프트",code:`"AI 기반 일정 관리 SaaS 'SmartPlanner'의 랜딩 페이지를 만들어줘.

 Hero: "AI가 당신의 하루를 설계합니다" 헤드라인,
   부제목, 무료 체험 시작 CTA 버튼
 Features: 아이콘 + 제목 + 설명 3열 레이아웃
   - AI 자동 일정 배분
   - 팀 캘린더 동기화
   - 스마트 알림
 Pricing: Free / Pro($9) / Team($29) 3단 가격표
 Testimonials: 고객 후기 3개, 사진+이름+회사
 Footer: 회사정보, 링크, 소셜미디어

 디자인: 그라데이션 Hero, 깔끔한 화이트 배경"`}]},{id:"saas-cta",title:"CTA 버튼과 전환 최적화",description:"효과적인 행동 유도 버튼 설계",content:'CTA(Call To Action) 버튼은 랜딩 페이지에서 가장 중요한 요소입니다. "무료로 시작하기", "14일 무료 체험" 같은 문구가 "회원가입"보다 클릭률이 높습니다. AI에게 CTA 버튼의 위치, 색상, 문구를 구체적으로 지시하면 전환율이 높은 디자인을 만들 수 있습니다. Hero 섹션과 페이지 하단에 각각 CTA를 배치하고, 색상은 전체 테마와 대비되는 눈에 띄는 색을 사용합니다. 버튼 주변에 "신용카드 불필요", "30초면 시작" 같은 안심 문구를 추가하면 전환율이 더 높아집니다.',keyPoints:["CTA 문구: 혜택 중심 (무료 체험, 즉시 시작)","버튼 색상: 배경과 대비되는 강조색 사용",'안심 문구: "카드 불필요", "언제든 해지 가능"',"Hero와 페이지 하단에 각각 CTA 배치"],codeExamples:[{language:"css",title:"CTA 버튼 스타일 예시",code:`.cta-button {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
}`}]},{id:"saas-pricing",title:"가격 테이블 만들기",description:"비교하기 쉬운 요금제 테이블 설계",content:'가격 테이블은 방문자가 요금제를 비교하고 선택하는 핵심 섹션입니다. 보통 3개의 요금제(무료, 기본, 프리미엄)를 나란히 배치하고, 중간 요금제를 "추천"으로 강조합니다. AI에게 각 요금제의 이름, 가격, 포함 기능을 목록으로 전달하면 깔끔한 가격 테이블을 생성합니다. "추천" 요금제에 테두리나 배지를 추가하고 약간 크게 표시하면 시각적으로 선택을 유도할 수 있습니다. 월간/연간 토글 스위치를 추가하면 더 전문적인 느낌을 줄 수 있으며, 연간 결제 시 할인을 표시하는 것도 좋습니다.',keyPoints:["3개 요금제 나란히 비교, 추천 요금제 시각적 강조","각 요금제별 포함 기능을 체크리스트로 표시","월간/연간 토글 + 연간 할인 표시로 전문성 향상",'가격 끝에 "/월" 표시, 부가세 별도 안내']},{id:"saas-social",title:"소셜 프루프 추가하기",description:"고객 후기와 신뢰 요소로 전환율 높이기",content:'소셜 프루프(Social Proof)는 다른 사람들도 이 서비스를 사용한다는 증거를 보여주어 신뢰를 높이는 마케팅 기법입니다. 고객 후기(Testimonials), 사용 기업 로고, 사용자 수, 별점 등이 대표적인 소셜 프루프 요소입니다. AI에게 "고객 후기 섹션을 추가해줘. 프로필 사진, 이름, 직함, 후기 내용을 포함"이라고 요청하면 전문적인 후기 카드를 만들어줍니다. 프로토타입 단계에서는 가상의 후기를 사용하되, 실제 서비스에서는 진짜 고객 후기로 교체해야 합니다.',keyPoints:["Testimonials: 사진 + 이름 + 직함 + 후기 내용",'기업 로고 나열: "100+ 기업이 선택한 서비스"','숫자 강조: "10,000명의 사용자", "99.9% 가동률"',"프로토타입에서는 가상 데이터, 실제 서비스는 실제 후기"],codeExamples:[{language:"html",title:"고객 후기 카드 HTML 구조",code:`<div class="testimonial-card">
  <div class="stars">★★★★★</div>
  <p class="quote">
    "SmartPlanner 도입 후 팀 회의 시간이 40% 줄었습니다.
     AI가 최적의 시간을 자동으로 찾아주니까요."
  </p>
  <div class="author">
    <img src="avatar.jpg" alt="김개발" />
    <div>
      <strong>김개발</strong>
      <span>CTO, 테크스타트업</span>
    </div>
  </div>
</div>`}]}]},{id:"prompt-basics",slug:"prompt-basics",title:"프롬프트 기초",description:"AI에게 효과적으로 지시하는 방법을 배웁니다. 좋은 프롬프트와 나쁜 프롬프트의 차이, 컨텍스트 제공, 피드백 루프를 익힙니다.",level:"beginner",order:6,contents:[{id:"prompt-good-bad",title:"좋은 프롬프트 vs 나쁜 프롬프트",description:"효과적인 프롬프트의 구성 요소",content:'좋은 프롬프트는 구체적이고, 맥락이 있고, 원하는 결과의 형태를 명시합니다. "웹사이트 만들어줘"는 나쁜 프롬프트이고, "React로 개인 블로그를 만들어줘, Tailwind CSS를 사용하고, 포스트 목록, 상세 페이지, 카테고리 필터를 포함해줘"는 좋은 프롬프트입니다. AI는 모호한 지시를 받으면 자기 나름대로 해석하기 때문에 원하지 않는 결과가 나올 확률이 높습니다. 프롬프트에 "기술 스택", "디자인 스타일", "기능 목록"을 명시하면 결과의 품질이 크게 올라갑니다. 처음에는 프롬프트 작성에 시간이 걸리지만, 연습할수록 빠르고 정확하게 작성할 수 있게 됩니다.',keyPoints:['나쁜 예: "사이트 만들어줘" → 좋은 예: 기술+디자인+기능을 구체적으로','모호할수록 AI의 "추측"이 많아지고 결과가 벗어남',"프롬프트 3요소: 목적(What) + 맥락(Context) + 형태(Format)","처음 잘 작성하면 수정 횟수가 줄어듦"],codeExamples:[{language:"text",title:"나쁜 프롬프트 vs 좋은 프롬프트",code:`[ 나쁜 프롬프트 ]
"로그인 기능 만들어줘"

→ AI가 추측해야 할 것: 어떤 프레임워크? 이메일/소셜?
  디자인은? 비밀번호 규칙은? 에러 처리는?

[ 좋은 프롬프트 ]
"React + Supabase로 로그인 페이지를 만들어줘.
 - 이메일/비밀번호 로그인
 - Google OAuth 소셜 로그인 버튼
 - 비밀번호 찾기 링크
 - 입력값 유효성 검사 (이메일 형식, 비밀번호 8자 이상)
 - 로그인 실패 시 에러 메시지 표시
 - 디자인: 가운데 정렬된 카드 폼, 그림자 효과"`}]},{id:"prompt-context",title:"컨텍스트 제공하기",description:"AI가 더 정확한 결과를 내도록 배경 정보 전달하기",content:'컨텍스트(Context)는 AI가 상황을 이해하는 데 필요한 배경 정보입니다. "대시보드를 만들어줘"보다 "초등학교 교사가 학생 출석을 관리하는 대시보드"라고 하면 AI가 적절한 UI와 기능을 설계합니다. 누가 사용하는지(사용자), 어떤 상황에서 쓰는지(사용 맥락), 어떤 데이터를 다루는지(데이터 구조)를 알려주세요. 기존 코드가 있다면 관련 코드를 함께 붙여넣는 것도 중요한 컨텍스트입니다. 컨텍스트가 풍부할수록 AI는 더 정확하고 실용적인 코드를 생성합니다.',keyPoints:["사용자(Who): 누가 이 기능을 사용하는가?","맥락(When/Where): 어떤 상황에서 사용되는가?","데이터(What): 어떤 데이터를 입력/출력하는가?","기존 코드가 있으면 함께 붙여넣기"]},{id:"prompt-step",title:"단계적 지시 (Step-by-Step)",description:"복잡한 기능을 단계별로 나누어 요청하기",content:'복잡한 기능을 한 번에 요청하면 AI가 일부를 빠뜨리거나 잘못 구현할 수 있습니다. 대신 기능을 작은 단계로 나누어 순서대로 요청하면 더 안정적인 결과를 얻습니다. 예를 들어 "회원가입 + 로그인 + 마이페이지를 만들어줘"보다 먼저 "회원가입 폼을 만들어줘"를 완성한 뒤, "로그인 페이지를 추가해줘"로 이어가는 것이 좋습니다. 각 단계가 완성되면 확인하고, 문제가 있으면 바로 수정한 뒤 다음 단계로 넘어갑니다. 이 방식은 디버깅도 쉽고, AI가 이전 맥락을 기억한 상태에서 일관성 있는 코드를 생성합니다.',keyPoints:["큰 기능을 3~5개의 작은 단계로 분리","각 단계 완성 → 확인 → 수정 → 다음 단계","한 번에 많이 요청하면 품질이 떨어짐","단계적 접근이 디버깅도 쉽게 만듦"],codeExamples:[{language:"text",title:"단계적 프롬프트 전략",code:`[ Step 1 — 기본 구조 ]
"블로그 메인 페이지를 만들어줘.
 포스트 목록을 카드 형태로 보여주고,
 제목/날짜/미리보기 텍스트를 포함해줘."

[ Step 2 — 상세 페이지 ]
"포스트 카드를 클릭하면 상세 페이지로 이동하게 해줘.
 React Router를 사용하고, 마크다운 렌더링을 지원해줘."

[ Step 3 — 검색/필터 ]
"상단에 검색 바를 추가하고,
 카테고리별 필터 버튼도 넣어줘."

[ Step 4 — 반응형 ]
"모바일에서 카드가 1열로 표시되게 하고,
 네비게이션을 햄버거 메뉴로 바꿔줘."`}]},{id:"prompt-feedback",title:"피드백 루프 활용하기",description:"AI의 결과물을 평가하고 개선 방향을 제시하기",content:'바이브코딩에서 가장 중요한 스킬 중 하나가 피드백 루프입니다. AI가 코드를 생성하면 실행해보고, 문제점이나 개선점을 구체적으로 설명하여 다시 요청하는 과정을 반복합니다. "이 부분이 이상해"보다 "버튼 클릭 시 콘솔에 TypeError가 발생해. handleSubmit 함수에서 null 체크가 빠진 것 같아"가 훨씬 효과적입니다. 에러 메시지가 있으면 반드시 전체를 복사해서 붙여넣으세요. AI는 에러 메시지를 보고 문제를 정확히 진단합니다. 보통 3~5번의 피드백 루프를 거치면 원하는 결과에 도달하며, 이 과정에서 프롬프트 작성 능력도 자연스럽게 향상됩니다.',keyPoints:["실행 → 확인 → 문제점 설명 → 재요청의 반복","에러 메시지는 전체를 복사해서 AI에게 전달","문제를 구체적으로 설명할수록 수정이 빠름","보통 3~5회 반복으로 원하는 결과에 도달"]}]},{id:"essential-skills",slug:"essential-skills",title:"바이브코더 7가지 필수 스킬",description:"바이브코딩을 잘 하기 위해 필요한 7가지 핵심 역량을 정리합니다. 요구사항 정의부터 문서화까지 체계적으로 알아봅니다.",level:"beginner",order:7,contents:[{id:"skills-overview",title:"7가지 필수 스킬 개요",description:"바이브코더에게 요구되는 핵심 역량 전체 조망",content:"바이브코딩은 코드를 직접 작성하지 않지만, 그렇다고 아무 능력 없이 되는 것은 아닙니다. AI를 효과적으로 활용하려면 7가지 핵심 스킬이 필요합니다. (1) 명확한 요구사항 정의, (2) 프롬프트 작성, (3) 코드 검증, (4) 디버깅 요청, (5) 반복 개선, (6) 배포와 테스트, (7) 문서화입니다. 이 스킬들은 프로그래밍 문법 암기와는 다른 종류의 능력으로, 논리적 사고와 커뮤니케이션에 가깝습니다. 각 스킬을 의식적으로 연습하면 AI와의 협업 효율이 비약적으로 높아집니다.",keyPoints:["코딩 문법보다 논리적 사고와 커뮤니케이션이 핵심","7가지 스킬은 서로 연결되어 있어 함께 성장","의식적인 연습이 없으면 AI에 끌려다니게 됨","각 스킬은 실습 프로젝트를 통해 자연스럽게 습득"],codeExamples:[{language:"text",title:"바이브코더 7대 필수 스킬",code:`1. 요구사항 정의  → "무엇을 만들 것인가?" 명확히 정리
2. 프롬프트 작성  → AI가 이해하는 언어로 지시하기
3. 코드 검증     → 생성된 코드가 올바른지 확인
4. 디버깅 요청   → 오류를 AI에게 정확히 전달
5. 반복 개선     → 점진적으로 품질을 높이기
6. 배포/테스트   → 실제 환경에서 동작 확인
7. 문서화        → 작업 내용을 기록으로 남기기`}]},{id:"skills-define-debug",title:"요구사항 정의와 디버깅 요청",description:"문제를 명확히 정의하고, 오류를 효과적으로 전달하기",content:'요구사항 정의는 바이브코딩의 출발점입니다. "누가 사용하고, 어떤 기능이 필요하고, 어떤 형태여야 하는지"를 텍스트로 정리하는 것이 핵심입니다. 디버깅 요청은 "안 돼요"가 아니라 "로그인 버튼을 클릭하면 콘솔에 이런 에러가 나와요"라고 구체적으로 전달해야 합니다. 에러 메시지, 스크린샷, 기대한 동작과 실제 동작의 차이를 함께 제공하면 AI가 문제를 빠르게 파악합니다. 이 두 스킬은 "AI에게 정보를 명확히 전달하는 능력"이라는 공통점이 있으며, 바이브코딩의 가장 기본적인 역량입니다.',keyPoints:["요구사항 정의: 사용자/기능/형태를 텍스트로 정리","디버깅: 에러 메시지 전체 + 재현 단계를 제공",'"안 돼요" 대신 "어떤 상황에서 무엇이 어떻게 잘못되었는지" 설명',"기대 동작 vs 실제 동작을 비교하여 전달"],codeExamples:[{language:"text",title:"효과적인 디버깅 요청 예시",code:`"문제 상황:
 할 일을 추가한 뒤 새로고침하면 목록이 사라집니다.

 재현 단계:
 1. 할 일을 3개 추가
 2. 브라우저를 새로고침(F5)
 3. 할 일 목록이 비어있음

 기대 동작:
 새로고침해도 할 일이 유지되어야 함

 원인 추측:
 데이터가 localStorage나 DB에 저장되지 않는 것 같음.
 현재 useState로만 관리하고 있는 것 같아.
 localStorage에 저장하도록 수정해줘."`}]},{id:"skills-verify-iterate",title:"코드 검증과 반복 개선",description:"AI 코드를 검토하고 점진적으로 품질을 높이기",content:'AI가 생성한 코드를 무조건 신뢰하면 안 됩니다. 기본적인 검증 과정이 반드시 필요합니다. 먼저 코드를 실행해서 동작 여부를 확인하고, 엣지 케이스(빈 입력, 긴 텍스트 등)를 테스트합니다. 코드를 읽지 못해도 "이 코드에 보안 문제나 성능 문제가 없는지 검토해줘"라고 AI에게 자체 검토를 요청할 수 있습니다. 반복 개선은 처음부터 완벽을 추구하지 않고, 동작하는 기본 버전을 먼저 만든 뒤 점진적으로 개선해나가는 방식입니다. MVP(최소 기능 제품) 사고방식과 동일하며, 바이브코딩에서는 이 반복 과정이 특히 빠르게 진행됩니다.',keyPoints:["검증 단계: 실행 → 기본 동작 → 엣지 케이스 → 보안/성능",'AI에게 "이 코드를 검토해줘"라고 자체 리뷰 요청 가능',"처음부터 완벽하지 않아도 됨 — 동작하는 버전부터","MVP 마인드셋: 기본 기능 완성 → 점진적 개선"]},{id:"skills-deploy-document",title:"배포/테스트와 문서화",description:"실제 환경에서 동작을 확인하고, 작업 기록을 남기기",content:'배포는 만든 앱을 실제 인터넷에 공개하는 과정입니다. 로컬 환경에서 잘 되더라도 배포 후에 문제가 발생할 수 있으므로 반드시 배포된 버전을 테스트해야 합니다. GitHub Pages, Vercel, Netlify 등 무료 배포 서비스를 활용하면 비용 없이 앱을 공개할 수 있습니다. 문서화는 "내가 어떤 프롬프트로 무엇을 만들었는지"를 기록하는 것입니다. 나중에 비슷한 프로젝트를 할 때 이전 프롬프트를 재활용할 수 있어 생산성이 올라갑니다. 프롬프트 일지, 발생한 문제와 해결 방법, 사용한 도구를 간단히 기록하는 습관을 들이면 실력이 빠르게 성장합니다.',keyPoints:["로컬에서 OK ≠ 배포에서 OK — 반드시 배포 후 재테스트","GitHub Pages, Netlify, Vercel 등 무료 배포 서비스 활용","프롬프트 일지: 효과적이었던 프롬프트를 기록","문제 해결 일지: 에러와 해결 과정을 기록하면 성장 속도 향상"],codeExamples:[{language:"text",title:"프롬프트 일지 템플릿",code:`## 2026-04-29 — Todo App 프로젝트

### 사용 도구: Lovable

### 프롬프트 기록:
1. "할 일 관리 앱을 만들어줘" → 기본 구조 생성
2. "다크모드를 추가해줘" → 토글 버튼 + 테마 적용
3. "localStorage에 저장해줘" → 새로고침 유지 해결

### 발생 문제:
- 다크모드 전환 시 깜빡임 → prefers-color-scheme 적용
- 할 일 삭제 후 ID 중복 → Date.now() 대신 crypto.randomUUID()

### 배운 점:
- 상태 관리와 영속성(localStorage)의 차이
- 단계적 요청이 한 번에 요청보다 효과적`}]}]}],k=()=>{const[a,d]=g.useState(i[0]?.id||""),{isCompleted:s,toggleComplete:c,getProgressPercent:r}=v(),{isLoggedIn:p}=C(),n=i.find(t=>t.id===a)||i[0],u=i.map(t=>t.id),m=r("topic",u.map(t=>`beginner-${t}`)),I=i.map(t=>({id:t.id,title:t.title,completed:s("topic",`beginner-${t.id}`)}));return e.jsxs("div",{className:"curriculum-page",children:[e.jsx("div",{className:"curriculum-header",children:e.jsxs("div",{className:"container",children:[e.jsx(h,{level:"beginner",size:"lg"}),e.jsx("h1",{children:"초급 커리큘럼"}),e.jsx("p",{children:"AI 코딩의 기본 개념과 도구를 익히고, 첫 번째 앱을 만들어봅니다."})]})}),e.jsx(x,{title:"초급 토픽",items:I,activeId:a,onSelect:d,progressPercent:m,children:n&&e.jsxs("div",{className:"topic-content",children:[e.jsx("h2",{children:n.title}),e.jsx("p",{className:"topic-description",children:n.description}),n.contents.map((t,A)=>e.jsxs("div",{className:"topic-section",children:[e.jsx("h3",{children:t.title}),e.jsx("div",{className:"topic-text",dangerouslySetInnerHTML:{__html:t.content.replace(/\n/g,"<br/>")}}),t.keyPoints&&t.keyPoints.length>0&&e.jsxs("div",{className:"key-points",children:[e.jsx("h4",{children:"핵심 포인트"}),e.jsx("ul",{children:t.keyPoints.map((o,l)=>e.jsx("li",{children:o},l))})]}),t.codeExamples&&t.codeExamples.map((o,l)=>e.jsx(b,{code:o.code,language:o.language,title:o.title},l))]},t.id||A)),p&&e.jsx("div",{className:"topic-complete-action",children:e.jsx("button",{className:`btn ${s("topic",`beginner-${n.id}`)?"btn-completed":"btn-primary"}`,onClick:()=>c("topic",`beginner-${n.id}`),children:s("topic",`beginner-${n.id}`)?"✓ 학습 완료":"학습 완료 표시"})})]})})]})};export{k as default};
