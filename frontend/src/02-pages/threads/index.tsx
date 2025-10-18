import { Alert, CircularProgress, Container, Typography } from '@mui/material';
import { useGetThreads } from '../../05-entities/threads/model/useGetThread';
import { ThreadList } from '@/05-entities/threads/ui/ThreadList';

export default function ThreadsPage() {
  const { data, isLoading, error } = useGetThreads();

  if (isLoading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error.message}</Alert>;

  return (
    <Container sx={{ mt: 4, padding: 3, borderRadius: 1, width: 700 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        新着スレッド
      </Typography>
      <ThreadList threads={data?.threads} />
    </Container>
  );
}
