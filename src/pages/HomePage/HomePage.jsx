import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { fetchTrending } from 'services/fetchMoviesData';

import MoviesGallery from 'components/MoviesGallery';
import Container from 'components/UI/Container';
import Section from 'components/UI/Section';

import { mappedMovies } from 'utils/mappedMoviesList';

const HomePage = ({ genresList }) => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    if (genresList.length)
      fetchTrending().then((res) =>
        setMoviesList(mappedMovies(genresList, res.list))
      );
  }, [genresList]);

  return (
    <Section>
      <Container>
        <MoviesGallery list={moviesList} />
      </Container>
    </Section>
  );
};

HomePage.propTypes = {
  genresList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default HomePage;
