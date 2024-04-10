import { useEffect } from "react";
// import { getNews } from "../../services/getNews";
import { useSelector, useDispatch } from "react-redux";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import ContentNews from "../ContentNews/ContentNews";
// import { useCustomContext } from "../../testContext/Context/Context";
import { getNewsSearchThunk, getNewsThunk } from "../../redux/news/thunk";

/*
  |==============================
  | STATE MACHINE
  |==============================
*/
// const STATUS = {
//   IDLE: "idle",
//   PENDING: "pending",
//   RESOLVED: "resolved",
//   REJECTED: "rejected",
// };
// let page = 1;
// class ContentInfo extends Component {
//   state = {
//     news: null,
//     error: "",
//     status: STATUS.IDLE,
//   };
//   componentDidUpdate(prevProps) {
//     if (prevProps.searchText !== this.props.searchText) {
//       this.setState({ status: STATUS.PENDING });
//       setTimeout(() => {
//         getNews(this.props.searchText)
//           .then((response) => response.json())
//           .then((data) => {
//             if (data.status === "ok") {
//               this.setState({ news: data.articles, status: STATUS.RESOLVED });
//             } else {
//               return Promise.reject(data.message);
//             }
//           })
//           .catch((error) => this.setState({ error, status: STATUS.RESOLVED }));
//       }, 1000);
//     }
//   }

//   onLoadMore = () => {
//     page += 1;
//     this.setState({ status: STATUS.PENDING });

//     return getNews(this.props.searchText, page)
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState((prevState) => ({
//           news: [...prevState.news, ...data.articles],
//           status: STATUS.RESOLVED,
//         }));
//       });
//   };
//   render() {
//     const { news, error, status } = this.state;
//     if (status === STATUS.PENDING) {
//       return <Loader />;
//     } else if (status === STATUS.RESOLVED) {
//       return <ContentNews news={news} onLoadMore={this.onLoadMore} />;
//     } else if (status === STATUS.REJECTED) {
//       return <ErrorMessage>{error}</ErrorMessage>;
//     }
//   }
// }

/*
  |==============================
  | COMPONENT ON HOOKS
  |==============================
*/

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
  //   const {news, setNews} = useCustomContext();
  //   const [error, setError] = useState("");
  //   const [status, setStatus] = useState(STATUS.IDLE);

  //   useEffect(() => {
  //   news&&setStatus(STATUS.RESOLVED)
  // },[news])

  //   useEffect(() => {
  //     if (searchText) {
  //       setStatus(STATUS.PENDING);

  //       setTimeout(() => {
  //         getNews(searchText)
  //           .then((response) => response.json())
  //           .then((data) => {
  //             if (data.status === "ok") {
  //               setNews(data.articles);
  //               setStatus(STATUS.RESOLVED);
  //             } else {
  //               return Promise.reject(data.message);
  //             }
  //           })
  //           .catch((error) => {
  //             setError(error);
  //             setStatus(STATUS.REJECTED);
  //           });

  //       }, 3000);
  //     }
  //   }, [searchText, setNews]);

  const onLoadMore = (e) => {
    e.preventDefault();
    page += 1;
    // setStatus(STATUS.PENDING);
    return dispatch(getNewsSearchThunk(searchText, page));
    // return getNews(searchText, page)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setNews(() => [...news, ...data.articles]);
    //     setStatus(STATUS.RESOLVED);
    //   })
    //   .catch((error) => {
    //     setError(error);
    //     setStatus(STATUS.REJECTED);
    //   });
  };

  if (status === STATUS.PENDING) {
    return <Loader />;
  } else if (status === STATUS.FULFILLED) {
    return <ContentNews news={news} onLoadMore={onLoadMore} />;
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
