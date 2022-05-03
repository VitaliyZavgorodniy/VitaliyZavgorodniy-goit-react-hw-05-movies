import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    const query = value.trim();
    if (query) {
      onSearch(value);
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">search</button>
    </form>
  );
};

export default SearchForm;
