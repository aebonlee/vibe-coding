const e={id:"multi-agent",slug:"multi-agent",title:"멀티에이전트 워크플로우",description:"Claude Code와 역할분담 자동화를 활용한 멀티에이전트 시스템.",level:"advanced",duration:"8-10시간",techStack:["Claude Code","Task Tool","Bash","TypeScript"],outcomes:["에이전트 오케스트레이션 패턴 이해","역할 분담 아키텍처 설계","자동화 파이프라인 구축","에이전트 간 통신 프로토콜 구현"],diagram:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" font-family="'Noto Sans KR', sans-serif">
  <defs>
    <marker id="ah" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#0046C8"/>
    </marker>
  </defs>
  <!-- 오케스트레이터 -->
  <rect x="240" y="20" width="280" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="55" text-anchor="middle" font-size="16" font-weight="bold" fill="#0046C8">오케스트레이터</text>
  <!-- 화살표: 오케스트레이터 → 워커 3개 -->
  <line x1="310" y1="76" x2="130" y2="140" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <line x1="380" y1="76" x2="380" y2="140" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <line x1="450" y1="76" x2="630" y2="140" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <!-- 워커 에이전트 3개 -->
  <rect x="30" y="144" width="200" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="130" y="178" text-anchor="middle" font-size="14" font-weight="600" fill="#0046C8">프론트엔드 Agent</text>
  <rect x="280" y="144" width="200" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="380" y="178" text-anchor="middle" font-size="14" font-weight="600" fill="#0046C8">백엔드 Agent</text>
  <rect x="530" y="144" width="200" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="630" y="178" text-anchor="middle" font-size="14" font-weight="600" fill="#0046C8">테스트 Agent</text>
  <!-- 화살표: 워커 → 태스크 큐 -->
  <line x1="130" y1="200" x2="250" y2="264" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <line x1="380" y1="200" x2="310" y2="264" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <line x1="630" y1="200" x2="510" y2="264" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <!-- 태스크 큐 -->
  <rect x="200" y="260" width="200" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="300" y="294" text-anchor="middle" font-size="14" font-weight="600" fill="#0046C8">태스크 큐</text>
  <!-- 결과 통합 -->
  <rect x="440" y="260" width="200" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="540" y="294" text-anchor="middle" font-size="14" font-weight="600" fill="#0046C8">결과 통합</text>
  <!-- 화살표: 태스크 큐 → 결과 통합 -->
  <line x1="400" y1="288" x2="440" y2="288" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
</svg>`,steps:[{step:1,title:"아키텍처 설계",description:"멀티에이전트 시스템의 전체 구조를 설계합니다.",content:`멀티에이전트 시스템의 핵심은 오케스트레이터-워커 패턴입니다. 오케스트레이터가 전체 작업을 분석하고, 적절한 워커 에이전트에게 하위 태스크를 분배합니다. 각 워커는 프론트엔드, 백엔드, 테스트 등 전문 영역을 담당합니다.

설계 단계에서는 에이전트 간 통신 프로토콜, 태스크 큐 구조, 결과 통합 방식을 결정합니다. Claude Code의 Task Tool을 활용하면 하위 에이전트를 생성하고 독립적인 컨텍스트에서 작업을 수행할 수 있습니다.

아키텍처 다이어그램을 먼저 그리고, 각 에이전트의 입출력 인터페이스를 명확히 정의하세요. 이 단계가 탄탄해야 이후 구현이 수월합니다.`,tips:["에이전트 간 의존성을 최소화하면 병렬 실행 효율이 높아집니다.","각 에이전트의 책임 범위를 명확히 문서화하세요."]},{step:2,title:"CLAUDE.md 작성",description:"프로젝트 컨텍스트 문서를 작성합니다.",content:`CLAUDE.md는 Claude Code가 프로젝트를 이해하는 데 필요한 모든 맥락을 담는 파일입니다. 프로젝트 구조, 코딩 컨벤션, 사용 중인 라이브러리, 아키텍처 결정 사항을 기록합니다.

멀티에이전트 프로젝트에서는 각 에이전트가 참조할 규칙도 CLAUDE.md에 포함해야 합니다. 예를 들어 프론트엔드 에이전트는 React 컴포넌트 규칙을, 백엔드 에이전트는 API 설계 규칙을 따르도록 명시합니다.

CLAUDE.md가 잘 작성되어 있으면 에이전트가 일관된 코드를 생성하고, 사람의 개입 없이도 프로젝트 규칙을 준수합니다.`,codeExamples:[{language:"markdown",title:"CLAUDE.md 템플릿",code:`# Project: Multi-Agent Workflow

## Architecture
- Pattern: Orchestrator → Worker Agents
- Agents: Frontend, Backend, Test

## Tech Stack
- Frontend: React 19 + TypeScript + Vite
- Backend: Supabase Edge Functions
- Testing: Vitest + Playwright

## Coding Conventions
- Use functional components with hooks
- All functions must have JSDoc comments
- Error handling: try-catch with typed errors
- File naming: kebab-case for files, PascalCase for components

## Agent Rules
- Frontend Agent: components under src/components/, pages under src/pages/
- Backend Agent: functions under supabase/functions/
- Test Agent: tests mirror source structure under __tests__/`}],tips:["CLAUDE.md는 루트, 하위 폴더별로 계층 구조를 가질 수 있습니다.",'에이전트가 자주 실수하는 패턴이 있다면 "하지 말아야 할 것" 섹션을 추가하세요.']},{step:3,title:"오케스트레이터 구현",description:"태스크를 분석하고 워커에게 분배하는 메인 에이전트를 구현합니다.",content:`오케스트레이터는 사용자의 요청을 받아 하위 태스크로 분해하고, 적합한 워커 에이전트에게 할당하는 역할을 합니다. Claude Code에서는 Task Tool을 사용하여 새 에이전트 스레드를 생성할 수 있습니다.

오케스트레이터의 핵심 로직은 태스크 분해, 의존성 분석, 워커 선택, 결과 검증입니다. 각 워커에게 전달할 프롬프트를 명확하게 구성해야 정확한 결과를 얻을 수 있습니다.

실제 구현에서는 오케스트레이터가 각 워커의 완료 상태를 추적하고, 모든 워커가 끝나면 결과를 통합하는 흐름을 만듭니다.`,codeExamples:[{language:"typescript",title:"오케스트레이터 패턴",code:`interface Task {
  id: string;
  type: 'frontend' | 'backend' | 'test';
  description: string;
  dependencies: string[];
  status: 'pending' | 'running' | 'done' | 'failed';
  result?: string;
}

interface AgentResult {
  taskId: string;
  success: boolean;
  output: string;
  filesChanged: string[];
}

class Orchestrator {
  private tasks: Map<string, Task> = new Map();
  private results: AgentResult[] = [];

  async decompose(userRequest: string): Promise<Task[]> {
    // 사용자 요청을 하위 태스크로 분해
    const tasks: Task[] = [
      { id: 't1', type: 'backend', description: 'API 엔드포인트 생성', dependencies: [], status: 'pending' },
      { id: 't2', type: 'frontend', description: 'UI 컴포넌트 생성', dependencies: ['t1'], status: 'pending' },
      { id: 't3', type: 'test', description: '통합 테스트 작성', dependencies: ['t1', 't2'], status: 'pending' },
    ];
    tasks.forEach(t => this.tasks.set(t.id, t));
    return tasks;
  }

  async execute(): Promise<AgentResult[]> {
    while (this.hasPendingTasks()) {
      const ready = this.getReadyTasks();
      const promises = ready.map(task => this.runWorker(task));
      const batch = await Promise.allSettled(promises);
      batch.forEach((r, i) => {
        const task = ready[i];
        task.status = r.status === 'fulfilled' ? 'done' : 'failed';
      });
    }
    return this.results;
  }

  private hasPendingTasks(): boolean {
    return [...this.tasks.values()].some(t => t.status === 'pending');
  }

  private getReadyTasks(): Task[] {
    return [...this.tasks.values()].filter(t =>
      t.status === 'pending' &&
      t.dependencies.every(d => this.tasks.get(d)?.status === 'done')
    );
  }

  private async runWorker(task: Task): Promise<AgentResult> {
    task.status = 'running';
    // Claude Code Task Tool 호출 시뮬레이션
    const result: AgentResult = {
      taskId: task.id,
      success: true,
      output: \`\${task.type} 작업 완료: \${task.description}\`,
      filesChanged: [],
    };
    this.results.push(result);
    return result;
  }
}`}],tips:["Task Tool 호출 시 각 워커에게 충분한 컨텍스트를 전달해야 합니다.","의존성이 없는 태스크는 Promise.allSettled로 병렬 실행하세요."]},{step:4,title:"워커 에이전트 구현",description:"프론트엔드, 백엔드, 테스트 전문 에이전트를 구현합니다.",content:`각 워커 에이전트는 특정 도메인에 특화된 역할을 수행합니다. 프론트엔드 에이전트는 React 컴포넌트와 페이지를 생성하고, 백엔드 에이전트는 API와 데이터베이스 로직을 담당하며, 테스트 에이전트는 테스트 코드를 작성합니다.

워커 에이전트에게는 역할에 맞는 시스템 프롬프트를 제공해야 합니다. 예를 들어 프론트엔드 에이전트에게는 "당신은 React 전문가입니다. TypeScript와 함수형 컴포넌트만 사용하세요"와 같은 지시를 줍니다.

각 워커는 작업 완료 후 변경된 파일 목록, 성공 여부, 추가 정보를 표준화된 형식으로 반환합니다.`,tips:["워커별 시스템 프롬프트에 구체적인 기술 스택과 규칙을 포함하세요.","워커의 출력 형식을 JSON 스키마로 표준화하면 결과 통합이 쉬워집니다."]},{step:5,title:"태스크 분배 로직",description:"의존성을 분석하고 작업을 효율적으로 분배합니다.",content:`태스크 분배는 멀티에이전트 시스템의 성능을 좌우하는 핵심 요소입니다. DAG(방향 비순환 그래프) 기반으로 태스크 간 의존성을 모델링하고, 위상 정렬을 통해 실행 순서를 결정합니다.

병렬 실행이 가능한 태스크를 식별하여 동시에 처리하면 전체 소요 시간을 크게 줄일 수 있습니다. 예를 들어 서로 독립적인 컴포넌트 생성 작업은 병렬로, API에 의존하는 UI 작업은 순차적으로 실행합니다.

태스크 큐를 구현하여 대기 중인 작업, 실행 중인 작업, 완료된 작업을 체계적으로 관리하세요.`,codeExamples:[{language:"typescript",title:"태스크 분배 로직",code:`interface TaskNode {
  id: string;
  agent: 'frontend' | 'backend' | 'test';
  deps: string[];
  priority: number;
}

function topologicalSort(tasks: TaskNode[]): TaskNode[][] {
  const inDegree = new Map<string, number>();
  const adj = new Map<string, string[]>();
  const taskMap = new Map<string, TaskNode>();

  tasks.forEach(t => {
    taskMap.set(t.id, t);
    inDegree.set(t.id, t.deps.length);
    t.deps.forEach(d => {
      const list = adj.get(d) ?? [];
      list.push(t.id);
      adj.set(d, list);
    });
  });

  const batches: TaskNode[][] = [];
  let queue = tasks
    .filter(t => t.deps.length === 0)
    .sort((a, b) => b.priority - a.priority);

  while (queue.length > 0) {
    batches.push(queue);
    const next: TaskNode[] = [];
    for (const node of queue) {
      for (const neighbor of adj.get(node.id) ?? []) {
        const deg = (inDegree.get(neighbor) ?? 1) - 1;
        inDegree.set(neighbor, deg);
        if (deg === 0) next.push(taskMap.get(neighbor)!);
      }
    }
    queue = next.sort((a, b) => b.priority - a.priority);
  }
  return batches;
}

// 사용 예시
const tasks: TaskNode[] = [
  { id: 'schema', agent: 'backend', deps: [], priority: 10 },
  { id: 'api',    agent: 'backend', deps: ['schema'], priority: 8 },
  { id: 'ui',     agent: 'frontend', deps: ['api'], priority: 7 },
  { id: 'style',  agent: 'frontend', deps: [], priority: 5 },
  { id: 'e2e',    agent: 'test', deps: ['api', 'ui'], priority: 6 },
];

const batches = topologicalSort(tasks);
// batch 0: [schema, style]  ← 병렬 실행
// batch 1: [api]
// batch 2: [ui]
// batch 3: [e2e]`}],tips:["priority 값을 활용하면 같은 배치 내에서도 중요한 태스크를 먼저 처리할 수 있습니다.","순환 의존성이 발생하면 에러를 던지는 검증 로직을 반드시 추가하세요."]},{step:6,title:"에러 핸들링",description:"실패한 태스크의 재시도와 복구를 구현합니다.",content:`멀티에이전트 시스템에서는 개별 에이전트의 실패가 전체 파이프라인에 영향을 줄 수 있습니다. 재시도 로직, 지수 백오프, 최대 재시도 횟수를 설정하여 일시적 오류에 대응합니다.

에이전트가 반복적으로 실패하는 경우를 위한 폴백 전략도 필요합니다. 예를 들어 프론트엔드 에이전트가 복잡한 컴포넌트 생성에 실패하면, 더 작은 단위로 태스크를 분할하여 재시도할 수 있습니다.

모든 에러는 구조화된 로그로 기록하여 디버깅과 개선에 활용하세요. 에이전트별 성공률, 평균 소요 시간 등 메트릭을 수집하면 시스템 안정성을 높일 수 있습니다.`,tips:["재시도 시 이전 실패 원인을 프롬프트에 포함하면 같은 실수를 반복하지 않습니다.","크리티컬 태스크에는 타임아웃을 설정하여 무한 대기를 방지하세요."]},{step:7,title:"결과 통합",description:"각 에이전트의 출력을 하나의 결과물로 통합합니다.",content:`여러 에이전트가 동시에 코드를 생성하면 파일 충돌이 발생할 수 있습니다. Git 브랜치 전략을 활용하여 각 에이전트의 작업을 독립적인 브랜치에서 수행하고, 오케스트레이터가 최종 병합을 담당합니다.

결과 통합 단계에서는 코드 충돌 해결, import 경로 정리, 타입 일관성 검증을 수행합니다. 자동 병합이 불가능한 충돌이 발생하면 오케스트레이터가 사용자에게 알림을 보냅니다.

통합 후에는 반드시 빌드 검증과 기본 테스트를 실행하여 전체 시스템의 정합성을 확인합니다.`,tips:["에이전트별로 수정 가능한 파일 범위를 미리 지정하면 충돌을 줄일 수 있습니다.","통합 후 TypeScript 컴파일(tsc --noEmit)로 타입 에러를 즉시 확인하세요."]},{step:8,title:"모니터링 대시보드",description:"에이전트 상태를 실시간으로 시각화합니다.",content:`멀티에이전트 시스템의 운영에는 각 에이전트의 실시간 상태 파악이 필수입니다. 대시보드에서는 태스크 진행률, 에이전트별 상태(대기/실행/완료/실패), 소요 시간, 토큰 사용량 등을 한눈에 볼 수 있어야 합니다.

React 컴포넌트로 간단한 대시보드를 구현할 수 있습니다. 상태 업데이트는 WebSocket이나 Server-Sent Events로 실시간 반영하고, 차트 라이브러리로 추세를 시각화합니다.

대시보드에 알림 기능을 추가하면 에이전트 실패나 병목 현상을 즉시 감지하고 대응할 수 있습니다.`,tips:["콘솔 기반 모니터링도 효과적입니다. 복잡한 UI 없이 로그 스트림만으로 시작하세요.","토큰 사용량 추적은 비용 관리에 필수적이므로 초기부터 구현하세요."]},{step:9,title:"최적화",description:"성능, 비용, 품질을 종합적으로 최적화합니다.",content:`멀티에이전트 시스템의 최적화는 세 가지 축에서 진행합니다. 첫째, 성능 최적화 - 병렬 처리율을 높이고 불필요한 대기 시간을 제거합니다. 둘째, 비용 최적화 - 토큰 사용량을 줄이고 캐싱을 활용합니다. 셋째, 품질 최적화 - 에이전트의 출력 정확도를 높입니다.

프롬프트 캐싱을 활용하면 반복적인 컨텍스트 전달에 드는 토큰을 절약할 수 있습니다. 이전에 생성한 코드 패턴을 재사용하는 템플릿 시스템도 효과적입니다.

정기적으로 에이전트별 성공률과 소요 시간을 분석하고, 병목이 되는 구간을 식별하여 프롬프트나 태스크 분배 전략을 조정합니다.`,tips:["작은 태스크를 묶어서 한 번에 처리하면 API 호출 횟수를 줄일 수 있습니다.","CLAUDE.md를 지속적으로 업데이트하면 에이전트의 초기 컨텍스트 파악 시간이 단축됩니다."]},{step:10,title:"문서화 & 공유",description:"프로젝트를 문서화하고 팀과 공유합니다.",content:`멀티에이전트 시스템의 문서화는 아키텍처 다이어그램, 에이전트별 역할 명세, 실행 방법, 트러블슈팅 가이드를 포함해야 합니다. 다른 개발자가 시스템을 이해하고 확장할 수 있도록 충분한 맥락을 제공하세요.

README에는 빠른 시작 가이드, 설정 방법, 커스텀 에이전트 추가 방법을 포함합니다. 실행 예시와 예상 출력도 함께 기록하면 진입 장벽을 낮출 수 있습니다.

프로젝트를 GitHub에 공유하고, 블로그나 기술 발표를 통해 멀티에이전트 패턴의 실전 경험을 공유하면 커뮤니티에 큰 기여가 됩니다.`,tips:['아키텍처 결정 기록(ADR)을 남기면 "왜 이렇게 만들었는지"를 미래의 자신에게 설명할 수 있습니다.',"CHANGELOG를 유지하여 시스템의 진화 과정을 추적하세요."]}],sourceFiles:[{filename:"package.json",language:"json",code:`{
  "name": "multi-agent-workflow",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "tsx watch src/index.ts"
  },
  "dependencies": {
    "zod": "^3.23.0"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "tsx": "^4.19.0",
    "@types/node": "^22.0.0"
  }
}`},{filename:"tsconfig.json",language:"json",code:`{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "declaration": true
  },
  "include": ["src"]
}`},{filename:"src/types.ts",language:"typescript",code:`export type AgentType = 'frontend' | 'backend' | 'test';
export type TaskStatus = 'pending' | 'running' | 'done' | 'failed';

export interface Task {
  id: string;
  type: AgentType;
  description: string;
  dependencies: string[];
  status: TaskStatus;
  result?: string;
  error?: string;
}

export interface AgentResult {
  taskId: string;
  success: boolean;
  output: string;
  filesChanged: string[];
  duration: number;
}

export interface AgentConfig {
  type: AgentType;
  systemPrompt: string;
  maxRetries: number;
  timeout: number;
}

export interface OrchestratorConfig {
  agents: AgentConfig[];
  maxConcurrency: number;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}`},{filename:"src/orchestrator.ts",language:"typescript",code:`import type { Task, AgentResult, OrchestratorConfig } from './types.js';
import { WorkerAgent } from './worker.js';
import { TaskQueue } from './task-queue.js';

export class Orchestrator {
  private queue: TaskQueue;
  private workers: Map<string, WorkerAgent> = new Map();
  private results: AgentResult[] = [];

  constructor(private config: OrchestratorConfig) {
    this.queue = new TaskQueue();
    for (const agentCfg of config.agents) {
      this.workers.set(agentCfg.type, new WorkerAgent(agentCfg));
    }
  }

  async decompose(userRequest: string): Promise<Task[]> {
    // 사용자 요청을 하위 태스크로 분해
    const tasks: Task[] = [
      { id: 't1', type: 'backend', description: 'DB 스키마 생성', dependencies: [], status: 'pending' },
      { id: 't2', type: 'backend', description: 'API 엔드포인트 구현', dependencies: ['t1'], status: 'pending' },
      { id: 't3', type: 'frontend', description: 'UI 컴포넌트 생성', dependencies: ['t2'], status: 'pending' },
      { id: 't4', type: 'frontend', description: 'CSS 스타일링', dependencies: [], status: 'pending' },
      { id: 't5', type: 'test', description: '통합 테스트 작성', dependencies: ['t2', 't3'], status: 'pending' },
    ];
    tasks.forEach(t => this.queue.add(t));
    console.log(\`[Orchestrator] \${tasks.length}개 태스크 분해 완료\`);
    return tasks;
  }

  async execute(): Promise<AgentResult[]> {
    while (this.queue.hasPending()) {
      const ready = this.queue.getReady();
      if (ready.length === 0) {
        await new Promise(r => setTimeout(r, 100));
        continue;
      }

      const batch = ready.slice(0, this.config.maxConcurrency);
      console.log(\`[Orchestrator] 배치 실행: \${batch.map(t => t.id).join(', ')}\`);

      const promises = batch.map(task => this.runWorker(task));
      const settled = await Promise.allSettled(promises);

      settled.forEach((result, i) => {
        const task = batch[i];
        if (result.status === 'fulfilled') {
          task.status = 'done';
          task.result = result.value.output;
          this.results.push(result.value);
        } else {
          task.status = 'failed';
          task.error = String(result.reason);
        }
        this.queue.update(task);
      });
    }

    return this.results;
  }

  private async runWorker(task: Task): Promise<AgentResult> {
    const worker = this.workers.get(task.type);
    if (!worker) throw new Error(\`Worker not found: \${task.type}\`);
    task.status = 'running';
    this.queue.update(task);
    return worker.execute(task);
  }

  getStatus() {
    return {
      total: this.queue.size(),
      pending: this.queue.countByStatus('pending'),
      running: this.queue.countByStatus('running'),
      done: this.queue.countByStatus('done'),
      failed: this.queue.countByStatus('failed'),
    };
  }
}`},{filename:"src/worker.ts",language:"typescript",code:`import type { Task, AgentResult, AgentConfig } from './types.js';

export class WorkerAgent {
  constructor(private config: AgentConfig) {}

  async execute(task: Task): Promise<AgentResult> {
    const start = Date.now();
    console.log(\`[\${this.config.type}] 시작: \${task.description}\`);

    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= this.config.maxRetries; attempt++) {
      try {
        const output = await this.runWithTimeout(task, this.config.timeout);
        const duration = Date.now() - start;
        console.log(\`[\${this.config.type}] 완료: \${task.description} (\${duration}ms)\`);
        return {
          taskId: task.id,
          success: true,
          output,
          filesChanged: [],
          duration,
        };
      } catch (err) {
        lastError = err instanceof Error ? err : new Error(String(err));
        if (attempt < this.config.maxRetries) {
          const delay = Math.pow(2, attempt) * 1000;
          console.log(\`[\${this.config.type}] 재시도 \${attempt + 1}/\${this.config.maxRetries} (\${delay}ms 대기)\`);
          await new Promise(r => setTimeout(r, delay));
        }
      }
    }

    return {
      taskId: task.id,
      success: false,
      output: \`실패: \${lastError?.message}\`,
      filesChanged: [],
      duration: Date.now() - start,
    };
  }

  private async runWithTimeout(task: Task, timeout: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Timeout')), timeout);

      // 실제 구현에서는 Claude Code Task Tool 호출
      // 여기서는 시뮬레이션
      setTimeout(() => {
        clearTimeout(timer);
        resolve(\`[\${this.config.type}] \${task.description} 완료\`);
      }, Math.random() * 2000 + 500);
    });
  }
}`},{filename:"src/task-queue.ts",language:"typescript",code:`import type { Task, TaskStatus } from './types.js';

export class TaskQueue {
  private tasks: Map<string, Task> = new Map();

  add(task: Task): void {
    this.tasks.set(task.id, task);
  }

  update(task: Task): void {
    this.tasks.set(task.id, task);
  }

  get(id: string): Task | undefined {
    return this.tasks.get(id);
  }

  getReady(): Task[] {
    return [...this.tasks.values()].filter(t =>
      t.status === 'pending' &&
      t.dependencies.every(depId => {
        const dep = this.tasks.get(depId);
        return dep?.status === 'done';
      })
    );
  }

  hasPending(): boolean {
    return [...this.tasks.values()].some(
      t => t.status === 'pending' || t.status === 'running'
    );
  }

  size(): number {
    return this.tasks.size;
  }

  countByStatus(status: TaskStatus): number {
    return [...this.tasks.values()].filter(t => t.status === status).length;
  }

  getAll(): Task[] {
    return [...this.tasks.values()];
  }
}`},{filename:"src/config.ts",language:"typescript",code:`import type { OrchestratorConfig } from './types.js';

export const defaultConfig: OrchestratorConfig = {
  maxConcurrency: 3,
  logLevel: 'info',
  agents: [
    {
      type: 'frontend',
      systemPrompt: \`당신은 React 프론트엔드 전문가입니다.
- TypeScript + 함수형 컴포넌트만 사용
- CSS Modules 또는 Tailwind 사용
- 모든 컴포넌트에 Props 인터페이스 정의
- 에러 바운더리 필수 적용\`,
      maxRetries: 2,
      timeout: 30000,
    },
    {
      type: 'backend',
      systemPrompt: \`당신은 Supabase 백엔드 전문가입니다.
- PostgreSQL + RLS 기반 보안
- Edge Functions (Deno) 사용
- 모든 API에 입력 검증 (zod)
- 에러 응답 형식: { error: string, code: string }\`,
      maxRetries: 2,
      timeout: 30000,
    },
    {
      type: 'test',
      systemPrompt: \`당신은 테스트 엔지니어입니다.
- Vitest + React Testing Library 사용
- 유닛 테스트 + 통합 테스트 작성
- 커버리지 80% 이상 목표
- 엣지 케이스 반드시 포함\`,
      maxRetries: 1,
      timeout: 60000,
    },
  ],
};`},{filename:"src/index.ts",language:"typescript",code:`import { Orchestrator } from './orchestrator.js';
import { defaultConfig } from './config.js';

async function main() {
  console.log('=== 멀티에이전트 워크플로우 시작 ===\\n');

  const orchestrator = new Orchestrator(defaultConfig);

  // 1. 태스크 분해
  const tasks = await orchestrator.decompose(
    '게시판 CRUD 기능을 만들어줘. 목록, 작성, 수정, 삭제 페이지와 API가 필요해.'
  );
  console.log(\`\\n분해된 태스크: \${tasks.length}개\\n\`);

  // 2. 실행
  const results = await orchestrator.execute();

  // 3. 결과 요약
  console.log('\\n=== 실행 결과 ===');
  const status = orchestrator.getStatus();
  console.log(\`전체: \${status.total} | 완료: \${status.done} | 실패: \${status.failed}\`);

  for (const r of results) {
    const icon = r.success ? '✓' : '✗';
    console.log(\`  \${icon} [\${r.taskId}] \${r.output} (\${r.duration}ms)\`);
  }
}

main().catch(console.error);`},{filename:"CLAUDE.md",language:"markdown",code:`# Multi-Agent Workflow

## Architecture
- Pattern: Orchestrator → Worker Agents
- Agents: Frontend (React), Backend (Supabase), Test (Vitest)
- Task Queue: In-memory Map with dependency tracking

## Tech Stack
- Runtime: Node.js 20+ (ESM)
- Language: TypeScript 5.7+
- Build: tsc → dist/

## Coding Conventions
- Functional style preferred, classes for stateful components (Orchestrator, Worker)
- All async functions must have error handling
- Use console.log for orchestration logs, console.error for errors
- File naming: kebab-case.ts

## Agent Rules
- Frontend Agent: React 19 + TypeScript, functional components only
- Backend Agent: Supabase + PostgreSQL, RLS required
- Test Agent: Vitest, coverage > 80%

## Commands
- \\\`npm run build\\\` — TypeScript 컴파일
- \\\`npm start\\\` — 실행
- \\\`npm run dev\\\` — 개발 모드 (watch)`}]},t={id:"mcp-server",slug:"mcp-server",title:"MCP 서버 구축",description:"Node.js로 커스텀 MCP 서버를 직접 개발하여 AI 도구를 확장합니다.",level:"advanced",duration:"8-10시간",techStack:["Node.js","MCP SDK","TypeScript","Claude Code"],outcomes:["MCP 프로토콜 완전 이해","Tool/Resource/Prompt 구현","커스텀 MCP 서버 개발 및 배포","Claude Code 확장 능력"],diagram:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 370" font-family="'Noto Sans KR', sans-serif">
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
</svg>`,steps:[{step:1,title:"MCP 프로토콜 이해",description:"Model Context Protocol의 핵심 개념과 아키텍처를 학습합니다.",content:`MCP(Model Context Protocol)는 AI 모델이 외부 도구, 데이터 소스, 프롬프트 템플릿에 접근할 수 있게 해주는 개방형 표준 프로토콜입니다. Anthropic이 2024년 말에 공개했으며, AI 애플리케이션의 확장성을 획기적으로 높여줍니다.

MCP의 핵심 구성요소는 세 가지입니다. Tool은 AI가 실행할 수 있는 함수(파일 검색, API 호출 등), Resource는 AI가 읽을 수 있는 데이터(파일 내용, DB 레코드 등), Prompt는 재사용 가능한 프롬프트 템플릿입니다. 이 세 가지를 서버에 등록하면 Claude가 자동으로 인식하고 활용합니다.

통신 방식은 stdio(표준 입출력)와 SSE(Server-Sent Events) 두 가지가 있습니다. 로컬 개발에서는 stdio를 사용하고, 원격 서버 배포 시에는 SSE를 사용합니다. JSON-RPC 2.0 프로토콜 위에서 동작하며, 요청-응답 패턴을 따릅니다.`,tips:["MCP 공식 문서(modelcontextprotocol.io)를 먼저 정독하세요.","Claude Desktop에 이미 내장된 MCP 서버들(filesystem, git 등)을 먼저 사용해보면 개념이 잡힙니다."]},{step:2,title:"프로젝트 초기화",description:"MCP 서버 프로젝트를 셋업하고 의존성을 설치합니다.",content:`새 디렉토리를 만들고 npm init으로 프로젝트를 초기화합니다. 핵심 패키지인 @modelcontextprotocol/sdk와 TypeScript 관련 패키지를 설치합니다. tsconfig.json에서 module을 NodeNext로 설정하고, package.json의 type을 module로 지정합니다.

프로젝트 구조는 단순하게 시작합니다. src/index.ts에 메인 서버 코드를 작성하고, 빌드 결과물은 dist/ 폴더에 출력합니다. bin 필드를 package.json에 추가하면 npx로 실행 가능한 CLI 도구가 됩니다.

shebang(#!/usr/bin/env node)을 빌드 출력 파일 최상단에 추가하는 것을 잊지 마세요. stdio 트랜스포트를 사용할 때 Claude Desktop이 이 파일을 직접 실행하기 때문입니다.`,tips:["Node.js 18 이상을 사용하세요. SDK가 최신 ES 모듈 기능을 필요로 합니다.","zod 패키지도 함께 설치하세요. Tool의 입력 스키마 검증에 사용됩니다."],codeExamples:[{language:"typescript",title:"MCP 서버 기본 셋업 (src/index.ts)",code:`import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "my-mcp-server",
  version: "1.0.0",
  description: "나만의 MCP 서버"
});

