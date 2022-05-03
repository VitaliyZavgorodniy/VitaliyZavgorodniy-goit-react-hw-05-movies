import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ReviewItem from './ReviewItem';

import { fetchReviews } from 'services/fetchMoviesData';
import { mappedReviews } from 'utils/mappedReviews';

const MovieReviews = ({ id }) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchReviews('en', id).then((res) =>
      setReviews(mappedReviews(res.results))
    );
  }, []);

  const renderReviews = () =>
    reviews.map((item) => (
      <Item key={item.id}>
        <ReviewItem {...item} />
      </Item>
    ));

  return <List>{reviews ? renderReviews() : 'no reviews'}</List>;
};

const List = styled.ul`
  margin-top: 2px;
`;

const Item = styled.li`
  margin-top: 8px;
`;

MovieReviews.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MovieReviews;
