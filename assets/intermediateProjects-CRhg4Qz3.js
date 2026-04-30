const e={id:"fullstack-crud",slug:"fullstack-crud",title:"풀스택 CRUD 앱",description:"React + Supabase로 인증, RLS, CRUD를 갖춘 풀스택 앱.",level:"intermediate",duration:"5-6시간",techStack:["React","Supabase","Claude Code","TypeScript"],outcomes:["Supabase Auth 구현","RLS 정책 설정","풀스택 CRUD","Claude Code 활용"],diagram:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" font-family="'Noto Sans KR', sans-serif">
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
</svg>`,steps:[{step:1,title:"Supabase 프로젝트 설정",description:"Supabase 대시보드에서 프로젝트를 생성하고 posts 테이블을 만듭니다.",content:`이 단계에서는 Supabase 프로젝트를 생성하고 데이터베이스 테이블을 정의합니다.

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
- \`user_id\`가 \`auth.users(id)\`를 참조하는가?`,codeExamples:[{language:"sql",title:"posts 테이블 생성 SQL (supabase/schema.sql)",code:`-- posts 테이블 생성
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
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();`}],tips:["Supabase 프로젝트 생성 후 초기화에 2-3분이 소요됩니다. 기다리는 동안 프론트엔드 프로젝트 폴더를 준비하세요.","Settings > API 페이지의 URL과 anon key를 .env 파일에 바로 복사해두면 편리합니다.","데이터베이스 비밀번호는 프로젝트 생성 시에만 표시됩니다. 반드시 안전한 곳에 저장하세요."]},{step:2,title:"프로젝트 초기화",description:"React + Vite + TypeScript 프로젝트를 생성하고 Supabase 클라이언트를 설정합니다.",content:`### 2-1. 프로젝트 생성

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
- \`supabase\` 인스턴스를 import해서 사용할 수 있는가?`,codeExamples:[{language:"bash",title:"프로젝트 생성 및 패키지 설치",code:`npm create vite@latest my-crud-app -- --template react-ts
cd my-crud-app
npm install @supabase/supabase-js react-router-dom
npm install -D @types/react-router-dom`},{language:"typescript",title:"Supabase 클라이언트 (src/lib/supabase.ts)",code:`import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL 또는 Anon Key가 설정되지 않았습니다.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);`}],tips:[".env 파일은 반드시 .gitignore에 포함시키세요. anon key는 클라이언트용이라 노출되어도 RLS가 보호하지만, 프로젝트 정보 유출을 방지해야 합니다.","Vite 환경변수는 VITE_ 접두사가 있어야 클라이언트에서 접근 가능합니다.","TypeScript strict 모드를 켜두면 런타임 에러를 사전에 방지할 수 있습니다."]},{step:3,title:"인증 구현",description:"Supabase Auth를 활용하여 로그인, 회원가입, 로그아웃 기능을 구현합니다.",content:`### 3-1. AuthContext 생성

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
- 잘못된 이메일/비밀번호 입력 시 에러 메시지가 표시되는가?`,codeExamples:[{language:"tsx",title:"AuthContext 핵심 구조",code:`import { createContext, useContext, useEffect, useState } from 'react';
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
};`}],tips:["onAuthStateChange 리스너의 subscription을 반드시 cleanup(unsubscribe)하세요. 메모리 누수를 방지합니다.","Supabase Auth는 자동으로 JWT를 localStorage에 저장합니다. 별도의 토큰 관리가 필요 없습니다.","비밀번호는 최소 6자 이상이어야 합니다 (Supabase 기본 설정)."]},{step:4,title:"CRUD 구현",description:"Supabase 클라이언트로 게시글의 생성, 조회, 수정, 삭제 기능을 구현합니다.",content:`### 4-1. 게시글 목록 (Read)

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
- 다른 사용자로 로그인하면 삭제 버튼이 숨겨지는가?`,codeExamples:[{language:"typescript",title:"CRUD 함수 예시",code:`import { supabase } from '../lib/supabase';
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
};`}],tips:["insert 시 user_id를 직접 넣지 않아도 됩니다. RLS 정책에서 auth.uid()로 자동 설정할 수 있습니다.",".select().single()은 결과가 정확히 1개일 때만 사용하세요. 0개이거나 2개 이상이면 에러가 발생합니다.","CRUD 작업 후 목록을 다시 조회(refetch)하여 UI를 최신 상태로 유지하세요."]},{step:5,title:"RLS 정책 설정",description:"Row Level Security를 활성화하여 데이터를 보호합니다.",content:`### 5-1. RLS 활성화

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
- 다른 사용자의 게시글 DELETE 시 \`row not found\` 또는 권한 에러가 발생하는가?`,codeExamples:[{language:"sql",title:"RLS 정책 SQL",code:`-- RLS 활성화
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
  USING (auth.uid() = user_id);`}],tips:["RLS를 활성화하지 않으면 anon key를 가진 누구나 모든 데이터에 접근할 수 있습니다. 반드시 활성화하세요.","정책의 USING 절은 기존 행에 대한 접근을, WITH CHECK 절은 새로 삽입/수정되는 행에 대한 검증을 담당합니다.","개발 중에도 RLS를 켜두고 작업하세요. 나중에 켜면 이미 작성된 코드에서 권한 버그가 발생할 수 있습니다."]},{step:6,title:"UI 완성",description:"로딩 상태, 에러 처리, 반응형 레이아웃을 추가하여 UI를 완성합니다.",content:`### 6-1. 로딩 & 에러 상태

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
- 모바일 뷰포트(375px)에서 레이아웃이 깨지지 않는가?`,tips:["try-catch로 모든 Supabase 호출을 감싸고, catch에서 사용자에게 에러 메시지를 보여주세요.","CSS 변수(custom properties)를 활용하면 테마 색상을 한 곳에서 관리할 수 있습니다.","React.Suspense와 lazy()를 사용하면 코드 스플리팅으로 초기 로딩을 줄일 수 있습니다."]},{step:7,title:"빌드 및 배포",description:"프로젝트를 빌드하고 GitHub Pages로 배포합니다.",content:`### 7-1. 프로덕션 빌드

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
- [ ] GitHub Pages 배포 완료`,codeExamples:[{language:"typescript",title:"Vite 배포 설정 (vite.config.ts)",code:`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/my-crud-app/',
});`},{language:"json",title:"package.json 스크립트",code:`{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "deploy": "npm run build && npx gh-pages -d dist"
  }
}`}],tips:["GitHub Pages는 SPA의 클라이언트 라우팅을 지원하지 않으므로, 404.html에 리다이렉트 스크립트를 추가하거나 HashRouter를 사용하세요.","Supabase 대시보드 > Authentication > URL Configuration에서 배포 도메인을 Site URL과 Redirect URLs에 추가해야 합니다.","환경변수가 빌드 시 .env에서 번들에 포함됩니다. 민감하지 않은 값(anon key)만 사용하세요."]}],sourceFiles:[{filename:"package.json",language:"json",code:`{
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
}`},{filename:"vite.config.ts",language:"typescript",code:`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-crud-app/',
});`},{filename:"src/lib/supabase.ts",language:"typescript",code:`import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'VITE_SUPABASE_URL 또는 VITE_SUPABASE_ANON_KEY 환경변수가 설정되지 않았습니다. ' +
    '.env 파일을 확인하세요.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);`},{filename:"src/types.ts",language:"typescript",code:`/** 게시글 타입 */
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
}`},{filename:"src/App.tsx",language:"tsx",code:`import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
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
}`},{filename:"src/contexts/AuthContext.tsx",language:"tsx",code:`import {
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
}`},{filename:"src/components/Auth/LoginForm.tsx",language:"tsx",code:`import { useState, type FormEvent } from 'react';
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
}`},{filename:"src/components/Auth/RegisterForm.tsx",language:"tsx",code:`import { useState, type FormEvent } from 'react';
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
}`},{filename:"src/components/Posts/PostList.tsx",language:"tsx",code:`import { useEffect, useState, useCallback } from 'react';
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
}`},{filename:"src/components/Posts/PostForm.tsx",language:"tsx",code:`import { useState, useEffect, type FormEvent } from 'react';
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
}`},{filename:"src/components/Posts/PostItem.tsx",language:"tsx",code:`import { Link } from 'react-router-dom';
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
}`},{filename:"src/App.css",language:"css",code:`/* ─── CSS Variables ─── */
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
}`},{filename:"supabase/schema.sql",language:"sql",code:`-- =========================================================
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
  USING (auth.uid() = user_id);`}]},t={id:"api-dashboard",slug:"api-dashboard",title:"API 대시보드",description:"외부 API를 연동하여 데이터를 시각화하는 대시보드.",level:"intermediate",duration:"5-6시간",techStack:["React","Claude Code","Chart.js","REST API","TypeScript"],outcomes:["API 연동 능력","데이터 시각화","대시보드 레이아웃","Claude Code 활용"],diagram:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" font-family="'Noto Sans KR', sans-serif">
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
</svg>`,steps:[{step:1,title:"대시보드 설계",description:"대시보드 레이아웃을 기획하고 사용할 API를 선정합니다.",content:`API 대시보드를 만들기 전에 먼저 어떤 데이터를 표시할지, 어떤 레이아웃으로 구성할지를 설계합니다. 좋은 대시보드는 한눈에 핵심 지표를 파악할 수 있어야 합니다.

이 프로젝트에서는 세 가지 데이터 소스를 사용합니다. 첫째, 날씨 데이터 — 도시별 기온, 습도, 풍속 등의 기상 정보입니다. 둘째, 환율 데이터 — 주요 통화의 환율 변동 정보입니다. 셋째, JSONPlaceholder — 게시글, 사용자 등의 목업 데이터입니다. 튜토리얼에서는 안정적인 학습을 위해 시뮬레이션 데이터를 활용합니다.

대시보드 레이아웃은 상단에 KPI 카드 4개를 가로로 배치하고, 중간에 Line Chart와 Bar Chart를 2열로, 하단에 데이터 테이블을 전체 폭으로 배치합니다. 반응형 디자인을 적용하여 모바일에서는 1열로 변환됩니다.

Claude Code에 다음과 같이 요청하세요:

"API 대시보드를 만들 거야. 상단에 KPI 카드 4개, 중간에 차트 2개(Line, Bar), 하단에 데이터 테이블을 배치하는 레이아웃을 설계해줘. 날씨, 환율, 게시글 데이터를 시각화할 거야."`,tips:["실제 API 키가 필요 없는 무료 공개 API를 사용하면 학습에 집중할 수 있습니다.",'대시보드 설계 시 "정보 계층 구조"를 고려하세요 — 가장 중요한 KPI가 최상단에 위치해야 합니다.',"Claude Code에 와이어프레임을 설명하면 컴포넌트 구조를 자동으로 제안해줍니다."]},{step:2,title:"프로젝트 초기화",description:"React + Vite 프로젝트를 생성하고 Chart.js 라이브러리를 설치합니다.",content:`Claude Code를 사용하여 프로젝트를 초기화합니다. Vite의 React + TypeScript 템플릿으로 시작하고, Chart.js와 react-chartjs-2 라이브러리를 설치합니다.

Claude Code에 다음과 같이 요청하세요:

"React + Vite + TypeScript로 api-dashboard 프로젝트를 생성하고, chart.js, react-chartjs-2를 설치해줘. 프로젝트 구조는 components/, hooks/, types.ts로 나눠줘."

Chart.js는 가장 널리 사용되는 JavaScript 차트 라이브러리이며, react-chartjs-2는 Chart.js를 React 컴포넌트로 래핑한 라이브러리입니다. Chart.js에서 사용할 차트 유형(Line, Bar, Doughnut)의 모듈을 등록하는 것이 중요합니다.

프로젝트 구조:
- src/components/ — KPICard, LineChart, BarChart, DataTable, DashboardHeader
- src/hooks/ — useWeatherData, useCurrencyData (커스텀 훅)
- src/types.ts — API 응답 타입 정의
- src/App.tsx — 메인 대시보드 레이아웃
- src/App.css — 그리드 및 대시보드 스타일`,tips:["Chart.js v4는 트리 쉐이킹을 지원합니다 — 사용하는 차트 유형만 등록하면 번들 크기가 줄어듭니다.","react-chartjs-2의 버전이 Chart.js 버전과 호환되는지 확인하세요."],codeExamples:[{language:"bash",title:"프로젝트 생성 및 의존성 설치",code:`# Vite로 프로젝트 생성
npm create vite@latest api-dashboard -- --template react-ts

# 디렉토리 이동
cd api-dashboard

# Chart.js 관련 패키지 설치
npm install chart.js react-chartjs-2

# 개발 서버 실행
npm run dev`}]},{step:3,title:"API 연동 — Custom Hooks",description:"외부 API 데이터를 가져오는 커스텀 훅을 구현합니다.",content:`데이터 페칭 로직을 커스텀 훅으로 분리하면 컴포넌트가 깔끔해지고 재사용성이 높아집니다. 각 훅은 data, loading, error 세 가지 상태를 관리합니다.

Claude Code에 다음과 같이 요청하세요:

"useWeatherData, useCurrencyData 커스텀 훅을 만들어줘. 각 훅은 시뮬레이션 데이터를 반환하되, 실제 API 호출 구조(fetch + useState + useEffect)를 따르도록 해줘. loading, error 상태도 포함해줘."

이 튜토리얼에서는 안정적인 학습을 위해 시뮬레이션 데이터를 사용합니다. 실제 프로젝트에서는 fetch() 호출 부분만 실제 API 엔드포인트로 교체하면 됩니다. 핵심은 훅의 구조와 상태 관리 패턴을 익히는 것입니다.

커스텀 훅 패턴:
1. useState로 data, loading, error 상태 선언
2. useEffect 안에서 비동기 함수 호출
3. try-catch로 에러 핸들링
4. finally에서 loading을 false로 설정
5. cleanup 함수로 메모리 누수 방지`,tips:['커스텀 훅 이름은 반드시 "use"로 시작해야 React가 훅 규칙을 적용합니다.',"AbortController를 사용하면 컴포넌트 언마운트 시 진행 중인 요청을 취소할 수 있습니다.","시뮬레이션 데이터를 사용할 때도 실제 API 호출과 동일한 비동기 패턴(setTimeout)을 적용하면 로딩 상태를 테스트할 수 있습니다."],codeExamples:[{language:"typescript",title:"커스텀 훅 패턴 (useWeatherData)",code:`import { useState, useEffect } from 'react';
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
}`}]},{step:4,title:"KPI 카드 구현",description:"핵심 지표를 표시하는 KPI 카드 컴포넌트를 만듭니다.",content:`KPI(Key Performance Indicator) 카드는 대시보드 최상단에 위치하여 핵심 지표를 한눈에 보여줍니다. 라벨, 값, 단위, 변화량(트렌드)을 표시합니다.

