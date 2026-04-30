const e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="760" height="320">
  <defs>
    <marker id="ah1" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#0046C8"/></marker>
  </defs>
  <rect x="1" y="1" width="758" height="318" rx="12" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="2"/>
  <text x="380" y="28" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" font-weight="700" fill="#111827">풀스택 CRUD 아키텍처</text>
  <!-- 프론트엔드 그룹 -->
  <text x="130" y="55" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">프론트엔드</text>
  <rect x="40" y="65" width="180" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="130" y="92" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">React + TypeScript</text>
  <rect x="40" y="125" width="180" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="130" y="152" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">React Router (페이지)</text>
  <rect x="40" y="185" width="180" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="130" y="212" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">AuthContext (인증상태)</text>
  <!-- 화살표: 프론트 -> Supabase Client -->
  <line x1="220" y1="87" x2="300" y2="87" stroke="#0046C8" stroke-width="2" marker-end="url(#ah1)"/>
  <text x="260" y="80" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">API 호출</text>
  <!-- Supabase Client -->
  <text x="390" y="55" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">클라이언트 SDK</text>
  <rect x="300" y="65" width="180" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="390" y="92" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">Supabase Client</text>
  <!-- 화살표: Client -> Auth -->
  <line x1="390" y1="109" x2="390" y2="145" stroke="#0046C8" stroke-width="2" marker-end="url(#ah1)"/>
  <!-- Supabase 백엔드 그룹 -->
  <text x="390" y="140" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">Supabase 백엔드</text>
  <rect x="300" y="150" width="180" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="390" y="177" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">Auth (인증/JWT)</text>
  <!-- 화살표: Client -> DB -->
  <line x1="480" y1="87" x2="560" y2="87" stroke="#0046C8" stroke-width="2" marker-end="url(#ah1)"/>
  <text x="520" y="80" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">쿼리</text>
  <!-- 데이터베이스 -->
  <text x="650" y="55" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">데이터베이스</text>
  <rect x="560" y="65" width="180" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="650" y="92" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">PostgreSQL (posts)</text>
  <rect x="560" y="125" width="180" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="650" y="152" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">RLS 정책</text>
  <!-- CRUD 흐름 하단 -->
  <text x="380" y="230" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">CRUD 데이터 흐름</text>
  <rect x="40" y="245" width="130" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="105" y="270" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="12" fill="#111827">CREATE (작성)</text>
  <line x1="170" y1="265" x2="210" y2="265" stroke="#0046C8" stroke-width="2" marker-end="url(#ah1)"/>
  <rect x="210" y="245" width="130" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="275" y="270" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="12" fill="#111827">READ (조회)</text>
  <line x1="340" y1="265" x2="380" y2="265" stroke="#0046C8" stroke-width="2" marker-end="url(#ah1)"/>
  <rect x="380" y="245" width="130" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="445" y="270" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="12" fill="#111827">UPDATE (수정)</text>
  <line x1="510" y1="265" x2="550" y2="265" stroke="#0046C8" stroke-width="2" marker-end="url(#ah1)"/>
  <rect x="550" y="245" width="130" height="40" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="615" y="270" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="12" fill="#111827">DELETE (삭제)</text>
  <text x="380" y="305" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">모든 작업은 RLS 정책에 의해 사용자 권한이 검증됩니다</text>
</svg>`,t={id:"fullstack-crud",slug:"fullstack-crud",title:"풀스택 CRUD 앱",description:"React + Supabase로 인증, RLS, CRUD를 갖춘 풀스택 앱.",level:"intermediate",duration:"5-6시간",techStack:["React","Supabase","Cursor","TypeScript"],outcomes:["Supabase Auth 구현","RLS 정책 설정","풀스택 CRUD"],diagram:e,steps:[{step:1,title:"Supabase 프로젝트 설정",description:"Supabase 프로젝트를 생성하고 테이블을 만듭니다.",content:`Supabase는 오픈소스 Firebase 대안으로, PostgreSQL 데이터베이스, 인증, 실시간 구독, 스토리지를 제공하는 BaaS(Backend as a Service)입니다. 이 단계에서는 Supabase 대시보드(https://supabase.com)에 접속하여 새 프로젝트를 생성합니다. 프로젝트 이름, 데이터베이스 비밀번호, 리전(ap-northeast-1 권장)을 설정합니다.

프로젝트 생성 후 SQL Editor에서 posts 테이블을 만듭니다. 테이블에는 id(uuid, PK, default gen_random_uuid()), title(text, NOT NULL), content(text), user_id(uuid, REFERENCES auth.users(id)), created_at(timestamptz, default now()) 컬럼을 추가합니다. user_id는 auth.users 테이블과 외래키로 연결하여 어떤 사용자가 작성한 글인지 추적합니다.

Cursor에게 다음과 같이 프롬프트할 수 있습니다: "Supabase SQL Editor에서 실행할 posts 테이블 생성 SQL을 작성해줘. id는 uuid PK, title은 text NOT NULL, content는 text, user_id는 auth.users 참조, created_at은 timestamptz 기본값 now()로 해줘."

주의사항: 프로젝트 생성 시 데이터베이스 비밀번호를 반드시 안전한 곳에 저장하세요. 나중에 확인할 수 없습니다. 또한 Settings > API에서 프로젝트 URL과 anon key를 복사해두세요. 이 값들은 프론트엔드에서 Supabase 클라이언트를 초기화할 때 필요합니다.`,codeExamples:[{language:"sql",title:"posts 테이블 생성 SQL",code:`-- posts 테이블 생성
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
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
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();`}],tips:["Supabase 프로젝트 생성 후 초기화에 2-3분 소요됩니다. 기다리는 동안 프론트엔드 프로젝트 폴더를 준비하세요.","Settings > API 페이지에서 URL과 anon key를 .env 파일에 바로 복사해두면 편리합니다.",'SQL Editor의 "Quickstart" 템플릿을 참고하면 테이블 생성 패턴을 빠르게 익힐 수 있습니다.']},{step:2,title:"React 프로젝트 초기화",description:"Cursor에서 React + TypeScript 프로젝트를 생성합니다.",content:`Cursor AI 에디터를 열고 Vite 기반의 React + TypeScript 프로젝트를 생성합니다. Vite는 빠른 개발 서버와 HMR(Hot Module Replacement)을 제공하므로 개발 생산성이 높습니다. 터미널에서 npm create vite@latest my-crud-app -- --template react-ts 명령을 실행하거나, Cursor의 AI 기능을 활용하여 프로젝트 구조를 자동 생성할 수 있습니다.

프로젝트 생성 후 @supabase/supabase-js 패키지를 설치합니다. 이 패키지는 Supabase의 모든 기능(Auth, Database, Storage, Realtime)에 접근할 수 있는 클라이언트 SDK입니다. 또한 react-router-dom(페이지 라우팅)도 함께 설치합니다.

Cursor에게 다음과 같이 요청하세요: "src/lib/supabase.ts 파일을 만들어줘. 환경변수 VITE_SUPABASE_URL과 VITE_SUPABASE_ANON_KEY를 사용해서 Supabase 클라이언트를 초기화하는 코드를 작성해줘. TypeScript 타입도 포함해줘."

예상 결과: src/lib/supabase.ts에 createClient 함수로 초기화된 supabase 인스턴스가 생성됩니다. .env 파일에 VITE_SUPABASE_URL과 VITE_SUPABASE_ANON_KEY가 설정됩니다. 이 클라이언트는 앱 전체에서 import하여 사용합니다.

주의: .env 파일은 반드시 .gitignore에 포함시키세요. Supabase anon key는 클라이언트에서 사용해도 안전하지만(RLS로 보호), 개인 프로젝트 정보가 노출되는 것을 방지해야 합니다.`,codeExamples:[{language:"typescript",title:"Supabase 클라이언트 설정 (src/lib/supabase.ts)",code:`import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL 또는 Anon Key가 설정되지 않았습니다.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);`},{language:"typescript",title:"Post 타입 정의 (src/types/post.ts)",code:`export interface Post {
  id: string;
  title: string;
  content: string | null;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface PostInput {
  title: string;
  content: string;
}`}],tips:["Vite 환경변수는 반드시 VITE_ 접두사를 붙여야 클라이언트에서 접근 가능합니다.","supabase.ts 파일에서 환경변수 누락 시 throw Error를 추가하면 디버깅이 편해집니다.",'TypeScript strict 모드를 켜두면 null/undefined 처리를 미리 잡아줍니다 (tsconfig.json에서 "strict": true).']},{step:3,title:"인증 구현",description:"로그인/회원가입 기능을 만듭니다.",content:`Supabase Auth를 활용하여 이메일/비밀번호 기반의 로그인과 회원가입 기능을 구현합니다. 먼저 AuthContext를 만들어 전역 인증 상태를 관리합니다. useContext를 통해 어디서든 현재 로그인 사용자 정보에 접근할 수 있도록 합니다.

Cursor에게 다음과 같이 프롬프트하세요: "React Context로 AuthContext를 만들어줘. Supabase Auth를 사용해서 로그인 상태를 관리하고, 로그인/회원가입/로그아웃 함수를 제공해줘. onAuthStateChange로 세션 변화를 감지하고, 로딩 상태도 관리해줘."

회원가입 시 supabase.auth.signUp()을 호출하고, 로그인 시 supabase.auth.signInWithPassword()를 사용합니다. 세션 상태 변화는 supabase.auth.onAuthStateChange() 리스너로 감지합니다. 이 리스너는 useEffect 안에서 설정하고, 클린업 함수에서 구독을 해제해야 메모리 누수를 방지합니다.

Google OAuth를 추가하려면 Supabase 대시보드 > Authentication > Providers에서 Google을 활성화하고 Client ID/Secret을 설정합니다. 프론트엔드에서는 supabase.auth.signInWithOAuth({ provider: 'google' })을 호출합니다.

주의사항: onAuthStateChange에서 사용자 정보를 가져올 때 event가 'SIGNED_IN'인 경우와 'TOKEN_REFRESHED'인 경우를 모두 처리해야 합니다. 또한, 초기 로딩 시 getSession()으로 기존 세션을 확인하는 것도 중요합니다.`,codeExamples:[{language:"typescript",title:"AuthContext (src/contexts/AuthContext.tsx)",code:`import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { supabase } from '../lib/supabase';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 기존 세션 확인
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // 세션 변화 감지
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};`}],tips:["onAuthStateChange의 cleanup(unsubscribe)을 반드시 useEffect return에서 호출하세요. 빠뜨리면 메모리 누수가 발생합니다.","getSession()과 onAuthStateChange를 모두 사용해야 합니다. getSession만 쓰면 세션 갱신을 감지 못하고, onAuthStateChange만 쓰면 초기 로딩이 느립니다.","로그인 에러 메시지를 사용자에게 보여줄 때 error.message를 그대로 쓰면 영어로 나옵니다. 한글 매핑 객체를 만들어 두면 UX가 좋아집니다."]},{step:4,title:"CRUD 기능",description:"게시글 작성, 조회, 수정, 삭제를 구현합니다.",content:`Supabase 클라이언트를 사용하여 posts 테이블에 대한 CRUD(Create, Read, Update, Delete) 작업을 구현합니다. 각 작업은 커스텀 훅으로 분리하여 재사용성을 높입니다.

