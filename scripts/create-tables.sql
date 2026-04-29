-- =============================================
-- Vibe Coding Master (vc_) Supabase Tables
-- 실행: Supabase SQL Editor에서 한 번만 실행
-- =============================================

-- 1. 학습 진도 추적
CREATE TABLE IF NOT EXISTS vc_progress (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content_type TEXT NOT NULL CHECK (content_type IN ('topic', 'project', 'bootcamp', 'checklist', 'markdown')),
  content_id TEXT NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT true,
  completed_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (user_id, content_type, content_id)
);

ALTER TABLE vc_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own progress" ON vc_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON vc_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON vc_progress
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own progress" ON vc_progress
  FOR DELETE USING (auth.uid() = user_id);

-- 2. 체크리스트 결과
CREATE TABLE IF NOT EXISTS vc_checklist_results (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  level TEXT NOT NULL CHECK (level IN ('beginner', 'intermediate', 'advanced')),
  checked_items JSONB NOT NULL DEFAULT '[]',
  score INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (user_id, level)
);

ALTER TABLE vc_checklist_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own checklist" ON vc_checklist_results
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can upsert own checklist" ON vc_checklist_results
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own checklist" ON vc_checklist_results
  FOR UPDATE USING (auth.uid() = user_id);

-- 3. 커뮤니티 게시글
CREATE TABLE IF NOT EXISTS vc_board_posts (
  id BIGSERIAL PRIMARY KEY,
  category TEXT NOT NULL DEFAULT '자유',
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL DEFAULT '',
  views INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE vc_board_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read posts" ON vc_board_posts
  FOR SELECT USING (true);

CREATE POLICY "Auth users can create posts" ON vc_board_posts
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can update own posts" ON vc_board_posts
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Authors can delete own posts" ON vc_board_posts
  FOR DELETE USING (auth.uid() = author_id);

-- 4. 댓글
CREATE TABLE IF NOT EXISTS vc_board_comments (
  id BIGSERIAL PRIMARY KEY,
  post_id BIGINT NOT NULL REFERENCES vc_board_posts(id) ON DELETE CASCADE,
  author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL DEFAULT '',
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE vc_board_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read comments" ON vc_board_comments
  FOR SELECT USING (true);

CREATE POLICY "Auth users can create comments" ON vc_board_comments
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can delete own comments" ON vc_board_comments
  FOR DELETE USING (auth.uid() = author_id);

-- 5. 프로젝트 제출물 (쇼케이스)
CREATE TABLE IF NOT EXISTS vc_project_submissions (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  project_id TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  demo_url TEXT,
  repo_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE vc_project_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read submissions" ON vc_project_submissions
  FOR SELECT USING (true);

CREATE POLICY "Auth users can create submissions" ON vc_project_submissions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own submissions" ON vc_project_submissions
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own submissions" ON vc_project_submissions
  FOR DELETE USING (auth.uid() = user_id);

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_vc_progress_user ON vc_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_vc_progress_type ON vc_progress(content_type);
CREATE INDEX IF NOT EXISTS idx_vc_board_posts_category ON vc_board_posts(category);
CREATE INDEX IF NOT EXISTS idx_vc_board_posts_created ON vc_board_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_vc_board_comments_post ON vc_board_comments(post_id);
