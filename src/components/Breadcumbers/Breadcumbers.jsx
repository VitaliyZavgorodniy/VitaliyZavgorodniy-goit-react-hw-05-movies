import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Breadcumbers = () => {
  // const history = useHistory();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Btn onClick={handleBack}>Back</Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Btn = styled.button`
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(p) => p.theme.altBG};
  color: ${(p) => p.theme.mainColor};
  font-family: ${(p) => p.theme.mainFF}, sans-serif;
  transition: background-color ${(p) => p.theme.transition},
    color ${(p) => p.theme.transition};

  &:hover {
    cursor: pointer;
    /* color: ${(p) => p.theme.accentColor}; */
    background-color: ${(p) => p.theme.lightBG};
  }
`;

export default Breadcumbers;
