import { useState, type ReactElement } from 'react';
import BootcampDayCard from '../components/BootcampDayCard';
import ProgressBar from '../components/ProgressBar';
import { useProgress } from '../contexts/ProgressContext';
import { useAuth } from '../contexts/AuthContext';
import { bootcampDays } from '../data/bootcampData';

const Bootcamp = (): ReactElement => {
  const [activeWeek, setActiveWeek] = useState(0); // 0 = all
  const { isCompleted, toggleComplete, getProgressPercent } = useProgress();
  const { isLoggedIn } = useAuth();

  const dayIds = bootcampDays.map(d => `bootcamp-day-${d.day}`);
  const progressPercent = getProgressPercent('bootcamp', dayIds);

  const filteredDays = activeWeek === 0
    ? bootcampDays
    : bootcampDays.filter(d => d.week === activeWeek);

  return (
    <div className="bootcamp-page">
      <div className="page-header">
        <div className="container">
          <h1>28일 바이브코딩 부트캠프</h1>
          <p>매일 하나의 미션을 수행하며 바이브코딩을 완전 정복하세요.</p>
          <ProgressBar percent={progressPercent} label="전체 진도" />
        </div>
      </div>
      <div className="container">
        <div className="week-filter">
          <button className={`filter-btn ${activeWeek === 0 ? 'active' : ''}`} onClick={() => setActiveWeek(0)}>전체</button>
          <button className={`filter-btn ${activeWeek === 1 ? 'active' : ''}`} onClick={() => setActiveWeek(1)}>Week 1: 입문</button>
          <button className={`filter-btn ${activeWeek === 2 ? 'active' : ''}`} onClick={() => setActiveWeek(2)}>Week 2: Cursor</button>
          <button className={`filter-btn ${activeWeek === 3 ? 'active' : ''}`} onClick={() => setActiveWeek(3)}>Week 3: 풀스택</button>
          <button className={`filter-btn ${activeWeek === 4 ? 'active' : ''}`} onClick={() => setActiveWeek(4)}>Week 4: 마스터</button>
        </div>
        <div className="bootcamp-grid">
          {filteredDays.map(day => (
            <BootcampDayCard
              key={day.day}
              day={day}
              isCompleted={isCompleted('bootcamp', `bootcamp-day-${day.day}`)}
              onToggle={() => toggleComplete('bootcamp', `bootcamp-day-${day.day}`)}
              isLoggedIn={isLoggedIn}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
