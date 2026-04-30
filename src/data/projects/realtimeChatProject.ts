import type { ProjectData } from '../../types';

export const realtimeChatProject: ProjectData = {
  id: 'realtime-chat',
  slug: 'realtime-chat',
  title: '실시간 채팅 앱',
  description: 'Supabase Realtime을 활용한 실시간 채팅 앱.',
  level: 'intermediate',
  duration: '6-7시간',
  techStack: ['React', 'Supabase Realtime', 'Claude Code', 'TypeScript'],
  outcomes: [
    '실시간 데이터 동기화',
    '채널 시스템 구현',
    '메시지 관리',
    'Claude Code 활용',
  ],
  diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" font-family="'Noto Sans KR', sans-serif">
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
</svg>`,
  steps: [
    {
      step: 1,
      title: 'DB 설계',
      description: 'channels와 messages 테이블을 설계하고 RLS 정책을 설정합니다.',
      content: `실시간 채팅 앱의 데이터 모델은 두 개의 핵심 테이블로 구성됩니다. channels 테이블은 채팅방 목록을 관리하고, messages 테이블은 각 채널에 속하는 메시지를 저장합니다. 두 테이블은 channel_id 외래키로 연결됩니다.

RLS(Row Level Security)는 반드시 활성화해야 합니다. 인증된 사용자만 채널을 조회하고 메시지를 보낼 수 있도록 정책을 설정합니다. Supabase Realtime이 정상 작동하려면 테이블에 대해 REPLICA IDENTITY FULL을 설정해야 합니다.

Supabase 대시보드의 SQL Editor에서 스키마를 직접 실행하거나, Claude Code에게 SQL 파일 생성을 요청할 수 있습니다.`,
      codeExamples: [
        {
          language: 'sql',
          title: 'Claude Code 프롬프트 결과 — schema.sql',
          code: `-- channels 테이블
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
ALTER PUBLICATION supabase_realtime ADD TABLE channels;`,
        },
      ],
      tips: [
        'Supabase 대시보드 → SQL Editor에서 위 SQL을 직접 실행하세요.',
        'REPLICA IDENTITY FULL 설정을 빠뜨리면 Realtime 구독에서 이전 데이터(old record)를 받을 수 없습니다.',
        'Claude Code 프롬프트: "channels와 messages 테이블을 만들어줘. RLS와 Realtime 설정도 포함해줘."',
      ],
    },
    {
      step: 2,
      title: '프로젝트 초기화',
      description: 'React + Vite + Supabase 클라이언트를 셋업합니다.',
      content: `Claude Code를 사용하여 React + Vite + TypeScript 프로젝트를 생성합니다. Supabase JS 클라이언트 라이브러리를 설치하고, 환경변수로 Supabase URL과 anon key를 설정합니다.

프로젝트 구조는 다음과 같이 구성합니다: src/lib/에 Supabase 클라이언트 초기화, src/contexts/에 인증 컨텍스트, src/components/Chat/에 채팅 관련 컴포넌트를 배치합니다. 이 구조를 CLAUDE.md에 명시해두면 Claude Code가 일관된 위치에 파일을 생성합니다.

Supabase 클라이언트는 createClient()로 단 한 번만 초기화하고 재사용합니다. 여러 곳에서 new로 생성하면 Realtime 구독이 중복될 수 있으므로 주의하세요.`,
      codeExamples: [
        {
          language: 'bash',
          title: 'Claude Code에게 프로젝트 생성 요청',
          code: `# Claude Code 프롬프트 예시:
# "React + Vite + TypeScript로 실시간 채팅 프로젝트를 만들어줘.
#  Supabase JS를 설치하고, src/lib/supabase.ts에 클라이언트를 초기화해줘.
#  환경변수는 .env 파일로 관리해줘."

# 실제 실행되는 명령어:
npm create vite@latest realtime-chat -- --template react-ts
cd realtime-chat
npm install @supabase/supabase-js
npm install`,
        },
        {
          language: 'typescript',
          title: 'src/lib/supabase.ts — 클라이언트 초기화',
          code: `import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase 환경변수가 설정되지 않았습니다.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);`,
        },
      ],
      tips: [
        '.env 파일에 VITE_SUPABASE_URL과 VITE_SUPABASE_ANON_KEY를 설정하세요.',
        '.env 파일은 .gitignore에 추가하여 Git에 커밋되지 않도록 합니다.',
        'Claude Code 프롬프트: "Supabase 클라이언트를 싱글톤 패턴으로 초기화하는 코드를 만들어줘."',
      ],
    },
    {
      step: 3,
      title: '인증 구현',
      description: '채팅을 위한 로그인/회원가입 기능을 구현합니다.',
      content: `채팅 앱에서 인증은 필수입니다. 누가 메시지를 보냈는지 식별하고, RLS 정책이 올바르게 동작하려면 Supabase Auth를 통해 사용자를 인증해야 합니다.

