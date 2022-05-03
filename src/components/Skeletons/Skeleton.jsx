import styled, { keyframes } from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import Container from 'components/UI/Container';

const Skeleton = ({ component }) => {
  const renderCard = () => (
    <Item>
      <Card>
        <CardThumb />
        <Title />
        <Text />
      </Card>
    </Item>
  );

  const renderHomePage = () => (
    <List>
      {renderCard()}
      {renderCard()}
      {renderCard()}
      {renderCard()}
      {renderCard()}
      {renderCard()}
    </List>
  );

  if (component === 'HomePage')
    return <Container>{renderHomePage()}</Container>;
  if (component === 'MovieDetailsPage')
    return <Container>DETAILS LOADING</Container>;
  if (component === 'MoviePage') return <Container>MOVIE LOADING</Container>;
  return 'gohome';
};

const loading = keyframes`
  from {
    background-color: #383838;
  }

  to {
    background-color: #222222;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: -8px;
`;

const Item = styled.li`
  margin-top: 8px;
  margin-left: 8px;
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

export default Skeleton;
