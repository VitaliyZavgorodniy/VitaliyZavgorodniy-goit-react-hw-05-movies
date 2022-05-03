import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

const MovieDetails = ({
  title,
  qoute,
  release,
  overview,
  genres,
  posterPath,
  backdropPath,
}) => (
  <Wrapper backdrop={backdropPath}>
    <Thumb>
      <picture>
        <source
          srcSet={`https://themoviedb.org/t/p/w500${posterPath}`}
          media="(min-width: 1024px)"
        />
        <source
          srcSet={`https://themoviedb.org/t/p/w342${posterPath}`}
          media="(min-width: 768px)"
        />
        <img
          alt={title}
          loading="lazy"
          src={`https://themoviedb.org/t/p/w342${posterPath}`}
        />
      </picture>
    </Thumb>

    <Information>
      <Title>{title}</Title>
      <Subtitle>{qoute}</Subtitle>

      <BlockTitle>Release</BlockTitle>
      <Paragraph>{release}</Paragraph>

      <BlockTitle>Genres</BlockTitle>
      <Paragraph>{genres}</Paragraph>

      <BlockTitle>Overview</BlockTitle>
      <Paragraph>{overview}</Paragraph>
    </Information>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  background-color: ${(p) => p.theme.altBG};
  border-radius: 10px;
`;

const Thumb = styled.div`
  min-width: 240px;
  min-height: 357px;

  @media ${breakpoints.tablet} {
    min-width: 264px;
    min-height: 370px;
  }

  @media ${breakpoints.desktop} {
    min-width: 375px;
    min-height: 470px;
    height: auto;
  }

  & img {
    border-radius: 5px;
  }
`;

const Information = styled.div`
  margin-left: 0;
  margin-top: 20px;

  @media ${breakpoints.tablet} {
    margin-top: 0;
    margin-left: 20px;
  }

  @media ${breakpoints.desktop} {
    margin-left: 25px;
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  color: ${(p) => p.theme.accentColor};
  font-size: 30px;
  font-weight: 700;
  font-family: 'Comfortaa', sans-serif;
`;

const Subtitle = styled.p`
  margin-top: 4px;
  margin-bottom: 40px;
  color: ${(p) => p.theme.altColor};
  font-size: 14px;
  font-weight: 400;
  font-family: 'Comfortaa', sans-serif;
`;

const BlockTitle = styled.h3`
  margin-top: 20px;
  color: ${(p) => p.theme.accentColor};
  font-size: 16px;
  font-weight: 700;
  font-family: 'Comfortaa', sans-serif;
`;

const Paragraph = styled.p`
  margin-top: 10px;
  color: ${(p) => p.theme.mainColor};
  font-size: 14px;
  font-weight: 400;
  font-family: 'Comfortaa', sans-serif;
`;

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  qoute: PropTypes.string,
  release: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.string,
  posterPath: PropTypes.string,
  backdropPath: PropTypes.string,
};

export default MovieDetails;