AuthContext를 만들어 앱 전체에서 로그인 상태를 공유합니다. supabase.auth.onAuthStateChange()로 로그인/로그아웃 이벤트를 감지하고, 현재 사용자 정보를 상태로 관리합니다. 로그인하지 않은 사용자에게는 로그인 폼을 표시합니다.

이메일/비밀번호 방식의 간단한 인증으로 시작하고, 필요에 따라 소셜 로그인(Google, GitHub)을 추가할 수 있습니다.`,
      codeExamples: [
        {
          language: 'typescript',
          title: 'Claude Code 프롬프트 결과 — AuthContext 핵심 로직',
          code: `// Claude Code 프롬프트:
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
};`,
        },
      ],
      tips: [
        'Supabase 대시보드에서 Email 인증의 "Confirm email" 옵션을 끄면 개발 중 편리합니다.',
        'onAuthStateChange의 구독은 반드시 cleanup 함수에서 해제하세요.',
        'Claude Code 프롬프트: "로그인 폼과 회원가입 폼을 하나의 컴포넌트로 만들어줘. 탭으로 전환하는 방식으로."',
      ],
    },
    {
      step: 4,
      title: '채널 목록',
      description: '채널 목록 사이드바를 구현합니다.',
      content: `채널 목록은 채팅 앱의 왼쪽 사이드바에 표시됩니다. Supabase에서 channels 테이블의 데이터를 조회하고, 새 채널을 생성하는 기능을 구현합니다. 현재 선택된 채널을 하이라이트하여 사용자가 어떤 채널에 있는지 시각적으로 알 수 있게 합니다.

채널 목록도 Realtime으로 구독하면 다른 사용자가 채널을 생성했을 때 즉시 목록에 반영됩니다. 하지만 먼저 메시지 Realtime을 완성한 후에 채널 Realtime을 추가하는 것이 좋습니다. 복잡도를 단계적으로 높여가는 것이 디버깅에 유리합니다.

채널 생성 시 모달이나 인라인 폼을 사용할 수 있습니다. 채널 이름은 필수, 설명은 선택 입력으로 설계합니다.`,
      codeExamples: [
        {
          language: 'typescript',
          title: 'Claude Code 프롬프트 결과 — 채널 목록 핵심 로직',
          code: `// Claude Code 프롬프트:
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
}`,
        },
      ],
      tips: [
        '채널이 없을 때 "채널을 만들어보세요" 같은 빈 상태 UI를 추가하면 UX가 좋아집니다.',
        '채널 목록 로딩 중에는 스켈레톤 UI를 표시하세요.',
        'Claude Code 프롬프트: "채널 목록에 로딩 상태와 빈 상태 UI도 추가해줘."',
      ],
    },
    {
      step: 5,
      title: '메시지 구현',
      description: '메시지 전송/수신과 Realtime 구독을 구현합니다.',
      content: `채팅의 핵심인 메시지 전송과 수신을 구현합니다. 채널을 선택하면 해당 채널의 메시지를 시간순으로 불러오고, 새 메시지를 전송할 수 있는 입력 폼을 표시합니다.

메시지 전송은 Supabase의 insert를 사용합니다. 전송 후에는 Realtime 구독을 통해 자동으로 새 메시지가 UI에 반영되므로, 수동으로 목록을 새로고침할 필요가 없습니다. 이것이 Realtime의 핵심 장점입니다.

메시지 버블은 내가 보낸 메시지와 상대방 메시지를 시각적으로 구분합니다. 내 메시지는 오른쪽에 파란색으로, 상대방 메시지는 왼쪽에 회색으로 표시하는 것이 일반적입니다.`,
      codeExamples: [
        {
          language: 'typescript',
          title: 'Claude Code 프롬프트 결과 — 메시지 전송 핵심 로직',
          code: `// Claude Code 프롬프트:
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
}`,
        },
      ],
      tips: [
        '메시지 전송 후 input을 즉시 비우면 사용자 경험이 좋아집니다.',
        '전송 버튼과 Enter 키 모두 메시지 전송을 지원하세요.',
        'Claude Code 프롬프트: "메시지 전송 시 로딩 상태를 표시하고, 에러 발생 시 토스트 메시지를 보여줘."',
      ],
    },
    {
      step: 6,
      title: '실시간 구독',
      description: 'Supabase Realtime 채널 구독을 구현합니다.',
      content: `Supabase Realtime v2는 postgres_changes 이벤트를 통해 테이블의 INSERT, UPDATE, DELETE를 실시간으로 감지합니다. 채널을 선택할 때 해당 채널의 messages 테이블 변경을 구독하고, 채널을 변경하면 이전 구독을 해제합니다.

구독 패턴은 supabase.channel()로 채널 객체를 생성하고, .on()으로 이벤트 핸들러를 등록한 뒤, .subscribe()로 구독을 시작합니다. 컴포넌트가 언마운트되거나 채널이 변경되면 반드시 removeChannel()로 구독을 정리해야 합니다.

