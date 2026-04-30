import type { BootcampDay } from '../../types';

export const week3Days: BootcampDay[] = [
  /* ══════════════════════════════════════════════
   *  Day 15 — Supabase 시작
   * ══════════════════════════════════════════════ */
  {
    day: 15,
    week: 3,
    title: 'Supabase 시작',
    description: 'Supabase 프로젝트를 생성하고 테이블을 만듭니다.',
    tasks: ['Supabase 가입', 'DB 테이블 생성', 'API 키 확인'],
    tools: ['Supabase'],
    deliverable: 'Supabase 프로젝트',
    contents: [
      {
        id: 'day15-supabase-intro',
        title: 'Supabase란 무엇인가?',
        description: 'Firebase의 오픈소스 대안, Supabase의 핵심 개념을 이해합니다.',
        content:
          '**Supabase**는 PostgreSQL 기반의 오픈소스 백엔드 서비스(BaaS)입니다. ' +
          'Firebase처럼 인증, 데이터베이스, 스토리지, 실시간 구독 등을 제공하지만, ' +
          '관계형 데이터베이스(PostgreSQL)를 사용하기 때문에 더 강력하고 유연합니다.\n\n' +
          '**Supabase가 제공하는 핵심 기능:**\n' +
          '- **Database**: PostgreSQL 데이터베이스 (SQL 쿼리 가능)\n' +
          '- **Auth**: 이메일/비밀번호, OAuth(Google, GitHub 등) 로그인\n' +
          '- **Storage**: 파일 업로드 및 관리\n' +
          '- **Realtime**: 데이터 변경 실시간 구독\n' +
          '- **Edge Functions**: 서버리스 함수 (Deno 기반)\n' +
          '- **Auto-generated API**: 테이블 생성 시 REST API 자동 생성\n\n' +
          '바이브코딩에서 Supabase는 **백엔드 코드를 직접 작성하지 않고도** 풀스택 앱을 만들 수 있게 해주는 핵심 도구입니다. ' +
          'AI에게 "Supabase로 회원가입 기능을 만들어줘"라고 요청하면, AI가 적절한 코드를 바로 생성해줍니다.',
        keyPoints: [
          'Supabase = PostgreSQL + Auth + Storage + Realtime + Edge Functions',
          'Firebase와 달리 SQL 쿼리를 직접 사용할 수 있어 유연성이 높음',
          '무료 플랜으로 2개 프로젝트까지 운영 가능',
          '테이블을 만들면 REST API가 자동으로 생성됨',
        ],
      },
      {
        id: 'day15-create-project',
        title: 'Supabase 프로젝트 생성하기',
        description: '가입부터 첫 프로젝트 생성까지 단계별 가이드',
        content:
          '**1단계: Supabase 가입**\n' +
          '- https://supabase.com 접속\n' +
          '- **Start your project** 클릭\n' +
          '- GitHub 계정으로 로그인 (권장) 또는 이메일 가입\n\n' +
          '**2단계: 새 프로젝트 만들기**\n' +
          '- **New Project** 버튼 클릭\n' +
          '- Organization 선택 (처음이면 자동 생성됨)\n' +
          '- **Name**: 프로젝트 이름 입력 (예: `my-first-app`)\n' +
          '- **Database Password**: 강력한 비밀번호 설정 (꼭 메모해두세요!)\n' +
          '- **Region**: Northeast Asia (Tokyo) 선택 — 한국에서 가장 빠름\n' +
          '- **Create new project** 클릭\n\n' +
          '**3단계: API 키 확인**\n' +
          '- 프로젝트 대시보드에서 **Settings > API** 이동\n' +
          '- `Project URL`과 `anon/public` 키를 확인\n' +
          '- 이 두 값이 프론트엔드에서 Supabase에 접속할 때 필요합니다\n\n' +
          '**주의사항:**\n' +
          '- `service_role` 키는 **절대 프론트엔드에 노출하면 안 됩니다** (관리자 권한)\n' +
          '- `anon` 키는 Row Level Security(RLS)로 보호되므로 프론트엔드에서 사용 가능\n' +
          '- 비밀번호를 분실하면 프로젝트를 재생성해야 할 수 있습니다',
        keyPoints: [
          'Region은 Northeast Asia (Tokyo) 선택이 한국에서 가장 빠름',
          'anon 키만 프론트엔드에서 사용, service_role 키는 서버에서만 사용',
          'Database Password는 반드시 안전한 곳에 메모',
          '무료 플랜은 500MB DB, 1GB Storage, 50,000 월간 활성 사용자',
        ],
        codeExamples: [
          {
            language: 'text',
            title: '.env 파일에 저장할 키 형식',
            code:
              'VITE_SUPABASE_URL=https://abcdefghijk.supabase.co\n' +
              'VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\n\n' +
              '# 주의: .env 파일은 반드시 .gitignore에 추가!\n' +
              '# service_role 키는 절대 프론트엔드에 넣지 마세요',
          },
        ],
      },
      {
        id: 'day15-create-table',
        title: '테이블 생성하기',
        description: 'Supabase Table Editor와 SQL Editor로 테이블을 만듭니다.',
        content:
          '**방법 1: Table Editor (GUI 방식)**\n' +
          '- 대시보드 왼쪽 메뉴에서 **Table Editor** 클릭\n' +
          '- **New Table** 클릭\n' +
          '- 테이블 이름: `posts`\n' +
          '- **Enable Row Level Security (RLS)** 체크 (보안 필수!)\n' +
          '- 컬럼 추가:\n' +
          '  - `id` — int8, Primary Key, Is Identity 체크\n' +
          '  - `title` — text, Not Null\n' +
          '  - `content` — text\n' +
          '  - `author_id` — uuid (나중에 auth.users와 연결)\n' +
          '  - `created_at` — timestamptz, Default: `now()`\n\n' +
          '**방법 2: SQL Editor (코드 방식)**\n' +
          '- SQL Editor에서 직접 CREATE TABLE 문을 실행합니다\n' +
          '- 더 정밀한 제어가 가능하고, 재사용이 쉽습니다\n\n' +
          '**RLS(Row Level Security) 설정이 중요한 이유:**\n' +
          '- RLS를 끄면 `anon` 키로 모든 데이터에 접근 가능 (위험!)\n' +
          '- RLS를 켜면 정책(Policy)에 따라 접근을 제어할 수 있음\n' +
          '- 예: "로그인한 사용자만 자신의 글을 수정/삭제 가능"',
        keyPoints: [
          'RLS는 반드시 활성화 — 끄면 모든 데이터가 공개됨',
          'id 컬럼은 자동 증가(Identity) 또는 UUID 사용',
          'created_at은 Default를 now()로 설정하면 자동 입력',
          'SQL Editor를 사용하면 테이블 생성 스크립트를 저장/재사용 가능',
        ],
        codeExamples: [
          {
            language: 'sql',
            title: 'SQL로 테이블 생성하기',
            code:
              '-- posts 테이블 생성\n' +
              'CREATE TABLE posts (\n' +
              '  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n' +
              '  title TEXT NOT NULL,\n' +
              '  content TEXT,\n' +
              '  author_id UUID REFERENCES auth.users(id),\n' +
              '  created_at TIMESTAMPTZ DEFAULT now()\n' +
              ');\n\n' +
              '-- RLS 활성화\n' +
              'ALTER TABLE posts ENABLE ROW LEVEL SECURITY;\n\n' +
              '-- 누구나 읽기 가능 정책\n' +
              'CREATE POLICY "Anyone can read posts"\n' +
              '  ON posts FOR SELECT\n' +
              '  USING (true);\n\n' +
              '-- 로그인한 사용자만 작성 가능\n' +
              'CREATE POLICY "Authenticated users can insert"\n' +
              '  ON posts FOR INSERT\n' +
              '  WITH CHECK (auth.uid() = author_id);\n\n' +
              '-- 자신의 글만 수정/삭제 가능\n' +
              'CREATE POLICY "Users can update own posts"\n' +
              '  ON posts FOR UPDATE\n' +
              '  USING (auth.uid() = author_id);\n\n' +
              'CREATE POLICY "Users can delete own posts"\n' +
              '  ON posts FOR DELETE\n' +
              '  USING (auth.uid() = author_id);',
          },
        ],
      },
      {
        id: 'day15-dashboard-tour',
        title: 'Supabase 대시보드 둘러보기',
        description: '대시보드의 주요 메뉴와 기능을 살펴봅니다.',
        content:
          '**Table Editor** — 테이블 생성, 데이터 조회/수정\n' +
          '- 엑셀처럼 직접 데이터를 입력하고 수정할 수 있습니다\n' +
          '- 필터, 정렬 기능으로 데이터를 쉽게 탐색합니다\n\n' +
          '**SQL Editor** — SQL 쿼리 직접 실행\n' +
          '- 복잡한 쿼리나 마이그레이션 스크립트를 실행할 때 사용\n' +
          '- 자주 쓰는 쿼리를 저장해둘 수 있습니다\n\n' +
          '**Authentication** — 사용자 관리\n' +
          '- 가입된 사용자 목록 확인\n' +
          '- OAuth Provider 설정 (Google, GitHub 등)\n' +
          '- 이메일 템플릿 커스터마이징\n\n' +
          '**Storage** — 파일 저장소\n' +
          '- 버킷(Bucket) 생성 후 파일 업로드\n' +
          '- 이미지, 문서 등 정적 파일 관리\n\n' +
          '**Edge Functions** — 서버리스 함수\n' +
          '- TypeScript/Deno 기반 서버 로직 실행\n' +
          '- 결제 처리, 이메일 발송 등에 활용\n\n' +
          '**Logs** — 요청 로그 확인\n' +
          '- API 호출 기록과 에러 로그를 확인\n' +
          '- 디버깅할 때 매우 유용합니다\n\n' +
          '**팁:** Supabase 대시보드의 **API Docs** 탭에서 각 테이블의 API 사용법을 자동으로 생성해줍니다. ' +
          'JavaScript 코드 예시까지 제공하므로 복사해서 바로 사용할 수 있습니다.',
        keyPoints: [
          'Table Editor에서 데이터를 직접 입력/수정할 수 있어 테스트에 편리',
          'SQL Editor로 복잡한 작업을 수행하고 스크립트를 저장',
          'API Docs 탭에서 자동 생성된 JavaScript 코드를 바로 복사 가능',
          'Logs에서 에러 원인을 파악할 수 있으므로 디버깅 시 반드시 확인',
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════
   *  Day 16 — 풀스택 앱 시작
   * ══════════════════════════════════════════════ */
  {
    day: 16,
    week: 3,
    title: '풀스택 앱 시작',
    description: 'React + Supabase 연동을 시작합니다.',
    tasks: ['프로젝트 셋업', 'Supabase 클라이언트 연결', '데이터 CRUD 구현'],
    tools: ['Cursor', 'Supabase'],
    deliverable: 'CRUD 기본 구현',
    contents: [
      {
        id: 'day16-project-setup',
        title: 'React + Supabase 프로젝트 셋업',
        description: 'Vite로 React 프로젝트를 생성하고 Supabase 클라이언트를 설정합니다.',
        content:
          '**1단계: React 프로젝트 생성**\n' +
          '- Vite를 사용하여 빠르게 React + TypeScript 프로젝트를 생성합니다\n' +
          '- `npm create vite@latest my-fullstack-app -- --template react-ts`\n\n' +
          '**2단계: Supabase 클라이언트 라이브러리 설치**\n' +
          '- `npm install @supabase/supabase-js`\n\n' +
          '**3단계: 환경변수 설정**\n' +
          '- 프로젝트 루트에 `.env` 파일 생성\n' +
          '- Supabase 대시보드에서 복사한 URL과 anon 키를 입력\n' +
          '- `.gitignore`에 `.env`가 포함되어 있는지 반드시 확인!\n\n' +
          '**4단계: Supabase 클라이언트 파일 생성**\n' +
          '- `src/lib/supabase.ts` 파일을 만들어 클라이언트 인스턴스를 초기화합니다\n' +
          '- 이 파일을 앱 전체에서 import하여 사용합니다\n\n' +
          '**Cursor에서의 작업 팁:**\n' +
          '- Cursor Composer에게 "React + Supabase 프로젝트를 셋업해줘"라고 요청하면 위 과정을 한번에 처리\n' +
          '- `.env.example` 파일도 함께 생성하도록 요청하면 팀 협업 시 편리',
        keyPoints: [
          'Vite + React + TypeScript 조합이 현재 가장 인기있는 프론트엔드 스택',
          '.env 파일은 절대 Git에 커밋하지 않도록 .gitignore 확인',
          'Supabase 클라이언트는 한 곳에서 생성하여 전체 앱에서 재사용',
          'VITE_ 접두사가 있는 환경변수만 프론트엔드에서 접근 가능',
        ],
        codeExamples: [
          {
            language: 'typescript',
            title: 'src/lib/supabase.ts — Supabase 클라이언트 설정',
            code:
              'import { createClient } from \'@supabase/supabase-js\';\n\n' +
              'const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;\n' +
              'const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;\n\n' +
              'if (!supabaseUrl || !supabaseAnonKey) {\n' +
              '  throw new Error(\'Supabase URL과 Anon Key를 .env에 설정해주세요.\');\n' +
              '}\n\n' +
              'export const supabase = createClient(supabaseUrl, supabaseAnonKey);',
          },
        ],
      },
      {
        id: 'day16-crud-read',
        title: '데이터 읽기 (Read)',
        description: 'Supabase에서 데이터를 조회하여 화면에 표시합니다.',
        content:
          '**Supabase 데이터 조회 기본:**\n' +
          '- `supabase.from("테이블명").select("*")` — 모든 데이터 조회\n' +
          '- `.select("title, content")` — 특정 컬럼만 조회\n' +
          '- `.order("created_at", { ascending: false })` — 정렬\n' +
          '- `.limit(10)` — 개수 제한\n' +
          '- `.eq("author_id", userId)` — 필터링\n\n' +
          '**React에서 사용하기:**\n' +
          '- `useEffect`와 `useState`를 조합하여 데이터를 불러옵니다\n' +
          '- 로딩 상태와 에러 상태도 함께 관리합니다\n' +
          '- 데이터가 변경될 때 자동으로 다시 불러오는 패턴을 사용합니다\n\n' +
          '**주의사항:**\n' +
          '- RLS가 활성화되어 있으면 정책에 따라 접근 가능한 데이터만 반환됩니다\n' +
          '- `error` 객체를 항상 체크하여 에러 처리를 해야 합니다\n' +
          '- TypeScript를 사용하면 반환 데이터의 타입을 정의하여 안전하게 사용할 수 있습니다',
        keyPoints: [
          'select("*")은 모든 컬럼 조회, 필요한 컬럼만 지정하면 성능 향상',
          'order, limit, eq 등 체이닝으로 복잡한 쿼리 작성 가능',
          'error 객체를 항상 체크하여 사용자에게 적절한 안내 표시',
          'useEffect의 dependency array를 적절히 설정하여 무한 루프 방지',
        ],
        codeExamples: [
          {
            language: 'tsx',
            title: '게시글 목록 조회 컴포넌트',
            code:
              'import { useEffect, useState } from \'react\';\n' +
              'import { supabase } from \'../lib/supabase\';\n\n' +
              'interface Post {\n' +
              '  id: number;\n' +
              '  title: string;\n' +
              '  content: string;\n' +
              '  created_at: string;\n' +
              '}\n\n' +
              'export default function PostList() {\n' +
              '  const [posts, setPosts] = useState<Post[]>([]);\n' +
              '  const [loading, setLoading] = useState(true);\n\n' +
              '  useEffect(() => {\n' +
              '    fetchPosts();\n' +
              '  }, []);\n\n' +
              '  async function fetchPosts() {\n' +
              '    setLoading(true);\n' +
              '    const { data, error } = await supabase\n' +
              '      .from(\'posts\')\n' +
              '      .select(\'*\')\n' +
              '      .order(\'created_at\', { ascending: false });\n\n' +
              '    if (error) {\n' +
              '      console.error(\'조회 실패:\', error.message);\n' +
              '    } else {\n' +
              '      setPosts(data ?? []);\n' +
              '    }\n' +
              '    setLoading(false);\n' +
              '  }\n\n' +
              '  if (loading) return <p>로딩 중...</p>;\n\n' +
              '  return (\n' +
              '    <ul>\n' +
              '      {posts.map((post) => (\n' +
              '        <li key={post.id}>\n' +
              '          <h3>{post.title}</h3>\n' +
              '          <p>{post.content}</p>\n' +
              '        </li>\n' +
              '      ))}\n' +
              '    </ul>\n' +
              '  );\n' +
              '}',
          },
        ],
      },
      {
        id: 'day16-crud-create-update-delete',
        title: '데이터 생성/수정/삭제 (Create, Update, Delete)',
        description: 'Supabase로 데이터 CRUD의 나머지 기능을 구현합니다.',
        content:
          '**Create — 데이터 생성**\n' +
          '- `supabase.from("posts").insert({ title, content, author_id })`\n' +
          '- 여러 행을 한번에 넣으려면 배열을 전달: `.insert([{...}, {...}])`\n' +
          '- `.select()` 를 체이닝하면 생성된 데이터를 바로 반환받을 수 있습니다\n\n' +
          '**Update — 데이터 수정**\n' +
          '- `supabase.from("posts").update({ title: "새 제목" }).eq("id", postId)`\n' +
          '- **반드시 `.eq()` 등 필터를 사용하여 수정 대상을 특정해야 합니다**\n' +
          '- 필터 없이 update하면 모든 행이 수정될 수 있으니 주의!\n\n' +
          '**Delete — 데이터 삭제**\n' +
          '- `supabase.from("posts").delete().eq("id", postId)`\n' +
          '- update와 마찬가지로 반드시 필터를 지정해야 합니다\n\n' +
          '**바이브코딩 팁:**\n' +
          '- Cursor에게 "posts 테이블의 CRUD를 React 컴포넌트로 만들어줘"라고 요청\n' +
          '- 폼 검증(validation), 로딩 상태, 에러 처리까지 함께 요청하면 품질이 올라갑니다\n' +
          '- "낙관적 업데이트(optimistic update) 패턴으로 구현해줘"라고 하면 UX가 개선됩니다',
        keyPoints: [
          'insert는 객체 또는 배열을 전달, .select()로 반환값 수신 가능',
          'update/delete에는 반드시 .eq() 등 필터 조건을 지정',
          'RLS 정책이 없으면 CUD 작업이 차단될 수 있음 — 정책 확인 필수',
          '낙관적 업데이트 패턴으로 체감 속도를 높일 수 있음',
        ],
        codeExamples: [
          {
            language: 'typescript',
            title: 'CRUD 함수 모음',
            code:
              'import { supabase } from \'../lib/supabase\';\n\n' +
              '// CREATE — 새 게시글 작성\n' +
              'async function createPost(title: string, content: string) {\n' +
              '  const { data, error } = await supabase\n' +
              '    .from(\'posts\')\n' +
              '    .insert({ title, content })\n' +
              '    .select();\n\n' +
              '  if (error) throw new Error(error.message);\n' +
              '  return data;\n' +
              '}\n\n' +
              '// UPDATE — 게시글 수정\n' +
              'async function updatePost(id: number, title: string, content: string) {\n' +
              '  const { error } = await supabase\n' +
              '    .from(\'posts\')\n' +
              '    .update({ title, content })\n' +
              '    .eq(\'id\', id);\n\n' +
              '  if (error) throw new Error(error.message);\n' +
              '}\n\n' +
              '// DELETE — 게시글 삭제\n' +
              'async function deletePost(id: number) {\n' +
              '  const { error } = await supabase\n' +
              '    .from(\'posts\')\n' +
              '    .delete()\n' +
              '    .eq(\'id\', id);\n\n' +
              '  if (error) throw new Error(error.message);\n' +
              '}',
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════
   *  Day 17 — 인증 구현
   * ══════════════════════════════════════════════ */
  {
    day: 17,
    week: 3,
    title: '인증 구현',
    description: 'Supabase Auth로 로그인을 만듭니다.',
    tasks: ['이메일 로그인 구현', 'OAuth 추가', 'AuthContext 만들기'],
    tools: ['Cursor', 'Supabase'],
    deliverable: '인증 시스템',
    contents: [
      {
        id: 'day17-email-auth',
        title: '이메일/비밀번호 인증 구현',
        description: 'Supabase Auth로 회원가입과 로그인을 구현합니다.',
        content:
          '**Supabase Auth의 핵심 개념:**\n' +
          '- Supabase는 인증 시스템을 **내장**하고 있어 별도의 백엔드 없이 바로 사용 가능\n' +
          '- 회원가입 시 `auth.users` 테이블에 자동으로 사용자 정보 저장\n' +
          '- 로그인 후 JWT 토큰이 발급되어 이후 API 요청에 자동 포함\n\n' +
          '**회원가입 구현:**\n' +
          '- `supabase.auth.signUp({ email, password })` 호출\n' +
          '- 기본 설정에서는 이메일 확인(confirmation) 메일이 발송됩니다\n' +
          '- 개발 중에는 Supabase 대시보드에서 이메일 확인을 비활성화할 수 있습니다\n\n' +
          '**로그인 구현:**\n' +
          '- `supabase.auth.signInWithPassword({ email, password })` 호출\n' +
          '- 성공 시 `data.session`과 `data.user` 객체를 반환\n' +
          '- 세션은 자동으로 localStorage에 저장되어 새로고침해도 유지됩니다\n\n' +
          '**로그아웃:**\n' +
          '- `supabase.auth.signOut()` 호출\n' +
          '- localStorage의 세션 정보가 자동으로 삭제됩니다\n\n' +
          '**개발 팁:**\n' +
          '- Supabase 대시보드 > Authentication > Settings에서 이메일 확인 on/off 전환 가능\n' +
          '- 테스트 시에는 이메일 확인을 끄고 개발하면 편리합니다',
        keyPoints: [
          'signUp으로 회원가입, signInWithPassword로 로그인',
          '세션은 자동으로 localStorage에 저장되어 새로고침에도 유지',
          '개발 중에는 이메일 확인을 비활성화하면 테스트가 편리',
          'JWT 토큰이 자동으로 API 요청에 포함됨',
        ],
        codeExamples: [
          {
            language: 'tsx',
            title: '로그인/회원가입 폼 컴포넌트',
            code:
              'import { useState } from \'react\';\n' +
              'import { supabase } from \'../lib/supabase\';\n\n' +
              'export default function AuthForm() {\n' +
              '  const [email, setEmail] = useState(\'\');\n' +
              '  const [password, setPassword] = useState(\'\');\n' +
              '  const [isLogin, setIsLogin] = useState(true);\n' +
              '  const [message, setMessage] = useState(\'\');\n\n' +
              '  async function handleSubmit(e: React.FormEvent) {\n' +
              '    e.preventDefault();\n' +
              '    setMessage(\'\');\n\n' +
              '    if (isLogin) {\n' +
              '      // 로그인\n' +
              '      const { error } = await supabase.auth.signInWithPassword({\n' +
              '        email,\n' +
              '        password,\n' +
              '      });\n' +
              '      if (error) setMessage(error.message);\n' +
              '      else setMessage(\'로그인 성공!\');\n' +
              '    } else {\n' +
              '      // 회원가입\n' +
              '      const { error } = await supabase.auth.signUp({\n' +
              '        email,\n' +
              '        password,\n' +
              '      });\n' +
              '      if (error) setMessage(error.message);\n' +
              '      else setMessage(\'가입 완료! 이메일을 확인해주세요.\');\n' +
              '    }\n' +
              '  }\n\n' +
              '  return (\n' +
              '    <form onSubmit={handleSubmit}>\n' +
              '      <h2>{isLogin ? \'로그인\' : \'회원가입\'}</h2>\n' +
              '      <input\n' +
              '        type="email"\n' +
              '        placeholder="이메일"\n' +
              '        value={email}\n' +
              '        onChange={(e) => setEmail(e.target.value)}\n' +
              '        required\n' +
              '      />\n' +
              '      <input\n' +
              '        type="password"\n' +
              '        placeholder="비밀번호 (6자 이상)"\n' +
              '        value={password}\n' +
              '        onChange={(e) => setPassword(e.target.value)}\n' +
              '        required\n' +
              '      />\n' +
              '      <button type="submit">\n' +
              '        {isLogin ? \'로그인\' : \'가입하기\'}\n' +
              '      </button>\n' +
              '      <button type="button" onClick={() => setIsLogin(!isLogin)}>\n' +
              '        {isLogin ? \'계정이 없으신가요?\' : \'이미 계정이 있으신가요?\'}\n' +
              '      </button>\n' +
              '      {message && <p>{message}</p>}\n' +
              '    </form>\n' +
              '  );\n' +
              '}',
          },
        ],
      },
      {
        id: 'day17-oauth',
        title: 'OAuth 소셜 로그인 추가',
        description: 'Google, GitHub 등 소셜 로그인을 추가합니다.',
        content:
          '**OAuth란?**\n' +
          '- 사용자가 Google, GitHub 등의 기존 계정으로 로그인할 수 있는 프로토콜\n' +
          '- 사용자가 직접 비밀번호를 설정하지 않아도 되므로 가입 전환율이 높아집니다\n\n' +
          '**Supabase에서 OAuth 설정 (Google 예시):**\n' +
          '1. **Google Cloud Console**에서 OAuth 2.0 클라이언트 ID 생성\n' +
          '   - https://console.cloud.google.com/apis/credentials\n' +
          '   - "웹 애플리케이션" 유형 선택\n' +
          '   - 승인된 리디렉션 URI에 `https://YOUR-PROJECT-REF.supabase.co/auth/v1/callback` 추가\n' +
          '2. **Supabase 대시보드 > Authentication > Providers**에서 Google 활성화\n' +
          '   - Client ID와 Client Secret 입력\n' +
          '3. 프론트엔드 코드에서 `supabase.auth.signInWithOAuth()` 호출\n\n' +
          '**GitHub OAuth 설정:**\n' +
          '1. GitHub > Settings > Developer settings > OAuth Apps > New\n' +
          '2. Authorization callback URL: `https://YOUR-PROJECT-REF.supabase.co/auth/v1/callback`\n' +
          '3. Supabase 대시보드에서 GitHub Provider 활성화\n\n' +
          '**주의사항:**\n' +
          '- 개발 환경(localhost)에서도 OAuth 테스트 가능 — Supabase가 리디렉션 처리\n' +
          '- OAuth 로그인 사용자도 `auth.users` 테이블에 동일하게 저장됨\n' +
          '- 같은 이메일로 이메일 가입 + OAuth 가입 시 계정이 자동 연결될 수 있음',
        keyPoints: [
          'OAuth를 추가하면 사용자가 비밀번호 없이 소셜 계정으로 로그인 가능',
          '리디렉션 URI를 정확히 설정해야 함 — 오타가 있으면 로그인 실패',
          'signInWithOAuth 한 줄로 소셜 로그인 구현 완료',
          'Google, GitHub, Kakao, Discord 등 다양한 Provider 지원',
        ],
        codeExamples: [
          {
            language: 'typescript',
            title: 'OAuth 소셜 로그인 함수',
            code:
              'import { supabase } from \'../lib/supabase\';\n\n' +
              '// Google 로그인\n' +
              'async function signInWithGoogle() {\n' +
              '  const { error } = await supabase.auth.signInWithOAuth({\n' +
              '    provider: \'google\',\n' +
              '    options: {\n' +
              '      redirectTo: window.location.origin,  // 로그인 후 돌아올 URL\n' +
              '    },\n' +
              '  });\n' +
              '  if (error) console.error(\'Google 로그인 실패:\', error.message);\n' +
              '}\n\n' +
              '// GitHub 로그인\n' +
              'async function signInWithGitHub() {\n' +
              '  const { error } = await supabase.auth.signInWithOAuth({\n' +
              '    provider: \'github\',\n' +
              '    options: {\n' +
              '      redirectTo: window.location.origin,\n' +
              '    },\n' +
              '  });\n' +
              '  if (error) console.error(\'GitHub 로그인 실패:\', error.message);\n' +
              '}',
          },
        ],
      },
      {
        id: 'day17-auth-context',
        title: 'AuthContext로 전역 인증 상태 관리',
        description: 'React Context API로 인증 상태를 앱 전체에서 관리합니다.',
        content:
          '**왜 AuthContext가 필요한가?**\n' +
          '- 로그인 상태를 여러 컴포넌트에서 사용해야 함 (네비게이션, 글 작성, 마이페이지 등)\n' +
          '- 매번 `supabase.auth.getUser()`를 호출하는 것은 비효율적\n' +
          '- Context로 한 곳에서 인증 상태를 관리하고, 어디서든 `useAuth()` 훅으로 접근\n\n' +
          '**AuthContext 구조:**\n' +
          '1. `AuthProvider` — 앱 최상위에서 인증 상태를 관리하는 Provider\n' +
          '2. `useAuth()` — 어느 컴포넌트에서든 인증 정보를 가져오는 커스텀 훅\n' +
          '3. `onAuthStateChange` 리스너 — 로그인/로그아웃 이벤트를 실시간 감지\n\n' +
          '**핵심 포인트:**\n' +
          '- `onAuthStateChange`는 Supabase가 제공하는 이벤트 리스너입니다\n' +
          '- 로그인, 로그아웃, 토큰 갱신 등의 이벤트를 자동으로 감지합니다\n' +
          '- cleanup 함수에서 반드시 구독을 해제해야 메모리 누수가 발생하지 않습니다\n\n' +
          '**사용 패턴:**\n' +
          '- `const { user, loading } = useAuth()` — 현재 사용자 정보와 로딩 상태\n' +
          '- `loading`이 true인 동안은 스켈레톤 UI나 로딩 스피너를 표시\n' +
          '- `user`가 null이면 비로그인 상태, 객체가 있으면 로그인 상태',
        keyPoints: [
          'AuthProvider를 앱 최상위(App.tsx)에 감싸서 전역 상태로 관리',
          'onAuthStateChange로 로그인/로그아웃 이벤트를 실시간 감지',
          'useAuth() 훅으로 어느 컴포넌트에서든 인증 정보 접근 가능',
          'cleanup에서 구독 해제 필수 — 메모리 누수 방지',
        ],
        codeExamples: [
          {
            language: 'tsx',
            title: 'AuthContext 전체 코드',
            code:
              'import { createContext, useContext, useEffect, useState } from \'react\';\n' +
              'import type { User } from \'@supabase/supabase-js\';\n' +
              'import { supabase } from \'../lib/supabase\';\n\n' +
              'interface AuthContextType {\n' +
              '  user: User | null;\n' +
              '  loading: boolean;\n' +
              '  signOut: () => Promise<void>;\n' +
              '}\n\n' +
              'const AuthContext = createContext<AuthContextType>({\n' +
              '  user: null,\n' +
              '  loading: true,\n' +
              '  signOut: async () => {},\n' +
              '});\n\n' +
              'export function AuthProvider({ children }: { children: React.ReactNode }) {\n' +
              '  const [user, setUser] = useState<User | null>(null);\n' +
              '  const [loading, setLoading] = useState(true);\n\n' +
              '  useEffect(() => {\n' +
              '    // 현재 세션 확인\n' +
              '    supabase.auth.getSession().then(({ data: { session } }) => {\n' +
              '      setUser(session?.user ?? null);\n' +
              '      setLoading(false);\n' +
              '    });\n\n' +
              '    // 인증 상태 변경 리스너\n' +
              '    const { data: { subscription } } = supabase.auth.onAuthStateChange(\n' +
              '      (_event, session) => {\n' +
              '        setUser(session?.user ?? null);\n' +
              '        setLoading(false);\n' +
              '      }\n' +
              '    );\n\n' +
              '    return () => subscription.unsubscribe();\n' +
              '  }, []);\n\n' +
              '  async function signOut() {\n' +
              '    await supabase.auth.signOut();\n' +
              '  }\n\n' +
              '  return (\n' +
              '    <AuthContext.Provider value={{ user, loading, signOut }}>\n' +
              '      {children}\n' +
              '    </AuthContext.Provider>\n' +
              '  );\n' +
              '}\n\n' +
              '// 커스텀 훅\n' +
              'export function useAuth() {\n' +
              '  return useContext(AuthContext);\n' +
              '}',
          },
        ],
      },
      {
        id: 'day17-protected-routes',
        title: '보호된 라우트 만들기',
        description: '로그인하지 않은 사용자가 접근하지 못하도록 라우트를 보호합니다.',
        content:
          '**보호된 라우트(Protected Route)란?**\n' +
          '- 로그인한 사용자만 접근할 수 있는 페이지를 의미합니다\n' +
          '- 마이페이지, 글 작성, 관리자 페이지 등에 사용\n' +
          '- 비로그인 사용자가 접근하면 로그인 페이지로 리디렉션합니다\n\n' +
          '**구현 방법:**\n' +
          '- `ProtectedRoute` 래퍼 컴포넌트를 만듭니다\n' +
          '- `useAuth()` 훅으로 로그인 여부를 확인합니다\n' +
          '- React Router의 `Navigate` 컴포넌트로 리디렉션합니다\n\n' +
          '**React Router에서 사용하기:**\n' +
          '- 보호가 필요한 라우트를 `ProtectedRoute`로 감쌉니다\n' +
          '- loading 중에는 스피너를 표시하여 깜박임을 방지합니다\n' +
          '- 리디렉션 시 원래 가려던 경로를 저장하여 로그인 후 복귀할 수 있습니다',
        keyPoints: [
          'ProtectedRoute 컴포넌트로 인증이 필요한 페이지를 감싸기',
          'loading 상태에서는 스피너를 표시하여 깜박임 방지',
          'Navigate 컴포넌트의 replace 옵션으로 히스토리 정리',
          '관리자 전용 라우트는 role 체크를 추가로 구현',
        ],
        codeExamples: [
          {
            language: 'tsx',
            title: 'ProtectedRoute 컴포넌트',
            code:
              'import { Navigate } from \'react-router-dom\';\n' +
              'import { useAuth } from \'../context/AuthContext\';\n\n' +
              'export default function ProtectedRoute({\n' +
              '  children,\n' +
              '}: {\n' +
              '  children: React.ReactNode;\n' +
              '}) {\n' +
              '  const { user, loading } = useAuth();\n\n' +
              '  if (loading) {\n' +
              '    return <div className="loading-spinner">로딩 중...</div>;\n' +
              '  }\n\n' +
              '  if (!user) {\n' +
              '    return <Navigate to="/login" replace />;\n' +
              '  }\n\n' +
              '  return <>{children}</>;\n' +
              '}\n\n' +
              '// 라우터에서 사용 예시:\n' +
              '// <Route path="/mypage" element={\n' +
              '//   <ProtectedRoute><MyPage /></ProtectedRoute>\n' +
              '// } />',
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════
   *  Day 18 — Claude Code 설치
   * ══════════════════════════════════════════════ */
  {
    day: 18,
    week: 3,
    title: 'Claude Code 설치',
    description: 'Claude Code를 설치하고 기본 사용법을 익힙니다.',
    tasks: ['Claude Code 설치', '기본 명령어 연습', '파일 읽기/수정 체험'],
    tools: ['Claude Code'],
    deliverable: 'Claude Code 기본 숙달',
    contents: [
      {
        id: 'day18-what-is-claude-code',
        title: 'Claude Code란?',
        description: 'Anthropic의 공식 터미널 AI 코딩 에이전트를 소개합니다.',
        content:
          '**Claude Code**는 Anthropic이 만든 공식 CLI(Command Line Interface) 코딩 에이전트입니다. ' +
          '터미널에서 자연어로 명령을 내리면 파일을 읽고, 수정하고, 생성하고, 터미널 명령을 실행합니다.\n\n' +
          '**Cursor와의 차이점:**\n' +
          '- **Cursor**: GUI 기반 AI IDE, 에디터 안에서 AI와 대화\n' +
          '- **Claude Code**: 터미널 기반 에이전트, 프로젝트 폴더에서 바로 실행\n' +
          '- Claude Code는 여러 파일을 동시에 수정하고, git 명령어를 실행하고, 빌드/테스트까지 자동화할 수 있습니다\n\n' +
          '**Claude Code의 강점:**\n' +
          '- **컨텍스트 이해**: 프로젝트 전체 구조를 파악하고 관련 파일을 자동으로 찾아냄\n' +
          '- **멀티 파일 편집**: 한 번의 요청으로 여러 파일을 동시에 수정\n' +
          '- **터미널 통합**: npm install, git commit, 빌드 등 터미널 작업도 수행\n' +
          '- **안전성**: 파일 수정/삭제 전 항상 사용자 확인을 요청\n\n' +
          '**바이브코딩에서의 위치:**\n' +
          '- 초급: Lovable, Bolt.new (대화로 앱 생성)\n' +
          '- 중급: Cursor (AI IDE에서 코드 수정)\n' +
          '- **고급: Claude Code (터미널 에이전트로 복잡한 작업 자동화)**\n' +
          '- Claude Code를 익히면 개발 생산성이 비약적으로 향상됩니다',
        keyPoints: [
          'Claude Code는 Anthropic의 공식 터미널 AI 코딩 에이전트',
          'Cursor는 GUI 에디터, Claude Code는 터미널 기반 — 상호 보완적',
          '여러 파일 동시 편집, 터미널 명령 실행, git 작업까지 가능',
          '파일 수정 전 반드시 사용자 승인을 요청하는 안전한 설계',
        ],
      },
      {
        id: 'day18-install',
        title: 'Claude Code 설치하기',
        description: 'Node.js 설치부터 Claude Code 실행까지 단계별 안내',
        content:
          '**사전 준비물:**\n' +
          '- **Node.js 18 이상** 설치 (https://nodejs.org)\n' +
          '- **터미널** — Windows: PowerShell 또는 Git Bash, Mac: Terminal\n' +
          '- **Anthropic 계정** — Claude Pro 또는 Max 구독 필요\n\n' +
          '**설치 단계:**\n\n' +
          '**1단계: Node.js 확인**\n' +
          '- 터미널에서 `node --version` 실행\n' +
          '- v18 이상이면 OK, 아니면 Node.js 최신 LTS 설치\n\n' +
          '**2단계: Claude Code 설치**\n' +
          '- `npm install -g @anthropic-ai/claude-code`\n' +
          '- 전역(-g)으로 설치하면 어디서든 `claude` 명령어 사용 가능\n\n' +
          '**3단계: 인증**\n' +
          '- 프로젝트 폴더에서 `claude` 입력\n' +
          '- 처음 실행 시 브라우저가 열리며 Anthropic 계정 로그인 요청\n' +
          '- 로그인 완료 후 터미널로 돌아오면 바로 사용 가능\n\n' +
          '**3단계 대안: API 키 사용**\n' +
          '- `export ANTHROPIC_API_KEY=sk-ant-...` (환경변수 설정)\n' +
          '- API 키를 사용하면 브라우저 인증 없이 바로 사용 가능\n\n' +
          '**설치 확인:**\n' +
          '- `claude --version` 으로 설치된 버전 확인\n' +
          '- 프로젝트 폴더로 이동 후 `claude` 실행하여 대화 시작',
        keyPoints: [
          'Node.js 18 이상 필수 — node --version으로 확인',
          'npm install -g로 전역 설치하면 어디서든 claude 명령어 사용',
          '처음 실행 시 브라우저 인증 또는 API 키 설정 필요',
          'Claude Pro/Max 구독이 필요 (무료 플랜에서는 사용 불가)',
        ],
        codeExamples: [
          {
            language: 'bash',
            title: 'Claude Code 설치 명령어',
            code:
              '# 1. Node.js 버전 확인\n' +
              'node --version    # v18 이상 필요\n\n' +
              '# 2. Claude Code 설치\n' +
              'npm install -g @anthropic-ai/claude-code\n\n' +
              '# 3. 설치 확인\n' +
              'claude --version\n\n' +
              '# 4. 프로젝트 폴더로 이동 후 실행\n' +
              'cd my-project\n' +
              'claude\n\n' +
              '# (선택) API 키로 인증하는 경우\n' +
              'export ANTHROPIC_API_KEY=sk-ant-api03-xxxx',
          },
        ],
      },
      {
        id: 'day18-basic-commands',
        title: 'Claude Code 기본 사용법',
        description: '파일 읽기, 수정, 검색 등 핵심 사용법을 익힙니다.',
        content:
          '**Claude Code 실행 방법:**\n' +
          '- 프로젝트 폴더에서 `claude` 입력 → 대화형 모드 시작\n' +
          '- `claude "질문 내용"` → 한 번의 질문 후 종료\n' +
          '- `claude -p "질문"` → 파이프라인 모드 (스크립트에서 사용)\n\n' +
          '**자주 쓰는 대화 패턴:**\n\n' +
          '1. **프로젝트 이해하기**\n' +
          '   - "이 프로젝트의 구조를 설명해줘"\n' +
          '   - "src/components 폴더에 어떤 파일들이 있어?"\n' +
          '   - "package.json을 보고 사용 중인 라이브러리를 알려줘"\n\n' +
          '2. **코드 읽기**\n' +
          '   - "App.tsx 파일을 읽어줘"\n' +
          '   - "login 관련 코드를 찾아줘"\n' +
          '   - "이 함수가 어떻게 동작하는지 설명해줘"\n\n' +
          '3. **코드 수정하기**\n' +
          '   - "PostList 컴포넌트에 페이지네이션을 추가해줘"\n' +
          '   - "이 코드의 TypeScript 타입 에러를 수정해줘"\n' +
          '   - "로딩 스피너를 추가해줘"\n\n' +
          '4. **새 파일 생성**\n' +
          '   - "utils/formatDate.ts 파일을 만들어줘"\n' +
          '   - "NotFound 페이지 컴포넌트를 생성해줘"\n\n' +
          '**슬래시 명령어:**\n' +
          '- `/help` — 도움말 보기\n' +
          '- `/clear` — 대화 내역 초기화\n' +
          '- `/compact` — 대화 요약하여 컨텍스트 절약\n' +
          '- `/cost` — 현재 세션의 토큰 사용량 확인\n\n' +
          '**팁:**\n' +
          '- 요청을 구체적으로 할수록 결과가 정확합니다\n' +
          '- 파일 수정 전 Claude Code가 변경 사항을 보여주고 승인을 요청합니다\n' +
          '- "y"를 입력하면 승인, "n"을 입력하면 거부',
        keyPoints: [
          '프로젝트 폴더에서 claude 명령어로 대화 시작',
          '자연어로 코드 읽기, 수정, 생성, 검색 모두 가능',
          '/help, /clear, /compact, /cost 등 슬래시 명령어 활용',
          '파일 수정 시 항상 변경 내용을 보여주고 승인을 요청함',
        ],
        codeExamples: [
          {
            language: 'bash',
            title: 'Claude Code 대화 예시',
            code:
              '# 대화형 모드 시작\n' +
              '$ claude\n\n' +
              '> 이 프로젝트의 구조를 설명해줘\n' +
              '# → 프로젝트의 폴더 구조, 주요 파일, 기술 스택을 분석해서 알려줌\n\n' +
              '> PostList.tsx에서 데이터를 최신순으로 정렬해줘\n' +
              '# → 파일을 읽고, 수정 사항을 보여주고, 승인을 요청\n\n' +
              '> 다크모드 토글 컴포넌트를 만들어줘\n' +
              '# → 새 파일을 생성하고, 기존 파일에 import를 추가\n\n' +
              '> /cost\n' +
              '# → 현재 세션에서 사용한 토큰 수와 비용 표시\n\n' +
              '# 한 번의 명령으로 실행\n' +
              '$ claude "package.json의 dependencies를 알려줘"',
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════
   *  Day 19 — Claude Code로 개발
   * ══════════════════════════════════════════════ */
  {
    day: 19,
    week: 3,
    title: 'Claude Code로 개발',
    description: 'Claude Code로 풀스택 앱을 개선합니다.',
    tasks: ['기능 추가', '코드 리팩토링', '버그 수정'],
    tools: ['Claude Code'],
    deliverable: '개선된 풀스택 앱',
    contents: [
      {
        id: 'day19-feature-add',
        title: 'Claude Code로 기능 추가하기',
        description: '자연어 명령으로 풀스택 앱에 새 기능을 추가합니다.',
        content:
          '**기능 추가 워크플로우:**\n' +
          '1. 현재 코드 상태를 파악시킴: "현재 프로젝트 구조를 파악해줘"\n' +
          '2. 원하는 기능을 구체적으로 설명\n' +
          '3. Claude Code가 관련 파일을 찾아서 수정안을 제시\n' +
          '4. 변경 사항을 검토하고 승인\n' +
          '5. 결과를 확인하고 추가 수정 요청\n\n' +
          '**실전 예시: 게시글 검색 기능 추가**\n\n' +
          '**프롬프트 예시:**\n' +
          '"PostList 컴포넌트에 검색 기능을 추가해줘.\n' +
          '- 상단에 검색 입력창 배치\n' +
          '- 제목과 내용에서 검색\n' +
          '- Supabase의 ilike를 사용해서 서버사이드 검색\n' +
          '- 검색어 입력 후 300ms 디바운스 적용\n' +
          '- 검색 결과가 없을 때 안내 메시지 표시"\n\n' +
          '**좋은 프롬프트의 특징:**\n' +
          '- **위치**: 어디에 추가할지 명확하게 (어떤 컴포넌트, 어떤 위치)\n' +
          '- **동작**: 어떻게 동작해야 하는지 상세하게\n' +
          '- **기술**: 어떤 기술/방법을 사용할지 (ilike, 디바운스 등)\n' +
          '- **엣지케이스**: 예외 상황 처리까지 포함\n\n' +
          '**팁:**\n' +
          '- 한번에 너무 많은 기능을 요청하지 마세요 — 하나씩 단계적으로\n' +
          '- 추가한 기능이 잘 동작하는지 확인 후 다음 기능을 요청\n' +
          '- "이전에 추가한 검색 기능과 충돌하지 않게 필터 기능도 추가해줘"처럼 맥락을 연결',
        keyPoints: [
          '기능을 구체적으로 설명할수록 결과 품질이 높아짐',
          '한번에 하나의 기능을 추가하고 확인 후 다음 단계로 진행',
          '위치, 동작, 기술, 엣지케이스를 포함한 상세 프롬프트 작성',
          '이전 대화 맥락을 활용하여 연속적인 작업 수행 가능',
        ],
        codeExamples: [
          {
            language: 'text',
            title: '기능 추가 프롬프트 예시 모음',
            code:
              '# 검색 기능\n' +
              '"PostList에 제목으로 검색하는 기능을 추가해줘.\n' +
              'Supabase ilike를 사용하고 300ms 디바운스 적용해줘."\n\n' +
              '# 페이지네이션\n' +
              '"게시글 목록에 페이지네이션을 추가해줘.\n' +
              '한 페이지에 10개씩 보여주고, 이전/다음 버튼 포함."\n\n' +
              '# 좋아요 기능\n' +
              '"각 게시글에 좋아요 버튼을 추가해줘.\n' +
              'likes 테이블을 새로 만들고, 한 사용자당 한 번만 가능하게.\n' +
              'RLS 정책도 함께 만들어줘."\n\n' +
              '# 댓글 기능\n' +
              '"게시글 상세 페이지에 댓글 기능을 추가해줘.\n' +
              'comments 테이블 생성 SQL, React 컴포넌트, CRUD 함수 모두 포함."',
          },
        ],
      },
      {
        id: 'day19-refactoring',
        title: 'Claude Code로 코드 리팩토링',
        description: '기존 코드를 더 깔끔하고 유지보수하기 좋게 개선합니다.',
        content:
          '**리팩토링이란?**\n' +
          '- 코드의 동작은 그대로 유지하면서 내부 구조를 개선하는 것\n' +
          '- 가독성 향상, 중복 제거, 성능 개선 등이 목적\n' +
          '- AI의 도움으로 리팩토링 작업이 훨씬 쉬워집니다\n\n' +
          '**Claude Code에게 요청할 수 있는 리팩토링:**\n\n' +
          '1. **반복 코드 제거**\n' +
          '   - "이 프로젝트에서 중복되는 코드를 찾아서 공통 함수로 추출해줘"\n' +
          '   - "여러 컴포넌트에서 같은 fetch 패턴이 반복되고 있어. 커스텀 훅으로 만들어줘"\n\n' +
          '2. **타입 안전성 강화**\n' +
          '   - "any 타입을 사용하고 있는 곳을 찾아서 적절한 타입으로 바꿔줘"\n' +
          '   - "API 응답에 대한 TypeScript 인터페이스를 만들어줘"\n\n' +
          '3. **컴포넌트 분리**\n' +
          '   - "이 컴포넌트가 너무 커. 논리적 단위로 분리해줘"\n' +
          '   - "폼 로직을 커스텀 훅으로 분리해줘"\n\n' +
          '4. **코드 정리**\n' +
          '   - "사용하지 않는 import와 변수를 제거해줘"\n' +
          '   - "주석을 추가해서 코드 이해도를 높여줘"\n\n' +
          '**리팩토링 시 주의사항:**\n' +
          '- 리팩토링 전에 기존 기능이 정상 동작하는지 확인\n' +
          '- 한번에 너무 많은 부분을 바꾸지 말 것 — 단계별로 진행\n' +
          '- 리팩토링 후 반드시 기존 기능이 그대로 동작하는지 테스트',
        keyPoints: [
          '리팩토링은 기능은 유지하면서 코드 구조만 개선하는 작업',
          'Claude Code가 프로젝트 전체를 분석하여 개선점을 찾아줌',
          '커스텀 훅, 공통 유틸리티 함수, 타입 정의 등으로 코드 품질 향상',
          '한번에 작은 단위로 리팩토링하고, 매번 동작을 확인',
        ],
        codeExamples: [
          {
            language: 'text',
            title: '리팩토링 전후 비교 — 커스텀 훅 추출',
            code:
              '# 리팩토링 전 (각 컴포넌트에서 반복)\n' +
              'const [data, setData] = useState([]);\n' +
              'const [loading, setLoading] = useState(true);\n' +
              'useEffect(() => {\n' +
              '  supabase.from("posts").select("*").then(({ data }) => {\n' +
              '    setData(data ?? []);\n' +
              '    setLoading(false);\n' +
              '  });\n' +
              '}, []);\n\n' +
              '# 리팩토링 후 (커스텀 훅으로 추출)\n' +
              'const { data: posts, loading } = useSupabaseQuery("posts");\n\n' +
              '# Claude Code에게 요청:\n' +
              '"Supabase 데이터 조회 패턴이 여러 컴포넌트에서 반복돼.\n' +
              ' useSupabaseQuery 커스텀 훅을 만들어서 재사용 가능하게 해줘.\n' +
              ' 로딩, 에러, 리프레시 기능도 포함해줘."',
          },
        ],
      },
      {
        id: 'day19-debugging',
        title: 'Claude Code로 버그 수정하기',
        description: '에러 메시지와 증상을 전달하여 AI의 도움으로 디버깅합니다.',
        content:
          '**Claude Code 디버깅 워크플로우:**\n\n' +
          '**1단계: 문제 상황 전달**\n' +
          '- 에러 메시지를 그대로 복사하여 전달\n' +
          '- "이런 에러가 발생해: [에러 메시지]"\n' +
          '- 가능하면 어떤 동작을 할 때 발생하는지도 설명\n\n' +
          '**2단계: Claude Code가 분석**\n' +
          '- 관련 파일을 자동으로 찾아서 읽음\n' +
          '- 에러 원인을 파악하고 수정안 제시\n' +
          '- 여러 파일에 걸친 문제도 추적 가능\n\n' +
          '**3단계: 수정 적용 및 확인**\n' +
          '- 수정 사항을 검토하고 승인\n' +
          '- 동일한 에러가 재발하는지 확인\n\n' +
          '**효과적인 디버깅 프롬프트 예시:**\n' +
          '- "로그인 버튼을 클릭하면 콘솔에 이런 에러가 나와: [에러 메시지]"\n' +
          '- "게시글을 저장할 때 RLS 에러가 발생해. posts 테이블의 RLS 정책을 확인해줘"\n' +
          '- "화면에 데이터가 안 나와. 네트워크 탭에서는 200 응답인데 빈 배열이 반환돼"\n' +
          '- "TypeScript 빌드 시 이런 타입 에러가 나와: [에러 메시지]"\n\n' +
          '**흔한 Supabase 에러와 해결법:**\n' +
          '- `"permission denied for table"` → RLS 정책을 확인하거나 추가\n' +
          '- `"JWT expired"` → 세션 갱신 로직 확인\n' +
          '- `"duplicate key value"` → 이미 존재하는 데이터인지 확인\n' +
          '- `"null value in column"` → NOT NULL 컬럼에 값을 넣고 있는지 확인',
        keyPoints: [
          '에러 메시지를 그대로 복사하여 전달하면 정확한 분석 가능',
          'Claude Code는 관련 파일을 자동으로 찾아 읽고 분석',
          '문제 재현 조건(어떤 동작에서 발생하는지)을 함께 전달',
          '수정 후 반드시 동일 시나리오에서 에러가 해결되었는지 확인',
        ],
        codeExamples: [
          {
            language: 'bash',
            title: '디버깅 세션 예시',
            code:
              '$ claude\n\n' +
              '> 게시글을 작성할 때 이런 에러가 발생해:\n' +
              '> "new row violates row-level security policy for table posts"\n' +
              '> 게시글 작성 폼에서 제목과 내용을 입력하고 저장 버튼을 누르면 발생\n\n' +
              '# Claude Code의 응답:\n' +
              '# 1. posts 테이블의 RLS 정책을 확인\n' +
              '# 2. INSERT 정책에서 author_id 체크 로직 발견\n' +
              '# 3. 프론트엔드 코드에서 author_id를 빠뜨린 것을 발견\n' +
              '# 4. 수정안 제시: insert에 author_id: user.id 추가\n\n' +
              '> 수정해줘\n' +
              '# → 파일 수정 내용을 보여주고 승인 요청\n' +
              '# y 입력하면 자동 적용',
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════
   *  Day 20 — SaaS 랜딩 제작
   * ══════════════════════════════════════════════ */
  {
    day: 20,
    week: 3,
    title: 'SaaS 랜딩 제작',
    description: 'AI 도구를 조합하여 SaaS 랜딩을 만듭니다.',
    tasks: ['랜딩 기획', 'v0로 UI 생성', 'Cursor로 조합/수정'],
    tools: ['v0.dev', 'Cursor'],
    deliverable: 'SaaS 랜딩 페이지',
    contents: [
      {
        id: 'day20-landing-planning',
        title: 'SaaS 랜딩 페이지 기획',
        description: '효과적인 랜딩 페이지의 구성 요소와 기획 방법을 배웁니다.',
        content:
          '**SaaS 랜딩 페이지란?**\n' +
          '- SaaS(Software as a Service) 제품을 소개하고 사용자를 확보하기 위한 홍보 페이지\n' +
          '- 방문자를 "회원가입" 또는 "무료 체험"으로 유도하는 것이 핵심 목표\n\n' +
          '**효과적인 랜딩 페이지의 필수 섹션:**\n\n' +
          '1. **Hero 섹션** (최상단)\n' +
          '   - 한 줄 캐치프레이즈: 제품이 해결하는 문제를 명확히\n' +
          '   - 부제목: 구체적인 가치 제안\n' +
          '   - CTA 버튼: "무료로 시작하기", "데모 보기"\n' +
          '   - 제품 스크린샷 또는 데모 영상\n\n' +
          '2. **기능 소개 섹션**\n' +
          '   - 3~4개의 핵심 기능을 아이콘과 함께 소개\n' +
          '   - 각 기능이 사용자에게 주는 혜택 중심으로 작성\n\n' +
          '3. **소셜 프루프 섹션**\n' +
          '   - 사용자 후기, 기업 로고, 사용자 수 통계\n' +
          '   - 신뢰감을 높이는 요소들\n\n' +
          '4. **가격표 섹션**\n' +
          '   - Free / Pro / Enterprise 등 요금제 비교\n' +
          '   - 가장 인기있는 요금제를 강조\n\n' +
          '5. **FAQ 섹션**\n' +
          '   - 자주 묻는 질문과 답변\n' +
          '   - 가입 전 궁금증 해소\n\n' +
          '6. **CTA 섹션** (하단)\n' +
          '   - 마지막 한번 더 행동을 유도\n' +
          '   - "지금 시작하세요" 등의 강력한 문구\n\n' +
          '**기획 단계에서 결정할 것:**\n' +
          '- 가상의 SaaS 제품 아이디어 (예: AI 일정 관리 도구)\n' +
          '- 타겟 사용자와 핵심 가치 제안\n' +
          '- 각 섹션의 텍스트와 구조',
        keyPoints: [
          '랜딩 페이지의 목표는 방문자를 사용자로 전환하는 것',
          'Hero, 기능, 소셜프루프, 가격, FAQ, CTA — 6개 핵심 섹션',
          'CTA 버튼은 눈에 띄는 색상으로, 명확한 행동 유도 문구 사용',
          '모바일 반응형은 필수 — 방문자의 60% 이상이 모바일',
        ],
      },
      {
        id: 'day20-v0-ui',
        title: 'v0.dev로 랜딩 UI 생성',
        description: 'v0.dev에서 각 섹션의 UI 컴포넌트를 빠르게 생성합니다.',
        content:
          '**v0.dev로 랜딩 페이지 만들기:**\n\n' +
          'v0.dev는 자연어 프롬프트로 React/Tailwind CSS 컴포넌트를 생성해주는 도구입니다. ' +
          '랜딩 페이지의 각 섹션을 개별적으로 생성한 뒤, Cursor에서 조합하는 전략이 효과적입니다.\n\n' +
          '**섹션별 v0 프롬프트 예시:**\n\n' +
          '**Hero 섹션:**\n' +
          '"SaaS 랜딩 페이지의 Hero 섹션을 만들어줘.\n' +
          '- 제품명: TaskFlow AI\n' +
          '- 캐치프레이즈: AI가 당신의 일정을 관리합니다\n' +
          '- 부제목: 미팅, 할일, 마감일을 한 곳에서\n' +
          '- CTA 버튼 2개: 무료로 시작하기(primary), 데모 보기(secondary)\n' +
          '- 배경: 그라데이션, 모던한 디자인"\n\n' +
          '**기능 소개:**\n' +
          '"3개 기능을 소개하는 Feature 섹션.\n' +
          '아이콘 + 제목 + 설명 카드 레이아웃.\n' +
          '기능: AI 일정 분석, 자동 우선순위, 팀 협업"\n\n' +
          '**가격표:**\n' +
          '"SaaS 가격표 섹션. Free/Pro/Enterprise 3개 요금제.\n' +
          'Pro를 추천으로 강조. 월간/연간 토글 포함."\n\n' +
          '**작업 순서:**\n' +
          '1. v0.dev에서 각 섹션을 개별 생성\n' +
          '2. 마음에 드는 결과물의 코드를 복사\n' +
          '3. 다음 단계에서 Cursor로 하나의 프로젝트로 조합',
        keyPoints: [
          'v0.dev에서 섹션별로 개별 생성 후 Cursor에서 조합하는 전략 추천',
          '프롬프트에 구체적인 텍스트, 색상, 레이아웃을 포함',
          'Tailwind CSS 기반 코드가 생성되므로 커스터마이징이 용이',
          '여러 번 생성하여 가장 마음에 드는 버전을 선택',
        ],
        codeExamples: [
          {
            language: 'text',
            title: 'v0.dev 프롬프트 — Hero 섹션',
            code:
              'Create a modern SaaS landing page hero section.\n' +
              '- Product name: "TaskFlow AI"\n' +
              '- Headline: "AI가 당신의 일정을 관리합니다"\n' +
              '- Subheadline: "미팅, 할일, 마감일을 한 곳에서. 팀 생산성을 200% 높이세요."\n' +
              '- Two CTA buttons: "무료로 시작하기" (primary blue) and "데모 보기" (outline)\n' +
              '- Background: subtle gradient from blue to purple\n' +
              '- Include a mockup/screenshot placeholder image\n' +
              '- Responsive design, Korean text\n' +
              '- Use Tailwind CSS, React, modern and clean design',
          },
        ],
      },
      {
        id: 'day20-cursor-assemble',
        title: 'Cursor로 조합하고 완성하기',
        description: 'v0에서 생성한 컴포넌트를 하나의 프로젝트로 조합합니다.',
        content:
          '**Cursor로 랜딩 페이지 조합하기:**\n\n' +
          '**1단계: 프로젝트 준비**\n' +
          '- Vite + React + TypeScript 프로젝트 생성\n' +
          '- Tailwind CSS 설치 (`npm install -D tailwindcss @tailwindcss/vite`)\n' +
          '- v0에서 복사한 코드의 의존성 확인 (lucide-react 등)\n\n' +
          '**2단계: 컴포넌트 배치**\n' +
          '- `src/components/landing/` 폴더 생성\n' +
          '- Hero.tsx, Features.tsx, Pricing.tsx, FAQ.tsx, CTA.tsx 등으로 분리\n' +
          '- LandingPage.tsx에서 순서대로 조합\n\n' +
          '**3단계: Cursor로 커스터마이징**\n' +
          '- "Hero 섹션의 배경 그라데이션을 파란색에서 보라색으로 바꿔줘"\n' +
          '- "가격표의 Pro 요금제를 더 강조해줘"\n' +
          '- "전체 폰트를 Pretendard로 변경해줘"\n' +
          '- "모바일에서 네비게이션을 햄버거 메뉴로 바꿔줘"\n\n' +
          '**4단계: 세부 조정**\n' +
          '- 스크롤 애니메이션 추가\n' +
          '- 네비게이션 스크롤 시 고정(sticky)\n' +
          '- Open Graph 메타태그 설정\n' +
          '- Lighthouse 성능 점검\n\n' +
          '**Cursor Composer 활용 팁:**\n' +
          '- Composer 모드에서 여러 파일을 동시에 수정할 수 있습니다\n' +
          '- "v0에서 생성한 이 코드를 적용하고 프로젝트 스타일에 맞게 수정해줘"라고 요청\n' +
          '- Composer는 import 경로 수정, 스타일 통합 등을 자동으로 처리합니다',
        keyPoints: [
          'v0에서 생성한 코드를 각각 컴포넌트 파일로 분리하여 저장',
          'LandingPage.tsx에서 순서대로 조합하여 하나의 페이지 완성',
          'Cursor Composer로 여러 파일을 동시에 수정하여 스타일 통일',
          '모바일 반응형, 성능 최적화까지 AI에게 요청하여 완성도 높이기',
        ],
        codeExamples: [
          {
            language: 'tsx',
            title: 'LandingPage.tsx — 섹션 조합 예시',
            code:
              'import Hero from \'../components/landing/Hero\';\n' +
              'import Features from \'../components/landing/Features\';\n' +
              'import Testimonials from \'../components/landing/Testimonials\';\n' +
              'import Pricing from \'../components/landing/Pricing\';\n' +
              'import FAQ from \'../components/landing/FAQ\';\n' +
              'import CTASection from \'../components/landing/CTASection\';\n\n' +
              'export default function LandingPage() {\n' +
              '  return (\n' +
              '    <div className="min-h-screen">\n' +
              '      <Hero />\n' +
              '      <Features />\n' +
              '      <Testimonials />\n' +
              '      <Pricing />\n' +
              '      <FAQ />\n' +
              '      <CTASection />\n' +
              '    </div>\n' +
              '  );\n' +
              '}',
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════
   *  Day 21 — 3주차 회고
   * ══════════════════════════════════════════════ */
  {
    day: 21,
    week: 3,
    title: '3주차 회고',
    description: '3주차 학습을 정리합니다.',
    tasks: ['풀스택 앱 완성도 점검', 'Claude Code 활용법 정리', '4주차 준비'],
    tools: ['메모장'],
    deliverable: '3주차 회고 노트',
    contents: [
      {
        id: 'day21-review-fullstack',
        title: '풀스택 앱 완성도 점검',
        description: '이번 주에 만든 풀스택 앱의 완성도를 체크리스트로 점검합니다.',
        content:
          '**3주차에 만든 풀스택 앱 점검 체크리스트:**\n\n' +
          '**데이터베이스 (Supabase):**\n' +
          '- 테이블이 올바르게 생성되었는가?\n' +
          '- RLS(Row Level Security)가 활성화되어 있는가?\n' +
          '- RLS 정책이 적절하게 설정되었는가? (읽기/쓰기/수정/삭제)\n' +
          '- 불필요한 데이터 접근이 차단되는가?\n\n' +
          '**CRUD 기능:**\n' +
          '- 데이터 생성(Create)이 정상 동작하는가?\n' +
          '- 데이터 조회(Read)에서 정렬과 필터가 동작하는가?\n' +
          '- 데이터 수정(Update)이 정상 동작하는가?\n' +
          '- 데이터 삭제(Delete) 시 확인 알림이 있는가?\n' +
          '- 에러 발생 시 사용자에게 적절한 안내가 표시되는가?\n\n' +
          '**인증 시스템:**\n' +
          '- 회원가입이 정상 동작하는가?\n' +
          '- 로그인/로그아웃이 정상 동작하는가?\n' +
          '- 새로고침 후에도 로그인 상태가 유지되는가?\n' +
          '- 보호된 라우트가 비로그인 시 리디렉션되는가?\n' +
          '- OAuth 소셜 로그인이 동작하는가?\n\n' +
          '**UI/UX:**\n' +
          '- 로딩 상태가 표시되는가?\n' +
          '- 빈 상태(데이터 없음)에 안내 메시지가 있는가?\n' +
          '- 모바일에서 레이아웃이 깨지지 않는가?\n\n' +
          '**아직 미완성인 부분이 있다면 4주차에 Claude Code로 마무리할 수 있습니다.**',
        keyPoints: [
          'DB 테이블 + RLS 정책이 보안의 핵심 — 반드시 확인',
          'CRUD 모든 기능이 에러 처리를 포함하여 동작하는지 체크',
          '인증: 회원가입, 로그인, 세션 유지, 보호 라우트까지 확인',
          '미완성 항목은 4주차에 Claude Code를 활용하여 완성',
        ],
      },
      {
        id: 'day21-claude-code-tips',
        title: 'Claude Code 활용법 총정리',
        description: '이번 주에 배운 Claude Code 사용법을 정리합니다.',
        content:
          '**Claude Code 핵심 명령어 정리:**\n\n' +
          '**시작 & 종료:**\n' +
          '- `claude` — 대화형 모드 시작\n' +
          '- `claude "질문"` — 한 번의 질문 후 종료\n' +
          '- `Ctrl + C` 또는 `/exit` — 종료\n\n' +
          '**슬래시 명령어:**\n' +
          '- `/help` — 도움말\n' +
          '- `/clear` — 대화 초기화\n' +
          '- `/compact` — 대화 요약 (컨텍스트 절약)\n' +
          '- `/cost` — 토큰 사용량 확인\n\n' +
          '**효과적인 사용 패턴:**\n\n' +
          '1. **프로젝트 이해부터 시작**: "이 프로젝트의 구조와 기술 스택을 분석해줘"\n' +
          '2. **구체적으로 요청**: 위치, 동작, 기술, 예외 처리까지 포함\n' +
          '3. **단계적으로 진행**: 한번에 하나의 기능/수정 → 확인 → 다음\n' +
          '4. **에러 메시지 전달**: 에러를 그대로 복사하여 전달\n' +
          '5. **코드 리뷰 요청**: "이 코드의 문제점을 찾아줘"\n\n' +
          '**Cursor vs Claude Code 사용 시나리오:**\n' +
          '- **Cursor가 적합한 경우**: UI 작업, 단일 파일 편집, 실시간 미리보기가 필요할 때\n' +
          '- **Claude Code가 적합한 경우**: 여러 파일 동시 수정, 리팩토링, 프로젝트 분석, git 작업\n' +
          '- 두 도구를 병행하면 최고의 효율을 얻을 수 있습니다\n\n' +
          '**다음 주(4주차) 미리보기:**\n' +
          '- **CLAUDE.md** — 프로젝트 컨텍스트 문서 작성법\n' +
          '- **Skills & Hooks** — Claude Code 고급 커스터마이징\n' +
          '- **GitHub Pages 배포** — 완성된 프로젝트 배포',
        keyPoints: [
          'claude 명령어로 시작, /clear로 초기화, /compact로 컨텍스트 절약',
          '프로젝트 이해 → 구체적 요청 → 단계별 진행 패턴이 핵심',
          'Cursor(UI/단일파일)와 Claude Code(다중파일/분석)를 상황에 맞게 병행',
          '4주차에는 CLAUDE.md, Skills/Hooks, 배포 등 고급 주제 학습',
        ],
      },
      {
        id: 'day21-week3-retrospective',
        title: '3주차 회고 작성 가이드',
        description: '회고 노트를 체계적으로 작성하는 방법을 안내합니다.',
        content:
          '**회고(Retrospective)란?**\n' +
          '- 지난 기간의 학습과 경험을 돌아보고, 개선점을 도출하는 과정\n' +
          '- "잘한 점", "아쉬운 점", "다음에 시도할 점"을 정리합니다\n\n' +
          '**3주차 회고 노트 작성 항목:**\n\n' +
          '**1. 이번 주 완성한 것 (Done)**\n' +
          '- Supabase 프로젝트 생성 및 테이블 구성\n' +
          '- React + Supabase CRUD 앱\n' +
          '- 인증 시스템 (이메일 로그인 + OAuth)\n' +
          '- Claude Code 설치 및 기본 사용\n' +
          '- Claude Code로 앱 개선 (기능 추가, 리팩토링, 디버깅)\n' +
          '- SaaS 랜딩 페이지 제작\n\n' +
          '**2. 잘한 점 (Good)**\n' +
          '- 어떤 도구가 가장 유용했나?\n' +
          '- 가장 생산성이 높았던 순간은?\n' +
          '- 특별히 잘 작성한 프롬프트가 있었나?\n\n' +
          '**3. 어려웠던 점 (Hard)**\n' +
          '- 어떤 개념이 이해하기 어려웠나?\n' +
          '- 어떤 에러가 가장 해결하기 힘들었나?\n' +
          '- 시간이 부족했던 부분은?\n\n' +
          '**4. 개선할 점 (Improve)**\n' +
          '- 다음 주에 다르게 시도할 것은?\n' +
          '- 더 깊이 공부하고 싶은 주제는?\n' +
          '- 프롬프트 작성에서 개선할 점은?\n\n' +
          '**5. 4주차 목표 (Goal)**\n' +
          '- CLAUDE.md 작성으로 Claude Code 효율 극대화\n' +
          '- Skills & Hooks로 워크플로우 자동화\n' +
          '- GitHub Pages 배포로 사이트 공개\n' +
          '- 최종 포트폴리오 정리\n\n' +
          '**팁:** 회고 노트는 꼭 거창할 필요 없습니다. 핵심은 **솔직하게** 돌아보는 것입니다. ' +
          '잘한 점은 자신감으로, 어려웠던 점은 다음 학습 방향으로 삼으세요.',
        keyPoints: [
          'Done/Good/Hard/Improve/Goal 5가지 항목으로 체계적 회고',
          '잘한 점은 동기부여로, 어려웠던 점은 학습 방향으로 활용',
          '4주차 목표: CLAUDE.md, Skills/Hooks, GitHub Pages 배포',
          '회고는 솔직하게 — 완벽하지 않아도 성장의 기록이 중요',
        ],
      },
    ],
  },
];
