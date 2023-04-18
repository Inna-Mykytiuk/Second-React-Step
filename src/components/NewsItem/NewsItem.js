import { NewsItemCard, Image } from './NewsItem.styled';

export const NewsItem = ({ title, image, description, link }) => {
  return (
    <NewsItemCard>
      {image?.length > 0 && (
        <Image src={`https://www.nytimes.com/${image}`} alt={title} />
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </NewsItemCard>
  );
};
