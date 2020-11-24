import React from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import world from '../../data/worldMap.json';
import './Map.css';

function Map(props) {
  const layerProps = {
    onClick: ({ target }) => props.setClickedCountry(target.attributes.name.value),
  };

  return (
    <div className="map">
      <VectorMap {...world} layerProps={layerProps} />
    </div>
  );
}

export default Map;
