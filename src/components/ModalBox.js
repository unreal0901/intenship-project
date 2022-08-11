import React from "react";
import "../styles/modalbox.css";

const ModalBox = ({ modalbox, setModalBox, editItem, itemType }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      name: e.target[0].value,
      link: e.target[1].value,
      type: itemType,
    };
    editItem(modalbox[0], newObj);
    setModalBox([null, false]);
  };

  return (
    <div className="modalbox">
      <form className="modalBoxForm" onSubmit={handleSubmit}>
        <div className="editinput">
          <label htmlFor="changename">Edit name</label>
          <input type="text" name="changename" />
        </div>
        <div className="editinput">
          <label htmlFor="changeLink">Edit Link</label>
          <input type="text" name="changeLink" />
        </div>
        <div className="btns">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default ModalBox;
