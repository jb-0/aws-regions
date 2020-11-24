import React, { useState } from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import PopUp from '../common/PopUp'
import world from '../../data/worldMap.json';
import './Map.css';

function Map(props) {
  const [mousePosition, setMousePosition] = useState();
  const [showPopup, setShowPopup] = useState(false);

  const layerProps = {
    onClick: ({ target }) => props.setClickedCountry(target.attributes.name.value)
  };

  function onClick(event) {
    setMousePosition({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
    setShowPopup(true);
  }

  return (
    <div className="map" onClick={onClick}>
      <VectorMap {...world} layerProps={layerProps} />
      {showPopup && <PopUp mousePosition={mousePosition}/>}
    </div>
  );
}

export default Map;
