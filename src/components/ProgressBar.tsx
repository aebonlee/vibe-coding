import type { ReactElement } from 'react';

interface ProgressBarProps {
  percent: number;
  label?: string;
  showPercent?: boolean;
}

const ProgressBar = ({ percent, label, showPercent = true }: ProgressBarProps): ReactElement => {
  const clampedPercent = Math.min(100, Math.max(0, percent));

  return (
    <div className="progress-bar-wrapper">
      {label && <span className="progress-bar-label">{label}</span>}
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${clampedPercent}%` }}
        />
      </div>
      {showPercent && <span className="progress-bar-percent">{clampedPercent}%</span>}
    </div>
  );
};

export default ProgressBar;
