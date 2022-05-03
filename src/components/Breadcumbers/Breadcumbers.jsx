import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import AccentButton from 'components/UI/AccentButton';

const Breadcumbers = () => {
  // const history = useHistory();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <AccentButton title="Back" onClick={handleBack} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export default Breadcumbers;
