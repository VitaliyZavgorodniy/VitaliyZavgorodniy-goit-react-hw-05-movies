export const mappedGenres = (genres) =>
  genres.map(({ name }) => name).join(', ');
