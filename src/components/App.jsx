import React from "react";
// import { Card } from './Card/Card'
import { Header } from "./Header/Header";
// import Counter from "./Counter/Counter";
import { Component } from "react";
import Modal from "./Modal/Modal";

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
  render() {
    return (
      <div className="container">
        <Header showModal={this.showModal} />
        {/* <Counter /> */}

        {this.state.isOpenModal && <Modal closeModal={this.closeModal} >Hello I'm Modal</Modal>}
      </div>
    );
  }
}

export default App;
