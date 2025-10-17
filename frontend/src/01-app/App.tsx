import { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from '~react-pages';
import Layout from './layout';

function Routes() {
  return useRoutes(routes);
}

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