Cursor에게 요청하세요: "posts 테이블에 대한 CRUD 커스텀 훅을 만들어줘. usePosts(전체 조회), useCreatePost, useUpdatePost, useDeletePost 4개의 훅이 필요해. 각 훅에서 로딩 상태와 에러 처리를 포함해줘. TypeScript로 작성해줘."

Create(작성): supabase.from('posts').insert({ title, content, user_id }) 형태로 새 게시글을 삽입합니다. user_id는 현재 로그인된 사용자의 ID를 사용합니다. Read(조회): supabase.from('posts').select('*').order('created_at', { ascending: false })로 최신순 조회합니다. Update(수정): supabase.from('posts').update({ title, content }).eq('id', postId)로 특정 게시글을 수정합니다. Delete(삭제): supabase.from('posts').delete().eq('id', postId)로 삭제합니다.

예상 결과: 각 CRUD 함수가 독립적인 커스텀 훅으로 분리되어 컴포넌트에서 깔끔하게 사용할 수 있습니다. 에러 발생 시 사용자에게 토스트 알림으로 피드백을 제공합니다.

흔한 실수: insert 시 .select()를 붙이면 생성된 레코드를 바로 반환받을 수 있습니다. 빠뜨리면 null이 반환되어 목록 갱신이 안 됩니다. 또한 delete().eq() 호출 시 eq 조건을 빠뜨리면 테이블 전체가 삭제될 수 있으니 주의하세요.`,codeExamples:[{language:"typescript",title:"CRUD 커스텀 훅 (src/hooks/usePosts.ts)",code:`import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) setError(error.message);
    else setPosts(data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  return { posts, loading, error, refetch: fetchPosts };
}

export function useCreatePost() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const createPost = async (input: PostInput) => {
    if (!user) throw new Error('로그인이 필요합니다');
    setLoading(true);
    const { data, error } = await supabase
      .from('posts')
      .insert({ ...input, user_id: user.id })
      .select()
      .single();
    setLoading(false);
    if (error) throw error;
    return data as Post;
  };

  return { createPost, loading };
}

export function useDeletePost() {
  const deletePost = async (id: string) => {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id);
    if (error) throw error;
  };
  return { deletePost };
}`}],tips:["insert() 뒤에 .select().single()을 붙이면 생성된 데이터를 바로 반환받아 상태를 업데이트할 수 있습니다.","delete()나 update()에는 반드시 .eq() 조건을 붙이세요. 조건 없이 실행하면 전체 행이 영향받습니다.","낙관적 업데이트(Optimistic Update)를 적용하면 UX가 좋아집니다. 서버 응답 전에 로컬 상태를 먼저 변경하고, 실패 시 롤백합니다."]},{step:5,title:"RLS 정책 설정",description:"Row Level Security로 데이터 접근을 제어합니다.",content:`Row Level Security(RLS)는 PostgreSQL의 행 단위 접근 제어 기능입니다. Supabase에서 RLS를 활성화하면, 모든 클라이언트 요청은 정책(Policy)에 의해 필터링됩니다. 이것은 백엔드 API 없이도 데이터 보안을 구현할 수 있는 핵심 기능입니다.

Cursor에게 요청하세요: "posts 테이블에 RLS 정책을 설정하는 SQL을 작성해줘. 조건: 1) 누구나 모든 게시글을 조회(SELECT)할 수 있음, 2) 로그인 사용자만 새 게시글을 작성(INSERT)할 수 있음, 3) 본인이 작성한 게시글만 수정(UPDATE)/삭제(DELETE)할 수 있음."

RLS를 활성화하면 기본적으로 모든 접근이 차단됩니다. 따라서 명시적으로 허용하는 정책을 추가해야 합니다. auth.uid() 함수는 현재 인증된 사용자의 UUID를 반환하며, 이를 user_id 컬럼과 비교하여 본인 데이터만 접근하도록 제한합니다.

예상 결과: 로그인하지 않은 사용자는 게시글을 읽을 수만 있습니다. 로그인한 사용자는 글을 작성할 수 있지만, 다른 사용자의 글을 수정하거나 삭제하려고 하면 빈 결과가 반환됩니다. 별도의 백엔드 로직 없이 DB 레벨에서 보안이 보장됩니다.

디버깅 팁: RLS 정책이 제대로 동작하지 않으면 Supabase 대시보드 > SQL Editor에서 직접 쿼리를 실행해 보세요. 또한, 정책에 WITH CHECK 절을 빠뜨리면 INSERT가 실패할 수 있습니다.`,codeExamples:[{language:"sql",title:"RLS 정책 SQL",code:`-- RLS 활성화
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- 누구나 조회 가능
CREATE POLICY "posts_select_all" ON posts
  FOR SELECT USING (true);

-- 로그인 사용자만 작성 가능
CREATE POLICY "posts_insert_auth" ON posts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 본인 글만 수정 가능
CREATE POLICY "posts_update_own" ON posts
  FOR UPDATE USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 본인 글만 삭제 가능
CREATE POLICY "posts_delete_own" ON posts
  FOR DELETE USING (auth.uid() = user_id);`}],tips:["RLS를 활성화한 뒤 정책을 추가하지 않으면 모든 접근이 차단됩니다. 테이블이 갑자기 비어 보인다면 정책 누락을 확인하세요.","INSERT 정책에는 USING이 아닌 WITH CHECK를 사용합니다. USING은 기존 행에 대한 조건, WITH CHECK는 새로 삽입되는 행에 대한 조건입니다.","Supabase 대시보드 > Authentication > Policies 탭에서 GUI로도 정책을 추가할 수 있어 SQL이 익숙하지 않으면 활용하세요."]},{step:6,title:"리스트 & 상세 페이지",description:"게시글 목록과 상세 페이지를 만듭니다.",content:`React Router를 사용하여 게시글 목록 페이지와 상세 페이지를 구현합니다. 목록 페이지에서는 모든 게시글의 제목, 작성일, 작성자를 표시하고, 각 게시글을 클릭하면 상세 페이지로 이동합니다.

Cursor에게 요청하세요: "React Router v6를 사용해서 게시글 목록(/posts)과 상세(/posts/:id) 페이지를 만들어줘. 목록에서 제목을 클릭하면 상세 페이지로 이동하고, 상세 페이지에서 수정/삭제 버튼은 본인 글일 때만 보여줘. 뒤로가기 버튼도 포함해줘."

목록 페이지에는 usePosts 훅으로 데이터를 가져오고, 각 항목은 Link 컴포넌트로 감싸 상세 페이지로 라우팅합니다. 상세 페이지에서는 useParams()로 URL의 id 파라미터를 읽고, supabase.from('posts').select('*').eq('id', id).single()로 단일 게시글을 조회합니다.

예상 결과: /posts 경로에서 게시글 목록이 카드 형태로 표시됩니다. 각 카드를 클릭하면 /posts/{id} 경로로 이동하여 전체 내용이 표시됩니다. 본인 글에만 수정/삭제 버튼이 노출됩니다.

