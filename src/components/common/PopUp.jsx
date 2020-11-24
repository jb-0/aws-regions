import React from 'react';
import './PopUp.css';
import regions from '../../data/awsRegions';

function PopUp(props) {
  function handleClick(event) {
    props.setClickedRegion(event.target.id);
  }

  return (
    <div
      style={{ top: props.mousePosition.y + 20, left: props.mousePosition.x }}
      className="popup-container"
    >
      <h3>{props.clickedCountry.name}</h3>
      {regions[props.clickedCountry.code].map((region) => {
        return <p id={region.name} onClick={handleClick}>{`${region.niceName} - ${region.name}`}</p>;
      })}
    </div>
  );
}

export default PopUp;
