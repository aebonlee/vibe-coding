import { useState, useEffect, type ReactElement } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import getSupabase, { TABLES } from '../utils/supabase';

const AdminDashboard = (): ReactElement => {
  const { isAdmin } = useAuth();
  const [stats, setStats] = useState({ users: 0, posts: 0, progress: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const client = getSupabase();
      if (!client) { setLoading(false); return; }
      try {
        const [usersRes, postsRes, progressRes] = await Promise.all([
          client.from('user_profiles').select('id', { count: 'exact', head: true }),
          client.from(TABLES.board_posts).select('id', { count: 'exact', head: true }),
          client.from(TABLES.progress).select('id', { count: 'exact', head: true }),
        ]);
        setStats({
          users: usersRes.count || 0,
          posts: postsRes.count || 0,
          progress: progressRes.count || 0,
        });
      } catch (err) {
        console.error('Admin stats error:', err);
      }
      setLoading(false);
    };
    load();
  }, []);

  if (!isAdmin) return <Navigate to="/" replace />;

  return (
    <div className="admin-page">
      <div className="page-header">
        <div className="container">
          <h1>관리자 대시보드</h1>
        </div>
      </div>
      <div className="container">
        {loading ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>로딩 중...</div>
        ) : (
          <div className="admin-stats-grid">
            <div className="admin-stat-card">
              <h3>전체 회원</h3>
              <span className="admin-stat-number">{stats.users}</span>
            </div>
            <div className="admin-stat-card">
              <h3>커뮤니티 게시글</h3>
              <span className="admin-stat-number">{stats.posts}</span>
            </div>
            <div className="admin-stat-card">
              <h3>학습 기록</h3>
              <span className="admin-stat-number">{stats.progress}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