흔한 실수: useParams()의 id가 string | undefined 타입이므로 undefined 체크를 해야 합니다. 또한, 존재하지 않는 ID로 접근 시 404 처리를 추가하세요.`,codeExamples:[{language:"typescript",title:"게시글 상세 페이지 (src/pages/PostDetail.tsx)",code:`import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { useDeletePost } from '../hooks/usePosts';

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { deletePost } = useDeletePost();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data }) => {
        setPost(data);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = async () => {
    if (!post || !confirm('정말 삭제하시겠습니까?')) return;
    await deletePost(post.id);
    navigate('/posts');
  };

  if (loading) return <p>로딩 중...</p>;
  if (!post) return <p>게시글을 찾을 수 없습니다.</p>;

  const isOwner = user?.id === post.user_id;

  return (
    <article>
      <h1>{post.title}</h1>
      <time>{new Date(post.created_at).toLocaleDateString('ko-KR')}</time>
      <div>{post.content}</div>
      {isOwner && (
        <div>
          <button onClick={() => navigate(\`/posts/\${post.id}/edit\`)}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
      )}
      <button onClick={() => navigate('/posts')}>목록으로</button>
    </article>
  );
}`}],tips:["useParams의 반환값은 항상 string | undefined입니다. Non-null assertion(!) 대신 early return으로 처리하는 것이 안전합니다.","상세 페이지에서 수정/삭제 버튼은 user?.id === post.user_id 조건으로 본인 글만 노출하세요. RLS가 있어도 UI에서도 제한하는 것이 좋은 UX입니다.",'navigate(-1) 대신 navigate("/posts")처럼 명시적 경로를 사용하면, 외부에서 직접 접근했을 때도 안전하게 동작합니다.']},{step:7,title:"페이지네이션",description:"게시글 목록에 페이지네이션을 추가합니다.",content:`게시글이 많아지면 한 번에 모든 데이터를 로드하는 것은 비효율적입니다. Supabase의 range() 메서드를 활용하여 서버사이드 페이지네이션을 구현합니다. 이 방식은 필요한 만큼의 데이터만 DB에서 가져오므로 네트워크 트래픽과 렌더링 성능이 개선됩니다.

Cursor에게 요청하세요: "Supabase range() 쿼리를 사용해서 페이지네이션을 구현해줘. 한 페이지에 10개씩 표시하고, 전체 개수를 count로 가져와서 페이지 번호 버튼을 만들어줘. URL 쿼리 파라미터(?page=2)와 동기화해줘."

range(from, to) 메서드는 SQL의 OFFSET/LIMIT과 동일합니다. 예를 들어 range(0, 9)는 처음 10개, range(10, 19)는 다음 10개를 반환합니다. 전체 개수는 .select('*', { count: 'exact', head: true })로 별도 쿼리합니다.

예상 결과: 목록 하단에 페이지 번호 버튼(1, 2, 3 ...)이 표시됩니다. 페이지를 이동하면 URL이 /posts?page=2로 변경되고, 해당 페이지의 게시글만 로드됩니다. 브라우저 뒤로가기로도 이전 페이지로 돌아갈 수 있습니다.

주의사항: count 쿼리와 데이터 쿼리를 별도로 실행하면 동시성 문제가 생길 수 있습니다. Supabase의 select('*', { count: 'exact' })를 사용하면 데이터와 count를 한 번에 가져올 수 있습니다.`,codeExamples:[{language:"typescript",title:"페이지네이션 훅 (src/hooks/usePaginatedPosts.ts)",code:`import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const PAGE_SIZE = 10;

export function usePaginatedPosts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || '1');
  const [posts, setPosts] = useState<Post[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    setLoading(true);
    supabase
      .from('posts')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(from, to)
      .then(({ data, count }) => {
        setPosts(data ?? []);
        setTotal(count ?? 0);
        setLoading(false);
      });
  }, [page]);

  const totalPages = Math.ceil(total / PAGE_SIZE);
  const goToPage = (p: number) => setSearchParams({ page: String(p) });

  return { posts, loading, page, totalPages, goToPage };
}`}],tips:['select("*", { count: "exact" })를 사용하면 데이터와 전체 개수를 한 번의 쿼리로 가져옵니다. 별도 count 쿼리보다 효율적입니다.',"URL 쿼리 파라미터와 페이지 상태를 동기화하면 브라우저 뒤로가기/앞으로가기가 자연스럽게 동작합니다.","range(from, to)의 to는 포함(inclusive)입니다. 10개씩 보여주려면 range(0, 9)로 설정하세요."]},{step:8,title:"배포",description:"GitHub Pages로 배포합니다.",content:`완성된 프로젝트를 빌드하고 GitHub Pages를 통해 배포합니다. Vite 프로젝트는 npm run build 명령으로 dist 폴더에 최적화된 정적 파일을 생성합니다. gh-pages 패키지를 사용하면 간편하게 GitHub Pages에 배포할 수 있습니다.

Cursor에게 요청하세요: "이 Vite React 프로젝트를 GitHub Pages로 배포하는 설정을 해줘. vite.config.ts의 base 설정, gh-pages 패키지 설치, package.json의 deploy 스크립트를 포함해줘."

배포 전 체크리스트: 1) vite.config.ts에 base: '/리포지토리명/' 설정, 2) .env.production에 Supabase 환경변수 설정, 3) Supabase 대시보드 > Authentication > URL Configuration에서 배포 URL을 허용 URL에 추가, 4) npm run build로 빌드 테스트.

예상 결과: npx gh-pages -d dist 명령으로 GitHub Pages에 배포됩니다. https://username.github.io/repo-name/ 또는 커스텀 도메인으로 접근할 수 있습니다.

주의사항: SPA(Single Page Application)를 GitHub Pages에 배포할 때 404 문제가 발생할 수 있습니다. public/404.html에 리다이렉트 스크립트를 추가하거나, HashRouter를 사용하여 해결할 수 있습니다. 또한 환경변수가 빌드 시점에 번들에 포함되므로, .env.production 파일을 올바르게 설정했는지 확인하세요.`,codeExamples:[{language:"typescript",title:"Vite 배포 설정 (vite.config.ts)",code:`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/my-crud-app/',  // GitHub 리포지토리 이름
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});`}],tips:["GitHub Pages에서 SPA 라우팅이 안 되면 public/404.html을 index.html과 동일하게 만들어 두세요.","배포 후 Supabase 대시보드 > Authentication > URL Configuration에서 배포 URL을 Redirect URLs에 추가해야 OAuth 로그인이 동작합니다.","npm run build 후 npx serve dist로 로컬에서 프로덕션 빌드를 미리 테스트할 수 있습니다."]}]},s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="760" height="320">
  <defs>
    <marker id="ah2" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#0046C8"/></marker>
  </defs>
  <rect x="1" y="1" width="758" height="318" rx="12" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="2"/>
  <text x="380" y="28" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" font-weight="700" fill="#111827">API 대시보드 데이터 파이프라인</text>
  <!-- 외부 API 그룹 -->
  <text x="90" y="55" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">외부 데이터 소스</text>
  <rect x="20" y="65" width="140" height="36" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="90" y="88" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">날씨 API</text>
  <rect x="20" y="110" width="140" height="36" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="90" y="133" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">환율 API</text>
  <rect x="20" y="155" width="140" height="36" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="90" y="178" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">뉴스 API</text>
  <!-- 화살표: API -> 페칭 레이어 -->
  <line x1="160" y1="87" x2="220" y2="87" stroke="#0046C8" stroke-width="2" marker-end="url(#ah2)"/>
  <line x1="160" y1="128" x2="220" y2="128" stroke="#0046C8" stroke-width="2" marker-end="url(#ah2)"/>
  <line x1="160" y1="173" x2="220" y2="173" stroke="#0046C8" stroke-width="2" marker-end="url(#ah2)"/>
  <!-- 페칭 레이어 -->
  <text x="300" y="55" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">데이터 페칭</text>
  <rect x="220" y="65" width="160" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="300" y="90" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">fetch / axios</text>
  <text x="300" y="108" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">커스텀 훅</text>
  <rect x="220" y="135" width="160" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="300" y="160" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">React Query</text>
  <text x="300" y="178" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">캐싱 + 자동갱신</text>
  <!-- 화살표: 페칭 -> 상태 -->
  <line x1="380" y1="128" x2="440" y2="128" stroke="#0046C8" stroke-width="2" marker-end="url(#ah2)"/>
  <text x="410" y="120" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">JSON</text>
  <!-- React 상태 -->
  <text x="520" y="55" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">상태 관리</text>
  <rect x="440" y="65" width="160" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="520" y="90" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">React State</text>
  <text x="520" y="108" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">필터/기간 선택</text>
  <!-- 화살표: 상태 -> 시각화 -->
  <line x1="600" y1="93" x2="640" y2="93" stroke="#0046C8" stroke-width="2" marker-end="url(#ah2)"/>
  <!-- Chart.js 시각화 -->
  <text x="700" y="55" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">시각화</text>
  <rect x="640" y="65" width="100" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="690" y="90" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">Chart.js</text>
  <text x="690" y="108" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">차트 렌더링</text>
  <!-- 위젯 그리드 하단 -->
  <text x="380" y="220" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">대시보드 위젯 그리드 레이아웃</text>
  <rect x="20" y="235" width="170" height="65" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="105" y="260" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">KPI 카드</text>
  <text x="105" y="278" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">핵심 지표 숫자</text>
  <rect x="205" y="235" width="170" height="65" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="290" y="260" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">라인 차트</text>
  <text x="290" y="278" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">추이 데이터</text>
  <rect x="390" y="235" width="170" height="65" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="475" y="260" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">바 차트</text>
  <text x="475" y="278" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">비교 데이터</text>
  <rect x="575" y="235" width="165" height="65" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="657" y="260" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">파이 차트</text>
  <text x="657" y="278" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">비율 데이터</text>
</svg>`,a={id:"api-dashboard",slug:"api-dashboard",title:"API 대시보드",description:"외부 API를 연동하여 데이터를 시각화하는 대시보드.",level:"intermediate",duration:"5-6시간",techStack:["React","Cursor","Chart.js","REST API"],outcomes:["API 연동","데이터 시각화","대시보드 레이아웃"],diagram:s,steps:[{step:1,title:"대시보드 설계",description:"표시할 데이터와 레이아웃을 기획합니다.",content:`대시보드를 만들기 전에 어떤 데이터를 표시할지, 어떤 레이아웃으로 배치할지 기획하는 단계입니다. 좋은 대시보드는 한눈에 핵심 정보를 파악할 수 있어야 합니다. 먼저 사용할 공개 API를 선택합니다. 추천 API: OpenWeatherMap(날씨), ExchangeRate-API(환율), NewsAPI(뉴스).

Cursor에게 요청하세요: "대시보드 와이어프레임을 구성할 컴포넌트 구조를 제안해줘. 상단에 KPI 카드 4개, 중간에 라인 차트와 바 차트 2열, 하단에 데이터 테이블을 배치하는 레이아웃이야. CSS Grid 기반으로 반응형도 고려해줘."

대시보드 레이아웃 설계 원칙: 1) 가장 중요한 지표는 상단에 배치 (KPI 카드), 2) 추이를 보여주는 차트는 중간에 배치, 3) 상세 데이터는 하단 테이블로 제공, 4) 필터/기간 선택은 차트 상단에 배치하여 맥락을 제공합니다.

예상 결과: 컴포넌트 구조가 Dashboard(최상위) > KPIRow > KPICard, ChartRow > LineChart/BarChart, DataTable 형태로 정리됩니다. 각 위젯은 독립적으로 데이터를 페칭하고 렌더링합니다.

주의사항: 무료 API는 대부분 호출 횟수 제한(Rate Limit)이 있습니다. 개발 중에는 목 데이터(mock data)를 먼저 사용하고, 완성 후에 실제 API로 교체하면 효율적입니다.`,tips:["먼저 mock 데이터로 레이아웃을 완성한 후 실제 API를 연결하면 개발 속도가 빨라집니다.","무료 API의 Rate Limit을 확인하세요. OpenWeatherMap 무료는 분당 60회, NewsAPI는 일 100회입니다.","Figma나 종이 스케치로 와이어프레임을 먼저 그려두면 구현 시 방향을 잃지 않습니다."]},{step:2,title:"API 연동",description:"외부 API를 호출하고 데이터를 가져옵니다.",content:`외부 REST API를 호출하여 데이터를 가져오는 로직을 구현합니다. fetch API 또는 axios 라이브러리를 사용합니다. 각 API 호출은 커스텀 훅으로 분리하여 로딩/에러/데이터 상태를 관리합니다.

Cursor에게 요청하세요: "OpenWeatherMap API를 호출하는 커스텀 훅 useWeather를 만들어줘. TypeScript로 응답 타입을 정의하고, 로딩/에러/데이터 상태를 관리해줘. API 키는 환경변수에서 가져오고, 에러 시 재시도 로직도 포함해줘."

API 호출 시 고려사항: 1) API 키는 반드시 환경변수로 관리 (.env 파일), 2) 응답 데이터의 TypeScript 타입을 미리 정의, 3) 로딩 상태와 에러 상태를 UI에 반영, 4) 불필요한 재호출을 방지하기 위한 캐싱 전략. React Query(@tanstack/react-query)를 사용하면 캐싱, 자동 갱신, 에러 재시도를 자동으로 처리합니다.

