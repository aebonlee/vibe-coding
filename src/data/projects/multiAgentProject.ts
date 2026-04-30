import type { ProjectData } from '../../types';

export const multiAgentProject: ProjectData = {
  id: 'multi-agent',
  slug: 'multi-agent',
  title: '멀티에이전트 워크플로우',
  description: 'Claude Code와 역할분담 자동화를 활용한 멀티에이전트 시스템.',
  level: 'advanced',
  duration: '8-10시간',
  techStack: ['Claude Code', 'Task Tool', 'Bash', 'TypeScript'],
  outcomes: [
    '에이전트 오케스트레이션 패턴 이해',
    '역할 분담 아키텍처 설계',
    '자동화 파이프라인 구축',
    '에이전트 간 통신 프로토콜 구현',
  ],
  diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" font-family="'Noto Sans KR', sans-serif">
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
</svg>`,
  steps: [
    {
      step: 1,
      title: '아키텍처 설계',
      description: '멀티에이전트 시스템의 전체 구조를 설계합니다.',
      content:
        '멀티에이전트 시스템의 핵심은 오케스트레이터-워커 패턴입니다. 오케스트레이터가 전체 작업을 분석하고, 적절한 워커 에이전트에게 하위 태스크를 분배합니다. 각 워커는 프론트엔드, 백엔드, 테스트 등 전문 영역을 담당합니다.\n\n설계 단계에서는 에이전트 간 통신 프로토콜, 태스크 큐 구조, 결과 통합 방식을 결정합니다. Claude Code의 Task Tool을 활용하면 하위 에이전트를 생성하고 독립적인 컨텍스트에서 작업을 수행할 수 있습니다.\n\n아키텍처 다이어그램을 먼저 그리고, 각 에이전트의 입출력 인터페이스를 명확히 정의하세요. 이 단계가 탄탄해야 이후 구현이 수월합니다.',
      tips: [
        '에이전트 간 의존성을 최소화하면 병렬 실행 효율이 높아집니다.',
        '각 에이전트의 책임 범위를 명확히 문서화하세요.',
      ],
    },
    {
      step: 2,
      title: 'CLAUDE.md 작성',
      description: '프로젝트 컨텍스트 문서를 작성합니다.',
      content:
        'CLAUDE.md는 Claude Code가 프로젝트를 이해하는 데 필요한 모든 맥락을 담는 파일입니다. 프로젝트 구조, 코딩 컨벤션, 사용 중인 라이브러리, 아키텍처 결정 사항을 기록합니다.\n\n멀티에이전트 프로젝트에서는 각 에이전트가 참조할 규칙도 CLAUDE.md에 포함해야 합니다. 예를 들어 프론트엔드 에이전트는 React 컴포넌트 규칙을, 백엔드 에이전트는 API 설계 규칙을 따르도록 명시합니다.\n\nCLAUDE.md가 잘 작성되어 있으면 에이전트가 일관된 코드를 생성하고, 사람의 개입 없이도 프로젝트 규칙을 준수합니다.',
      codeExamples: [
        {
          language: 'markdown',
          title: 'CLAUDE.md 템플릿',
          code: `# Project: Multi-Agent Workflow

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
- Test Agent: tests mirror source structure under __tests__/`,
        },
      ],
      tips: [
        'CLAUDE.md는 루트, 하위 폴더별로 계층 구조를 가질 수 있습니다.',
        '에이전트가 자주 실수하는 패턴이 있다면 "하지 말아야 할 것" 섹션을 추가하세요.',
      ],
    },
    {
      step: 3,
      title: '오케스트레이터 구현',
      description: '태스크를 분석하고 워커에게 분배하는 메인 에이전트를 구현합니다.',
      content:
        '오케스트레이터는 사용자의 요청을 받아 하위 태스크로 분해하고, 적합한 워커 에이전트에게 할당하는 역할을 합니다. Claude Code에서는 Task Tool을 사용하여 새 에이전트 스레드를 생성할 수 있습니다.\n\n오케스트레이터의 핵심 로직은 태스크 분해, 의존성 분석, 워커 선택, 결과 검증입니다. 각 워커에게 전달할 프롬프트를 명확하게 구성해야 정확한 결과를 얻을 수 있습니다.\n\n실제 구현에서는 오케스트레이터가 각 워커의 완료 상태를 추적하고, 모든 워커가 끝나면 결과를 통합하는 흐름을 만듭니다.',
      codeExamples: [
        {
          language: 'typescript',
          title: '오케스트레이터 패턴',
          code: `interface Task {
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
}`,
        },
      ],
      tips: [
        'Task Tool 호출 시 각 워커에게 충분한 컨텍스트를 전달해야 합니다.',
        '의존성이 없는 태스크는 Promise.allSettled로 병렬 실행하세요.',
      ],
    },
    {
      step: 4,
      title: '워커 에이전트 구현',
      description: '프론트엔드, 백엔드, 테스트 전문 에이전트를 구현합니다.',
      content:
        '각 워커 에이전트는 특정 도메인에 특화된 역할을 수행합니다. 프론트엔드 에이전트는 React 컴포넌트와 페이지를 생성하고, 백엔드 에이전트는 API와 데이터베이스 로직을 담당하며, 테스트 에이전트는 테스트 코드를 작성합니다.\n\n워커 에이전트에게는 역할에 맞는 시스템 프롬프트를 제공해야 합니다. 예를 들어 프론트엔드 에이전트에게는 "당신은 React 전문가입니다. TypeScript와 함수형 컴포넌트만 사용하세요"와 같은 지시를 줍니다.\n\n각 워커는 작업 완료 후 변경된 파일 목록, 성공 여부, 추가 정보를 표준화된 형식으로 반환합니다.',
      tips: [
        '워커별 시스템 프롬프트에 구체적인 기술 스택과 규칙을 포함하세요.',
        '워커의 출력 형식을 JSON 스키마로 표준화하면 결과 통합이 쉬워집니다.',
      ],
    },
    {
      step: 5,
      title: '태스크 분배 로직',
      description: '의존성을 분석하고 작업을 효율적으로 분배합니다.',
      content:
        '태스크 분배는 멀티에이전트 시스템의 성능을 좌우하는 핵심 요소입니다. DAG(방향 비순환 그래프) 기반으로 태스크 간 의존성을 모델링하고, 위상 정렬을 통해 실행 순서를 결정합니다.\n\n병렬 실행이 가능한 태스크를 식별하여 동시에 처리하면 전체 소요 시간을 크게 줄일 수 있습니다. 예를 들어 서로 독립적인 컴포넌트 생성 작업은 병렬로, API에 의존하는 UI 작업은 순차적으로 실행합니다.\n\n태스크 큐를 구현하여 대기 중인 작업, 실행 중인 작업, 완료된 작업을 체계적으로 관리하세요.',
      codeExamples: [
        {
          language: 'typescript',
          title: '태스크 분배 로직',
          code: `interface TaskNode {
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
// batch 3: [e2e]`,
        },
      ],
      tips: [
        'priority 값을 활용하면 같은 배치 내에서도 중요한 태스크를 먼저 처리할 수 있습니다.',
        '순환 의존성이 발생하면 에러를 던지는 검증 로직을 반드시 추가하세요.',
      ],
    },
    {
      step: 6,
      title: '에러 핸들링',
      description: '실패한 태스크의 재시도와 복구를 구현합니다.',
      content:
        '멀티에이전트 시스템에서는 개별 에이전트의 실패가 전체 파이프라인에 영향을 줄 수 있습니다. 재시도 로직, 지수 백오프, 최대 재시도 횟수를 설정하여 일시적 오류에 대응합니다.\n\n에이전트가 반복적으로 실패하는 경우를 위한 폴백 전략도 필요합니다. 예를 들어 프론트엔드 에이전트가 복잡한 컴포넌트 생성에 실패하면, 더 작은 단위로 태스크를 분할하여 재시도할 수 있습니다.\n\n모든 에러는 구조화된 로그로 기록하여 디버깅과 개선에 활용하세요. 에이전트별 성공률, 평균 소요 시간 등 메트릭을 수집하면 시스템 안정성을 높일 수 있습니다.',
      tips: [
        '재시도 시 이전 실패 원인을 프롬프트에 포함하면 같은 실수를 반복하지 않습니다.',
        '크리티컬 태스크에는 타임아웃을 설정하여 무한 대기를 방지하세요.',
      ],
    },
    {
      step: 7,
      title: '결과 통합',
      description: '각 에이전트의 출력을 하나의 결과물로 통합합니다.',
      content:
        '여러 에이전트가 동시에 코드를 생성하면 파일 충돌이 발생할 수 있습니다. Git 브랜치 전략을 활용하여 각 에이전트의 작업을 독립적인 브랜치에서 수행하고, 오케스트레이터가 최종 병합을 담당합니다.\n\n결과 통합 단계에서는 코드 충돌 해결, import 경로 정리, 타입 일관성 검증을 수행합니다. 자동 병합이 불가능한 충돌이 발생하면 오케스트레이터가 사용자에게 알림을 보냅니다.\n\n통합 후에는 반드시 빌드 검증과 기본 테스트를 실행하여 전체 시스템의 정합성을 확인합니다.',
      tips: [
        '에이전트별로 수정 가능한 파일 범위를 미리 지정하면 충돌을 줄일 수 있습니다.',
        '통합 후 TypeScript 컴파일(tsc --noEmit)로 타입 에러를 즉시 확인하세요.',
      ],
    },
    {
      step: 8,
      title: '모니터링 대시보드',
      description: '에이전트 상태를 실시간으로 시각화합니다.',
      content:
        '멀티에이전트 시스템의 운영에는 각 에이전트의 실시간 상태 파악이 필수입니다. 대시보드에서는 태스크 진행률, 에이전트별 상태(대기/실행/완료/실패), 소요 시간, 토큰 사용량 등을 한눈에 볼 수 있어야 합니다.\n\nReact 컴포넌트로 간단한 대시보드를 구현할 수 있습니다. 상태 업데이트는 WebSocket이나 Server-Sent Events로 실시간 반영하고, 차트 라이브러리로 추세를 시각화합니다.\n\n대시보드에 알림 기능을 추가하면 에이전트 실패나 병목 현상을 즉시 감지하고 대응할 수 있습니다.',
      tips: [
        '콘솔 기반 모니터링도 효과적입니다. 복잡한 UI 없이 로그 스트림만으로 시작하세요.',
        '토큰 사용량 추적은 비용 관리에 필수적이므로 초기부터 구현하세요.',
      ],
    },
    {
      step: 9,
      title: '최적화',
      description: '성능, 비용, 품질을 종합적으로 최적화합니다.',
      content:
        '멀티에이전트 시스템의 최적화는 세 가지 축에서 진행합니다. 첫째, 성능 최적화 - 병렬 처리율을 높이고 불필요한 대기 시간을 제거합니다. 둘째, 비용 최적화 - 토큰 사용량을 줄이고 캐싱을 활용합니다. 셋째, 품질 최적화 - 에이전트의 출력 정확도를 높입니다.\n\n프롬프트 캐싱을 활용하면 반복적인 컨텍스트 전달에 드는 토큰을 절약할 수 있습니다. 이전에 생성한 코드 패턴을 재사용하는 템플릿 시스템도 효과적입니다.\n\n정기적으로 에이전트별 성공률과 소요 시간을 분석하고, 병목이 되는 구간을 식별하여 프롬프트나 태스크 분배 전략을 조정합니다.',
      tips: [
        '작은 태스크를 묶어서 한 번에 처리하면 API 호출 횟수를 줄일 수 있습니다.',
        'CLAUDE.md를 지속적으로 업데이트하면 에이전트의 초기 컨텍스트 파악 시간이 단축됩니다.',
      ],
    },
    {
      step: 10,
      title: '문서화 & 공유',
      description: '프로젝트를 문서화하고 팀과 공유합니다.',
      content:
        '멀티에이전트 시스템의 문서화는 아키텍처 다이어그램, 에이전트별 역할 명세, 실행 방법, 트러블슈팅 가이드를 포함해야 합니다. 다른 개발자가 시스템을 이해하고 확장할 수 있도록 충분한 맥락을 제공하세요.\n\nREADME에는 빠른 시작 가이드, 설정 방법, 커스텀 에이전트 추가 방법을 포함합니다. 실행 예시와 예상 출력도 함께 기록하면 진입 장벽을 낮출 수 있습니다.\n\n프로젝트를 GitHub에 공유하고, 블로그나 기술 발표를 통해 멀티에이전트 패턴의 실전 경험을 공유하면 커뮤니티에 큰 기여가 됩니다.',
      tips: [
        '아키텍처 결정 기록(ADR)을 남기면 "왜 이렇게 만들었는지"를 미래의 자신에게 설명할 수 있습니다.',
        'CHANGELOG를 유지하여 시스템의 진화 과정을 추적하세요.',
      ],
    },
  ],
};
