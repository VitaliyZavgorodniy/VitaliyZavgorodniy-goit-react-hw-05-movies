import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => (
  <Wrapper>
    <Logo></Logo>
    <Menu>
      <Item>
        <StyledLink
          className={({ isActive }) => (isActive ? 'active' : null)}
          to="/"
        >
          Home
        </StyledLink>
      </Item>
      <Item>
        <StyledLink
          className={({ isActive }) => (isActive ? 'active' : null)}
          to="/movies"
        >
          Movies
        </StyledLink>
      </Item>
    </Menu>
  </Wrapper>
);

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-color: aqua;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-left: 15px;

  &:first-child {
    margin-left: 0;
  }
`;

const StyledLink = styled(NavLink)`
  padding-bottom: 12px;
  color: ${(p) => p.theme.mainColor};
  font-size: 18px;
  font-weight: 700;
  font-family: 'Comfortaa', sans-serif;
  border-bottom: 3px solid transparent;
  transition: color ${(p) => p.theme.transition};

  &.active {
    color: ${(p) => p.theme.accentColor};
    border-bottom: 3px solid ${(p) => p.theme.accentColor};
  }

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.accentColor};
  }
`;

export default Navigation;
