import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import HomePage from "./pages/HomePage";
// import NewsPage from "./pages/NewsPage";
// import TodoPage from "./pages/TodoPage";
import Layout from "./Layout/Layout";
// import LoginPage from "./pages/LoginPage";
// import TodoDetails from "./ToDo/TodoDetails";
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

const TodoDetails = lazy(() => import("./ToDo/TodoDetails"));
const TodoPage = lazy(() => import("./pages/TodoPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ProductsPage = lazy(()=> import('./pages/ProductsPage'))

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="todo/:id" element={<TodoDetails />} />
        <Route path="products" element={<ProductsPage/>} />
      </Route>
      <Route
        path="/login"
        element={
          <Suspense>
            <LoginPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
