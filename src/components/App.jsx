import { nanoid } from "nanoid";
import { Component } from "react";
// import { Card } from './Card/Card'
import { Header } from "./Header/Header";
// import Counter from "./Counter/Counter";
import Modal from "./Modal/Modal";
import ToDoList from "./ToDoList/TodoList";
import FormLogin from "./FormLogin/FormLogin";

class App extends Component {
  state = {
    isOpenModal: false,
  };

 
  showModal = () => {
    this.setState({ isOpenModal: true });
  };
  closeModal = () => {
    this.setState({ isOpenModal: false });
  };
  createUser = (user) => {
    const newUser = {
      ...user,
      id: nanoid(),
    };
    console.log(newUser);
  };

  render() {
    return (
      <div className="container">
        <Header showModal={this.showModal} />
        {/* <Counter /> */}
        <ToDoList />
        {this.state.isOpenModal && (
          <Modal closeModal={this.closeModal}>
            <FormLogin
              createUser={this.createUser}
              closeModal={this.closeModal}
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
