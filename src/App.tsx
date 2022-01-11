import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

import './scss/site.scss';

const Movies = React.lazy(
  () => import(/* webpackChunkName: "movies-page" */ './pages/Movies/Movies')
);

const Series = React.lazy(
  () => import(/* webpackChunkName: "series-page" */ './pages/Series/Series')
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="movies"
        element={
          <Suspense fallback={'...loading'}>
            <Movies />
          </Suspense>
        }
      />
      <Route
        path="series"
        element={
          <Suspense fallback={'...loading'}>
            <Series />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