// Tool, Resource, Prompt를 여기에 등록합니다

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("MCP 서버가 시작되었습니다.");`}]},{step:3,title:"첫 번째 Tool",description:"zod 스키마 검증을 활용한 Tool을 구현합니다.",content:`Tool은 AI가 호출할 수 있는 함수입니다. server.tool() 메서드로 등록하며, 이름, 설명, 입력 스키마, 핸들러 함수를 정의합니다. 입력 스키마는 zod를 사용하여 타입 안전하게 검증됩니다.

핸들러 함수는 반드시 content 배열을 반환해야 합니다. 각 요소는 type과 text 필드를 가지며, type은 주로 "text"를 사용합니다. 에러 발생 시 isError: true를 함께 반환하면 Claude가 에러 상황을 인지하고 적절히 대응합니다.

첫 Tool로는 현재 시간 조회, 파일 목록 조회 등 단순한 기능부터 시작하세요. 동작을 확인한 후 점진적으로 복잡한 로직을 추가합니다.`,tips:["Tool 설명(description)을 명확하게 작성해야 Claude가 적절한 시점에 올바른 Tool을 선택합니다.","하나의 Tool이 하나의 일만 하도록 설계하세요 (단일 책임 원칙)."],codeExamples:[{language:"typescript",title:"Tool 구현 - zod 스키마 검증",code:`import { z } from "zod";

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
);`}]},{step:4,title:"Resource 구현",description:"AI가 읽을 수 있는 데이터 소스를 Resource로 노출합니다.",content:`Resource는 URI로 식별되는 읽기 전용 데이터입니다. 파일 내용, 데이터베이스 레코드, API 응답 등을 Resource로 노출하면 Claude가 필요할 때 데이터를 읽어올 수 있습니다. server.resource() 메서드로 등록합니다.

