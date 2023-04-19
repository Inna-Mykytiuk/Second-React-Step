import { NewsItemCard, Image, Content } from './NewsItem.styled';

export const NewsItem = ({ title, image, description, link, pubDate }) => {
  return (
    <NewsItemCard>
      <div>
        {image?.length > 0 && (
          <Image src={`https://www.nytimes.com/${image}`} alt={title} />
        )}
        <h2>{title}</h2>
      </div>

      <Content>
        <p>{description}</p>
        <p>{pubDate}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </Content>
    </NewsItemCard>
  );
};
