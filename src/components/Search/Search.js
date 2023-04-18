import { SearchWrapper } from './Search.styled';
// import { toast } from 'react-hot-toast';

import { FiSearch } from 'react-icons/fi';

export const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <SearchWrapper>
      <h1>News Search App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search ..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <FiSearch size="18" />
          Search
        </button>
      </form>
    </SearchWrapper>
  );
};
