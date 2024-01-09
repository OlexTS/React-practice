import { Component } from "react";
import { getNews } from "../../services/getNews";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import ContentNews from "../ContentNews/ContentNews";

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
}

class ContentInfo extends Component {
  state = {
    news: null,
    error: "",
    status: STATUS.IDLE,
  };
  componentDidUpdate(prevProps) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ status: STATUS.PENDING });
      setTimeout(() => {
        getNews(this.props.searchText)
          .then((response) => response.json())
          .then((data) => {
            if (data.status === "ok") {
              this.setState({ news: data.articles, status: STATUS.RESOLVED });
            } else {
              return Promise.reject(data.message);
            }
          })
          .catch((error) => this.setState({ error, status: STATUS.RESOLVED }));
      }, 1000);
    }
  }
  render() {
    const { news, error, status } = this.state;
    if (status === STATUS.PENDING) {
      return <Loader/>
    } else if (status === STATUS.RESOLVED) {
      return <ContentNews news={news} />
    } else if (status === STATUS.REJECTED) {
      return <ErrorMessage>{error}</ErrorMessage>;
    }
  }
}

// class ContentInfo extends Component {
//   state = {
//     news: null,
//     isLoading: false,
//     error: ''
//   };
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.searchText !== this.props.searchText) {
//       this.setState({ isLoading: true });
//       setTimeout(() => {
//         getNews(this.props.searchText)
//           .then((response) => response.json())
//           .then((data) => {
//             if (data.status === 'ok') {
//               this.setState({ news: data.articles })
//             }
//             else { return Promise.reject(data.message) }
//           }).catch(error=>this.setState({error}))
//           .finally(this.setState(() => ({ isLoading: false })));
//       }, 3000);
//     }
//   }
//   render() {
//     const { news, isLoading, error } = this.state;

//     return (
//       <>
//         {error && <ErrorMessage>{error}</ErrorMessage>}
//         {isLoading && (
//           <div className="text-center">
//             <div className="spinner-border" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           </div>
//         )}
//         <ul>
//           {news &&
//             news.map((el) => {
//               return <li key={nanoid()}>{el.title}</li>;
//             })}
//         </ul>
//       </>
//     );
//   }
// }

export default ContentInfo;
