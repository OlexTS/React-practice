import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header } from "../Header/Header";
import Modal from "../Modal/Modal";
import FormLogin from "../FormLogin/FormLogin";

const Layout = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
 

  const showModal = () => setIsOpenModal(true);

  const closeModal = () => setIsOpenModal(false);

  const createUser = (user) => {
    const newUser = {
      ...user,
      id: nanoid(),
    };
    console.log(newUser);
  };
  return (
    <div className="container">
      <ToastContainer position="top-right" autoClose={2000} />
      <Header showModal={showModal}/>
      <Outlet />
      {isOpenModal && (
        <Modal closeModal={closeModal}>
          <FormLogin createUser={createUser} closeModal={closeModal} />
        </Modal >
      )}
    </div>
  );
};

export default Layout;