Claude Code에 다음과 같이 요청하세요:

"KPICard 컴포넌트를 만들어줘. props로 label, value, unit, change(전일 대비 변화율), icon을 받고, change가 양수면 초록색, 음수면 빨간색으로 표시해줘. 카드 스타일은 그림자와 둥근 모서리를 적용해줘."

KPI 카드 4개의 데이터:
1. 현재 기온 (날씨 데이터에서)
2. USD 환율 (환율 데이터에서)
3. 총 게시글 수 (JSONPlaceholder에서)
4. 평균 습도 (날씨 데이터에서)

각 카드는 동일한 KPICard 컴포넌트를 재사용하되, props만 다르게 전달합니다. 이것이 React 컴포넌트의 재사용성입니다.`,tips:["KPI 카드의 변화율(change)에 삼각형 아이콘(▲/▼)을 추가하면 직관적입니다.","숫자 포맷팅에 Intl.NumberFormat을 사용하면 천 단위 구분자, 소수점 등을 쉽게 처리할 수 있습니다.","loading 상태에서는 숫자 대신 스켈레톤 UI를 표시하면 UX가 좋아집니다."],codeExamples:[{language:"tsx",title:"KPICard 컴포넌트 사용 예시",code:`<div className="kpi-grid">
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
</div>`}]},{step:5,title:"차트 구현",description:"Chart.js를 활용하여 Line Chart, Bar Chart를 구현합니다.",content:`Chart.js와 react-chartjs-2를 사용하여 데이터를 시각적으로 표현합니다. 이 프로젝트에서는 세 가지 차트를 구현합니다.

