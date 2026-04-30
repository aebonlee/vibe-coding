import type { ProjectData } from '../../types';

export const mcpServerProject: ProjectData = {
  id: 'mcp-server',
  slug: 'mcp-server',
  title: 'MCP 서버 구축',
  description: 'Node.js로 커스텀 MCP 서버를 직접 개발하여 AI 도구를 확장합니다.',
  level: 'advanced',
  duration: '8-10시간',
  techStack: ['Node.js', 'MCP SDK', 'TypeScript', 'Claude Code'],
  outcomes: [
    'MCP 프로토콜 완전 이해',
    'Tool/Resource/Prompt 구현',
    '커스텀 MCP 서버 개발 및 배포',
    'Claude Code 확장 능력'
  ],
  diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 370" font-family="'Noto Sans KR', sans-serif">
  <defs>
    <marker id="ah" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#0046C8"/>
    </marker>
  </defs>
  <!-- Claude Desktop -->
  <rect x="20" y="60" width="160" height="60" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="100" y="96" text-anchor="middle" font-size="15" font-weight="bold" fill="#0046C8">Claude Desktop</text>
  <!-- Arrow 1 -->
  <line x1="180" y1="90" x2="260" y2="90" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <text x="220" y="80" text-anchor="middle" font-size="11" fill="#555">stdio / SSE</text>
  <!-- MCP Client -->
  <rect x="265" y="60" width="140" height="60" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="335" y="96" text-anchor="middle" font-size="15" font-weight="bold" fill="#0046C8">MCP Client</text>
  <!-- Arrow 2 -->
  <line x1="405" y1="90" x2="490" y2="90" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <text x="448" y="80" text-anchor="middle" font-size="11" fill="#555">stdio / SSE</text>
  <!-- MCP Server -->
  <rect x="495" y="60" width="150" height="60" rx="8" fill="#0046C8" stroke="#0046C8" stroke-width="2"/>
  <text x="570" y="96" text-anchor="middle" font-size="15" font-weight="bold" fill="#fff">MCP Server</text>
  <!-- Down arrows from Server (angled to spaced boxes) -->
  <line x1="530" y1="120" x2="440" y2="205" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <line x1="570" y1="120" x2="570" y2="205" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <line x1="610" y1="120" x2="700" y2="205" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <!-- Tools -->
  <rect x="375" y="210" width="130" height="50" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="440" y="240" text-anchor="middle" font-size="14" font-weight="bold" fill="#0046C8">Tools</text>
  <!-- Resources -->
  <rect x="520" y="210" width="100" height="50" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="570" y="240" text-anchor="middle" font-size="14" font-weight="bold" fill="#0046C8">Resources</text>
  <!-- Prompts -->
  <rect x="635" y="210" width="130" height="50" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="700" y="240" text-anchor="middle" font-size="14" font-weight="bold" fill="#0046C8">Prompts</text>
  <!-- Legend -->
  <text x="400" y="310" text-anchor="middle" font-size="12" fill="#666">MCP = Model Context Protocol | AI가 외부 도구와 데이터에 접근하는 표준 프로토콜</text>
  <text x="400" y="335" text-anchor="middle" font-size="11" fill="#999">Transport: stdio (로컬) 또는 SSE (원격)</text>
</svg>`,
  steps: [
    {
      step: 1,
      title: 'MCP 프로토콜 이해',
      description: 'Model Context Protocol의 핵심 개념과 아키텍처를 학습합니다.',
      content: `MCP(Model Context Protocol)는 AI 모델이 외부 도구, 데이터 소스, 프롬프트 템플릿에 접근할 수 있게 해주는 개방형 표준 프로토콜입니다. Anthropic이 2024년 말에 공개했으며, AI 애플리케이션의 확장성을 획기적으로 높여줍니다.

MCP의 핵심 구성요소는 세 가지입니다. Tool은 AI가 실행할 수 있는 함수(파일 검색, API 호출 등), Resource는 AI가 읽을 수 있는 데이터(파일 내용, DB 레코드 등), Prompt는 재사용 가능한 프롬프트 템플릿입니다. 이 세 가지를 서버에 등록하면 Claude가 자동으로 인식하고 활용합니다.

통신 방식은 stdio(표준 입출력)와 SSE(Server-Sent Events) 두 가지가 있습니다. 로컬 개발에서는 stdio를 사용하고, 원격 서버 배포 시에는 SSE를 사용합니다. JSON-RPC 2.0 프로토콜 위에서 동작하며, 요청-응답 패턴을 따릅니다.`,
      tips: [
        'MCP 공식 문서(modelcontextprotocol.io)를 먼저 정독하세요.',
        'Claude Desktop에 이미 내장된 MCP 서버들(filesystem, git 등)을 먼저 사용해보면 개념이 잡힙니다.'
      ]
    },
    {
      step: 2,
      title: '프로젝트 초기화',
      description: 'MCP 서버 프로젝트를 셋업하고 의존성을 설치합니다.',
      content: `새 디렉토리를 만들고 npm init으로 프로젝트를 초기화합니다. 핵심 패키지인 @modelcontextprotocol/sdk와 TypeScript 관련 패키지를 설치합니다. tsconfig.json에서 module을 NodeNext로 설정하고, package.json의 type을 module로 지정합니다.

프로젝트 구조는 단순하게 시작합니다. src/index.ts에 메인 서버 코드를 작성하고, 빌드 결과물은 dist/ 폴더에 출력합니다. bin 필드를 package.json에 추가하면 npx로 실행 가능한 CLI 도구가 됩니다.

shebang(#!/usr/bin/env node)을 빌드 출력 파일 최상단에 추가하는 것을 잊지 마세요. stdio 트랜스포트를 사용할 때 Claude Desktop이 이 파일을 직접 실행하기 때문입니다.`,
      tips: [
        'Node.js 18 이상을 사용하세요. SDK가 최신 ES 모듈 기능을 필요로 합니다.',
        'zod 패키지도 함께 설치하세요. Tool의 입력 스키마 검증에 사용됩니다.'
      ],
      codeExamples: [
        {
          language: 'typescript',
          title: 'MCP 서버 기본 셋업 (src/index.ts)',
          code: `import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "my-mcp-server",
  version: "1.0.0",
  description: "나만의 MCP 서버"
});

// Tool, Resource, Prompt를 여기에 등록합니다

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("MCP 서버가 시작되었습니다.");`
        }
      ]
    },
    {
      step: 3,
      title: '첫 번째 Tool',
      description: 'zod 스키마 검증을 활용한 Tool을 구현합니다.',
      content: `Tool은 AI가 호출할 수 있는 함수입니다. server.tool() 메서드로 등록하며, 이름, 설명, 입력 스키마, 핸들러 함수를 정의합니다. 입력 스키마는 zod를 사용하여 타입 안전하게 검증됩니다.

핸들러 함수는 반드시 content 배열을 반환해야 합니다. 각 요소는 type과 text 필드를 가지며, type은 주로 "text"를 사용합니다. 에러 발생 시 isError: true를 함께 반환하면 Claude가 에러 상황을 인지하고 적절히 대응합니다.

첫 Tool로는 현재 시간 조회, 파일 목록 조회 등 단순한 기능부터 시작하세요. 동작을 확인한 후 점진적으로 복잡한 로직을 추가합니다.`,
      tips: [
        'Tool 설명(description)을 명확하게 작성해야 Claude가 적절한 시점에 올바른 Tool을 선택합니다.',
        '하나의 Tool이 하나의 일만 하도록 설계하세요 (단일 책임 원칙).'
      ],
      codeExamples: [
        {
          language: 'typescript',
          title: 'Tool 구현 - zod 스키마 검증',
          code: `import { z } from "zod";

server.tool(
  "search-files",
  "지정 디렉토리에서 패턴과 일치하는 파일을 검색합니다.",
  {
    directory: z.string().describe("검색할 디렉토리 경로"),
    pattern: z.string().describe("파일 이름 패턴 (glob)"),
    maxResults: z.number().optional().default(10)
      .describe("최대 결과 수")
  },
  async ({ directory, pattern, maxResults }) => {
    try {
      const files = await searchFiles(directory, pattern, maxResults);
      return {
        content: [{
          type: "text",
          text: JSON.stringify(files, null, 2)
        }]
      };
    } catch (error) {
      return {
        content: [{ type: "text", text: \`오류: \${error}\` }],
        isError: true
      };
    }
  }
);`
        }
      ]
    },
    {
      step: 4,
      title: 'Resource 구현',
      description: 'AI가 읽을 수 있는 데이터 소스를 Resource로 노출합니다.',
      content: `Resource는 URI로 식별되는 읽기 전용 데이터입니다. 파일 내용, 데이터베이스 레코드, API 응답 등을 Resource로 노출하면 Claude가 필요할 때 데이터를 읽어올 수 있습니다. server.resource() 메서드로 등록합니다.

Resource URI는 "프로토콜://경로" 형식을 따릅니다. 예를 들어 "config://app-settings"이나 "db://users/list" 같은 커스텀 URI를 정의할 수 있습니다. 동적 데이터의 경우 Resource Template을 활용하면 URI 패턴에 변수를 포함할 수 있습니다.

Resource는 Tool과 달리 부작용(side effect)이 없어야 합니다. 데이터를 변경하는 작업은 반드시 Tool로 구현하세요. Resource는 순수하게 데이터 조회 용도로만 사용합니다.`,
      tips: [
        'Resource URI에 일관된 네이밍 컨벤션을 적용하세요 (예: db://테이블명/액션).',
        '민감한 데이터는 Resource로 노출하지 마세요. MCP 서버는 로컬에서 실행되지만, 보안 습관은 중요합니다.'
      ],
      codeExamples: [
        {
          language: 'typescript',
          title: 'Resource 구현 예시',
          code: `// 정적 Resource
server.resource(
  "app-config",
  "config://app",
  { description: "앱 설정 정보를 반환합니다." },
  async (uri) => ({
    contents: [{
      uri: uri.href,
      mimeType: "application/json",
      text: JSON.stringify({
        version: "1.0.0",
        environment: process.env.NODE_ENV ?? "development",
        features: ["search", "analytics"]
      })
    }]
  })
);

// 동적 Resource Template
server.resource(
  "user-profile",
  new ResourceTemplate("db://users/{userId}", { list: undefined }),
  { description: "사용자 프로필을 조회합니다." },
  async (uri, { userId }) => {
    const user = await getUser(userId);
    return {
      contents: [{
        uri: uri.href,
        mimeType: "application/json",
        text: JSON.stringify(user)
      }]
    };
  }
);`
        }
      ]
    },
    {
      step: 5,
      title: '에러 핸들링',
      description: '입력 검증, 타임아웃, 에러 복구를 체계적으로 구현합니다.',
      content: `프로덕션급 MCP 서버에는 철저한 에러 핸들링이 필수입니다. zod 스키마 검증은 기본이고, 비즈니스 로직 수준의 검증도 추가해야 합니다. 파일 경로가 허용된 범위 안에 있는지, API 요청 횟수가 제한을 넘지 않는지 등을 확인합니다.

외부 API 호출이나 파일 시스템 접근 시에는 반드시 타임아웃을 설정하세요. AbortController를 활용하면 일정 시간 내에 응답이 없을 때 요청을 취소할 수 있습니다. 네트워크 에러의 경우 재시도 로직을 추가하는 것도 좋습니다.

모든 에러 메시지는 사용자 친화적으로 작성합니다. Claude가 이 메시지를 읽고 사용자에게 전달하거나 다른 접근 방식을 시도하기 때문입니다. 스택 트레이스보다는 "무엇이 잘못되었고, 어떻게 해결할 수 있는지"를 명확히 전달하세요.`,
      tips: [
        'console.error()로 서버 측 로그를 남기세요. stdio 전송에서 stderr은 로그 채널로 사용됩니다.',
        'process.on("uncaughtException")으로 예상치 못한 에러도 처리하세요.'
      ]
    },
    {
      step: 6,
      title: 'Claude Code 연동',
      description: 'claude_desktop_config.json에 서버를 등록하고 실제로 사용합니다.',
      content: `개발한 MCP 서버를 Claude Desktop(또는 Claude Code)에 연동합니다. 설정 파일 위치는 OS별로 다릅니다: macOS는 ~/Library/Application Support/Claude/, Windows는 %APPDATA%/Claude/ 경로에 claude_desktop_config.json 파일을 생성하거나 수정합니다.

설정 파일에서 서버의 실행 방식(command), 인수(args), 환경변수(env)를 지정합니다. node로 빌드된 JS 파일을 직접 실행하거나, npx로 패키지를 실행할 수 있습니다. 서버를 등록한 후 Claude Desktop을 재시작하면 새로운 Tool과 Resource가 인식됩니다.

연동 후에는 Claude에게 Tool 사용을 요청해보세요. "파일을 검색해줘"처럼 자연어로 요청하면 Claude가 등록된 search-files Tool을 자동으로 호출합니다. 응답이 예상대로 오는지 확인하고, 문제가 있으면 stderr 로그를 확인합니다.`,
      tips: [
        'Claude Desktop의 개발자 도구(Ctrl+Shift+I)에서 MCP 로그를 확인할 수 있습니다.',
        '서버 코드를 수정할 때마다 Claude Desktop을 재시작해야 변경사항이 반영됩니다.'
      ],
      codeExamples: [
        {
          language: 'json',
          title: 'claude_desktop_config.json 설정',
          code: `{
  "mcpServers": {
    "my-mcp-server": {
      "command": "node",
      "args": ["C:/projects/my-mcp-server/dist/index.js"],
      "env": {
        "API_KEY": "your-api-key"
      }
    },
    "npx-example": {
      "command": "npx",
      "args": ["-y", "@example/mcp-server"]
    }
  }
}`
        }
      ]
    },
    {
      step: 7,
      title: '고급 기능',
      description: 'Prompt 템플릿, 캐싱, 인증 등 고급 기능을 추가합니다.',
      content: `Prompt는 재사용 가능한 프롬프트 템플릿입니다. server.prompt()로 등록하며, 인수를 받아 동적 프롬프트를 생성할 수 있습니다. 코드 리뷰, 번역, 분석 등 반복되는 작업 패턴을 Prompt로 만들면 효율적입니다.

캐싱은 동일한 요청에 대한 응답을 메모리에 저장하여 성능을 높입니다. Map 객체를 활용한 단순 캐시부터, TTL(Time To Live)을 적용한 만료 캐시까지 상황에 맞게 구현합니다. 외부 API 호출이 잦은 Tool에 특히 효과적입니다.

인증이 필요한 API를 래핑하는 경우, 환경변수로 API 키를 전달받아 사용합니다. claude_desktop_config.json의 env 필드에 키를 설정하고, 서버 코드에서 process.env로 접근합니다. 민감한 키는 절대 코드에 하드코딩하지 마세요.`,
      tips: [
        'Prompt 템플릿은 사용자가 Claude Desktop UI의 "/" 메뉴에서 직접 선택할 수 있습니다.',
        '캐시 무효화 전략을 미리 정해두세요. 데이터가 오래되면 잘못된 결과를 반환할 수 있습니다.'
      ]
    },
    {
      step: 8,
      title: '테스트',
      description: 'MCP Inspector와 자동화 테스트로 서버를 검증합니다.',
      content: `MCP Inspector는 MCP 서버를 대화형으로 테스트할 수 있는 공식 도구입니다. npx @modelcontextprotocol/inspector 명령으로 실행하면 브라우저 기반 UI에서 Tool 호출, Resource 조회, Prompt 실행을 직접 테스트할 수 있습니다.

자동화 테스트에서는 MCP SDK의 Client 클래스를 활용합니다. 인메모리 트랜스포트로 서버와 클라이언트를 직접 연결하면 실제 stdio 없이도 전체 프로토콜 흐름을 테스트할 수 있습니다. Jest나 Vitest로 각 Tool의 입출력을 검증하세요.

엣지 케이스 테스트를 반드시 포함하세요. 잘못된 입력, 빈 데이터, 타임아웃, 대용량 응답 등 예외 상황에서 서버가 크래시하지 않고 적절한 에러 메시지를 반환하는지 확인합니다.`,
      tips: [
        'npx @modelcontextprotocol/inspector로 수동 테스트를 먼저 하고, 자동화 테스트를 작성하세요.',
        'CI/CD에서 MCP 테스트를 자동 실행하도록 설정하면 회귀 버그를 방지할 수 있습니다.'
      ]
    },
    {
      step: 9,
      title: '배포 & 공유',
      description: 'npm 패키지 또는 Docker로 배포하고 커뮤니티에 공유합니다.',
      content: `npm에 배포하면 누구나 npx로 서버를 즉시 실행할 수 있습니다. package.json에 bin 필드를 설정하고, npm publish로 배포합니다. 패키지 이름은 @username/mcp-server-기능명 형식을 권장합니다.

Docker 이미지로 만들면 환경 의존성 없이 배포할 수 있습니다. 특히 SSE 트랜스포트를 사용하는 원격 서버의 경우 Docker + Cloud Run 조합이 효과적입니다. Dockerfile에 Node.js 런타임과 빌드 결과물을 포함시킵니다.

GitHub에 소스 코드를 공개하고, README에 설치 방법, 설정 예시, 지원하는 Tool/Resource 목록을 명시하세요. MCP 서버 디렉토리(mcp.run, Smithery 등)에 등록하면 더 많은 사용자가 발견하고 사용할 수 있습니다.`,
      tips: [
        'npm 배포 전 npx로 로컬 테스트를 반드시 해보세요: npx . 으로 현재 디렉토리의 패키지를 실행할 수 있습니다.',
        'README에 claude_desktop_config.json 설정 예시를 포함하면 사용자가 바로 연동할 수 있습니다.'
      ]
    }
  ]
};
