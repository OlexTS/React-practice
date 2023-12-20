import React from "react";
import data from "../../data.json";
import { Head } from "../Head/Head";
import clsx from "clsx";
import css from "./Card.module.css";

export const Card = ({ isOnline }) => {
  return data.map((card) => (
    <div
      key={card.id}
      // className={
      //   !isOnline ? `${css.main} ${css.red}` : `${css.main} ${css.blue}`
      // }
      // className={clsx(css.main, !isOnline ? css.red:css.blue)}
      className={clsx(css.main, {[css.red]: isOnline, [css.blue]: !isOnline}) }
    >
      <img src={card.url} className={css.image} alt={card.title} />
      <div>
        <h5>Card title: {card.title}</h5>
        <Head clas="card-title" id={card.id}>
          <p>Hello! We're children</p>
          <p>YES!</p>
        </Head>
        <a href="http">Go somewhere</a>
      </div>
    </div>
  ));
};

// BOOTSTRAP
// export const Card = () => {
//   return data.map((card) => (
//     <div key={card.id} className="card mx-auto my-5" style={{ width: "18rem" }}>
//       <img src={card.url} className="card-img-top" alt={card.title} />
//       <div className="card-body">
//         <h5 className={"card-title"}>Card title: {card.title}</h5>
//         <Head clas="card-title" id={card.id}><p>Hello! We're children</p><p>YES!</p></Head>
//         <a href="http" className="btn btn-primary">
//           Go somewhere
//         </a>
//       </div>
//     </div>
//   ));
// };
