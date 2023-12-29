import React from "react";
// import { Card } from './Card/Card'
import { Header } from "./Header/Header";
import { Counter } from "./Counter/Counter";

const App = () => {
  return (
    // <Card isOnline/>
    <div className="container">
      <Header />
      <Counter />
    </div>
  );
};

export default App;
