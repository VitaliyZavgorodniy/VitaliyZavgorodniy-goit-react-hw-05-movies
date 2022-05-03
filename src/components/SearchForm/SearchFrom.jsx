import { useState } from 'react';
import styled from 'styled-components';

import AccentButton from 'components/UI/AccentButton';

const SearchForm = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    const query = value.trim();
    if (query) {
      onSearch(value);
      setValue('');
    }
  };

  return (
    <Form onSubmit={handleSearch}>
      <Input
        value={value}
        placeholder="Search for movies"
        onChange={(e) => setValue(e.target.value)}
      />
      <AccentButton title="Find" type="submit" />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  margin-right: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${(p) => p.theme.accentColor};
  color: ${(p) => p.theme.mainColor};
`;

export default SearchForm;
