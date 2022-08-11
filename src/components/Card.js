import React from "react";
import CardItem from "./CardItem";
import CardForm from "./CardForm";

const Card = ({ cards, addCard }) => {
  return (
    <>
      <CardForm addCard={addCard} />
      <div className="card__list">
        {cards.map((item) => (
          <CardItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Card;
