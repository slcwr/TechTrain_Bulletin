import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import type { Threads } from '../model/types';

interface ThreadCardProps {
  thread: Threads;
}

export function ThreadCard({ thread }: ThreadCardProps) {
  return (
    <Card
      sx={{
        backgroundColor: '#ffffffff',
        '&:hover': { bgcolor: 'action.hover' },
        border: '1px solid #d8d2d2ff',
        borderRadius: 0,
      }}
    >
      <CardContent>
        <Link to={`/threads/${thread.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" component="h2">
            {thread.title}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
