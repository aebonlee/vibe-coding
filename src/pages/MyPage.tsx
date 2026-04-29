import { useState, type ReactElement, type FormEvent } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../contexts/ToastContext';
import { useProgress } from '../contexts/ProgressContext';
import { updateProfile } from '../utils/auth';

const MyPage = (): ReactElement => {
  const { user, profile, refreshProfile } = useAuth();
  const { t } = useLanguage();
  const { showToast } = useToast();
  const { progress } = useProgress();
  const [name, setName] = useState(profile?.display_name || '');
  const [phone, setPhone] = useState(profile?.phone || '');
  const [saving, setSaving] = useState(false);

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    try {
      await updateProfile(user.id, { display_name: name, name, phone });
      await refreshProfile();
      showToast('프로필이 저장되었습니다.', 'success');
    } catch (err) {
      showToast((err as Error).message, 'error');
    } finally {
      setSaving(false);
    }
  };

  const topicCount = progress.filter(p => p.content_type === 'topic' && p.completed).length;
  const projectCount = progress.filter(p => p.content_type === 'project' && p.completed).length;
  const bootcampCount = progress.filter(p => p.content_type === 'bootcamp' && p.completed).length;
  const markdownCount = progress.filter(p => p.content_type === 'markdown' && p.completed).length;

  return (
    <div className="auth-container">
      <div className="auth-card" style={{ maxWidth: 600 }}>
        <h2>{t('auth.myPage')}</h2>

        <div className="mypage-progress-summary">
          <h3>학습 진도 요약</h3>
          <div className="progress-stats">
            <div className="stat-item">
              <span className="stat-number">{topicCount}</span>
              <span className="stat-label">커리큘럼 토픽</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{projectCount}</span>
              <span className="stat-label">프로젝트</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{bootcampCount}</span>
              <span className="stat-label">부트캠프 일차</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{markdownCount}</span>
              <span className="stat-label">마크다운 챕터</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSave} style={{ marginTop: '2rem' }}>
          <div className="form-group">
            <label>{t('auth.email')}</label>
            <input type="email" value={profile?.email || ''} disabled />
          </div>
          <div className="form-group">
            <label>{t('auth.displayName')}</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder={t('auth.displayNamePlaceholder')} />
          </div>
          <div className="form-group">
            <label>{t('auth.phone')}</label>
            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder={t('auth.phonePlaceholder')} />
          </div>
          <button type="submit" className="auth-submit-btn" disabled={saving}>
            {saving ? '...' : t('auth.save')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyPage;
