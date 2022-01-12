import React, { Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { ContentManagerProvider } from './context/ContentManagerContext';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

import './scss/site.scss';

const Movies = React.lazy(
  () => import(/* webpackChunkName: "movies-page" */ './pages/Movies/Movies')
);

const Series = React.lazy(
  () => import(/* webpackChunkName: "series-page" */ './pages/Series/Series')
);

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />}>
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
