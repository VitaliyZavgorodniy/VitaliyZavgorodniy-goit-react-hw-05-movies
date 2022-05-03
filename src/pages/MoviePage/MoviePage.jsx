import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { fetchTrending, fetchGenres } from 'services/fetchMoviesData';

import MoviesGallery from 'components/MoviesGallery';
import Container from 'components/UI/Container';
import Section from 'components/UI/Section';

const MoviePage = ({ genresList }) => <div>HERE'is MOVIES SERCH</div>;

MoviePage.propTypes = {
  genresList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
export default MoviePage;