Resource URI는 "프로토콜://경로" 형식을 따릅니다. 예를 들어 "config://app-settings"이나 "db://users/list" 같은 커스텀 URI를 정의할 수 있습니다. 동적 데이터의 경우 Resource Template을 활용하면 URI 패턴에 변수를 포함할 수 있습니다.

Resource는 Tool과 달리 부작용(side effect)이 없어야 합니다. 데이터를 변경하는 작업은 반드시 Tool로 구현하세요. Resource는 순수하게 데이터 조회 용도로만 사용합니다.`,tips:["Resource URI에 일관된 네이밍 컨벤션을 적용하세요 (예: db://테이블명/액션).","민감한 데이터는 Resource로 노출하지 마세요. MCP 서버는 로컬에서 실행되지만, 보안 습관은 중요합니다."],codeExamples:[{language:"typescript",title:"Resource 구현 예시",code:`// 정적 Resource
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
);`}]},{step:5,title:"에러 핸들링",description:"입력 검증, 타임아웃, 에러 복구를 체계적으로 구현합니다.",content:`프로덕션급 MCP 서버에는 철저한 에러 핸들링이 필수입니다. zod 스키마 검증은 기본이고, 비즈니스 로직 수준의 검증도 추가해야 합니다. 파일 경로가 허용된 범위 안에 있는지, API 요청 횟수가 제한을 넘지 않는지 등을 확인합니다.