새 메시지가 도착하면 기존 메시지 배열에 추가하고, 화면을 최하단으로 자동 스크롤합니다. 이때 사용자가 이전 메시지를 읽고 있는 중이라면 자동 스크롤을 방지하는 로직도 고려해보세요.`,
      codeExamples: [
        {
          language: 'typescript',
          title: 'Supabase Realtime v2 구독 패턴',
          code: `// Claude Code 프롬프트:
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
}, [channel?.id]);`,
        },
      ],
      tips: [
        'supabase.channel()의 이름은 고유해야 합니다. 채널 ID를 포함시키면 충돌을 방지할 수 있습니다.',
        '구독 해제(removeChannel)를 빠뜨리면 메모리 누수와 중복 메시지가 발생합니다.',
        'Supabase 대시보드 → Database → Replication에서 messages 테이블이 활성화되어 있는지 확인하세요.',
        'Claude Code 프롬프트: "Realtime 구독 상태를 콘솔에 로깅해서 디버깅할 수 있게 해줘."',
      ],
    },
    {
      step: 7,
      title: 'UI 완성',
      description: '채팅 버블, 온라인 표시, 스크롤 동작을 완성합니다.',
      content: `채팅 앱의 UI를 완성합니다. 메시지 버블은 발신자에 따라 좌우로 정렬하고, 색상을 구분합니다. 타임스탬프는 상대 시간("방금 전", "5분 전")으로 표시하면 가독성이 좋아집니다.

새 메시지가 도착하면 채팅 영역을 최하단으로 자동 스크롤합니다. useRef로 메시지 컨테이너의 scrollTop을 제어하고, 새 메시지 추가 시 scrollIntoView()를 호출합니다. 사용자가 위로 스크롤하여 이전 메시지를 보고 있을 때는 자동 스크롤을 비활성화하는 것이 좋습니다.

전체 레이아웃은 왼쪽 사이드바(채널 목록) + 오른쪽 메인 영역(채팅방)의 2칼럼 구조로 구성합니다. 반응형 디자인을 적용하여 모바일에서는 사이드바를 토글할 수 있게 합니다.`,
      codeExamples: [
        {
          language: 'css',
          title: 'Claude Code 프롬프트 결과 — 채팅 UI 핵심 스타일',
          code: `/* Claude Code 프롬프트:
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
}`,
        },
        {
          language: 'typescript',
          title: '자동 스크롤 구현',
          code: `// 메시지 영역 하단 자동 스크롤
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
</div>`,
        },
      ],
      tips: [
        '메시지 버블의 border-radius를 비대칭으로 설정하면 말풍선 느낌이 납니다.',
        '스크롤 동작에 behavior: "smooth"를 추가하면 부드러운 스크롤이 됩니다.',
        '다크 모드를 지원하려면 CSS 변수를 활용하세요.',
        'Claude Code 프롬프트: "모바일에서 사이드바를 햄버거 메뉴로 토글할 수 있게 반응형 CSS를 추가해줘."',
      ],
    },
  ],
  sourceFiles: [
    {
      filename: 'package.json',
      language: 'json',
      code: `{
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
      filename: 'src/lib/supabase.ts',
      language: 'typescript',
      code: `import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Supabase 환경변수가 설정되지 않았습니다. ' +
    '.env 파일에 VITE_SUPABASE_URL과 VITE_SUPABASE_ANON_KEY를 추가하세요.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);`,
    },
    {
      filename: 'src/types.ts',
      language: 'typescript',
      code: `export interface Channel {
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
}`,
    },
    {
      filename: 'src/App.tsx',
      language: 'tsx',
      code: `import { useState } from 'react';
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
}`,
    },
    {
      filename: 'src/App.css',
      language: 'css',
      code: `/* ─── Reset & Base ─── */
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
}`,
    },
    {
      filename: 'src/contexts/AuthContext.tsx',
      language: 'tsx',
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
}`,
    },
    {
      filename: 'src/components/Auth/LoginForm.tsx',
      language: 'tsx',
      code: `import { useState } from 'react';
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
}`,
    },
    {
      filename: 'src/components/Chat/ChannelList.tsx',
      language: 'tsx',
      code: `import { useEffect, useState } from 'react';
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
}`,
    },
    {
      filename: 'src/components/Chat/ChatRoom.tsx',
      language: 'tsx',
      code: `import { useEffect, useRef, useState } from 'react';
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
}`,
    },
    {
      filename: 'src/components/Chat/MessageBubble.tsx',
      language: 'tsx',
      code: `import type { Message } from '../../types';

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
}`,
    },
    {
      filename: 'supabase/schema.sql',
      language: 'sql',
      code: `-- ============================================
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
END $$;`,
    },
  ],
};