예상 결과: useWeather(), useExchangeRate() 같은 커스텀 훅이 만들어지고, 각각 { data, loading, error } 형태로 반환합니다. 컴포넌트에서는 훅만 호출하면 데이터를 바로 사용할 수 있습니다.

디버깅 팁: CORS 에러가 발생하면 브라우저 콘솔을 확인하세요. 대부분의 공개 API는 CORS를 허용하지만, 그렇지 않은 경우 프록시 서버를 거쳐야 합니다. Vite의 proxy 설정(vite.config.ts)을 활용할 수 있습니다.`,codeExamples:[{language:"typescript",title:"API 커스텀 훅 (src/hooks/useWeather.ts)",code:`import { useState, useEffect } from 'react';

interface WeatherData {
  city: string;
  temp: number;
  humidity: number;
  description: string;
  icon: string;
}

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export function useWeather(city: string = 'Seoul') {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          \`\${BASE_URL}?q=\${city}&appid=\${API_KEY}&units=metric&lang=kr\`
        );
        if (!res.ok) throw new Error(\`API 오류: \${res.status}\`);
        const json = await res.json();
        setData({
          city: json.name,
          temp: Math.round(json.main.temp),
          humidity: json.main.humidity,
          description: json.weather[0].description,
          icon: json.weather[0].icon,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : '알 수 없는 오류');
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [city]);

  return { data, loading, error };
}`},{language:"typescript",title:"React Query 적용 예시",code:`import { useQuery } from '@tanstack/react-query';

interface ExchangeRate {
  base: string;
  rates: Record<string, number>;
  date: string;
}

async function fetchExchangeRate(base = 'USD'): Promise<ExchangeRate> {
  const res = await fetch(
    \`https://api.exchangerate-api.com/v4/latest/\${base}\`
  );
  if (!res.ok) throw new Error('환율 API 호출 실패');
  return res.json();
}

export function useExchangeRate(base = 'USD') {
  return useQuery({
    queryKey: ['exchangeRate', base],
    queryFn: () => fetchExchangeRate(base),
    staleTime: 5 * 60 * 1000, // 5분 캐싱
    retry: 3,
    refetchInterval: 10 * 60 * 1000, // 10분마다 자동 갱신
  });
}`}],tips:["CORS 에러가 발생하면 vite.config.ts의 server.proxy 설정으로 개발 환경에서 우회할 수 있습니다.","API 응답 타입은 실제 응답 JSON을 보고 정의하세요. JSON to TypeScript 변환 도구(quicktype.io)를 활용하면 빠릅니다.","React Query를 사용하면 캐싱, 자동 재시도, 백그라운드 갱신이 자동으로 처리되어 직접 구현할 필요가 없습니다."]},{step:3,title:"카드 위젯",description:"핵심 지표를 카드로 표시합니다.",content:`KPI(Key Performance Indicator) 카드는 대시보드에서 가장 먼저 눈에 들어오는 요소입니다. 핵심 숫자를 크고 명확하게 표시하여 사용자가 현재 상태를 즉시 파악할 수 있도록 합니다. 각 카드에는 지표 이름, 현재 값, 변화율(전일 대비 등), 아이콘을 포함합니다.

Cursor에게 요청하세요: "재사용 가능한 KPICard 컴포넌트를 만들어줘. props로 title(지표명), value(현재값), change(변화율, +/-), icon(아이콘), color(테마색)를 받아. 변화율이 양수면 초록색 위쪽 화살표, 음수면 빨간색 아래쪽 화살표를 표시해줘. TypeScript로 작성하고, CSS는 Tailwind 또는 CSS Module을 사용해줘."

좋은 KPI 카드 디자인 원칙: 1) 숫자는 가장 큰 폰트(2rem 이상)로 표시, 2) 단위(%, 원, 도)를 명확히 표시, 3) 변화 방향을 색상과 아이콘으로 직관적으로 표현, 4) 카드 간 여백을 충분히 확보하여 가독성 유지.

예상 결과: 대시보드 상단에 4개의 KPI 카드가 가로로 배치됩니다. 각 카드에는 "현재 기온 24도 (+2도)", "환율 1,350원 (-15원)" 같은 정보가 표시됩니다. 모바일에서는 2열 또는 1열로 자동 변환됩니다.

흔한 실수: 숫자 포매팅을 잊지 마세요. toLocaleString('ko-KR')로 천단위 콤마를 추가하고, 소수점 자릿수를 toFixed()로 통일합니다.`,codeExamples:[{language:"typescript",title:"KPI 카드 컴포넌트 (src/components/KPICard.tsx)",code:`interface KPICardProps {
  title: string;
  value: string | number;
  unit?: string;
  change?: number;
  icon?: string;
  color?: string;
}

export default function KPICard({
  title, value, unit = '', change, icon = '📊', color = '#0046C8'
}: KPICardProps) {
  const isPositive = change !== undefined && change >= 0;
  const changeColor = isPositive ? '#16A34A' : '#DC2626';
  const changeArrow = isPositive ? '▲' : '▼';

  return (
    <div style={{
      background: '#fff',
      borderRadius: 12,
      padding: '20px 24px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      borderLeft: \`4px solid \${color}\`,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 14, color: '#6B7280' }}>{title}</span>
        <span style={{ fontSize: 24 }}>{icon}</span>
      </div>
      <div style={{ fontSize: 28, fontWeight: 700, marginTop: 8, color: '#111827' }}>
        {typeof value === 'number' ? value.toLocaleString('ko-KR') : value}
        {unit && <span style={{ fontSize: 14, color: '#6B7280', marginLeft: 4 }}>{unit}</span>}
      </div>
      {change !== undefined && (
        <div style={{ fontSize: 13, color: changeColor, marginTop: 4 }}>
          {changeArrow} {Math.abs(change).toFixed(1)}%
          <span style={{ color: '#9CA3AF', marginLeft: 6 }}>전일 대비</span>
        </div>
      )}
    </div>
  );
}`}],tips:['숫자는 toLocaleString("ko-KR")으로 포매팅하면 천단위 콤마가 자동으로 붙습니다.',"카드 왼쪽에 색상 바(borderLeft)를 넣으면 각 지표를 시각적으로 구분하기 쉽습니다.","변화율 화살표의 색상은 데이터 성격에 따라 달라질 수 있습니다. 기온 상승은 빨간색이지만, 매출 상승은 초록색입니다."]},{step:4,title:"차트 구현",description:"Chart.js로 데이터를 시각화합니다.",content:`Chart.js는 HTML5 Canvas 기반의 차트 라이브러리로, React에서는 react-chartjs-2 래퍼를 사용합니다. 라인 차트(추이), 바 차트(비교), 파이/도넛 차트(비율)를 구현하여 데이터를 시각적으로 표현합니다.

Cursor에게 요청하세요: "react-chartjs-2와 chart.js를 설치하고, 라인 차트 컴포넌트를 만들어줘. 최근 7일간의 기온 변화를 표시하는 차트야. 반응형으로 만들고, 툴팁에 날짜와 온도를 표시해줘. TypeScript로 작성해줘."

Chart.js 설정 핵심: 1) chart.js에서 필요한 요소들을 register 해야 합니다 (CategoryScale, LinearScale, PointElement 등), 2) 반응형은 options.responsive = true로 설정, 3) 한글 폰트 적용은 Chart.defaults.font.family로 설정, 4) 툴팁 커스터마이징은 options.plugins.tooltip.callbacks에서 합니다.

예상 결과: 중간 영역에 라인 차트와 바 차트가 나란히 배치됩니다. 마우스를 올리면 툴팁으로 상세 데이터가 표시됩니다. 창 크기에 따라 차트가 자동으로 리사이즈됩니다.

주의사항: Chart.js v4는 Tree-shaking을 지원하므로 필요한 컴포넌트만 import하면 번들 크기를 줄일 수 있습니다. 하지만 처음에는 chart.js/auto를 import하여 모든 기능을 한 번에 등록하는 것이 편리합니다.`,codeExamples:[{language:"typescript",title:"라인 차트 컴포넌트 (src/components/LineChart.tsx)",code:`import { Line } from 'react-chartjs-2';
import {
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

ChartJS.register(
  CategoryScale, LinearScale, PointElement,
  LineElement, Title, Tooltip, Legend, Filler
);

interface LineChartProps {
  labels: string[];
  data: number[];
  title?: string;
  color?: string;
}

export default function LineChartWidget({
  labels, data, title = '추이', color = '#0046C8'
}: LineChartProps) {
  const chartData = {
    labels,
    datasets: [{
      label: title,
      data,
      borderColor: color,
      backgroundColor: color + '20',
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 6,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: any) => \`\${ctx.parsed.y.toLocaleString('ko-KR')}\`,
        },
      },
    },
    scales: {
      y: { beginAtZero: false, grid: { color: '#F3F4F6' } },
      x: { grid: { display: false } },
    },
  };

  return (
    <div style={{ height: 280, padding: 16, background: '#fff', borderRadius: 12 }}>
      <h3 style={{ fontSize: 14, color: '#374151', marginBottom: 12 }}>{title}</h3>
      <Line data={chartData} options={options} />
    </div>
  );
}`},{language:"typescript",title:"바 차트 컴포넌트 (src/components/BarChart.tsx)",code:`import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale, LinearScale,
  BarElement, Title, Tooltip, Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  labels: string[];
  datasets: { label: string; data: number[]; color: string }[];
  title?: string;
}

export default function BarChartWidget({ labels, datasets, title = '비교' }: BarChartProps) {
  const chartData = {
    labels,
    datasets: datasets.map(ds => ({
      label: ds.label,
      data: ds.data,
      backgroundColor: ds.color + 'CC',
      borderColor: ds.color,
      borderWidth: 1,
      borderRadius: 4,
    })),
  };

  return (
    <div style={{ height: 280, padding: 16, background: '#fff', borderRadius: 12 }}>
      <h3 style={{ fontSize: 14, color: '#374151', marginBottom: 12 }}>{title}</h3>
      <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
}`}],tips:['Chart.js 요소를 register하지 않으면 "X is not a registered element" 에러가 발생합니다. 처음에는 chart.js/auto를 import하면 모든 요소가 자동 등록됩니다.',"maintainAspectRatio: false로 설정하고 부모 div의 height를 지정하면 원하는 크기로 차트를 만들 수 있습니다.","차트 색상에 투명도를 추가하려면 HEX 코드 뒤에 알파값을 붙이세요 (예: #0046C820은 투명도 12.5%)."]},{step:5,title:"필터 & 기간 선택",description:"데이터 필터링 기능을 추가합니다.",content:`사용자가 원하는 조건으로 데이터를 필터링할 수 있는 기능을 추가합니다. 날짜 범위 선택기(Date Range Picker), 카테고리 드롭다운, 검색 필터 등을 구현합니다. 필터 상태가 변경되면 차트와 카드가 자동으로 업데이트되어야 합니다.

Cursor에게 요청하세요: "대시보드 상단에 필터 바를 만들어줘. 기간 선택(오늘/7일/30일/직접 입력), 도시 선택(서울/부산/제주) 드롭다운을 포함해. 필터 상태를 Context 또는 URL 쿼리 파라미터로 관리하고, 변경 시 모든 위젯이 새 데이터를 로드하도록 해줘."

필터 구현 패턴: 1) 필터 상태를 상위 컴포넌트(Dashboard)에서 관리, 2) 필터 값을 각 데이터 페칭 훅에 파라미터로 전달, 3) 훅 내부에서 dependency array에 필터 값을 포함하여 자동 re-fetch, 4) 디바운스(debounce)를 적용하여 빈번한 API 호출을 방지.

예상 결과: 대시보드 상단에 필터 바가 표시됩니다. "7일"을 선택하면 모든 차트가 최근 7일 데이터로 업데이트됩니다. "서울"을 선택하면 서울의 날씨 데이터가 표시됩니다. URL에 ?period=7d&city=seoul 형태로 상태가 반영됩니다.

흔한 문제: 필터를 변경할 때마다 모든 위젯이 동시에 로딩 상태가 되면 화면이 깜빡입니다. 이전 데이터를 유지하면서 백그라운드에서 갱신하는 패턴(stale-while-revalidate)을 적용하세요. React Query의 keepPreviousData 옵션이 이를 지원합니다.`,codeExamples:[{language:"typescript",title:"필터 컴포넌트 (src/components/FilterBar.tsx)",code:`import { useState } from 'react';

type Period = '1d' | '7d' | '30d' | 'custom';

interface FilterBarProps {
  onPeriodChange: (period: Period) => void;
  onCityChange: (city: string) => void;
}

const PERIODS: { value: Period; label: string }[] = [
  { value: '1d', label: '오늘' },
  { value: '7d', label: '7일' },
  { value: '30d', label: '30일' },
  { value: 'custom', label: '직접입력' },
];

const CITIES = ['서울', '부산', '인천', '대구', '제주'];

export default function FilterBar({ onPeriodChange, onCityChange }: FilterBarProps) {
  const [activePeriod, setActivePeriod] = useState<Period>('7d');

  const handlePeriod = (period: Period) => {
    setActivePeriod(period);
    onPeriodChange(period);
  };

  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
      <div style={{ display: 'flex', gap: 4 }}>
        {PERIODS.map(p => (
          <button
            key={p.value}
            onClick={() => handlePeriod(p.value)}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: 'none',
              background: activePeriod === p.value ? '#0046C8' : '#F3F4F6',
              color: activePeriod === p.value ? '#fff' : '#374151',
              cursor: 'pointer',
              fontSize: 13,
            }}
          >
            {p.label}
          </button>
        ))}
      </div>
      <select
        onChange={e => onCityChange(e.target.value)}
        style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #D1D5DB', fontSize: 13 }}
      >
        {CITIES.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
}`}],tips:["텍스트 입력 필터에는 디바운스(300ms)를 적용하세요. 매 키스트로크마다 API를 호출하면 성능이 저하됩니다.","React Query의 keepPreviousData: true 옵션을 쓰면 필터 변경 시 이전 데이터를 유지하면서 새 데이터를 로드하여 깜빡임을 방지합니다.","필터 상태를 URL 쿼리 파라미터와 동기화하면 페이지 공유 시에도 동일한 뷰를 보여줄 수 있습니다."]},{step:6,title:"자동 갱신",description:"주기적으로 데이터를 새로고침합니다.",content:`대시보드의 핵심 가치는 최신 데이터를 보여주는 것입니다. 사용자가 수동으로 새로고침하지 않아도 일정 주기로 데이터가 자동 업데이트되도록 구현합니다. setInterval, React Query의 refetchInterval, 또는 Web Socket을 활용할 수 있습니다.

Cursor에게 요청하세요: "대시보드에 자동 갱신 기능을 추가해줘. 기본 5분마다 데이터를 새로 가져오고, 사용자가 갱신 주기를 선택할 수 있게 해줘(1분/5분/10분/수동). 마지막 갱신 시각도 표시해줘. React Query의 refetchInterval을 사용해줘."

자동 갱신 구현 방법 비교: 1) setInterval + useEffect: 직접 구현하지만 cleanup과 에러 처리를 신경써야 합니다. 2) React Query refetchInterval: 가장 간편하고, 탭이 비활성일 때 자동으로 멈춥니다. 3) 브라우저 visibilitychange 이벤트와 결합하면 탭 복귀 시 즉시 갱신할 수 있습니다.

예상 결과: 대시보드 우측 상단에 "마지막 갱신: 14:30:25"와 갱신 주기 선택 드롭다운이 표시됩니다. 선택한 주기마다 모든 위젯이 새 데이터로 업데이트되고, 갱신 시각이 갱신됩니다.

주의사항: 무료 API의 Rate Limit을 고려하여 갱신 주기를 적절히 설정하세요. 또한, 갱신 중에 사용자가 차트를 조작하고 있으면 차트가 갑자기 변하여 UX가 나빠질 수 있습니다. 로딩 인디케이터를 미묘하게(예: 상단 프로그레스 바) 표시하는 것이 좋습니다.`,codeExamples:[{language:"typescript",title:"자동 갱신 훅 (src/hooks/useAutoRefresh.ts)",code:`import { useState, useEffect, useCallback } from 'react';

type RefreshInterval = 60000 | 300000 | 600000 | 0; // 1분, 5분, 10분, 수동

export function useAutoRefresh(fetchFn: () => Promise<void>) {
  const [interval, setRefreshInterval] = useState<RefreshInterval>(300000);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [refreshing, setRefreshing] = useState(false);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await fetchFn();
      setLastUpdated(new Date());
    } finally {
      setRefreshing(false);
    }
  }, [fetchFn]);

  useEffect(() => {
    if (interval === 0) return; // 수동 모드
    const timer = setInterval(refresh, interval);
    return () => clearInterval(timer);
  }, [interval, refresh]);

  // 탭이 다시 활성화되면 즉시 갱신
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') refresh();
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [refresh]);

  return {
    interval,
    setRefreshInterval,
    lastUpdated,
    refreshing,
    manualRefresh: refresh,
  };
}`}],tips:["React Query의 refetchInterval 옵션을 사용하면 setInterval을 직접 관리할 필요 없이 자동 갱신을 구현할 수 있습니다.","document.visibilitychange 이벤트를 활용하면 사용자가 다른 탭에서 돌아올 때 즉시 최신 데이터를 보여줄 수 있습니다.","갱신 중인 상태는 전체 로딩 스피너 대신 상단에 얇은 프로그레스 바로 표시하면 UX가 자연스럽습니다."]},{step:7,title:"반응형 & 완성",description:"모바일에서도 잘 보이도록 합니다.",content:`CSS Grid 또는 Flexbox를 사용하여 대시보드 레이아웃을 반응형으로 만듭니다. 데스크탑에서는 2-4열, 태블릿에서는 2열, 모바일에서는 1열로 자동 변환되어야 합니다. 각 위젯(카드, 차트)이 화면 크기에 맞게 리사이즈됩니다.

Cursor에게 요청하세요: "대시보드 레이아웃을 CSS Grid로 반응형으로 만들어줘. KPI 카드는 데스크탑 4열/태블릿 2열/모바일 1열, 차트는 데스크탑 2열/모바일 1열로 배치해줘. 미디어 쿼리 breakpoint는 768px과 1024px로 설정해줘."

반응형 체크포인트: 1) KPI 카드가 모바일에서 가로 스크롤 없이 표시되는지, 2) 차트가 작은 화면에서 찌그러지지 않는지 (Chart.js responsive: true 확인), 3) 필터 바가 모바일에서 줄바꿈되거나 드롭다운으로 변환되는지, 4) 터치 기기에서 차트 툴팁이 정상 동작하는지.

최종 점검: 브라우저 개발자 도구(F12)의 반응형 모드로 iPhone SE(375px), iPad(768px), 랩탑(1024px), 데스크탑(1440px)에서 레이아웃을 확인합니다. Lighthouse 성능 점수도 확인하여 80점 이상을 목표로 합니다.

완성 후 다듬기: 로딩 스켈레톤 추가, 에러 바운더리(ErrorBoundary) 적용, 다크 모드 지원, 키보드 접근성 확인을 하면 프로덕션 수준의 대시보드가 됩니다.`,codeExamples:[{language:"typescript",title:"반응형 대시보드 레이아웃 (src/components/DashboardLayout.tsx)",code:`import type { ReactNode } from 'react';

interface DashboardLayoutProps {
  kpiCards: ReactNode;
  charts: ReactNode;
  table?: ReactNode;
}

export default function DashboardLayout({ kpiCards, charts, table }: DashboardLayoutProps) {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 16px' }}>
      {/* KPI 카드 그리드: 4열 -> 2열 -> 1열 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 16,
        marginBottom: 24,
      }}>
        {kpiCards}
      </div>

      {/* 차트 그리드: 2열 -> 1열 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: 16,
        marginBottom: 24,
      }}>
        {charts}
      </div>

      {/* 테이블: 전체 폭 */}
      {table && (
        <div style={{
          background: '#fff',
          borderRadius: 12,
          padding: 16,
          overflowX: 'auto',
        }}>
          {table}
        </div>
      )}
    </div>
  );
}`}],tips:["CSS Grid의 auto-fit + minmax 패턴을 사용하면 미디어 쿼리 없이도 자연스러운 반응형 그리드를 만들 수 있습니다.","Chart.js의 responsive: true와 maintainAspectRatio: false를 함께 사용하면 부모 컨테이너에 맞게 차트가 리사이즈됩니다.","모바일에서 데이터 테이블은 overflowX: auto를 적용하여 가로 스크롤을 허용하세요."]}]},i=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="760" height="320">
  <defs>
    <marker id="ah3" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#0046C8"/></marker>
    <marker id="ah3r" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="10 0, 0 3.5, 10 7" fill="#0046C8"/></marker>
  </defs>
  <rect x="1" y="1" width="758" height="318" rx="12" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="2"/>
  <text x="380" y="28" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" font-weight="700" fill="#111827">실시간 채팅 아키텍처</text>
  <!-- 클라이언트 A -->
  <text x="100" y="55" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">클라이언트 A</text>
  <rect x="20" y="65" width="160" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="100" y="92" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">React 채팅 UI</text>
  <rect x="20" y="120" width="160" height="36" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="100" y="143" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="12" fill="#111827">메시지 입력/표시</text>
  <!-- 양방향 화살표: A <-> Supabase -->
  <line x1="180" y1="87" x2="280" y2="87" stroke="#0046C8" stroke-width="2" marker-end="url(#ah3)"/>
  <line x1="280" y1="100" x2="180" y2="100" stroke="#0046C8" stroke-width="2" marker-end="url(#ah3r)"/>
  <text x="230" y="78" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#4B5563">INSERT</text>
  <text x="230" y="115" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#4B5563">Realtime 구독</text>
  <!-- Supabase 중앙 -->
  <text x="380" y="55" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">Supabase 백엔드</text>
  <rect x="280" y="65" width="200" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="92" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">Supabase Realtime</text>
  <rect x="280" y="120" width="200" height="36" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="143" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="12" fill="#111827">WebSocket + Presence</text>
  <!-- 양방향 화살표: Supabase <-> B -->
  <line x1="480" y1="87" x2="580" y2="87" stroke="#0046C8" stroke-width="2" marker-end="url(#ah3)"/>
  <line x1="580" y1="100" x2="480" y2="100" stroke="#0046C8" stroke-width="2" marker-end="url(#ah3r)"/>
  <text x="530" y="78" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#4B5563">브로드캐스트</text>
  <text x="530" y="115" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#4B5563">INSERT</text>
  <!-- 클라이언트 B -->
  <text x="660" y="55" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">클라이언트 B</text>
  <rect x="580" y="65" width="160" height="44" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="660" y="92" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#111827">React 채팅 UI</text>
  <rect x="580" y="120" width="160" height="36" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="660" y="143" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="12" fill="#111827">메시지 입력/표시</text>
  <!-- DB 테이블 하단 -->
  <text x="380" y="185" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">데이터베이스 테이블</text>
  <rect x="40" y="198" width="210" height="100" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="145" y="220" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" font-weight="600" fill="#111827">channels 테이블</text>
  <text x="145" y="240" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">id (uuid PK)</text>
  <text x="145" y="256" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">name, created_by</text>
  <text x="145" y="272" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">created_at</text>
  <line x1="250" y1="248" x2="290" y2="248" stroke="#0046C8" stroke-width="2" marker-end="url(#ah3)"/>
  <text x="270" y="242" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#4B5563">1:N</text>
  <rect x="290" y="198" width="210" height="100" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="395" y="220" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" font-weight="600" fill="#111827">messages 테이블</text>
  <text x="395" y="240" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">id, channel_id (FK)</text>
  <text x="395" y="256" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">user_id, content</text>
  <text x="395" y="272" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">created_at</text>
  <!-- Presence -->
  <rect x="540" y="198" width="200" height="100" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="640" y="220" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" font-weight="600" fill="#111827">Presence 상태</text>
  <text x="640" y="240" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">온라인 사용자 목록</text>
  <text x="640" y="256" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">입력 중 표시</text>
  <text x="640" y="272" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#4B5563">마지막 접속 시각</text>
