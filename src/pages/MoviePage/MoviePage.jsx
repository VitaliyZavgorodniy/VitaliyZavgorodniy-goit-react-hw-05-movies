import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchSearch } from 'services/fetchMoviesData';

import SkeletonHomePage from 'components/Skeletons/SkeletonHomePage';

import MoviesGallery from 'components/MoviesGallery';
import Container from 'components/UI/Container';
import Section from 'components/UI/Section';
import SearchForm from 'components/SearchForm';

import { mappedMovies } from 'utils/mappedMoviesList';

const PARAM_QUERY = 'query';

const MoviePage = ({ genresList }) => {
  const [loading, setLoading] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [queryParam, setQueryParam] = useSearchParams({});

  useEffect(() => {
    const query = queryParam.get(PARAM_QUERY);

    if (query) handleSearch(query);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearch = (value) => {
    setLoading(true);
    setQueryParam({ [PARAM_QUERY]: value });

    fetchSearch('en', 1, value)
      .then((res) => {
        setLoading(false);
        setMoviesList(mappedMovies(genresList, res.list));
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSearch={handleSearch} />
      </Container>

      {loading ? (
        <SkeletonHomePage />
      ) : (
        <Container>
          <MoviesGallery list={moviesList} />
        </Container>
      )}
    </Section>
  );
};

MoviePage.propTypes = {
  genresList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default MoviePage;
