import { Box, Typography } from '@mui/material';
import { ThreadCard } from './ThreadCard';
import type { Threads } from '../model/types';

interface ThreadListProps {
  threads?: Threads[];
}

export function ThreadList({ threads }: ThreadListProps) {
  if (!threads || threads.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="body1" color="text.secondary">
          スレッドがありません
        </Typography>
      </Box>
    );
  }

  return (
    <>
      {threads.map((thread) => (
        <ThreadCard key={thread.id} thread={thread} />
      ))}
    </>
  );
}