외부 API 호출이나 파일 시스템 접근 시에는 반드시 타임아웃을 설정하세요. AbortController를 활용하면 일정 시간 내에 응답이 없을 때 요청을 취소할 수 있습니다. 네트워크 에러의 경우 재시도 로직을 추가하는 것도 좋습니다.

모든 에러 메시지는 사용자 친화적으로 작성합니다. Claude가 이 메시지를 읽고 사용자에게 전달하거나 다른 접근 방식을 시도하기 때문입니다. 스택 트레이스보다는 "무엇이 잘못되었고, 어떻게 해결할 수 있는지"를 명확히 전달하세요.`,tips:["console.error()로 서버 측 로그를 남기세요. stdio 전송에서 stderr은 로그 채널로 사용됩니다.",'process.on("uncaughtException")으로 예상치 못한 에러도 처리하세요.']},{step:6,title:"Claude Code 연동",description:"claude_desktop_config.json에 서버를 등록하고 실제로 사용합니다.",content:`개발한 MCP 서버를 Claude Desktop(또는 Claude Code)에 연동합니다. 설정 파일 위치는 OS별로 다릅니다: macOS는 ~/Library/Application Support/Claude/, Windows는 %APPDATA%/Claude/ 경로에 claude_desktop_config.json 파일을 생성하거나 수정합니다.

설정 파일에서 서버의 실행 방식(command), 인수(args), 환경변수(env)를 지정합니다. node로 빌드된 JS 파일을 직접 실행하거나, npx로 패키지를 실행할 수 있습니다. 서버를 등록한 후 Claude Desktop을 재시작하면 새로운 Tool과 Resource가 인식됩니다.

연동 후에는 Claude에게 Tool 사용을 요청해보세요. "파일을 검색해줘"처럼 자연어로 요청하면 Claude가 등록된 search-files Tool을 자동으로 호출합니다. 응답이 예상대로 오는지 확인하고, 문제가 있으면 stderr 로그를 확인합니다.`,tips:["Claude Desktop의 개발자 도구(Ctrl+Shift+I)에서 MCP 로그를 확인할 수 있습니다.","서버 코드를 수정할 때마다 Claude Desktop을 재시작해야 변경사항이 반영됩니다."],codeExamples:[{language:"json",title:"claude_desktop_config.json 설정",code:`{
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
}`}]},{step:7,title:"고급 기능",description:"Prompt 템플릿, 캐싱, 인증 등 고급 기능을 추가합니다.",content:`Prompt는 재사용 가능한 프롬프트 템플릿입니다. server.prompt()로 등록하며, 인수를 받아 동적 프롬프트를 생성할 수 있습니다. 코드 리뷰, 번역, 분석 등 반복되는 작업 패턴을 Prompt로 만들면 효율적입니다.

캐싱은 동일한 요청에 대한 응답을 메모리에 저장하여 성능을 높입니다. Map 객체를 활용한 단순 캐시부터, TTL(Time To Live)을 적용한 만료 캐시까지 상황에 맞게 구현합니다. 외부 API 호출이 잦은 Tool에 특히 효과적입니다.

인증이 필요한 API를 래핑하는 경우, 환경변수로 API 키를 전달받아 사용합니다. claude_desktop_config.json의 env 필드에 키를 설정하고, 서버 코드에서 process.env로 접근합니다. 민감한 키는 절대 코드에 하드코딩하지 마세요.`,tips:['Prompt 템플릿은 사용자가 Claude Desktop UI의 "/" 메뉴에서 직접 선택할 수 있습니다.',"캐시 무효화 전략을 미리 정해두세요. 데이터가 오래되면 잘못된 결과를 반환할 수 있습니다."]},{step:8,title:"테스트",description:"MCP Inspector와 자동화 테스트로 서버를 검증합니다.",content:`MCP Inspector는 MCP 서버를 대화형으로 테스트할 수 있는 공식 도구입니다. npx @modelcontextprotocol/inspector 명령으로 실행하면 브라우저 기반 UI에서 Tool 호출, Resource 조회, Prompt 실행을 직접 테스트할 수 있습니다.

