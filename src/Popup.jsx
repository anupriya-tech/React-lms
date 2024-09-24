import React, { useState } from 'react';
import PopupButton from './PopupButton'; // Ensure PopupButton is correctly imported

export function Popup() {
  const [modalState, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState(!modalState);
  };

  return (
    <main>
      {modalState && (
        <>
          <div className='popup-overlay' onClick={toggleModal}></div>
          <div className='popupcontainer'>
            <button className='close' onClick={toggleModal} aria-label="Close popup">X</button>
            <div className="middle-profile">
              <div><b>A</b></div>
              <h2>anupriya gupta</h2>
              <p>anu.chowda@gmail.com</p>
              <p>8279338113</p>
              <br />
              <div className="middle-profile1 ">
                <i className="fa-regular fa-comment"></i> Chat support
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <br />
              <div className="middle-profile1">
                <i className="fa-solid fa-question"></i> Help Desk
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <br />
              <div className="middle-profile1">
                <i className="fa-solid fa-right-from-bracket"></i> Logout
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <br />
            </div>
          </div>
        </>
      )}
      <PopupButton toggleModal={toggleModal} />
    </main>
  );
}

export default Popup;
