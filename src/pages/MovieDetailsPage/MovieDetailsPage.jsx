import { useState, useEffect } from 'react';
import { Routes, Route, Outlet, useParams } from 'react-router-dom';

import SkeletonMovieDetailsPage from 'components/Skeletons/SkeletonMovieDetailsPage';
import MovieDetails from 'components/MovieDetails';
import Container from 'components/UI/Container';
import Section from 'components/UI/Section';
import MovieDetailsNavigation from 'components/MovieDetails/MovieDetailsNavigation';
import MovieCredits from 'components/MovieCredits';
import MovieReviews from 'components/MovieReviews';
import Breadcumbers from 'components/Breadcumbers';

import { formattedDetails } from 'utils/formattedDetails';
import { fetchDetails } from 'services/fetchMoviesData';

const MovieDetailsPage = () => {
  const { movieID } = useParams();

  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetchDetails('en', movieID).then((res) => {
      setLoading(false);
      setMovieData(formattedDetails(res));
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <SkeletonMovieDetailsPage />;

  return (
    <Section>
      <Container>
        <Breadcumbers />
        {movieData && <MovieDetails {...movieData} />}
      </Container>

      <Container>
        <MovieDetailsNavigation id={movieID} />

        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="credits" element={<MovieCredits id={movieID} />} />
            <Route path="reviews" element={<MovieReviews id={movieID} />} />
          </Route>
        </Routes>
      </Container>
    </Section>
  );
};

export default MovieDetailsPage;
