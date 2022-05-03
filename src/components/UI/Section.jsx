import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

const Section = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.section`
  width: 100%;
  padding: 32px 0 40px;

  @media ${breakpoints.tablet} {
    padding: 32px 0 60px;
  }
`;

export default Section;
