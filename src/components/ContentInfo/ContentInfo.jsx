import { Component } from "react";
import { getNews } from "../../services/getNews";
import { nanoid } from "nanoid";
class ContentInfo extends Component {
  state = {
    news: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      getNews(this.props.searchText)
        .then((response) => response.json())
        .then((data) => this.setState({ news: data.articles }));
    }
  }
  render() {
    const { news } = this.state;

    return (
      <>
        <ul>
          {news &&
            news.map((el) => {
              return (
                <li key={nanoid()}>
                  {el.title}
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}

export default ContentInfo;
