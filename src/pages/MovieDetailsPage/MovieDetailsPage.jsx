import { useState, useEffect } from 'react';
import { Routes, Route, Outlet, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import MovieDetails from 'components/MovieDetails';
import Container from 'components/UI/Container';
import Section from 'components/UI/Section';
import MovieDetailsNavigation from 'components/MovieDetails/MovieDetailsNavigation';
import MovieCredits from 'components/MovieCredits';
import MovieReviews from 'components/MovieReviews';

import { formattedDetails } from 'utils/formattedDetails';
import { fetchDetails } from 'services/fetchMoviesData';

const MovieDetailsPage = ({ genresList }) => {
  const { movieID } = useParams();

  const [movieData, setMovieData] = useState(null);
  const [reviews, setReview] = useState(null);
  const [credits, setCredits] = useState(null);

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

MovieDetailsPage.propTypes = {
  genresList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default MovieDetailsPage;
