import { useState, useEffect, type ReactElement } from 'react';
import type { ChecklistItem, CurriculumLevel } from '../types';
import { useAuth } from '../contexts/AuthContext';
import getSupabase, { TABLES } from '../utils/supabase';

interface ChecklistWidgetProps {
  items: ChecklistItem[];
  level: CurriculumLevel;
}

const LEVEL_LABELS: Record<CurriculumLevel, string> = {
  beginner: '초급',
  intermediate: '중급',
  advanced: '고급',
};

const ChecklistWidget = ({ items, level }: ChecklistWidgetProps): ReactElement => {
  const { user } = useAuth();
  const [checked, setChecked] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!user) return;
    const load = async () => {
      const client = getSupabase();
      if (!client) return;
      const { data } = await client
        .from(TABLES.checklist_results)
        .select('checked_items')
        .eq('user_id', user.id)
        .eq('level', level)
        .maybeSingle();
      if (data?.checked_items) {
        setChecked(new Set(data.checked_items as string[]));
      }
    };
    load();
  }, [user, level]);

  const toggle = async (itemId: string) => {
    const next = new Set(checked);
    if (next.has(itemId)) next.delete(itemId);
    else next.add(itemId);
    setChecked(next);

    if (!user) return;
    const client = getSupabase();
    if (!client) return;
    const arr = Array.from(next);
    await client.from(TABLES.checklist_results).upsert({
      user_id: user.id,
      level,
      checked_items: arr,
      score: Math.round((arr.length / items.length) * 100),
    }, { onConflict: 'user_id,level' });
  };

  const score = items.length > 0 ? Math.round((checked.size / items.length) * 100) : 0;

  return (
    <div className="checklist-widget">
      <div className="checklist-header">
        <h3>{LEVEL_LABELS[level]} 자기진단</h3>
        <div className="checklist-score">
          <span className="checklist-score-number">{score}%</span>
          <span className="checklist-score-label">({checked.size}/{items.length})</span>
        </div>
      </div>
      <div className="checklist-progress-bar">
        <div className="checklist-progress-fill" style={{ width: `${score}%` }} />
      </div>
      <div className="checklist-items">
        {items.map((item) => (
          <label key={item.id} className={`checklist-item ${checked.has(item.id) ? 'checked' : ''}`}>
            <input
              type="checkbox"
              checked={checked.has(item.id)}
              onChange={() => toggle(item.id)}
            />
            <span className="checklist-item-text">{item.text}</span>
            <span className="checklist-item-category">{item.category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ChecklistWidget;