</svg>`,n={id:"realtime-chat",slug:"realtime-chat",title:"실시간 채팅 앱",description:"Supabase Realtime을 활용한 실시간 채팅 앱.",level:"intermediate",duration:"6-7시간",techStack:["React","Supabase Realtime","Cursor","TypeScript"],outcomes:["실시간 데이터 동기화","채널 시스템","메시지 관리"],diagram:i,steps:[{step:1,title:"DB 설계",description:"채팅 테이블을 설계합니다.",content:`채팅 앱의 핵심 데이터 모델은 채널(channels)과 메시지(messages)입니다. channels 테이블은 채팅방 정보를 저장하고, messages 테이블은 각 채팅방의 메시지를 저장합니다. 두 테이블은 channel_id 외래키로 1:N 관계를 형성합니다.

Cursor에게 요청하세요: "Supabase에서 채팅 앱용 DB 스키마를 설계해줘. channels 테이블(id, name, description, created_by, created_at)과 messages 테이블(id, channel_id FK, user_id FK, content, created_at)을 만들어줘. RLS 정책도 함께 작성해줘. 실시간 구독을 위해 messages 테이블의 REPLICA IDENTITY를 FULL로 설정해줘."

Supabase Realtime이 INSERT 이벤트를 감지하려면 테이블의 replication을 활성화해야 합니다. Supabase 대시보드 > Database > Replication에서 messages 테이블을 활성화하거나, SQL로 ALTER TABLE messages REPLICA IDENTITY FULL을 실행합니다.

