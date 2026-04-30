import { useState, useEffect, type ReactElement, type FormEvent } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import getSupabase, { TABLES } from '../utils/supabase';
import { md } from '../utils/markdown';
import type { BoardPost } from '../types';

const CATEGORIES = ['전체', '공지', '자유', '질문', '쇼케이스', '후기'];

const Community = (): ReactElement => {
  const { user, isLoggedIn, isAdmin, profile } = useAuth();
  const { showToast } = useToast();
  const [posts, setPosts] = useState<BoardPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('전체');
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postCategory, setPostCategory] = useState('자유');
  const [submitting, setSubmitting] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BoardPost | null>(null);

  useEffect(() => {
    loadPosts();
  }, [category]);

  const loadPosts = async () => {
    setLoading(true);
    const client = getSupabase();
    if (!client) { setLoading(false); return; }
    let query = client.from(TABLES.board_posts).select('*').order('created_at', { ascending: false });
    if (category !== '전체') query = query.eq('category', category);
    const { data } = await query;
    setPosts((data || []) as BoardPost[]);
    setLoading(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!user || !title.trim() || !content.trim()) return;
    setSubmitting(true);
    const client = getSupabase();
    if (!client) { setSubmitting(false); return; }
    const { error } = await client.from(TABLES.board_posts).insert({
      category: postCategory,
      title: title.trim(),
      content: content.trim(),
      author_id: user.id,
      author_name: profile?.display_name || user.email?.split('@')[0] || 'Unknown',
      views: 0,
    });
    if (error) {
      showToast('게시글 작성에 실패했습니다.', 'error');
    } else {
      showToast('게시글이 등록되었습니다.', 'success');
      setTitle(''); setContent(''); setShowForm(false);
      loadPosts();
    }
    setSubmitting(false);
  };

  const handleDelete = async (postId: number) => {
    if (!window.confirm('삭제하시겠습니까?')) return;
    const client = getSupabase();
    if (!client) return;
    await client.from(TABLES.board_posts).delete().eq('id', postId);
    setPosts(prev => prev.filter(p => p.id !== postId));
    setSelectedPost(null);
    showToast('삭제되었습니다.', 'success');
  };

  const handleView = async (post: BoardPost) => {
    setSelectedPost(post);
    const client = getSupabase();
    if (client) {
      await client.from(TABLES.board_posts).update({ views: (post.views || 0) + 1 }).eq('id', post.id);
    }
  };

  const formatDate = (d: string) => new Date(d).toLocaleDateString('ko-KR');

  if (selectedPost) {
    return (
      <div className="community-page">
        <div className="container">
          <button className="btn btn-outline" onClick={() => setSelectedPost(null)} style={{ marginBottom: '1rem' }}>
            &larr; 목록으로
          </button>
          <div className="post-detail">
            <span className="post-category-badge">{selectedPost.category}</span>
            <h2>{selectedPost.title}</h2>
            <div className="post-meta">
              <span>{selectedPost.author_name}</span>
              <span>{formatDate(selectedPost.created_at)}</span>
              <span>조회 {selectedPost.views}</span>
            </div>
            <div className="post-body" dangerouslySetInnerHTML={{ __html: md(selectedPost.content) }} />
            {(isAdmin || user?.id === selectedPost.author_id) && (
              <button className="btn btn-danger" onClick={() => handleDelete(selectedPost.id)} style={{ marginTop: '1rem' }}>삭제</button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="community-page">
      <div className="page-header">
        <div className="container">
          <h1>커뮤니티</h1>
          <p>바이브코딩에 대해 질문하고, 프로젝트를 공유하고, 경험을 나누세요.</p>
        </div>
      </div>
      <div className="container">
        <div className="community-top">
          <div className="category-filter">
            {CATEGORIES.map(cat => (
              <button key={cat} className={`filter-btn ${category === cat ? 'active' : ''}`} onClick={() => setCategory(cat)}>{cat}</button>
            ))}
          </div>
          {isLoggedIn && (
            <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
              {showForm ? '취소' : '글쓰기'}
            </button>
          )}
        </div>

        {showForm && (
          <form className="post-form" onSubmit={handleSubmit}>
            <select value={postCategory} onChange={e => setPostCategory(e.target.value)}>
              <option value="자유">자유</option>
              <option value="질문">질문</option>
              <option value="쇼케이스">쇼케이스</option>
              <option value="후기">후기</option>
              {isAdmin && <option value="공지">공지</option>}
            </select>
            <input type="text" placeholder="제목" value={title} onChange={e => setTitle(e.target.value)} required />
            <textarea placeholder="내용을 입력하세요..." rows={6} value={content} onChange={e => setContent(e.target.value)} required />
            <button type="submit" className="btn btn-primary" disabled={submitting}>{submitting ? '등록 중...' : '등록'}</button>
          </form>
        )}

        {loading ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>로딩 중...</div>
        ) : posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>게시글이 없습니다.</div>
        ) : (
          <div className="post-list">
            {posts.map(post => (
              <div key={post.id} className="post-item" onClick={() => handleView(post)}>
                <span className="post-category-badge">{post.category}</span>
                <div className="post-info">
                  <h3>{post.title}</h3>
                  <div className="post-meta">
                    <span>{post.author_name}</span>
                    <span>{formatDate(post.created_at)}</span>
                    <span>조회 {post.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;
