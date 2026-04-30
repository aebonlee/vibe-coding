import{r as h,h as k,a as g,j as e}from"./index-DvxSfeI7.js";import{S as x}from"./SidebarLayout-BWKB0c_c.js";import{C as w}from"./CodeBlock-DDN1-INS.js";import{m as b}from"./markdown-QnfJ_pBD.js";const r=[{id:"line-break",slug:"line-break",title:"줄바꿈과 문단",description:"마크다운에서 줄바꿈과 문단을 구분하는 방법",order:1,content:`마크다운에서 줄바꿈은 단순히 Enter를 누르는 것과 다릅니다. 줄 끝에 공백 2개를 넣거나, 빈 줄을 넣어 문단을 구분합니다.

**줄바꿈(Line Break)**: 줄 끝에 공백 2개 또는 \`<br>\` 태그
**문단 구분(Paragraph)**: 빈 줄 하나 삽입

AI 프롬프트에서도 줄바꿈을 올바르게 사용하면 AI가 구조를 더 잘 이해합니다.`,examples:[{title:"줄바꿈",markdown:`첫 번째 줄  
두 번째 줄`,rendered:"첫 번째 줄<br>두 번째 줄"},{title:"문단 구분",markdown:`첫 번째 문단

두 번째 문단`,rendered:"<p>첫 번째 문단</p><p>두 번째 문단</p>"}]},{id:"heading",slug:"heading",title:"헤딩 (제목)",description:"#으로 제목 레벨을 표현하는 방법",order:2,content:`헤딩은 문서의 구조를 만드는 핵심 요소입니다. #의 개수로 레벨을 표현합니다 (1~6단계).

AI 프롬프트에서 헤딩을 사용하면 요구사항의 계층 구조를 명확하게 전달할 수 있습니다.`,examples:[{title:"헤딩 레벨",markdown:`# H1 제목
## H2 부제목
### H3 소제목
#### H4 세부 제목`,rendered:"<h1>H1 제목</h1><h2>H2 부제목</h2><h3>H3 소제목</h3><h4>H4 세부 제목</h4>"}]},{id:"emphasis",slug:"emphasis",title:"강조 (볼드, 이탤릭)",description:"텍스트를 강조하는 다양한 방법",order:3,content:"마크다운에서 텍스트를 강조하는 3가지 방법:\n\n- **볼드**: `**텍스트**` 또는 `__텍스트__`\n- *이탤릭*: `*텍스트*` 또는 `_텍스트_`\n- ***볼드+이탤릭***: `***텍스트***`\n- ~~취소선~~: `~~텍스트~~`\n\n프롬프트에서 볼드로 핵심 요구사항을 강조하면 AI가 더 중요하게 처리합니다.",examples:[{title:"강조 문법",markdown:"**볼드** *이탤릭* ***볼드이탤릭*** ~~취소선~~",rendered:"<strong>볼드</strong> <em>이탤릭</em> <strong><em>볼드이탤릭</em></strong> <del>취소선</del>"}]},{id:"list",slug:"list",title:"리스트",description:"순서 있는/없는 목록과 체크박스 리스트",order:4,content:"리스트는 정보를 구조화하는 가장 효과적인 방법입니다.\n\n**순서 없는 리스트**: `-`, `*`, `+` 사용\n**순서 있는 리스트**: `1.`, `2.`, `3.` 사용\n**체크박스 리스트**: `- [ ]` 또는 `- [x]` 사용\n\nAI에게 여러 기능을 요청할 때 리스트로 작성하면 누락 없이 구현됩니다.",examples:[{title:"순서 없는 리스트",markdown:`- 항목 1
- 항목 2
  - 하위 항목
- 항목 3`,rendered:"<ul><li>항목 1</li><li>항목 2<ul><li>하위 항목</li></ul></li><li>항목 3</li></ul>"},{title:"순서 있는 리스트",markdown:`1. 첫 번째
2. 두 번째
3. 세 번째`,rendered:"<ol><li>첫 번째</li><li>두 번째</li><li>세 번째</li></ol>"},{title:"체크박스",markdown:`- [x] 완료된 항목
- [ ] 미완료 항목`,rendered:"<ul><li>☑ 완료된 항목</li><li>☐ 미완료 항목</li></ul>"}]},{id:"code-block",slug:"code-block",title:"코드블록",description:"인라인 코드와 코드 블록 작성법",order:5,content:"코드를 표현하는 두 가지 방법:\n\n**인라인 코드**: 백틱 1개 `` `코드` ``\n**코드 블록**: 백틱 3개로 감싸기\n\n코드 블록에 언어를 지정하면 구문 하이라이팅이 적용됩니다. AI에게 코드를 보여줄 때 반드시 코드 블록을 사용하세요.",examples:[{title:"인라인 코드",markdown:"`const x = 1;` 처럼 사용합니다.",rendered:"<code>const x = 1;</code> 처럼 사용합니다."},{title:"코드 블록",markdown:'```javascript\nfunction hello() {\n  console.log("Hello!");\n}\n```',rendered:`<pre><code>function hello() {
  console.log("Hello!");
}</code></pre>`}]},{id:"link-image",slug:"link-image",title:"링크와 이미지",description:"하이퍼링크와 이미지 삽입 방법",order:6,content:"**링크**: `[텍스트](URL)` 형식\n**이미지**: `![대체텍스트](이미지URL)` 형식\n\n참조 스타일 링크도 가능합니다: `[텍스트][참조]`\n\nAI 프롬프트에서 참고 링크를 제공하면 더 정확한 결과를 얻을 수 있습니다.",examples:[{title:"링크",markdown:"[구글](https://google.com)",rendered:'<a href="https://google.com">구글</a>'},{title:"이미지",markdown:"![로고](https://example.com/logo.png)",rendered:'<img src="https://example.com/logo.png" alt="로고">'}]},{id:"table",slug:"table",title:"표 (테이블)",description:"파이프와 하이픈으로 표를 만드는 방법",order:7,content:"마크다운 테이블은 `|`와 `-`로 만듭니다. 정렬도 가능합니다:\n\n- 왼쪽 정렬: `:---`\n- 가운데 정렬: `:---:`\n- 오른쪽 정렬: `---:`\n\nAI에게 데이터 비교를 요청할 때 표 형식으로 요청하면 깔끔하게 정리됩니다.",examples:[{title:"기본 테이블",markdown:`| 이름 | 가격 | 평점 |
|------|------|------|
| Cursor | $20 | ★★★★★ |
| Windsurf | $15 | ★★★★ |`,rendered:"<table><tr><th>이름</th><th>가격</th><th>평점</th></tr><tr><td>Cursor</td><td>$20</td><td>★★★★★</td></tr><tr><td>Windsurf</td><td>$15</td><td>★★★★</td></tr></table>"}]},{id:"blockquote",slug:"blockquote",title:"인용문",description:"> 기호를 사용한 인용문 작성법",order:8,content:"인용문은 `>` 기호로 만듭니다. 중첩도 가능합니다.\n\nGitHub에서는 `> [!NOTE]`, `> [!WARNING]` 등의 Admonition 문법도 지원합니다.\n\nCLAUDE.md에서 중요한 규칙을 강조할 때 인용문을 활용하세요.",examples:[{title:"인용문",markdown:`> 이것은 인용문입니다.
> 여러 줄도 가능합니다.
>
>> 중첩 인용문`,rendered:"<blockquote>이것은 인용문입니다.<br>여러 줄도 가능합니다.<blockquote>중첩 인용문</blockquote></blockquote>"}]},{id:"escape-hr",slug:"escape-hr",title:"이스케이프와 수평선",description:"특수문자 이스케이프와 구분선 사용법",order:9,content:"마크다운 문법에 사용되는 특수문자를 그대로 표시하려면 백슬래시(`\\`)로 이스케이프합니다.\n\n수평선은 `---`, `***`, `___` 중 하나로 만듭니다 (3개 이상).",examples:[{title:"이스케이프",markdown:"\\*이탤릭 아님\\* \\#해시태그",rendered:"*이탤릭 아님* #해시태그"},{title:"수평선",markdown:`위 내용

---

아래 내용`,rendered:"<p>위 내용</p><hr><p>아래 내용</p>"}]},{id:"html",slug:"html",title:"HTML 혼용",description:"마크다운 내에서 HTML 직접 사용하기",order:10,content:"마크다운은 HTML과 혼용할 수 있습니다. 마크다운으로 표현하기 어려운 것들은 HTML을 직접 사용하세요.\n\n- `<details>/<summary>`: 접기/펼치기\n- `<kbd>`: 키보드 키\n- `<sup>/<sub>`: 위첨자/아래첨자\n- `<mark>`: 형광펜 효과",examples:[{title:"접기/펼치기",markdown:`<details>
<summary>클릭하여 펼치기</summary>

숨겨진 내용입니다.

</details>`,rendered:"<details><summary>클릭하여 펼치기</summary><p>숨겨진 내용입니다.</p></details>"},{title:"키보드 키",markdown:"<kbd>Ctrl</kbd> + <kbd>C</kbd>",rendered:"<kbd>Ctrl</kbd> + <kbd>C</kbd>"}]},{id:"mermaid",slug:"mermaid",title:"머메이드 다이어그램",description:"코드로 다이어그램을 그리는 Mermaid 문법",order:11,content:"Mermaid는 텍스트 기반 다이어그램 도구입니다. GitHub, Notion 등에서 지원됩니다.\n\n주요 다이어그램 유형:\n- `flowchart`: 순서도\n- `sequenceDiagram`: 시퀀스 다이어그램\n- `classDiagram`: 클래스 다이어그램\n- `gantt`: 간트 차트\n\nAI에게 시스템 구조를 설명할 때 Mermaid 다이어그램을 요청하면 시각적으로 이해하기 쉽습니다.",examples:[{title:"순서도",markdown:"```mermaid\nflowchart TD\n    A[시작] --> B{조건}\n    B -->|Yes| C[실행]\n    B -->|No| D[종료]\n```",rendered:`flowchart TD
    A[시작] --> B{조건}
    B -->|Yes| C[실행]
    B -->|No| D[종료]`},{title:"시퀀스 다이어그램",markdown:"```mermaid\nsequenceDiagram\n    User->>AI: 프롬프트 전송\n    AI->>Code: 코드 생성\n    Code->>User: 결과 반환\n```",rendered:`sequenceDiagram
    User->>AI: 프롬프트 전송
    AI->>Code: 코드 생성
    Code->>User: 결과 반환`}]},{id:"ai-prompt",slug:"ai-prompt",title:"AI 프롬프트에서의 마크다운 활용",description:"마크다운을 활용해 AI 프롬프트를 효과적으로 작성하기",order:12,content:`마크다운은 AI 프롬프트의 구조를 잡는 데 매우 효과적입니다.

**핵심 활용법:**
1. **헤딩**으로 요구사항 섹션 구분
2. **리스트**로 기능 목록 나열
3. **코드 블록**으로 기존 코드/원하는 형식 제시
4. **볼드**로 핵심 키워드 강조
5. **테이블**로 데이터 구조 설명

CLAUDE.md, Rules, System Prompt 모두 마크다운으로 작성합니다.`,examples:[{title:"프롬프트 예시",markdown:`# 요구사항

## 기능
- 사용자 인증 (이메일/Google)
- **CRUD** 게시판
- 실시간 알림

## 기술 스택
- React + TypeScript
- Supabase

## 참고 코드
\`\`\`typescript
interface Post {
  id: string;
  title: string;
}
\`\`\``,rendered:""}]}],N=()=>{const[i,l]=h.useState(r[0]?.id||""),{isCompleted:d,toggleComplete:o,getProgressPercent:s}=k(),{isLoggedIn:a}=g(),t=r.find(n=>n.id===i)||r[0],m=r.map(n=>n.id),c=s("markdown",m),p=r.map(n=>({id:n.id,title:n.title,completed:d("markdown",n.id)}));return e.jsxs("div",{className:"curriculum-page",children:[e.jsx("div",{className:"curriculum-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"마크다운 가이드"}),e.jsx("p",{children:"AI 프롬프트와 개발 문서에 필수인 마크다운 문법을 마스터하세요."})]})}),e.jsx(x,{title:"마크다운 챕터",items:p,activeId:i,onSelect:l,progressPercent:c,children:t&&e.jsxs("div",{className:"topic-content",children:[e.jsx("h2",{children:t.title}),e.jsx("p",{className:"topic-description",children:t.description}),e.jsx("div",{className:"topic-text",dangerouslySetInnerHTML:{__html:b(t.content)}}),t.examples.map((n,u)=>e.jsxs("div",{className:"markdown-example",children:[e.jsx("h4",{children:n.title}),e.jsxs("div",{className:"markdown-split",children:[e.jsxs("div",{className:"markdown-input",children:[e.jsx("h5",{children:"마크다운"}),e.jsx(w,{code:n.markdown,language:"markdown"})]}),e.jsxs("div",{className:"markdown-output",children:[e.jsx("h5",{children:"결과"}),e.jsx("div",{className:"markdown-rendered",dangerouslySetInnerHTML:{__html:n.rendered||""}})]})]})]},u)),a&&e.jsx("div",{className:"topic-complete-action",children:e.jsx("button",{className:`btn ${d("markdown",t.id)?"btn-completed":"btn-primary"}`,onClick:()=>o("markdown",t.id),children:d("markdown",t.id)?"✓ 학습 완료":"학습 완료 표시"})})]})})]})};export{N as default};
