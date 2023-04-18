import { Component } from 'react';
import { getNews } from '../services/getNews';
import { Loader } from '../Loader/Loader';
import { NewsItem } from '../NewsItem/NewsItem';
import { Error } from '../Error/Error';
import { NewsListWrapper } from './NewsList.styled';

export class NewsList extends Component {
  state = {
    news: null,
    error: '',
    status: '',
  };

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ status: 'pending' });
      getNews(this.props.value.trim())
        .then(response => response.json())
        .then(news => {
          if (news.status === 'error') {
            return Promise.reject(news.message);
          }
          this.setState({ news, status: 'resolved' });
          console.log(news);
        })
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
      // .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { status, news, error } = this.state;
    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <Error error={error} />;
    }

    if (status === 'resolved') {
      return (
        <NewsListWrapper>
          <NewsItem news={news} />
        </NewsListWrapper>
      );
    }
  }
}

// return (
//   <div>
//     {this.state.error && <h3>{this.state.error}</h3>}
//     {this.state.loading && (
//       <MutatingDots
//         height="100"
//         width="100"
//         color="#4fa94d"
//         secondaryColor="#4fa94d"
//         radius="12.5"
//         ariaLabel="mutating-dots-loading"
//         wrapperStyle={{}}
//         wrapperClass=""
//         visible={true}
//       />
//     )}
//     {this.state.news &&
//       this.state.news.articles.map(
//         ({ url, title, urlToImage, description }) => {
//           return (
//             <div key={url}>
//               <h2>{title}</h2>
//               <img src={urlToImage} alt={title} />
//               <p>{description}</p>
//             </div>
//           );
//         }
//       )}
//   </div>
// );
