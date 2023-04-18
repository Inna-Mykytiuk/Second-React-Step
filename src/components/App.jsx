import { Toaster } from 'react-hot-toast';

import { Layout } from './Layout/Layout';
import { AppWrapper } from './App.styled';
import { Search } from './Search/Search';
import { NewsList } from './NewsList/NewsList';
// import { useState, useEffect } from 'react';

export const App = () => {
  return (
    <Layout>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
        }}
      />
      <Search onSearch={handleSubmit} />
      <NewsList searchText={textSearch} />
      <AppWrapper></AppWrapper>
    </Layout>
  );
};
