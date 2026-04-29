import { useState, type ReactElement, type ReactNode } from 'react';

interface SidebarItem {
  id: string;
  title: string;
  completed?: boolean;
}

interface SidebarLayoutProps {
  title: string;
  items: SidebarItem[];
  activeId: string;
  onSelect: (id: string) => void;
  children: ReactNode;
  progressPercent?: number;
}

const SidebarLayout = ({ title, items, activeId, onSelect, children, progressPercent }: SidebarLayoutProps): ReactElement => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="sidebar-layout">
      <button
        className="sidebar-mobile-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        목차
      </button>
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>{title}</h3>
          {progressPercent !== undefined && (
            <div className="sidebar-progress">
              <div className="sidebar-progress-bar">
                <div className="sidebar-progress-fill" style={{ width: `${progressPercent}%` }} />
              </div>
              <span className="sidebar-progress-text">{progressPercent}%</span>
            </div>
          )}
        </div>
        <nav className="sidebar-nav">
          {items.map((item) => (
            <button
              key={item.id}
              className={`sidebar-item ${activeId === item.id ? 'active' : ''} ${item.completed ? 'completed' : ''}`}
              onClick={() => { onSelect(item.id); setSidebarOpen(false); }}
            >
              <span className="sidebar-item-indicator">
                {item.completed ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <span className="sidebar-item-dot" />
                )}
              </span>
              <span className="sidebar-item-title">{item.title}</span>
            </button>
          ))}
        </nav>
      </aside>
      <div className="sidebar-content">
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
