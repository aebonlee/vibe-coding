import type { ReactElement } from 'react';
import type { BootcampDay } from '../types';

interface BootcampDayCardProps {
  day: BootcampDay;
  isCompleted: boolean;
  onToggle: () => void;
  isLoggedIn: boolean;
}

const getToolTagClass = (tool: string): string => {
  const lower = tool.toLowerCase();
  if (lower.includes('lovable')) return 'tool-tag-lovable';
  if (lower.includes('bolt')) return 'tool-tag-bolt';
  if (lower.includes('v0')) return 'tool-tag-v0';
  if (lower.includes('cursor')) return 'tool-tag-cursor';
  if (lower.includes('windsurf')) return 'tool-tag-windsurf';
  if (lower.includes('claude')) return 'tool-tag-claude';
  if (lower.includes('github') || lower.includes('copilot')) return 'tool-tag-github';
  if (lower.includes('supabase')) return 'tool-tag-supabase';
  if (lower.includes('배포') || lower.includes('deploy') || lower.includes('gh-pages')) return 'tool-tag-deploy';
  if (lower.includes('react')) return 'tool-tag-react';
  return '';
};

const BootcampDayCard = ({ day, isCompleted, onToggle, isLoggedIn }: BootcampDayCardProps): ReactElement => {
  return (
    <div className={`bootcamp-day-card ${isCompleted ? 'completed' : ''}`}>
      <div className="bootcamp-day-header">
        <span className="bootcamp-day-number">Day {day.day}</span>
        <span className="bootcamp-day-week">Week {day.week}</span>
        {isLoggedIn && (
          <button
            className={`bootcamp-check-btn ${isCompleted ? 'checked' : ''}`}
            onClick={onToggle}
          >
            {isCompleted ? '✓ 완료' : '완료 표시'}
          </button>
        )}
      </div>
      <h4 className="bootcamp-day-title">{day.title}</h4>
      <p className="bootcamp-day-desc">{day.description}</p>
      <div className="bootcamp-day-tasks">
        <strong>실습 내용:</strong>
        <ul>
          {day.tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </div>
      <div className="bootcamp-day-tools">
        {day.tools.map((tool, i) => (
          <span key={i} className={`tech-tag ${getToolTagClass(tool)}`}>{tool}</span>
        ))}
      </div>
      <div className="bootcamp-day-deliverable">
        <strong>산출물:</strong> {day.deliverable}
      </div>
    </div>
  );
};

export default BootcampDayCard;
