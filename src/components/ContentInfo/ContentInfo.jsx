import { Component } from "react";
import { getNews } from "../../services/getNews";
import { nanoid } from "nanoid";
class ContentInfo extends Component {
  state = {
    news: null,
    isLoading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ isLoading: true });
      setTimeout(()=>{getNews(this.props.searchText)
        .then((response) => response.json())
        .then((data) => this.setState({ news: data.articles }))
        .finally(this.setState(() => ({ isLoading: false })));},3000)
      
    }
  }
  render() {
    const { news, isLoading } = this.state;

    return (
      <>
        {isLoading && (
          <div className="text-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
        )}
        <ul>
          {news &&
            news.map((el) => {
              return <li key={nanoid()}>{el.title}</li>;
            })}
        </ul>
      </>
    );
  }
}

export default ContentInfo;
