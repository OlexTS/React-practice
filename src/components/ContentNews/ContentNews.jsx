import { nanoid } from "nanoid";

const ContentNews = ({news, onLoadMore}) => {
    return <ul>
          {news.map((el) => {
            return <li key={nanoid()}>{el.title}</li>;
          })}
        <button  onClick={onLoadMore}>Load more</button>
        </ul>
}
export default ContentNews