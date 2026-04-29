import type { ReactElement } from 'react';
import type { ToolInfo } from '../types';

interface ToolComparisonTableProps {
  tools: ToolInfo[];
  category: string;
}

const ToolComparisonTable = ({ tools, category }: ToolComparisonTableProps): ReactElement => {
  return (
    <div className="tool-comparison-section">
      <h3 className="tool-category-title">{category}</h3>
      <div className="tool-cards-grid">
        {tools.map((tool, i) => (
          <div key={i} className="tool-card">
            <div className="tool-card-header">
              <h4>{tool.name}</h4>
              <div className="tool-rating">
                {'★'.repeat(tool.rating)}{'☆'.repeat(5 - tool.rating)}
              </div>
            </div>
            <p className="tool-description">{tool.description}</p>
            <div className="tool-meta">
              <span className="tool-pricing">{tool.pricing}</span>
              <span className="tool-best-for">{tool.bestFor}</span>
            </div>
            <div className="tool-pros-cons">
              <div className="tool-pros">
                <strong>장점</strong>
                <ul>{tool.pros.map((p, j) => <li key={j}>{p}</li>)}</ul>
              </div>
              <div className="tool-cons">
                <strong>단점</strong>
                <ul>{tool.cons.map((c, j) => <li key={j}>{c}</li>)}</ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolComparisonTable;
