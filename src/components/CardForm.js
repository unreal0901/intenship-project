import React, { useState } from "react";
import Bucket from "./Bucket";
// import cloneDeep from "lodash/cloneDeep";

const CardForm = ({ addCard }) => {
  const [buckets, setBucket] = useState({});
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("");

  const filterBucket = (id, type) => {
    setBucket((prev) => {
      const tempArray = prev[type];
      console.log(tempArray);
      const newArray = tempArray.filter((item) => item.id !== id);
      const newObj = {
        [type]: newArray,
      };
      return { ...prev, ...newObj };
    });
  };

  const addInBucket = (newValues) => {
    if (buckets.hasOwnProperty(newValues.type))
      setBucket((prev) => {
        const tempArray = [...prev[newValues.type]];
        tempArray.push(newValues);
        const newObj = { [newValues.type]: tempArray };
        return { ...prev, ...newObj };
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.random().toString();
    if (!buckets.hasOwnProperty(e.target[2].value)) {
      const obj = {
        [e.target[2].value]: [],
      };

      obj[e.target[2].value].push({
        id: id,
        name: e.target[0].value,
        link: e.target[1].value,
        type: e.target[2].value,
      });

      setBucket((prev) => {
        const newObj = { ...prev, ...obj };
        return newObj;
      });
    } else {
      const obj = {
        [e.target[2].value]: [...buckets[e.target[2].value]].concat({
          id: id,
          name: e.target[0].value,
          link: e.target[1].value,
          type: e.target[2].value,
        }),
      };

      setBucket((prev) => {
        const newObj = { ...prev, ...obj };
        return newObj;
      });
    }
    const newCardData = {
      id: id,
      name: e.target[0].value,
      link: e.target[1].value,
      type: e.target[2].value,
    };
    addCard(newCardData);
    setName("");
    setLink("");
    setType("");
  };
  return (
    <>
      <form className="add__card" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            type="text"
            value={name}
            required
            name="name"
            placeholder="enter the name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="link">
          <input
            type="text"
            value={link}
            required
            name="link"
            placeholder="enter the link"
            onChange={(e) => setLink(e.target.value)}
          />
        </label>
        <label htmlFor="type">
          <input
            type="text"
            value={type}
            required
            name="type"
            placeholder="enter the type"
            onChange={(e) => setType(e.target.value)}
          />
        </label>
        <div className="card__btn">
          <button type="submit">Add</button>
        </div>
      </form>
      <Bucket
        buckets={buckets}
        filterBucket={filterBucket}
        addInBucket={addInBucket}
      />
    </>
  );
};

export default CardForm;
