// import React, { useState } from 'react';

// export const App = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [newsItems, setNewsItems] = useState([]);

//   function handleSearch(e) {
//     e.preventDefault();
//     getNews(searchTerm);
//     setSearchTerm('');
//   }

//   async function getNews(term) {
//     const encodedTerm = encodeURIComponent(term);
//     const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodedTerm}&api-key=8N1AbWqRpnQWeV5VdRc9LcAyq1NAOG3p`;
//     try {
//       const response = await fetch(URL);
//       const data = await response.json();
//       setNewsItems(data.response.docs);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <div className="App">
//       <h1>News Search App</h1>
//       <SearchBar
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//         handleSearch={handleSearch}
//       />
//       <NewsItemList newsItems={newsItems} />
//     </div>
//   );
// };

// function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {
//   return (
//     <form onSubmit={handleSearch}>
//       <input
//         type="text"
//         placeholder="Search for news"
//         value={searchTerm}
//         onChange={e => setSearchTerm(e.target.value)}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// }

// function NewsItem({ title, image, description, link }) {
//   return (
//     <div className="news-item">
//       {image?.length > 0 && (
//         <img src={`https://www.nytimes.com/${image}`} alt={title} />
//       )}
//       <h2>{title}</h2>
//       <p>{description}</p>
//       <a href={link} target="_blank" rel="noopener noreferrer">
//         Read more
//       </a>
//     </div>
//   );
// }

// function NewsItemList({ newsItems }) {
//   return (
//     <div className="news-items">
//       {newsItems.map(item => (
//         <NewsItem
//           key={item.web_url}
//           title={item.headline.main}
//           image={item.multimedia?.[0]?.url}
//           description={item.abstract}
//           link={item.web_url}
//         />
//       ))}
//     </div>
//   );
// }

//----------2222

// function NewsItemList({ newsItems }) {
//   const totalResults = newsItems.length;
//   const startIndex = newsItems.length > 0 ? newsItems[0].index + 1 : 0;
//   const endIndex =
//     newsItems.length > 0 ? newsItems[newsItems.length - 1].index + 1 : 0;

//   return (
//     <div className="news-items">
//       <p>
//         Showing {startIndex} to {endIndex} of {totalResults} results
//       </p>
//       {newsItems.map(item => (
//         <NewsItem
//           key={item.web_url}
//           title={item.headline.main}
//           image={item.multimedia?.[0]?.url}
//           description={item.abstract}
//           link={item.web_url}
//         />
//       ))}
//     </div>
//   );
// }

//----------3333
// import React, { useState } from 'react';

// export const App = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [newsItems, setNewsItems] = useState([]);

//   function handleSearch(e) {
//     e.preventDefault();
//     getNews(searchTerm);
//     setSearchTerm('');
//   }

//   async function getNews(term) {
//     const encodedTerm = encodeURIComponent(term);
//     const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodedTerm}&api-key=8N1AbWqRpnQWeV5VdRc9LcAyq1NAOG3p`;
//     try {
//       const response = await fetch(URL);
//       const data = await response.json();
//       setNewsItems(data.response.docs);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <div className="App">
//       <h1>News Search App</h1>
//       <SearchBar
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//         handleSearch={handleSearch}
//       />
//       {newsItems.length > 0 && <p>Total articles found: {newsItems.length}</p>}
//       <NewsItemList newsItems={newsItems} />
//     </div>
//   );
// };

// function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {
//   return (
//     <form onSubmit={handleSearch}>
//       <input
//         type="text"
//         placeholder="Search for news"
//         value={searchTerm}
//         onChange={e => setSearchTerm(e.target.value)}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// }

// function NewsItem({ title, image, description, link }) {
//   return (
//     <div className="news-item">
//       {image?.length > 0 && (
//         <img src={`https://www.nytimes.com/${image}`} alt={title} />
//       )}
//       <h2>{title}</h2>
//       <p>{description}</p>
//       <a href={link} target="_blank" rel="noopener noreferrer">
//         Read more
//       </a>
//     </div>
//   );
// }

// function NewsItemList({ newsItems }) {
//   return (
//     <div className="news-items">
//       {newsItems.map(item => (
//         <NewsItem
//           key={item.web_url}
//           title={item.headline.main}
//           image={item.multimedia?.[0]?.url}
//           description={item.abstract}
//           link={item.web_url}
//         />
//       ))}
//     </div>
//   );
// }

//----------4444
import React, { useState } from 'react';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newsItems, setNewsItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getNews(term) {
    setIsLoading(true);
    const encodedTerm = encodeURIComponent(term);
    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodedTerm}&api-key=8N1AbWqRpnQWeV5VdRc9LcAyq1NAOG3p`;
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setNewsItems(data.response.docs);
      setDisplayedItems(data.response.docs.slice(0, 4));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
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
    <div className="App">
      <h1>News Search App</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />

      {newsItems.length > 0 && <p>Total articles found: {newsItems.length}</p>}
      <NewsItemList newsItems={displayedItems} />
      {isLoading && <Loader />}
      {displayedItems.length < newsItems.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for news"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

function NewsItem({ title, image, description, link }) {
  return (
    <div className="news-item">
      {image?.length > 0 && (
        <img src={`https://www.nytimes.com/${image}`} alt={title} />
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
}

function NewsItemList({ newsItems }) {
  return (
    <div className="news-items">
      {newsItems.map(item => (
        <NewsItem
          key={item.web_url}
          title={item.headline.main}
          image={item.multimedia?.[0]?.url}
          description={item.abstract}
          link={item.web_url}
        />
      ))}
    </div>
  );
}
