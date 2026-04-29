import type { ReactElement } from 'react';
import type { CurriculumLevel } from '../types';

interface LevelBadgeProps {
  level: CurriculumLevel;
  size?: 'sm' | 'md' | 'lg';
}

const LEVEL_CONFIG = {
  beginner: { label: '초급', labelEn: 'Beginner', className: 'level-beginner' },
  intermediate: { label: '중급', labelEn: 'Intermediate', className: 'level-intermediate' },
  advanced: { label: '고급', labelEn: 'Advanced', className: 'level-advanced' },
};

const LevelBadge = ({ level, size = 'md' }: LevelBadgeProps): ReactElement => {
  const config = LEVEL_CONFIG[level];
  return (
    <span className={`level-badge ${config.className} level-badge-${size}`}>
      {config.label}
    </span>
  );
};

export default LevelBadge;
