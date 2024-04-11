import { useEffect } from "react";
// import { getNews } from "../../services/getNews";
import { useSelector, useDispatch } from "react-redux";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import ContentNews from "../ContentNews/ContentNews";
// import { useCustomContext } from "../../testContext/Context/Context";
import { getNewsSearchThunk, getNewsThunk } from "../../redux/news/thunk";



const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  REJECTED: "rejected",
  FULFILLED: "fulfilled",
};
let page = 1;
const ContentInfo = ({ searchText }) => {
  const dispatch = useDispatch();
  const { news, status, error } = useSelector((state) => state.news);
  useEffect(() => {
    dispatch(getNewsThunk());
  }, [dispatch]);
  useEffect(() => {
    if (!searchText) return;
    dispatch(getNewsSearchThunk(searchText, page));
  }, [dispatch, searchText]);


  // const onLoadMore = (e) => {
  //   e.preventDefault();
  //   page += 1;
  //  console.log(page);
  //   return dispatch(getNewsSearchThunk(searchText, page));

  // };

  if (status === STATUS.PENDING) {
    return <Loader />;
  } else if (status === STATUS.FULFILLED) {
    return <ContentNews news={news} />;
  } else if (status === STATUS.REJECTED) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
};

/*
  |==============================
  | COMPONENT ON CLASSES
  |==============================
*/

// let page = 1
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
//     onLoadMore = () => {
//     page += 1;
//     this.setState({ isLoading: true });

//     return getNews(this.props.searchText, page)
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState((prevState) => ({
//           news: [...prevState.news, ...data.articles],
//           isLoading:false,
//         }));
//       }).catch(error=>this.setState({error: true}));
//   };
//   render() {
//     const { news, isLoading, error } = this.state;

//     return (
//       <>
//         {error && <ErrorMessage>{error}</ErrorMessage>}
//         {isLoading && <Loader/>}

//           {news &&
//             <ContentNews news={ news} onLoadMore={this.onLoadMore} />}

//       </>
//     );
//   }
// }

export default ContentInfo;