Claude Code에 다음과 같이 요청하세요:

"Chart.js를 사용해서 LineChart와 BarChart 컴포넌트를 만들어줘. LineChart는 7일간 기온 변화를, BarChart는 통화별 환율을 표시해줘. 차트 색상은 파란색(#0046C8) 계열로 통일하고, 반응형으로 만들어줘. Chart.js 모듈 등록도 포함해줘."

Chart.js 사용 시 중요한 점:
1. CategoryScale, LinearScale, PointElement 등 필요한 모듈을 Chart.register()로 등록
2. react-chartjs-2의 Line, Bar 컴포넌트에 data와 options를 props로 전달
3. options.responsive = true로 반응형 설정
4. options.maintainAspectRatio = false로 부모 컨테이너에 맞춤

Line Chart — 최근 7일간 기온 변화 추이를 시계열로 표시합니다. 부드러운 곡선(tension: 0.4)과 그라데이션 배경을 적용하면 시각적으로 매력적인 차트가 됩니다.

Bar Chart — 주요 통화(USD, EUR, JPY, GBP, CNY)의 환율을 비교 막대로 표시합니다. 각 막대에 다른 색상을 적용하여 구분합니다.`,tips:['Chart.js 모듈을 등록하지 않으면 "Category is not a registered scale" 에러가 발생합니다.',"responsive: true와 maintainAspectRatio: false를 함께 설정하고, 부모 div에 고정 높이를 지정하세요.","Doughnut 차트는 카테고리별 비율을 표시할 때 효과적입니다 — 추가 도전 과제로 구현해보세요."],codeExamples:[{language:"typescript",title:"Chart.js 모듈 등록",code:`import {
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
);`}]},{step:6,title:"데이터 테이블 구현",description:"정렬 기능이 있는 데이터 테이블 컴포넌트를 만듭니다.",content:`대시보드 하단에는 원본 데이터를 상세히 확인할 수 있는 테이블을 배치합니다. 컬럼 헤더 클릭 시 오름차순/내림차순 정렬이 토글되는 기능을 구현합니다.

Claude Code에 다음과 같이 요청하세요:

"DataTable 컴포넌트를 만들어줘. 제네릭 타입으로 만들어서 어떤 데이터든 표시할 수 있게 해줘. 컬럼 정의는 columns prop으로 받고, 헤더 클릭 시 정렬 기능을 포함해줘. 현재 정렬 기준 컬럼에 화살표 표시도 해줘."

테이블 컴포넌트 설계 포인트:
1. columns 배열로 표시할 컬럼을 정의 (key, label, sortable)
2. useState로 sortKey와 sortOrder(asc/desc) 관리
3. useMemo로 정렬된 데이터를 캐싱하여 성능 최적화
4. 정렬 아이콘(▲/▼)으로 현재 정렬 상태를 시각적으로 표시

JSONPlaceholder의 posts 데이터를 활용하여 ID, 제목, 작성자ID를 테이블에 표시합니다. 실제 서비스에서는 페이지네이션, 필터링, 검색 기능을 추가합니다.`,tips:["useMemo를 사용하여 정렬 연산을 최적화하세요 — 데이터가 변경될 때만 재정렬됩니다.","테이블이 길어질 경우 max-height와 overflow-y: auto로 스크롤 영역을 제한하세요.","접근성을 위해 정렬 버튼에 aria-sort 속성을 추가하면 좋습니다."],codeExamples:[{language:"typescript",title:"정렬 로직",code:`const [sortKey, setSortKey] = useState<string>('id');
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
}`}]},{step:7,title:"반응형 레이아웃 및 완성",description:"CSS Grid로 반응형 대시보드 레이아웃을 완성하고 로딩 상태를 처리합니다.",content:`모든 컴포넌트를 App.tsx에서 조합하여 완성된 대시보드를 만듭니다. CSS Grid를 사용하여 반응형 레이아웃을 구현하고, 로딩/에러 상태를 처리합니다.

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

