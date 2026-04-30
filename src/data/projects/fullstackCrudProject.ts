import type { ProjectData } from '../../types';

export const fullstackCrudProject: ProjectData = {
  id: 'fullstack-crud',
  slug: 'fullstack-crud',
  title: '풀스택 CRUD 앱',
  description: 'React + Supabase로 인증, RLS, CRUD를 갖춘 풀스택 앱.',
  level: 'intermediate',
  duration: '5-6시간',
  techStack: ['React', 'Supabase', 'Claude Code', 'TypeScript'],
  outcomes: [
    'Supabase Auth 구현',
    'RLS 정책 설정',
    '풀스택 CRUD',
    'Claude Code 활용',
  ],

  /* ──────────────────────────────────────────────
   *  아키텍처 다이어그램
   * ────────────────────────────────────────────── */
  diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" font-family="'Noto Sans KR', sans-serif">
  <defs>
    <marker id="ah" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#0046C8"/>
    </marker>
  </defs>

  <!-- 배경 -->
  <rect x="1" y="1" width="758" height="318" rx="12" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="2"/>
  <text x="380" y="28" text-anchor="middle" font-size="15" font-weight="700" fill="#111827">풀스택 CRUD 아키텍처</text>

  <!-- 프론트엔드 -->
  <text x="130" y="55" text-anchor="middle" font-size="11" fill="#4B5563">프론트엔드</text>
  <rect x="40" y="65" width="180" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="130" y="92" text-anchor="middle" font-size="13" fill="#111827">React + TypeScript</text>
  <rect x="40" y="125" width="180" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="130" y="152" text-anchor="middle" font-size="13" fill="#111827">React Router (페이지)</text>
  <rect x="40" y="185" width="180" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="130" y="212" text-anchor="middle" font-size="13" fill="#111827">AuthContext (인증상태)</text>

  <!-- 화살표: 프론트 → Supabase Client -->
  <line x1="220" y1="87" x2="300" y2="87" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <text x="260" y="80" text-anchor="middle" font-size="11" fill="#4B5563">API 호출</text>

  <!-- Supabase Client SDK -->
  <text x="390" y="55" text-anchor="middle" font-size="11" fill="#4B5563">클라이언트 SDK</text>
  <rect x="300" y="65" width="180" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="390" y="92" text-anchor="middle" font-size="13" fill="#111827">Supabase Client</text>

  <!-- 화살표: Client → Auth -->
  <line x1="390" y1="109" x2="390" y2="145" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>

  <!-- Supabase Auth -->
  <text x="390" y="140" text-anchor="middle" font-size="11" fill="#4B5563">Supabase 백엔드</text>
  <rect x="300" y="150" width="180" height="44" rx="8" fill="#0046C8" stroke="#0046C8" stroke-width="2"/>
  <text x="390" y="177" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">Auth (인증 / JWT)</text>

  <!-- 화살표: Client → DB -->
  <line x1="480" y1="87" x2="560" y2="87" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <text x="520" y="80" text-anchor="middle" font-size="11" fill="#4B5563">쿼리</text>

  <!-- PostgreSQL -->
  <text x="650" y="55" text-anchor="middle" font-size="11" fill="#4B5563">데이터베이스</text>
  <rect x="560" y="65" width="180" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="650" y="92" text-anchor="middle" font-size="13" fill="#111827">PostgreSQL (posts)</text>
  <rect x="560" y="125" width="180" height="44" rx="8" fill="#0046C8" stroke="#0046C8" stroke-width="2"/>
  <text x="650" y="152" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">RLS 정책</text>

  <!-- CRUD 흐름 하단 -->
  <text x="380" y="250" text-anchor="middle" font-size="11" fill="#4B5563">CRUD 데이터 흐름 (모든 작업은 RLS 정책으로 사용자 권한 검증)</text>
  <rect x="40"  y="265" width="150" height="36" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="115" y="288" text-anchor="middle" font-size="12" fill="#0046C8" font-weight="bold">CREATE</text>
  <line x1="190" y1="283" x2="220" y2="283" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <rect x="225" y="265" width="120" height="36" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="285" y="288" text-anchor="middle" font-size="12" fill="#0046C8" font-weight="bold">READ</text>
  <line x1="345" y1="283" x2="375" y2="283" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <rect x="380" y="265" width="130" height="36" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="445" y="288" text-anchor="middle" font-size="12" fill="#0046C8" font-weight="bold">UPDATE</text>
  <line x1="510" y1="283" x2="545" y2="283" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <rect x="550" y="265" width="130" height="36" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="615" y="288" text-anchor="middle" font-size="12" fill="#0046C8" font-weight="bold">DELETE</text>
</svg>`,

  /* ──────────────────────────────────────────────
   *  학습 단계 (7 Steps)
   * ────────────────────────────────────────────── */
  steps: [
    /* ── Step 1 ── */
    {
      step: 1,
      title: 'Supabase 프로젝트 설정',
      description: 'Supabase 대시보드에서 프로젝트를 생성하고 posts 테이블을 만듭니다.',
      content: `이 단계에서는 Supabase 프로젝트를 생성하고 데이터베이스 테이블을 정의합니다.

### 1-1. Supabase 프로젝트 생성

1. [supabase.com](https://supabase.com)에 접속하여 회원가입/로그인합니다.
2. "New Project"를 클릭하고, 프로젝트 이름(\`my-crud-app\`), 데이터베이스 비밀번호, 리전(\`ap-northeast-1\` 권장)을 설정합니다.
3. 프로젝트가 생성되면 **Settings > API**에서 \`Project URL\`과 \`anon key\`를 복사해둡니다.

### 1-2. 테이블 생성

Supabase 대시보드의 **SQL Editor**에서 아래 SQL을 실행합니다. Claude Code에게 다음과 같이 요청할 수 있습니다:

\`\`\`
supabase/schema.sql 파일을 만들어줘.
posts 테이블을 생성하는 SQL을 작성해.
- id: uuid PK (gen_random_uuid)
- title: text NOT NULL
- content: text
- user_id: uuid NOT NULL (auth.users 참조)
- created_at, updated_at: timestamptz
- updated_at 자동 갱신 트리거도 포함해줘
\`\`\`

### 예상 결과
- Supabase 대시보드에서 \`posts\` 테이블이 생성된 것을 확인할 수 있습니다.
- Table Editor에서 컬럼 구조가 올바른지 검증합니다.

### 검증 포인트
- \`posts\` 테이블에 5개 컬럼(id, title, content, user_id, created_at, updated_at)이 존재하는가?
- \`id\`의 기본값이 \`gen_random_uuid()\`인가?
- \`user_id\`가 \`auth.users(id)\`를 참조하는가?`,
      codeExamples: [
        {
          language: 'sql',
          title: 'posts 테이블 생성 SQL (supabase/schema.sql)',
          code: `-- posts 테이블 생성
CREATE TABLE IF NOT EXISTS public.posts (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title      TEXT NOT NULL,
  content    TEXT,
  user_id    UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- updated_at 자동 갱신 트리거
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER posts_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();`,
        },
      ],
      tips: [
        'Supabase 프로젝트 생성 후 초기화에 2-3분이 소요됩니다. 기다리는 동안 프론트엔드 프로젝트 폴더를 준비하세요.',
        'Settings > API 페이지의 URL과 anon key를 .env 파일에 바로 복사해두면 편리합니다.',
        '데이터베이스 비밀번호는 프로젝트 생성 시에만 표시됩니다. 반드시 안전한 곳에 저장하세요.',
      ],
    },

    /* ── Step 2 ── */
    {
      step: 2,
      title: '프로젝트 초기화',
      description: 'React + Vite + TypeScript 프로젝트를 생성하고 Supabase 클라이언트를 설정합니다.',
      content: `### 2-1. 프로젝트 생성

Claude Code에게 다음과 같이 프롬프트합니다:

\`\`\`
React + Vite + TypeScript 프로젝트를 생성해줘.
npm create vite@latest my-crud-app -- --template react-ts 명령을 실행하고,
@supabase/supabase-js와 react-router-dom 패키지를 설치해줘.
\`\`\`

### 2-2. Supabase 클라이언트 설정

프로젝트 루트에 \`.env\` 파일을 생성합니다:

\`\`\`
.env 파일을 만들어줘.
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
\`\`\`

그 다음 Supabase 클라이언트 초기화 파일을 생성합니다:

\`\`\`
src/lib/supabase.ts 파일을 만들어줘.
환경변수 VITE_SUPABASE_URL과 VITE_SUPABASE_ANON_KEY를 사용해서
Supabase 클라이언트를 초기화해. 환경변수가 없으면 에러를 throw해줘.
\`\`\`

### 2-3. 타입 정의

\`\`\`
src/types.ts 파일을 만들어줘.
Post 타입(id, title, content, user_id, created_at, updated_at)과
User 타입(id, email)을 정의해줘.
\`\`\`

### 예상 결과
- \`npm run dev\`로 개발 서버가 정상 실행됩니다 (http://localhost:5173).
- \`src/lib/supabase.ts\`에서 Supabase 클라이언트가 초기화됩니다.
- TypeScript 타입이 정의되어 자동완성이 동작합니다.

### 검증 포인트
- \`npm run dev\` 실행 시 에러 없이 브라우저가 열리는가?
- \`.env\` 파일이 \`.gitignore\`에 포함되어 있는가?
- \`supabase\` 인스턴스를 import해서 사용할 수 있는가?`,
      codeExamples: [
        {
          language: 'bash',
          title: '프로젝트 생성 및 패키지 설치',
          code: `npm create vite@latest my-crud-app -- --template react-ts
cd my-crud-app
npm install @supabase/supabase-js react-router-dom
npm install -D @types/react-router-dom`,
        },
        {
          language: 'typescript',
          title: 'Supabase 클라이언트 (src/lib/supabase.ts)',
          code: `import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL 또는 Anon Key가 설정되지 않았습니다.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);`,
        },
      ],
      tips: [
        '.env 파일은 반드시 .gitignore에 포함시키세요. anon key는 클라이언트용이라 노출되어도 RLS가 보호하지만, 프로젝트 정보 유출을 방지해야 합니다.',
        'Vite 환경변수는 VITE_ 접두사가 있어야 클라이언트에서 접근 가능합니다.',
        'TypeScript strict 모드를 켜두면 런타임 에러를 사전에 방지할 수 있습니다.',
      ],
    },

    /* ── Step 3 ── */
    {
      step: 3,
      title: '인증 구현',
      description: 'Supabase Auth를 활용하여 로그인, 회원가입, 로그아웃 기능을 구현합니다.',
      content: `### 3-1. AuthContext 생성

Claude Code에게 다음과 같이 프롬프트합니다:

\`\`\`
src/contexts/AuthContext.tsx 파일을 만들어줘.
Supabase Auth를 사용해서 다음 기능을 구현해:
- AuthProvider: 인증 상태를 전역에서 관리
- useAuth 커스텀 훅: user, loading, signIn, signUp, signOut 제공
- onAuthStateChange로 세션 변화 감지
- TypeScript로 작성해줘
\`\`\`

### 3-2. 로그인/회원가입 폼

\`\`\`
src/components/Auth/LoginForm.tsx와 RegisterForm.tsx를 만들어줘.
- 이메일/비밀번호 입력 폼
- useAuth 훅을 사용하여 signIn/signUp 호출
- 로딩 상태와 에러 메시지 표시
- 로그인 <-> 회원가입 전환 링크
\`\`\`

### 3-3. App.tsx에 AuthProvider 적용

\`\`\`
App.tsx를 수정해줘.
- AuthProvider로 전체 앱을 감싸기
- BrowserRouter + Routes 설정
- 로그인 페이지와 메인 페이지 라우팅
- 비로그인 시 로그인 페이지로 리다이렉트
\`\`\`

### 예상 결과
- 회원가입 후 자동 로그인됩니다.
- 새로고침해도 로그인 상태가 유지됩니다.
- 로그아웃 후 로그인 페이지로 이동합니다.

### 검증 포인트
- Supabase 대시보드 > Authentication에서 가입된 사용자가 보이는가?
- 브라우저 새로고침 후에도 세션이 유지되는가?
- 잘못된 이메일/비밀번호 입력 시 에러 메시지가 표시되는가?`,
      codeExamples: [
        {
          language: 'tsx',
          title: 'AuthContext 핵심 구조',
          code: `import { createContext, useContext, useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => setUser(session?.user ?? null)
    );

    return () => subscription.unsubscribe();
  }, []);

  // signIn, signUp, signOut 구현...
  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};`,
        },
      ],
      tips: [
        'onAuthStateChange 리스너의 subscription을 반드시 cleanup(unsubscribe)하세요. 메모리 누수를 방지합니다.',
        'Supabase Auth는 자동으로 JWT를 localStorage에 저장합니다. 별도의 토큰 관리가 필요 없습니다.',
        '비밀번호는 최소 6자 이상이어야 합니다 (Supabase 기본 설정).',
      ],
    },

    /* ── Step 4 ── */
    {
      step: 4,
      title: 'CRUD 구현',
      description: 'Supabase 클라이언트로 게시글의 생성, 조회, 수정, 삭제 기능을 구현합니다.',
      content: `### 4-1. 게시글 목록 (Read)

Claude Code에게 다음과 같이 프롬프트합니다:

\`\`\`
src/components/Posts/PostList.tsx를 만들어줘.
- Supabase에서 posts 테이블의 모든 게시글을 조회
- 최신순 정렬 (created_at DESC)
- 로딩 스피너와 빈 상태 메시지
- 각 게시글은 PostItem 컴포넌트로 렌더링
\`\`\`

### 4-2. 게시글 작성 (Create)

\`\`\`
src/components/Posts/PostForm.tsx를 만들어줘.
- 제목(title)과 내용(content) 입력 폼
- Supabase insert로 새 게시글 저장
- 저장 후 목록으로 돌아가기
- 유효성 검사: 제목 필수
\`\`\`

### 4-3. 게시글 수정/삭제 (Update/Delete)

\`\`\`
src/components/Posts/PostItem.tsx를 만들어줘.
- 게시글 제목, 내용, 작성일 표시
- 본인 게시글에만 수정/삭제 버튼 표시
- 수정 시 인라인 편집 모드 전환
- 삭제 시 확인 대화상자 후 삭제
\`\`\`

### 예상 결과
- 게시글 작성 후 목록에 즉시 반영됩니다.
- 본인 게시글만 수정/삭제가 가능합니다.
- 다른 사용자의 게시글은 읽기만 가능합니다.

### 검증 포인트
- 게시글 작성 후 Supabase 대시보드 > Table Editor에서 데이터가 보이는가?
- 로그아웃 후 재로그인해도 이전에 작성한 게시글이 보이는가?
- 다른 사용자로 로그인하면 삭제 버튼이 숨겨지는가?`,
      codeExamples: [
        {
          language: 'typescript',
          title: 'CRUD 함수 예시',
          code: `import { supabase } from '../lib/supabase';
import type { Post } from '../types';

// Create
const createPost = async (title: string, content: string) => {
  const { data, error } = await supabase
    .from('posts')
    .insert({ title, content })
    .select()
    .single();
  if (error) throw error;
  return data as Post;
};

// Read
const fetchPosts = async () => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data as Post[];
};

// Update
const updatePost = async (id: string, title: string, content: string) => {
  const { error } = await supabase
    .from('posts')
    .update({ title, content })
    .eq('id', id);
  if (error) throw error;
};

// Delete
const deletePost = async (id: string) => {
  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id);
  if (error) throw error;
};`,
        },
      ],
      tips: [
        'insert 시 user_id를 직접 넣지 않아도 됩니다. RLS 정책에서 auth.uid()로 자동 설정할 수 있습니다.',
        '.select().single()은 결과가 정확히 1개일 때만 사용하세요. 0개이거나 2개 이상이면 에러가 발생합니다.',
        'CRUD 작업 후 목록을 다시 조회(refetch)하여 UI를 최신 상태로 유지하세요.',
      ],
    },

    /* ── Step 5 ── */
    {
      step: 5,
      title: 'RLS 정책 설정',
      description: 'Row Level Security를 활성화하여 데이터를 보호합니다.',
      content: `### 5-1. RLS 활성화

RLS(Row Level Security)는 PostgreSQL의 행 단위 접근 제어 기능입니다. Supabase에서 테이블의 RLS를 활성화하면, 정책(Policy)에 부합하는 행만 읽기/쓰기가 가능합니다.

Claude Code에게 다음과 같이 프롬프트합니다:

\`\`\`
posts 테이블에 RLS 정책을 설정하는 SQL을 작성해줘.
- 모든 인증된 사용자가 게시글을 조회(SELECT) 가능
- INSERT 시 user_id가 자동으로 auth.uid()로 설정
- UPDATE/DELETE는 본인 게시글만 가능 (user_id = auth.uid())
- RLS를 활성화하는 ALTER TABLE도 포함
\`\`\`

### 5-2. 정책 테스트

1. Supabase 대시보드에서 SQL을 실행합니다.
2. 프론트엔드에서 게시글 작성/조회/수정/삭제를 다시 테스트합니다.
3. 다른 사용자의 게시글 수정/삭제가 차단되는지 확인합니다.

### 예상 결과
- 로그인하지 않은 상태에서는 게시글이 조회되지 않습니다.
- 본인 게시글만 수정/삭제가 가능하고, 다른 사용자의 게시글 변경 시 에러가 반환됩니다.

### 검증 포인트
- Supabase 대시보드 > Authentication > Policies에서 4개 정책이 보이는가?
- 비로그인 상태에서 API 호출 시 빈 배열이 반환되는가?
- 다른 사용자의 게시글 DELETE 시 \`row not found\` 또는 권한 에러가 발생하는가?`,
      codeExamples: [
        {
          language: 'sql',
          title: 'RLS 정책 SQL',
          code: `-- RLS 활성화
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- 정책 1: 인증된 사용자는 모든 게시글 조회 가능
CREATE POLICY "인증 사용자 조회"
  ON public.posts FOR SELECT
  TO authenticated
  USING (true);

-- 정책 2: 인증된 사용자는 게시글 작성 가능 (user_id = 본인)
CREATE POLICY "본인 게시글 작성"
  ON public.posts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- 정책 3: 본인 게시글만 수정 가능
CREATE POLICY "본인 게시글 수정"
  ON public.posts FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 정책 4: 본인 게시글만 삭제 가능
CREATE POLICY "본인 게시글 삭제"
  ON public.posts FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);`,
        },
      ],
      tips: [
        'RLS를 활성화하지 않으면 anon key를 가진 누구나 모든 데이터에 접근할 수 있습니다. 반드시 활성화하세요.',
        '정책의 USING 절은 기존 행에 대한 접근을, WITH CHECK 절은 새로 삽입/수정되는 행에 대한 검증을 담당합니다.',
        '개발 중에도 RLS를 켜두고 작업하세요. 나중에 켜면 이미 작성된 코드에서 권한 버그가 발생할 수 있습니다.',
      ],
    },

    /* ── Step 6 ── */
    {
      step: 6,
      title: 'UI 완성',
      description: '로딩 상태, 에러 처리, 반응형 레이아웃을 추가하여 UI를 완성합니다.',
      content: `### 6-1. 로딩 & 에러 상태

Claude Code에게 다음과 같이 프롬프트합니다:

\`\`\`
모든 컴포넌트에 로딩 스피너와 에러 메시지 UI를 추가해줘.
- PostList: 게시글 로딩 중 스피너, 에러 시 재시도 버튼
- PostForm: 저장 중 버튼 비활성화, 에러 시 토스트 메시지
- LoginForm/RegisterForm: 로그인/가입 중 로딩 표시
\`\`\`

### 6-2. 반응형 CSS

\`\`\`
src/App.css를 작성해줘.
- 전체 레이아웃: 네비게이션 바 + 메인 콘텐츠
- max-width: 800px, margin: 0 auto로 중앙 정렬
- 카드 UI 스타일: 게시글 카드, 폼 카드
- 반응형: 768px 이하에서 패딩 조절
- 컬러 테마: #0046C8 (파란색 계열)
\`\`\`

### 6-3. 네비게이션 바

\`\`\`
App.tsx에 네비게이션 바를 추가해줘.
- 로고/앱 이름
- 로그인 상태: 사용자 이메일 표시 + 로그아웃 버튼
- 비로그인 상태: 로그인/회원가입 링크
\`\`\`

### 예상 결과
- 모든 비동기 작업에 로딩 상태가 표시됩니다.
- 에러 발생 시 사용자 친화적인 메시지가 나타납니다.
- 모바일에서도 깔끔한 레이아웃이 유지됩니다.

### 검증 포인트
- 네트워크를 느리게 설정(DevTools > Network > Slow 3G)했을 때 로딩 UI가 보이는가?
- Supabase를 잠시 중단(anon key를 틀리게)했을 때 에러 메시지가 표시되는가?
- 모바일 뷰포트(375px)에서 레이아웃이 깨지지 않는가?`,
      tips: [
        'try-catch로 모든 Supabase 호출을 감싸고, catch에서 사용자에게 에러 메시지를 보여주세요.',
        'CSS 변수(custom properties)를 활용하면 테마 색상을 한 곳에서 관리할 수 있습니다.',
        'React.Suspense와 lazy()를 사용하면 코드 스플리팅으로 초기 로딩을 줄일 수 있습니다.',
      ],
    },

    /* ── Step 7 ── */
    {
      step: 7,
      title: '빌드 및 배포',
      description: '프로젝트를 빌드하고 GitHub Pages로 배포합니다.',
      content: `### 7-1. 프로덕션 빌드

Claude Code에게 다음과 같이 프롬프트합니다:

\`\`\`
프로젝트를 프로덕션 빌드하고 GitHub Pages로 배포할 준비를 해줘.
- vite.config.ts에 base 경로 설정
- package.json에 deploy 스크립트 추가
- gh-pages 패키지 설치
\`\`\`

### 7-2. GitHub Pages 배포

\`\`\`bash
# 1. 빌드
npm run build

# 2. 배포
npx gh-pages -d dist
\`\`\`

### 7-3. 커스텀 도메인 (선택)

\`\`\`
public/CNAME 파일을 만들어줘.
내용: my-crud-app.example.com
\`\`\`

### 예상 결과
- \`dist/\` 폴더에 최적화된 정적 파일이 생성됩니다.
- \`https://username.github.io/my-crud-app/\` 에서 앱이 동작합니다.
- Supabase 연동이 프로덕션 환경에서도 정상 작동합니다.

### 검증 포인트
- \`npm run build\`가 에러 없이 완료되는가?
- 배포된 URL에서 로그인/게시글 작성이 정상 동작하는가?
- 브라우저 콘솔에 에러가 없는가?

### 전체 완성 체크리스트
- [ ] Supabase 프로젝트 설정 완료
- [ ] React + Vite + TypeScript 프로젝트 초기화
- [ ] 인증(로그인/가입/로그아웃) 구현
- [ ] CRUD(생성/조회/수정/삭제) 구현
- [ ] RLS 정책 설정 및 테스트
- [ ] 로딩/에러 UI 완성
- [ ] GitHub Pages 배포 완료`,
      codeExamples: [
        {
          language: 'typescript',
          title: 'Vite 배포 설정 (vite.config.ts)',
          code: `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/my-crud-app/',
});`,
        },
        {
          language: 'json',
          title: 'package.json 스크립트',
          code: `{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "deploy": "npm run build && npx gh-pages -d dist"
  }
}`,
        },
      ],
      tips: [
        'GitHub Pages는 SPA의 클라이언트 라우팅을 지원하지 않으므로, 404.html에 리다이렉트 스크립트를 추가하거나 HashRouter를 사용하세요.',
        'Supabase 대시보드 > Authentication > URL Configuration에서 배포 도메인을 Site URL과 Redirect URLs에 추가해야 합니다.',
        '환경변수가 빌드 시 .env에서 번들에 포함됩니다. 민감하지 않은 값(anon key)만 사용하세요.',
      ],
    },
  ],

  /* ──────────────────────────────────────────────
   *  소스 파일 (13 files)
   * ────────────────────────────────────────────── */
  sourceFiles: [
    /* ── 1. package.json ── */
    {
      filename: 'package.json',
      language: 'json',
      code: `{
  "name": "my-crud-app",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "deploy": "npm run build && npx gh-pages -d dist"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.49.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.1.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.0",
    "gh-pages": "^6.3.0",
    "typescript": "^5.7.0",
    "vite": "^6.2.0"
  }
}`,
    },

    /* ── 2. vite.config.ts ── */
    {
      filename: 'vite.config.ts',
      language: 'typescript',
      code: `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-crud-app/',
});`,
    },

    /* ── 3. src/lib/supabase.ts ── */
    {
      filename: 'src/lib/supabase.ts',
      language: 'typescript',
      code: `import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'VITE_SUPABASE_URL 또는 VITE_SUPABASE_ANON_KEY 환경변수가 설정되지 않았습니다. ' +
    '.env 파일을 확인하세요.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);`,
    },

    /* ── 4. src/types.ts ── */
    {
      filename: 'src/types.ts',
      language: 'typescript',
      code: `/** 게시글 타입 */
export interface Post {
  id: string;
  title: string;
  content: string | null;
  user_id: string;
  created_at: string;
  updated_at: string;
}

/** 게시글 작성/수정 입력 타입 */
export interface PostInput {
  title: string;
  content: string;
}

/** 사용자 타입 (Supabase Auth에서 제공) */
export interface AppUser {
  id: string;
  email: string;
}`,
    },

    /* ── 5. src/App.tsx ── */
    {
      filename: 'src/App.tsx',
      language: 'tsx',
      code: `import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import PostList from './components/Posts/PostList';
import PostForm from './components/Posts/PostForm';
import './App.css';

/** 인증 필수 라우트 래퍼 */
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="loading">로딩 중...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

/** 네비게이션 바 */
function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">CRUD App</Link>
        <div className="navbar-menu">
          {user ? (
            <>
              <span className="navbar-user">{user.email}</span>
              <button className="btn btn-outline" onClick={signOut}>
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline">로그인</Link>
              <Link to="/register" className="btn btn-primary">회원가입</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <PostList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/posts/new"
              element={
                <ProtectedRoute>
                  <PostForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/posts/:id/edit"
              element={
                <ProtectedRoute>
                  <PostForm />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </AuthProvider>
    </BrowserRouter>
  );
}`,
    },

    /* ── 6. src/contexts/AuthContext.tsx ── */
    {
      filename: 'src/contexts/AuthContext.tsx',
      language: 'tsx',
      code: `import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import type { User, AuthError } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  /* 세션 초기화 & 리스너 */
  useEffect(() => {
    // 현재 세션 확인
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // 인증 상태 변화 감지
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  /* 로그인 */
  const signIn = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  }, []);

  /* 회원가입 */
  const signUp = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
  }, []);

  /* 로그아웃 */
  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

/** 인증 상태를 사용하기 위한 커스텀 훅 */
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth는 AuthProvider 안에서만 사용할 수 있습니다.');
  }
  return context;
}`,
    },

    /* ── 7. src/components/Auth/LoginForm.tsx ── */
    {
      filename: 'src/components/Auth/LoginForm.tsx',
      language: 'tsx',
      code: `import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function LoginForm() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signIn(email, password);
      navigate('/', { replace: true });
    } catch (err: any) {
      setError(err.message || '로그인에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}

        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          autoComplete="email"
        />

        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="6자 이상"
          required
          autoComplete="current-password"
        />

        <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
          {loading ? '로그인 중...' : '로그인'}
        </button>
      </form>

      <p className="auth-switch">
        계정이 없으신가요? <Link to="/register">회원가입</Link>
      </p>
    </div>
  );
}`,
    },

    /* ── 8. src/components/Auth/RegisterForm.tsx ── */
    {
      filename: 'src/components/Auth/RegisterForm.tsx',
      language: 'tsx',
      code: `import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function RegisterForm() {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (password.length < 6) {
      setError('비밀번호는 6자 이상이어야 합니다.');
      return;
    }

    setLoading(true);
    try {
      await signUp(email, password);
      navigate('/', { replace: true });
    } catch (err: any) {
      setError(err.message || '회원가입에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}

        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          autoComplete="email"
        />

        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="6자 이상"
          required
          autoComplete="new-password"
        />

        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호 재입력"
          required
          autoComplete="new-password"
        />

        <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
          {loading ? '가입 중...' : '회원가입'}
        </button>
      </form>

      <p className="auth-switch">
        이미 계정이 있으신가요? <Link to="/login">로그인</Link>
      </p>
    </div>
  );
}`,
    },

    /* ── 9. src/components/Posts/PostList.tsx ── */
    {
      filename: 'src/components/Posts/PostList.tsx',
      language: 'tsx',
      code: `import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import type { Post } from '../../types';
import PostItem from './PostItem';

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const { data, error: fetchError } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setPosts(data as Post[]);
    } catch (err: any) {
      setError(err.message || '게시글을 불러오는 데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  /* 삭제 후 목록 갱신 */
  const handleDelete = async (id: string) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    try {
      const { error: delError } = await supabase
        .from('posts')
        .delete()
        .eq('id', id);
      if (delError) throw delError;
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err: any) {
      alert(err.message || '삭제에 실패했습니다.');
    }
  };

  if (loading) {
    return <div className="loading">게시글 불러오는 중...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button className="btn btn-outline" onClick={fetchPosts}>
          다시 시도
        </button>
      </div>
    );
  }

  return (
    <div className="post-list">
      <div className="post-list-header">
        <h1>게시글 목록</h1>
        <Link to="/posts/new" className="btn btn-primary">
          새 게시글 작성
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="empty-state">
          <p>아직 게시글이 없습니다.</p>
          <Link to="/posts/new" className="btn btn-primary">
            첫 번째 게시글을 작성해보세요
          </Link>
        </div>
      ) : (
        <div className="post-grid">
          {posts.map((post) => (
            <PostItem key={post.id} post={post} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}`,
    },

    /* ── 10. src/components/Posts/PostForm.tsx ── */
    {
      filename: 'src/components/Posts/PostForm.tsx',
      language: 'tsx',
      code: `import { useState, useEffect, type FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import type { Post } from '../../types';

export default function PostForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [error, setError] = useState('');

  /* 수정 모드: 기존 데이터 불러오기 */
  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      setFetchLoading(true);
      try {
        const { data, error: fetchError } = await supabase
          .from('posts')
          .select('*')
          .eq('id', id)
          .single();

        if (fetchError) throw fetchError;
        const post = data as Post;
        setTitle(post.title);
        setContent(post.content ?? '');
      } catch (err: any) {
        setError(err.message || '게시글을 불러올 수 없습니다.');
      } finally {
        setFetchLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('제목을 입력해주세요.');
      return;
    }

    setLoading(true);
    try {
      if (isEditing && id) {
        /* Update */
        const { error: updateError } = await supabase
          .from('posts')
          .update({ title: title.trim(), content: content.trim() })
          .eq('id', id);
        if (updateError) throw updateError;
      } else {
        /* Create */
        const { error: insertError } = await supabase
          .from('posts')
          .insert({ title: title.trim(), content: content.trim() });
        if (insertError) throw insertError;
      }
      navigate('/', { replace: true });
    } catch (err: any) {
      setError(err.message || '저장에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  if (fetchLoading) {
    return <div className="loading">게시글 불러오는 중...</div>;
  }

  return (
    <div className="post-form-card">
      <h2>{isEditing ? '게시글 수정' : '새 게시글 작성'}</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}

        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="게시글 제목을 입력하세요"
          required
        />

        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="게시글 내용을 입력하세요"
          rows={8}
        />

        <div className="form-actions">
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => navigate(-1)}
          >
            취소
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading
              ? '저장 중...'
              : isEditing
                ? '수정 완료'
                : '작성 완료'}
          </button>
        </div>
      </form>
    </div>
  );
}`,
    },

    /* ── 11. src/components/Posts/PostItem.tsx ── */
    {
      filename: 'src/components/Posts/PostItem.tsx',
      language: 'tsx',
      code: `import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import type { Post } from '../../types';

interface PostItemProps {
  post: Post;
  onDelete: (id: string) => void;
}

export default function PostItem({ post, onDelete }: PostItemProps) {
  const { user } = useAuth();
  const isOwner = user?.id === post.user_id;

  const formattedDate = new Date(post.created_at).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="post-card">
      <div className="post-card-header">
        <h3 className="post-title">{post.title}</h3>
        <time className="post-date">{formattedDate}</time>
      </div>

      {post.content && (
        <p className="post-content">
          {post.content.length > 200
            ? post.content.slice(0, 200) + '...'
            : post.content}
        </p>
      )}

      {isOwner && (
        <div className="post-actions">
          <Link to={\`/posts/\${post.id}/edit\`} className="btn btn-sm btn-outline">
            수정
          </Link>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => onDelete(post.id)}
          >
            삭제
          </button>
        </div>
      )}
    </article>
  );
}`,
    },

    /* ── 12. src/App.css ── */
    {
      filename: 'src/App.css',
      language: 'css',
      code: `/* ─── CSS Variables ─── */
:root {
  --color-primary: #0046C8;
  --color-primary-hover: #003AA0;
  --color-danger: #DC2626;
  --color-danger-hover: #B91C1C;
  --color-bg: #F9FAFB;
  --color-card: #FFFFFF;
  --color-border: #E5E7EB;
  --color-text: #111827;
  --color-text-secondary: #6B7280;
  --radius: 8px;
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* ─── Reset ─── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
}

/* ─── Layout ─── */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 20px;
}

/* ─── Navbar ─── */
.navbar {
  background: var(--color-card);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-inner {
  max-width: 800px;
  margin: 0 auto;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 12px;
}

.navbar-user {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

/* ─── Buttons ─── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: var(--radius);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
}

.btn-primary {
  background: var(--color-primary);
  color: #fff;
}
.btn-primary:hover {
  background: var(--color-primary-hover);
}

.btn-outline {
  background: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}
.btn-outline:hover {
  background: var(--color-primary);
  color: #fff;
}

.btn-danger {
  background: var(--color-danger);
  color: #fff;
}
.btn-danger:hover {
  background: var(--color-danger-hover);
}

.btn-sm {
  padding: 4px 10px;
  font-size: 0.8rem;
}

.btn-full {
  width: 100%;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* ─── Auth Card ─── */
.auth-card {
  max-width: 400px;
  margin: 60px auto;
  background: var(--color-card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 32px;
}

.auth-card h2 {
  margin-bottom: 24px;
  text-align: center;
}

.auth-card label {
  display: block;
  margin-bottom: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-secondary);
}

.auth-card input {
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  font-size: 0.95rem;
}

.auth-card input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 70, 200, 0.15);
}

.auth-switch {
  margin-top: 16px;
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

.auth-switch a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
}

/* ─── Post List ─── */
.post-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.post-list-header h1 {
  font-size: 1.5rem;
}

.post-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* ─── Post Card ─── */
.post-card {
  background: var(--color-card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 20px;
  border: 1px solid var(--color-border);
}

.post-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.post-title {
  font-size: 1.1rem;
  font-weight: 600;
}

.post-date {
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  white-space: nowrap;
  margin-left: 12px;
}

.post-content {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin-bottom: 12px;
}

.post-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

/* ─── Post Form ─── */
.post-form-card {
  max-width: 600px;
  margin: 40px auto;
  background: var(--color-card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 32px;
}

.post-form-card h2 {
  margin-bottom: 24px;
}

.post-form-card label {
  display: block;
  margin-bottom: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-secondary);
}

.post-form-card input,
.post-form-card textarea {
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  font-size: 0.95rem;
  font-family: inherit;
}

.post-form-card input:focus,
.post-form-card textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 70, 200, 0.15);
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

/* ─── States ─── */
.loading {
  text-align: center;
  padding: 60px 20px;
  color: var(--color-text-secondary);
  font-size: 1rem;
}

.error-message {
  background: #FEF2F2;
  color: var(--color-danger);
  padding: 10px 14px;
  border-radius: var(--radius);
  margin-bottom: 16px;
  font-size: 0.875rem;
  border: 1px solid #FECACA;
}

.error-container {
  text-align: center;
  padding: 60px 20px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--color-text-secondary);
}

.empty-state p {
  margin-bottom: 16px;
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .container {
    padding: 16px 12px;
  }

  .navbar-inner {
    padding: 10px 12px;
  }

  .post-card-header {
    flex-direction: column;
  }

  .post-date {
    margin-left: 0;
    margin-top: 4px;
  }

  .auth-card {
    margin: 24px 12px;
    padding: 24px 16px;
  }
}`,
    },

    /* ── 13. supabase/schema.sql ── */
    {
      filename: 'supabase/schema.sql',
      language: 'sql',
      code: `-- =========================================================
-- 풀스택 CRUD 앱 — 데이터베이스 스키마
-- Supabase SQL Editor에서 실행하세요.
-- =========================================================

-- 1. posts 테이블 생성
CREATE TABLE IF NOT EXISTS public.posts (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title      TEXT NOT NULL,
  content    TEXT,
  user_id    UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 인덱스: user_id 기반 조회 최적화
CREATE INDEX IF NOT EXISTS idx_posts_user_id ON public.posts(user_id);
-- 인덱스: 최신순 정렬 최적화
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON public.posts(created_at DESC);

-- 2. updated_at 자동 갱신 트리거
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER posts_updated_at
  BEFORE UPDATE ON public.posts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- 3. RLS (Row Level Security) 활성화
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- 정책: 인증된 사용자는 모든 게시글 조회 가능
CREATE POLICY "인증 사용자 조회"
  ON public.posts FOR SELECT
  TO authenticated
  USING (true);

-- 정책: 인증된 사용자는 본인 user_id로만 게시글 작성 가능
CREATE POLICY "본인 게시글 작성"
  ON public.posts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- 정책: 본인 게시글만 수정 가능
CREATE POLICY "본인 게시글 수정"
  ON public.posts FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 정책: 본인 게시글만 삭제 가능
CREATE POLICY "본인 게시글 삭제"
  ON public.posts FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);`,
    },
  ],
};