자동화 테스트에서는 MCP SDK의 Client 클래스를 활용합니다. 인메모리 트랜스포트로 서버와 클라이언트를 직접 연결하면 실제 stdio 없이도 전체 프로토콜 흐름을 테스트할 수 있습니다. Jest나 Vitest로 각 Tool의 입출력을 검증하세요.

엣지 케이스 테스트를 반드시 포함하세요. 잘못된 입력, 빈 데이터, 타임아웃, 대용량 응답 등 예외 상황에서 서버가 크래시하지 않고 적절한 에러 메시지를 반환하는지 확인합니다.`,tips:["npx @modelcontextprotocol/inspector로 수동 테스트를 먼저 하고, 자동화 테스트를 작성하세요.","CI/CD에서 MCP 테스트를 자동 실행하도록 설정하면 회귀 버그를 방지할 수 있습니다."]},{step:9,title:"배포 & 공유",description:"npm 패키지 또는 Docker로 배포하고 커뮤니티에 공유합니다.",content:`npm에 배포하면 누구나 npx로 서버를 즉시 실행할 수 있습니다. package.json에 bin 필드를 설정하고, npm publish로 배포합니다. 패키지 이름은 @username/mcp-server-기능명 형식을 권장합니다.

Docker 이미지로 만들면 환경 의존성 없이 배포할 수 있습니다. 특히 SSE 트랜스포트를 사용하는 원격 서버의 경우 Docker + Cloud Run 조합이 효과적입니다. Dockerfile에 Node.js 런타임과 빌드 결과물을 포함시킵니다.

GitHub에 소스 코드를 공개하고, README에 설치 방법, 설정 예시, 지원하는 Tool/Resource 목록을 명시하세요. MCP 서버 디렉토리(mcp.run, Smithery 등)에 등록하면 더 많은 사용자가 발견하고 사용할 수 있습니다.`,tips:["npm 배포 전 npx로 로컬 테스트를 반드시 해보세요: npx . 으로 현재 디렉토리의 패키지를 실행할 수 있습니다.","README에 claude_desktop_config.json 설정 예시를 포함하면 사용자가 바로 연동할 수 있습니다."]}],sourceFiles:[{filename:"package.json",language:"json",code:`{
  "name": "@example/mcp-server",
  "version": "1.0.0",
  "type": "module",
  "bin": {
    "mcp-server": "dist/index.js"
  },
  "scripts": {
    "build": "tsc && node -e \\"const fs=require('fs');const f='dist/index.js';const c=fs.readFileSync(f,'utf8');fs.writeFileSync(f,'#!/usr/bin/env node\\\\n'+c)\\"",
    "dev": "tsx watch src/index.ts",
    "inspect": "npx @modelcontextprotocol/inspector node dist/index.js"
  },
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.12.0",
    "zod": "^3.23.0"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "tsx": "^4.19.0",
    "@types/node": "^22.0.0"
  }
}`},{filename:"tsconfig.json",language:"json",code:`{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "declaration": true
  },
  "include": ["src"]
}`},{filename:"src/index.ts",language:"typescript",code:`import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerTools } from "./tools.js";
import { registerResources } from "./resources.js";
import { registerPrompts } from "./prompts.js";

const server = new McpServer({
  name: "my-mcp-server",
  version: "1.0.0",
  description: "파일 검색, 프로젝트 분석, 코드 리뷰를 지원하는 MCP 서버",
});

// 기능 등록
registerTools(server);
registerResources(server);
registerPrompts(server);

