import { useState, useEffect } from 'react';
import { Routes, Route, Outlet, useParams } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails';
import Container from 'components/UI/Container';
import Section from 'components/UI/Section';
import MovieDetailsNavigation from 'components/MovieDetails/MovieDetailsNavigation';
import MovieCredits from 'components/MovieCredits';
import MovieReviews from 'components/MovieReviews';

import { formattedDetails } from 'utils/formattedDetails';
import { fetchDetails } from 'services/fetchMoviesData';

const MovieDetailsPage = () => {
  const { movieID } = useParams();

  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetchDetails('en', movieID).then((res) =>
      setMovieData(formattedDetails(res))
    );
  }, []);

  return (
    <Section>
      <Container>{movieData && <MovieDetails {...movieData} />}</Container>

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
