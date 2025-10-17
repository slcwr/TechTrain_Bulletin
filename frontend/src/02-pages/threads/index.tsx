import { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress, Alert } from '@mui/material';
import { getThreads } from '@/05-entities/threads/api/getThreads';
import { ThreadList } from '@/05-entities/threads/ui/ThreadList';
import type { Threads } from '@/05-entities/threads/model/types';

export default function ThreadsPage() {
  const [threads, setThreads] = useState<Threads[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        setLoading(true);
        const response = await getThreads();
        setThreads(response.threads);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'スレッドの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };

    fetchThreads();
  }, []);

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4}}>
      <Typography variant="h4" component="h1" gutterBottom>
        新着スレッド
      </Typography>
      <ThreadList threads={threads} />
    </Container>
  );
}
