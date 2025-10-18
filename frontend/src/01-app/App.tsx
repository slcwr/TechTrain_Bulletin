import { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline } from '@mui/material';
import routes from '~react-pages';
import { Layout } from './layout';

// QueryClientのインスタンスを作成
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const Routes = () => {
  return useRoutes(routes);
};

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes />
          </Suspense>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
