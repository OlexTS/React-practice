import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import TodoPage from "./pages/TodoPage";
import Layout from "./Layout/Layout";
// import { useState } from "react";
// import { nanoid } from "nanoid";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// // import { Card } from './Card/Card'
// import { Header } from "./Header/Header";
// // import Counter from "./Counter/Counter";
// import Modal from "./Modal/Modal";
// // import ToDoList from "./ToDoList/TodoList";
// import FormLogin from "./FormLogin/FormLogin";
// import Search from "./Search/Search";
// import ContentInfo from "./ContentInfo/ContentInfo";
// import TestUseMemo from "./TestUseMemo/TestUseMemo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="todo" element={<TodoPage />} />
      </Route>
    </Routes>
  );
};

export default App;
