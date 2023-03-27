import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './module/Layout/Layout';

const HomePage = lazy(() => import('./page/HomePage/HomePage'));
const SearchPage = lazy(() => import('./page/SearchPage/SearchPage'));
const MovieDetailsPage = lazy(() =>
  import('./page/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./module/Cast/Cast'));
const Reviews = lazy(() => import('./module/Reviews/Reviews'));

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movie-search" element={<SearchPage />} />
          <Route path="movie-search/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
