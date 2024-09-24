import React from 'react';
import logo from './logoimg.jpg'; // Import the image
import styles from './Project.module.css'; 
import './index.css'; 
import Popup from './Popup';
import PopupButton from './PopupButton';

function Header({ toggleModal }) {
  return (
    <div className='bg-white'>
      <div className="flex justify-between items-center p-4">
        <img src={logo} alt="Logo" className="h-14"/>
        <div className="flex items-center space-x-4">
          <span><i className="fa-solid fa-bell"></i></span>
          <span className="flex items-center space-x-2">
            <i className="fa-solid fa-a"></i>
            <span>Hi Anupriya</span>
            <Popup>
              <i className="fa-solid fa-angle-down"></i>
            </Popup>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
