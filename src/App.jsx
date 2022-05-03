import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { fetchGenres } from 'services/fetchMoviesData';

import MainLayout from 'components/MainLayout';

import MovieDetailsPage from 'pages/MovieDetailsPage';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviePage = lazy(() => import('./pages/MoviePage'));

const App = () => {
  const [genresList, setGenresList] = useState([]);

  useEffect(() => {
    fetchGenres().then((res) => setGenresList(res.list));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<div>loading</div>}>
              <HomePage genresList={genresList} />
            </Suspense>
          }
        />
        <Route
          path="movies/:movieID/*"
          element={
            <Suspense fallback={<div>loading</div>}>
              <MovieDetailsPage genresList={genresList} />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense fallback={<div>loading</div>}>
              <MoviePage genresList={genresList} />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
