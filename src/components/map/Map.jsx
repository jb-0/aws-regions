import React from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import world from '../../data/worldMap.json';
import './Map.css';

function Map() {
  return (
    <div className="map">
      <VectorMap {...world} />
    </div>
  );
}

export default Map;
