import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

const MovieCard = ({ id, title, posterPath, genres }) => (
  <Wrapper to={`/movies/${id}`}>
    <Thumb>
      <Picture>
        <source
          srcSet={`https://themoviedb.org/t/p/w342${posterPath}`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`https://themoviedb.org/t/p/w342${posterPath}`}
          media="(min-width: 1024px)"
        />
        <img
          alt={title}
          loading="lazy"
          src={`https://themoviedb.org/t/p/w342${posterPath}`}
        />
      </Picture>
    </Thumb>

    <Title>{title}</Title>
    <Genres>{genres}</Genres>
  </Wrapper>
);

const Wrapper = styled(Link)`
  width: 280px;
  transform: scale(1);
  transition: transform ${(p) => p.theme.transition};

  @media ${breakpoints.tablet} {
    width: 336px;
  }

  @media ${breakpoints.desktop} {
    width: 305px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
  }
`;

const Thumb = styled.div`
  /* height: 402px; */
  margin-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${(p) => p.theme.skeletonFrom};

  @media ${breakpoints.tablet} {
    /* height: 405px; */
  }

  @media ${breakpoints.desktop} {
    /* height: 449px; */
  }
`;

const Picture = styled.picture`
  width: 100%;
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px / 14px;
  color: ${(p) => p.theme.mainColor};
`;

const Genres = styled.p`
  margin-top: 4px;
  font-size: 12px;
  line-height: 12px / 14px;
  font-weight: 500;
  color: ${(p) => p.theme.accentColor};
`;

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  genres: PropTypes.string,
};

export default MovieCard;
