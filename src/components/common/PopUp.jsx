import React from 'react';
import './PopUp.css';
import { regions } from '../../data/awsRegions';
import { v4 as uuidv4 } from 'uuid';

function PopUp(props) {
  function handleClick(event) {
    props.setClickedRegion(event.target.id);
  }

  return (
    <div
      style={{ top: props.mousePosition.y + 20, left: props.mousePosition.x }}
      className="card-style popup-container popup"
    >
      <h3 className="popup">{props.clickedCountry.name}</h3>
      {regions[props.clickedCountry.code].map((region) => {
        return (
          <button
            key={uuidv4()}
            id={region.name}
            onClick={handleClick}
            className="popup"
          >
            {region.name}
          </button>
        );
      })}
    </div>
  );
}

export default PopUp;
