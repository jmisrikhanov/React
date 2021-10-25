import React from "react";
import { data } from "../../helpers/tourData";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      {data.map((card) => {
        return (
          <div className="cards" key={card.id}>
            <div className="title">
              <h2>{card.title}</h2>
            </div>
            <img src={card.image} alt={card.title} />
            <div className="card-over">
              <p>{card.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

// <div className="card-container">
//   <div className="cards">
//     <div className="title">
//       <h2>{data[0].title}</h2>
//     </div>
//   </div>
//   <img src={data[0].image} alt="" />
//   <div className="card-over">
//     <p>{data[0].desc}</p>
//   </div>
// </div>;
