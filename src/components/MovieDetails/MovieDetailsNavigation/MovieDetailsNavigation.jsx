import PropTypes from 'prop-types';
import styled from 'styled-components';

import CustomLink from './CustonLink';

const MovieDetailsNavigation = ({ id }) => {
  return (
    <LinksMenu>
      <LinksItem>
        <CustomLink to={`/movies/${id}/credits`}>Credits</CustomLink>
      </LinksItem>
      <LinksItem>
        <CustomLink to={`/movies/${id}/reviews`}>Reviews</CustomLink>
      </LinksItem>
    </LinksMenu>
  );
};

const LinksMenu = styled.ul`
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${(p) => p.theme.altBG};
  border-radius: 10px;
`;

const LinksItem = styled.li`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

MovieDetailsNavigation.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MovieDetailsNavigation;
