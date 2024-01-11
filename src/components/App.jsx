import { useState } from "react";
import { nanoid } from "nanoid";
// import { Card } from './Card/Card'
import { Header } from "./Header/Header";
// import Counter from "./Counter/Counter";
import Modal from "./Modal/Modal";
import ToDoList from "./ToDoList/TodoList";
import FormLogin from "./FormLogin/FormLogin";
import Search from "./Search/Search";
import ContentInfo from "./ContentInfo/ContentInfo";

const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchText, setSearchText] = useState("");

  const showModal = () => setIsOpenModal(true);

  const closeModal = () => setIsOpenModal(false);

  const createUser = (user) => {
    const newUser = {
      ...user,
      id: nanoid(),
    };
    console.log(newUser);
  };
  const handleSearch = (searchText) => setSearchText(searchText);

  return (
    <div className="container">
      <Header showModal={showModal} />
      <Search handleSearch={handleSearch} />
      <ContentInfo searchText={searchText} />
      {/* <Counter /> */}
      <ToDoList />
      {isOpenModal && (
        <Modal closeModal={closeModal}>
          <FormLogin createUser={createUser} closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};
// class App extends Component {
//   state = {
//     isOpenModal: false,
//     searchText: ''
//   };

//   showModal = () => {
//     this.setState({ isOpenModal: true });
//   };
//   closeModal = () => {
//     this.setState({ isOpenModal: false });
//   };
//   createUser = (user) => {
//     const newUser = {
//       ...user,
//       id: nanoid(),
//     };
//     console.log(newUser);
//   };
//   handleSearch = (searchText) => {
//     this.setState({searchText})
//   }

//   render() {
//     return (
//       <div className="container">
//         <Header showModal={this.showModal} />
//         <Search handleSearch={this.handleSearch} />
//         <ContentInfo searchText={this.state.searchText} />
//         {/* <Counter /> */}
//         {/* <ToDoList />
//         {this.state.isOpenModal && (
//           <Modal closeModal={this.closeModal}>
//             <FormLogin
//               createUser={this.createUser}
//               closeModal={this.closeModal}
//             />
//           </Modal>
//         )} */}
//       </div>
//     );
//   }
// }

export default App;
