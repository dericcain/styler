import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';

const Admin = lazy(() => import('./admin'));
const Home = lazy(() => import('./home'));

const Pages = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Home path="/" />
      <Admin path="/admin" />
    </Router>
  </Suspense>
);

export default Pages;
