import React, { useState } from 'react';
import { Loader } from './Loader/Loader';
import { SearchBar } from './Search/Search';
import { NewsItemList } from './NewsList/NewsList';
import { AppWrapper, TextReport, Button } from './App.styled';

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newsItems, setNewsItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalidSearch, setIsInvalidSearch] = useState(false);

  async function getNews(term) {
    if (!term.trim()) {
      console.log('Invalid search query');
      setIsInvalidSearch(true);
      setIsLoading(false);
      return;
    }
    setIsInvalidSearch(false);
    setIsLoading(true);
    const encodedTerm = encodeURIComponent(term);
    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodedTerm}&api-key=8N1AbWqRpnQWeV5VdRc9LcAyq1NAOG3p`;
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setNewsItems(data.response.docs);
      setDisplayedItems(data.response.docs.slice(0, 4));
      setIsLoading(false);
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
        <TextReport>Total articles found: {newsItems.length}</TextReport>
      )}

      {isInvalidSearch && (
        <TextReport>
          Invalid search query. Please enter a valid search term.
        </TextReport>
      )}

      <NewsItemList newsItems={displayedItems} />
      {isLoading && <Loader />}
      {displayedItems.length < newsItems.length && (
        <Button onClick={handleLoadMore}>Load More</Button>
      )}
    </AppWrapper>
  );
};
