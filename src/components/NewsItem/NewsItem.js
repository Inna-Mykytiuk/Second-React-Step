import { NewsItemCard, Image } from './NewsItem.styled';

export const NewsItem = ({ news }) => {
  return news.articles.map(({ url, title, urlToImage, description }) => {
    return (
      <NewsItemCard key={url}>
        <h2>{title}</h2>
        <Image src={urlToImage} alt={title} />
        <p>{description}</p>
      </NewsItemCard>
    );
  });
};
