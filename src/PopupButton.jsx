import React from 'react';

function PopupButton({ toggleModal }) {
  return (
    <button onClick={toggleModal} >
      <i className="fa-solid fa-angle-down"></i>
    </button>
  );
}

export default PopupButton;
