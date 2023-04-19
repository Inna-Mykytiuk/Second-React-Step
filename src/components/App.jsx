import React, { useState } from 'react';
import { Loader } from './Loader/Loader';
import { SearchBar } from './Search/Search';
import { NewsItemList } from './NewsList/NewsList';
import { AppWrapper, TextReportG, TextReportB, Button } from './App.styled';
import axios from 'axios';

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newsItems, setNewsItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalidSearch, setIsInvalidSearch] = useState(false);

  async function getNews(term) {
    if (!term.trim()) {
      setIsInvalidSearch(true);
      setIsLoading(false);
      return;
    }
    setIsInvalidSearch(false);
    setIsLoading(true);
    const encodedTerm = encodeURIComponent(term);
    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodedTerm}&api-key=8N1AbWqRpnQWeV5VdRc9LcAyq1NAOG3p`;
    try {
      const response = await axios.get(URL);
      const data = response.data;
      // setNewsItems(data.response.docs);
      // setDisplayedItems(data.response.docs.slice(0, 4));
      setIsLoading(false);
      const sortedNewsItems = data.response.docs.sort((a, b) =>
        b.pub_date.localeCompare(a.pub_date)
      );
      setNewsItems(sortedNewsItems);
      setDisplayedItems(sortedNewsItems.slice(0, 4));
      return;
    } catch (error) {
      console.error(error);
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    getNews(searchTerm);
    setSearchTerm('');
  }

  function handleLoadMore() {
    const currentlyDisplayed = displayedItems.length;
    const nextIndex = currentlyDisplayed + 4;
    setDisplayedItems([
      ...displayedItems,
      ...newsItems.slice(currentlyDisplayed, nextIndex),
    ]);
  }

  return (
    <AppWrapper>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />

      {newsItems.length > 0 && (
        <TextReportG>Total articles found: {newsItems.length}</TextReportG>
      )}

      {isInvalidSearch && (
        <TextReportB>
          Invalid search query. Please enter a valid search term.
        </TextReportB>
      )}

      <NewsItemList newsItems={displayedItems} />
      {isLoading && <Loader />}
      {displayedItems.length < newsItems.length && (
        <Button onClick={handleLoadMore}>Load More</Button>
      )}
    </AppWrapper>
  );
};

// try {
//         const response = await axios.get(URL);
//         const data = response.data;
//         const sortedNewsItems = data.response.docs.sort((a, b) =>
//           b.pub_date.localeCompare(a.pub_date)
//         );
//         setNewsItems(sortedNewsItems);
//         setDisplayedItems(sortedNewsItems.slice(0, 4));
//         setIsLoading(false);
//       }
