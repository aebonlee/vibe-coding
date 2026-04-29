import type { ReactElement } from 'react';
import ChecklistWidget from '../components/ChecklistWidget';
import { checklistItems } from '../data/checklistData';
import type { CurriculumLevel } from '../types';

const levels: CurriculumLevel[] = ['beginner', 'intermediate', 'advanced'];

const Checklist = (): ReactElement => {
  return (
    <div className="checklist-page">
      <div className="page-header">
        <div className="container">
          <h1>자기진단 체크리스트</h1>
          <p>각 레벨의 통과 기준을 확인하고 자신의 수준을 진단하세요.</p>
        </div>
      </div>
      <div className="container">
        {levels.map(level => (
          <ChecklistWidget
            key={level}
            level={level}
            items={checklistItems.filter(i => i.level === level)}
          />
        ))}
      </div>
    </div>
  );
};

export default Checklist;
