import PropTypes from 'prop-types';
import styled from 'styled-components';

const AccentButton = ({ title, onClick, type }) => (
  <Button type={type} onClick={onClick}>
    {title}
  </Button>
);

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: ${(p) => p.theme.altBG};
  color: ${(p) => p.theme.mainColor};
  font-family: ${(p) => p.theme.mainFF}, sans-serif;
  transition: background-color ${(p) => p.theme.transition},
    color ${(p) => p.theme.transition};

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.mainColor};
    background-color: ${(p) => p.theme.accentColor};
  }
`;
AccentButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default AccentButton;
