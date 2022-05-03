import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CreditsItem from './CreditsItem';

import { fetchCredits } from 'services/fetchMoviesData';
import { mappedCredits } from 'utils/mappedCredits';

const MovieCredits = ({ id }) => {
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    fetchCredits('en', id).then((res) => setCredits(mappedCredits(res)));
  }, []);

  const renderCredits = () =>
    credits.map((item) => (
      <Item key={item.id}>
        <CreditsItem {...item} />
      </Item>
    ));

  return <List>{credits ? renderCredits() : 'no credits'}</List>;
};

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  padding: 10px;
  background-color: ${(p) => p.theme.altBG};
  border-radius: 10px;
`;

const Item = styled.li`
  margin-top: 8px;
  margin-left: 9px;
`;

MovieCredits.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MovieCredits;
