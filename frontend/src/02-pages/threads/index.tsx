import { Alert, CircularProgress, Container, Typography } from '@mui/material';
import { getThreads } from '@/05-entities/threads/api/getThreads';
import { ThreadList } from '@/05-entities/threads/ui/ThreadList';
import { useQuery } from '@tanstack/react-query';

export default function ThreadsPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['threads'],
    queryFn: () => getThreads(),
  });

  console.log('data:',data);

  if (isLoading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error.message}</Alert>;

  return (
    <Container sx={{ mt: 4, backgroundColor: '#f5f5f5', padding: 3, borderRadius: 1, width: 700 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        新着スレッド
      </Typography>
      <ThreadList threads={data?.threads} />
    </Container>
  );
}
