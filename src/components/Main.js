import React, { useState } from "react";
import Card from "./Card";

const Main = () => {
  const cardData = [
    { id: 1, name: "anime", type: "entertainment", link: "sadasdas" },
    { id: 2, name: "calculus", type: "educational", link: "asdasda" },
  ];

  const addCard = (newCard) => {
    console.log(newCard);
    setCards((prev) => [newCard, ...cardData]);
  };

  const [cards, setCards] = useState(cardData);
  return <Card addCard={addCard} cards={cards} />;
};

export default Main;
