import React, { useState } from "react";
import ModalBox from "./ModalBox.js";
import IframeModal from "./IframeModal";

const SingleItem = ({ item, editItem, filterMainBucket, handleHistory }) => {
  const [modalbox, setModalBox] = useState([null, false]);

  const [iframeBox, setiframeBox] = useState([null, false]);

  const handleEdit = (id) => {
    setModalBox([id, true]);
  };

  console.log(item);
  return (
    <div className="single__item">
      <p className="name">
        <span>Name:</span> {item.name}
      </p>
      <p className="link">
        <span>Link:</span> {item.link}
      </p>
      <div className="item__btns">
        <button onClick={() => handleEdit(item.id)} className="editbtn">
          <i className="fa-solid fa-pen"></i>
        </button>
        <button
          className="editbtn"
          onClick={() => filterMainBucket(item.id, item.type)}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <button
          className="editbtn"
          onClick={() => setiframeBox([item.link, true])}
        >
          <i className="fa-solid fa-circle-play"></i>
        </button>
        {modalbox[1] ? (
          <ModalBox
            editItem={editItem}
            modalbox={modalbox}
            setModalBox={setModalBox}
            itemType={item.type}
          />
        ) : null}
        {iframeBox[1] ? (
          <IframeModal
            itemName={item.name}
            itemType={item.type}
            iframeBox={iframeBox}
            setiframeBox={setiframeBox}
            handleHistory={handleHistory}
          />
        ) : null}
      </div>
    </div>
  );
};

export default SingleItem;
