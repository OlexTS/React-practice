import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
// import NewsPage from "./pages/NewsPage";
// import TodoPage from "./pages/TodoPage";
import Layout from "./Layout/Layout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
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
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route
            path="todo"
            element={
              <PrivateRoute>
                <TodoPage />
              </PrivateRoute>
            }
          />
          <Route
            path="todo/:id"
            element={
              <PrivateRoute>
                <TodoDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="products"
            element={
              <PrivateRoute>
                <ProductsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <Suspense>
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            </Suspense>
          }
        />
        <Route
          path="/signUp"
          element={
            <Suspense>
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
