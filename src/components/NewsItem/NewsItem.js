import { NewsItemCard, Image } from './NewsItem.styled';

// export const NewsItem = ({ news }) => {
//   return news.articles.map(({ url, title, urlToImage, description }) => {
//     return (
//       <NewsItemCard key={url}>
//         <h2>{title}</h2>
//         <Image src={urlToImage} alt={title} />
//         <p>{description}</p>
//       </NewsItemCard>
//     );
//   });
// };

export const NewsItem = ({ news }) => {
  return news.articles.map(({ url, title, abstract, multimedia }) => {
    return (
      <NewsItemCard key={url}>
        <h2>{title}</h2>
        <Image src={multimedia[0].url} alt={title} />
        <p>{abstract}</p>
      </NewsItemCard>
    );
  });
};

// data.results.map(item => {
//   console.log(item.title);
//   console.log(item.abstract);
//   console.log(item.url);
//   console.log(item.multimedia[0].url);
// });
