import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import AccentButton from 'components/UI/AccentButton';

const Breadcumbers = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [from, setFrom] = useState(null);

  useEffect(() => {
    if (state?.from) {
      const { pathname, search } = state.from;
      setFrom(`${pathname}${search}`);
    }
  }, [state?.from]);

  const handleBack = () => navigate(from);

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
