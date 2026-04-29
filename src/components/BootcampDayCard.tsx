import type { ReactElement } from 'react';
import type { BootcampDay } from '../types';

interface BootcampDayCardProps {
  day: BootcampDay;
  isCompleted: boolean;
  onToggle: () => void;
  isLoggedIn: boolean;
}

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
          <span key={i} className="tech-tag">{tool}</span>
        ))}
      </div>
      <div className="bootcamp-day-deliverable">
        <strong>산출물:</strong> {day.deliverable}
      </div>
    </div>
  );
};

export default BootcampDayCard;
