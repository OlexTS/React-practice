import { nanoid } from "nanoid";

const ContentNews = ({news}) => {
    return <ul>
          {news.map((el) => {
            return <li key={nanoid()}>{el.title}</li>;
          })}
        </ul>
}
export default ContentNews