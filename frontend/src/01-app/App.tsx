import { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from '~react-pages';
import './styles/App.css';

function Routes() {
  return useRoutes(routes);
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
