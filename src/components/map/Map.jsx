import React, { useState } from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import PopUp from '../common/PopUp';
import world from '../../data/worldMap.json';
import './Map.css';

function Map(props) {
  const [mousePosition, setMousePosition] = useState();
  const [showPopup, setShowPopup] = useState(false);

  // For each layer of the map add an onclick function that sets the clicked country state to the
  // country name
  const layerProps = {
    onClick: ({ target }) =>
      props.setClickedCountry({
        name: target.attributes.name.value,
        code: target.attributes.id.value,
      }),
  };

  // If the user clicks anywhere in the map div store the point in time mouse coordinates and show
  // the popup component
  function onClick(event) {
    setMousePosition({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
    });
    setShowPopup(true);
  }

  return (
    <div className="map" onClick={onClick}>
      <VectorMap {...world} layerProps={layerProps} />
      {showPopup && (
        <PopUp
          mousePosition={mousePosition}
          clickedCountry={props.clickedCountry}
          clickedRegion={props.clickedRegion}
          setClickedRegion={props.setClickedRegion}
        />
      )}
    </div>
  );
}

export default Map;
