import { useState, type ReactElement } from 'react';
import ToolComparisonTable from '../components/ToolComparisonTable';
import { toolMatrix, toolCategories } from '../data/toolMatrixData';

const ToolComparison = (): ReactElement => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTools = activeCategory === 'all'
    ? toolMatrix
    : toolMatrix.filter(t => t.category === activeCategory);

  const groupedTools = activeCategory === 'all'
    ? toolCategories.map(cat => ({
        category: cat.label,
        tools: toolMatrix.filter(t => t.category === cat.key),
      })).filter(g => g.tools.length > 0)
    : [{ category: toolCategories.find(c => c.key === activeCategory)?.label || '', tools: filteredTools }];

  return (
    <div className="tools-page">
      <div className="page-header">
        <div className="container">
          <h1>AI 코딩 도구 비교</h1>
          <p>바이브코딩에 사용되는 주요 AI 도구들을 카테고리별로 비교합니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="tool-filter">
          <button
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            전체
          </button>
          {toolCategories.map(cat => (
            <button
              key={cat.key}
              className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {groupedTools.map((group, i) => (
          <ToolComparisonTable key={i} category={group.category} tools={group.tools} />
        ))}
      </div>
    </div>
  );
};

export default ToolComparison;
