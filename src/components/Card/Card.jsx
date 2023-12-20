import React from "react";
import data from "../../data.json";
import { Head } from "../Head/Head";

export const Card = () => {
  return data.map((card) => (
    <div key={card.id} className="card mx-auto my-5" style={{ width: "18rem" }}>
      <img src={card.url} className="card-img-top" alt={card.title} />
      <div className="card-body">
        <h5 className={"card-title"}>Card title: {card.title}</h5>
        <Head clas="card-title" id={card.id} />
        <a href="http" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  ));
};
