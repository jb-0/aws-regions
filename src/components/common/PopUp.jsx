import React from 'react';
import './PopUp.css';

function PopUp(props) {
  
  return (
    <div
      style={{ top: props.mousePosition.y, left: props.mousePosition.x }}
      className="popup-container"
    >
      Popup Container
    </div>
  );
}

export default PopUp;
