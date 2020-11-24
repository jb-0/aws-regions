import React from 'react';
import './PopUp.css';

function PopUp(props) {
  console.log(props.x);
  return (
    <div
      style={{ top: props.mousePosition.x, left: props.mousePosition.y }}
      className="popup-container"
    >
      Popup Container
    </div>
  );
}

export default PopUp;