// 서버 시작
const transport = new StdioServerTransport();
await server.connect(transport);
console.error("MCP 서버가 시작되었습니다.");`},{filename:"src/tools.ts",language:"typescript",code:`import { z } from "zod";
import { readdir, readFile, stat } from "fs/promises";
import { join, extname } from "path";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function registerTools(server: McpServer): void {
  // Tool 1: 파일 검색
  server.tool(
    "search-files",
    "디렉토리에서 확장자 기준으로 파일을 검색합니다.",
    {
      directory: z.string().describe("검색할 디렉토리 경로"),
      extension: z.string().describe("파일 확장자 (예: .ts, .tsx)"),
      maxResults: z.number().optional().default(20).describe("최대 결과 수"),
    },
    async ({ directory, extension, maxResults }) => {
      try {
        const files = await findFiles(directory, extension, maxResults);
        return {
          content: [{
            type: "text" as const,
            text: JSON.stringify(files, null, 2),
          }],
        };
      } catch (error) {
        return {
          content: [{ type: "text" as const, text: \`오류: \${error}\` }],
          isError: true,
        };
      }
    }
  );

  // Tool 2: 파일 통계
  server.tool(
    "file-stats",
    "디렉토리의 파일 통계를 반환합니다.",
    {
      directory: z.string().describe("분석할 디렉토리 경로"),
    },
    async ({ directory }) => {
      try {
        const stats = await getDirectoryStats(directory);
        return {
          content: [{
            type: "text" as const,
            text: JSON.stringify(stats, null, 2),
          }],
        };
      } catch (error) {
        return {
          content: [{ type: "text" as const, text: \`오류: \${error}\` }],
          isError: true,
        };
      }
    }
  );
}

async function findFiles(dir: string, ext: string, max: number): Promise<string[]> {
  const results: string[] = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (results.length >= max) break;
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      results.push(...await findFiles(fullPath, ext, max - results.length));
    } else if (entry.isFile() && extname(entry.name) === ext) {
      results.push(fullPath);
    }
  }
  return results;
}

async function getDirectoryStats(dir: string) {
  const counts: Record<string, number> = {};
  let totalSize = 0;
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  for (const entry of entries) {
    if (!entry.isFile()) continue;
    const ext = extname(entry.name) || '(no ext)';
    counts[ext] = (counts[ext] ?? 0) + 1;
    try {
      const s = await stat(join(dir, entry.name));
      totalSize += s.size;
    } catch { /* skip */ }
  }
  return { filesByExtension: counts, totalFiles: Object.values(counts).reduce((a, b) => a + b, 0), totalSizeKB: Math.round(totalSize / 1024) };
}`},{filename:"src/resources.ts",language:"typescript",code:`import { readFile } from "fs/promises";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function registerResources(server: McpServer): void {
  // Resource: 프로젝트 설정
  server.resource(
    "project-config",
    "config://project",
    { description: "현재 프로젝트의 package.json 정보를 반환합니다." },
    async (uri) => {
      try {
        const pkg = await readFile("package.json", "utf-8");
        return {
          contents: [{
            uri: uri.href,
            mimeType: "application/json",
            text: pkg,
          }],
        };
      } catch {
        return {
          contents: [{
            uri: uri.href,
            mimeType: "text/plain",
            text: "package.json을 찾을 수 없습니다.",
          }],
        };
      }
    }
  );

  // Resource: README
  server.resource(
    "readme",
    "docs://readme",
    { description: "프로젝트 README 내용을 반환합니다." },
    async (uri) => {
      try {
        const readme = await readFile("README.md", "utf-8");
        return {
          contents: [{
            uri: uri.href,
            mimeType: "text/markdown",
            text: readme,
          }],
        };
      } catch {
        return {
          contents: [{
            uri: uri.href,
            mimeType: "text/plain",
            text: "README.md를 찾을 수 없습니다.",
          }],
        };
      }
    }
  );
}`},{filename:"src/prompts.ts",language:"typescript",code:`import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function registerPrompts(server: McpServer): void {
  // Prompt: 코드 리뷰
  server.prompt(
    "code-review",
    "코드 리뷰를 수행하는 프롬프트 템플릿입니다.",
    {
      language: z.string().describe("프로그래밍 언어"),
      focus: z.string().optional().describe("리뷰 초점 (performance, security, readability)"),
    },
    ({ language, focus }) => ({
      messages: [{
        role: "user" as const,
        content: {
          type: "text" as const,
          text: \`다음 \${language} 코드를 리뷰해주세요.
\${focus ? \`특히 \${focus}에 집중해서 리뷰해주세요.\` : ''}

리뷰 형식:
1. 전체 평가 (A/B/C/D)
2. 잘한 점
3. 개선할 점 (구체적인 코드 예시 포함)
4. 보안 이슈 (있다면)
5. 성능 최적화 제안 (있다면)\`,
        },
      }],
    })
  );

  // Prompt: 버그 분석
  server.prompt(
    "debug-helper",
    "에러 메시지를 분석하고 해결책을 제안합니다.",
    {
      errorMessage: z.string().describe("에러 메시지"),
      context: z.string().optional().describe("에러 발생 맥락"),
    },
    ({ errorMessage, context }) => ({
      messages: [{
        role: "user" as const,
        content: {
          type: "text" as const,
          text: \`에러가 발생했습니다. 분석해주세요.

에러 메시지:
\\\`\\\`\\\`
\${errorMessage}
\\\`\\\`\\\`

\${context ? \`맥락: \${context}\` : ''}

분석 형식:
1. 에러 원인
2. 해결 방법 (코드 예시)
3. 재발 방지 방법\`,
        },
      }],
    })
  );
}`},{filename:"claude_desktop_config.json",language:"json",code:`{
  "mcpServers": {
    "my-mcp-server": {
      "command": "node",
      "args": ["C:/projects/my-mcp-server/dist/index.js"],
      "env": {}
    }
  }
}`}]},s={id:"spec-driven-app",slug:"spec-driven-app",title:"Spec-Driven 풀앱 개발",description:"PRD → 구조화명세 → 자동구현 → 배포까지 완전 자동화.",level:"advanced",duration:"10-12시간",techStack:["Claude Code","React","Supabase","GitHub Actions"],outcomes:["Spec-Driven 개발 프로세스 체득","PRD → 코드 자동 변환","CI/CD 파이프라인 구축","명세 기반 자동 테스트 생성"],diagram:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" font-family="'Noto Sans KR', sans-serif">
  <defs>
    <marker id="ah" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#0046C8"/>
    </marker>
  </defs>
  <!-- Row 1 -->
  <rect x="20" y="40" width="140" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="90" y="74" text-anchor="middle" font-size="15" font-weight="bold" fill="#0046C8">PRD</text>
  <line x1="160" y1="68" x2="195" y2="68" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <rect x="200" y="40" width="140" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="270" y="74" text-anchor="middle" font-size="15" font-weight="bold" fill="#0046C8">구조화 명세</text>
  <line x1="340" y1="68" x2="375" y2="68" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <rect x="380" y="40" width="140" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="450" y="74" text-anchor="middle" font-size="15" font-weight="bold" fill="#0046C8">DB 스키마</text>
  <line x1="520" y1="68" x2="555" y2="68" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <rect x="560" y="40" width="140" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="630" y="74" text-anchor="middle" font-size="15" font-weight="bold" fill="#0046C8">API</text>
  <!-- Connector Row1 → Row2 -->
  <path d="M 630 96 L 630 160 Q 630 180 610 180 L 155 180" fill="none" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <!-- Row 2 -->
  <rect x="20" y="152" width="140" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="90" y="186" text-anchor="middle" font-size="15" font-weight="bold" fill="#0046C8">프론트엔드</text>
  <line x1="20" y1="180" x2="195" y2="180" stroke="none"/>
  <rect x="200" y="152" width="140" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="270" y="186" text-anchor="middle" font-size="15" font-weight="bold" fill="#0046C8">테스트</text>
  <line x1="160" y1="180" x2="195" y2="180" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <line x1="340" y1="180" x2="375" y2="180" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <rect x="380" y="152" width="140" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="450" y="186" text-anchor="middle" font-size="15" font-weight="bold" fill="#0046C8">CI/CD</text>
  <line x1="520" y1="180" x2="555" y2="180" stroke="#0046C8" stroke-width="2" marker-end="url(#ah)"/>
  <rect x="560" y="152" width="140" height="56" rx="8" fill="#F0F4FF" stroke="#0046C8" stroke-width="2"/>
  <text x="630" y="186" text-anchor="middle" font-size="15" font-weight="bold" fill="#0046C8">배포</text>
  <!-- Labels -->
  <text x="380" y="260" text-anchor="middle" font-size="13" fill="#555">Spec-Driven: 명세가 바뀌면 코드가 따라간다</text>
  <text x="380" y="290" text-anchor="middle" font-size="12" fill="#888">PRD → 구조화 명세 → 자동 구현 → 자동 테스트 → 자동 배포</text>
</svg>`,steps:[{step:1,title:"PRD 작성",description:"제품 요구사항 문서(PRD)를 체계적으로 작성합니다.",content:`Spec-Driven 개발의 출발점은 PRD입니다. 비즈니스 목표, 타깃 사용자, 핵심 기능을 명확히 정의합니다. "무엇을 만들 것인가"를 자연어로 작성하되, Claude Code가 해석할 수 있도록 구조화된 마크다운 형식을 사용합니다.

PRD에는 기능 목록(Features), 사용자 스토리(User Stories), 비기능 요구사항(NFR), 우선순위를 포함합니다. 각 기능에는 수용 기준(Acceptance Criteria)을 반드시 작성하여, 이후 자동 테스트 생성의 기초가 되도록 합니다.

작성된 PRD는 CLAUDE.md에 요약을 포함시키고, 전체 문서는 docs/PRD.md 경로에 저장합니다. 이후 모든 단계는 이 문서를 기준으로 동작합니다.`,tips:["기능마다 Acceptance Criteria를 반드시 작성하세요 — 이것이 자동 테스트의 원재료입니다.",'Claude Code에 "PRD.md를 읽고 기능 목록을 정리해줘"라고 요청하면 빠진 항목을 찾아줍니다.'],codeExamples:[{language:"markdown",title:"PRD 마크다운 템플릿",code:`# PRD: 프로젝트명

## 1. 개요
- **목표**: 핵심 비즈니스 목표
- **타깃 사용자**: 주요 사용자 그룹
- **성공 지표**: MAU 1,000 / 전환율 5%

## 2. 기능 명세
### F-001: 회원가입
- 이메일/비밀번호 또는 소셜 로그인
- **수용 기준**:
  - [ ] 이메일 중복 시 에러 메시지 표시
  - [ ] 가입 후 프로필 페이지로 리다이렉트

### F-002: 대시보드
- 사용자별 데이터 시각화
- **수용 기준**:
  - [ ] 로그인 후 3초 이내 로딩
  - [ ] 차트 필터링 동작

## 3. 비기능 요구사항
- 응답 시간 < 500ms (p95)
- Lighthouse 성능 점수 > 85
- 모바일 반응형 필수`}]},{step:2,title:"구조화 명세 생성",description:"PRD를 기술 명세로 변환하여 자동 구현의 토대를 만듭니다.",content:`PRD의 자연어를 Claude Code가 직접 소비할 수 있는 구조화 명세로 변환합니다. "PRD.md를 기반으로 기술 명세를 생성해줘"라는 프롬프트로 시작하면, 데이터 모델, API 엔드포인트, 컴포넌트 트리를 자동으로 추출할 수 있습니다.

구조화 명세는 세 가지 산출물로 구성됩니다. 첫째, 데이터 모델(ERD) — 테이블, 컬럼, 관계를 정의합니다. 둘째, API 명세 — 엔드포인트, 요청/응답 스키마를 정의합니다. 셋째, 컴포넌트 명세 — 페이지별 컴포넌트 트리와 상태 관리를 정의합니다.

이 문서들은 docs/spec/ 디렉토리에 저장합니다. 명세가 변경되면 영향 범위를 자동으로 분석하는 것이 Spec-Driven 개발의 핵심 원리입니다.`,tips:['"PRD의 F-001부터 F-005까지 데이터 모델을 추출해줘"처럼 범위를 지정하면 정확도가 높아집니다.',"명세 파일은 JSON Schema 형식으로 저장하면, 이후 자동 검증에 활용할 수 있습니다."]},{step:3,title:"DB 스키마 자동 생성",description:"구조화 명세에서 Supabase 마이그레이션 SQL을 자동 생성합니다.",content:`데이터 모델 명세를 기반으로 SQL 마이그레이션 파일을 생성합니다. Claude Code에 "데이터 모델 명세를 기반으로 Supabase 마이그레이션 SQL을 만들어줘"라고 요청합니다. 테이블 생성, 인덱스, RLS 정책까지 한 번에 생성됩니다.

마이그레이션 파일은 supabase/migrations/ 디렉토리에 타임스탬프 기반으로 저장합니다. 각 마이그레이션은 독립적으로 실행 가능해야 하며, 롤백 방안도 함께 작성합니다. Supabase CLI의 supabase db push 명령으로 적용합니다.

RLS(Row Level Security) 정책은 명세의 권한 모델을 그대로 반영합니다. 인증된 사용자만 자기 데이터에 접근하도록 auth.uid() 기반 정책을 기본으로 적용합니다.`,tips:["RLS 정책을 빠뜨리면 데이터가 공개됩니다 — 마이그레이션에 반드시 포함하세요.","supabase db diff 명령으로 로컬과 원격 스키마 차이를 확인할 수 있습니다."],codeExamples:[{language:"sql",title:"Supabase 마이그레이션 예시",code:`-- 20260430_create_tasks.sql

create table if not exists public.tasks (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null default auth.uid(),
  title      text not null,
  status     text not null default 'todo'
             check (status in ('todo','in_progress','done')),
  priority   int  not null default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Index
create index idx_tasks_user on public.tasks(user_id);

-- RLS
alter table public.tasks enable row level security;

create policy "Users read own tasks"
  on public.tasks for select
  using (auth.uid() = user_id);

create policy "Users insert own tasks"
  on public.tasks for insert
  with check (auth.uid() = user_id);

create policy "Users update own tasks"
  on public.tasks for update
  using (auth.uid() = user_id);`}]},{step:4,title:"API 레이어 구현",description:"Supabase RPC와 Edge Functions로 백엔드 API를 구현합니다.",content:`API 명세를 기반으로 Supabase의 두 가지 접근 방식을 혼합합니다. 단순 CRUD는 PostgREST 자동 API를 활용하고, 복잡한 비즈니스 로직은 Edge Functions(Deno)로 구현합니다. Claude Code에 "API 명세를 기반으로 Edge Function을 생성해줘"라고 지시합니다.

각 API는 입력 검증, 에러 핸들링, 응답 포맷을 명세와 일치시킵니다. Supabase의 supabase.rpc() 호출로 PostgreSQL 함수를 직접 실행하면, 네트워크 왕복을 줄이고 트랜잭션을 보장할 수 있습니다.

API 레이어에서 가장 중요한 것은 일관된 에러 응답 형식입니다. { error: string, code: string } 형태로 통일하면 프론트엔드에서 에러 처리가 단순해집니다.`,tips:["Supabase의 자동 생성 API(PostgREST)를 먼저 확인하고, 부족한 부분만 Edge Function으로 보완하세요.","Edge Function 로컬 테스트는 supabase functions serve 명령을 사용합니다."]},{step:5,title:"프론트엔드 자동 구현",description:"컴포넌트 명세를 기반으로 React 페이지를 자동 생성합니다.",content:`컴포넌트 명세의 페이지 목록과 컴포넌트 트리를 기반으로, Claude Code가 React 컴포넌트를 생성합니다. "컴포넌트 명세를 기반으로 src/pages/와 src/components/를 생성해줘"라고 요청합니다. React Router 라우팅 설정도 함께 생성됩니다.

각 컴포넌트는 Supabase 클라이언트를 통해 데이터를 가져오고, 로딩/에러 상태를 일관되게 처리합니다. 공용 컴포넌트(버튼, 모달, 폼)는 재사용 가능하도록 src/components/ui/에 분리합니다.

반응형 레이아웃은 CSS 변수와 미디어 쿼리로 구현합니다. 명세에 정의된 브레이크포인트를 따르며, 모바일 우선(mobile-first) 접근 방식을 적용합니다.`,tips:["명세에 없는 기능을 추가하고 싶다면 먼저 PRD를 업데이트하세요 — 명세가 코드보다 앞서야 합니다.",'Claude Code에 "이 컴포넌트에 로딩 스켈레톤을 추가해줘"처럼 구체적으로 요청하면 품질이 높아집니다.']},{step:6,title:"인증 & 권한",description:"Supabase Auth와 RLS를 활용한 인증/권한 시스템을 구축합니다.",content:`Supabase Auth를 활용하여 이메일/비밀번호, 소셜 로그인(Google, Kakao 등)을 설정합니다. AuthContext를 만들어 로그인 상태를 전역에서 관리하며, ProtectedRoute 컴포넌트로 미인증 사용자의 접근을 차단합니다.

역할 기반 접근 제어(RBAC)는 user_profiles 테이블의 role 컬럼으로 구현합니다. admin, member 등 역할에 따라 메뉴 노출과 API 접근을 분기합니다. RLS 정책에서도 역할을 확인하여 DB 레벨에서 이중 보호합니다.

인증 관련 트리거가 실패하면 전체 회원가입이 차단될 수 있습니다. 트리거 함수에는 반드시 EXCEPTION WHEN OTHERS THEN RETURN NEW 구문을 포함하여, 개별 트리거 실패가 전파되지 않도록 합니다.`,tips:["트리거 함수에 EXCEPTION WHEN OTHERS THEN RETURN NEW를 빠뜨리면 회원가입이 전체 중단됩니다.","개발 환경에서 RLS를 끄고 작업하면 나중에 권한 버그가 생깁니다 — 처음부터 켜두세요."]},{step:7,title:"자동 테스트 생성",description:"명세의 수용 기준을 기반으로 테스트를 자동 생성합니다.",content:`PRD의 Acceptance Criteria가 테스트 케이스의 원재료입니다. Claude Code에 "PRD의 수용 기준을 기반으로 Vitest 테스트를 생성해줘"라고 요청하면, 각 기능별 유닛 테스트와 통합 테스트가 생성됩니다.

유닛 테스트는 개별 함수와 컴포넌트를 검증하고, 통합 테스트는 사용자 시나리오 전체를 검증합니다. Supabase 호출은 모킹(mocking)하여 네트워크 의존성을 제거합니다. 테스트 커버리지 80% 이상을 목표로 합니다.

테스트가 명세와 동기화되어야 Spec-Driven의 가치가 있습니다. 명세가 바뀌면 테스트도 함께 업데이트해야 하며, 이 과정도 Claude Code로 자동화할 수 있습니다.`,tips:['"명세 F-003이 변경되었어. 관련 테스트를 업데이트해줘"라고 요청하면 영향 범위를 자동으로 파악합니다.',"Vitest의 --reporter=verbose 옵션으로 실패 원인을 상세히 확인하세요."]},{step:8,title:"CI/CD 파이프라인",description:"GitHub Actions로 빌드, 테스트, 배포를 자동화합니다.",content:`GitHub Actions 워크플로우를 작성하여 push 시 자동으로 빌드, 테스트, 배포가 실행되도록 합니다. main 브랜치에 푸시하면 gh-pages로 배포까지 완료되는 파이프라인을 구성합니다.

워크플로우는 세 단계로 구성합니다. 첫째, lint와 타입 체크. 둘째, 테스트 실행. 셋째, 빌드 후 GitHub Pages 배포. 각 단계가 실패하면 이후 단계가 실행되지 않으므로, 불량 코드가 프로덕션에 도달하는 것을 방지합니다.

환경 변수는 GitHub Secrets에 저장합니다. VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY 등을 시크릿으로 등록하고 워크플로우에서 참조합니다.`,tips:["GitHub Secrets에 .env 변수를 모두 등록해야 빌드가 성공합니다.","actions/cache를 사용하면 node_modules 캐싱으로 빌드 시간을 40% 이상 줄일 수 있습니다."],codeExamples:[{language:"yaml",title:"GitHub Actions 빌드/배포 워크플로우",code:`name: Build & Deploy
on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci

      - run: npx tsc --noEmit
        name: Type Check

      - run: npx vitest run --reporter=verbose
        name: Test

      - run: npm run build
        env:
          VITE_SUPABASE_URL: \${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: \${{ secrets.VITE_SUPABASE_ANON_KEY }}

      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`}]},{step:9,title:"모니터링 설정",description:"배포 후 에러 추적과 성능 모니터링을 구성합니다.",content:`프로덕션 환경에서 발생하는 에러를 실시간으로 추적하기 위해, 글로벌 에러 핸들러를 설정합니다. window.onerror와 window.onunhandledrejection을 등록하고, 에러 정보를 Supabase 테이블에 기록합니다.

성능 모니터링은 Web Vitals(LCP, FID, CLS)를 측정합니다. web-vitals 라이브러리를 설치하고, 측정값을 주기적으로 수집합니다. Lighthouse CI를 GitHub Actions에 추가하면 배포 전 성능 회귀를 감지할 수 있습니다.

알림은 Supabase Edge Function + Resend 이메일 조합으로 구현합니다. 에러가 특정 임계치를 넘으면 관리자 이메일로 알림을 발송합니다.`,tips:["console.error를 래핑하여 모든 에러를 자동으로 수집하면 누락 없이 추적할 수 있습니다.","Lighthouse CI의 budget.json으로 성능 기준을 설정하면 기준 미달 시 빌드가 실패합니다."]},{step:10,title:"변경 요청 대응",description:"명세 변경 시 영향 분석과 자동 업데이트를 수행합니다.",content:`Spec-Driven 개발의 진정한 가치는 변경 요청에서 드러납니다. 명세가 바뀌면 Claude Code에 "명세 F-002가 변경되었어. 영향 범위를 분석하고 코드를 업데이트해줘"라고 요청합니다. AI가 관련 파일을 찾아 일괄 수정합니다.

영향 분석의 핵심은 명세 ID와 코드의 매핑입니다. 각 컴포넌트와 테스트 파일에 관련 명세 ID를 주석으로 남기면, 변경 시 grep으로 빠르게 영향 범위를 파악할 수 있습니다.

변경 후에는 반드시 관련 테스트를 재실행합니다. CI 파이프라인이 자동으로 이를 수행하지만, 로컬에서도 변경된 명세와 관련된 테스트만 선별 실행하여 빠르게 검증합니다.`,tips:["코드에 /* spec: F-002 */ 같은 주석을 남기면 영향 분석이 훨씬 빨라집니다.","vitest --changed 옵션으로 변경된 파일과 관련된 테스트만 실행할 수 있습니다."]},{step:11,title:"문서 자동화",description:"API 문서와 사용자 가이드를 코드에서 자동 생성합니다.",content:`코드와 명세로부터 문서를 자동 생성합니다. API 문서는 TypeScript 타입 정의와 JSDoc 주석에서 추출하고, 사용자 가이드는 컴포넌트 명세와 스토리북에서 생성합니다. Claude Code에 "src/types/를 분석해서 API 문서를 생성해줘"라고 요청합니다.

README.md는 프로젝트 개요, 설치 방법, 환경 변수 목록, 주요 명령어를 포함하도록 자동 생성합니다. 배포 URL, 기술 스택, 아키텍처 다이어그램도 포함하여 신규 개발자의 온보딩 시간을 줄입니다.

문서가 코드와 동기화되지 않으면 오히려 혼란을 야기합니다. CI 파이프라인에 문서 생성 단계를 추가하여, 코드가 바뀌면 문서도 자동으로 갱신되도록 합니다.`,tips:["TypeDoc이나 JSDoc 기반 문서 생성 도구를 CI에 통합하면 문서가 항상 최신 상태를 유지합니다.","CLAUDE.md에 문서 생성 규칙을 명시하면, Claude Code가 코드 수정 시 문서도 함께 업데이트합니다."]},{step:12,title:"회고 & 프로세스 개선",description:"전체 Spec-Driven 프로세스를 리뷰하고 개선점을 도출합니다.",content:`프로젝트가 완료되면 전체 프로세스를 회고합니다. PRD 작성부터 배포까지 각 단계의 소요 시간, 자동화율, 수작업 비율을 측정합니다. Claude Code에 "프로젝트 로그를 분석해서 병목 구간을 찾아줘"라고 요청할 수 있습니다.

개선 포인트를 식별합니다. 명세의 어떤 부분이 모호했는지, 자동 생성 코드의 품질은 어땠는지, 테스트 커버리지는 충분했는지를 정리합니다. 이 결과물은 다음 프로젝트의 프로세스 템플릿이 됩니다.

Spec-Driven 개발의 궁극적 목표는 "명세를 바꾸면 앱이 바뀐다"입니다. 이 이상에 얼마나 가까웠는지 평가하고, 수동 개입이 필요했던 지점을 추가 자동화 대상으로 기록합니다.`,tips:["소요 시간을 단계별로 기록해두면 다음 프로젝트의 일정 산정이 정확해집니다.","회고 결과를 CLAUDE.md에 반영하면 Claude Code의 다음 프로젝트 품질이 향상됩니다."]}],sourceFiles:[{filename:"docs/PRD.md",language:"markdown",code:`# PRD: 태스크 매니저

## 1. 개요
- **목표**: 개인/팀 태스크 관리 웹앱
- **타깃 사용자**: 소규모 팀, 프리랜서
- **성공 지표**: 일일 활성 사용자 100명

## 2. 기능 명세
### F-001: 회원가입/로그인
- 이메일/비밀번호 로그인
- **수용 기준**:
  - [ ] 이메일 형식 검증
  - [ ] 비밀번호 8자 이상
  - [ ] 로그인 후 대시보드 리다이렉트

### F-002: 태스크 CRUD
- 태스크 생성, 조회, 수정, 삭제
- **수용 기준**:
  - [ ] 제목 필수, 설명 선택
  - [ ] 상태: todo, in_progress, done
  - [ ] 본인 태스크만 수정/삭제

### F-003: 대시보드
- 태스크 통계 시각화
- **수용 기준**:
  - [ ] 상태별 태스크 수 표시
  - [ ] 최근 7일 완료 추이 차트

## 3. 비기능 요구사항
- 응답 시간 < 500ms (p95)
- 모바일 반응형 필수
- Lighthouse 성능 > 85`},{filename:"docs/spec/data-model.md",language:"markdown",code:`# 데이터 모델 명세

## tasks 테이블
| 컬럼 | 타입 | 제약 | 기본값 |
|------|------|------|--------|
| id | uuid | PK | gen_random_uuid() |
| user_id | uuid | FK(auth.users), NOT NULL | auth.uid() |
| title | text | NOT NULL | - |
| description | text | - | NULL |
| status | text | CHECK(todo,in_progress,done) | 'todo' |
| priority | int | NOT NULL | 0 |
| created_at | timestamptz | - | now() |
| updated_at | timestamptz | - | now() |

## RLS 정책
- SELECT: auth.uid() = user_id
- INSERT: auth.uid() = user_id
- UPDATE: auth.uid() = user_id
- DELETE: auth.uid() = user_id`},{filename:"supabase/migrations/001_create_tasks.sql",language:"sql",code:`-- 001_create_tasks.sql

create table if not exists public.tasks (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null default auth.uid(),
  title      text not null,
  description text,
  status     text not null default 'todo'
             check (status in ('todo','in_progress','done')),
  priority   int  not null default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Indexes
create index idx_tasks_user on public.tasks(user_id);
create index idx_tasks_status on public.tasks(user_id, status);

-- RLS
alter table public.tasks enable row level security;

create policy "Users read own tasks"
  on public.tasks for select
  using (auth.uid() = user_id);

create policy "Users insert own tasks"
  on public.tasks for insert
  with check (auth.uid() = user_id);

create policy "Users update own tasks"
  on public.tasks for update
  using (auth.uid() = user_id);

create policy "Users delete own tasks"
  on public.tasks for delete
  using (auth.uid() = user_id);

-- Updated_at trigger
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger tasks_updated_at
  before update on public.tasks
  for each row execute function update_updated_at();`},{filename:"package.json",language:"json",code:`{
  "name": "spec-driven-task-manager",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.0.0",
    "@supabase/supabase-js": "^2.49.0",
    "recharts": "^2.15.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.5.0",
    "typescript": "^5.7.0",
    "vite": "^6.3.0",
    "vitest": "^3.1.0",
    "@testing-library/react": "^16.0.0"
  }
}`},{filename:"src/lib/supabase.ts",language:"typescript",code:`import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);`},{filename:"src/types.ts",language:"typescript",code:`export type TaskStatus = 'todo' | 'in_progress' | 'done';

export interface Task {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  priority: number;
  created_at: string;
  updated_at: string;
}

export interface TaskInput {
  title: string;
  description?: string;
  status?: TaskStatus;
  priority?: number;
}

export interface DashboardStats {
  total: number;
  todo: number;
  inProgress: number;
  done: number;
  weeklyCompleted: { date: string; count: number }[];
}`},{filename:"src/App.tsx",language:"tsx",code:`import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import TasksPage from './pages/TasksPage';
import './App.css';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="loading">로딩 중...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={
              <ProtectedRoute><DashboardPage /></ProtectedRoute>
            } />
            <Route path="/tasks" element={
              <ProtectedRoute><TasksPage /></ProtectedRoute>
            } />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </AuthProvider>
    </BrowserRouter>
  );
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

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}`},{filename:"src/hooks/useTasks.ts",language:"typescript",code:`import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import type { Task, TaskInput } from '../types';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) setError(error.message);
    else setTasks(data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => { fetchTasks(); }, [fetchTasks]);

  const createTask = async (input: TaskInput) => {
    const { error } = await supabase.from('tasks').insert(input);
    if (error) throw error;
    await fetchTasks();
  };

  const updateTask = async (id: string, input: Partial<TaskInput>) => {
    const { error } = await supabase.from('tasks').update(input).eq('id', id);
    if (error) throw error;
    await fetchTasks();
  };

  const deleteTask = async (id: string) => {
    const { error } = await supabase.from('tasks').delete().eq('id', id);
    if (error) throw error;
    await fetchTasks();
  };

  return { tasks, loading, error, createTask, updateTask, deleteTask, refetch: fetchTasks };
}`},{filename:"src/pages/TasksPage.tsx",language:"tsx",code:`/* spec: F-002 */
import { useState } from 'react';
import { useTasks } from '../hooks/useTasks';
import type { TaskStatus } from '../types';

export default function TasksPage() {
  const { tasks, loading, createTask, updateTask, deleteTask } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState<TaskStatus | 'all'>('all');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    await createTask({ title: title.trim(), description: description.trim() || undefined });
    setTitle('');
    setDescription('');
  };

  const filtered = filter === 'all' ? tasks : tasks.filter(t => t.status === filter);

  if (loading) return <div className="loading">로딩 중...</div>;

  return (
    <div className="container">
      <h1>태스크 관리</h1>

      <form onSubmit={handleSubmit} className="task-form">
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="태스크 제목" required />
        <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="설명 (선택)" />
        <button type="submit">추가</button>
      </form>

      <div className="filter-bar">
        {(['all', 'todo', 'in_progress', 'done'] as const).map(f => (
          <button key={f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>
            {f === 'all' ? '전체' : f === 'todo' ? '할 일' : f === 'in_progress' ? '진행 중' : '완료'}
          </button>
        ))}
      </div>

      <ul className="task-list">
        {filtered.map(task => (
          <li key={task.id} className={\`task-item status-\${task.status}\`}>
            <div className="task-info">
              <h3>{task.title}</h3>
              {task.description && <p>{task.description}</p>}
            </div>
            <div className="task-actions">
              <select value={task.status} onChange={e => updateTask(task.id, { status: e.target.value as TaskStatus })}>
                <option value="todo">할 일</option>
                <option value="in_progress">진행 중</option>
                <option value="done">완료</option>
              </select>
              <button onClick={() => deleteTask(task.id)} className="btn-delete">삭제</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}`},{filename:"src/pages/DashboardPage.tsx",language:"tsx",code:`/* spec: F-003 */
import { useMemo } from 'react';
import { useTasks } from '../hooks/useTasks';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import type { DashboardStats } from '../types';

export default function DashboardPage() {
  const { tasks, loading } = useTasks();

  const stats: DashboardStats = useMemo(() => {
    const todo = tasks.filter(t => t.status === 'todo').length;
    const inProgress = tasks.filter(t => t.status === 'in_progress').length;
    const done = tasks.filter(t => t.status === 'done').length;

    // 최근 7일 완료 추이
    const now = new Date();
    const weeklyCompleted = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(now);
      date.setDate(date.getDate() - (6 - i));
      const dateStr = date.toISOString().slice(0, 10);
      const count = tasks.filter(t =>
        t.status === 'done' && t.updated_at.slice(0, 10) === dateStr
      ).length;
      return { date: dateStr.slice(5), count };
    });

    return { total: tasks.length, todo, inProgress, done, weeklyCompleted };
  }, [tasks]);

  if (loading) return <div className="loading">로딩 중...</div>;

  return (
    <div className="container">
      <h1>대시보드</h1>

      <div className="stats-grid">
        <div className="stat-card"><h3>{stats.total}</h3><p>전체</p></div>
        <div className="stat-card"><h3>{stats.todo}</h3><p>할 일</p></div>
        <div className="stat-card"><h3>{stats.inProgress}</h3><p>진행 중</p></div>
        <div className="stat-card done"><h3>{stats.done}</h3><p>완료</p></div>
      </div>

      <div className="chart-section">
        <h2>최근 7일 완료 추이</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stats.weeklyCompleted}>
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#0046C8" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}`},{filename:".github/workflows/deploy.yml",language:"yaml",code:`name: Build & Deploy

on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci

      - run: npx tsc --noEmit
        name: Type Check

      - run: npx vitest run --reporter=verbose
        name: Test

      - run: npm run build
        env:
          VITE_SUPABASE_URL: \${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: \${{ secrets.VITE_SUPABASE_ANON_KEY }}

      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`},{filename:"CLAUDE.md",language:"markdown",code:`# Spec-Driven Task Manager

## Architecture
- Frontend: React 19 + TypeScript + Vite
- Backend: Supabase (PostgreSQL + Auth + RLS)
- CI/CD: GitHub Actions → GitHub Pages
- Charts: Recharts

## Spec Files
- PRD: docs/PRD.md
- Data Model: docs/spec/data-model.md
- Migrations: supabase/migrations/

## Conventions
- 모든 컴포넌트에 \\\`/* spec: F-xxx */\\\` 주석으로 명세 ID 기록
- RLS 정책 필수 — auth.uid() = user_id 패턴
- 에러 응답: { error: string, code: string }
- 테스트 커버리지 80% 이상 목표

## Commands
- \\\`npm run dev\\\` — 개발 서버
- \\\`npm run build\\\` — 프로덕션 빌드
- \\\`npm test\\\` — 테스트 실행
- \\\`npm run lint\\\` — 타입 체크`}]},r=[e,t,s];export{r as a};
