import { mappedGenres } from './mappedGenres';

export const formattedDetails = (item) => ({
  id: item.id,
  title: item.title,
  qoute: item.tagline,
  overview: item.overview,
  posterPath: item.poster_path,
  backdropPath: item.backdrop_path,
  release: parseInt(item.release_date),
  genres: mappedGenres(item.genres),
});