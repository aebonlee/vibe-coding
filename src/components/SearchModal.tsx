import { useState, useEffect, useRef, type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { searchData } from '../data/searchData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchItem {
  title: string;
  path: string;
  category: string;
  keywords: string[];
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps): ReactElement | null => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results: SearchItem[] = query.trim().length < 2
    ? []
    : searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.some(k => k.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 10);

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-input-wrapper">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={t('search.placeholder')}
            className="search-input"
          />
          <button className="search-close-btn" onClick={onClose}>ESC</button>
        </div>
        {query.trim().length >= 2 && (
          <div className="search-results">
            {results.length === 0 ? (
              <div className="search-no-results">{t('search.noResults')}</div>
            ) : (
              results.map((item, i) => (
                <button key={i} className="search-result-item" onClick={() => handleSelect(item.path)}>
                  <span className="search-result-category">{item.category}</span>
                  <span className="search-result-title">{item.title}</span>
                </button>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
