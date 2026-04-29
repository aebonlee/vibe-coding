import { createContext, useContext, useState, useEffect, useCallback, type ReactElement } from 'react';
import { useAuth } from './AuthContext';
import getSupabase from '../utils/supabase';
import { TABLES } from '../utils/supabase';
import type { ProgressRecord } from '../types';

interface ProgressContextValue {
  progress: ProgressRecord[];
  loading: boolean;
  isCompleted: (contentType: string, contentId: string) => boolean;
  toggleComplete: (contentType: string, contentId: string) => Promise<void>;
  getProgressPercent: (contentType: string, totalIds: string[]) => number;
  refreshProgress: () => Promise<void>;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

interface ProgressProviderProps {
  children: React.ReactNode;
}

export const ProgressProvider = ({ children }: ProgressProviderProps): ReactElement => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<ProgressRecord[]>([]);
  const [loading, setLoading] = useState(false);

  const loadProgress = useCallback(async () => {
    if (!user) {
      setProgress([]);
      return;
    }
    const client = getSupabase();
    if (!client) return;

    setLoading(true);
    try {
      const { data, error } = await client
        .from(TABLES.progress)
        .select('*')
        .eq('user_id', user.id);
      if (error) {
        console.error('loadProgress error:', error);
      } else {
        setProgress((data || []) as ProgressRecord[]);
      }
    } catch (err) {
      console.error('loadProgress error:', err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  const isCompleted = useCallback((contentType: string, contentId: string): boolean => {
    return progress.some(
      p => p.content_type === contentType && p.content_id === contentId && p.completed
    );
  }, [progress]);

  const toggleComplete = useCallback(async (contentType: string, contentId: string) => {
    if (!user) return;
    const client = getSupabase();
    if (!client) return;

    const existing = progress.find(
      p => p.content_type === contentType && p.content_id === contentId
    );

    if (existing?.completed) {
      // Remove completion
      await client
        .from(TABLES.progress)
        .delete()
        .eq('user_id', user.id)
        .eq('content_type', contentType)
        .eq('content_id', contentId);

      setProgress(prev => prev.filter(
        p => !(p.content_type === contentType && p.content_id === contentId)
      ));
    } else {
      // Mark complete
      const record = {
        user_id: user.id,
        content_type: contentType,
        content_id: contentId,
        completed: true,
        completed_at: new Date().toISOString(),
      };
      await client.from(TABLES.progress).upsert(record, {
        onConflict: 'user_id,content_type,content_id'
      });

      setProgress(prev => {
        const filtered = prev.filter(
          p => !(p.content_type === contentType && p.content_id === contentId)
        );
        return [...filtered, record as ProgressRecord];
      });
    }
  }, [user, progress]);

  const getProgressPercent = useCallback((contentType: string, totalIds: string[]): number => {
    if (totalIds.length === 0) return 0;
    const completed = totalIds.filter(id =>
      progress.some(p => p.content_type === contentType && p.content_id === id && p.completed)
    ).length;
    return Math.round((completed / totalIds.length) * 100);
  }, [progress]);

  return (
    <ProgressContext.Provider value={{
      progress,
      loading,
      isCompleted,
      toggleComplete,
      getProgressPercent,
      refreshProgress: loadProgress,
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextValue => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
};