예상 결과: channels 테이블과 messages 테이블이 생성되고, 적절한 RLS 정책이 적용됩니다. 로그인한 사용자만 메시지를 보내고 읽을 수 있으며, 채널 생성은 인증된 사용자만 가능합니다.

주의사항: REPLICA IDENTITY FULL 설정을 빠뜨리면 Realtime 구독에서 변경된 행의 전체 데이터를 받을 수 없습니다. 특히 UPDATE/DELETE 이벤트에서 old 데이터에 접근할 수 없게 됩니다.`,codeExamples:[{language:"sql",title:"채팅 DB 스키마",code:`-- 채널 테이블
CREATE TABLE channels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT DEFAULT '',
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 메시지 테이블
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  channel_id UUID NOT NULL REFERENCES channels(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 실시간 구독을 위한 REPLICA IDENTITY 설정
ALTER TABLE messages REPLICA IDENTITY FULL;

-- 인덱스: 채널별 메시지 조회 성능
CREATE INDEX idx_messages_channel ON messages(channel_id, created_at);

-- RLS 활성화
ALTER TABLE channels ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- 채널: 누구나 조회, 로그인 사용자만 생성
CREATE POLICY "channels_select" ON channels FOR SELECT USING (true);
CREATE POLICY "channels_insert" ON channels FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- 메시지: 로그인 사용자만 조회/작성
CREATE POLICY "messages_select" ON messages FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY "messages_insert" ON messages FOR INSERT WITH CHECK (auth.uid() = user_id);`}],tips:["messages 테이블에 REPLICA IDENTITY FULL을 설정해야 Realtime 구독에서 전체 행 데이터를 받을 수 있습니다.","channel_id + created_at 복합 인덱스를 추가하면 채널별 메시지 조회 성능이 크게 향상됩니다.","Supabase 대시보드 > Database > Replication에서 messages 테이블이 활성화되어 있는지 반드시 확인하세요."]},{step:2,title:"인증 설정",description:"Supabase Auth로 사용자 인증을 구현합니다.",content:`채팅 앱에서 인증은 필수입니다. 누가 메시지를 보냈는지 식별하고, RLS로 데이터 접근을 제어하기 위해서입니다. 풀스택 CRUD 앱과 동일하게 AuthContext를 설정하되, 채팅 앱에 맞는 추가 기능(프로필 이름, 아바타)을 포함합니다.

Cursor에게 요청하세요: "Supabase Auth를 사용한 AuthContext를 만들어줘. 로그인/회원가입/로그아웃 기능, 그리고 사용자의 display_name을 관리하는 기능도 포함해줘. 회원가입 시 display_name을 user_metadata에 저장해줘."

로그인 후 사용자의 표시 이름(display_name)은 Supabase Auth의 user_metadata에 저장합니다. signUp 시 options.data에 display_name을 포함하면 됩니다. 이 값은 session.user.user_metadata.display_name으로 접근할 수 있습니다.

예상 결과: 로그인/회원가입 페이지가 만들어지고, 로그인하지 않은 사용자는 채팅 페이지에 접근할 수 없습니다. 로그인 후 상단에 사용자 이름이 표시되고 로그아웃 버튼이 나타납니다.

주의사항: user_metadata는 클라이언트에서 직접 수정 가능하므로 민감한 정보(role 등)는 저장하지 마세요. 보안이 필요한 데이터는 별도의 profiles 테이블에 저장하고 서버사이드에서 관리합니다.`,codeExamples:[{language:"typescript",title:"회원가입 with display_name",code:`import { supabase } from '../lib/supabase';

interface SignUpData {
  email: string;
  password: string;
  displayName: string;
}

export async function signUpWithName({ email, password, displayName }: SignUpData) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: displayName,
      },
    },
  });

  if (error) throw error;
  return data;
}

// 사용자 이름 가져오기 유틸
export function getUserDisplayName(user: { user_metadata?: { display_name?: string }; email?: string }) {
  return user.user_metadata?.display_name || user.email?.split('@')[0] || '익명';
}`}],tips:["user_metadata의 display_name은 클라이언트에서 수정 가능하므로, 관리자 권한 같은 민감한 정보는 별도 profiles 테이블에 저장하세요.","이메일 확인(Email Confirmation)이 활성화된 경우, 회원가입 후 바로 로그인되지 않습니다. 개발 중에는 Supabase 대시보드에서 비활성화할 수 있습니다.","ProtectedRoute 컴포넌트를 만들어 인증되지 않은 사용자를 자동으로 로그인 페이지로 리다이렉트하세요."]},{step:3,title:"채널 목록",description:"채팅 채널 목록을 표시합니다.",content:`채널 목록은 채팅 앱의 사이드바에 표시됩니다. 사용자가 채널을 선택하면 해당 채널의 메시지가 오른쪽에 표시됩니다. 채널 생성, 목록 조회, 채널 선택 기능을 구현합니다.

Cursor에게 요청하세요: "채팅 앱의 채널 목록 사이드바를 만들어줘. 채널 목록을 Supabase에서 가져오고, 새 채널 생성 버튼과 모달도 포함해줘. 선택된 채널은 하이라이트되고, 채널 선택 시 onSelect 콜백을 호출해줘. TypeScript로 작성해줘."

사이드바 레이아웃: 1) 상단에 앱 로고와 사용자 정보, 2) 중간에 채널 목록 (스크롤 가능), 3) 하단에 새 채널 만들기 버튼. 채널 이름 옆에 읽지 않은 메시지 수를 표시하면 UX가 좋아집니다 (이 기능은 마무리 단계에서 추가합니다).

예상 결과: 화면 왼쪽에 채널 목록이 표시됩니다. "일반", "개발", "잡담" 같은 채널을 클릭하면 오른쪽에 해당 채널의 메시지가 표시됩니다. "+" 버튼으로 새 채널을 생성할 수 있습니다.

