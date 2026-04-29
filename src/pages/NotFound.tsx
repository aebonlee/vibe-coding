import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

const NotFound = (): ReactElement => {
  return (
    <div className="auth-container">
      <div className="auth-card" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>404</h2>
        <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
          페이지를 찾을 수 없습니다.
        </p>
        <Link to="/" className="auth-submit-btn" style={{ display: 'inline-block', textDecoration: 'none' }}>
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
