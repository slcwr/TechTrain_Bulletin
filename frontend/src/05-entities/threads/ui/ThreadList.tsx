import { Box } from '@mui/material';
import { ThreadCard } from './ThreadCard';
import type { Threads } from '../model/types';

interface ThreadListProps {
  threads: Threads[];
}

export function ThreadList({ threads }: ThreadListProps) {
  return (
    <Box>
      {threads.map((thread) => (
        <ThreadCard key={thread.id} thread={thread} />
      ))}
    </Box>
  );
}