주의사항: 채널 목록이 많아지면 스크롤이 필요합니다. overflow-y: auto와 함께 사이드바의 높이를 100vh - 헤더 높이로 설정하세요. 또한 모바일에서는 사이드바를 햄버거 메뉴로 토글하는 것이 좋습니다.`,codeExamples:[{language:"typescript",title:"채널 목록 컴포넌트 (src/components/ChannelList.tsx)",code:`import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

interface Channel {
  id: string;
  name: string;
  description: string;
  created_at: string;
}

interface ChannelListProps {
  selectedId: string | null;
  onSelect: (channel: Channel) => void;
}

export default function ChannelList({ selectedId, onSelect }: ChannelListProps) {
  const { user } = useAuth();
  const [channels, setChannels] = useState<Channel[]>([]);
  const [newName, setNewName] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    supabase
      .from('channels')
      .select('*')
      .order('created_at')
      .then(({ data }) => setChannels(data ?? []));
  }, []);

  const createChannel = async () => {
    if (!newName.trim() || !user) return;
    const { data, error } = await supabase
      .from('channels')
      .insert({ name: newName.trim(), created_by: user.id })
      .select()
      .single();
    if (!error && data) {
      setChannels(prev => [...prev, data]);
      setNewName('');
      setShowForm(false);
    }
  };

  return (
    <aside style={{ width: 260, borderRight: '1px solid #E5E7EB', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: 16, borderBottom: '1px solid #E5E7EB' }}>
        <h2 style={{ fontSize: 16, fontWeight: 700 }}>채널</h2>
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {channels.map(ch => (
          <button
            key={ch.id}
            onClick={() => onSelect(ch)}
            style={{
              width: '100%', padding: '10px 16px', border: 'none', textAlign: 'left',
              background: selectedId === ch.id ? '#EFF6FF' : 'transparent',
              borderLeft: selectedId === ch.id ? '3px solid #0046C8' : '3px solid transparent',
              cursor: 'pointer', fontSize: 14,
            }}
          >
            # {ch.name}
          </button>
        ))}
      </div>
      <div style={{ padding: 12, borderTop: '1px solid #E5E7EB' }}>
        {showForm ? (
          <div style={{ display: 'flex', gap: 8 }}>
            <input value={newName} onChange={e => setNewName(e.target.value)}
              placeholder="채널 이름" style={{ flex: 1, padding: 6, borderRadius: 4, border: '1px solid #D1D5DB', fontSize: 13 }}
              onKeyDown={e => e.key === 'Enter' && createChannel()} />
            <button onClick={createChannel} style={{ padding: '6px 10px', background: '#0046C8', color: '#fff', border: 'none', borderRadius: 4, fontSize: 13 }}>추가</button>
          </div>
        ) : (
          <button onClick={() => setShowForm(true)} style={{ width: '100%', padding: 8, background: '#F3F4F6', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 13 }}>+ 새 채널</button>
        )}
      </div>
    </aside>
  );
}`}],tips:["채널 목록의 aside에 height: 100vh와 display: flex + flexDirection: column을 설정하면 헤더/푸터 고정 + 중간 스크롤 레이아웃을 쉽게 만들 수 있습니다.","채널 이름 앞에 # 기호를 붙이면 Slack과 유사한 UI를 제공하여 직관적입니다.","모바일 대응을 위해 768px 이하에서는 사이드바를 overlay 방식으로 표시하는 것이 좋습니다."]},{step:4,title:"메시지 표시",description:"선택한 채널의 메시지를 표시합니다.",content:`선택한 채널의 메시지를 시간순으로 표시합니다. 내 메시지는 오른쪽에, 상대방 메시지는 왼쪽에 배치하는 버블(bubble) 레이아웃을 사용합니다. 각 메시지에는 보낸 사람 이름, 내용, 시간이 포함됩니다.

Cursor에게 요청하세요: "채팅 메시지 목록 컴포넌트를 만들어줘. 채널 ID를 받아서 해당 채널의 메시지를 가져와. 내 메시지는 오른쪽 파란색 버블, 상대 메시지는 왼쪽 회색 버블로 표시해줘. 사용자 이름과 시간도 표시해줘. 새 메시지가 추가되면 자동으로 맨 아래로 스크롤해줘."

메시지 버블 레이아웃: 1) 내 메시지 - 오른쪽 정렬, 파란색 배경, 흰색 텍스트, 2) 상대 메시지 - 왼쪽 정렬, 회색 배경, 검정 텍스트, 3) 같은 사용자의 연속 메시지는 이름을 생략하여 깔끔하게 표시, 4) 날짜가 바뀌면 날짜 구분선 표시.

예상 결과: 채널을 선택하면 해당 채널의 메시지가 시간순으로 표시됩니다. 내 메시지와 상대 메시지가 시각적으로 구분되고, 가장 최근 메시지가 하단에 표시됩니다.

주의사항: 메시지가 많을 때 전체를 한 번에 로드하면 성능 문제가 발생합니다. 최근 50개만 먼저 로드하고, 스크롤 업 시 이전 메시지를 추가 로드하는 무한 스크롤(infinite scroll)을 구현하세요.`,codeExamples:[{language:"typescript",title:"메시지 버블 컴포넌트 (src/components/MessageBubble.tsx)",code:`interface MessageBubbleProps {
  content: string;
  senderName: string;
  timestamp: string;
  isMine: boolean;
  showName: boolean;  // 연속 메시지에서 이름 생략
}

export default function MessageBubble({
  content, senderName, timestamp, isMine, showName
}: MessageBubbleProps) {
  const time = new Date(timestamp).toLocaleTimeString('ko-KR', {
    hour: '2-digit', minute: '2-digit'
  });

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: isMine ? 'flex-end' : 'flex-start',
      marginBottom: showName ? 12 : 4,
      paddingLeft: isMine ? 60 : 0,
      paddingRight: isMine ? 0 : 60,
    }}>
      {showName && !isMine && (
        <span style={{ fontSize: 12, color: '#6B7280', marginBottom: 2, marginLeft: 12 }}>
          {senderName}
        </span>
      )}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: 6,
        flexDirection: isMine ? 'row-reverse' : 'row',
      }}>
        <div style={{
          padding: '8px 14px',
          borderRadius: 16,
          borderTopLeftRadius: isMine ? 16 : 4,
          borderTopRightRadius: isMine ? 4 : 16,
          background: isMine ? '#0046C8' : '#F3F4F6',
          color: isMine ? '#fff' : '#111827',
          fontSize: 14, lineHeight: 1.5,
          maxWidth: 400, wordBreak: 'break-word',
        }}>
          {content}
        </div>
        <span style={{ fontSize: 10, color: '#9CA3AF', whiteSpace: 'nowrap' }}>{time}</span>
      </div>
    </div>
  );
}`}],tips:["메시지 영역의 ref.current.scrollTop = ref.current.scrollHeight로 새 메시지 시 자동 스크롤합니다. 단, 사용자가 위로 스크롤 중이면 자동 스크롤을 멈추는 것이 좋습니다.","같은 사용자의 연속 메시지에서 이름을 생략하려면 이전 메시지의 user_id와 비교하세요.",'wordBreak: "break-word"를 설정하지 않으면 긴 영어 단어나 URL이 버블 밖으로 넘칠 수 있습니다.']},{step:5,title:"실시간 구독",description:"Supabase Realtime으로 실시간 메시지를 수신합니다.",content:`Supabase Realtime은 PostgreSQL의 변경 사항을 WebSocket을 통해 클라이언트에 실시간으로 전달합니다. messages 테이블에 새 행이 INSERT되면 구독 중인 모든 클라이언트에게 즉시 브로드캐스트됩니다. 이것이 채팅의 핵심 기능입니다.

Cursor에게 요청하세요: "Supabase Realtime을 사용해서 messages 테이블의 INSERT 이벤트를 구독하는 커스텀 훅 useRealtimeMessages를 만들어줘. 특정 channel_id의 메시지만 필터링하고, 새 메시지가 오면 기존 목록에 추가해줘. 채널이 변경되면 이전 구독을 해제하고 새로 구독해줘. TypeScript로 작성해줘."

Supabase Realtime 구독 흐름: 1) supabase.channel('채널이름')으로 채널 생성, 2) .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: 'channel_id=eq.채널ID' }, callback)으로 이벤트 리스너 등록, 3) .subscribe()로 구독 시작, 4) cleanup에서 supabase.removeChannel()로 구독 해제.

예상 결과: 두 개의 브라우저 탭을 열고 같은 채널에 접속하면, 한쪽에서 메시지를 보내면 다른 쪽에서 즉시 표시됩니다. 네트워크 탭에서 WebSocket 연결을 확인할 수 있습니다.

디버깅 팁: 실시간 구독이 안 되면 1) Supabase 대시보드 > Database > Replication에서 messages 테이블이 활성화되어 있는지 확인, 2) RLS 정책이 SELECT를 허용하는지 확인, 3) 브라우저 콘솔에서 WebSocket 에러를 확인하세요.`,codeExamples:[{language:"typescript",title:"실시간 메시지 훅 (src/hooks/useRealtimeMessages.ts)",code:`import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

interface Message {
  id: string;
  channel_id: string;
  user_id: string;
  content: string;
  created_at: string;
}

