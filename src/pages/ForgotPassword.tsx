import { useState, type ReactElement, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../contexts/ToastContext';
import { resetPassword } from '../utils/auth';

const ForgotPassword = (): ReactElement => {
  const { t } = useLanguage();
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await resetPassword(email);
      setSent(true);
      showToast(t('auth.resetEmailSent'), 'success');
    } catch (err) {
      showToast((err as Error).message, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{t('auth.forgotPasswordTitle')}</h2>
        <p className="auth-subtitle">{t('auth.forgotPasswordSubtitle')}</p>
        {sent ? (
          <div className="auth-success-message">
            <p>{t('auth.resetEmailSent')}</p>
            <Link to="/login" className="auth-submit-btn" style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none', marginTop: '1rem' }}>
              {t('auth.backToLogin')}
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{t('auth.email')}</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={t('auth.emailPlaceholder')} required />
            </div>
            <button type="submit" className="auth-submit-btn" disabled={loading}>
              {loading ? '...' : t('auth.sendResetLink')}
            </button>
          </form>
        )}
        <div className="auth-links">
          <Link to="/login">{t('auth.backToLogin')}</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
