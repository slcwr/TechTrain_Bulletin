import { AppBar, Toolbar, Typography, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        width: '100%',
        backgroundColor: '#4ee9abff',
        height: '80px',
        padding: '8px',
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="h6">掲示板</Typography>
          <Link
            component={RouterLink}
            to="/threads/new"
            variant="h6"
            sx={{
              textDecoration: 'underline',
              color: 'inherit',
              cursor: 'pointer',
            }}
          >
            スレッドをたてる
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
