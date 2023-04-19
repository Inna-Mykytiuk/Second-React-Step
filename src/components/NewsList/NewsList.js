// import { getNews } from '../services/getNews';
// import { Loader } from '../Loader/Loader';
import { NewsItem } from '../NewsItem/NewsItem';
// import { Error } from '../Error/Error';
import { NewsListWrapper } from './NewsList.styled';

export const NewsItemList = ({ newsItems }) => {
  return (
    <NewsListWrapper>
      {newsItems.map(item => (
        <NewsItem
          key={item.web_url}
          title={item.headline.main}
          image={item.multimedia?.[0]?.url}
          description={item.abstract}
          link={item.web_url}
          pubDate={new Date(item.pub_date).toLocaleDateString('en-US', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
          })}
        />
      ))}
    </NewsListWrapper>
  );
};
