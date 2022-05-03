import PropTypes from 'prop-types';

const MoviePage = ({ genresList }) => {
  console.log(genresList);
  return <div>HERE'is MOVIES SERCH</div>;
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
