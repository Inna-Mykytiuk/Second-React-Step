import { SearchWrapper, SearchBtn } from './Search.styled';
// import { toast } from 'react-hot-toast';

import { FiSearch } from 'react-icons/fi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  // const notify = () =>
  //   toast.warn('Please enter a new search term.', {
  //     position: 'top-right',
  //     autoClose: 1500,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: 'light',
  //   });

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
        <SearchBtn type="submit" onClick={handleSearch}>
          <FiSearch size="18" />
          Search
        </SearchBtn>
      </form>
      <ToastContainer />
    </SearchWrapper>
  );
};
