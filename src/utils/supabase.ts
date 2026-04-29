import { createClient, SupabaseClient } from '@supabase/supabase-js';
import site from '../config/site';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/** Supabase 테이블명 (site.dbPrefix 기반) */
export const TABLES = {
  progress: `${site.dbPrefix}progress`,
  checklist_results: `${site.dbPrefix}checklist_results`,
  board_posts: `${site.dbPrefix}board_posts`,
  board_comments: `${site.dbPrefix}board_comments`,
  project_submissions: `${site.dbPrefix}project_submissions`,
} as const;

let supabase: SupabaseClient | null = null;

const getSupabase = (): SupabaseClient | null => {
  if (!supabase && supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        autoRefreshToken: true,
        persistSession: true,
      }
    });
  }
  return supabase;
};

export default getSupabase;