완성 후 npm run dev로 개발 서버를 실행하고, 브라우저에서 대시보드가 정상적으로 표시되는지 확인합니다. Chrome DevTools의 반응형 모드에서 다양한 화면 크기를 테스트하세요.`,tips:["CSS Grid의 minmax()와 auto-fill을 활용하면 미디어 쿼리 없이도 기본 반응형을 구현할 수 있습니다.","loading 상태에서 컴포넌트 크기가 변하면 레이아웃이 점프합니다 — 스켈레톤 UI를 실제 컴포넌트와 같은 크기로 만드세요.","새로고침 버튼에 회전 애니메이션을 추가하면 사용자가 갱신 중임을 직관적으로 알 수 있습니다.",'Claude Code에 "성능 최적화를 위해 React.memo와 useMemo를 적용해줘"라고 요청하면 렌더링 최적화를 도와줍니다.'],codeExamples:[{language:"css",title:"반응형 그리드 레이아웃",code:`.dashboard {
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
}`}]}],sourceFiles:[{filename:"package.json",language:"json",code:`{
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
}`},{filename:"vite.config.ts",language:"typescript",code:`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});`},{filename:"src/types.ts",language:"typescript",code:`/* ── API 응답 타입 정의 ── */

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
}`},{filename:"src/App.tsx",language:"tsx",code:`import { useWeatherData } from './hooks/useWeatherData';
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
}`},{filename:"src/App.css",language:"css",code:`/* ── 대시보드 레이아웃 ── */

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
}`},{filename:"src/hooks/useWeatherData.ts",language:"typescript",code:`import { useState, useEffect, useCallback } from 'react';
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
}`},{filename:"src/hooks/useCurrencyData.ts",language:"typescript",code:`import { useState, useEffect, useCallback } from 'react';
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
}`},{filename:"src/hooks/usePostsData.ts",language:"typescript",code:`import { useState, useEffect, useCallback } from 'react';
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
}`},{filename:"src/components/KPICard.tsx",language:"tsx",code:`import type { KPICardProps } from '../types';

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
}`},{filename:"src/components/LineChart.tsx",language:"tsx",code:`import {
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
}`},{filename:"src/components/BarChart.tsx",language:"tsx",code:`import {
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
}`},{filename:"src/components/DataTable.tsx",language:"tsx",code:`import { useState, useMemo } from 'react';
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
}`},{filename:"src/components/DashboardHeader.tsx",language:"tsx",code:`import { useState } from 'react';

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
}`}]},a={id:"realtime-chat",slug:"realtime-chat",title:"실시간 채팅 앱",description:"Supabase Realtime을 활용한 실시간 채팅 앱.",level:"intermediate",duration:"6-7시간",techStack:["React","Supabase Realtime","Claude Code","TypeScript"],outcomes:["실시간 데이터 동기화","채널 시스템 구현","메시지 관리","Claude Code 활용"],diagram:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" font-family="'Noto Sans KR', sans-serif">
  <defs>
    <marker id="ah" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#0046C8"/>
    </marker>
    <marker id="ah-rev" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
      <polygon points="10 0, 0 3.5, 10 7" fill="#0046C8"/>
    </marker>
  </defs>
  <!-- React App -->
  <rect x="20" y="50" width="180" height="60" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="110" y="76" text-anchor="middle" font-size="14" font-weight="bold" fill="#0046C8">React App</text>
  <text x="110" y="96" text-anchor="middle" font-size="11" fill="#555">ChatRoom / ChannelList</text>
  <!-- Arrow: React → Supabase Client -->
  <line x1="200" y1="80" x2="280" y2="80" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <text x="240" y="70" text-anchor="middle" font-size="10" fill="#555">hooks</text>
  <!-- Supabase Client -->
  <rect x="285" y="50" width="190" height="60" rx="8" fill="#0046C8" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="76" text-anchor="middle" font-size="14" font-weight="bold" fill="#fff">Supabase Client</text>
  <text x="380" y="96" text-anchor="middle" font-size="11" fill="#ddd">@supabase/supabase-js</text>
  <!-- Arrow: Supabase Client → Realtime -->
  <line x1="380" y1="110" x2="380" y2="160" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <text x="412" y="140" text-anchor="middle" font-size="10" fill="#555">subscribe</text>
  <!-- Arrow: Supabase Client → PostgreSQL -->
  <line x1="475" y1="80" x2="560" y2="80" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <text x="518" y="70" text-anchor="middle" font-size="10" fill="#555">CRUD</text>
  <!-- Realtime Subscription -->
  <rect x="280" y="165" width="200" height="55" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="189" text-anchor="middle" font-size="13" font-weight="bold" fill="#0046C8">Realtime Subscription</text>
  <text x="380" y="208" text-anchor="middle" font-size="10" fill="#555">postgres_changes</text>
  <!-- Arrow: Realtime ← PostgreSQL -->
  <line x1="480" y1="192" x2="560" y2="130" stroke="#0046C8" stroke-width="2" marker-start="url(#ah-rev)"/>
  <text x="535" y="170" text-anchor="middle" font-size="10" fill="#555">변경 감지</text>
  <!-- Arrow: Realtime → React (callback) -->
  <path d="M 280 192 Q 200 192 150 135 L 130 115" fill="none" stroke="#0046C8" stroke-width="2" stroke-dasharray="6 3" marker-end="url(#ah)"/>
  <text x="185" y="160" text-anchor="middle" font-size="10" fill="#555">콜백</text>
  <!-- PostgreSQL -->
  <rect x="565" y="50" width="170" height="60" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="650" y="76" text-anchor="middle" font-size="14" font-weight="bold" fill="#0046C8">PostgreSQL</text>
  <text x="650" y="96" text-anchor="middle" font-size="11" fill="#555">channels / messages</text>
  <!-- DB Tables -->
  <rect x="565" y="130" width="80" height="36" rx="6" fill="#E8EFFF" stroke="#0046C8" stroke-width="1.5"/>
  <text x="605" y="152" text-anchor="middle" font-size="11" font-weight="600" fill="#0046C8">channels</text>
  <rect x="655" y="130" width="80" height="36" rx="6" fill="#E8EFFF" stroke="#0046C8" stroke-width="1.5"/>
  <text x="695" y="152" text-anchor="middle" font-size="11" font-weight="600" fill="#0046C8">messages</text>
  <!-- Legend -->
  <text x="380" y="265" text-anchor="middle" font-size="12" fill="#666">Supabase Realtime v2 | postgres_changes 기반 실시간 메시지 동기화</text>
  <text x="380" y="285" text-anchor="middle" font-size="11" fill="#999">INSERT 이벤트 감지 → 콜백으로 UI 자동 업데이트</text>
</svg>`,steps:[{step:1,title:"DB 설계",description:"channels와 messages 테이블을 설계하고 RLS 정책을 설정합니다.",content:`실시간 채팅 앱의 데이터 모델은 두 개의 핵심 테이블로 구성됩니다. channels 테이블은 채팅방 목록을 관리하고, messages 테이블은 각 채널에 속하는 메시지를 저장합니다. 두 테이블은 channel_id 외래키로 연결됩니다.

RLS(Row Level Security)는 반드시 활성화해야 합니다. 인증된 사용자만 채널을 조회하고 메시지를 보낼 수 있도록 정책을 설정합니다. Supabase Realtime이 정상 작동하려면 테이블에 대해 REPLICA IDENTITY FULL을 설정해야 합니다.

Supabase 대시보드의 SQL Editor에서 스키마를 직접 실행하거나, Claude Code에게 SQL 파일 생성을 요청할 수 있습니다.`,codeExamples:[{language:"sql",title:"Claude Code 프롬프트 결과 — schema.sql",code:`-- channels 테이블
CREATE TABLE channels (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- messages 테이블
CREATE TABLE messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  channel_id UUID REFERENCES channels(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id),
  user_email TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- RLS 활성화
ALTER TABLE channels ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- channels RLS
CREATE POLICY "인증된 사용자 채널 조회"
  ON channels FOR SELECT TO authenticated USING (true);
CREATE POLICY "인증된 사용자 채널 생성"
  ON channels FOR INSERT TO authenticated WITH CHECK (auth.uid() = created_by);

-- messages RLS
CREATE POLICY "인증된 사용자 메시지 조회"
  ON messages FOR SELECT TO authenticated USING (true);
CREATE POLICY "인증된 사용자 메시지 전송"
  ON messages FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Realtime 활성화를 위한 설정
ALTER TABLE messages REPLICA IDENTITY FULL;
ALTER TABLE channels REPLICA IDENTITY FULL;

-- Realtime publication 추가
ALTER PUBLICATION supabase_realtime ADD TABLE messages;
ALTER PUBLICATION supabase_realtime ADD TABLE channels;`}],tips:["Supabase 대시보드 → SQL Editor에서 위 SQL을 직접 실행하세요.","REPLICA IDENTITY FULL 설정을 빠뜨리면 Realtime 구독에서 이전 데이터(old record)를 받을 수 없습니다.",'Claude Code 프롬프트: "channels와 messages 테이블을 만들어줘. RLS와 Realtime 설정도 포함해줘."']},{step:2,title:"프로젝트 초기화",description:"React + Vite + Supabase 클라이언트를 셋업합니다.",content:`Claude Code를 사용하여 React + Vite + TypeScript 프로젝트를 생성합니다. Supabase JS 클라이언트 라이브러리를 설치하고, 환경변수로 Supabase URL과 anon key를 설정합니다.

프로젝트 구조는 다음과 같이 구성합니다: src/lib/에 Supabase 클라이언트 초기화, src/contexts/에 인증 컨텍스트, src/components/Chat/에 채팅 관련 컴포넌트를 배치합니다. 이 구조를 CLAUDE.md에 명시해두면 Claude Code가 일관된 위치에 파일을 생성합니다.

Supabase 클라이언트는 createClient()로 단 한 번만 초기화하고 재사용합니다. 여러 곳에서 new로 생성하면 Realtime 구독이 중복될 수 있으므로 주의하세요.`,codeExamples:[{language:"bash",title:"Claude Code에게 프로젝트 생성 요청",code:`# Claude Code 프롬프트 예시:
# "React + Vite + TypeScript로 실시간 채팅 프로젝트를 만들어줘.
#  Supabase JS를 설치하고, src/lib/supabase.ts에 클라이언트를 초기화해줘.
#  환경변수는 .env 파일로 관리해줘."

# 실제 실행되는 명령어:
npm create vite@latest realtime-chat -- --template react-ts
cd realtime-chat
npm install @supabase/supabase-js
npm install`},{language:"typescript",title:"src/lib/supabase.ts — 클라이언트 초기화",code:`import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase 환경변수가 설정되지 않았습니다.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);`}],tips:[".env 파일에 VITE_SUPABASE_URL과 VITE_SUPABASE_ANON_KEY를 설정하세요.",".env 파일은 .gitignore에 추가하여 Git에 커밋되지 않도록 합니다.",'Claude Code 프롬프트: "Supabase 클라이언트를 싱글톤 패턴으로 초기화하는 코드를 만들어줘."']},{step:3,title:"인증 구현",description:"채팅을 위한 로그인/회원가입 기능을 구현합니다.",content:`채팅 앱에서 인증은 필수입니다. 누가 메시지를 보냈는지 식별하고, RLS 정책이 올바르게 동작하려면 Supabase Auth를 통해 사용자를 인증해야 합니다.

AuthContext를 만들어 앱 전체에서 로그인 상태를 공유합니다. supabase.auth.onAuthStateChange()로 로그인/로그아웃 이벤트를 감지하고, 현재 사용자 정보를 상태로 관리합니다. 로그인하지 않은 사용자에게는 로그인 폼을 표시합니다.

이메일/비밀번호 방식의 간단한 인증으로 시작하고, 필요에 따라 소셜 로그인(Google, GitHub)을 추가할 수 있습니다.`,codeExamples:[{language:"typescript",title:"Claude Code 프롬프트 결과 — AuthContext 핵심 로직",code:`// Claude Code 프롬프트:
// "Supabase Auth로 AuthContext를 만들어줘.
//  로그인, 회원가입, 로그아웃 함수와 현재 사용자 상태를 제공해줘."

import { createContext, useContext, useEffect, useState } from 'react';
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
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => setUser(session?.user ?? null)
    );
    return () => subscription.unsubscribe();
  }, []);

  // signIn, signUp, signOut 생략 (sourceFiles에 전체 코드 포함)

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
};`}],tips:['Supabase 대시보드에서 Email 인증의 "Confirm email" 옵션을 끄면 개발 중 편리합니다.',"onAuthStateChange의 구독은 반드시 cleanup 함수에서 해제하세요.",'Claude Code 프롬프트: "로그인 폼과 회원가입 폼을 하나의 컴포넌트로 만들어줘. 탭으로 전환하는 방식으로."']},{step:4,title:"채널 목록",description:"채널 목록 사이드바를 구현합니다.",content:`채널 목록은 채팅 앱의 왼쪽 사이드바에 표시됩니다. Supabase에서 channels 테이블의 데이터를 조회하고, 새 채널을 생성하는 기능을 구현합니다. 현재 선택된 채널을 하이라이트하여 사용자가 어떤 채널에 있는지 시각적으로 알 수 있게 합니다.

채널 목록도 Realtime으로 구독하면 다른 사용자가 채널을 생성했을 때 즉시 목록에 반영됩니다. 하지만 먼저 메시지 Realtime을 완성한 후에 채널 Realtime을 추가하는 것이 좋습니다. 복잡도를 단계적으로 높여가는 것이 디버깅에 유리합니다.

채널 생성 시 모달이나 인라인 폼을 사용할 수 있습니다. 채널 이름은 필수, 설명은 선택 입력으로 설계합니다.`,codeExamples:[{language:"typescript",title:"Claude Code 프롬프트 결과 — 채널 목록 핵심 로직",code:`// Claude Code 프롬프트:
// "채널 목록 사이드바 컴포넌트를 만들어줘.
//  채널 조회, 새 채널 생성, 채널 선택 기능이 필요해."

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import type { Channel } from '../../types';

interface ChannelListProps {
  selectedChannel: Channel | null;
  onSelectChannel: (channel: Channel) => void;
}

export default function ChannelList({ selectedChannel, onSelectChannel }: ChannelListProps) {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    loadChannels();
  }, []);

  async function loadChannels() {
    const { data } = await supabase
      .from('channels')
      .select('*')
      .order('created_at', { ascending: true });
    if (data) setChannels(data);
  }

  async function createChannel() {
    if (!newName.trim()) return;
    const { error } = await supabase
      .from('channels')
      .insert({ name: newName.trim() });
    if (!error) {
      setNewName('');
      loadChannels();
    }
  }

  return (
    <div className="channel-list">
      <h3>채널 목록</h3>
      <div className="channel-create">
        <input value={newName} onChange={e => setNewName(e.target.value)}
          placeholder="새 채널 이름" onKeyDown={e => e.key === 'Enter' && createChannel()} />
        <button onClick={createChannel}>+</button>
      </div>
      {channels.map(ch => (
        <div key={ch.id}
          className={\`channel-item \${selectedChannel?.id === ch.id ? 'active' : ''}\`}
          onClick={() => onSelectChannel(ch)}>
          # {ch.name}
        </div>
      ))}
    </div>
  );
}`}],tips:['채널이 없을 때 "채널을 만들어보세요" 같은 빈 상태 UI를 추가하면 UX가 좋아집니다.',"채널 목록 로딩 중에는 스켈레톤 UI를 표시하세요.",'Claude Code 프롬프트: "채널 목록에 로딩 상태와 빈 상태 UI도 추가해줘."']},{step:5,title:"메시지 구현",description:"메시지 전송/수신과 Realtime 구독을 구현합니다.",content:`채팅의 핵심인 메시지 전송과 수신을 구현합니다. 채널을 선택하면 해당 채널의 메시지를 시간순으로 불러오고, 새 메시지를 전송할 수 있는 입력 폼을 표시합니다.

메시지 전송은 Supabase의 insert를 사용합니다. 전송 후에는 Realtime 구독을 통해 자동으로 새 메시지가 UI에 반영되므로, 수동으로 목록을 새로고침할 필요가 없습니다. 이것이 Realtime의 핵심 장점입니다.

메시지 버블은 내가 보낸 메시지와 상대방 메시지를 시각적으로 구분합니다. 내 메시지는 오른쪽에 파란색으로, 상대방 메시지는 왼쪽에 회색으로 표시하는 것이 일반적입니다.`,codeExamples:[{language:"typescript",title:"Claude Code 프롬프트 결과 — 메시지 전송 핵심 로직",code:`// Claude Code 프롬프트:
// "ChatRoom 컴포넌트를 만들어줘. 메시지 조회, 전송, 스크롤 기능이 필요해.
//  Supabase Realtime으로 새 메시지를 실시간 수신해줘."

async function loadMessages(channelId: string) {
  const { data } = await supabase
    .from('messages')
    .select('*')
    .eq('channel_id', channelId)
    .order('created_at', { ascending: true });
  if (data) setMessages(data);
}

async function sendMessage() {
  if (!input.trim() || !channel || !user) return;
  const { error } = await supabase
    .from('messages')
    .insert({
      channel_id: channel.id,
      user_id: user.id,
      user_email: user.email!,
      content: input.trim(),
    });
  if (!error) setInput('');
}`}],tips:["메시지 전송 후 input을 즉시 비우면 사용자 경험이 좋아집니다.","전송 버튼과 Enter 키 모두 메시지 전송을 지원하세요.",'Claude Code 프롬프트: "메시지 전송 시 로딩 상태를 표시하고, 에러 발생 시 토스트 메시지를 보여줘."']},{step:6,title:"실시간 구독",description:"Supabase Realtime 채널 구독을 구현합니다.",content:`Supabase Realtime v2는 postgres_changes 이벤트를 통해 테이블의 INSERT, UPDATE, DELETE를 실시간으로 감지합니다. 채널을 선택할 때 해당 채널의 messages 테이블 변경을 구독하고, 채널을 변경하면 이전 구독을 해제합니다.

구독 패턴은 supabase.channel()로 채널 객체를 생성하고, .on()으로 이벤트 핸들러를 등록한 뒤, .subscribe()로 구독을 시작합니다. 컴포넌트가 언마운트되거나 채널이 변경되면 반드시 removeChannel()로 구독을 정리해야 합니다.

새 메시지가 도착하면 기존 메시지 배열에 추가하고, 화면을 최하단으로 자동 스크롤합니다. 이때 사용자가 이전 메시지를 읽고 있는 중이라면 자동 스크롤을 방지하는 로직도 고려해보세요.`,codeExamples:[{language:"typescript",title:"Supabase Realtime v2 구독 패턴",code:`// Claude Code 프롬프트:
// "Supabase Realtime v2로 메시지 실시간 구독을 구현해줘.
//  채널 변경 시 이전 구독 해제도 처리해줘."

useEffect(() => {
  if (!channel) return;

  // 기존 메시지 로드
  loadMessages(channel.id);

  // Realtime 구독
  const subscription = supabase
    .channel(\`messages:\${channel.id}\`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: \`channel_id=eq.\${channel.id}\`,
      },
      (payload) => {
        const newMessage = payload.new as Message;
        setMessages(prev => [...prev, newMessage]);
      }
    )
    .subscribe();

  // 클린업: 채널 변경 또는 언마운트 시 구독 해제
  return () => {
    supabase.removeChannel(subscription);
  };
}, [channel?.id]);`}],tips:["supabase.channel()의 이름은 고유해야 합니다. 채널 ID를 포함시키면 충돌을 방지할 수 있습니다.","구독 해제(removeChannel)를 빠뜨리면 메모리 누수와 중복 메시지가 발생합니다.","Supabase 대시보드 → Database → Replication에서 messages 테이블이 활성화되어 있는지 확인하세요.",'Claude Code 프롬프트: "Realtime 구독 상태를 콘솔에 로깅해서 디버깅할 수 있게 해줘."']},{step:7,title:"UI 완성",description:"채팅 버블, 온라인 표시, 스크롤 동작을 완성합니다.",content:`채팅 앱의 UI를 완성합니다. 메시지 버블은 발신자에 따라 좌우로 정렬하고, 색상을 구분합니다. 타임스탬프는 상대 시간("방금 전", "5분 전")으로 표시하면 가독성이 좋아집니다.

새 메시지가 도착하면 채팅 영역을 최하단으로 자동 스크롤합니다. useRef로 메시지 컨테이너의 scrollTop을 제어하고, 새 메시지 추가 시 scrollIntoView()를 호출합니다. 사용자가 위로 스크롤하여 이전 메시지를 보고 있을 때는 자동 스크롤을 비활성화하는 것이 좋습니다.

전체 레이아웃은 왼쪽 사이드바(채널 목록) + 오른쪽 메인 영역(채팅방)의 2칼럼 구조로 구성합니다. 반응형 디자인을 적용하여 모바일에서는 사이드바를 토글할 수 있게 합니다.`,codeExamples:[{language:"css",title:"Claude Code 프롬프트 결과 — 채팅 UI 핵심 스타일",code:`/* Claude Code 프롬프트:
   "채팅 앱 CSS를 만들어줘. 메시지 버블은 카카오톡 스타일로,
    사이드바 + 메인 영역 2칼럼 레이아웃으로 만들어줘." */

.chat-layout {
  display: flex;
  height: 100vh;
}

.channel-list {
  width: 260px;
  border-right: 1px solid #e2e8f0;
  background: #f8fafc;
  overflow-y: auto;
}

.chat-room {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.message-bubble {
  max-width: 70%;
  padding: 10px 14px;
  border-radius: 16px;
  margin-bottom: 8px;
  word-break: break-word;
}

.message-bubble.mine {
  margin-left: auto;
  background: #0046C8;
  color: white;
  border-bottom-right-radius: 4px;
}

.message-bubble.others {
  margin-right: auto;
  background: #e2e8f0;
  color: #1a202c;
  border-bottom-left-radius: 4px;
}`},{language:"typescript",title:"자동 스크롤 구현",code:`// 메시지 영역 하단 자동 스크롤
const messagesEndRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [messages]);

// JSX 내부
<div className="messages-container">
  {messages.map(msg => (
    <MessageBubble key={msg.id} message={msg} isMe={msg.user_id === user?.id} />
  ))}
  <div ref={messagesEndRef} />
</div>`}],tips:["메시지 버블의 border-radius를 비대칭으로 설정하면 말풍선 느낌이 납니다.",'스크롤 동작에 behavior: "smooth"를 추가하면 부드러운 스크롤이 됩니다.',"다크 모드를 지원하려면 CSS 변수를 활용하세요.",'Claude Code 프롬프트: "모바일에서 사이드바를 햄버거 메뉴로 토글할 수 있게 반응형 CSS를 추가해줘."']}],sourceFiles:[{filename:"package.json",language:"json",code:`{
  "name": "realtime-chat",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.49.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.4.0",
    "typescript": "^5.7.0",
    "vite": "^6.3.0"
  }
}`},{filename:"vite.config.ts",language:"typescript",code:`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});`},{filename:"src/lib/supabase.ts",language:"typescript",code:`import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Supabase 환경변수가 설정되지 않았습니다. ' +
    '.env 파일에 VITE_SUPABASE_URL과 VITE_SUPABASE_ANON_KEY를 추가하세요.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);`},{filename:"src/types.ts",language:"typescript",code:`export interface Channel {
  id: string;
  name: string;
  description: string | null;
  created_by: string;
  created_at: string;
}

export interface Message {
  id: string;
  channel_id: string;
  user_id: string;
  user_email: string;
  content: string;
  created_at: string;
}`},{filename:"src/App.tsx",language:"tsx",code:`import { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginForm from './components/Auth/LoginForm';
import ChannelList from './components/Chat/ChannelList';
import ChatRoom from './components/Chat/ChatRoom';
import type { Channel } from './types';
import './App.css';

function ChatApp() {
  const { user, loading, signOut } = useAuth();
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);

  if (loading) {
    return <div className="loading">로딩 중...</div>;
  }

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div className="chat-layout">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>실시간 채팅</h2>
          <div className="user-info">
            <span className="user-email">{user.email}</span>
            <button className="sign-out-btn" onClick={signOut}>
              로그아웃
            </button>
          </div>
        </div>
        <ChannelList
          selectedChannel={selectedChannel}
          onSelectChannel={setSelectedChannel}
        />
      </div>
      <div className="main-area">
        {selectedChannel ? (
          <ChatRoom channel={selectedChannel} />
        ) : (
          <div className="no-channel">
            <div className="no-channel-icon">💬</div>
            <h3>채널을 선택하세요</h3>
            <p>왼쪽 사이드바에서 채널을 선택하거나 새 채널을 만들어보세요.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ChatApp />
    </AuthProvider>
  );
}`},{filename:"src/App.css",language:"css",code:`/* ─── Reset & Base ─── */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Noto Sans KR', sans-serif;
  background: #f0f2f5;
  color: #1a202c;
}

/* ─── Loading ─── */
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 18px;
  color: #718096;
}

/* ─── Login Form ─── */
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #0046C8 0%, #0066ff 100%);
}

.login-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.login-card h2 {
  text-align: center;
  margin-bottom: 8px;
  color: #0046C8;
  font-size: 24px;
}

.login-card .subtitle {
  text-align: center;
  color: #718096;
  margin-bottom: 24px;
  font-size: 14px;
}

.login-card .tabs {
  display: flex;
  gap: 0;
  margin-bottom: 24px;
  border-bottom: 2px solid #e2e8f0;
}

.login-card .tabs button {
  flex: 1;
  padding: 10px;
  border: none;
  background: none;
  font-size: 15px;
  font-weight: 600;
  color: #a0aec0;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: all 0.2s;
}

.login-card .tabs button.active {
  color: #0046C8;
  border-bottom-color: #0046C8;
}

.login-card form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.login-card input {
  padding: 12px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s;
}

.login-card input:focus {
  border-color: #0046C8;
}

.login-card .submit-btn {
  padding: 12px;
  background: #0046C8;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.login-card .submit-btn:hover {
  background: #0038a0;
}

.login-card .submit-btn:disabled {
  background: #a0aec0;
  cursor: not-allowed;
}

.login-card .error-msg {
  color: #e53e3e;
  font-size: 13px;
  text-align: center;
}

/* ─── Chat Layout ─── */
.chat-layout {
  display: flex;
  height: 100vh;
}

/* ─── Sidebar ─── */
.sidebar {
  width: 280px;
  background: #ffffff;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: 16px;
  border-bottom: 1px solid #e2e8f0;
}

.sidebar-header h2 {
  font-size: 18px;
  color: #0046C8;
  margin-bottom: 8px;
}

.user-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.user-email {
  font-size: 12px;
  color: #718096;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sign-out-btn {
  padding: 4px 10px;
  background: none;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 12px;
  color: #718096;
  cursor: pointer;
  white-space: nowrap;
}

.sign-out-btn:hover {
  background: #f7fafc;
  color: #e53e3e;
  border-color: #e53e3e;
}

/* ─── Channel List ─── */
.channel-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

.channel-create {
  display: flex;
  gap: 6px;
  padding: 8px;
  margin-bottom: 4px;
}

.channel-create input {
  flex: 1;
  padding: 8px 10px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 13px;
  outline: none;
}

.channel-create input:focus {
  border-color: #0046C8;
}

.channel-create button {
  padding: 8px 12px;
  background: #0046C8;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  line-height: 1;
}

.channel-create button:hover {
  background: #0038a0;
}

.channel-item {
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #4a5568;
  transition: background 0.15s;
}

.channel-item:hover {
  background: #f7fafc;
}

.channel-item.active {
  background: #ebf4ff;
  color: #0046C8;
  font-weight: 600;
}

.channel-empty {
  text-align: center;
  padding: 32px 16px;
  color: #a0aec0;
  font-size: 13px;
}

/* ─── Main Area ─── */
.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f7f8fa;
}

.no-channel {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #a0aec0;
}

.no-channel-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.no-channel h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: #718096;
}

.no-channel p {
  font-size: 14px;
}

/* ─── Chat Room ─── */
.chat-room {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.chat-room-header {
  padding: 14px 20px;
  background: white;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.chat-room-header h3 {
  font-size: 16px;
  color: #2d3748;
}

.chat-room-header .channel-hash {
  color: #0046C8;
  font-weight: bold;
}

/* ─── Messages Container ─── */
.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* ─── Message Bubble ─── */
.message-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 70%;
}

.message-wrapper.mine {
  align-self: flex-end;
  align-items: flex-end;
}

.message-wrapper.others {
  align-self: flex-start;
  align-items: flex-start;
}

.message-sender {
  font-size: 11px;
  color: #718096;
  margin-bottom: 2px;
  padding: 0 4px;
}

.message-bubble {
  padding: 10px 14px;
  border-radius: 16px;
  font-size: 14px;
  line-height: 1.5;
  word-break: break-word;
}

.message-bubble.mine {
  background: #0046C8;
  color: white;
  border-bottom-right-radius: 4px;
}

.message-bubble.others {
  background: #e2e8f0;
  color: #1a202c;
  border-bottom-left-radius: 4px;
}

.message-time {
  font-size: 10px;
  color: #a0aec0;
  margin-top: 2px;
  padding: 0 4px;
}

/* ─── Message Input ─── */
.message-input-area {
  padding: 12px 20px;
  background: white;
  border-top: 1px solid #e2e8f0;
}

.message-input-form {
  display: flex;
  gap: 8px;
}

.message-input-form input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.message-input-form input:focus {
  border-color: #0046C8;
}

.message-input-form button {
  padding: 12px 24px;
  background: #0046C8;
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.message-input-form button:hover {
  background: #0038a0;
}

.message-input-form button:disabled {
  background: #a0aec0;
  cursor: not-allowed;
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    position: absolute;
    z-index: 10;
    height: 100vh;
  }

  .message-wrapper {
    max-width: 85%;
  }
}`},{filename:"src/contexts/AuthContext.tsx",language:"tsx",code:`import { createContext, useContext, useEffect, useState } from 'react';
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
    // 현재 세션 확인
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // 인증 상태 변경 감지
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function signIn(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  }

  async function signUp(email: string, password: string) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth는 AuthProvider 내부에서만 사용할 수 있습니다.');
  }
  return context;
}`},{filename:"src/components/Auth/LoginForm.tsx",language:"tsx",code:`import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function LoginForm() {
  const { signIn, signUp } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await signIn(email, password);
      } else {
        await signUp(email, password);
        setError('');
        alert('회원가입이 완료되었습니다. 로그인해주세요.');
        setIsLogin(true);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : '오류가 발생했습니다.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>실시간 채팅</h2>
        <p className="subtitle">Supabase Realtime 기반 채팅 앱</p>

        <div className="tabs">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => { setIsLogin(true); setError(''); }}
          >
            로그인
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => { setIsLogin(false); setError(''); }}
          >
            회원가입
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="비밀번호 (6자 이상)"
            value={password}
            onChange={e => setPassword(e.target.value)}
            minLength={6}
            required
          />
          {error && <p className="error-msg">{error}</p>}
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? '처리 중...' : isLogin ? '로그인' : '회원가입'}
          </button>
        </form>
      </div>
    </div>
  );
}`},{filename:"src/components/Chat/ChannelList.tsx",language:"tsx",code:`import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import type { Channel } from '../../types';

interface ChannelListProps {
  selectedChannel: Channel | null;
  onSelectChannel: (channel: Channel) => void;
}

export default function ChannelList({
  selectedChannel,
  onSelectChannel,
}: ChannelListProps) {
  const { user } = useAuth();
  const [channels, setChannels] = useState<Channel[]>([]);
  const [newChannelName, setNewChannelName] = useState('');
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    loadChannels();

    // 채널 목록 실시간 구독
    const subscription = supabase
      .channel('channels-list')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'channels' },
        (payload) => {
          const newChannel = payload.new as Channel;
          setChannels(prev => [...prev, newChannel]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  async function loadChannels() {
    const { data, error } = await supabase
      .from('channels')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      console.error('채널 목록 로드 실패:', error.message);
      return;
    }
    if (data) setChannels(data);
  }

  async function createChannel() {
    if (!newChannelName.trim() || !user) return;
    setCreating(true);

    const { error } = await supabase.from('channels').insert({
      name: newChannelName.trim(),
      created_by: user.id,
    });

    if (error) {
      console.error('채널 생성 실패:', error.message);
      alert('채널 생성에 실패했습니다.');
    } else {
      setNewChannelName('');
    }
    setCreating(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      createChannel();
    }
  }

  return (
    <div className="channel-list">
      <div className="channel-create">
        <input
          type="text"
          placeholder="새 채널 이름"
          value={newChannelName}
          onChange={e => setNewChannelName(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={creating}
        />
        <button onClick={createChannel} disabled={creating || !newChannelName.trim()}>
          +
        </button>
      </div>

      {channels.length === 0 ? (
        <div className="channel-empty">
          채널이 없습니다.<br />새 채널을 만들어보세요.
        </div>
      ) : (
        channels.map(channel => (
          <div
            key={channel.id}
            className={\`channel-item \${selectedChannel?.id === channel.id ? 'active' : ''}\`}
            onClick={() => onSelectChannel(channel)}
          >
            # {channel.name}
          </div>
        ))
      )}
    </div>
  );
}`},{filename:"src/components/Chat/ChatRoom.tsx",language:"tsx",code:`import { useEffect, useRef, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import MessageBubble from './MessageBubble';
import type { Channel, Message } from '../../types';

interface ChatRoomProps {
  channel: Channel;
}

export default function ChatRoom({ channel }: ChatRoomProps) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 메시지 로드 + Realtime 구독
  useEffect(() => {
    setMessages([]);
    loadMessages();

    const subscription = supabase
      .channel(\`messages:\${channel.id}\`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: \`channel_id=eq.\${channel.id}\`,
        },
        (payload) => {
          const newMessage = payload.new as Message;
          setMessages(prev => {
            // 중복 방지
            if (prev.some(m => m.id === newMessage.id)) return prev;
            return [...prev, newMessage];
          });
        }
      )
      .subscribe((status) => {
        console.log(\`Realtime 구독 상태 [\${channel.name}]:\`, status);
      });

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [channel.id]);

  // 새 메시지 도착 시 자동 스크롤
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function loadMessages() {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('channel_id', channel.id)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('메시지 로드 실패:', error.message);
      return;
    }
    if (data) setMessages(data);
  }

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || !user || sending) return;

    setSending(true);
    const { error } = await supabase.from('messages').insert({
      channel_id: channel.id,
      user_id: user.id,
      user_email: user.email ?? 'unknown',
      content: input.trim(),
    });

    if (error) {
      console.error('메시지 전송 실패:', error.message);
      alert('메시지 전송에 실패했습니다.');
    } else {
      setInput('');
    }
    setSending(false);
  }

  return (
    <div className="chat-room">
      <div className="chat-room-header">
        <span className="channel-hash">#</span>
        <h3>{channel.name}</h3>
      </div>

      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="no-channel">
            <p>아직 메시지가 없습니다. 첫 메시지를 보내보세요!</p>
          </div>
        ) : (
          messages.map(msg => (
            <MessageBubble
              key={msg.id}
              message={msg}
              isMe={msg.user_id === user?.id}
            />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="message-input-area">
        <form className="message-input-form" onSubmit={sendMessage}>
          <input
            type="text"
            placeholder={\`#\${channel.name}에 메시지 보내기\`}
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={sending}
            autoFocus
          />
          <button type="submit" disabled={sending || !input.trim()}>
            {sending ? '전송 중...' : '전송'}
          </button>
        </form>
      </div>
    </div>
  );
}`},{filename:"src/components/Chat/MessageBubble.tsx",language:"tsx",code:`import type { Message } from '../../types';

interface MessageBubbleProps {
  message: Message;
  isMe: boolean;
}

function formatTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);

  if (diffMin < 1) return '방금 전';
  if (diffMin < 60) return \`\${diffMin}분 전\`;

  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) return \`\${diffHour}시간 전\`;

  return date.toLocaleDateString('ko-KR', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function getDisplayName(email: string): string {
  return email.split('@')[0];
}

export default function MessageBubble({ message, isMe }: MessageBubbleProps) {
  return (
    <div className={\`message-wrapper \${isMe ? 'mine' : 'others'}\`}>
      {!isMe && (
        <span className="message-sender">
          {getDisplayName(message.user_email)}
        </span>
      )}
      <div className={\`message-bubble \${isMe ? 'mine' : 'others'}\`}>
        {message.content}
      </div>
      <span className="message-time">{formatTime(message.created_at)}</span>
    </div>
  );
}`},{filename:"supabase/schema.sql",language:"sql",code:`-- ============================================
-- 실시간 채팅 앱 — 데이터베이스 스키마
-- ============================================

-- 1. channels 테이블
CREATE TABLE IF NOT EXISTS channels (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. messages 테이블
CREATE TABLE IF NOT EXISTS messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  channel_id UUID NOT NULL REFERENCES channels(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id),
  user_email TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. 인덱스
CREATE INDEX IF NOT EXISTS idx_messages_channel_id
  ON messages(channel_id);
CREATE INDEX IF NOT EXISTS idx_messages_created_at
  ON messages(created_at);
CREATE INDEX IF NOT EXISTS idx_messages_channel_created
  ON messages(channel_id, created_at);

-- 4. RLS 활성화
ALTER TABLE channels ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- 5. channels RLS 정책
CREATE POLICY "channels_select_authenticated"
  ON channels FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "channels_insert_authenticated"
  ON channels FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "channels_update_owner"
  ON channels FOR UPDATE
  TO authenticated
  USING (auth.uid() = created_by);

CREATE POLICY "channels_delete_owner"
  ON channels FOR DELETE
  TO authenticated
  USING (auth.uid() = created_by);

-- 6. messages RLS 정책
CREATE POLICY "messages_select_authenticated"
  ON messages FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "messages_insert_authenticated"
  ON messages FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "messages_delete_own"
  ON messages FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- 7. Realtime 설정
ALTER TABLE messages REPLICA IDENTITY FULL;
ALTER TABLE channels REPLICA IDENTITY FULL;

-- Supabase Realtime publication에 테이블 추가
-- (이미 추가되어 있으면 에러 무시)
DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE messages;
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE channels;
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;`}]},s=[e,t,a];export{s as i};