export function useRealtimeMessages(channelId: string | null) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  // 초기 메시지 로드
  const loadMessages = useCallback(async () => {
    if (!channelId) return;
    setLoading(true);
    const { data } = await supabase
      .from('messages')
      .select('*')
      .eq('channel_id', channelId)
      .order('created_at', { ascending: true })
      .limit(50);
    setMessages(data ?? []);
    setLoading(false);
  }, [channelId]);

  useEffect(() => {
    loadMessages();
  }, [loadMessages]);

  // 실시간 구독
  useEffect(() => {
    if (!channelId) return;

    const channel = supabase
      .channel(\`messages:\${channelId}\`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: \`channel_id=eq.\${channelId}\`,
        },
        (payload) => {
          const newMsg = payload.new as Message;
          setMessages(prev => [...prev, newMsg]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [channelId]);

  return { messages, loading };
}`}],tips:["supabase.removeChannel()을 useEffect cleanup에서 반드시 호출하세요. 안 하면 채널 전환 시 이전 채널의 메시지도 계속 수신됩니다.","filter 파라미터에서 channel_id=eq.{id} 형태로 서버측 필터링을 하면, 클라이언트에서 불필요한 메시지를 받지 않아 효율적입니다.","실시간 구독이 동작하지 않으면 Supabase 대시보드 > Database > Replication에서 테이블이 활성화되어 있는지 먼저 확인하세요."]},{step:6,title:"메시지 전송",description:"메시지 입력과 전송 기능을 만듭니다.",content:`메시지 입력 폼을 만들고, 전송 버튼 클릭 또는 Enter 키로 메시지를 전송하는 기능을 구현합니다. 메시지 전송 후에는 입력창이 초기화되고, 새 메시지로 자동 스크롤됩니다.

Cursor에게 요청하세요: "채팅 메시지 입력 컴포넌트를 만들어줘. 텍스트 입력창, 전송 버튼을 포함하고, Enter 키로 전송(Shift+Enter는 줄바꿈)할 수 있게 해줘. 빈 메시지는 전송 불가하게 막고, 전송 중에는 버튼을 비활성화해줘. 전송 후 입력창에 자동 포커스도 해줘."

메시지 전송은 supabase.from('messages').insert()를 호출합니다. Realtime 구독이 설정되어 있으므로, INSERT 후 별도로 메시지 목록을 갱신할 필요 없이 자동으로 새 메시지가 표시됩니다. 이것이 Realtime의 장점입니다.

예상 결과: 화면 하단에 메시지 입력창이 고정됩니다. 메시지를 입력하고 Enter를 누르면 즉시 전송되고, 내 채팅 버블이 오른쪽에 표시됩니다. 동시에 다른 탭/기기에서도 실시간으로 메시지가 표시됩니다.

흔한 실수: Enter와 Shift+Enter를 구분하지 않으면 줄바꿈을 할 수 없습니다. 또한 빠르게 연속 전송 시 중복 메시지가 발생할 수 있으므로 전송 중 상태(sending)를 관리하여 버튼을 비활성화하세요.`,codeExamples:[{language:"typescript",title:"메시지 입력 컴포넌트 (src/components/MessageInput.tsx)",code:`import { useState, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

interface MessageInputProps {
  channelId: string;
}

export default function MessageInput({ channelId }: MessageInputProps) {
  const { user } = useAuth();
  const [content, setContent] = useState('');
  const [sending, setSending] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const sendMessage = async () => {
    const trimmed = content.trim();
    if (!trimmed || !user || sending) return;

    setSending(true);
    setContent(''); // 낙관적 초기화

    const { error } = await supabase.from('messages').insert({
      channel_id: channelId,
      user_id: user.id,
      content: trimmed,
    });

    if (error) {
      setContent(trimmed); // 실패 시 복원
      alert('메시지 전송에 실패했습니다.');
    }

    setSending(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div style={{
      padding: 12, borderTop: '1px solid #E5E7EB',
      display: 'flex', gap: 8, alignItems: 'flex-end',
    }}>
      <textarea
        ref={inputRef}
        value={content}
        onChange={e => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="메시지를 입력하세요..."
        rows={1}
        style={{
          flex: 1, padding: '8px 12px', borderRadius: 8,
          border: '1px solid #D1D5DB', resize: 'none',
          fontSize: 14, fontFamily: 'inherit', lineHeight: 1.5,
        }}
      />
      <button
        onClick={sendMessage}
        disabled={!content.trim() || sending}
        style={{
          padding: '8px 16px', borderRadius: 8, border: 'none',
          background: content.trim() ? '#0046C8' : '#D1D5DB',
          color: '#fff', cursor: content.trim() ? 'pointer' : 'default',
          fontSize: 14, fontWeight: 600,
        }}
      >
        전송
      </button>
    </div>
  );
}`}],tips:["Enter로 전송, Shift+Enter로 줄바꿈을 구현하려면 onKeyDown에서 e.shiftKey를 확인하세요.","메시지 전송 실패 시 입력창의 내용을 복원해주면 사용자가 다시 입력할 필요가 없어 UX가 좋아집니다.","textarea를 사용하면 여러 줄 입력이 가능합니다. rows={1}로 시작하고 내용에 따라 자동으로 높이가 늘어나게 하면 좋습니다."]},{step:7,title:"온라인 표시",description:"접속 중인 사용자를 표시합니다.",content:`Supabase Presence는 현재 접속 중인 사용자 목록을 실시간으로 추적하는 기능입니다. 채팅방에 누가 접속해 있는지, 누가 현재 타이핑 중인지 등을 표시할 수 있습니다. 이는 WebSocket 기반의 클라이언트간 상태 공유 기능입니다.

Cursor에게 요청하세요: "Supabase Presence를 사용해서 온라인 사용자 목록을 표시하는 기능을 만들어줘. 채널에 접속하면 자동으로 Presence에 등록하고, 나가면 해제해줘. 사이드바에 초록색 점으로 온라인 상태를 표시해줘. 타이핑 중 표시(typing indicator)도 포함해줘."

Presence 사용 흐름: 1) supabase.channel()으로 Presence 채널 생성, 2) channel.track({ user_id, display_name, online_at })으로 현재 사용자 등록, 3) channel.on('presence', { event: 'sync' }, callback)으로 상태 변화 감지, 4) presenceState()로 현재 접속자 목록 조회.

예상 결과: 사이드바의 사용자 이름 옆에 초록색 점이 표시되어 온라인 상태를 알 수 있습니다. 상대방이 타이핑 중이면 메시지 영역 하단에 "OOO님이 입력 중..." 메시지가 표시됩니다.

주의사항: Presence 상태는 30초마다 하트비트를 보내야 유지됩니다. 네트워크가 불안정하면 잠시 오프라인으로 표시될 수 있습니다. 타이핑 표시는 디바운스를 적용하여 너무 자주 업데이트되지 않도록 합니다.`,codeExamples:[{language:"typescript",title:"Presence 훅 (src/hooks/usePresence.ts)",code:`import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

interface PresenceUser {
  user_id: string;
  display_name: string;
  online_at: string;
  is_typing?: boolean;
}

export function usePresence(channelId: string | null) {
  const { user } = useAuth();
  const [onlineUsers, setOnlineUsers] = useState<PresenceUser[]>([]);
  const [typingUsers, setTypingUsers] = useState<string[]>([]);

  useEffect(() => {
    if (!channelId || !user) return;

    const displayName = user.user_metadata?.display_name || user.email?.split('@')[0] || '익명';

    const channel = supabase.channel(\`presence:\${channelId}\`, {
      config: { presence: { key: user.id } },
    });

    channel
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState<PresenceUser>();
        const users: PresenceUser[] = [];
        for (const key in state) {
          const presences = state[key];
          if (presences.length > 0) users.push(presences[0]);
        }
        setOnlineUsers(users);
        setTypingUsers(
          users.filter(u => u.is_typing && u.user_id !== user.id)
            .map(u => u.display_name)
        );
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await channel.track({
            user_id: user.id,
            display_name: displayName,
            online_at: new Date().toISOString(),
            is_typing: false,
          });
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [channelId, user]);

  return { onlineUsers, typingUsers };
}`}],tips:["Presence의 key를 user.id로 설정하면 같은 사용자가 여러 탭을 열어도 하나로 인식됩니다.","타이핑 표시는 channel.track()의 is_typing 값을 변경하여 구현합니다. 입력 중 true, 2초간 입력 없으면 false로 업데이트하세요.","presenceState()는 객체를 반환하므로, Object.values()로 배열 변환 후 사용하세요."]},{step:8,title:"마무리",description:"알림, 이모지, 스타일링을 추가합니다.",content:`채팅 앱의 완성도를 높이기 위해 읽지 않은 메시지 카운트, 이모지 리액션, 반응형 디자인, 알림 기능을 추가합니다. 이 단계에서는 UX를 다듬고, 에지 케이스를 처리하며, 배포 준비를 합니다.

Cursor에게 요청하세요: "채팅 앱에 다음 기능을 추가해줘: 1) 읽지 않은 메시지 수를 채널 이름 옆에 배지로 표시, 2) 메시지에 이모지 리액션 기능 (좋아요/하트/웃음 등), 3) 모바일에서 사이드바를 슬라이드 메뉴로 표시, 4) 새 메시지 도착 시 브라우저 Notification API로 알림."

읽지 않은 메시지 구현: localStorage 또는 Supabase에 각 채널의 마지막 읽은 메시지 ID를 저장합니다. 현재 채널이 아닌 채널에 새 메시지가 오면 카운트를 증가시킵니다. 해당 채널을 선택하면 카운트를 초기화합니다.

브라우저 알림: Notification.requestPermission()으로 권한을 요청하고, 다른 채널에 새 메시지가 오면 new Notification()으로 데스크톱 알림을 표시합니다.

최종 점검 사항: 1) 두 개 이상의 브라우저에서 실시간 메시지 교환 테스트, 2) 네트워크 끊김 후 재연결 시 메시지 동기화 확인, 3) 긴 메시지/특수 문자/이모지 표시 확인, 4) 모바일 기기에서 터치 조작 테스트.`,codeExamples:[{language:"typescript",title:"읽지 않은 메시지 배지 (src/hooks/useUnreadCount.ts)",code:`import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'chat_last_read';

interface LastRead {
  [channelId: string]: string; // 마지막 읽은 메시지 ID
}

export function useUnreadCount(channelId: string, currentChannelId: string | null) {
  const [count, setCount] = useState(0);

  const getLastRead = useCallback((): LastRead => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch {
      return {};
    }
  }, []);

  const markAsRead = useCallback((chId: string, lastMsgId: string) => {
    const lastRead = getLastRead();
    lastRead[chId] = lastMsgId;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lastRead));
    if (chId === channelId) setCount(0);
  }, [channelId, getLastRead]);

  const incrementCount = useCallback(() => {
    if (channelId !== currentChannelId) {
      setCount(prev => prev + 1);
    }
  }, [channelId, currentChannelId]);

  // 현재 채널 선택 시 카운트 초기화
  useEffect(() => {
    if (channelId === currentChannelId) {
      setCount(0);
    }
  }, [channelId, currentChannelId]);

  return { count, markAsRead, incrementCount };
}

// 브라우저 알림 유틸
export async function sendBrowserNotification(title: string, body: string) {
  if (!('Notification' in window)) return;

  if (Notification.permission === 'default') {
    await Notification.requestPermission();
  }

  if (Notification.permission === 'granted' && document.hidden) {
    new Notification(title, { body, icon: '/favicon.ico' });
  }
}`}],tips:["브라우저 Notification은 document.hidden이 true일 때(탭이 비활성일 때)만 표시하면 불필요한 알림을 줄일 수 있습니다.","localStorage에 마지막 읽은 메시지 ID를 저장하면 새로고침 후에도 읽지 않은 메시지 수가 유지됩니다.","이모지 리액션은 별도 reactions 테이블을 만들고 message_id + user_id + emoji 복합 유니크 제약으로 중복을 방지하세요."]}]},r=[t,a,n];export{r as i};
