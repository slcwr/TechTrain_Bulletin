import type { ReactNode } from 'react';
import { Box } from '@mui/material';
import { Header } from '../03-widgets/header/header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          backgroundColor: '#c3bfbfff',
          minHeight: 'calc(100vh - 80px)',
          padding: 2,
        }}
      >
        {children}
      </Box>
    </>
  );
};
