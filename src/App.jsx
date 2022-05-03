import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { fetchGenres } from 'services/fetchMoviesData';

import MainLayout from 'components/MainLayout';

import SkeletonHomePage from 'components/Skeletons/SkeletonHomePage';
import SkeletonMovieDetailsPage from 'components/Skeletons/SkeletonMovieDetailsPage';
import SkeletonMoviesPages from 'components/Skeletons/SkeletonMoviesPages';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviePage = lazy(() => import('./pages/MoviePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));

const App = () => {
  const [genresList, setGenresList] = useState([]);

  useEffect(() => {
    fetchGenres().then((res) => setGenresList(res.list));
  });

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<SkeletonHomePage />}>
              <HomePage genresList={genresList} />
            </Suspense>
          }
        />
        <Route
          path="movies/:movieID/*"
          element={
            <Suspense fallback={<SkeletonMovieDetailsPage />}>
              <MovieDetailsPage />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense fallback={<SkeletonMoviesPages />}>
              <MoviePage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
