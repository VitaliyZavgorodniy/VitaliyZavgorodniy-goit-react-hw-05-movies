import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import MovieCard from './MovieCard';

const MoviesGallery = ({ list }) => {
  const renderGallery = () =>
    list.map((item) => (
      <Item key={item.id}>
        <MovieCard {...item} />
      </Item>
    ));

  return <Wrapper>{list.length ? renderGallery() : null}</Wrapper>;
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: -20px;

  @media ${breakpoints.tablet} {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-left: -32px;
  }

  @media ${breakpoints.desktop} {
    margin-left: -16px;
  }
`;

const Item = styled.li`
  margin-left: 20px;
  margin-top: 20px;

  @media ${breakpoints.tablet} {
    flex-basis: calc((100% - (2 * 32px)) / 2);
    margin-left: 32px;
    margin-top: 32px;
  }

  @media ${breakpoints.desktop} {
    flex-basis: calc((100% - (3 * 16px)) / 3);
    margin-left: 16px;
    margin-top: 32px;
  }
`;

MoviesGallery.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterPath: PropTypes.string.isRequired,
      genres: PropTypes.string,
    })
  ),
};

export default MoviesGallery;
