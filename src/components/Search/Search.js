import { SearchWrapper } from './Search.styled';
// import { toast } from 'react-hot-toast';

export const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <SearchWrapper>
      <h1>News Search App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for news"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </SearchWrapper>
  );
};
