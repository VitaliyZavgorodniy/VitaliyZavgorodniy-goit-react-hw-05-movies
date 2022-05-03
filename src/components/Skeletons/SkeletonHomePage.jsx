import styled, { keyframes } from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import Container from 'components/UI/Container';
import Section from 'components/UI/Section';

const SkeletonHomePage = () => {
  const renderCard = () => (
    <Item>
      <Card>
        <CardThumb />
        <Title />
        <Text />
      </Card>
    </Item>
  );

  return (
    <Section>
      <Container>
        <Gallery>
          {renderCard()}
          {renderCard()}
          {renderCard()}
          {renderCard()}
          {renderCard()}
          {renderCard()}
        </Gallery>
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

const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;

  @media ${breakpoints.tablet} {
    flex-direction: row;
    align-items: flex-start;
    margin-left: -32px;
  }

  @media ${breakpoints.desktop} {
    margin-left: -16px;
  }
`;

const Item = styled.li`
  margin-left: 20px;
  margin-top: 20px;

  @media ${breakpoints.tablet} {
    flex-basis: calc((100% - (2 * 32px)) / 2);
    margin-left: 32px;
    margin-top: 32px;
  }

  @media ${breakpoints.desktop} {
    flex-basis: calc((100% - (3 * 16px)) / 3);
    margin-left: 16px;
    margin-top: 32px;
  }
`;

const Card = styled.div`
  width: 280px;

  @media ${breakpoints.tablet} {
    width: 336px;
  }

  @media ${breakpoints.desktop} {
    width: 305px;
  }
`;

const CardThumb = styled.div`
  animation: ${loading} 1s linear infinite alternate;
  height: 402px;
  margin-bottom: 5px;
  border-radius: 5px;

  @media ${breakpoints.tablet} {
    height: 455px;
  }

  @media ${breakpoints.desktop} {
    height: 449px;
  }
`;

const Title = styled.div`
  animation: ${loading} 1s linear infinite alternate;
  width: 100%;
  height: 18px;
  border-radius: 5px;
`;

const Text = styled.div`
  animation: ${loading} 1s linear infinite alternate;
  width: 100%;
  height: 16px;
  margin-top: 4px;
  border-radius: 5px;
`;

export default SkeletonHomePage;
