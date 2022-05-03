import styled, { keyframes } from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import Section from 'components/UI/Section';
import Container from 'components/UI/Container';

const SkeletonMovieDetailsPage = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Thumb />
          <Information>
            <Title />
            <Subtitle />

            <BlockTitle />
            <Paragraph />

            <BlockTitle />
            <Paragraph />

            <BlockTitle />
            <Paragraph size="lg" />
          </Information>
        </Wrapper>
      </Container>
    </Section>
  );
};

const loading = keyframes`
  from {
    background-color: #383838;
  }

  to {
    background-color: #222222;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  background-color: ${(p) => p.theme.altBG};
  border-radius: 10px;
`;

const Thumb = styled.div`
  animation: ${loading} 1s linear infinite alternate;
  min-width: 240px;
  min-height: 357px;
  border-radius: 5px;

  @media ${breakpoints.tablet} {
    min-width: 264px;
    min-height: 370px;
  }

  @media ${breakpoints.desktop} {
    min-width: 375px;
    min-height: 470px;
    height: auto;
  }
`;

const Information = styled.div`
  margin-left: 0;
  margin-top: 20px;
  width: 100%;

  @media ${breakpoints.tablet} {
    margin-top: 0;
    margin-left: 20px;
  }

  @media ${breakpoints.desktop} {
    margin-left: 25px;
  }
`;

const Title = styled.div`
  animation: ${loading} 1s linear infinite alternate;
  width: 100%;
  height: 30px;
  border-radius: 5px;
`;

const Subtitle = styled.div`
  animation: ${loading} 1s linear infinite alternate;
  width: 100%;
  height: 16px;
  margin-top: 5px;
  border-radius: 5px;
`;

const BlockTitle = styled.h3`
  animation: ${loading} 1s linear infinite alternate;
  width: 100%;
  height: 16px;
  margin-top: 20px;
  border-radius: 5px;
`;

const Paragraph = styled.p`
  animation: ${loading} 1s linear infinite alternate;
  width: 100%;
  height: ${(p) => (p.size === 'lg' ? '52px' : '18px')};
  margin-top: 10px;
  border-radius: 5px;
`;

export default SkeletonMovieDetailsPage;
